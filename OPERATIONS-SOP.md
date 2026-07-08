# 帮助中心运营 SOP（用 Claude Code 上传/发布）

本文件是 **kimi-helpcenter-doc** 的运营标准流程（SOP）与检查链路。
配合 [`AGENTS.md`](./AGENTS.md)（写作/链接规则）、[`TRANSLATION.md`](./TRANSLATION.md)（翻译原则）、
[`glossary/ITERATION.md`](./glossary/ITERATION.md)（术语迭代）一起用。

**核心原则**：质量门左移（能自动查的在提交前查）· 自动优先人审兜底 · 每道门有明确通过标准与失败动作。

---

## 0. 一图看全流程

```
立项 → 编辑 → [检查链路 G0–G5] → 提交推送 → CI(G6–G7) → 生产发布 → 上线抽验(G8–G9)
        └── Claude Code 主战场 ──┘        └自动┘        └── 人工手动 ──┘
```

- **仓库**：`git@dev.msh.team:search-engine/kimi-helpcenter-doc.git`
- **发布分支**：`master`
- **⚠️ 生产部署是 `when: manual`**——push 到 master **不会**自动上线，必须在 GitLab 手动触发 `deploy:production`，否则线上一直是旧版本。
- **17 语言**；源文 = `zh-CN`（中文手维护）、`en-US`（海外 SEO 源）；`en-CN` 由 `zh-CN` 派生。
- **路由**：`/<category>/<slug>`（无 `/help`、无语言前缀）。

---

## 1. 阶段 SOP（进入/退出标准）

### 阶段 0 · 立项
- 明确变更类型：新增文章 / 改写 / 翻译 / 术语 / 链接修复。
- 圈定影响范围：哪些语言、哪些文件。
- **对齐标准**（改术语/翻译前必做，见 `glossary/ITERATION.md` 前置清单）：
  1. 去 <https://app.lokalise.com/projects> 核对该产品语言的既有翻译标准。
  2. 对 OpenAI / Claude Code 的 LLM/AI 专业词做调研校对。
- **退出**：范围清单明确、术语已对齐。

### 阶段 1 · 编辑（Claude Code）
- `git checkout master && git pull --ff-only origin master`。
- **源文优先**：先改 `zh-CN` / `en-US`，再传播到各语言；**不在译文里私自"改进"源文**，源文有 bug 先修源文再传播。
- 遵循 `AGENTS.md`（写作、Link Rules）、`TRANSLATION.md`（keep-English / localize）、`glossary`（术语与 `localized_forms`）。
- 链接按「链接撰写规范」（见 §4）。
- **退出**：改动完成、自查无遗漏。

### 阶段 2 · 检查链路
- 跑 **G0–G5**（见 §3）。**全绿**才允许提交。

### 阶段 3 · 提交推送
- Conventional commit（`docs(i18n): …` / `fix(links): …`）。
- **若改了术语**：`bump` `glossary/terms.yaml` + `terms.json` 的 `meta.last_updated`（新增词条再 `bump` `total_terms`），并在 `glossary/ITERATION.md` 记一条。
- `git push origin master`（禁止 force-push；如远端分叉，rebase 或 cherry-pick，不覆盖他人提交）。
- **退出**：本地 master = origin/master。

### 阶段 4 · CI（自动）
- GitLab CI 自动跑 validate → `deploy:test`。
- **退出**：pipeline 绿。

### 阶段 5 · 预发核查（人工）
- 在 **test 环境**（如 kimi.kimi.team）**用浏览器**打开改动页，核查渲染、标题、链接、目标语言。
- **退出**：预发显示正确。

### 阶段 6 · 生产发布（人工）
- GitLab 手动触发 `deploy:production`。
- 清 CDN / 浏览器硬刷新。
- **退出**：触发成功。

### 阶段 7 · 上线抽验（人工）
- www.kimi.com 抽查改动页、链接、目标语言。
- **退出**：线上与预期一致。

---

## 2. 谁做什么

| 门 | 自动（Claude Code / 脚本 / CI） | 人工 |
|---|---|---|
| G0–G4 | ✅ 全自动 | |
| G5 diff 人审 | | ✅（语义/自然度/母语兜底）|
| G6 CI | ✅ | |
| G7 预发渲染 | | ✅ |
| G8 生产+CDN | | ✅ 手动触发 |
| G9 上线抽验 | | ✅ |

---

## 3. 检查链路（分层门禁，fail-fast）

