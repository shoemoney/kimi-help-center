---
title: "Primi passi con Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Primi passi con Kimi - Centro assistenza Kimi"
  description="Scopri i tre modelli di Kimi (K2.6, K3, K3 Swarm), gli strumenti integrati e le funzionalità multimodali per iniziare subito con chat ed esecuzione delle attività."
/>

# Primi passi con Kimi

Puoi digitare domande nella casella di chat, caricare file o passare da un modello all'altro in base alle tue esigenze.
Apri [kimi.com](https://www.kimi.com) e prova a inviare un messaggio: saluta Kimi:

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

Kimi offre più modelli. Fai clic sul pulsante di selezione del modello sopra la casella di input per cambiarlo.

| Modello | Intensità di ragionamento | Ideale per |
|-------|-------------------|----------|
| **K2.6** | Standard / Alta | Conversazioni rapide e domande e risposte con tempi di risposta più brevi |
| **K3** | Bassa / Alta / Max | Chat e attività Agent; il più completo in assoluto |
| **K3 Swarm** | Bassa / Alta / Max | Ricerche su larga scala ed elaborazioni in batch, completate in un'unica sessione |

<Callout type="tip">
K2.6, K3 e K3 Swarm sono tutti addebitati in credit. Per i dettagli, consulta i [vantaggi dell'abbonamento](https://www.kimi.com/help/membership/membership-overview).
</Callout>

### Informazioni su Kimi K3

Kimi K3 è attualmente il modello più potente di Kimi: conta 2,8 trilioni di parametri, si basa su Kimi Delta Attention (KDA) e Attention Residuals e offre **visione nativa** e una **finestra di contesto da 1 milione di token**. Primo modello aperto al mondo di classe 3T, K3 è progettato per offrire intelligenza di frontiera in coding di lungo orizzonte, lavoro sulla conoscenza e ragionamento, con prestazioni di primo livello nel coding, nell'esecuzione di lungo orizzonte e in un'ampia gamma di attività di intelligenza generale.

### Strumenti integrati

Disponibili subito, senza alcuna configurazione:

| Strumento | Descrizione |
|------|------------|
| **Web Search** | Ricerca web in tempo reale per notizie e informazioni aggiornate |
| **Strumento Fetch** | Accesso diretto a URL specifici (pagine web, documenti, immagini e altre risorse online) |
| **Ricerca immagini** | Ricerca da testo a immagine e da immagine a immagine per trovare rapidamente contenuti visivi |
| **IPython** | Esecuzione di codice Python per analisi e visualizzazione dei dati |
| **Memoria** | Memoria intelligente che registra preferenze e abitudini personali |

## Funzionalità visive e multimodali
Kimi K3 comprende immagini, video e documenti d'ufficio (PDF/Word/Excel) in scenari completi grazie a un'**architettura multimodale nativa** (non un OCR aggiunto a posteriori). Può analizzare direttamente il contenuto dei documenti ed eseguire attività d'ufficio da intermedie ad avanzate, come scrivere formule Excel o generare scalette PPT/codice VBA. Insieme alla visione nativa e alla finestra di contesto da 1 milione di token, può gestire materiali multimodali più lunghi e complessi.
### Supporto per input multimodali
- **Immagini**: PNG, JPEG, WebP, GIF, ecc. (tramite URL, Base64 o caricamento di file locale)
- **Video**: MP4, ecc. (tramite video_url o sequenze di frame immagine + parametro fps)
- **Documenti**: PDF, Word, Excel, TXT, Markdown, ecc.
- **Risorse online**: URL, link ad articoli
- **Ricerca immagini**: Carica un'immagine per cercare immagini correlate o simili
- **Comprensione video**: Supporta la comprensione dei video: può analizzare registrazioni dello schermo e replicare la logica di interazione
- **Coding visivo**: Carica screenshot o registrazioni dello schermo per generare codice frontend (HTML/Vue/React, ecc.); può riprodurre automaticamente pagine web a partire da mockup di design

### Formati di output
- Testo semplice / testo e immagini misti: Risposte conversazionali standard
- Markdown: Testo ricco con titoli, elenchi, tabelle e link
- Blocchi di codice: HTML/Vue/React/Python/JSON/Mermaid, ecc. (con identificatori di linguaggio)
- Dati strutturati JSON: Output forzato in modalità JSON
- Diagrammi Mermaid: Diagrammi di flusso, diagrammi di sequenza, mappe mentali, ecc.
- Formule matematiche LaTeX: Espressioni matematiche inline e a blocchi
- Output a doppia modalità (Thinking): Restituisce sia `reasoning_content` (processo di ragionamento) sia `content` (risposta finale)
- Formato di chiamata degli strumenti: Formato standard Function Calling (per sviluppatori)

### Note importanti

1. **Output su file**: K3 può produrre documenti modificabili end-to-end (come `.pptx`, `.docx`, `.xlsx`, `.pdf`) e altri deliverable complessi; K2.6 si concentra su domande e risposte rapide e produce solo testo (come scalette PPT, corpo di documenti Word o codice).

<Callout type="tip">
Suggerimento: Per generare immagini, audio o video, fai clic su "+" → Plugin, seleziona la funzionalità corrispondente e usala con **K3**. Per creare documenti modificabili complessi o svolgere attività in più passaggi, consigliamo di scegliere **K3** o **K3 Swarm** per un'esperienza completa.
</Callout>

## Sessioni e turni di conversazione
Quando fai clic su "Nuova chat", immaginalo come l'inizio di una lunga conversazione con Kimi.
| Concetto | Analogia | Definizione tecnica |
|---------|---------|---------------------|
| **Sessione** | Un'intera riunione (dall'inizio alla fine) | Un processo di chat completo, con un inizio e una fine chiari |
| **Turno** | Uno scambio (tu parli, Kimi risponde) | Il tuo input e la risposta di Kimi formano un ciclo di andata e ritorno |

### Differenze principali
**Sessione**
- **Memoria continua**: Kimi ricorda tutto il contesto all'interno della chat corrente
- **Contesto tra turni**: Ogni risposta usa i contenuti precedenti della conversazione come contesto per il turno successivo
- **Confini definiti**: Fare clic su "Nuova chat" = nuovo inizio; il contesto precedente viene cancellato
**Turno**
- **Conteggio cumulativo**: Turno 1, Turno 2, … vengono aggiunti progressivamente
- **Memoria limitata**: Troppi turni (ad es. 50+) possono portare Kimi a "dimenticare" i contenuti iniziali, soprattutto nella scrittura lunga o in attività con requisiti rigidi
- **Vincolo di lunghezza del contesto**: Limitato dal numero di token; quando i turni si accumulano, i contenuti più vecchi possono essere compressi

<Callout type="tip">
**Caso limite**: Se una singola domanda e risposta conclude la conversazione, allora 1 turno = 1 sessione.
</Callout>

## Perché questa distinzione è importante
All'interno di una singola sessione, ogni nuova domanda o istruzione che invii riceve risposta tenendo conto di tutti i turni precedenti. Man mano che i turni si accumulano e il contenuto si allunga, la qualità delle risposte può diminuire gradualmente.

### Scenari comuni
**Scenario 1: Cambio di argomento**
- Sbagliato: Chiedere "aiutami a calcolare le tasse" in una sessione in cui stai scrivendo un romanzo di 30.000 parole
- Corretto: Avvia una nuova sessione per la domanda sulle tasse, evitando che Kimi confonda i personaggi del romanzo con concetti fiscali
**Scenario 2: Elaborazione di documenti lunghi**
- Dopo decine di turni, Kimi potrebbe "dimenticare" regole o riepiloghi di file stabiliti all'inizio
- Soluzione: Riassumi proattivamente a metà attività ("Riassumi il nostro piano finora") oppure avvia una nuova sessione
**Scenario 3: Comprendere i limiti del prodotto**
- I limiti di lunghezza del contesto si misurano in token, ma nella pratica quotidiana puoi pensarli come "turni"
- Se vedi il prompt "Avvia una nuova chat", significa che la sessione corrente ha troppi turni
## Buone pratiche

<Callout type="tip">
**Avvia una nuova sessione per ogni attività**: Le attività indipendenti — scrittura di saggi, ricerca, debugging — dovrebbero avere ciascuna la propria sessione per evitare interferenze di contesto.
</Callout>

<Callout type="tip">
**Riassumi periodicamente nelle sessioni lunghe**: Dopo 20+ turni, chiedi proattivamente a Kimi di riassumere le informazioni chiave per prevenire perdite di dati.
</Callout>

<Callout type="tip">
**Rimuovi subito le informazioni sensibili**: La cronologia chat viene conservata; elimina l'intera sessione dopo aver gestito contenuti privati.
</Callout>
