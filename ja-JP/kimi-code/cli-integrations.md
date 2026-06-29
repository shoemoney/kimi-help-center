---
title: "ツール連携"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="ツール連携 - Kimi Help Center"
  description="IDE 連携に加えて、Kimi Code CLI はほかのツールにも組み込めるため、ターミナルでの作業フローを強化できます。"
/>

# ツール連携

<Callout type="info">
IDE 連携に加えて、Kimi Code CLI はほかのツールにも組み込めるため、ターミナルでの作業フローを強化できます。
</Callout>

## Zsh プラグイン

[zsh-kimi-cli](https://www.github.com/MoonshotAI/zsh-kimi-cli) は、シェルから Kimi Code CLI へすばやく切り替えられる Zsh プラグインです。

### Oh My Zsh のインストール

Oh My Zsh を使用している場合は、次の手順でインストールします。

1. リポジトリを Oh My Zsh のカスタムプラグインディレクトリにクローンします。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. `~/.zshrc` のプラグイン一覧に `kimi-cli` を追加します。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. 設定を再読み込みします。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### 使い方

インストール後、ターミナルで **Ctrl-X** を押すと、`kimi` コマンドを手入力しなくても Kimi Code CLI へすばやく切り替えられます。
