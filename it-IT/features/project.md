---
title: "Progetti"
slug: "project"
order: 4
extract_headings: true
preview: true
preview_content: "Un progetto è uno spazio di lavoro persistente che riunisce file di riferimento, chat e istruzioni di progetto per un'attività di lunga durata, così non devi rispiegare il contesto in ogni nuova chat."
---

<SeoMeta
  title="Che cos'è un progetto Kimi? Come crearlo e usarlo - Centro assistenza Kimi"
  description="Scopri i progetti Kimi: uno spazio di lavoro persistente che raggruppa file di riferimento, chat e istruzioni di progetto — ideale per scrivere una serie di documenti, svolgere ricerche continuative o mantenere una codebase. Include creazione e gestione dei progetti, istruzioni di progetto, file di progetto e quota dei piani."
/>

# Progetti

Un progetto è uno spazio di lavoro persistente. Puoi riunire in un unico progetto i file di riferimento, le chat e le istruzioni di progetto per un'attività di lunga durata; ogni chat che avvii al suo interno porta automaticamente con sé questo contesto — così non devi ricaricare gli stessi file o rispiegare ogni volta lo sfondo del progetto.

**Quando usare un progetto**: crea un progetto quando il lavoro proseguirà nel tempo, produrrà più di un risultato o dipenderà dallo stesso insieme di file — per esempio per scrivere una serie di documenti, condurre ricerche continuative o mantenere una codebase. Se l'attività è autonoma e non richiede un contesto condiviso, usa semplicemente una chat normale.

<Callout type="info">
Anche l'app desktop Kimi Work include "Progetti", distinti dai progetti Kimi (Chat) descritti qui: i due ambienti non sono collegati e non condividono dati.
</Callout>

## Creare e gestire i progetti

**Punti di accesso**:
- il pulsante "+" a destra della sezione "Progetti" nella barra laterale;
- la voce "+ Nuovo progetto" in alto nel selettore dei progetti della home.

**Creazione**: inserisci un nome per il progetto (obbligatorio, 1–50 caratteri) e, facoltativamente, le istruzioni di progetto; fai clic su "Crea" per aprire la home page del progetto.

**Modifica / Eliminazione**:
- passa il cursore sul nome di un progetto nella barra laterale, oppure fai clic destro, per scegliere "Modifica titolo" o "Fissa";
- l'eliminazione di un progetto richiede conferma. **Una volta eliminato, le chat, i file e le istruzioni di progetto vengono rimossi definitivamente e non possono essere recuperati** — procedi con attenzione.

**Barra laterale**: la sezione "Progetti" si trova sotto la voce Kimi Claw e sopra la cronologia delle chat; mostra i tuoi progetti in ordine di creazione più recente. Espandi un progetto per vedere le sue chat.

## Home page del progetto

La home page del progetto usa un layout a tre colonne:
- **Sinistra**: la barra laterale standard;
- **Centro**: un'area per avviare una chat e l'elenco delle chat del progetto. La casella di input mostra "Avvia una chat in 'project name'…"; inviando un messaggio da qui, viene creata una chat che appartiene automaticamente al progetto corrente;
- **Pannello destro**: due blocchi — Istruzioni e File (comprimibili).

## Cosa puoi fare in una chat di progetto

Le chat in un progetto hanno le stesse funzionalità delle normali chat Kimi, ma includono automaticamente il contesto del progetto. Puoi:
- usare i **file di progetto** (letti su richiesta dal modello) e le **istruzioni di progetto**;
- usare **plugin, Skills e Goal**;
- **scegliere il modello**.

Avvia una chat separata per ogni risultato distinto, così messaggi ed esiti restano focalizzati; il progetto mantiene insieme queste chat correlate.

## Istruzioni di progetto

- Le istruzioni di progetto sono istruzioni personalizzate specifiche del progetto (testo semplice) che Kimi segue in ogni chat al suo interno;
- Per esempio: "Sei un senior product manager. Rispondi in cinese e produci l'output in Markdown.";
- Hanno effetto dal messaggio successivo o da una nuova chat dopo il salvataggio.

## File di progetto

- Carica file di riferimento in un progetto affinché tutte le sue chat possano usarli;
- I formati supportati corrispondono ai caricamenti di Kimi Agent: PDF, DOCX, XLSX, CSV, TXT, MD, file di codice comuni e formati immagine comuni;
- **Ogni file deve avere una dimensione massima di 100 MB e puoi caricare fino a 50 file**;
- I file di progetto vengono **letti su richiesta dal modello**: invece di precaricare in ogni turno l'intero testo di tutti i file, il modello decide quali file gli servono in base alla tua domanda;
- Il blocco File mostra in basso una barra di capacità; quando si avvicina al limite o lo raggiunge, ti verrà chiesto di eliminare file o aggiornare il piano.

## Come funziona il contesto in un progetto

Quando avvii una chat in un progetto, il contesto inserito nel modello include: **prompt di sistema + memoria principale globale + istruzioni di progetto + file di progetto letti su richiesta**.

Le chat normali (non di progetto) non inseriscono istruzioni o file di progetto; le istruzioni e i file di un progetto hanno effetto solo all'interno di quel progetto e non influenzano altri progetti o chat normali.

## Quota e piani

Il numero di progetti e lo spazio di archiviazione dei progetti aumentano in base al tuo piano di abbonamento:

| Piano | Free | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Progetti | 2 | 20 | 20 | 100 | 100 |
| Archiviazione progetti | 500MB | 20GB | 20GB | 50GB | 50GB |

Anche altri limiti (come il numero di chat per progetto e il limite di caratteri per le istruzioni di progetto) variano in base al piano; per i dati più aggiornati, consulta la [pagina dei piani di abbonamento](/membership/membership-pricing).

## FAQ

### I file di progetto vengono letti per intero a ogni turno di una chat?
No. I file di progetto vengono letti su richiesta: il modello decide quali file gli servono in base alla tua domanda e legge solo quelli, invece di precaricare tutti i file a ogni turno.

### Quanti file può contenere un progetto?
Ogni file deve avere una dimensione massima di 100 MB e puoi caricare fino a 50 file. Lo spazio di archiviazione totale del progetto varia in base al tuo piano; consulta la [pagina dei piani di abbonamento](/membership/membership-pricing).

### Cosa succede quando elimino un progetto?
L'eliminazione di un progetto **rimuove definitivamente** le sue chat, i suoi file e le sue istruzioni di progetto; l'operazione non può essere annullata. Conferma solo quando sei sicuro di voler eliminare.

### Cosa devo fare se raggiungo il limite di numero di progetti o di spazio di archiviazione?
Elimina i progetti o i file che non ti servono più per liberare spazio, oppure aggiorna il piano per ottenere una quota più alta. Consulta la [pagina dei piani di abbonamento](/membership/membership-pricing) per i dettagli.
