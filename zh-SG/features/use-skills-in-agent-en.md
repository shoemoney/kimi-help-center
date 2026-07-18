---
title: "在 Agent 模式中使用技能"
slug: "use-skills-in-agent"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="在 Agent 模式中使用技能 - Kimi 帮助中心"
  description="了解如何调用技能、创建自定义技能、发现推荐技能，并在 Agent 模式中扩展 Kimi 的能力。"
  ogType="article"
/>

# 在 Agent 模式中使用技能

## 如何调用技能？

在 Kimi Agent 模式 的输入框中，你可以通过三种方式调用技能：

**方法 1：使用 `/` 命令**

在输入框中输入 `/`，即可打开技能列表。点击技能名称即可插入。你也可以在 `/` 后继续输入关键词来筛选列表。

**方法 2：使用“➕”菜单**

点击输入框旁边的 **➕** 按钮。从菜单中选择一个技能后，技能名称会以文本形式插入到输入框中。

<Frames
  src="./images/skills/加号-en.png"
  alt="使用加号菜单调用技能"
/>

**方法 3：让 Kimi 自动判断**

直接描述你的需求即可。Kimi 会根据任务内容自动识别并触发最合适的技能。

### 示例：用技能生成 SEO 分析报告

假设你是一名内容经理，希望分析自己网站的 SEO 表现：

1. 在输入框中输入 `/`，找到并选择 `seo-analyzer` 技能。
2. 继续输入：`Please analyze https://help.com/zh-cn/help's SEO performance, list the main issues and optimization suggestions.`

<Frames
  src="./images/skills/SEO-en.png"
  alt="SEO 分析"
/>

3. 发送后，Kimi 会按照 SEO 分析流程自动搜索、整理，并输出结构化报告。

你无需告诉 Kimi 具体该如何分析——相关流程已经在技能中定义好了。

## 发现和管理技能

### Kimi 精选

Kimi 提供了一组开箱即用的推荐技能，可一键添加：

<Frames
  src="./images/skills/kimi-picks.png"
  alt="推荐技能"
/>

## 自定义技能

如果 Kimi 推荐的技能无法满足你的需求，你可以创建适合自己具体工作流的自定义技能。

**什么时候应该创建自定义技能？**

- 你有需要反复执行的周期性任务（例如每周竞品报告）。
- 你希望 Kimi 按照公司指定格式输出内容。
- 你有一套工作方法，希望 Kimi 直接遵循。

好的技能应该专注做好一件事。不要试图把所有需求都塞进一个技能里。

### 方式 1：用文档生成技能

如果你已经有现成模板、标准文档或示例文件，可以直接上传，让 Kimi 学习并生成对应技能。

1. 在**技能**面板中选择**将 Office 文档转为技能**。
2. 点击上传区域，或将文件拖拽到上传区域。支持格式：`docx`、`xlsx`、`pdf`、`pptx` 以及文档截图。每次最多上传 3 个文件，每个文件不超过 100 MB。

<Frames
  src="./images/skills/document.png"
  alt="上传文档生成技能"
/>

3. 填写技能描述，告诉 Kimi 这个技能应该做什么。例如：“请按这个模板的风格和格式，帮我整理每周销售数据。”
4. 点击**创建技能**。

### 方式 2：和 Kimi 一起创建

如果你没有现成文档，也可以直接通过对话描述需求，Kimi 会一步步引导你完成技能创建。

在输入框中输入 `/skill-creator`，然后描述你想创建什么技能。Kimi 会帮你把需求整理成一个完整的技能。

<Frames
  src="./images/skills/create-skill-en.png"
  alt="通过对话创建技能"
/>

### 管理已有技能

在**技能**面板中，切换到**自定义技能**标签页，即可编辑、更新文档或删除你创建的技能。

<Frames
  src="./images/skills/managing-skills.png"
  alt="管理自定义技能"
/>

<Callout type="info">
Agent 模式 和 Kimi Claw 均支持技能。带有 `swarm` 后缀的技能仅适用于 Swarm（Agent 集群）场景，不会在其他上下文中显示。
</Callout>

## 编写有效的技能描述

Kimi 会根据技能描述来判断“什么时候使用这个技能”。描述越清晰，技能被准确触发的概率就越高。

一段完整的技能描述应包括：
- 技能的核心功能。
- 适用场景。
- 可响应的触发词。
- 对需求间接表述的识别。

<ComparisonBlock
  wrong={"帮助用户搜索和发现技能。"}
  correct={"帮助用户搜索和发现技能。适用于用户明确想查找某类技能，或描述了一个问题并希望获得技能推荐的场景。触发词包括“查找技能”“搜索技能”“有没有能做 X 的技能？”等。"}
/>
