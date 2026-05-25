---
title: "Kimi WebBridge 使用案例演示"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge 使用案例演示 - Kimi Help Center"
  description="了解 Kimi WebBridge 的典型使用场景，包括高考志愿、旅游攻略、租房、文献调研等多种场景下的 Skill 和 CLI 使用示例。"
  ogType="article"
/>

# Kimi WebBridge 使用案例演示

<Callout type="warning">
本页面提供的 Skill 与 CLI 仅供教学与技术交流，如有异议，可以联系 <a href="mailto:support@moonshot.cn">support@moonshot.cn</a> 进行沟通。
</Callout>

Kimi WebBridge 让 Agent 像真人一样操作浏览器，沿用你已经登录的网站，自动完成导航、提取和整理。

<Callout type="tip">
使用 WebBridge 时，任务描述越具体，Agent 完成得越准确。建议明确指定目标网站、筛选条件和期望的输出格式。如果页面结构复杂，也可以让 Agent 先截图确认页面状态，再执行后续操作。
</Callout>

实际使用时常配合 Skill 和 CLI：Skill 沉淀任务经验——访问哪些网站、按什么步骤收集信息、如何整理结果；CLI 提供具体能力——搜索、读取页面、下载文件、查询结构化数据。

把你在网页上反复做的事，一句话告诉 AI Agent，它就能帮你生成一个 CLI，直接使用你真实的 Chrome 登录态，不走 API，也不用配置和管理 API Token。

下面这些场景用到的 Skill 和 CLI 都是这样做出来的，可以直接安装使用，也可以作为参考案例。

## 信息查询与整理

当你需要在多个网站之间来回查找信息时，WebBridge 可以让 Agent 自动打开目标页面，提取关键内容并整理成结构化输出，省去你逐个打开页面、复制粘贴的繁琐工作。

### 高考志愿填报

同时查询多个学校的招生信息、历年分数线、专业介绍，按"冲、稳、保"分类整理志愿方案。

相关工具：

- Skill：[gaokao-assistant](https://github.com/better-world-ai/x-cli/tree/main/skills/gaokao-assistant)
- CLI：[gaokao-cli](https://github.com/better-world-ai/x-cli/tree/main/gaokao-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我是一名 2026 年浙江高考考生，估分 628 分。请帮我查询适合填报的学校，整理近三年分数线、招生计划和专业介绍，按冲、稳、保分类输出志愿方案。",
    },
  ]}
/>

安装与使用：

1. 从 [Releases](https://github.com/better-world-ai/x-cli/releases) 下载 gaokao-cli
2. 运行 `npx skills add better-world-ai/x-cli --skill gaokao-assistant`
3. 打开本地 Agent（如 Kimi Code、Claude Code、Codex CLI、Cursor 等支持 Skill 的客户端），发上面的 prompt

### 旅游攻略规划

在机票平台、酒店预订网站、攻略社区之间跳转，对比价格和时间，整理行程安排、预算表和住宿建议。

相关工具：

- Skill：[travel-planning](https://github.com/better-world-ai/x-cli/tree/main/skills/travel-planning)
- CLI：[ctrip-cli](https://github.com/better-world-ai/x-cli/tree/main/ctrip-cli)、[booking-cli](https://github.com/better-world-ai/x-cli/tree/main/booking-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我计划 11 月去京都玩 5 天 4 晚，两个人出行，预算 8000 元左右。请查询机票、酒店、景点开放时间，整理成每天的行程安排和预算表。",
    },
  ]}
/>

安装与使用：

1. 从 [Releases](https://github.com/better-world-ai/x-cli/releases) 下载 ctrip-cli、booking-cli
2. 运行 `npx skills add better-world-ai/x-cli --skill travel-planning`
3. 打开本地 Agent（如 Kimi Code、Claude Code、Codex CLI、Cursor 等支持 Skill 的客户端），发上面的 prompt

### 租房信息筛选

在多个租房平台同时搜索，按租金、通勤、户型等条件筛选房源，统一整理信息并给出推荐排序。

相关工具：

- Skill：[rental-assistant](https://github.com/better-world-ai/x-cli/tree/main/skills/rental-assistant)
- CLI：[58-cli](https://github.com/better-world-ai/x-cli/tree/main/58-cli)、[anjuke-cli](https://github.com/better-world-ai/x-cli/tree/main/anjuke-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "请帮我在上海张江高科地铁站附近找租房，预算 4500 元以内，通勤控制在 40 分钟内，优先整租一居室。打开多个平台整理房源链接、价格、面积和通勤时间，给出优先联系清单。",
    },
  ]}
/>

安装与使用：

1. 从 [Releases](https://github.com/better-world-ai/x-cli/releases) 下载 58-cli、anjuke-cli
2. 运行 `npx skills add better-world-ai/x-cli --skill rental-assistant`
3. 打开本地 Agent（如 Kimi Code、Claude Code、Codex CLI、Cursor 等支持 Skill 的客户端），发上面的 prompt

## 内容调研与分析

WebBridge 可以帮助 Agent 自动浏览搜索结果、进入详情页，提取标题、数据、评论等信息并做分析总结，适合需要大量浏览网页的调研类任务。

### 文献调研

搜索学术文献，提取论文摘要、核心方法、实验结论和引用关系，输出结构化综述。

相关工具：

- Skill：[paper-research](https://github.com/better-world-ai/x-cli/tree/main/skills/paper-research)
- CLI：[scholar-cli](https://github.com/better-world-ai/x-cli/tree/main/scholar-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "请帮我调研 AI Agent memory 方向近两年的代表性论文，整理标题、作者、摘要、核心方法和开源地址，总结研究脉络。",
    },
  ]}
/>

安装与使用：

1. 从 [Releases](https://github.com/better-world-ai/x-cli/releases) 下载 scholar-cli
2. 运行 `npx skills add better-world-ai/x-cli --skill paper-research`
3. 打开本地 Agent（如 Kimi Code、Claude Code、Codex CLI、Cursor 等支持 Skill 的客户端），发上面的 prompt

### 热点话题分析

在内容平台搜索热门话题，整理热度数据、标题模式和用户评论关键词，为内容创作提供选题参考。

相关工具：

- CLI：xiaohongshu-cli

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我正在做小户型租房改造方向的内容选题。请在相关平台搜索热门笔记，整理标题、互动数据和评论关键词，总结 5 个适合继续创作的选题方向。",
    },
  ]}
/>

安装与使用：

1. 通过 Homebrew 安装：`brew install xpzouying/agent-cli/xiaohongshu-cli`
2. 打开本地 Agent（如 Kimi Code、Claude Code、Codex CLI、Cursor 等支持 Skill 的客户端），发上面的 prompt

## 日常办公辅助

利用 WebBridge 的自动化能力，处理重复性的网页操作任务，提升工作效率。

### 电商比价

在多个电商平台搜索同一商品，对比价格、规格和用户评价，整理最优购买方案。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我想买一台 27 英寸 4K 显示器，预算 2000 元左右。请在主流电商平台搜索对比，整理价格、品牌和用户评价，推荐最值得购买的选项。",
    },
  ]}
/>

### 网页数据提取

从网页中提取表格、列表等结构化数据，自动整理成指定格式，省去手动复制粘贴的麻烦。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "请帮我打开这个网页，把页面上的产品价格表格提取出来，整理成清晰的列表输出。",
    },
  ]}
/>

更多使用案例请参考 [Kimi WebBridge 官网](https://www.kimi.com/zh-cn/features/webbridge)。
