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

## 3.2.2 (2026-08-24)

**Novità**

- Nuovo animale domestico da scrivania: Kimi ti accompagna e interagisce con te come animale domestico da scrivania
- Nuovi comandi Slash: il campo di input ora supporta i comandi compact (comprimi contesto), fork (dirama conversazione) e goal (obiettivo)
- Nuove conversazioni con workspace temporaneo: inizia subito a chattare senza prima creare un progetto
- Più formati di anteprima nel workspace: supporto per csv / tsv, audio e video, ico e altri formati di testo

**Modifiche**

- Il controllo dell’Agent sul browser integrato è ora attivo per impostazione predefinita

**Correzioni**

- Risolto un problema per cui il primo messaggio mostrava brevemente uno stato vuoto dopo l’invio
- Risolto un problema per cui i messaggi in coda non conservavano correttamente il livello di autorizzazione selezionato
- Risolto un problema per cui Launcher poteva attivare erroneamente la richiesta di autorizzazione “Input Monitoring” di macOS con alcuni layout di tastiera
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
