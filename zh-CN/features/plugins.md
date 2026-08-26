---
title: "插件（Plugins）"
slug: "plugins"
order: 6
extract_headings: false
preview: true
preview_content: "将外部工具接入 Kimi，使它可以使用应用和服务完成任务。安装插件后，Kimi 就能调用金融数据、办公软件、设计工具等第三方能力来帮你完成任务。"
---

<SeoMeta
  title="Kimi 插件（Plugins）是什么？如何安装和使用 - Kimi 帮助中心"
  description="了解 Kimi 的插件（Plugins）：把金融数据、办公软件、设计工具等外部服务接入 Kimi，安装后即可在完成任务时直接调用。含可用场景、安装授权、唤起方式、插件分类清单与会员额度说明。"
/>

# 插件（Plugins）

插件（Plugins）将外部工具接入 Kimi，使它可以使用应用和服务完成任务。安装一个插件后，Kimi 就能在完成任务时直接调用对应的第三方能力——比如查询金融数据、操作办公软件、调用设计工具等。你可以在需要时主动指定使用某个插件，Kimi 也会在合适的时候自动调用它。

## 什么是 Kimi 插件

Kimi Plugin 遵循 [Kimi Code 的插件定义](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html#plugin-manifest)，可以包含以下一种或多种组件：

| 内容 | 作用 |
| --- | --- |
| Skills | 提供完成任务所需的知识、步骤和使用方法 |
| MCP | 连接外部软件、服务、数据库或 API |
| Agents | 让复杂任务可以由专门的子 Agent 协作完成 |
| Hooks | 在特定事件发生时自动执行预设动作 |
| Commands | 提供明确、可复用的命令式入口 |
| System Prompt | Plugin 启用期间，向主 Agent 追加系统提示词 |

目前 Kimi Web 端支持插件中的 MCP 和 Skills；Kimi Work 和 Kimi Code 对齐上述插件定义，支持更完整的插件组件组合。

**典型例子：**

- **Notion Plugin** = Notion MCP + 使用说明 Skill
- **金融投研 Plugin** = 多个金融 MCP + 多个分析 Skill + 自定义 Agent

## 在哪些场景可用

在 Kimi 中将模型切换为 **K3** 或 **K3 集群**，以及在 **深度研究、网站、PPT** 场景中，都可以使用插件。

在 **Kimi Work 桌面端**也可以使用插件；桌面端内置的插件清单见 [Kimi Work 插件中心](/kimi-work/plugin-center)。

<Callout type="info">
Kimi Claw、Kimi Plus 会话中暂不支持插件。
</Callout>

## 如何安装

- **入口**：在输入框的【+】或输入「/」；移动端在输入框的【+】或「/」。
- 在插件市场中搜索或浏览，进入插件详情页点击安装。
- 部分插件需要 **OAuth 授权**（跳转第三方登录，授权成功后即可使用）；部分插件为**预装**，无需手动安装。
- **仅企业版插件**：非企业版用户可以看到，但「安装」按钮为置灰状态，无法安装。
- 未登录时无法安装或使用插件。

## 如何使用

- 安装后，在输入框输入「/」或点【+】→插件，选择要用的插件即可唤起；**支持同时唤起多个插件**。
- 你也可以直接描述需求（例如「用天眼查查一下这家公司」），Kimi 会自动选择合适的插件。
- Kimi 调用插件工具时，会在回复中显示「正在使用 xx 插件」。

## 插件分类与清单

插件市场按以下分类组织。实际可见的插件会因**地区（国内 / 海外）**和**使用端**而有所不同，部分插件跨多个分类展示。

- **金融**：金融投资分析、投资银行私募股权、企业财务会计、万得金融数据服务、标普全球市场财智、恒生聚源金融数据、同花顺 iFinD 金融数据库、SEC、全球金融数据库、世界银行公开数据、IMF 国际货币基金组织数据库、Stripe、天眼查
- **效率办公**：Notion、百度网盘
- **代码开发**：GitHub、Supabase、Neon、Cloudflare
- **创意设计**：灵感池、图像生成、视频生成、音频生成、Canva 可画
- **通用工具**：灵动报告

## 会员额度

部分插件在完成任务时会调用相应的工具或服务，并**按实际调用情况消耗会员额度**；没有调用成本的插件不额外收费。

## 数据与权限

- 当你选择或明确要求使用某个插件时，Kimi 会优先调用该插件提供的工具，并基于工具返回的结果生成回答；连接插件后，Kimi 会在你授权的范围内访问相关内容。
- 如使用第三方提供的插件，其数据处理规则由该公司独立制定，相关数据受其服务条款和隐私政策约束，建议你在授权前查阅。
- 你可以**随时卸载插件或撤销授权**。卸载后相关 OAuth 授权会失效；再次使用需重新安装并授权。

## 如何在 Kimi Work 中自定义插件

请先下载并安装 [Kimi Work](https://www.kimi.com/products/kimi-work)，然后按照以下步骤创建和测试个人插件：

1. <strong>创建插件。</strong>打开 Kimi Work，在会话中通过 slash 唤起 <strong>Plugin Builder 技能</strong>，描述希望创建的插件并提供相关信息，然后按照引导完成创建。如果你已有 ChatGPT、Claude 或其他平台的插件，也可以将原始插件文件提供给 Plugin Builder，请它转换为 Kimi 插件。

<Frames
  src="./images/plugins/custom-plugin-1.png"
  alt="在 Kimi Work 中创建插件"
  width={1312}
  height={256}
/>

2. <strong>安装插件。</strong>创建完成后，进入「插件」→「个人」，找到刚刚创建的插件并安装。

<Frames
  src="./images/plugins/custom-plugin-2.png"
  alt="在个人插件中安装插件"
  width={1384}
  height={400}
/>

3. <strong>在会话中使用。</strong>在新会话中通过 slash 唤起插件，使用自然语言提出任务请求，确认插件能够被正确唤起并完成预期操作。建议同时覆盖正常功能和异常或边界情况。

<Frames
  src="./images/plugins/custom-plugin-3.png"
  alt="在会话中通过 slash 唤起插件"
  width={1306}
  height={244}
/>

## 常见问题

### 使用插件会消耗会员额度吗？
部分插件会。Kimi 调用插件的工具或服务完成任务时，会按实际调用情况消耗会员额度；没有调用成本的插件不额外收费。

### 可以同时使用多个插件吗？
可以。通过「/」或【+】能一次唤起多个插件。

### 为什么我看不到某个插件？
可用的插件会因地区（国内 / 海外）和使用端而不同；此外部分插件仅对个人版/企业版用户开放。

### 可以在 Kimi 中使用 ChatGPT、Claude 或其他平台的插件吗？
你可以参考【在 Kimi Work 自定义插件】部分，将其他平台的已有插件文件或项目链接提供给 Plugin Builder，按照引导将其转换为 Kimi 插件。

### OAuth 授权流程是什么样的？
对于支持 OAuth 的 MCP Server，Plugin Builder 会根据 MCP Server 地址识别相关授权信息。插件创建完成后，首次安装时会进入第三方产品的授权页面。以下为 Canva 插件示例：

完成授权后，请确认插件能够正常调用核心功能。
