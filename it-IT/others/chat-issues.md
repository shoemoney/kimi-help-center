---
title: "Problemi comuni della chat di Kimi"
slug: "chat-issues"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Problemi comuni della chat di Kimi - Centro assistenza Kimi"
  description="Problemi con le chat di Kimi? Questo articolo raccoglie i passaggi per risolvere i problemi più comuni, tra cui risposte interrotte, contenuti anomali ed errori di caricamento, così da risolverli rapidamente."
/>

# Problemi comuni della chat di Kimi

## Non riesci a inviare messaggi / compare un cerchio rosso?

Le cause possibili sono:

- **rate limit raggiunto**: Kimi prevede un limite di conversazioni entro determinati intervalli di tempo. Inviare messaggi troppo di frequente può bloccare le interazioni successive. Attendi 2-3 ore prima di riprovare e gestisci con attenzione la frequenza delle conversazioni.
- **Connessione di rete scadente**: un segnale debole o una connessione instabile possono impedire l'invio dei messaggi. Passa a un'altra rete e riprova.

## La conversazione supera le 200.000 parole?

Il limite di contesto di K2.6 per singola conversazione è di circa 128K token (~200.000 parole). Una volta raggiunto questo limite, il modello non può più accettare nuovo input.

<Callout type="tip">
**Azioni consigliate**:

1. **Avvia una nuova conversazione**: copia le conclusioni principali o lo schema della conversazione originale in una nuova per proseguire.
2. **Genera un documento di passaggio**: chiedi a Kimi di "riassumere e generare un documento di passaggio", poi incollalo in una nuova conversazione come contesto iniziale: in questo modo risparmi token preservando le informazioni.

**Nota**: eliminare i messaggi all'interno della stessa conversazione **non** libera la finestra di contesto. Avvia invece una nuova conversazione.
</Callout>

<Callout type="info">
I modelli di ragionamento consumano più token per ragionare, riducendo il limite di contesto effettivo. Quando lavori con documenti lunghi, preferisci K2 a K2-Thinking.
</Callout>

## Compare il messaggio "parliamo di qualcos'altro"?

Questo messaggio indica che il contenuto attuale ha attivato una policy di sicurezza e l'argomento non può proseguire. Basta digitare un nuovo argomento per riprendere la conversazione, senza alcuna attesa.

<Callout type="info">
Se ritieni che il contenuto non costituisse una violazione, fai clic su "👎" per inviare un feedback e aiutarci a migliorare le nostre policy di sicurezza.
</Callout>

## Compare il messaggio "Kimi è un po' stanco"?

Significa che sono online troppi utenti e le risorse di calcolo sono sotto forte carico: un rate limit nelle ore di punta. Attendi 1-2 minuti e riprova.

<Callout type="tip">
Per ridurre i tempi di attesa, valuta la sottoscrizione di un piano di abbonamento per un accesso prioritario a risorse di calcolo dedicate.
</Callout>

## Non riesci a scaricare PPT/Word/Excel?

La finestra di chat di Kimi non genera direttamente file Office scaricabili:

| Tipo di file | Dove generarli |
|-----------|-------------------|
| **Presentazioni** | Vai su [Kimi Slides](https://www.kimi.com/slides): supporta la generazione e il download online |
| **Word/Excel** | Usa la modalità **Agent** |
