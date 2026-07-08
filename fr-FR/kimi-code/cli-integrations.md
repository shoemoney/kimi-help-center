---
title: "Intégrations d'outils"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Intégrations d'outils - Centre d'aide Kimi"
  description="Au-delà de l'intégration à l'IDE, Kimi Code CLI peut être intégré à d'autres outils pour enrichir votre flux de travail dans le terminal."
/>

# Intégrations d'outils

<Callout type="info">
Au-delà de l'intégration à l'IDE, Kimi Code CLI peut être intégré à d'autres outils pour enrichir votre flux de travail dans le terminal.
</Callout>

## Plugin Zsh

[zsh-kimi-cli](https://github.com/MoonshotAI/zsh-kimi-cli) est un plugin Zsh qui vous permet de basculer rapidement vers Kimi Code CLI depuis votre shell.

### Installation avec Oh My Zsh

Si vous utilisez Oh My Zsh, suivez ces étapes pour l'installer :

1. Clonez le dépôt dans le répertoire des plugins personnalisés d'Oh My Zsh :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. Ajoutez `kimi-cli` à la liste des plugins dans `~/.zshrc` :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. Rechargez la configuration :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### Utilisation

Une fois l'installation terminée, appuyez sur **Ctrl-X** dans votre terminal pour basculer rapidement vers Kimi Code CLI sans avoir à saisir manuellement la commande `kimi`.
