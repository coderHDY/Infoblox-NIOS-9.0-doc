#!/usr/bin/env node
/**
 * Crawl Infoblox docs (Confluence API v2) via Playwright.
 *
 * Usage:
 *   node scripts/crawl.mjs --full-space              # Phase 2: entire nios90
 *   node scripts/crawl.mjs --root 280822124            # subtree from page
 *   node scripts/crawl.mjs --retry-missing
 */

import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { adfToMarkdown } from "./adf-to-md.mjs";
import { buildManifest } from "./lib/manifest.mjs";
import { rewriteLinks } from "./lib/links.mjs";
import {
  attachmentIndex,
  downloadAttachments,
  fetchPageAttachments,
  resolveMediaAssetMap,
} from "./lib/images.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");

const BASE = "https://docs.infoblox.com";
const DEFAULT_ROOT = "280822124";
const DEFAULT_SPACE = "nios90";
const CONCURRENCY = 4;
const PAGE_SIZE = 250;
const MAX_RETRIES = 5;
const RETRY_BASE_MS = 2000;

function parseArgs(argv) {
  const args = {
    root: DEFAULT_ROOT,
    space: DEFAULT_SPACE,
    limit: 0,
    depth: 5,
    retryMissing: false,
    fullSpace: false,
    force: false,
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--root") args.root = argv[++i];
    else if (a === "--space") args.space = argv[++i];
    else if (a === "--limit") args.limit = Number(argv[++i]);
    else if (a === "--depth") args.depth = Number(argv[++i]);
    else if (a === "--retry-missing") args.retryMissing = true;
    else if (a === "--full-space") args.fullSpace = true;
    else if (a === "--force") args.force = true;
  }
  return args;
}

function normalizeApiUrl(next) {
  if (!next) return null;
  if (next.startsWith("http")) return next;
  if (next.startsWith("/wiki/")) return BASE + next.replace("/wiki", "");
  if (next.startsWith("/")) return BASE + next;
  return `${BASE}/${next}`;
}

async function browserFetch(page, url, attempt = 0) {
  try {
    return await page.evaluate(async (u) => {
      const res = await fetch(u, { credentials: "include" });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        const err = new Error(`HTTP ${res.status} ${u}: ${text.slice(0, 200)}`);
        err.status = res.status;
        throw err;
      }
      const ct = res.headers.get("content-type") ?? "";
      if (ct.includes("application/json")) return res.json();
      return res.text();
    }, url);
  } catch (err) {
    const status = err.status ?? (/\b429\b/.test(err.message) ? 429 : 0);
    if (attempt < MAX_RETRIES && (status === 429 || status === 503)) {
      await page.waitForTimeout(RETRY_BASE_MS * 2 ** attempt);
      return browserFetch(page, url, attempt + 1);
    }
    throw err;
  }
}

async function fetchAllDescendants(page, rootId, depth) {
  let url = `${BASE}/api/v2/pages/${rootId}/descendants?depth=${depth}&limit=${PAGE_SIZE}`;
  const all = [];
  while (url) {
    const data = await browserFetch(page, url);
    all.push(...(data.results ?? []));
    url = normalizeApiUrl(data._links?.next);
    process.stdout.write(`\r  目录 API … 已获取 ${all.length} 条`);
  }
  process.stdout.write("\n");
  return all;
}

async function fetchAllSpacePages(page, spaceId) {
  let url = `${BASE}/api/v2/spaces/${spaceId}/pages?depth=all&status=current&limit=${PAGE_SIZE}`;
  const all = [];
  while (url) {
    const data = await browserFetch(page, url);
    all.push(...(data.results ?? []));
    url = normalizeApiUrl(data._links?.next);
    process.stdout.write(`\r  Space 目录 … 已获取 ${all.length} 页`);
  }
  process.stdout.write("\n");
  return all;
}

