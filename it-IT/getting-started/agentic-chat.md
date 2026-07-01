---
title: "Iniziare a usare Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Iniziare a usare Kimi - Centro assistenza Kimi"
  description="Puoi digitare domande nella casella della chat, caricare file o passare da un modello all'altro a seconda delle tue esigenze."
/>

# Iniziare a usare Kimi

Puoi digitare domande nella casella della chat, caricare file o passare da un modello all'altro a seconda delle tue esigenze.
Apri [kimi.com](https://www.kimi.com) e prova a inviare un messaggio: saluta Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Hi, Kimi!",
    },
  ]}
/>

## Basato su K2.6
Kimi K2.6 è un modello open source che si fonda su K2.5 con miglioramenti significativi, concentrandosi su coding all'avanguardia, esecuzione su orizzonti temporali estesi e capacità di agent swarm. Raggiunge prestazioni allo stato dell'arte nelle attività degli agenti, nel coding, nella comprensione di immagini e video e nei benchmark di intelligenza generale. K2.6 è inoltre il modello **più versatile** di Kimi: la sua architettura nativamente multimodale supporta input sia visivo che testuale, modalità thinking e non-thinking, oltre ad attività conversazionali e agentiche.
Di conseguenza, Kimi non eccelle soltanto nelle conversazioni di domanda e risposta, ma anche nella pianificazione autonoma delle attività, nell'invocazione di strumenti e nel ragionamento in più passaggi, supportando il pensiero profondo e l'esecuzione di attività complesse.
### Strumenti integrati
Disponibili da subito, senza alcuna configurazione:
| Strumento | Descrizione |
|------|------------|
| **Web Search** | Ricerca web in tempo reale per notizie e informazioni aggiornate |
| **Fetch Tool** | Accesso diretto a URL specifici (pagine web, documenti, immagini e altre risorse online) |
| **Data Source** | Connessione a database professionali; consultazione degli elenchi di database e recupero dei dati |
| **Image Search** | Ricerca da testo a immagine e da immagine a immagine per trovare rapidamente contenuti visivi |
| **IPython** | Esecuzione di codice Python per analisi e visualizzazione dei dati |
| **Memory** | Memoria intelligente che registra le tue preferenze e abitudini personali |

## Capacità visive e multimodali
K2.6 supporta la comprensione completa di immagini, video e documenti d'ufficio (PDF/Word/Excel), grazie a un'**architettura nativamente multimodale** (non un OCR aggiunto in seguito). Può analizzare direttamente il contenuto dei documenti ed eseguire attività d'ufficio di livello intermedio-avanzato (come scrivere formule Excel o generare scalette PPT/codice VBA).
### Supporto per input multimodale
- **Immagini**: PNG, JPEG, WebP, GIF, ecc. (tramite URL, Base64 o caricamento di file locali)
- **Video**: MP4, ecc. (tramite video_url o sequenze di fotogrammi + parametro fps)
- **Documenti**: PDF, Word, Excel, TXT, Markdown, ecc.
- **Risorse online**: URL, link ad articoli
- **Ricerca per immagini**: carica un'immagine per cercare immagini correlate o simili
- **Comprensione dei video**: supporta la comprensione dei video, potendo analizzare registrazioni dello schermo e replicarne la logica di interazione
- **Coding visivo**: carica screenshot o registrazioni dello schermo per generare codice frontend (HTML/Vue/React, ecc.); può riprodurre automaticamente pagine web a partire dai mockup di design

### Formati di output
- Testo semplice / testo e immagini misti: risposte conversazionali standard
- Markdown: testo formattato con titoli, elenchi, tabelle e link
- Blocchi di codice: HTML/Vue/React/Python/JSON/Mermaid, ecc. (con identificatori di linguaggio)
- Dati strutturati JSON: output in modalità JSON forzata
- Diagrammi Mermaid: diagrammi di flusso, diagrammi di sequenza, mappe mentali, ecc.
- Formule matematiche LaTeX: espressioni matematiche inline e a blocco
- Output a doppia modalità (Thinking): restituisce sia `reasoning_content` (processo di pensiero) che `content` (risposta finale)
- Formato delle chiamate agli strumenti: formato standard Function Calling (per gli sviluppatori)

