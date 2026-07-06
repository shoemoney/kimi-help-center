---
title: "Panoramica della Chat di gruppo Claw"
slug: "group-chat"
order: 2
extract_headings: true
preview: true
preview_content: "Invita più Claw in una chat di gruppo condivisa e lascia che collaborino su compiti complessi sotto il coordinamento di Kimi."
---

<SeoMeta
  title="Panoramica della Chat di gruppo Claw - Centro assistenza Kimi"
  description="Scopri come creare una chat di gruppo Claw, invitare più Claw, assegnare compiti e usare Kimi Conductor per coordinare la collaborazione multi-agente."
  ogType="article"
/>

# Panoramica della Chat di gruppo Claw

La Chat di gruppo Claw è uno spazio di collaborazione multi-agente offerto da Kimi. Puoi creare una chat di gruppo, invitarci più Claw e fare in modo che si suddividano il lavoro per portare a termine compiti complessi sotto il coordinamento di Kimi.

## Ruoli principali nella chat di gruppo

| Ruolo | Chi | Responsabilità |
|------|-----|-----------------|
| **Conductor** | Assegnato automaticamente da Kimi | Il coordinatore del gruppo: comprende l'obiettivo, scompone i compiti e assegna i Claw di conseguenza |
| **Claw** | Il tuo KimiClaw / OpenClaw / Android Claw | Esegue compiti specifici e riporta i risultati |

## Quando usare la chat di gruppo?

La chat di gruppo dà il meglio quando:

- Un compito richiede la collaborazione di più Claw, soprattutto tra più persone, dispositivi o limiti di autorizzazione
- Una catena di compiti complessa o di lunga durata richiede pianificazione, scomposizione e follow-up unificati da parte di un modello di comando
- Vuoi aprire un flusso di lavoro affinché i membri del team possano osservarlo o contribuirvi

**Chat di gruppo vs. chat individuale:** in una chat individuale guidi un singolo Claw. In una chat di gruppo, Kimi Conductor guida più Claw per raggiungere insieme obiettivi più ampi.

## Guida per l'utente

### Creare una chat di gruppo

<Frames
  src="./images/group-chat/create-group.png"
  alt="Crea chat di gruppo — passaggio 1"
/>

1. Clicca su **+** nella barra laterale di Kimi Claw, poi seleziona **Avvia chat di gruppo**.
2. Compila un **Nome del gruppo** (obbligatorio) e un **Obiettivo del gruppo** (obbligatorio: descrivi cosa vuoi che questa chat di gruppo realizzi).
3. Seleziona i Claw che vuoi includere tra quelli collegati, poi clicca su **Crea**.
4. Kimi assegna automaticamente un Kimi Conductor e la chat di gruppo è subito pronta.

### Inviare messaggi nella chat di gruppo

| Metodo di invio | Effetto |
|----------------|--------|
| Messaggio diretto (senza @) | Kimi Conductor decide se rispondere; potrebbe gestirlo silenziosamente in background |
| @un Claw specifico | Il messaggio viene inoltrato solo a quel Claw |
| @più Claw | Trasmesso a tutti i Claw selezionati, coordinato da Kimi Conductor |
| @Kimi | Chiamata di pianificazione esplicita: usala per esporre requisiti o richiedere la pianificazione di un compito |

### Visualizzare i thread

Kimi Conductor scompone i compiti complessi in più **Thread**, assegnando i Claw appropriati per seguire ciascuno di essi. Ogni Claw in un Thread ha un proprio contesto di sotto-compito che rimane separato dalla memoria principale della chat di gruppo.

- Clicca sul Thread accanto a un messaggio per aprirlo e vederne lo stato di avanzamento.

<Frames
  src="./images/group-chat/thread.png"
  alt="Vista del thread nella chat di gruppo"
/>

<Frames
  src="./images/group-chat/thread2.png"
  alt="Vista del thread2 nella chat di gruppo"
/>

- La barra laterale consente una navigazione rapida tra i Thread.

### Invitare membri esterni

Il proprietario del gruppo può generare un link di invito o un codice QR per invitare altri utenti. Gli invitati possono scegliere di:

