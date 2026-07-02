---
title: "Sessioni e contesto"
slug: "cli-sessions"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Sessioni e contesto - Centro assistenza Kimi"
  description="Kimi Code CLI supporta la gestione di più sessioni e la persistenza del contesto, permettendoti di mettere in pausa e riprendere il lavoro in qualsiasi momento."
/>

# Sessioni e contesto

Kimi Code CLI supporta la gestione di più sessioni e la persistenza del contesto, permettendoti di mettere in pausa e riprendere il lavoro in qualsiasi momento.

## Ripresa delle sessioni

Puoi riprendere una sessione precedente in diversi modi:

### Continuare la sessione più recente

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>

Usa il flag `--continue` (o `-c`) per continuare l'ultima conversazione.
### Specificare un ID di sessione

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --session <session-id>",
    },
  ]}
/>

Usa il flag `--session` per ripristinare una sessione specifica.

### Sfogliare e cambiare

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/sessions",
    },
  ]}
/>

Esegui `/sessions` (o `/resume`) per visualizzare l'elenco delle sessioni e sceglierne una da ripristinare.
## Replay all'avvio

Quando riprendi una sessione, Kimi Code CLI riproduce automaticamente la cronologia della conversazione, aiutandoti a richiamare rapidamente il contesto e i progressi precedenti.

## Persistenza dello stato

Lo stato seguente viene salvato e ripristinato automaticamente tra le sessioni:

- **Decisioni di approvazione**: vengono memorizzate le decisioni come "Consenti per la sessione".
- **Sub-agent dinamici**: vengono conservate le configurazioni dei Subagent create durante una sessione.
- **Directory aggiuntive**: vengono mantenute anche le directory di lavoro extra aggiunte tramite comandi.

Questo significa che puoi continuare senza interruzioni il lavoro precedente dopo aver ripreso una sessione.

## Cancellare e compattare

Kimi Code CLI comprime automaticamente il contesto quando necessario, per garantire che la conversazione possa proseguire. Puoi inoltre gestire il contesto manualmente con i comandi slash:

### Cancellare il contesto

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/clear",
    },
  ]}
/>

Digita `/clear` (o `/reset`) per cancellare tutto il contesto della sessione corrente e avviare una nuova conversazione:

### Compattare il contesto

Digita `/compact` per comprimere il contesto, preservando le informazioni chiave e riducendo al contempo il consumo di token:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact",
    },
  ]}
/>

Durante la compattazione puoi anche aggiungere istruzioni per indicare all'IA quali informazioni privilegiare:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact Keep the discussion about database migrations",
    },
  ]}
/>

### Stato del contesto

La barra di stato nella parte inferiore della CLI mostra in tempo reale l'utilizzo attuale del contesto, aiutandoti a monitorarne il consumo. Quando l'utilizzo è elevato, usa `/compact` per comprimere il contesto ed evitare di perdere informazioni importanti.
