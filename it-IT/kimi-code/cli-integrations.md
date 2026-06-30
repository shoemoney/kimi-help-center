---
title: "Integrazioni con gli strumenti"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Integrazioni con gli strumenti - Centro assistenza Kimi"
  description="Oltre all'integrazione con l'IDE, Kimi Code CLI può essere integrato in altri strumenti per potenziare il tuo flusso di lavoro nel terminale."
/>

# Integrazioni con gli strumenti

<Callout type="info">
Oltre all'integrazione con l'IDE, Kimi Code CLI può essere integrato in altri strumenti per potenziare il tuo flusso di lavoro nel terminale.
</Callout>

## Plugin Zsh

[zsh-kimi-cli](https://www.github.com/MoonshotAI/zsh-kimi-cli) è un plugin Zsh che ti permette di passare rapidamente a Kimi Code CLI dalla tua shell.

### Installazione con Oh My Zsh

Se utilizzi Oh My Zsh, segui questi passaggi per l'installazione:

1. Clona il repository nella cartella dei plugin personalizzati di Oh My Zsh:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. Aggiungi `kimi-cli` all'elenco dei plugin in `~/.zshrc`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. Ricarica la configurazione:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### Utilizzo

Una volta completata l'installazione, premi **Ctrl-X** nel terminale per passare rapidamente a Kimi Code CLI senza dover digitare manualmente il comando `kimi`.