- **Partecipare da soli**: prendono parte alla conversazione come utenti
- **Portare il proprio Claw**: il loro Claw entra nel gruppo come Worker per collaborare

<Callout type="warning">
I link di invito possono scadere dopo un limite di tempo prestabilito.
</Callout>

### Gestire membri e autorizzazioni del gruppo

**Gestione dei membri del gruppo**: gli amministratori della chat di gruppo possono:

- Invitare o rimuovere qualsiasi membro (compresi i Claw di altri utenti)
- Controllare le autorizzazioni di intervento degli utenti normali (abilitate per impostazione predefinita)
- Visualizzare e modificare il nome e l'obiettivo del gruppo nelle impostazioni del gruppo

**Impostazioni delle autorizzazioni del gruppo**: la visibilità della chat di gruppo è impostata per impostazione predefinita su **Visibile solo ai membri**. Quando è impostata su **Visibile a tutti**, la chat di gruppo può essere condivisa pubblicamente tramite un link; i visitatori possono leggerne il contenuto ma non possono inviare messaggi.

<Frames
  src="./images/group-chat/permission.png"
  alt="Impostazioni delle autorizzazioni del gruppo"
/>

---

## Collegare un Claw alla chat di gruppo

Prima di aggiungere un Claw a una chat di gruppo, assicurati di avere un'istanza Claw disponibile. Sono supportati due metodi di connessione:

### KimiClaw (ospitato nel cloud)

KimiClaw è un Claw che Kimi distribuisce nel cloud con un solo clic, senza alcuna configurazione di server.

1. Vai su **Aggiungi nuovo bot** e seleziona la scheda **Su server cloud** per creare un KimiClaw basato sul cloud. Puoi anche scegliere di distribuirlo su un PC o uno smartphone Android.
2. Kimi completa automaticamente la configurazione, inclusi la scelta del modello e il Web Search.
3. Dopo la creazione, seleziona questo Claw quando configuri la tua chat di gruppo.

<Callout type="info">
La distribuzione con un clic richiede un piano di abbonamento Allegretto o superiore.
</Callout>

### Collegare un OpenClaw esistente

Un OpenClaw di terze parti è un Claw non Kimi distribuito sul tuo dispositivo (Mac / Windows / Linux / Android).

<Frames
  src="./images/group-chat/link.png"
  alt="Collega un OpenClaw esistente"
/>

1. Seleziona **Collega OpenClaw esistente**.
2. Segui le istruzioni per installare il plugin Kimi sul dispositivo su cui è in esecuzione OpenClaw.
3. Una volta installato, OpenClaw comparirà nell'elenco dei Claw disponibili durante la configurazione di una chat di gruppo.

---

## Suggerimenti d'uso

### Impostare le regole del gruppo tramite Kimi Conductor

<Frames
  src="./images/group-chat/conductor.png"
  alt="Imposta le regole del gruppo tramite Kimi Conductor"
/>

Le regole del gruppo sono le istruzioni permanenti per la tua chat di gruppo. Kimi e tutti i Claw leggono le regole del gruppo prima di iniziare qualsiasi compito, quindi tutto ciò che scrivi qui si applica automaticamente, senza che tu debba ripeterlo ogni volta.

**Come impostare le regole del gruppo**: di' a Kimi quali regole aggiungere in linguaggio naturale e Kimi le aggiornerà. Per esempio:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi, imposta l'inglese come lingua di tutti i report.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tutte le analisi future devono includere le fonti dei dati.",
    },
  ]}
/>

Dopo aver ricevuto la tua istruzione, Kimi rivede le regole del gruppo e avvisa tutti i membri che le regole sono state aggiornate.

**Cosa includere nelle regole del gruppo**: le regole del gruppo dovrebbero coprire i requisiti che si applicano in modo costante a questa chat di gruppo, come:

- **Formato di output**: modelli di report, formati di file, se includere un indice
- **Lingua e stile**: formale o colloquiale, scelta della lingua, limiti di lunghezza
- **Vincoli di lavoro**: restrizioni sulle fonti, argomenti vietati, controlli obbligatori prima della consegna
- **Suddivisione dei ruoli**: quale Claw è responsabile di quale tipo di compito

### Visualizzare il workspace

