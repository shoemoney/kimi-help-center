---
title: "Casi d'uso di Kimi Docs e libreria di prompt"
slug: "docs-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Casi d'uso di Kimi Docs e libreria di prompt - Centro assistenza Kimi"
  description="Esempi di casi d'uso e prompt per Kimi Docs — dalla revisione di manoscritti alla traduzione professionale e al design di PDF."
/>

# Casi d'uso di Kimi Docs e libreria di prompt

<Callout type="info">
Esempi di casi d'uso e prompt per Kimi Docs — dalla revisione di manoscritti alla traduzione professionale e al design di PDF.
</Callout>

## Esperto di revisione

Come un revisore di manoscritti scrupoloso, Kimi scompone il feedback di revisione, individua con precisione i passaggi pertinenti del documento e inserisce automaticamente commenti e suggerimenti dettagliati.

**Esempio di prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Sei un revisore di manoscritti senior specializzato in città intelligenti e pianificazione territoriale.\nDi seguito trovi una serie di commenti di revisione specifici. Analizza attentamente questi problemi,\nindividua i paragrafi o le figure corrispondenti nel documento Word allegato e\ninserisci i problemi insieme a suggerimenti di revisione dettagliati sotto forma di commenti. Nota: i\ncommenti devono sembrare scritti da una persona, non da un'IA — evita la formattazione a elenchi puntati.\n\nRestituisci il manoscritto originale con i commenti dettagliati.",
    },
  ]}
/>

## Traduzione professionale

Come un traduttore instancabile, Kimi traduce in francese, pagina per pagina, un PDF inglese di 50 pagine, conservando nell'output tutte le formule e il codice.

**Esempio di prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Trova il PDF del primo compito del corso CS336 di Stanford in inglese, poi\nconvertilo in un PDF in francese. Conserva tutto il codice e tutte le formule matematiche nella versione francese.\nLa traduzione deve essere scorrevole — non omettere né aggiungere alcun contenuto.",
    },
  ]}
/>

<Frames
  src="./images/docs-cases/translate.png"
  alt="Translate"
/>

## Servizio di design e pubblicazione di PDF

Come un grafico impaginatore, Kimi ti aiuta a pianificare gli elementi visivi, dispone automaticamente testo e immagini e genera portfolio PDF di qualità professionale.

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Sei un'IA di editoria curatoriale specializzata in arte moderna, in particolare negli studi su Picasso.\nIl tuo compito: usare un'ampia iconografia per aiutare il pubblico a capire perché Picasso debba essere riscoperto\nancora e ancora.\n\nProduci direttamente un PDF.\n\nI. Requisiti fondamentali\nIconografia abbondante\nOgni periodo, ogni riferimento a un artista e ogni movimento deve essere accompagnato da immagini\nDai priorità alle immagini di fonti originali\nUsa immagini generate dall'IA ad alta fedeltà solo quando non sono disponibili immagini di fonti originali\n\nII. Sistema visivo\nLogo MAP come filigrana a piena pagina\nImpaginazione asimmetrica\nGriglia nitida con una rottura locale controllata\nBianco e nero ad alto contrasto + tocchi di colori primari\n\nIII. Struttura dei contenuti (genera tutte le sezioni)\n1. Copertina\nPicasso\nSottotitolo della mostra (English & Chinese)\nFiligrana del logo MAP\n\n2. Perché Picasso (con immagini)\nRitratti di Picasso di periodi diversi\nOpere di periodi diversi accostate\n\n3. Periodi e movimenti (incentrato sulle immagini)\nOgni periodo deve includere da 8 a 12 immagini:\nPeriodo blu\nPeriodo rosa\nCubismo (analitico / sintetico)\nGuerra e politica\nEsperimenti tardivi\n\nTipi di immagine:\nOpera completa\nRitagli di dettaglio\nDiagrammi di decostruzione strutturale (generati dall'IA quando necessario)\n\n4. Opere principali\nNon meno di 25 opere\nAlcune opere possono occupare pagine intere\nEnfasi su struttura, prospettiva e decostruzione\n\n5. Come guardare Picasso\nSpiegazioni comparative basate sulle immagini\nTrattamenti affiancati di uno stesso soggetto\n\n6. Sala espositiva e ritmo\nZone di visita ad alta densità\nZone cuscinetto per la riflessione\n\n7. La posizione contemporanea di MAP\nPerché Shanghai ha bisogno di Picasso\nPerché questo momento è importante",
    },
  ]}
/>

## Altri scenari ed esempi di prompt

| Scenario | Esempio di prompt |
|------|-----------|
| **Report professionale** | Scrivi in Word un "Libro bianco 2026 sull'industria dell'economia a bassa quota in Cina", in stile McKinsey, che copra dimensioni del mercato, scenario competitivo, contesto normativo e raccomandazioni di investimento |
| **Revisione di contratti** | [Carica contract.docx] Esamina questo contratto dal punto di vista di un avvocato, individua le clausole a rischio e inserisci i commenti |
| **Modellazione finanziaria** | Crea in Word un modello di previsione finanziaria SaaS triennale, comprensivo di proiezioni dei ricavi, struttura dei costi e flusso di cassa |
| **Sintesi di testi lunghi** | Condensa questo articolo accademico di 30.000 parole in un riassunto esecutivo di 5.000 parole in formato Word |
| **Confronto tra più versioni** | [Carica Contratto V1 e V2] Confronta le versioni, elenca tutte le modifiche con la descrizione dell'impatto e fornisci il risultato in formato Word |
