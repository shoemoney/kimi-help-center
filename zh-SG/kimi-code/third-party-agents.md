---
title: "与第三方编程智能体配合使用"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="与第三方编程智能体配合使用 - Kimi 帮助中心"
  description="Kimi Code 权益可与 Claude Code 和 Roo Code 配合使用，让你在偏好的编程工具中享受 Kimi 的 AI 能力。"
/>

# 与第三方编程智能体配合使用

Kimi Code 权益可与 Claude Code 和 Roo Code 配合使用，让你在偏好的编程工具中享受 Kimi 的 AI 能力。

## 前提条件

- 已开通 Kimi 会员，并启用 Kimi Code 权益。
- 一个 API 密钥（在 [Kimi 控制台](https://www.kimi.com/code)创建）。

## 与 Claude Code 配合使用

[Claude Code](https://www.docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) 是 Anthropic 推出的命令行编程助手。

### 配置步骤

1. 设置环境变量：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. 使用 `kimi-k2.5` 模型启动 Claude Code：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-k2.5",
    },
  ]}
/>

> 在 Claude Code 中，你可以按 **Tab** 切换到 Kimi K2 Thinking 模型。

> 如果遇到由 `tool_search` 调用导致的 400 错误，可通过设置环境变量 `ENABLE_TOOL_SEARCH=false` 临时解决。

## 与 Roo Code 配合使用

[Roo Code](https://www.github.com/RooCodeInc/Roo-Code) 是一款适用于 VS Code 的 AI 编程扩展。

### 安装 Roo Code

1. 在 VS Code 扩展市场中搜索 **Roo Code** 并安装。
2. 安装完成后，活动栏中会出现 Roo Code 图标；如果没有出现，请重启 VS Code。

### 配置 Kimi Code 模型

1. 打开 Roo Code 面板，进入 **设置** 页面。
2. 在 **提供商** 部分，选择 **OpenAI 兼容**，并填写以下信息：

   | 设置项 | 值 |
   | --- | --- |
   | 入口地址 | `https://api.kimi.com/coding/v1` |
   | API 密钥 | 你的 API 密钥 |
   | 模型 | `kimi-k2.5` |

3. 保存配置后即可开始使用。

## 重要说明

- Kimi Code 权益仅支持在 **Kimi Code CLI**、**Claude Code** 和 **Roo Code** 中使用。
- 在未授权的平台或工具中使用你的 API 密钥，可能会被视为违规，并导致访问受限。
- 如有疑问，请参阅[权益](/kimi-code/benefits)页面，或联系 Kimi 支持团队。
