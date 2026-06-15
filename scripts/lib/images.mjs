import fs from "node:fs/promises";
import path from "node:path";

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".bmp"]);

export async function fetchPageAttachments(page, base, pageId) {
  try {
    const data = await page.evaluate(async (u) => {
      const res = await fetch(u, { credentials: "include" });
      if (!res.ok) return null;
      return res.json();
    }, `${base}/api/v2/pages/${pageId}/attachments?limit=250`);
    return data?.results ?? [];
  } catch {
    return [];
  }
}

export function attachmentIndex(attachments) {
  const byFileId = new Map();
  const byTitle = new Map();
  for (const a of attachments) {
    if (a.fileId) byFileId.set(a.fileId, a);
    if (a.title) byTitle.set(a.title.toLowerCase(), a);
  }
  return { byFileId, byTitle };
}

function extFromAttachment(att) {
  const name = att.title ?? att.fileName ?? "image.png";
  const ext = path.extname(name).toLowerCase();
  return IMAGE_EXT.has(ext) ? ext : ".png";
}

export async function downloadAttachments(request, attachments, pageId, publicRoot, base = "https://docs.infoblox.com") {
  const assetMap = {};
  const dir = path.join(publicRoot, "assets", pageId);
  await fs.mkdir(dir, { recursive: true });

  for (const att of attachments) {
    let link = att.downloadLink;
    if (!link) continue;
    if (link.startsWith("/")) link = base + link;

    const ext = extFromAttachment(att);
    const fileName = `${att.fileId ?? att.id ?? att.title}${ext}`.replace(/[/\\]/g, "_");
    const dest = path.join(dir, fileName);
    const webPath = `/assets/${pageId}/${fileName}`;

    try {
      if (!(await fileExists(dest))) {
        const resp = await request.get(link);
        if (!resp.ok()) continue;
        await fs.writeFile(dest, await resp.body());
      }
      if (att.fileId) assetMap[att.fileId] = webPath;
      assetMap[link] = webPath;
      if (att.downloadLink) assetMap[att.downloadLink] = webPath;
    } catch {
      /* skip failed image */
    }
  }
  return assetMap;
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

/** Map ADF media node id → local public URL using attachment index. */
export function resolveMediaAssetMap(adfValue, attachmentIdx, downloaded) {
  const map = { ...downloaded };
  const walk = (node) => {
    if (!node || typeof node !== "object") return;
    if (node.type === "media") {
      const id = node.attrs?.id;
      const att = id ? attachmentIdx.byFileId.get(id) : null;
      if (att?.downloadLink && map[att.downloadLink]) {
        map[id] = map[att.downloadLink];
      }
    }
    for (const c of node.content ?? []) walk(c);
  };
  let doc = adfValue;
  if (typeof adfValue === "string") {
    try {
      doc = JSON.parse(adfValue);
    } catch {
      return map;
    }
  }
  walk(doc);
  return map;
}
