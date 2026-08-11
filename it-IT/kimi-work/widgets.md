---
title: "Widget"
slug: "widgets"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Widget di Kimi Work - Centro assistenza Kimi"
  description="Scopri i widget di Kimi Work: pagine interattive generate dal modello direttamente in una chat. Associa un’attività widget per creare un widget live che si aggiorna continuamente e salva i widget nella tua bacheca."
/>

# Widget

Un widget (Widget) è una pagina interattiva generata dal modello e presentata istantaneamente in una chat. Non devi dare istruzioni esplicite sul deliverable: il modello crea un widget quando si adatta allo scenario (ad esempio, mostrare una mappa, redigere un’email, organizzare una ricetta o visualizzare dati), aiutandoti a capire la risposta in modo più rapido e intuitivo.

I widget possono collegarsi a dati locali o plugin esterni per aggiornamenti continui ed essere salvati nella tua [bacheca (Dashboard)](/kimi-work/dashboard) per la consultazione e la gestione a lungo termine.

## Generare un widget

1. Descrivi ciò di cui hai bisogno in linguaggio naturale in una chat, ad esempio:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Crea per me un widget con il digest quotidiano delle notizie tech USA, aggiornato ogni giorno alle 9:00",
    },
  ]}
/>

2. Durante la generazione, puoi osservare la pagina del widget prendere forma passo dopo passo;
3. Una volta generato, il widget è pronto per l’interazione direttamente nella chat.

## Attività widget e widget live

- **Attività widget (Widget Task)**: un’attività che viene eseguita automaticamente al verificarsi di condizioni specifiche — può essere attivata in base a una pianificazione o a un evento.
- **Widget live (Live Widget)**: un widget associato a un’attività widget, il cui contenuto si aggiorna automaticamente a ogni esecuzione dell’attività. Ad esempio, una volta che il widget "Digest quotidiano delle notizie tech USA" è associato a un’attività eseguita ogni mattina, il suo contenuto si aggiorna automaticamente ogni giorno.

<Callout type="info">
Esiste un limite al numero di attività widget che possono essere eseguite contemporaneamente, che varia in base al piano. Quando raggiungi il limite, metti in pausa alcune attività dalla pagina della bacheca prima di crearne di nuove.
</Callout>

## Salvataggio nella bacheca

Dopo che un widget è stato generato, passaci sopra il mouse e seleziona "Save to Dashboard" per salvarlo in una bacheca. Uno stesso widget può esistere contemporaneamente in più bacheche.

Nella bacheca puoi anche vedere l’attività associata a un widget live, attivarla o disattivarla e controllarne le 10 esecuzioni più recenti. Vedi [Bacheca](/kimi-work/dashboard).