| 门 | 检查项 | 命令 / 方法 | 通过标准 |
|---|---|---|---|
| **G0 同步** | 基于最新 master | `git pull --ff-only origin master` | 无分叉 |
| **G1 结构/语法** | 媒体引用、MDX 语法、frontmatter | `pnpm validate:docs` | `errors=0` |
| **G2 翻译完整** | 各语言文件齐全 | `pnpm check:translations` | `missing=0` |
| **G3 术语一致** | glossary 落地（按文字体系：非拉丁音译/拉丁保留；产品名保留；无违规裸词） | `pnpm check:terms`※ | 无违规 |
| **G4 链接** | ①内链 slug 存在 ②内链跨语言 path 一致（slug/URL 不被译）③无 `/help`/语言前缀 ④锚点存在 ⑤外链**浏览器 UA** 200 + `text/html`、无重定向到 agent 端点、URL 未被译 | `pnpm check:links`※ | 无死链/破链 |
| **G5 diff 人审** | 语义、自然度、敏感改动；**母语兜底**（如俄语格变化、专业术语） | `git diff` + 人 | 人确认 |
| **G6 CI** | 同 G1（+G3/G4 如已接入）+ test 部署 | GitLab CI | 绿 |
| **G7 预发渲染** | 浏览器打开 test 环境改动页 | 手动 | 渲染正确 |
| **G8 生产+CDN** | 手动部署 + 刷缓存 | GitLab manual | 已发布 |
| **G9 上线抽验** | 线上抽查改动页/链接/目标语言 | 浏览器 | 一致 |

※ `check:terms` / `check:links` 为**待建脚本**（`pnpm validate:docs` 只查媒体与语法，**不查链接目标与术语**）。建脚本前，G3/G4 由 Claude Code 用等价 grep/`curl` 手动执行。

**一键入口（建脚本后）**：
```jsonc
// package.json
"check:all": "pnpm validate:docs && pnpm check:translations && pnpm check:terms && pnpm check:links"
```

---

## 4. 链接撰写规范（提炼，详见 AGENTS.md Link Rules）

### 站外链接
- **URL 整体不翻译**（path/query/fragment 均不透明）；只译链接文字。
  - ❌ `https://www.kimi.com/membership-크레딧`（译了 URL → 死链）
- **全语言同一 URL**（除非该站有官方本地化页）。
- **用规范人面 URL**，不用重定向目标 / agent markdown 端点。以站点 `llms.txt`/canonical 为准。
  - ✅ `https://lobehub.com/skills`  ❌ `https://market.lobehub.com/s/skills`（裸 SKILL.md）
- 绝对 URL + HTTPS。

### 站内 md 跳转
- **格式 `/<category>/<slug>`**——无 `/help`、无语言前缀。
- **`<slug>` = 目标文章 frontmatter 的 `slug:`，且 slug 不翻译**（全语言稳定）。
  - ❌ `/agent/kredi-and-billing`、`/agent/créditos-and-billing`（译了 slug → 破链）
- **锚点 `#<slugified-heading>`**：小写、空格→连字符、去标点、保留 Unicode；须对应真实标题。
- 只译 label，不动 path/anchor。

---

## 5. 关键防呆点（历史坑固化）

1. **生产手动部署**——SOP 必含 G8，否则"改了没上线"（footer/标题旧版根因）。
2. **外链检查必须浏览器 UA**——内容协商会把活链误判为死链（lobehub 案例，见 AGENTS.md）。
3. **slug / URL 不翻译**——G4 比对跨语言 path 一致性（`kredi-and-billing`、`membership-크레딧` 类）。
4. **源文自身可能有 bug**——如 `credits-and-billing` ≠ 真实 slug `quota-and-billing`；G4 连源文一起查，先修源文。
5. **术语按文字体系落地**——G3 按 glossary `localized_forms`（非拉丁音译 ja/ko/ru/th、拉丁保留 de/fr/it/es/pt/id/vi/tr）。
6. **不确定就人审 + 母语复核**——G5 兜底（俄语格、专业术语）。

---

## 6. 回滚

- **未发布**（仅在 master）：直接提交修正 commit 覆盖，或 `git revert <sha>` 后重跑检查链路。
- **已发布**：先 `git revert` 推 master → 重新手动触发 `deploy:production` → 清 CDN。
- **切忌** force-push master 覆盖他人提交。

---

## 7. 命令速查

```bash
# 同步
git checkout master && git pull --ff-only origin master
# 检查链路（现有）
pnpm validate:docs           # G1 结构/语法/媒体
pnpm check:translations      # G2 翻译完整
# 检查链路（待建）
pnpm check:terms             # G3 术语
pnpm check:links             # G4 链接
# 外链浏览器 UA 探测（建脚本前手动）
curl -sS -A "Mozilla/5.0 ... Chrome/126 Safari/537.36" -L -o /dev/null \
  -w "%{http_code} %{content_type} %{url_effective}\n" "<URL>"
# 提交推送
git add -A && git commit -m "docs(...): ..." && git push origin master
# 生产发布：GitLab 手动触发 deploy:production + 清 CDN
```
