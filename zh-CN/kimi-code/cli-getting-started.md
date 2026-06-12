---
title: "开始使用"
slug: "cli-getting-started"
order: 6
extract_headings: false
preview: true
preview_content: "Kimi Code CLI 安装、登录与初始化的快速入门指南。"
---

<SeoMeta
  title="Kimi Code CLI 安装与快速入门 - Kimi 帮助中心"
  description="从零开始使用 Kimi Code CLI：安装命令、三种使用方式（终端/浏览器/IDE）、首次登录四步指引，以及用 /init 生成项目配置文件。"
/>
# 开始使用 Kimi Code CLI

Kimi Code CLI 是一个运行在终端中的 AI Agent，帮助你完成软件开发任务和终端操作。它可以阅读和编辑代码、执行 Shell 命令、搜索和抓取网页，并在执行过程中自主规划和调整方案。

## 适合场景

- **编写和修改代码**：实现新功能、修复 bug、完成重构
- **理解项目**：探索陌生的代码库，解答架构和实现层面的问题
- **自动化任务**：批量处理文件、运行构建与测试、串联多个脚本

整套 CLI 以 TypeScript 编写，通过 npm 分发，运行在 Node.js 之上。


## 三种使用方式

| 方式 | 命令 | 说明 |
| --- | --- | --- |
| 交互式终端 | `kimi` | 在终端中与 AI 对话，适合日常开发 |
| 浏览器界面 | `kimi web` | 在浏览器中打开交互界面 |
| Agent 集成 | `kimi acp` | 通过 ACP 协议集成到 IDE 中使用 |

## 开始之前

- **操作系统**：macOS、Linux 或 Windows（通过 PowerShell）
- **Kimi 账号**：需拥有 Kimi 会员订阅，或可调用的 API key

## 安装

::: tip 安装之前
Kimi Code CLI 为全交互式 TUI 应用，推荐在支持真彩色与连字的现代终端中运行以获得最佳体验，例如 [Kitty](https://sw.kovidgoyal.net/kitty/) 或 [Ghostty](https://ghostty.org/)。
:::

<Frames
  src="./images/cli-getting-started/cli-getting-started-01.png"
  alt="安装 uv 和 Kimi Code CLI"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "sh",
      content: "# Linux / macOS\curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "example.txt",
      language: "powershell",
      content: "# Windows (PowerShell)\irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

> Windows 用户首次启动前还需要安装 [Git for Windows](https://gitforwindows.org/)，Kimi Code CLI 会使用其中的 Git Bash 作为 Shell 环境。如果 Git Bash 安装在非标准路径，请把 `KIMI_SHELL_PATH` 设为 `bash.exe` 的绝对路径。

脚本会自动下载最新版本、校验 checksum，并把 `kimi` 可执行文件放到你的 `PATH` 中。

### npm 安装

需要 Node.js 22.19.0 或更高版本：

```sh
node --version
npm install -g @moonshot-ai/kimi-code
```

或用 pnpm：

```sh
pnpm add -g @moonshot-ai/kimi-code
```

验证安装是否成功：

<Frames
  src="./images/cli-getting-started/cli-getting-started-02.png"
  alt="验证安装"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>


> 由于 macOS 的安全检查机制（Gatekeeper），首次运行 `kimi` 命令可能需要较长时间。可以在「系统设置 → 隐私与安全性 → 开发者工具」中添加你的终端应用来加速后续启动。


<Callout type="tip">
如果 `kimi` 命令未找到，请尝试重新打开终端或执行 `source ~/.bashrc`（或 `~/.zshrc`）。
</Callout>

## 首次运行

1. 进入你的项目目录：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd /path/to/your/project",
    },
  ]}
/>

2. 启动 Kimi Code CLI：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi",
    },
  ]}
/>

3. 执行 `/login` 命令完成登录授权：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

   系统会提示你选择登录平台，按提示完成授权即可。

4. 配置完成后，你就可以开始与 AI 对话了。

## 生成 AGENTS.md

在项目目录下执行 `/init` 命令，Kimi Code CLI 会自动扫描项目结构并生成 `AGENTS.md` 文件：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

`AGENTS.md` 用于向 AI 提供项目的背景信息、构建步骤、代码规范等上下文，帮助 AI 更准确地理解你的项目。

### 第一步：问一个问题