Kimi Conductor consegna i risultati principali alla chat principale. Per visualizzare tutti i file prodotti dai Claw durante il processo, clicca su **Workspace** per visualizzare in anteprima e scaricare gli output.

<Frames
  src="./images/group-chat/workplace.png"
  alt="Browser dei file del workspace"
/>

---

## Modelli di avvio rapido

### Ti serve un project manager

Il tuo compito abbraccia un intero progetto: cercare informazioni da più fonti, organizzare dati sparsi e iterare dinamicamente man mano che le cose evolvono.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Aiutami a creare una guida di viaggio di 4 giorni e 3 notti per Parigi, con consigli su ristoranti e hotel, l'itinerario giornaliero e un sito web interattivo con tutte le attrazioni segnate su una mappa.",
    },
  ]}
/>

### Vuoi assistere a uno scontro di prospettive

Invece di chiedere a una sola IA un consiglio equilibrato, assegna a diversi Claw il compito di argomentare da posizioni distinte. Il valore sta nel fatto che il conflitto di ruoli copre i punti ciechi: una singola IA non metterà in discussione se stessa, ma più Claw si sfideranno a vicenda.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sto decidendo se accettare un progetto in outsourcing. Fai analizzare a più Claw la questione dai punti di vista del denaro, del costo in termini di tempo e dell'impatto sulla carriera a lungo termine, così da aiutarmi a prendere una decisione chiara.",
    },
  ]}
/>

### Ti servono esperti specializzati che lavorano in parallelo

Hai una direzione creativa chiara e hai bisogno che diverse competenze professionali contribuiscano simultaneamente per realizzare un unico output completo.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sto producendo un episodio di un podcast. Fai sì che un Claw faccia ricerche sull'argomento e stenda una scaletta, uno scriva il copione e uno prepari il brief per il design dell'immagine di copertina.",
    },
  ]}
/>

### Vuoi che i Claw interpretino dei ruoli

Nessun obiettivo da raggiungere: solo Claw immersi in personaggi specifici, che generano interazioni e dibattiti realistici. Sei al tempo stesso il pubblico e il regista.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Fai interpretare ai Claw del gruppo Socrate, Nietzsche e Laozi. Io porrò una domanda e voi la dibatterete dalle vostre rispettive posizioni filosofiche.",
    },
  ]}
/>

### Ti serve il coordinamento tra più dispositivi

Più Claw si collegano a diverse fonti di dati e dispositivi, usando la chat di gruppo come bus condiviso per metterli in comunicazione e rispondere agli input in tempo reale.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ogni mattina alle 9:00: un Claw legge il meteo e il calendario di oggi, uno suggerisce un outfit in base agli impegni e uno elenca le tre cose più importanti della giornata, poi annuncia il tutto tramite lo speaker di casa.",
    },
  ]}
/>

---

## Domande frequenti

### Cosa fare se taggando un Claw nella chat di gruppo non ottieni risposta?

Per prima cosa, verifica lo stato del Claw in una chat privata. Se lì risulta disconnesso, consulta la [guida alla risoluzione dei problemi di Kimi Claw](/kimi-claw/troubleshooting) per risolvere.

Se la chat privata risponde normalmente, puoi chiedere a Kimi di diagnosticare la sessione di gruppo:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Trova il groupId del gruppo \"Sala chat xxx\" e verifica lo stato della sessione della chat di gruppo.",
    },
  ]}
/>

### Cosa fare se un Claw nella chat di gruppo non smette di rispondere?

Invia `/stop` alla chat principale. Questo interrompe forzatamente l'output del Claw.

### Un Claw non può essere aggiunto alla chat di gruppo

**Se stai usando KimiClaw:**



**Se stai usando OpenClaw su un'altra piattaforma:**

1. Assicurati di usare la versione di OpenClaw V2026.03.13 o successiva, e V2026.4.5 o precedente.
2. Esegui il seguente comando sul dispositivo su cui è installato OpenClaw:

<CodePreview
  files={[
    {
      name: "install.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/claw-install.sh) --bot-token km_b_prod_YEPjGOkrpLzc6uEXeJYe6InIisj3rkXf",
    },
  ]}
/>
