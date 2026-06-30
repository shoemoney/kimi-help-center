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
      content: "You are a senior manuscript reviewer specializing in smart cities and regional planning.\nBelow is a set of specific review comments. Please carefully analyze these issues,\nlocate the corresponding paragraphs or figures in the attached Word document, and\ninsert the issues along with detailed revision suggestions as comments. Note: the\ncomments should read as if written by a human, not AI — avoid bullet-point formatting.\n\nPlease output the original manuscript with detailed comments.",
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
      content: "Find the first assignment PDF for Stanford's CS336 course in English, then convert\nit to a French PDF. Preserve all code and mathematical formulas in the French version.\nThe translation should be fluent — do not omit or add any content.",
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
      content: "You are a curatorial publishing AI specializing in modern art, particularly Picasso studies.\nYour task: use extensive imagery to help viewers understand why Picasso must be revisited\nagain and again.\n\nOutput directly as a PDF.\n\nI. Core Requirements\nExtensive imagery\nEvery period, every artist reference, every movement must have supporting images\nPrioritize sourced images\nUse high-fidelity AI-generated images only when sourced images are unavailable\n\nII. Visual System\nMAP Logo as full-page watermark\nAsymmetric layout\nClear grid with controlled local disruption\nHigh-contrast black \u0026 white + primary color accents\n\nIII. Content Structure (generate all sections)\n1. Cover\nPicasso\nExhibition subtitle (English \u0026 Chinese)\nMAP Logo watermark\n\n2. Why Picasso (with images)\nPortraits of Picasso from different periods\nWorks from different periods juxtaposed\n\n3. Periods \u0026 Movements (image-centric)\nEach period must include 8–12 images:\nBlue Period\nRose Period\nCubism (Analytic / Synthetic)\nWar \u0026 Politics\nLate Experiments\n\nImage types:\nFull artwork\nDetail crops\nStructural deconstruction diagrams (AI-generated when needed)\n\n4. Key Works\nNo fewer than 25 works\nIndividual works may occupy full pages\nEmphasis on structure, perspective, and deconstruction\n\n5. How to Look at Picasso\nImage-based comparative explanations\nSide-by-side treatments of the same subject\n\n6. Exhibition Hall \u0026 Rhythm\nHigh-density viewing zones\nReflective buffer zones\n\n7. MAP's Contemporary Position\nWhy Shanghai needs Picasso\nWhy this moment matters",
    },
  ]}
/>

## Altri scenari ed esempi di prompt

| Scenario | Esempio di prompt |
|------|-----------|
| **Report professionale** | Scrivi in Word un "Libro bianco 2026 sull'industria dell'economia a bassa crediti in Cina", in stile McKinsey, che copra dimensioni del mercato, scenario competitivo, contesto normativo e raccomandazioni di investimento |
| **Revisione di contratti** | [Carica contract.docx] Esamina questo contratto dal punto di vista di un avvocato, individua le clausole a rischio e inserisci i commenti |
| **Modellazione finanziaria** | Crea in Word un modello di previsione finanziaria SaaS triennale, comprensivo di proiezioni dei ricavi, struttura dei costi e flusso di cassa |
| **Sintesi di testi lunghi** | Condensa questo articolo accademico di 30.000 parole in un riassunto esecutivo di 5.000 parole in formato Word |
| **Confronto tra più versioni** | [Carica Contratto V1 e V2] Confronta le versioni, elenca tutte le modifiche con la descrizione dell'impatto e fornisci il risultato in formato Word |
