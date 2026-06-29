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

[Claude Code](https://docs.anthropic.com/en/docs/claude-code) is a command-line coding assistant from Anthropic. For installation instructions, see the [official Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/getting-started).

<Callout type="info">
  After installation, skip Anthropic’s default login flow. Run the following command in your terminal:
</Callout>

<CodePreview
  files={[
    {
      name: "skip-onboarding.sh",
      language: "bash",
      content:
        'node --eval \'\nconst os = require("os"), fs = require("fs"), path = require("path");\nconst homeDir = os.homedir();\nconst filePath = path.join(homeDir, ".claude.json");\nif (fs.existsSync(filePath)) {\n    const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));\n    fs.writeFileSync(filePath, JSON.stringify({ ...content, hasCompletedOnboarding: true }, null, 2), "utf-8");\n} else {\n    fs.writeFileSync(filePath, JSON.stringify({ hasCompletedOnboarding: true }), "utf-8");\n}\n\'',
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
        "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/\nexport ANTHROPIC_API_KEY=你的API Key\n\nclaude",
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
        '$env:ANTHROPIC_BASE_URL="https://api.kimi.com/coding/"\n$env:ANTHROPIC_API_KEY="你的API Key"\n\nclaude',
    },
  ]}
/>

<Callout type="tip">
  After startup, enter `/status` to confirm that the model is active. You can use keyboard shortcuts to enable Thinking mode: on macOS,
  use `Option+T`; on Windows and Linux, use `Alt+T`.
</Callout>

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
   | Model              | `kimi-k2.5`                      |

3. Save the configuration to start using it.

## Notes

- Kimi Code benefits are supported only in **Kimi Code CLI**, **Claude Code**, and **Roo Code**.
- Using your API Key on other unauthorized platforms or tools may be considered a violation and may lead to restrictions on your benefits.
- If you have questions, see the [Benefits overview](/kimi-code/benefits) or contact Kimi Support.

## Detailed tutorial

- [Use in third-party Coding Agents (Claude Code, Roo Code)](https://www.kimi.com/code/docs/third-party-tools/other-coding-agents.html)
