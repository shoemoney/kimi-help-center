---
title: "Note di rilascio"
slug: "release-notes"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Note di rilascio di Kimi Work - Centro assistenza Kimi"
  description="Note di rilascio di Kimi Work: nuove funzionalità, modifiche e correzioni per Mac e Windows, aggiornate regolarmente."
/>

# Note di rilascio

Questa pagina raccoglie gli aggiornamenti di versione di Kimi Work, tra cui nuove funzionalità, modifiche e correzioni, ed è aggiornata regolarmente. Scarica l’ultima versione: [kimi.com/products/kimi-work](https://www.kimi.com/products/kimi-work)

## 3.2.12 (2026-09-21)

**Novità**

- Anteprima e modifica di file Office: visualizza e modifica file PPT / XLSX nel pannello di anteprima, con salvataggio delle modifiche in tempo reale
- Seleziona per chiedere: seleziona contenuto in un documento per chiedere a Kimi o richiedere modifiche sul posto
- Pagina delle attività archiviate ricostruita: supporta ricerca, ordinamento, filtro ed eliminazione permanente

**Modifiche**

- Il limite di dimensione degli allegati nel campo di input è stato rimosso

**Correzioni**

- Risolto un problema per cui l'installatore di Windows eliminava per errore l'elemento di accesso all'avvio automatico
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.2.11 (2026-09-18)

**Modifiche**

- Il pannello dei dettagli ora supporta la visualizzazione del processo di esecuzione del sub-Agent

**Correzioni**

- Risolto un problema per cui il collegamento del menu Start restava pendente dopo un aggiornamento in-app su Windows
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.2.10 (2026-09-16)

**Correzioni**

- Rimosso urgentemente il pacchetto companion della destinazione di condivisione di Windows per correggere un arresto anomalo all'avvio; la funzionalità di condivisione è tornata in 3.2.11 dopo la correzione
- I nomi visualizzati e le descrizioni delle skill integrate sono ora localizzati in base alla lingua dell'interfaccia: il menu “/” filtra per nomi localizzati, con fallback all'inglese per le lingue non disponibili
- Cliccando su una scheda allegato di una cartella si individua ora la directory corrispondente nell'albero dei file del workspace
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.2.9 (2026-09-14)

**Novità**

- Condivisione e apertura di file con Kimi ora supportate per formati di file selezionati:
  - Condividi con Kimi: invia file e contenuti direttamente a Kimi dal menu di condivisione di app come WeChat
  - Apri con Kimi: fai clic con il tasto destro sui file supportati e scegli di aprirli con Kimi
- Aggiornamento dell'animale domestico da scrivania: una UI completamente rinnovata con risposte rapide direttamente nel fumetto di conversazione — continua a chattare senza aprire la finestra principale
- Visualizzatore PDF aggiornato con un nuovo pannello indice, inclusi sommario e salto al numero di pagina
- Nuova opzione di modalità energetica “Mantieni attivo dopo lo spegnimento dello schermo”: lo schermo può spegnersi mentre il sistema continua a funzionare, senza interrompere il controllo remoto né le attività in background

**Modifiche**

- I file caricati e quelli collegati tramite “@” nel campo di input ora possono essere cliccati per aprire un'anteprima nel workspace a destra
- L'anteprima delle immagini ora supporta le azioni copia / salva

**Correzioni**

- Risolte diverse race condition, tra cui il recupero della modifica della coda e lo sblocco della navigazione dopo crash del browser
- Risolti problemi di colori in modalità scura per le funzionalità dell'app
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.2.8 (2026-09-12)

**Modifiche**

- L'impostazione anti-sospensione ora offre tre opzioni: continua a funzionare con lo schermo spento, mantieni lo schermo acceso, e disattivata

**Correzioni**

- Risolto un problema per cui la finestra delle Impostazioni diventava bianca dopo essere stata ripristinata
- Miniature degli screenshot lunghi ottimizzate per ridurre l'uso di memoria dell'anteprima
- Risolta una race condition nell'aggiornamento dell'accesso, impedendo alle richieste obsolete di cancellare erroneamente lo stato di accesso o sovrascrivere le nuove credenziali
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.2.7 (2026-09-11)

**Novità**

- Aggiornamento degli screenshot: screenshot lunghi con scorrimento nel Launcher; estrazione di testo OCR con un clic nell'editor di screenshot; fissa gli screenshot sul desktop come finestre sempre in primo piano
- Iniezione delle impostazioni di conversazione: le nuove conversazioni Work riprendono automaticamente le tue impostazioni di conversazione
- Trascina file in qualsiasi punto della finestra per allegarli, incluse le cartelle
- Nuovo plugin per il deployment di siti web: una volta installato, distribuisci i progetti web locali nel cloud in un solo passaggio

**Modifiche**

- L'avvio automatico di Windows ora resta solo nella barra delle applicazioni, senza aprire la finestra principale
- Tabelle Markdown ridisegnate, con scorrimento orizzontale per le tabelle larghe
- Il centro notifiche ora supporta "segna tutto come letto" con un clic
- I messaggi del controllo remoto ora vengono visualizzati in segmenti, con schede sub-Agent e deliverable allineate al desktop

**Correzioni**

- L'input vocale ora viene disattivato automaticamente sui dispositivi senza microfono, e la dettatura si interrompe quando il microfono viene scollegato
- Risolto un problema per cui la funzione di caricamento dei plugin era mancante
- I link email e telefono ora mostrano un messaggio chiaro quando non possono essere aperti, senza più fallimenti silenziosi
- Risolto un problema per cui la pagina delle attività pianificate si bloccava quando i crediti erano esauriti
- Prestazioni e trascinamento dell'animale domestico da scrivania corretti
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.2.6 (2026-09-07)

**Novità**

- Nuova raccomandazione e installazione di plugin nello stream: consiglia automaticamente plugin adatti alla tua attività e ti chiede di installarli
- Ora puoi installare plugin tramite link GitHub, per integrare più facilmente plugin condivisi

**Modifiche**

- La pagina dei dettagli del plugin ora mostra lo stato di connessione MCP e supporta la gestione della connessione
- Ora ti verrà chiesto di confermare le attività pianificate ancora in esecuzione prima di uscire dall'app

**Correzioni**

- Risolto un problema per cui “Indietro” non rispondeva dopo essere entrati in determinate pagine delle Impostazioni
- Risolto un problema per cui la reinstallazione su un'installazione esistente veniva bloccata per errore su macOS, e i file CAD venivano aperti per errore con Blocco note su Windows
- Risolti problemi con i colori di alcune pagine in modalità scura, messaggi Launcher duplicati e adattamento della larghezza dell'anteprima DOCX
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.2.5 (2026-09-04)

**Novità**

- Nuova funzione di controllo remoto: controlla Kimi Work sul desktop dal tuo telefono
- Nuova funzione Apps: migliora la capacità operativa web dell'Agent e la visibilità dei risultati
- Nuova ricerca nella conversazione: trova rapidamente i record all'interno di una conversazione

**Modifiche**

- Marketplace di plugin e skill aggiornato: logica di visualizzazione ottimizzata, con supporto per la ricerca di plugin e skill
- Centro impostazioni rinnovato, ora compatibile tra le modalità Chat e Work

**Correzioni**

- Risolto un problema per cui alcuni utenti vedevano una visualizzazione anomala dello stato di accesso
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.2.4 (2026-08-31)

**Modifiche**

- Visualizzazione ottimizzata delle citazioni di fonti come la ricerca web e i file locali nelle risposte dei messaggi
- Dimensione del carattere e interlinea ottimizzate nelle risposte dei messaggi

**Correzioni**

- Risolti alcuni problemi di esperienza in modalità scura
- Supervisione dei processi ottimizzata su Windows
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.2.3 (2026-08-28)

**Novità**

- Nuova voce “Crea plugin” nel marketplace dei plugin: crea plugin direttamente nel marketplace

**Correzioni**

- Perfezionamento dell’animale domestico da scrivania: comportamento della finestra migliorato, e la lingua ora segue i cambi dell’app in tempo reale
- Risolto un problema di coerenza dello stato della conversazione durante la modifica e il rinvio di un messaggio dopo un errore
- Consumo energetico ottimizzato delle funzioni sempre attive
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.2.2 (2026-08-26)

**Novità**

- Nuovo animale domestico da scrivania: Kimi ti accompagna e interagisce con te come animale domestico da scrivania
- Nuovi comandi Slash: il campo di input ora supporta i comandi compact (comprimi contesto), fork (dirama conversazione) e goal (obiettivo)
- Nuova opzione “Predefinito” per i permessi di esecuzione: ora sono disponibili globalmente tre livelli di autorizzazione — “Predefinito”, “Consenti manualmente” e “Consenti tutto”

**Modifiche**

- Il controllo dell’Agent sul browser integrato è ora attivo per impostazione predefinita
- Le conversazioni nell’area Chat non condividono più una directory radice: ogni conversazione ora ha la propria directory di lavoro

**Correzioni**

- Risolto un problema per cui il primo messaggio mostrava brevemente uno stato vuoto dopo l’invio
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.2.1 (2026-08-21)

**Novità**

- Nuovo Launcher globale: richiama un campo di input fluttuante a capsula sul desktop in qualsiasi momento e ovunque con una scorciatoia da tastiera globale
  - All’attivazione, importa automaticamente i file attualmente selezionati nel Finder / Esplora file e supporta incollare immagini, aggiungere allegati e trascinare screenshot
  - Digita “/” per aprire il menu di plugin e skill (con supporto della ricerca pinyin) e scegliere un workspace
  - Tieni premuta la scorciatoia per dettare; dopo l’invio si riduce a una mini-capsula e puoi tornare all’app principale con un clic per vedere la risposta
- Nuova coda di messaggi: mentre l’Agent risponde, puoi continuare a inviare messaggi; i nuovi messaggi vengono messi automaticamente in coda, con supporto per riordinare trascinando, modificare, eliminare e visualizzare l’anteprima dettagliata
- Dettatura vocale nel campo di input di Work: fai clic sul microfono o tieni premuta la scorciatoia per iniziare a dettare, con riconoscimento misto cinese-inglese

**Modifiche**

- Logica delle notifiche dei messaggi aggiornata: puoi cambiare le regole di notifica dei messaggi nelle Impostazioni

**Correzioni**

- Consumo energetico in standby ottimizzato, con riduzione dell’uso delle risorse in background quando l’app è inattiva
- Risolto un problema per cui l’icona del Dock scompariva su macOS
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.2.0 (2026-08-19)

**Novità**

- Aggiunto un browser integrato per l’Agent: le schede del browser sono associate alle conversazioni e si trovano nell’area di anteprima, e l’Agent può controllare direttamente il browser — fare clic, digitare e altro ancora; su Mac puoi anche importare i cookie dal tuo browser Chrome locale per riutilizzare le sessioni di accesso esistenti (disattivato per impostazione predefinita e attivabile nelle Impostazioni)
- Localizzazione in 16 lingue: il client ora supporta 16 lingue, rispetto alle sole lingue cinese e inglese precedenti

**Modifiche**

- Kimi WebBridge è ora un plugin: il controllo del browser reale è stato spostato in un plugin, disattivato per impostazione predefinita e attivabile nelle Impostazioni
- La pagina dell’elenco delle bacheche è stata rimossa; ora puoi passare da una bacheca all’altra tramite la barra delle schede in alto
- La bacheca è ora un tipo di contenuto dell’area di anteprima: le bacheche possono essere aperte nell’area di anteprima della chat e più bacheche possono essere aperte in parallelo

**Correzioni**

- Migliorato il rendering in streaming dei messaggi: le risposte lunghe ora vengono visualizzate in modo più fluido
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.1.10 (2026-08-16)

**Correzioni**

- Corretto un problema per cui l’app si chiudeva inaspettatamente durante l’aggiornamento per alcuni utenti Windows

## 3.1.9 (2026-08-15)

**Novità**

- Il marketplace dei plugin personali è disponibile: il marketplace dei plugin ora include una sezione «Plugin personali» in cui puoi sfogliare e installare i plugin di sviluppatori indipendenti

**Correzioni**

- Corretto un problema per cui i contenuti Markdown in streaming a volte non venivano aggiornati
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.1.8 (2026-08-11)

**Novità**

- Navigazione nella cronologia dei messaggi: una nuova barra di navigazione dei messaggi sul lato destro delle chat lunghe ti consente di tornare rapidamente ai messaggi precedenti
- Rami di conversazione: avvia un nuovo ramo da qualsiasi turno per continuare l’esplorazione, mantenendo la cronologia della chat della conversazione originale
- Modifica e riavvolgi: modifica il tuo ultimo messaggio e rigenera la risposta
- Cartelle di progetto: sposta le conversazioni dentro o fuori dai progetti e fissa i progetti nell’area dei contenuti fissati della barra laterale
- Modifica dei file trasparente: dopo che l’Agent ha modificato un file, viene generata una scheda di riepilogo delle differenze — esamina le modifiche riga per riga e annullale con un clic; i file del workspace si aggiornano automaticamente quando cambiano su disco
- Individuazione e creazione di Skills: scopri e crea Skills personalizzate in Work, con supporto per la ricerca delle Skills
- I componenti della bacheca fissati sul desktop ora dispongono di un’opzione per restare sempre in primo piano

**Modifiche**

- Le nuove finestre di conversazione indipendenti ora supportano la Chat
- I messaggi utente troppo lunghi nella casella di input ora vengono compressi

**Correzioni**

- Corretta l’anteprima dei link ai file PDF su Windows; le Impostazioni di Work non lampeggiano più in bianco in modalità scura; incollando dagli appunti di Word ora viene ripristinato il testo invece di un allegato immagine
- Sono stati corretti alcuni bug e migliorate alcune interazioni e la stabilità

## 3.1.7 (2026-08-05)

**Novità**

- Supporto per il feedback a livello di singolo messaggio: puoi mettere mi piace o non mi piace a messaggi specifici nelle risposte dell’assistente

**Modifiche**

- I componenti delle bacheche fissati sul desktop non restano più forzatamente in primo piano

**Correzioni**

- Sono stati corretti alcuni bug e migliorate alcune interazioni

## 3.1.6 (2026-07-29)

**Novità**

- L’editor di diapositive PPT è disponibile: apri e modifica le diapositive direttamente nel workspace, con modifiche immediatamente effettive
- Supporto per le annotazioni di screenshot dei file nell’area di anteprima e del browser; una volta completate, le annotazioni possono essere inviate direttamente all’Agent per la revisione
- Supporto per la migrazione del disco di archiviazione su Windows: i dati di Work possono essere spostati su un altro disco
- L’installazione su Windows ora consente di scegliere la posizione di installazione

**Modifiche**

- Migliorati alcuni problemi di token efficiency

**Correzioni**

- Sono stati corretti alcuni bug e migliorate alcune interazioni
