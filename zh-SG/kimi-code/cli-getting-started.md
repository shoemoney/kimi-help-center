---
title: "快速上手"
slug: "cli-getting-started"
order: 3
extract_headings: false
preview: true
preview_content: "Kimi Code 命令行界面（CLI）的安装、登录与入门指南。"
---

<SeoMeta
  title="Kimi Code 命令行界面（CLI）安装与快速上手 - Kimi 帮助中心"
  description="了解如何开始使用 Kimi Code 命令行界面（CLI）：安装命令、终端与浏览器用法、首次登录，以及使用 /init 生成 AGENTS.md。"
/>

# Kimi Code 命令行界面（CLI）入门

Kimi Code 命令行界面（CLI）是一款在终端中运行的 AI 智能体，可帮助你完成软件开发任务和日常终端操作——读取与修改代码、运行 shell 命令、搜索文件、获取网页，并在执行过程中根据反馈自主规划和调整下一步。

它适用于以下场景：

- **编写和修改代码**：实现新功能、修复 bug、完成重构
- **理解项目**：探索陌生代码库，回答有关架构和实现的问题
- **自动化任务**：批量处理文件、运行构建和测试、串联多个脚本

该命令行界面（CLI）使用 TypeScript 编写，通过 npm 分发，并运行在 Node.js 上。

## 开始之前

- **操作系统**：macOS、Linux 或 Windows（通过 PowerShell）
- **Kimi 账户**：有效的 Kimi 会员订阅，或可调用的 API 密钥

<Callout type="tip">
Kimi Code 命令行界面（CLI）是一个完全交互式的 TUI 应用。为获得最佳视觉体验，建议在支持真彩色和连字的终端中运行，例如 [Kitty](https://sw.kovidgoyal.net/kitty/) 或 [Ghostty](https://ghostty.org/)。
</Callout>

## 安装

有两种安装方式可选：官方安装脚本（推荐，无需预先安装 Node.js）和全局 npm 安装。

### 安装脚本（推荐）

macOS / Linux：

<Frames
  src="./images/cli-getting-started/screenshot-23.png"
  alt="安装 Kimi Code 命令行界面（CLI）"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

Windows（PowerShell）：

<CodePreview
  files={[
    {
      name: "command.ps1",
      language: "powershell",
      content: "irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

脚本会自动下载最新版本、校验 checksum，并将 `kimi` 可执行文件放到你的 `PATH` 中。

<Callout type="tip">
在 Windows 上，首次启动前请先安装 [Git for Windows](https://gitforwindows.org/)。Kimi Code 命令行界面（CLI）会使用随附的 Git Bash 作为 shell 环境；如果 Git Bash 安装在自定义位置，请将 `KIMI_SHELL_PATH` 设置为 `bash.exe` 的绝对路径。
</Callout>

### npm 安装

如果你已经安装 Node.js 22.19.0 或更高版本，可以直接通过 npm 安装：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "node --version\nnpm install -g @moonshot-ai/kimi-code",
    },
  ]}
/>

或使用 pnpm：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "pnpm add -g @moonshot-ai/kimi-code",
    },
  ]}
/>

### 验证安装

安装完成后，确认可执行文件已就绪：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>

<Callout type="tip">
如果找不到 `kimi` 命令，请尝试重新打开终端，或运行 `source ~/.bashrc`（或 `~/.zshrc`）。
</Callout>

> 由于 macOS Gatekeeper 的原因，首次运行 `kimi` 可能会明显更久。将终端应用添加到 **系统设置 → 隐私与安全性 → 开发者工具** 后，后续启动会更快。

## 升级与卸载

**升级**：运行 `kimi upgrade`——命令行界面（CLI）会检查最新版本并展示更新选项。选择 `Install update now` 后，会根据你当前的安装来源进行升级。你也可以直接通过包管理器升级：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

**卸载**：如果你是通过脚本安装的，请删除 `kimi` 可执行文件。如果你是通过 npm 安装的：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm uninstall -g @moonshot-ai/kimi-code",
    },
  ]}
/>

## 首次启动

### 交互式终端

进入你的项目目录，并运行 `kimi` 启动交互式界面：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd your-project\nkimi",
    },
  ]}
/>

### 单条指令

如需在不进入交互式界面的情况下运行单条指令，请使用 `-p`：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"Take a look at this project's directory structure\"",
    },
  ]}
/>

### 恢复会话

如需恢复上一次会话，请添加 `-C`：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -C",
    },
  ]}
/>

### 首次登录

首次启动时，你需要配置 API 来源。在交互式界面中输入 `/login`，开始登录流程：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

`/login` 会打开平台选择器，支持以下两种方式：

- **Kimi Code (OAuth)** — 设备代码流程；在任意设备上打开链接、登录，并输入代码完成授权
- **Kimi Platform API 密钥** — 输入来自 `platform.kimi.com` 或 `platform.kimi.ai` 的 API 密钥