### Note importanti

<Callout type="warning">
1. **Limitazione nella generazione di immagini**: la modalità chat standard supporta solo la *ricerca* di immagini, non la loro *generazione* (che richiede la modalità K2.6 Agent).
2. **Limitazione nell'output di file**: è supportato solo il contenuto testuale come output (ad esempio scalette PPT, corpo del testo Word, codice). Non è supportato l'output diretto di file binari (`.pptx`, `.docx`, `.xlsx`, `.pdf`).
3. Per generare immagini o produrre documenti modificabili complessi, usa [K2.6 Agent](https://www.kimi.com/agent) o lo strumento di esecuzione del codice.
</Callout>

## Sessioni e turni di conversazione
Quando fai clic su "Nuova chat", pensalo come l'inizio di una lunga conversazione con Kimi.
| Concetto | Analogia | Definizione tecnica |
|---------|---------|---------------------|
| **Sessione** | Un'intera riunione (dall'inizio alla fine) | Un processo di chat completo con un inizio e una fine ben definiti |
| **Turno** | Uno scambio (tu parli, Kimi risponde) | Il tuo input e la risposta di Kimi formano uno scambio completo |

### Differenze chiave
**Sessione**
- **Memoria continua**: Kimi ricorda tutto il contesto della chat in corso
- **Contesto tra i turni**: ogni risposta utilizza il contenuto della conversazione precedente come contesto per il turno successivo
- **Confini ben definiti**: fare clic su "Nuova chat" = ripartire da zero; il contesto precedente viene azzerato
**Turno**
- **Conteggio cumulativo**: Turno 1, Turno 2, … aggiunti progressivamente
- **Memoria limitata**: troppi turni (ad esempio oltre 50) possono far sì che Kimi "dimentichi" i contenuti precedenti, soprattutto nella scrittura di testi lunghi o in attività con requisiti rigorosi
- **Limite della lunghezza del contesto**: limitato dal numero di token; quando i turni si accumulano, i contenuti più vecchi possono essere compressi

<Callout type="tip">
**Caso particolare**: se una singola domanda e risposta conclude la conversazione, allora 1 turno = 1 sessione.
</Callout>

## Perché questa distinzione è importante
All'interno di una singola sessione, ogni nuova domanda o istruzione che invii riceve risposta tenendo conto di tutti i turni precedenti. Man mano che i turni si accumulano e i contenuti si allungano, la qualità delle risposte può gradualmente diminuire.

### Scenari comuni
**Scenario 1: cambio di argomento**
- Sbagliato: chiedere "aiutami a calcolare le tasse" in una sessione in cui stavi scrivendo un romanzo di 30.000 parole
- Giusto: avviare una nuova sessione per la domanda sulle tasse, per evitare che Kimi confonda i personaggi del romanzo con i concetti fiscali
**Scenario 2: elaborazione di documenti lunghi**
- Dopo decine di turni, Kimi potrebbe "dimenticare" le regole o i riepiloghi dei file stabiliti all'inizio
- Soluzione: riassumere proattivamente durante l'attività ("Riassumi il piano fin qui"), oppure avviare una nuova sessione
**Scenario 3: comprendere i limiti del prodotto**
- I limiti della lunghezza del contesto si misurano in token, ma nel linguaggio quotidiano puoi pensarli come "turni"
- Se vedi il messaggio "Avvia una nuova chat", significa che la sessione corrente ha troppi turni
## Buone pratiche

<Callout type="tip">
1. **Avvia una nuova sessione per ogni attività**: attività indipendenti come scrivere un saggio, fare ricerca o eseguire il debug dovrebbero avere ciascuna la propria sessione, per evitare interferenze di contesto.
2. **Riassumi periodicamente nelle sessioni lunghe**: dopo oltre 20 turni, chiedi proattivamente a Kimi di riassumere le informazioni chiave per evitare perdite di dati.
3. **Elimina tempestivamente le informazioni sensibili**: la cronologia delle chat viene conservata; elimina l'intera sessione dopo aver trattato contenuti privati.
</Callout>
