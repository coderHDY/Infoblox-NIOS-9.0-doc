#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://docs.infoblox.com";

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

const manifest = JSON.parse(await fs.readFile(path.join(ROOT, "manifest.json"), "utf8"));
let n = 0;
for (const entry of manifest.pages) {
  const mdPath = path.join(ROOT, entry.localPath);
  if (await fileExists(mdPath)) continue;
  await fs.mkdir(path.dirname(mdPath), { recursive: true });
  const sourceUrl = `${BASE}${entry.sourceUrl}`;
  const content = [
    "---",
    `title: "${(entry.title ?? "").replace(/"/g, '\\"')}"`,
    `source: "${entry.sourceUrl}"`,
    `pageId: "${entry.id}"`,
    `fetchError: "404"`,
    "---",
    "",
    "> ⚠️ 此页在源站 Confluence API 中不可访问（404），可能已删除、未发布或权限受限。",
    ">",
    `> 原站链接：[${entry.title}](${sourceUrl})`,
    "",
  ].join("\n");
  await fs.writeFile(mdPath, content);
  n++;
  console.log("stub", entry.id, entry.title.slice(0, 50));
}
console.log(`\n wrote ${n} stubs`);
