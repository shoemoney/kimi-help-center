---
title: "Integrações de ferramentas"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Integrações de ferramentas - Central de Ajuda da Kimi"
  description="Além da integração com o IDE, o Kimi Code CLI pode ser integrado a outras ferramentas para aprimorar seu fluxo de trabalho no terminal."
/>

# Integrações de ferramentas

<Callout type="info">
Além da integração com o IDE, o Kimi Code CLI pode ser integrado a outras ferramentas para aprimorar seu fluxo de trabalho no terminal.
</Callout>

## Plugin do Zsh

O [zsh-kimi-cli](https://www.github.com/MoonshotAI/zsh-kimi-cli) é um plugin do Zsh que permite alternar rapidamente para o Kimi Code CLI a partir do seu shell.

### Instalação com o Oh My Zsh

Se você usa o Oh My Zsh, siga estas etapas para instalar:

1. Clone o repositório no diretório de plugins personalizados do Oh My Zsh:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. Adicione `kimi-cli` à lista de plugins em `~/.zshrc`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. Recarregue a configuração:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### Uso

Após a instalação, pressione **Ctrl-X** no terminal para alternar rapidamente para o Kimi Code CLI sem precisar digitar manualmente o comando `kimi`.
