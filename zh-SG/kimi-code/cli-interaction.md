---
title: "交互与输入"
slug: "cli-interaction"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="交互与输入 - Kimi 帮助中心"
  description="Kimi Code CLI（命令行界面）提供多种交互方式，帮助你高效与 AI 协作。"
/>

# 交互与输入

Kimi Code CLI（命令行界面）提供多种交互方式，帮助你高效与 AI 协作。

## Thinking mode

Thinking Mode 可让 AI 在回复前进行更深入的推理，尤其适合处理复杂问题。

- 使用 `/model` 命令切换模型，并开启或关闭 Thinking Mode。
- 也可以在启动时通过 `--thinking` 标志启用 Thinking Mode。

## 多行输入

按 **Ctrl-J** 可插入换行，用于多行输入。适合输入较长提示词，或粘贴多行代码片段。

## 从剪贴板粘贴

按 **Ctrl-V** 可从剪贴板粘贴内容，支持文本和图片。粘贴图片时，AI 可以直接理解图片内容（例如截图、设计稿、报错截图）。

## 斜杠命令

以 `/` 开头的命令用于控制会话、配置和调试。常用命令包括：

| 命令 | 说明 |
| --- | --- |
| `/help` | 显示帮助信息 |
| `/login` | 登录并授权 |
| `/model` | 切换模型和 Thinking Mode |
| `/sessions` | 列出并切换会话 |
| `/clear` | 清空当前上下文 |
| `/compact` | 压缩上下文 |
| `/init` | 生成 AGENTS.md |
| `/exit` | 退出 CLI |

在输入框中输入 `/`，会自动显示可用命令列表。

## @ 路径补全

在输入中使用 `@` 符号引用文件或目录路径，系统会自动补全：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "检查 @src/utils/auth.ts 是否存在安全漏洞",
    },
  ]}
/>

AI 会自动读取所引用文件的内容，并将其作为上下文。

## 结构化问答

在某些场景下，AI 会为你的输入提供结构化选项。使用**方向键**选择选项，然后按 **Enter** 确认。

## 操作确认

当 AI 需要修改文件、执行 shell 命令或进行其他操作时，会请求你的确认。你可以选择：

| 选项 | 说明 |
| --- | --- |
| **允许** | 允许本次操作 |
| **本会话内允许** | 在当前会话剩余时间内允许类似操作，不再重复提示 |
| **拒绝** | 拒绝本次操作 |

### YOLO 模式

如果你信任 AI 的操作，可以使用 YOLO 模式跳过所有确认：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --yolo",
    },
  ]}
/>

> 在 YOLO 模式下，AI 会自动执行所有操作，请谨慎使用。建议仅在受控的开发环境中启用。
