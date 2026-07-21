---
title: "Operazioni principali in VS Code"
slug: "vscode-core-operations"
order: 12
extract_headings: false
preview: true
preview_content: "Pannello chat, riferimenti ai file, revisione diff, Modalità Plan e gestione del contesto nell’estensione Kimi Code per VS Code."
---

<SeoMeta
title="Operazioni principali di Kimi Code per VS Code - Centro assistenza Kimi"
description="Padroneggia le funzionalità principali dell’estensione Kimi Code per VS Code: riferimenti ai file con @, comandi slash, revisione diff delle modifiche al codice, Modalità Plan, coda dei messaggi e gestione del contesto."
/>

# Operazioni principali in VS Code

<Callout type="warning">
**Adattamento dell’estensione VS Code in corso**

Kimi Code per VS Code è attualmente disponibile per nuove installazioni solo agli utenti della CLI Python legacy. Gli utenti esistenti che hanno già installato l’estensione possono continuare a usarla dopo l’aggiornamento alla nuova CLI. Al momento, l’installazione non è supportata per gli altri utenti della CLI in versione TS.
</Callout>

## Aprire il pannello

Fai clic sull’icona Kimi nella Activity Bar oppure esegui il comando "Kimi Code" dalla Command Palette.

## Input e controlli

### Riferimenti ai file

Digita `@`, quindi seleziona il nome di un file o di una cartella. Ad esempio, usa `@src/handlers/` per fare riferimento a una cartella, `@app.ts` per fare riferimento a un file oppure `@src/app.ts:10-20` per fare riferimento a un intervallo di righe specifico.

Premi `Alt+K` per inserire rapidamente come riferimento il file corrente o il codice selezionato.

### Comandi slash

Digita `/` per aprire il menu dei comandi. Usa `/init` per analizzare il progetto e generare la documentazione, oppure `/compact` per comprimere un contesto troppo lungo.

### Cronologia dell’input

Premi `↑` / `↓` nella casella di input per scorrere rapidamente i messaggi inviati di recente, così da ripetere o riformulare più facilmente una domanda.

### Input di file multimediali

Puoi incollare, trascinare e rilasciare oppure selezionare file multimediali. I formati supportati includono formati immagine come PNG, JPEG, GIF, WebP e HEIC, oltre a formati video come MP4, WebM e MOV.

- **Incolla / trascina e rilascia**: una singola immagine può avere una dimensione originale massima di 5MB. Il sistema la comprimerà automaticamente, anche convertendo HEIC in JPEG, ridimensionando le immagini troppo grandi e riducendo la qualità fino a circa 2MB.
- **Selettore file**: quando selezioni i file tramite il pulsante "+" nella casella di input o dal menu `@`, le immagini possono arrivare a 10MB e i video a 20MB.
- **Limiti generali**: ogni messaggio può includere fino a 9 file allegati, per una dimensione totale massima di 80MB. Quando sono allegati file multimediali, i modelli che non supportano l’input multimodale vengono esclusi automaticamente.

### Coda dei messaggi

Mentre Kimi sta rispondendo, puoi continuare a digitare e inviare messaggi nella casella di input. Questi messaggi non andranno persi: vengono invece aggiunti alla **coda dei messaggi**. La barra degli strumenti in basso mostra il numero di elementi in coda; puoi farci clic per espandere il pannello della coda:

- Visualizzare l’elenco dei messaggi in attesa di invio
- Modificare o eliminare i messaggi in coda
- Riordinare i messaggi
- Mentre Kimi sta rispondendo, fai clic sull’icona ⚡ su un elemento della coda per inserire subito quel messaggio come **orientamento**, guidando Kimi a correggere la direzione della risposta corrente

### Modelli e Thinking mode

Cambia modello dal menu a discesa nella barra di input.

Alcuni modelli supportano capacità di ragionamento estese. L’interruttore Thinking mode ha tre stati: nascosto quando il modello non supporta Thinking mode, attivato/disattivato manualmente dall’utente oppure sempre attivo per modelli come k2-thinking.

Una volta attivato, i passaggi di ragionamento nella risposta sono compressi per impostazione predefinita. Puoi espanderli per visualizzare il processo di ragionamento. Abilita `kimi.alwaysExpandThinking` nelle impostazioni per espandere il processo di ragionamento per impostazione predefinita.

## Modalità di lavoro

### Conferma delle operazioni ed esecuzione degli strumenti

