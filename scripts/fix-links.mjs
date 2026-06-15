#!/usr/bin/env node
/** Re-apply internal link rewriting to all Markdown files using manifest.json. */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { rewriteLinks } from "./lib/links.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(await fs.readFile(path.join(ROOT, "manifest.json"), "utf8"));

async function walk(dir) {
  let n = 0;
  for (const name of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) n += await walk(p);
    else if (name.name.endsWith(".md")) {
      const raw = await fs.readFile(p, "utf8");
      const m = raw.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
      if (!m) continue;
      const fm = raw.slice(0, raw.length - m[1].length);
      const body = rewriteLinks(m[1], manifest);
      const next = fm + body;
      if (next !== raw) {
        await fs.writeFile(p, next);
        n++;
      }
    }
  }
  return n;
}

const updated = await walk(path.join(ROOT, "content"));
console.log(`fix-links: updated ${updated} files`);
