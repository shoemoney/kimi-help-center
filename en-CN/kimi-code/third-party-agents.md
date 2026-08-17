---
title: "Use in third-party Coding Agents"
slug: "third-party-agents"
order: 13
extract_headings: false
preview: true
preview_content: "Use Kimi models in third-party Agents such as Claude Code and Roo Code."
---

<SeoMeta
  title="Use Kimi in third-party Coding Agents - Kimi Help Center"
  description="Learn how to configure and use Kimi models in third-party Coding Agents such as Claude Code and Roo Code, including environment variable setup and API-compatible configuration steps."
/>

# Use in third-party Coding Agents

Kimi Code benefits support use in mainstream Coding Agents, such as Claude Code, Roo Code, and OpenCode. You can also use them with general Agent frameworks such as OpenClaw and Hermes, so you can freely call Kimi’s AI capabilities from the tools you already use.

This guide shows how to configure Claude Code and Roo Code.

## Prerequisites

- You have subscribed to Kimi membership and activated Kimi Code benefits.
- You have obtained an API Key, created in the [Kimi Code console](https://www.kimi.com/code/console).

## Use in Claude Code

[Claude Code](https://code.claude.com/docs) is a command-line coding assistant from Anthropic. For installation instructions, see the [official Claude Code documentation](https://code.claude.com/docs/en/getting-started).

<Callout type="info">
  After installation, skip Anthropic’s default login flow. Run the following command in your terminal:
</Callout>

<CodePreview
  files={[
    {
      name: "skip-onboarding.sh",
      content: "node --eval \"\n// enable third party model support and fast mode\nconst claudeJsonFilePath = path.join(os.homedir(), '.claude.json');\nif (fs.existsSync(claudeJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeJsonFilePath, 'utf-8'));\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ ...content, penguinModeOrgEnabled: true, hasCompletedOnboarding: true }, null, 2), 'utf-8');\n} else {\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ penguinModeOrgEnabled: true, hasCompletedOnboarding: true }), 'utf-8');\n}\n\n// delete old model id\nconst claudeSettingsJsonFilePath = path.join(os.homedir(), '.claude', 'settings.json');\nif (fs.existsSync(claudeSettingsJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeSettingsJsonFilePath, 'utf-8'));\n    if (typeof content === 'object' && typeof content.env === 'object') {\n        for (const element of [\n            'ANTHROPIC_MODEL',\n            'ANTHROPIC_SMALL_FAST_MODEL',\n            'CLAUDE_CODE_SUBAGENT_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME',\n        ]) {\n            delete content.env[element];\n        }\n        fs.writeFileSync(claudeSettingsJsonFilePath, JSON.stringify(content, null, 2), 'utf-8');\n    }\n}\n\"",
    },
  ]}
/>

### Configure the Kimi Code model

Set the environment variables, then start Claude Code:

**macOS / Linux**

<CodePreview
  files={[
    {
      name: "mac-linux.sh",
      language: "bash",
      content:
        "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/\nexport ANTHROPIC_API_KEY=your-api-key\n\nclaude",
    },
  ]}
/>

**Windows**

<CodePreview
  files={[
    {
      name: "windows.ps1",
      language: "powershell",
      content:
        '$env:ANTHROPIC_BASE_URL="https://api.kimi.com/coding/"\n$env:ANTHROPIC_API_KEY="your-api-key"\n\nclaude',
    },
  ]}
/>

<Callout type="tip">
  After startup, enter `/status` to confirm that the model is active. You can use keyboard shortcuts to enable Thinking mode: on macOS,
  use `Option+T`; on Windows and Linux, use `Alt+T`.
</Callout>

### Switching to HighSpeed

HighSpeed delivers roughly 5–6× the output speed of Standard at about **3× the credit usage**, and requires an [Allegretto](https://www.kimi.com/membership/pricing) plan or above. There are two ways to enable it in Claude Code:

- **Option 1: the `/fast on` command** — after starting Claude Code, type `/fast on`; the `⚡ Fast mode ON` output confirms it's enabled.
- **Option 2: the `/config` command** — type `/config` to open the config panel, then enable **Fast mode** (and **Thinking mode**) under the **Config** tab.

## Use in Roo Code

[Roo Code](https://github.com/RooCodeInc/Roo-Code) is an AI coding extension for VS Code.

### Install Roo Code

1. Search for **Roo Code** in the VS Code Extensions Marketplace and install it.
2. After installation, the Roo Code icon appears in the Activity Bar. If it does not appear, restart VS Code.

### Configure the Kimi Code model

1. Open the Roo Code panel and go to the **Settings page**.
2. In the **Providers** section, select **OpenAI Compatible** and fill in the following as prompted:

   | Configuration item | Value                            |
   | ------------------ | -------------------------------- |
   | Entrypoint         | `https://api.kimi.com/coding/v1` |
   | API Key            | Your API Key                     |
   | Model              | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. Save the configuration to start using it.

## Notes

- When using third-party tools, please keep the tool's genuine identity; tampering with the client identifier (User-Agent) will be treated as a violation and may result in suspension of your membership benefits.
- If you have questions, see the [Benefits overview](/kimi-code/benefits) or contact Kimi Support.

## Detailed tutorial

- [Use in third-party Coding Agents (Claude Code, Roo Code)](https://www.kimi.com/code/docs/third-party-tools/other-coding-agents.html)
