---
title: "工具集成"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="工具集成 - Kimi 帮助中心"
  description="除了 IDE 集成，Kimi Code 命令行界面（CLI）还可以接入其他工具，提升你的终端工作流效率。"
/>

# 工具集成

<Callout type="info">
除了 IDE 集成，Kimi Code 命令行界面（CLI）还可以接入其他工具，提升你的终端工作流效率。
</Callout>

## Zsh 插件

[zsh-kimi-cli](https://github.com/MoonshotAI/zsh-kimi-cli) 是一个 Zsh 插件，可让你从 shell 快速切换到 Kimi Code 命令行界面（CLI）。

### Oh My Zsh 安装

如果你使用 Oh My Zsh，请按以下步骤安装：

1. 将仓库克隆到 Oh My Zsh 的自定义插件目录：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. 将 `kimi-cli` 添加到 `~/.zshrc` 中的插件列表：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. 重新加载配置：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### 使用方法

安装完成后，在终端中按 **Ctrl-X**，无需手动输入 `kimi` 命令，即可快速切换到 Kimi Code 命令行界面（CLI）。
