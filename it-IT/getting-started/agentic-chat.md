---
title: "Iniziare a usare Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Iniziare a usare Kimi - Centro assistenza Kimi"
  description="Scopri i tre modelli di Kimi (K2.6, K3, K3 Swarm), gli strumenti integrati e le capacità multimodali per iniziare rapidamente con la chat e l'esecuzione delle attività."
/>

# Iniziare a usare Kimi

Puoi digitare domande nella casella della chat, caricare file o passare da un modello all'altro a seconda delle tue esigenze.
Apri [kimi.com](https://www.kimi.com) e prova a inviare un messaggio per salutare Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ciao, Kimi!",
    },
  ]}
/>

## Scegli un modello

Kimi offre più modelli. Fai clic sul pulsante di selezione del modello sopra la casella di input per cambiare.

| Modello | Intensità di ragionamento | Ideale per |
|-------|-------------------|----------|
| **K2.6** | Standard / High | Conversazioni e domande e risposte rapide con risposte più veloci |
| **K3** | Low / High / Max | Attività di chat e Agent; il più capace in assoluto |
| **K3 Swarm** | Low / High / Max | Ricerche su larga scala ed elaborazione in batch, completate in un'unica soluzione |

<Callout type="tip">
K2.6 non consuma crediti; K3 e K3 Swarm sono fatturati in base ai crediti. Consulta i [vantaggi dell'abbonamento](https://www.kimi.com/help/membership/membership-overview) per i dettagli.
</Callout>

### Informazioni su Kimi K3

Kimi K3 è attualmente il modello più potente di Kimi, con 2,8 trilioni di parametri, costruito su Kimi Delta Attention (KDA) e Attention Residuals, con **visione nativa** e una **finestra di contesto da 1 milione di token**. Essendo il primo modello aperto di classe 3T al mondo, K3 è progettato per un'intelligenza di frontiera in coding su orizzonti temporali estesi, lavoro di conoscenza e ragionamento, raggiungendo prestazioni di primo livello nel coding, nell'esecuzione su orizzonti temporali estesi e in un'ampia gamma di attività di intelligenza generale.

### Strumenti integrati
Disponibili da subito, senza alcuna configurazione:
| Strumento | Descrizione |
|------|------------|
| **Web Search** | Ricerca web in tempo reale per notizie e informazioni aggiornate |
| **Fetch Tool** | Accesso diretto a URL specifici (pagine web, documenti, immagini e altre risorse online) |
| **Image Search** | Ricerca da testo a immagine e da immagine a immagine per trovare rapidamente contenuti visivi |
| **IPython** | Esecuzione di codice Python per analisi e visualizzazione dei dati |
| **Memory** | Memoria intelligente che registra le tue preferenze e abitudini personali |

## Capacità visive e multimodali
Kimi K3 supporta la comprensione completa di immagini, video e documenti d'ufficio (PDF/Word/Excel), grazie a un'**architettura nativamente multimodale** (non un OCR aggiunto in seguito). Può analizzare direttamente il contenuto dei documenti ed eseguire attività d'ufficio di livello intermedio-avanzato (come scrivere formule Excel o generare scalette PPT/codice VBA). Grazie alla visione nativa e a una finestra di contesto da 1 milione di token, può gestire materiali multimodali più lunghi e complessi.
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

1. **Output di file**: K3 può produrre documenti modificabili end-to-end (come `.pptx`, `.docx`, `.xlsx`, `.pdf`) e altri deliverable complessi; K2.6 si concentra su domande e risposte rapide e restituisce solo testo (come scalette PPT, corpo del testo Word o codice).

<Callout type="tip">
Suggerimento: per generare immagini, audio o video, fai clic su "+" → Plugin, seleziona la funzione corrispondente e usala con **K3**. Per creare documenti modificabili complessi o eseguire attività in più passaggi, ti consigliamo di scegliere **K3** o **K3 Swarm** per un'esperienza completa.
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
**Avvia una nuova sessione per ogni attività**: attività indipendenti come scrivere un saggio, fare ricerca o eseguire il debug dovrebbero avere ciascuna la propria sessione, per evitare interferenze di contesto.
</Callout>

<Callout type="tip">
**Riassumi periodicamente nelle sessioni lunghe**: dopo oltre 20 turni, chiedi proattivamente a Kimi di riassumere le informazioni chiave per evitare perdite di dati.
</Callout>

<Callout type="tip">
**Elimina tempestivamente le informazioni sensibili**: la cronologia delle chat viene conservata; elimina l'intera sessione dopo aver trattato contenuti privati.
</Callout>