Quando Kimi propone di eseguire uno strumento o di scrivere in un file, compare una finestra di conferma con tre opzioni:

- **Sì**: approva solo l’operazione corrente
- **Sì, per questa sessione**: approva operazioni simili all’interno della sessione corrente finché non ne inizia una nuova
- **No**: rifiuta di eseguire l’operazione

Abilita `kimi.yoloMode` nelle impostazioni per approvare automaticamente tutte le chiamate agli strumenti. È utile quando ti fidi del flusso di lavoro e vuoi maggiore efficienza.

### Finestra di domanda

Durante l’esecuzione, Kimi potrebbe farti una domanda, ad esempio chiedendoti di scegliere un approccio di implementazione. In basso comparirà una scheda con la domanda. Puoi selezionare direttamente un’opzione predefinita oppure scegliere "Risposta personalizzata..." per inserire una risposta tua. Dopo la risposta, Kimi continua l’esecuzione.

### Modalità Plan

Fai clic sull’icona 📋 sul lato sinistro della casella di input per entrare in Modalità Plan. Quando è attiva, prima dell’esecuzione vera e propria Kimi mostra una scheda del piano espandibile, con l’elenco dei passaggi che intende seguire. Puoi rivedere il piano prima di lasciarlo proseguire.

- Il pulsante Modalità Plan mantiene l’impostazione precedente per ogni nuova sessione.
- Se Kimi sta già trasmettendo una risposta in streaming, per uscire dalla Modalità Plan viene richiesta una seconda conferma, così da evitare l’interruzione dell’attività in corso.

### Monitoraggio delle modifiche ai file

Dopo che Kimi modifica i file, tutte le modifiche vengono tracciate e mostrate nella sezione "Modifiche ai file". Puoi visualizzare l’elenco dei file modificati e il relativo stato, ad esempio aggiunto, modificato o eliminato, insieme alle statistiche sulle righe aggiunte e rimosse.

Per ciascun file, puoi visualizzare le modifiche nella vista diff nativa di VS Code, ripristinarlo allo stato originale oppure conservare le modifiche per cancellare il record di tracciamento. Sono supportate anche le operazioni in blocco, quindi puoi conservare o scartare tutte le modifiche in una sola volta. Lo stato di riferimento viene acquisito la prima volta che un file viene modificato nella sessione; il ripristino riporta il file a quella versione di riferimento.

## Gestione del contesto

### Cronologia delle sessioni

Fai clic sul menu a discesa della cronologia nella parte superiore del pannello per consultare le sessioni precedenti. I dati delle sessioni sono archiviati localmente e supportano la ricerca per parole chiave. Puoi eliminare le vecchie sessioni o caricarne una per continuare una conversazione precedente.

La barra di stato mostra la percentuale di utilizzo del contesto e il conteggio dei token di input/output. Quando l’utilizzo del contesto è elevato, usa il comando `/compact` per comprimerlo.

### Cambio della directory di lavoro

Fai clic sull’icona a forma di ingranaggio (menu Azioni) sul lato destro della casella di input → **Directory di lavoro** per cambiare la directory di lavoro tra le diverse sottodirectory del Workspace corrente. Dopo il cambio, viene avviata automaticamente una nuova sessione, così Kimi può lavorare in base al contesto della nuova directory. Puoi selezionare direttamente una sottodirectory registrata oppure usare "Sfoglia..." per esplorare qualsiasi sottocartella.

## Menu Azioni

### Elenco delle funzionalità

L’icona a forma di ingranaggio sul lato destro della casella di input apre il menu Azioni, che include le seguenti funzionalità:

- **Directory di lavoro**: cambia la directory di lavoro corrente (vedi "Cambio della directory di lavoro" sopra)
- **Server MCP**: apre il pannello di configurazione dei server MCP
- **Configurazione generale**: apre la pagina di configurazione di Kimi nelle impostazioni di VS Code
- **Mostra log**: apre il pannello dei log di output di Kimi Code per la risoluzione dei problemi
- **Reimposta Kimi**: reimposta la Webview di Kimi, utile quando l’interfaccia è bloccata o non risponde
- **Esci / Accedi**: esci dal tuo account Kimi o accedi di nuovo

Puoi anche eseguire "Kimi Code: Run CLI" dalla Command Palette di VS Code per avviare direttamente Kimi Code CLI nel terminale integrato.