用自然语言提问，快速了解项目：

<CodePreview
  files={[
    {
      name: "example.txt",
      language: "text",
      content: "这个项目的整体架构是怎样的？入口文件在哪里？",
    },
  ]}
/>

Kimi Code CLI 会自动搜索和阅读相关文件，然后给出回答。

### 第二步：做一次代码修改

试试让 Kimi Code CLI 修改代码：

<CodePreview
  files={[
    {
      name: "example.txt",
      language: "text",
      content: "给 README 添加一个\"快速开始\"部分，包含安装和运行步骤",
    },
  ]}
/>

Kimi Code CLI 在修改文件前会展示 diff 并请求确认——你可以批准、拒绝，或直接输入反馈让它调整方向。它不会在未经允许的情况下改动你的代码。

### 第三步：执行一条命令

Kimi Code CLI 也可以运行 Shell 命令并分析结果：

<CodePreview
  files={[
    {
      name: "example.txt",
      language: "text",
      content: "运行测试，如果有失败的用例就修复它们",
    },
  ]}
/>

到这里，你已经体验了三个核心能力：**提问理解**、**修改代码**、**执行命令**。

>如果项目中没有 AGENTS.md 文件，可以运行 /init 命令让 Kimi Code CLI 分析项目并生成该文件，帮助 AI 更好地理解项目结构和规范。


## 常用命令速查

**会话相关命令**

| 命令 | 说明 |
| --- | --- |
| `/new` | 开启新会话，清空当前上下文 |
| `/sessions` | 浏览历史会话，选择恢复 |
| `/model` | 切换当前使用的模型 |
| `/compact` | 手动压缩上下文，释放 token |
| `/fork` | 派生当前会话，保留历史独立继续 |

**最常用快捷键**

| 快捷键 | 说明 |
| --- | --- |
| `Esc` | 中断流式输出 / 关闭弹窗 |
| `Ctrl-C` | 中断输出；空闲时连按两次退出 |
| `Shift-Tab` | 切换 Plan 模式 |
| `Ctrl-S` | 输出中途插入消息，无需等待结束 |
| `Ctrl-O` | 折叠 / 展开工具输出 |

完整命令列表请参考[斜杠命令](https://www.kimi.com/code/docs/kimi-code-cli/reference/slash-commands.html)和[键盘快捷键](https://www.kimi.com/code/docs/kimi-code-cli/reference/keyboard-shortcuts.html)。


## 常见问题

**我填了 API Key 怎么提示鉴权失败**

先确认你用的 Key 和 Base URL 是不是同一个平台的。`api.kimi.com` 和 `api.moonshot.cn` 是两个完全独立的账号体系，API Key 互不通用：

| 平台 | Base URL | 计费方式 | Key 创建入口 |
|------|---------|---------|-------------|
| **Kimi Code** | Open AI 兼容： `https://api.kimi.com/coding/v1`<br> Anthropic 兼容：`https://api.kimi.com/coding/` | Kimi 会员订阅（含额度） | [Kimi Code 控制台](https://www.kimi.com/code/console) |
| **Kimi 开放平台** | `https://api.moonshot.cn/v1` | 按量付费 | [Kimi 开放平台官网 ](https://platform.kimi.com) |


**安装后 `kimi` 命令找不到**

安装脚本会将 `kimi` 添加到 PATH，但需要重启终端或执行 `source ~/.bashrc`（或 `source ~/.zshrc`）才能生效。如果仍然找不到，检查 `~/.local/bin` 是否在你的 PATH 中。

**`/login` 后浏览器没有弹出**

如果在远程服务器或无图形界面的环境中，`/login` 会显示一个 URL，手动复制到浏览器打开即可完成授权。

更多问题请参考[常见问题](/kimi-code/faq)。


## 升级与卸载

升级到最新版本：

## 升级与卸载

安装完成后，验证可执行文件是否就绪：

```sh
kimi --version
```

**升级**：运行 `kimi upgrade`，CLI 会检查最新版本并展示更新选项。选择 `Install update now` 后根据当前安装来源执行升级；也可以直接用包管理器：

```sh
npm install -g @moonshot-ai/kimi-code@latest
```

**卸载**：脚本安装的用户删除 `kimi` 可执行文件即可；npm 安装的用户：

```sh
npm uninstall -g @moonshot-ai/kimi-code
```