如需退出登录，请输入 `/logout` 清除当前凭据。

<Callout type="tip">
如果你想连接 Anthropic、OpenAI、Google 或其他提供商，请直接编辑 `~/.kimi-code/config.toml` 来配置 API 密钥。所有配置项的完整参考，请查看环境变量与配置覆盖文档。
</Callout>

## 生成 AGENTS.md

在你的项目目录中运行 `/init` 命令。Kimi Code 命令行界面（CLI）会自动扫描项目结构，并生成 `AGENTS.md` 文件：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

`AGENTS.md` 用于向 AI 提供项目背景信息、构建步骤、代码规范和其他上下文，帮助 AI 更准确地理解你的项目。

## 开始第一次对话

登录后，用自然语言描述任务即可。一个不错的起点，是让 Kimi Code 命令行界面（CLI）先熟悉项目：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "查看这个项目的目录结构，并简要说明每个目录的用途。",
    },
  ]}
/>

Kimi Code 命令行界面（CLI）会自动调用文件读取、搜索等工具，先浏览相关内容再作答。默认情况下，只读操作会自动执行，无需你确认；对于会修改文件或运行 shell 命令的操作，它会在继续前请求你的确认。

你也可以直接描述一个更具体的任务：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "在 src/utils 中添加一个函数，将任意字符串转换为 kebab-case，并为它添加单元测试。",
    },
  ]}
/>

Kimi Code 命令行界面（CLI）会规划步骤、修改代码、运行测试，并告诉你每一步做了什么。

<Callout type="tip">
不知道下一步做什么？随时输入 `/help` 打开内置命令和键盘快捷键面板。使用 `↑`/`↓` 浏览，按 `Esc` 关闭。要退出，请输入 `/exit`，连续按两次 `Ctrl-C`，或在输入框为空时按 `Ctrl-D`。
</Callout>

## 常用命令和键盘快捷键

### 会话命令

| 命令 | 说明 |
| --- | --- |
| `/new` | 开始新会话，并清除当前上下文 |
| `/sessions` | 浏览会话历史，并选择一个会话继续 |
| `/model` | 切换当前模型 |
| `/compact` | 手动压缩上下文以释放 token |
| `/fork` | 复刻当前会话，保留历史但独立继续 |

### 最常用的键盘快捷键

| 快捷键 | 说明 |
| --- | --- |
| `Esc` | 中断流式输出 / 关闭弹窗 |
| `Ctrl-C` | 中断输出；空闲时连续按两次可退出 |
| `Shift-Tab` | 切换计划模式 |
| `Ctrl-S` | 在流式输出过程中插入消息，无需等待当前回复结束 |
| `Ctrl-O` | 折叠 / 展开工具输出 |

如需完整列表，请输入 `/help`，或访问 [交互与输入](/kimi-code/cli-interaction)。

## 数据存储位置

默认情况下，Kimi Code 命令行界面（CLI）会将本地数据存储在 `~/.kimi-code/` 下，包括配置文件、会话记录、日志和更新缓存。如需迁移到其他位置，请通过 `KIMI_CODE_HOME` 环境变量指向新的路径。完整目录结构请查看环境变量文档。

## FAQ

**我输入了 API Key，但提示认证失败。**

请先确认你的 API 密钥和 Base URL 属于同一平台。`api.kimi.com` 和 `api.moonshot.cn` 是两个完全独立的账户体系，它们的 API 密钥不能混用：

| 平台 | Base URL | 计费 | 密钥创建 |
|------|---------|---------|-------------|
| **Kimi Code** | OpenAI 兼容：`https://api.kimi.com/coding/v1`<br> Anthropic 兼容：`https://api.kimi.com/coding/` | Kimi 会员订阅（含配额） | [Kimi Code Console](https://www.kimi.com/code/console) |
| **Kimi 开放平台** | `https://api.moonshot.cn/v1` | 按量付费 | [Kimi 开放平台](https://platform.kimi.com) |

**安装后找不到 `kimi` 命令。**

安装脚本会将 `kimi` 添加到你的 PATH，但你需要重启终端，或运行 `source ~/.bashrc`（或 `source ~/.zshrc`）后才会生效。如果仍然找不到，请检查 `~/.local/bin` 是否在你的 PATH 中。

**运行 `/login` 后浏览器没有自动弹出。**

在远程服务器或无头环境中，`/login` 会显示一个 URL。请手动复制到浏览器中完成授权。

如有任何问题或建议，请在 [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues) 反馈。

## 下一步

- [交互与输入](/kimi-code/cli-interaction) — 输入框操作、审批流程、计划模式和 YOLO 模式说明
- [会话与上下文](/kimi-code/cli-sessions) — 恢复会话、压缩上下文、导出会话
- [常见使用场景](/kimi-code/cli-use-cases) — 典型任务的 prompt 示例
