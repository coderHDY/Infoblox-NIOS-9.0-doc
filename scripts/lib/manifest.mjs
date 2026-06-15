const MAX_SEGMENT = 48;
const MAX_LOCAL_PATH = 200;

export function slugify(title) {
  return (
    (title ?? "untitled")
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, MAX_SEGMENT) || "untitled"
  );
}

export function buildManifest(rootMeta, allPages, spaceKey) {
  const byId = new Map();
  const rootId = String(rootMeta.id);
  const pageList = Array.isArray(allPages) ? allPages : [];

  byId.set(rootId, {
    id: rootId,
    title: rootMeta.title,
    parentId: rootMeta.parentId ? String(rootMeta.parentId) : null,
    position: rootMeta.position ?? 0,
    hasChildren: pageList.some((d) => String(d.parentId) === rootId),
  });

  for (const d of pageList) {
    const id = String(d.id);
    if (id === rootId) continue;
    byId.set(id, {
      id,
      title: d.title,
      parentId: d.parentId ? String(d.parentId) : null,
      position: d.position ?? 0,
      hasChildren: pageList.some((x) => String(x.parentId) === id),
    });
  }

  const slugUsed = new Map();
  const uniqueSlug = (base, id) => {
    const count = slugUsed.get(base) ?? 0;
    slugUsed.set(base, count + 1);
    return count === 0 ? base : `${base.slice(0, 36)}-${id}`;
  };

  const assignPath = (id, prefix) => {
    const node = byId.get(id);
    if (!node) return;
    const slug = uniqueSlug(slugify(node.title), id);
    const relDir = prefix ? `${prefix}/${slug}` : slug;
    const isLeaf = !node.hasChildren;
    let localPath = isLeaf ? `content/${relDir}.md` : `content/${relDir}/index.md`;

    if (localPath.length > MAX_LOCAL_PATH) {
      localPath = isLeaf ? `content/${spaceKey}/by-id/${id}.md` : `content/${spaceKey}/by-id/${id}/index.md`;
    }

    node.slug = slug;
    node.localPath = localPath;
    node.sourceUrl = `/space/${spaceKey}/${id}`;

    const children = [...byId.values()]
      .filter((n) => n.parentId === id)
      .sort((a, b) => (a.position ?? 0) - (b.position ?? 0));

    for (const child of children) assignPath(child.id, relDir);
  };

  assignPath(rootId, spaceKey);

  const pages = [...byId.values()];
  const ordered = [];
  const visit = (id) => {
    const node = byId.get(id);
    if (!node || node._visited) return;
    node._visited = true;
    ordered.push(node);
    pages
      .filter((n) => n.parentId === id)
      .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
      .forEach((c) => visit(c.id));
  };
  visit(rootId);
  for (const p of pages) {
    if (!p._visited) ordered.push(p);
  }

  const idToPath = Object.fromEntries(
    ordered.map((p) => [
      p.id,
      p.localPath.replace(/^content\//, "").replace(/\/index\.md$/, "").replace(/\.md$/, ""),
    ])
  );

  return {
    crawledAt: new Date().toISOString(),
    space: spaceKey,
    rootId,
    rootTitle: rootMeta.title,
    pageCount: ordered.length,
    pages: ordered.map(({ _visited, ...rest }) => rest),
    idToPath,
  };
}
