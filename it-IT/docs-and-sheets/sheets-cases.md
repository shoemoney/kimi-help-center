---
title: "Casi d'uso e libreria di prompt di Kimi Sheets"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Casi d'uso e libreria di prompt di Kimi Sheets - Centro assistenza Kimi"
  description="Esempi di casi d'uso e prompt per Kimi Sheets — dalla valutazione finanziaria alla creazione di storyboard."
/>

# Casi d'uso di Kimi Sheets

<Callout type="info">
Esempi di casi d'uso e prompt per Kimi Sheets — dalla valutazione finanziaria alla creazione di storyboard.
</Callout>

## Valutazione finanziaria

Proprio come un analista finanziario, Kimi raccoglie dati finanziari reali, costruisce un modello di valutazione DCF ed esegue una valutazione aziendale simulata.

<Frames
  src="./images/sheets-cases/dcf.png"
  alt="DCF"
/>

**Esempio di prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Esegui una valutazione con il metodo DCF di XX Healthcare. Riporta l'intero processo di valutazione e i dati\nin un foglio di calcolo Excel, cita le fonti dei dati, spiega il ragionamento alla base delle stime\ncome dimensione del mercato, tassi di crescita e quota di mercato, e includi un'analisi del contesto macroeconomico.",
    },
  ]}
/>

## Creazione di storyboard

Proprio come uno storyboard artist, Kimi crea script di storyboard video in formato Excel comprensivi di durata, descrizioni delle inquadrature, narrazione, effetti sonori e fotogrammi di riferimento.

<Frames
  src="./images/sheets-cases/transcript.png"
  alt="Transcript"
/>

**Esempio di prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Crea uno storyboard in Excel per un video promozionale in 3D sul nuovo\naggiornamento di Kimi AI — OK Computer — che consente di generare e modificare documenti Office\n(ad es. formattazione di tesi lunghe in Word, modellazione e analisi dei dati in Excel,\ngenerazione automatica di diapositive).\n\nIl file Excel deve includere:\nColonna A: numero di sequenza (1-20)\nColonna B: durata cumulativa (secondi)\nColonna C: durata dell'inquadratura (secondi)\nColonna D: descrizione dell'inquadratura (3D / movimento di camera)\nColonna E: voce narrante/testo (usa colori di sfondo diversi per distinguere la voce narrante\ndal testo a schermo)\nColonna F: effetti sonori/musica di sottofondo (usa colori del carattere diversi per distinguerli)\nColonna G: fotogrammi dello storyboard (genera un'immagine per ogni inquadratura — mantieni la coerenza visiva\nusando il classico stile di schizzo a tratto in bianco e nero)\n\nProgetta in autonomia lo schema creativo, la sceneggiatura e gli storyboard, poi\ngenera i fotogrammi per completare questa sceneggiatura, presentata in un formato Excel curato.",
    },
  ]}
/>

## Altri scenari ed esempi di prompt

| Scenario | Esempio di prompt |
|------|-----------|
| Modellazione finanziaria | Esegui una valutazione DCF dell'azienda XX — inserisci l'intero processo e i dati in Excel, cita le fonti e spiega il ragionamento alla base di ipotesi chiave come i tassi di crescita |
| Confronto tra dati di settore | Analizza le prime 20 aziende nazionali di veicoli elettrici (NEV) — elenca capitalizzazione di mercato, volume di vendite 2025, modelli di punta e notizie recenti in una tabella comparativa |
| Catalogazione della letteratura | Cerca articoli sull'ottimizzazione dell'inferenza degli LLM degli ultimi tre mesi — organizzali in Excel con titolo, autori, metodologia principale e contributi chiave |
| Unione di più fogli | [Carica 12 file Excel delle vendite mensili] Unisci questi 12 fogli in un riepilogo annuale, calcola i tassi di crescita mese su mese e usa le formule per il collegamento tra i fogli |
| Estrazione di lead di vendita | [Carica PDF/immagini di una fiera] Estrai tutte le informazioni sugli espositori e organizzale in un file Excel di 1.000 righe con lead di vendita, includendo nome dell'azienda, contatti e categoria di prodotto |
| Gestione di progetti | Crea un Excel di gestione progetti PMO con elenco delle attività, responsabili, stato di avanzamento, diagramma di Gantt e collegamento tra i fogli |
| Visualizzazione dei dati | Trasforma questo Excel di dati di vendita in una dashboard visiva con grafici a linee di tendenza, grafici di distribuzione regionale e grafici a ciambella per il tasso di completamento |
