#!/usr/bin/env node
/** Re-render Markdown from raw ADF + localized assets (no re-download). */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { adfToMarkdown } from "./adf-to-md.mjs";
import { rewriteLinks } from "./lib/links.mjs";
import { attachmentIndex, resolveMediaAssetMap } from "./lib/images.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(await fs.readFile(path.join(ROOT, "manifest.json"), "utf8"));

function sanitizeMdBody(body) {
  return body.replace(/<([^>\n/][^>\n]*)>/g, (match, inner) => {
    const tag = inner.trim().split(/\s/)[0].toLowerCase();
    const allowed = new Set(["details", "summary", "sub", "sup", "br", "hr", "img", "a", "code"]);
    if (allowed.has(tag) || inner.startsWith("/")) return match;
    return `&lt;${inner}&gt;`;
  });
}

function buildAssetMap(pageId, attachments) {
  const assetMap = {};
  const dir = path.join(ROOT, "public/assets", pageId);
  return fs.readdir(dir).then(
    (files) => {
      for (const f of files) {
        const web = `/assets/${pageId}/${f}`;
        assetMap[f.replace(/\.[^.]+$/, "")] = web;
      }
      for (const a of attachments) {
        if (a.fileId && assetMap[a.fileId]) assetMap[a.downloadLink] = assetMap[a.fileId];
      }
      return assetMap;
    },
    () => ({})
  );
}

let updated = 0;
let withImages = 0;

for (const entry of manifest.pages) {
  const rawPath = path.join(ROOT, "raw", `${entry.id}.json`);
  const mdPath = path.join(ROOT, entry.localPath);
  try {
    const body = JSON.parse(await fs.readFile(rawPath, "utf8"));
    const adfRaw = body.body?.atlas_doc_format?.value;
    if (!adfRaw) continue;

    const attachments = body.attachments ?? [];
    const assetMap = await buildAssetMap(entry.id, attachments);
    const mediaMap = resolveMediaAssetMap(adfRaw, attachmentIndex(attachments), assetMap);

    let markdown = adfToMarkdown(adfRaw, { assetMap: mediaMap });
    markdown = rewriteLinks(markdown, manifest);
    markdown = sanitizeMdBody(markdown);

    if (markdown.includes("![")) withImages++;

    const rawMd = await fs.readFile(mdPath, "utf8");
    const m = rawMd.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
    if (!m) continue;
    const fm = rawMd.slice(0, rawMd.length - m[1].length);
    const next = fm + markdown + "\n";
    if (next !== rawMd) {
      await fs.mkdir(path.dirname(mdPath), { recursive: true });
      await fs.writeFile(mdPath, next);
      updated++;
    }
  } catch {
    /* skip */
  }
}

console.log(`refresh-md: ${updated} files updated, ${withImages} contain images`);
