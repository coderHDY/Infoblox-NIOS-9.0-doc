/**
 * Minimal ADF (Atlas Doc Format) → Markdown converter for Confluence pages.
 * Covers common blocks; unknown nodes fall back to plain text extraction.
 */

function escapeMd(text) {
  return text.replace(/([\\`*_{}[\]()#+.!-])/g, "\\$1");
}

function textInline(node, ctx) {
  if (!node) return "";
  if (node.type === "text") {
    let t = (node.text ?? "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    if (node.marks?.length) {
      for (const mark of node.marks) {
        switch (mark.type) {
          case "strong":
            t = `**${t}**`;
            break;
          case "em":
            t = `*${t}*`;
            break;
          case "code":
            t = `\`${t}\``;
            break;
          case "link": {
            const href = mark.attrs?.href ?? "";
            const mapped = ctx.linkMap?.[href] ?? href;
            t = `[${t}](${mapped})`;
            break;
          }
          case "strike":
            t = `~~${t}~~`;
            break;
          case "subsup":
            if (mark.attrs?.type === "sub") t = `<sub>${t}</sub>`;
            if (mark.attrs?.type === "sup") t = `<sup>${t}</sup>`;
            break;
          default:
            break;
        }
      }
    }
    return t;
  }
  if (node.type === "hardBreak") return "  \n";
  if (node.type === "emoji") return node.attrs?.text ?? "";
  if (node.type === "inlineCard") {
    const url = node.attrs?.url ?? "";
    return `[${url}](${ctx.linkMap?.[url] ?? url})`;
  }
  if (node.type === "mention") return `@${node.attrs?.text ?? "user"}`;
  if (node.content?.length) return node.content.map((c) => textInline(c, ctx)).join("");
  return "";
}

function blockToMd(node, ctx, depth = 0) {
  if (!node) return "";
  const inline = (n) => textInline(n, ctx);
  const blocks = (nodes) => (nodes ?? []).map((n) => blockToMd(n, ctx, depth)).join("\n\n");

  switch (node.type) {
    case "doc":
      return blocks(node.content).trim();
    case "paragraph":
      return inline(node).trim() || "";
    case "heading": {
      const level = Math.min(6, Number(node.attrs?.level ?? 1));
      return `${"#".repeat(level)} ${inline(node)}`.trim();
    }
    case "bulletList":
      return (node.content ?? [])
        .map((li) => {
          const body = blocks(li.content).replace(/\n/g, "\n  ");
          return `- ${body}`;
        })
        .join("\n");
    case "orderedList":
      return (node.content ?? [])
        .map((li, i) => {
          const body = blocks(li.content).replace(/\n/g, "\n   ");
          return `${i + 1}. ${body}`;
        })
        .join("\n");
    case "listItem":
      return blocks(node.content);
    case "codeBlock": {
      const lang = node.attrs?.language ?? "";
      const code = (node.content ?? []).map((c) => c.text ?? "").join("");
      return "```" + lang + "\n" + code + "\n```";
    }
    case "blockquote":
      return blocks(node.content)
        .split("\n")
        .map((l) => `> ${l}`)
        .join("\n");
    case "rule":
      return "---";
    case "panel": {
      const title = node.attrs?.panelType ?? "note";
      return `> **${title}**\n>\n${blocks(node.content)
        .split("\n")
        .map((l) => `> ${l}`)
        .join("\n")}`;
    }
    case "expand": {
      const title = node.attrs?.title ?? "Details";
      return `<details>\n<summary>${title}</summary>\n\n${blocks(node.content)}\n\n</details>`;
    }
    case "table": {
      const rows = node.content ?? [];
      const lines = [];
      for (let ri = 0; ri < rows.length; ri++) {
        const cells = (rows[ri].content ?? []).map((cell) =>
          blocks(cell.content).replace(/\|/g, "\\|").replace(/\n/g, " ")
        );
        lines.push(`| ${cells.join(" | ")} |`);
        if (ri === 0) lines.push(`| ${cells.map(() => "---").join(" | ")} |`);
      }
      return lines.join("\n");
    }
    case "tableRow":
    case "tableCell":
    case "tableHeader":
      return blocks(node.content);
    case "mediaSingle":
    case "mediaGroup": {
      const media = findMedia(node);
      if (!media?.url && !media?.id) return `*[image: ${media?.alt ?? "media"}]*`;
      const alt = media.alt ?? "image";
      const local = ctx.assetMap?.[media.url] ?? ctx.assetMap?.[media.id];
      const src = local ?? media.url;
      return local || media.url ? `![${alt}](${src})` : `*[image: ${alt}]*`;
    }
    case "media": {
      const id = node.attrs?.id ?? "";
      const url = node.attrs?.url ?? id;
      const alt = node.attrs?.alt ?? "image";
      const local = ctx.assetMap?.[url] ?? ctx.assetMap?.[id];
      return local ? `![${alt}](${local})` : `*[image: ${alt}]*`;
    }
    case "placeholder":
      return "";
    case "layoutSection":
    case "layoutColumn":
      return blocks(node.content);
    case "extension":
    case "bodiedExtension":
    case "inlineExtension":
      return blocks(node.content) || `*[${node.attrs?.extensionKey ?? "extension"}]*`;
    case "nestedExpand":
      return blocks(node.content);
    default:
      if (node.text) return node.text;
      if (node.content?.length) return blocks(node.content);
      return "";
  }
}

function findMedia(node) {
  if (node.type === "media") {
    return {
      url: node.attrs?.url,
      id: node.attrs?.id,
      alt: node.attrs?.alt,
    };
  }
  for (const child of node.content ?? []) {
    const found = findMedia(child);
    if (found?.url || found?.id) return found;
  }
  return null;
}

export function adfToMarkdown(adfValue, ctx = {}) {
  let doc = adfValue;
  if (typeof adfValue === "string") {
    try {
      doc = JSON.parse(adfValue);
    } catch {
      return adfValue;
    }
  }
  if (!doc?.type) return "";
  return blockToMd(doc, ctx);
}

export function collectLinks(adfValue) {
  const links = new Set();
  const walk = (node) => {
    if (!node) return;
    if (node.marks) {
      for (const m of node.marks) {
        if (m.type === "link" && m.attrs?.href) links.add(m.attrs.href);
      }
    }
    if (node.type === "inlineCard" && node.attrs?.url) links.add(node.attrs.url);
    for (const c of node.content ?? []) walk(c);
  };
  let doc = adfValue;
  if (typeof adfValue === "string") {
    try {
      doc = JSON.parse(adfValue);
    } catch {
      return [];
    }
  }
  walk(doc);
  return [...links];
}

export function collectMediaUrls(adfValue) {
  const urls = new Set();
  const walk = (node) => {
    if (!node) return;
    if (node.type === "media" && node.attrs?.url) urls.add(node.attrs.url);
    for (const c of node.content ?? []) walk(c);
  };
  let doc = adfValue;
  if (typeof adfValue === "string") {
    try {
      doc = JSON.parse(adfValue);
    } catch {
      return [];
    }
  }
  walk(doc);
  return [...urls];
}
