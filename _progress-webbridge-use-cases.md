# Kimi WebBridge 使用案例文档 — 工作进度记录

**日期：** 2026/05/25  
**工作目录：** `/Users/moonshot/kimi-helpcenter-doc`  
**任务：** 在 kimi-webbridge 分类下新增"使用案例演示"文档，位于"工作原理"与"常见问题"之间

---

## 最终文档结构

```
zh-CN/kimi-webbridge/
├── kimi-webbridge.md       # order: 1 — 产品介绍
├── how-it-works.md         # order: 2 — 工作原理
├── use-cases.md            # order: 3 — 使用案例演示（新增）
├── FAQ.md                  # order: 4 — 常见问题（原 order: 3）
```

---

## 本次创建的文件

### `zh-CN/kimi-webbridge/use-cases.md`

- **标题：** Kimi WebBridge 使用案例演示
- **slug：** `kimi-webbridge-use-cases`
- **order：** 3
- **extract_headings：** true（列表页展开一级标题）

**内容结构：**

| 章节 | 场景 | 对应 Skill / CLI |
|------|------|-----------------|
| 信息查询与整理 | 高考志愿填报 | gaokao-assistant / gaokao-cli |
| 信息查询与整理 | 旅游攻略规划 | travel-planning / ctrip-cli、booking-cli |
| 信息查询与整理 | 租房信息筛选 | rental-assistant / 58-cli、anjuke-cli |
| 内容调研与分析 | 文献调研 | paper-research / scholar-cli |
| 内容调研与分析 | 热点话题分析 | — / xiaohongshu-cli |
| 日常办公辅助 | 电商比价 | — |
| 日常办公辅助 | 网页数据提取 | — |

**关键设计决策：**
- 每个可安装场景附"安装与使用"步骤（Releases 下载 + npx skills add）
- 无对应 CLI 的场景（电商比价、网页数据提取）不附安装步骤
- 第一段下方放置 `tip` Callout，提醒用户任务描述要具体
- "作为参考案例"段落下方放置 `warning` Callout，附免责声明与 support@moonshot.cn

---

## 本次修改的文件

### `zh-CN/kimi-webbridge/FAQ.md`

- **变更：** `order: 3` → `order: 4`
- **原因：** 为新文档腾出 order: 3 的位置

---

## 提交历史（已推送到线上）

| Commit | 说明 |
|--------|------|
| `e541a1e` | 新增 Kimi WebBridge 使用案例演示文档 |
| `932895c` | 在文档中添加免责声明提示（support@kimi.com） |
| `b7da9b3` | 展开文档的列表页标题（extract_headings: true） |
| `7d9e45b` | 更新免责声明邮箱（support@kimi.com → support@moonshot.cn） |
| `ff51a0e` | 将使用提示 Callout 从文档末尾移至第一段下方 |
| `3bd4630` | 调整免责声明位置：从标题下方移至"作为参考案例"段落下方 |

---

## 格式合规检查

- [x] Front matter 完整（title / slug / order / extract_headings / preview）
- [x] SeoMeta 组件已添加，无 pageUrl，使用字面字符串
- [x] 所有 CodePreview 组件前后各有一空行
- [x] 所有 Callout 组件前后各有一空行
- [x] 无 import 语句
- [x] 外部链接保留原样
- [x] 无 MDX 转义问题（prompt 中的引号使用普通引号，无需转义）

---

## 待办 / 备注

- 文档无配图，如需丰富视觉效果可后续补充场景截图
- xiaohongshu-cli 暂无 GitHub Releases 链接，使用 Homebrew 安装方式
- 电商比价、网页数据提取场景无预置 Skill，用户需自行通过 prompt 让 Agent 执行

---

*本文档为本地工作记录，不提交到线上仓库。*
