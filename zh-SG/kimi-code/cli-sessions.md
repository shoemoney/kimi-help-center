---
title: "会话与上下文"
slug: "cli-sessions"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="会话与上下文 - Kimi 帮助中心"
  description="Kimi Code 命令行界面 (CLI) 支持多会话管理与上下文持久化，让你可以随时暂停并继续工作。"
/>

# 会话与上下文

Kimi Code 命令行界面 (CLI) 支持多会话管理与上下文持久化，让你可以随时暂停并继续工作。

## 恢复会话

你可以通过以下几种方式恢复之前的会话：

### 继续最近的会话

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>

使用 `--continue`（或 `-c`）标志继续上一段对话。
### 指定会话 ID

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --session \u003csession-id\u003e",
    },
  ]}
/>

使用 `--session` 标志恢复指定会话。

### 浏览并切换

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/sessions",
    },
  ]}
/>

运行 `/sessions`（或 `/resume`）查看会话列表，并选择要恢复的会话。
## 启动时回放

恢复会话时，Kimi Code 命令行界面 (CLI) 会自动回放对话历史，帮助你快速回忆此前的上下文与进展。

## 状态持久化

以下状态会在不同会话之间自动保存并恢复：

- **审批决策**：系统会记住“本会话允许”等决策。
- **动态子代理**：会保留会话期间创建的子代理配置。
- **附加目录**：通过命令添加的额外工作目录也会被持久保存。

这意味着，恢复会话后你可以无缝衔接之前的工作。

## 清除与压缩

Kimi Code 命令行界面 (CLI) 会在需要时自动压缩上下文，确保对话可以继续。你也可以使用斜杠命令手动管理上下文：

### 清除上下文

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/clear",
    },
  ]}
/>

输入 `/clear`（或 `/reset`）清除当前会话中的全部上下文，并开始一段全新对话：

### 压缩上下文

输入 `/compact` 压缩上下文——在减少 token 用量的同时保留关键信息：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact",
    },
  ]}
/>

压缩时也可以附加说明，告诉 AI 优先保留哪些信息：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact 保留关于数据库迁移的讨论",
    },
  ]}
/>

### 上下文状态

命令行界面 (CLI) 底部的状态栏会实时显示当前上下文使用率，方便你监控上下文消耗情况。使用率较高时，可使用 `/compact` 压缩上下文，避免丢失重要信息。
