---
title: "Utilizzo con agenti di coding di terze parti"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Utilizzo con agenti di coding di terze parti - Centro assistenza Kimi"
  description="I vantaggi di Kimi Code possono essere utilizzati con Claude Code e Roo Code, permettendoti di sfruttare le capacità di IA di Kimi all'interno dei tuoi strumenti di coding preferiti."
/>

# Utilizzo con agenti di coding di terze parti

I vantaggi di Kimi Code possono essere utilizzati con Claude Code e Roo Code, permettendoti di sfruttare le capacità di IA di Kimi all'interno dei tuoi strumenti di coding preferiti.

## Prerequisiti

- Un abbonamento Kimi attivo con i vantaggi di Kimi Code abilitati.
- Una API Key (creata nella [Kimi Console](https://www.kimi.com/code)).

## Utilizzo con Claude Code

[Claude Code](https://www.docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) è un assistente di coding da riga di comando di Anthropic.

### Procedura di configurazione

1. Imposta le variabili d'ambiente:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. Avvia Claude Code con il modello `kimi-k2.5`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-k2.5",
    },
  ]}
/>

> In Claude Code, puoi premere **Tab** per passare al modello Kimi K2 Thinking.

> Se incontri un errore 400 causato da chiamate `tool_search`, puoi risolverlo temporaneamente impostando la variabile d'ambiente `ENABLE_TOOL_SEARCH=false`.

## Utilizzo con Roo Code

[Roo Code](https://www.github.com/RooCodeInc/Roo-Code) è un'estensione di coding con IA per VS Code.

### Installazione di Roo Code

1. Cerca **Roo Code** nel marketplace delle estensioni di VS Code e installalo.
2. Al termine dell'installazione, l'icona di Roo Code comparirà nella barra delle attività; in caso contrario, riavvia VS Code.

### Configurazione del modello Kimi Code

1. Apri il pannello di Roo Code e vai alla pagina **Settings**.
2. Nella sezione **Providers**, seleziona **OpenAI Compatible** e compila i seguenti campi:

   | Impostazione | Valore |
   | --- | --- |
   | Entrypoint | `https://api.kimi.com/coding/v1` |
   | API Key | La tua API Key |
   | Modello | `kimi-k2.5` |

3. Salva la configurazione e sei pronto per iniziare.

## Note importanti

- I vantaggi di Kimi Code sono supportati solo in **Kimi Code CLI**, **Claude Code** e **Roo Code**.
- L'utilizzo della tua API Key con piattaforme o strumenti non autorizzati può essere considerato una violazione e comportare la limitazione dell'accesso.
- Per qualsiasi domanda, consulta la pagina [Vantaggi](/kimi-code/benefits) o contatta l'assistenza Kimi.
