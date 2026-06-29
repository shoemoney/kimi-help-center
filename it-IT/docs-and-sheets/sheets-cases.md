---
title: "Casi d'uso e libreria di prompt di Kimi Sheets"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Casi d'uso e libreria di prompt di Kimi Sheets - Kimi Help Center"
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
      content: "Perform a DCF valuation of XX Healthcare. Put the entire valuation process and data\ninto an Excel spreadsheet, cite data sources, provide the reasoning behind estimated\nfigures such as market size, growth rates, and market share, and incorporate macro\nenvironment analysis.",
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
      content: "Create a storyboard script in Excel for a 3D promotional video about Kimi AI's new\nupgrade — OK Computer — which supports generating and editing Office documents\n(e.g., long-form thesis formatting in Word, data modeling and analysis in Excel,\nautomatic slide generation).\n\nThe Excel should include:\nColumn A: Sequence number (1-20)\nColumn B: Cumulative duration (seconds)\nColumn C: Shot duration (seconds)\nColumn D: Shot description (3D / camera movement)\nColumn E: Narration/text (use different background colors to distinguish narration\nfrom on-screen text)\nColumn F: Sound effects/BGM (use different font colors to distinguish)\nColumn G: Storyboard frames (generate an image for each shot — maintain visual\nconsistency using the classic black-and-white line sketch style)\n\nPlease design the creative outline, script, and storyboards independently, then\ngenerate frames to complete this script, presented in a polished Excel format.",
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
