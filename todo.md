# Administering NIOS 本地文档镜像 — 任务记录

> 源站：[Administering NIOS](https://docs.infoblox.com/space/nios90/280822124/Administering+NIOS)  
> 平台：K15t Scroll Viewport + Confluence Cloud（Vue SPA）  
> 更新：2026-06-15

---

## 目标

将 Infoblox 文档站 `Administering NIOS` 章节镜像到本地，保留目录树与页内跳转，便于离线/快速阅读。

---

## 技术结论（已验证）

| 项目 | 结论 |
|------|------|
| 静态抓取 | ❌ 无效（SPA，HTML 壳无正文） |
| Scroll REST API | ❌ 403（需 JWT） |
| **Confluence API v2** | ✅ 浏览器会话下可用 |
| 空间 | `nios90`，spaceId=`154207152` |
| 根节点 | `Administering NIOS`，pageId=`280822124` |
| 子树规模 | 约 **1894** 页，最大深度 **5** |
| 全 space | 约 **2648** 页 |

### 关键 API

```
# 目录（分页，depth=5 可覆盖整棵 Administering NIOS 子树）
GET /api/v2/pages/{rootId}/descendants?depth=5&limit=250

# 正文（Atlas Doc Format → JSON）
GET /api/v2/pages/{pageId}?body-format=atlas_doc_format

# 空间信息
GET /api/v2/spaces?keys=nios90&limit=1
```

### 侧边栏语义（与原站一致）

- `has_expand` / 有展开箭头 → **分组节点**（可能有子页）
- `dot` 前缀 → **叶子页**（有正文）

---

## 方案选型

| 决策 | 选择 | 原因 |
|------|------|------|
| 抓取方式 | Playwright 取 Cookie + 脚本批量调 API | 零 LLM token、可并发、可断点续爬 |
| 源文件格式 | **Markdown** | 编辑器/Obsidian 可读 |
| 浏览站点 | **VitePress** | 侧边栏、本地搜索、内链 |
| 目录索引 | `manifest.json` | id / parentId / title / localPath 映射 |
| 内链 | 爬取时重写 `/space/nios90/{id}` → 本地路径 | 保留章节关联 |

---

## 目录结构（规划）

```
admini-doc/
├── todo.md                 # 本文件：方案 + 进度
├── manifest.json           # 目录树与 id 映射
├── package.json
├── scripts/
│   ├── crawl.mjs           # 爬取（目录 + 正文 + 图片）
│   └── build-manifest.mjs  # 生成 VitePress 侧栏
├── content/                # Markdown 正文
│   └── administering-nios/
├── assets/                 # 本地化图片
├── raw/                    # 原始 ADF JSON（可选，调试用）
└── .vitepress/             # 本地站点配置
```

---

## 分阶段计划

### Phase 0 — 准备 ✅ / 🔄

- [x] 分析源站结构与 API
- [x] 确定方案（MD + VitePress）
- [x] 创建 `todo.md`
- [x] 初始化 `package.json` 与脚本骨架
- [x] 验证 Playwright 会话可访问 API

### Phase 1 — 验证爬取 ✅

### Phase 2 — 全量 🔄

**范围**：整个 `nios90` space（约 2648 页）+ space 首页下同级页 + 图片本地化 + 内链修复。

- [x] `--full-space` 从 space homepage 拉全量目录
- [x] 图片下载至 `public/assets/{pageId}/`
- [x] 内链修复（Atlassian / docs.infoblox.com / 错误相对路径）
- [x] 路径过长时 fallback 至 `nios90/by-id/{pageId}.md`
- [ ] 全量爬取执行中（见 `crawl-full.log`）
- [ ] 爬取完成后 `pnpm fix-links`
- [ ] VitePress 全量验证

```bash
pnpm crawl:full     # 全量爬取
pnpm fix-links      # 批量修复内链
pnpm dev
```

---

## 进度日志

| 时间 | 动作 | 结果 |
|------|------|------|
| 2026-06-15 | 浏览器 + API 探测 | 确认 `/api/v2` 可用；子树 1894 页 |
| 2026-06-15 | 创建 `todo.md` | 记录方案，待实现脚本 |
| 2026-06-15 | 添加 `scripts/crawl.mjs`、`adf-to-md.mjs`、VitePress 配置 | 完成 |
| 2026-06-15 | 验证爬取 Administering NIOS 子树 | 1878/1894 页成功，16 页 API 404/网络失败 |
| 2026-06-15 | VitePress `pnpm dev` 可浏览；`build` 因路径过长暂失败 | 待缩短 slug 或扁平化 id |

---

## 风险与限制

1. **认证**：Cookie/JWT 会过期，长时间爬取需支持刷新会话或断点续跑。
2. **速率**：并发建议 10~20，避免触发限流（观察到 `x-ratelimit-limit: 900`）。
3. **ADF 复杂块**：宏、嵌入 Confluence 页面、部分扩展块可能转换不完美，需在验收时标注。
4. **VitePress build**：部分页面路径过深，macOS 文件名长度限制导致 `pnpm build` 失败；`pnpm dev` 本地阅读正常。
5. **版权**：仅供个人学习离线阅读，勿公开再分发。

---

## 命令备忘（实现后填写）

```bash
# 验证爬取 Administering NIOS 子树
pnpm crawl --root 280822124 --space nios90

# 修复 MD 中误解析为 HTML 的占位符
node scripts/sanitize-md.mjs

# 启动本地阅读
pnpm dev

# 构建静态站
pnpm build
```
