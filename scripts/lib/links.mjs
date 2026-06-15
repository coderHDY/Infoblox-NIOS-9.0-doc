/**
 * Rewrite Confluence / Infoblox doc links to local VitePress routes.
 */

const PAGE_ID_PATTERNS = [
  /https?:\/\/infoblox-docs\.atlassian\.net\/wiki\/spaces\/nios90\/pages\/(\d+)/gi,
  /https?:\/\/docs\.infoblox\.com\/space\/nios90\/(\d+)/gi,
  /\/space\/nios90\/(\d+)/g,
];

export function routeForId(manifest, id) {
  const route = manifest.idToPath?.[String(id)];
  return route ? `/${route}` : null;
}

export function rewriteLinks(markdown, manifest) {
  if (!markdown || !manifest?.idToPath) return markdown;
  let out = markdown;

  for (const re of PAGE_ID_PATTERNS) {
    out = out.replace(re, (match, id) => routeForId(manifest, id) ?? match);
  }

  // Confluence markdown links: [text](https://...pages/123) already handled above in URL

  // Malformed relative links copied from Confluence (./nios90/... or ./administering-nios/...)
  out = out.replace(/\]\(\.\/(?:nios90|administering-nios)\/([^)]+)\)/g, (_, rest) => {
    const normalized = rest.replace(/\.md$/, "").replace(/\/index$/, "");
    // try exact route match
    for (const route of Object.values(manifest.idToPath)) {
      if (route === normalized || route.endsWith(`/${normalized}`)) {
        return `](/${route})`;
      }
    }
    return `](/${rest.replace(/\.md$/, "").replace(/\/index$/, "")})`;
  });

  // Absolute paths missing leading segment
  out = out.replace(/\]\((administering-nios\/[^)]+)\)/g, (_, p) => {
    const withSpace = p.startsWith("nios90/") ? p : `nios90/${p}`;
    return `](/${withSpace.replace(/\.md$/, "").replace(/\/index$/, "")})`;
  });

  // Draft / broken Confluence URLs → strip link, keep text
  out = out.replace(/\[([^\]]*)\]\(\/wiki\/pages\/resumedraft\.action[^)]*\)/g, "$1");
  out = out.replace(/\[([^\]]*)\]\(\/wiki\/spaces\/nios90draft[^)]*\)/g, "$1");

  return out;
}
