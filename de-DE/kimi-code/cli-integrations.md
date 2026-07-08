---
title: "Tool-Integrationen"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Tool-Integrationen - Kimi Hilfecenter"
  description="Neben der IDE-Integration lässt sich Kimi Code CLI in weitere Tools einbinden, um Ihren Terminal-Workflow zu verbessern."
/>

# Tool-Integrationen

<Callout type="info">
Neben der IDE-Integration lässt sich Kimi Code CLI in weitere Tools einbinden, um Ihren Terminal-Workflow zu verbessern.
</Callout>

## Zsh-Plugin

[zsh-kimi-cli](https://github.com/MoonshotAI/zsh-kimi-cli) ist ein Zsh-Plugin, mit dem Sie direkt aus Ihrer Shell schnell zu Kimi Code CLI wechseln können.

### Installation über Oh My Zsh

Wenn Sie Oh My Zsh verwenden, gehen Sie zur Installation wie folgt vor:

1. Klonen Sie das Repository in das Verzeichnis für benutzerdefinierte Plugins von Oh My Zsh:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. Fügen Sie `kimi-cli` zur Plugin-Liste in `~/.zshrc` hinzu:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. Laden Sie die Konfiguration neu:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### Verwendung

Drücken Sie nach der Installation in Ihrem Terminal **Ctrl-X**, um schnell zu Kimi Code CLI zu wechseln, ohne den Befehl `kimi` manuell eingeben zu müssen.