async function fetchSpaceInfo(page, spaceKey) {
  const data = await browserFetch(page, `${BASE}/api/v2/spaces?keys=${spaceKey}&limit=1`);
  return data?.results?.[0];
}

async function fetchPageBody(page, pageId) {
  const qs = new URLSearchParams({ "body-format": "atlas_doc_format" });
  for (const type of ["pages", "blogposts"]) {
    try {
      return await browserFetch(page, `${BASE}/api/v2/${type}/${pageId}?${qs}`);
    } catch (err) {
      if (!/\b404\b/.test(err.message)) throw err;
    }
  }
  throw new Error(`HTTP 404 page ${pageId}`);
}

function sanitizeMdBody(body) {
  return body.replace(/<([^>\n/][^>\n]*)>/g, (match, inner) => {
    const tag = inner.trim().split(/\s/)[0].toLowerCase();
    const allowed = new Set(["details", "summary", "sub", "sup", "br", "hr", "img", "a", "code"]);
    if (allowed.has(tag) || inner.startsWith("/")) return match;
    return `&lt;${inner}&gt;`;
  });
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function poolMap(items, concurrency, fn) {
  let idx = 0;
  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
}

async function dismissCookieBanner(page) {
  for (const label of ["Accept", "接受", "Decline Non-Necessary"]) {
    try {
      const btn = page.getByRole("button", { name: label });
      if (await btn.isVisible({ timeout: 2000 })) {
        await btn.click();
        await page.waitForTimeout(500);
        return;
      }
    } catch {
      /* ignore */
    }
  }
}

async function writeUnavailableStub(entry) {
  const mdPath = path.join(ROOT_DIR, entry.localPath);
  if (await fileExists(mdPath)) return false;
  await ensureDir(mdPath);
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
  return true;
}

async function loadManifestFromDisk() {
  return JSON.parse(await fs.readFile(path.join(ROOT_DIR, "manifest.json"), "utf8"));
}

async function main() {
  const args = parseArgs(process.argv);
  const rawDir = path.join(ROOT_DIR, "raw");
  const publicDir = path.join(ROOT_DIR, "public");
  const statePath = path.join(ROOT_DIR, args.fullSpace ? ".crawl-state-full.json" : ".crawl-state.json");

  if (args.retryMissing) console.log("\n🔁 重试缺失页面");
  else if (args.fullSpace) console.log(`\n📥 Phase 2 全量爬取: space=${args.space}`);
  else console.log(`\n📥 子树爬取: root=${args.root} space=${args.space}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const request = context.request;

  try {
    let manifest;
    let rootMeta;
    let spaceInfo;

    if (args.retryMissing) {
      manifest = await loadManifestFromDisk();
      args.space = manifest.space ?? args.space;
      await page.goto(`${BASE}/space/${args.space}/${manifest.rootId}`, {
        waitUntil: "domcontentloaded",
        timeout: 60_000,
      });
    } else {
      spaceInfo = await (async () => {
        await page.goto(`${BASE}/space/${args.space}`, {
          waitUntil: "domcontentloaded",
          timeout: 60_000,
        });
        await page.waitForTimeout(2000);
        await dismissCookieBanner(page);
        return fetchSpaceInfo(page, args.space);
      })();

      if (args.fullSpace) {
        console.log(`📂 Space: ${spaceInfo.name} (${spaceInfo.id})`);
        const allPages = await fetchAllSpacePages(page, spaceInfo.id);
        rootMeta = await fetchPageBody(page, spaceInfo.homepageId);
        manifest = buildManifest(rootMeta, allPages, args.space);
      } else {
        console.log("📂 拉取子树目录…");
        rootMeta = await fetchPageBody(page, args.root);
        const descendants = await fetchAllDescendants(page, args.root, args.depth);
        manifest = buildManifest(rootMeta, descendants, args.space);
      }
    }

    if (args.retryMissing) {
      await page.waitForTimeout(1000);
      await dismissCookieBanner(page);
    }

    let pagesToFetch = manifest.pages;
    if (args.retryMissing) {
      pagesToFetch = [];
      for (const entry of manifest.pages) {
        if (!(await fileExists(path.join(ROOT_DIR, entry.localPath)))) pagesToFetch.push(entry);
      }
      console.log(`📄 缺失 ${pagesToFetch.length} 页`);
      if (!pagesToFetch.length) {
        console.log("✅ 无缺失页面\n");
        return;
      }
    } else if (args.limit > 0) {
      pagesToFetch = pagesToFetch.slice(0, args.limit);
    }

    console.log(`📄 共 ${manifest.pageCount} 页，本次处理 ${pagesToFetch.length} 页…`);

    await fs.mkdir(rawDir, { recursive: true });
    await fs.mkdir(publicDir, { recursive: true });
    await fs.mkdir(path.join(ROOT_DIR, "content"), { recursive: true });

    const done = new Set();
    if (!args.fullSpace && !args.force) {
      try {
        const prev = JSON.parse(await fs.readFile(statePath, "utf8"));
        for (const id of prev.completed ?? []) done.add(id);
      } catch {
        /* fresh */
      }
    }

    let completed = 0;
    const total = pagesToFetch.length;
    let imagesSaved = 0;

    await poolMap(pagesToFetch, args.retryMissing ? 2 : CONCURRENCY, async (entry) => {
      const mdPath = path.join(ROOT_DIR, entry.localPath);
      if (!args.force && !args.retryMissing && done.has(entry.id) && (await fileExists(mdPath))) {
        completed++;
        return;
      }
      try {
        const body =
          entry.id === manifest.rootId && rootMeta?.body
            ? rootMeta
            : await fetchPageBody(page, entry.id);

        const attachments = await fetchPageAttachments(page, BASE, entry.id);
        const attIdx = attachmentIndex(attachments);
        const assetMap = await downloadAttachments(request, attachments, entry.id, publicDir);
        imagesSaved += Object.keys(assetMap).length;

        await fs.writeFile(path.join(rawDir, `${entry.id}.json`), JSON.stringify({ ...body, attachments }, null, 2));

        const adfRaw = body.body?.atlas_doc_format?.value;
        const mediaMap = resolveMediaAssetMap(adfRaw, attIdx, assetMap);

        let markdown = "";
        if (adfRaw) {
          markdown = adfToMarkdown(adfRaw, { assetMap: mediaMap, linkMap: {} });
          markdown = rewriteLinks(markdown, manifest);
        }

        await ensureDir(mdPath);
        const frontmatter = [
          "---",
          `title: "${(entry.title ?? "").replace(/"/g, '\\"')}"`,
          `source: "${entry.sourceUrl}"`,
          `pageId: "${entry.id}"`,
          "---",
          "",
        ].join("\n");
        await fs.writeFile(mdPath, frontmatter + sanitizeMdBody(markdown) + "\n");
        done.add(entry.id);
      } catch (err) {
        console.error(`\n❌ ${entry.id} ${entry.title}: ${err.message}`);
      }
      completed++;
      if (completed % 25 === 0 || completed === total) {
        process.stdout.write(`\r  正文 … ${completed}/${total}`);
      }
    });
    process.stdout.write("\n");

    let stubs = 0;
    for (const entry of manifest.pages) {
      if (await writeUnavailableStub(entry)) stubs++;
    }
    if (stubs) console.log(`📝 ${stubs} 页写入 404 占位`);

    await fs.writeFile(statePath, JSON.stringify({ completed: [...done], updatedAt: new Date().toISOString() }, null, 2));
    await fs.writeFile(path.join(ROOT_DIR, "manifest.json"), JSON.stringify(manifest, null, 2));

    console.log(`\n✅ 完成 ${done.size} 页 | 图片引用 ${imagesSaved} | manifest.json 已更新\n`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
