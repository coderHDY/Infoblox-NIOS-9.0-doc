#!/usr/bin/env node
/** Download images from raw/*.json attachments and refresh Markdown image refs. */
import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { adfToMarkdown } from "./adf-to-md.mjs";
import { rewriteLinks } from "./lib/links.mjs";
import {
  attachmentIndex,
  downloadAttachments,
  resolveMediaAssetMap,
} from "./lib/images.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://docs.infoblox.com";
const manifest = JSON.parse(await fs.readFile(path.join(ROOT, "manifest.json"), "utf8"));

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ acceptDownloads: true });
const page = await context.newPage();
await page.goto(`${BASE}/space/nios90`, { waitUntil: "domcontentloaded", timeout: 60_000 });
await page.waitForTimeout(2000);

const rawDir = path.join(ROOT, "raw");
const publicDir = path.join(ROOT, "public");
let images = 0;
let updated = 0;
let processed = 0;

for (const entry of manifest.pages) {
  const rawPath = path.join(rawDir, `${entry.id}.json`);
  try {
    const body = JSON.parse(await fs.readFile(rawPath, "utf8"));
    const attachments = body.attachments ?? [];
    if (!attachments.length) continue;

    processed++;
    const before = images;
    const assetMap = await downloadAttachments(page, attachments, entry.id, publicDir, BASE);
    images += Object.keys(assetMap).length;
    if (!Object.keys(assetMap).length) continue;

    const adfRaw = body.body?.atlas_doc_format?.value;
    if (!adfRaw) continue;
    const mediaMap = resolveMediaAssetMap(adfRaw, attachmentIndex(attachments), assetMap);
    let markdown = adfToMarkdown(adfRaw, { assetMap: mediaMap });
    markdown = rewriteLinks(markdown, manifest);

    const mdPath = path.join(ROOT, entry.localPath);
    const rawMd = await fs.readFile(mdPath, "utf8");
    const m = rawMd.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
    if (!m) continue;
    const fm = rawMd.slice(0, rawMd.length - m[1].length);
    const next = fm + markdown + "\n";
    if (next !== rawMd) {
      await fs.writeFile(mdPath, next);
      updated++;
    }
    if (processed % 20 === 0) process.stdout.write(`\r  images … ${processed} pages, ${images} assets`);
  } catch {
    /* skip */
  }
}

await browser.close();
console.log(`\nlocalize-images: ${images} assets on ${processed} pages, ${updated} md updated`);
