---
title: "工具整合"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="工具整合 - Kimi 說明中心"
  description="除了 IDE 整合之外，Kimi Code CLI 也能整合至其他工具，強化你的終端機工作流程。"
/>

# 工具整合

<Callout type="info">
除了 IDE 整合之外，Kimi Code CLI 也能整合至其他工具，強化你的終端機工作流程。
</Callout>

## Zsh 外掛

[zsh-kimi-cli](https://www.github.com/MoonshotAI/zsh-kimi-cli) 是一個 Zsh 外掛，可讓你從 shell 快速切換到 Kimi Code CLI。

### Oh My Zsh 安裝

如果你使用 Oh My Zsh，請依照下列步驟安裝：

1. 將儲存庫複製到 Oh My Zsh 的自訂外掛目錄：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. 將 `kimi-cli` 加入 `~/.zshrc` 中的 plugins 清單：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. 重新載入設定：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### 使用方式

安裝完成後，在終端機中按下 **Ctrl-X**，即可快速切換至 Kimi Code CLI，無需手動輸入 `kimi` 指令。
