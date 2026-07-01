---
title: "Ricerca agentica"
slug: "search"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Ricerca agentica per guide e risposte - Centro assistenza Kimi"
  description="La ricerca agentica di Kimi si fonda su un'architettura end-to-end di apprendimento per rinforzo agentico. A differenza degli approcci tradizionali basati sull'orchestrazione di strumenti, consente all'IA di..."
/>

# Ricerca agentica

<Callout type="info">
La ricerca agentica di Kimi si fonda su un'architettura end-to-end di apprendimento per rinforzo agentico. A differenza degli approcci tradizionali basati sull'orchestrazione di strumenti, lascia che sia l'IA a decidere autonomamente quando cercare, quali strumenti invocare e come adattare la strategia, rendendo possibili attività complesse di raccolta ed elaborazione delle informazioni.
</Callout>

Rispetto alla ricerca tradizionale per corrispondenza di parole chiave, le capacità di ricerca di Kimi hanno attraversato due grandi evoluzioni:
- **Explorer Search** (ottobre 2024) univa la comprensione semantica dei modelli linguistici di grandi dimensioni al recupero di informazioni in tempo reale, scomponendo automaticamente le domande complesse e risalendo alle fonti.
- **Agentic Search** si spinge oltre, con pianificazione autonoma e invocazione di strumenti, supportando query su dati finanziari, recupero di letteratura accademica, ricerca per immagini e altre attività multimodali.

## Impostazioni di Web Search

<Frames
  src="./images/search/web-search.png"
  alt="Web search"
/>

Web Search (Auto/Off) supera i confini dell'attualità delle conoscenze per offrire informazioni aggiornate, affidabili e tracciabili.

Fai clic sull'interruttore "Web Search" sotto la casella di input della chat. Quando è attivo, Kimi valuta autonomamente se la domanda richiede dati in tempo reale e invoca in modo intelligente motori di ricerca e database verticali per recuperare e sintetizzare le informazioni.

## Funzionalità principali

### 1. Attualità e autorevolezza insieme
Recupero web in tempo reale che copre oltre 100 fonti verificate e affidabili (principali testate giornalistiche, comunicati ufficiali, piattaforme di dati finanziari, database di riviste accademiche), garantendo informazioni allo stesso tempo aggiornate e autorevoli.

### 2. Attribuzione delle fonti
Tutte le risposte basate sulla ricerca includono i link alle fonti di riferimento. Basta un clic per consultare la pagina originale e verificare appieno accuratezza e contesto.

### 3. Accesso globale alle informazioni
Supporta conversazioni in linguaggio naturale in più lingue. Kimi può cercare in modo proattivo fonti non in inglese (ad esempio documentazione tecnica giapponese o notizie in francese) e sintetizzare automaticamente informazioni multilingue.

## Casi d'uso consigliati

- Notizie e aggiornamenti in tempo reale (ultime notizie, dati di borsa, cambiamenti normativi)
- Verifica dei fatti (voci online, dati storici, metodologie statistiche)
- Ricerca professionale (intelligence sui concorrenti, frontiere accademiche, standard di settore)

## Badge delle fonti autorevoli

La Web Search di Kimi filtra le fonti su tre dimensioni — pertinenza, autorevolezza e attualità — escludendo automaticamente siti a rischio, ripubblicazioni duplicate, contenuti web di bassa qualità e informazioni inventate, per garantire risultati affidabili.

Le fonti di alta qualità che superano il rigoroso vaglio di Kimi vengono contrassegnate nelle risposte con badge di autorevolezza (ad esempio icone di certificazione del sito ufficiale, certificazione accademica, certificazione dei media), aiutandoti a individuare rapidamente le informazioni più affidabili.

**Meccanismo di selezione delle fonti**:
- **Escluse**: siti aggregatori di bassa qualità, autopubblicazioni non verificate, pagine memorizzate nella cache e scadute
- **Privilegiate**: siti di enti governativi, media autorevoli, riviste accademiche, canali ufficiali di rendicontazione finanziaria

## Fonti di dati finanziari e accademici

<Frames
  src="./images/search/screenshot-5.png"
  alt="screenshot 5"
/>

Negli scenari professionali, Kimi consente di interrogare database di dominio verticale per ottenere dati professionali strutturati e tracciabili.

<Frames
  src="./images/search/screenshot-6.png"
  alt="screenshot 6"
/>

Basta esprimere la richiesta nella conversazione e Kimi selezionerà automaticamente la fonte di dati più adatta.

### Esempi di query

- "Cerca i dati sui ricavi di Apple degli ultimi cinque anni"
- "Cerca gli ultimi articoli sull'ottimizzazione dell'inferenza dei modelli linguistici di grandi dimensioni"
- "Confronta PIL, PIL pro capite e tassi di disoccupazione delle tre principali economie mondiali"

### Fonti di dati supportate

| Fonte | Descrizione |
|--------|-------------|
| **Global Finance Data** | Dati finanziari globali su azioni, futures, indici e altro |
| **Academic Data** | Riviste, articoli, preprint, tesi, brevetti e altro |
| **Stock Finance Data** | Dati finanziari cinesi e globali su azioni, futures, indici e altro |
| **World Bank Data** | PIL, popolazione, occupazione, scambi commerciali dei paesi e altro |

## Ricerca intelligente

### Ricerca per immagini

Kimi supporta la ricerca e la comprensione basate sulle immagini. Dopo aver caricato un'immagine, Kimi può invocare automaticamente strumenti di ricerca per immagini per identificarne il contenuto e recuperare informazioni correlate.

**Esempi di query**:
- "Dov'è questo luogo?"
- "Cosa succede in questo meme / cosa sta dicendo questa persona?"
- "Trova il vero McDonald's"

**Come usarla**:
- Carica direttamente un'immagine (supporta JPG, PNG e altri formati)
- Descrivi il contenuto dell'immagine o poni domande correlate nel prompt
- Kimi combinerà il riconoscimento dell'immagine con la Web Search per fornire l'origine dell'immagine, immagini simili e informazioni correlate

**Scenari tipici**:
- Identificare oggetti, monumenti o modelli di prodotto sconosciuti
- Trovare la fonte o l'origine di un'immagine
- Analizzare i dati di grafici o screenshot e recuperare le relative informazioni di contesto

### Accesso diretto agli URL

Kimi Search supporta l'accesso diretto agli URL per recuperare risorse da internet.

<Frames
  src="./images/search/screenshot-22.png"
  alt="screenshot 22"
/>

**Incolla direttamente un URL nella conversazione** e Kimi recupererà e analizzerà automaticamente il contenuto della pagina.

**Esempi di utilizzo**:
- Riassumi i punti chiave di questo articolo
- Estrai i dati principali da questo PDF di bilancio
- Cerca le informazioni sulle immagini a partire dall'URL

## Suggerimenti

<Callout type="warning">
- Preferisci link **accessibili pubblicamente** (ad esempio pagine di notizie, documenti PDF pubblici)
- Alcune pagine **protette da password** o con restrizioni al crawling potrebbero non essere accessibili
- Per le pagine a **caricamento dinamico**, Kimi potrebbe recuperare solo il contenuto HTML iniziale
- Kimi **non può rileggere i link a conversazioni condivise** (ovvero i link ad altre chat di Kimi)
</Callout>
