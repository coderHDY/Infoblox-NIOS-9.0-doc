#!/usr/bin/env node
/** Escape accidental HTML-like placeholders (e.g. <Grid Manager IP>) for VitePress. */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function sanitizeBody(body) {
  return body.replace(/<([^>\n/][^>\n]*)>/g, (match, inner) => {
    const tag = inner.trim().split(/\s/)[0].toLowerCase();
    const allowed = new Set([
      "details",
      "summary",
      "sub",
      "sup",
      "br",
      "hr",
      "img",
      "a",
      "code",
    ]);
    if (allowed.has(tag) || inner.startsWith("/")) return match;
    return `&lt;${inner}&gt;`;
  });
}

async function walk(dir) {
  for (const name of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) await walk(p);
    else if (name.name.endsWith(".md")) {
      const raw = await fs.readFile(p, "utf8");
      const m = raw.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
      if (!m) continue;
      const fixed = raw.slice(0, raw.length - m[1].length) + sanitizeBody(m[1]);
      if (fixed !== raw) await fs.writeFile(p, fixed);
    }
  }
}

await walk(path.join(ROOT, "content"));
console.log("sanitized content/*.md");
