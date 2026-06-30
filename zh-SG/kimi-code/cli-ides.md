---
title: "IDE 集成"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "通过 ACP 将 Kimi Code 命令行界面（CLI）集成到你的 IDE。"
---

<SeoMeta
  title="IDE 集成 - Kimi 帮助中心"
  description="通过智能体客户端协议（Agent Client Protocol，ACP）将 Kimi Code 命令行界面（CLI）集成到你的 IDE。包含 Zed、JetBrains IDE 和 Paseo 的设置指南，以及故障排查说明。"
/>

# 在 IDE 中使用 Kimi Code 命令行界面（CLI）

<Callout type="info">
Kimi Code 命令行界面（CLI）支持通过 [智能体客户端协议（Agent Client Protocol，ACP）](https://agentclientprotocol.com/) 集成到 IDE 中，让你可以直接在编辑器内使用 AI 辅助编码。
</Callout>

## 前提条件

配置 IDE 之前，请先确保已安装 Kimi Code 命令行界面（CLI），并已完成登录设置。

ACP 适配器以 `kimi acp` 子命令的形式提供。IDE 会将其作为子进程启动，并通过 stdin/stdout 使用 JSON-RPC 进行通信。每当 IDE 创建会话时，CLI 都会复用现有的认证状态，无需再次登录。

<Callout type="tip">
在 macOS 上，从 IDE 图形界面启动的子进程通常**不会**继承终端 shell 的 `PATH`。如果 `kimi` 不在 `/usr/local/bin` 这类系统目录中，请在 IDE 配置中使用绝对路径。可在终端运行 `which kimi` 查看当前生效路径。
</Callout>

## 在 Zed 中使用 Kimi Code 命令行界面（CLI）

[Zed](https://zed.dev/) 是一款原生支持 ACP 的现代编辑器。

将以下内容添加到 Zed 的配置文件 `~/.config/zed/settings.json`：

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

配置字段说明：

- `type`：固定值 `"custom"`
- `command`：Kimi Code 命令行界面（CLI）可执行文件的路径。如果 `kimi` 不在 `PATH` 中，请使用完整路径（例如 `/Users/you/.local/bin/kimi`）。
- `args`：启动参数。`acp` 子命令会将 CLI 切换到 ACP 模式。
- `env`：额外的环境变量；通常保持为空即可。Zed 会自动注入默认环境。

保存后，在 Zed 的 Agent 面板中新建对话，它会使用上述配置启动一个 `Kimi Code CLI` ACP 子进程。在 Zed 的 `agent_servers` 部分声明的 MCP 服务器，也会通过 ACP 协议转发到 kimi 侧。

## 在 JetBrains IDE 中使用 Kimi Code 命令行界面（CLI）

JetBrains IDE（IntelliJ IDEA、PyCharm、WebStorm 等）可通过 AI 聊天插件支持 ACP。

如果你没有 JetBrains AI 订阅，可以在 Registry 中启用 `llm.enable.mock.response`，以便在仅使用 ACP 的场景下访问 AI 聊天面板。按两次 Shift 并搜索 “Registry” 即可打开。

在 AI 聊天面板菜单中，点击**配置 ACP agents**，并添加以下配置：

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains 对 `command` 字段要求严格——请始终使用**绝对路径**，你可以在终端运行 `which kimi` 获取。保存后，`Kimi Code CLI` 会出现在 AI 聊天的智能体选择器中。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## 在 Paseo 中使用 Kimi Code 命令行界面（CLI）

[Paseo](https://paseo.sh/) 是一个自托管的编排器，可从你的桌面端、网页端和移动端运行并监管智能体 CLI。它会像 IDE 一样，通过 ACP 连接到 Kimi Code 命令行界面（CLI）。

你可以从 Paseo 内置的 ACP 提供方目录中选择 **Kimi Code CLI**，也可以在 `~/.paseo/config.json` 中添加自定义提供方：

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

Paseo 的通用 ACP 适配器不会引导登录流程，因此请先在终端完成登录（见[前提条件](#前提条件)），否则创建会话时会因 `Authentication required` 而失败。

## 故障排查

- **会话立即断开 / IDE 显示 “agent exited”**：通常是 `command` 路径错误或尚未登录。请先在终端运行 `kimi acp` 进行验证——如果它阻塞并等待 stdin，说明 CLI 本身正常，问题出在 IDE 配置；如果它立即退出并报错，请按错误信息处理（最常见的情况是需要运行 `/login`）。
- **IDE 显示 “auth required”**：CLI 没有可用的认证 token。退出 IDE，在终端运行 `kimi` 完成登录，然后重启 IDE。
- **看不到 MCP 工具**：查看 `kimi acp` 能力表，确认 IDE 中配置的 MCP 传输类型是否受支持。Kimi Code 命令行界面（CLI）的 ACP 适配器目前支持 `http` 和 `stdio` 传输；`sse` 和 `acp` 类型会被静默丢弃，并在日志中写入警告。
