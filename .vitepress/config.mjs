import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifestPath = path.resolve(__dirname, "../manifest.json");

function buildSidebar() {
  if (!fs.existsSync(manifestPath)) {
    return [{ text: "NIOS 9.0", link: "/nios90/" }];
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const byId = new Map(manifest.pages.map((p) => [p.id, { ...p, children: [] }]));
  let root = byId.get(manifest.rootId);
  if (!root) return [];

  for (const p of byId.values()) {
    if (p.id === manifest.rootId) continue;
    if (p.parentId && byId.has(p.parentId)) byId.get(p.parentId).children.push(p);
  }

  const toItem = (node) => {
    const link =
      "/" +
      node.localPath
        .replace(/^content\//, "")
        .replace(/\/index\.md$/, "")
        .replace(/\.md$/, "");
    if (node.children.length) {
      return {
        text: node.title,
        link,
        collapsed: true,
        items: node.children
          .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
          .map(toItem),
      };
    }
    return { text: node.title, link };
  };

  return [toItem(root)];
}

/** Rollup 默认用完整页面路径作文件名，超长路径会在 macOS/Linux 上触发 ENAMETOOLONG */
function shortRollupName(name, max = 150) {
  if (!name) return "asset";
  const sanitized = name.replace(/[^\w.-]/g, "_");
  return sanitized.length <= max ? sanitized : sanitized.slice(0, max);
}

export default {
  title: "Infoblox NIOS 9.0",
  description: "Infoblox NIOS 9.0 本地文档镜像",
  srcDir: "content",
  cleanUrls: true,
  markdown: { html: false },
  ignoreDeadLinks: true,
  vite: {
    plugins: [
      {
        name: "vitepress-short-filenames",
        enforce: "post",
        configResolved(resolved) {
          // 避免 Vite emptyOutDir 在大量 SSR 临时文件时触发 ENOTEMPTY（Vercel CI 常见）
          if (resolved.build.ssr) {
            resolved.build.emptyOutDir = false;
          }
          const output = resolved.build.rollupOptions.output;
          if (!output || Array.isArray(output)) return;
          if (!resolved.build.ssr) {
            output.entryFileNames = (chunk) =>
              `assets/${shortRollupName(chunk.name)}.[hash].js`;
            output.chunkFileNames = (chunk) =>
              /(?:Carbon|BuySell)Ads/.test(chunk.name)
                ? `assets/chunks/ui-custom.[hash].js`
                : `assets/chunks/${shortRollupName(chunk.name)}.[hash].js`;
          }
          output.assetFileNames = (asset) =>
            `assets/${shortRollupName(asset.name)}.[hash][extname]`;
        },
      },
    ],
  },
  themeConfig: {
    nav: [{ text: "NIOS 9.0", link: "/nios90/" }],
    sidebar: buildSidebar(),
    search: { provider: "local" },
  },
};
