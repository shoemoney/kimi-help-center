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

[Claude Code](https://code.claude.com/docs/en/overview) 是 Anthropic 推出的命令行编程助手。

### 配置步骤

安装完成后请不要直接启动 Claude。先在终端执行以下脚本，跳过 Anthropic 默认的登录流程：

<CodePreview
  files={[
    {
      name: "skip-onboarding.sh",
      content: "node --eval \"\n// enable third party model support and fast mode\nconst claudeJsonFilePath = path.join(os.homedir(), '.claude.json');\nif (fs.existsSync(claudeJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeJsonFilePath, 'utf-8'));\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ ...content, penguinModeOrgEnabled: true, hasCompletedOnboarding: true }, null, 2), 'utf-8');\n} else {\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ penguinModeOrgEnabled: true, hasCompletedOnboarding: true }), 'utf-8');\n}\n\n// delete old model id\nconst claudeSettingsJsonFilePath = path.join(os.homedir(), '.claude', 'settings.json');\nif (fs.existsSync(claudeSettingsJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeSettingsJsonFilePath, 'utf-8'));\n    if (typeof content === 'object' && typeof content.env === 'object') {\n        for (const element of [\n            'ANTHROPIC_MODEL',\n            'ANTHROPIC_SMALL_FAST_MODEL',\n            'CLAUDE_CODE_SUBAGENT_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME',\n        ]) {\n            delete content.env[element];\n        }\n        fs.writeFileSync(claudeSettingsJsonFilePath, JSON.stringify(content, null, 2), 'utf-8');\n    }\n}\n\"",
    },
  ]}
/>

完成后，再设置环境变量并启动：

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

2. 使用 `kimi-for-coding` 模型启动 Claude Code：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-for-coding",
    },
  ]}
/>

> 在 Claude Code 中，你可以按 **Tab** 切换到 Kimi K2 Thinking 模型。

> 如果遇到由 `tool_search` 调用导致的 400 错误，可通过设置环境变量 `ENABLE_TOOL_SEARCH=false` 临时解决。

### 切换到高速版

高速版输出速度约为标准版的 5–6 倍，**额度消耗约为标准版的 3 倍**，需 [Allegretto](https://www.kimi.com/membership/pricing) 及以上套餐。在 Claude Code 中有两种开启方式：

- **方式一：`/fast on` 命令**——启动 Claude Code 后输入 `/fast on`，出现 `⚡ Fast mode ON` 即为开启成功。
- **方式二：`/config` 命令**——输入 `/config` 打开配置面板，在 **Config** 标签下开启 **Fast mode**（以及 **Thinking mode**）即可。

## 与 Roo Code 配合使用

[Roo Code](https://github.com/RooCodeInc/Roo-Code) 是一款适用于 VS Code 的 AI 编程扩展。

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
   | 模型 | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. 保存配置后即可开始使用。

## 重要说明

- 使用时请保持工具的真实身份标识，篡改客户端标识（User-Agent）将被视为违规，可能导致会员权益暂停。
- 如有疑问，请参阅[权益](/kimi-code/benefits)页面，或联系 Kimi 支持团队。
