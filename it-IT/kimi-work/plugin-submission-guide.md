---
title: "Crea e invia plugin"
slug: "plugin-submission-guide"
order: 4
extract_headings: false
preview: true
preview_content: "Trasforma il tuo prodotto o servizio in un plugin Kimi, testalo e richiedi l'inserimento nel marketplace ufficiale."
---

<SeoMeta
  title="Crea e invia plugin - Kimi Help Center"
  description="Scopri come creare e testare un plugin in Kimi Work e richiedere l'inserimento nel marketplace ufficiale dei plugin Kimi."
/>

# Crea e invia plugin

Se desideri connettere il tuo prodotto o servizio a Kimi in modo che gli utenti possano accedere alle sue funzionalità durante una conversazione, segui questa guida per creare, testare e inviare un plugin per il marketplace ufficiale dei plugin Kimi.

## Cos'è un plugin Kimi?

Un plugin Kimi collega il tuo prodotto a Kimi. Aiuta Kimi a capire quando il tuo prodotto è utile e fornisce i flussi di lavoro o gli strumenti necessari per aiutare gli utenti. Un plugin può contenere:

- **Solo Skills**: flussi di lavoro riutilizzabili personalizzati per il tuo prodotto o caso d'uso.
- **Solo MCP**: strumenti e servizi esposti a Kimi tramite un server MCP.
- **Skills e MCP**: strumenti del prodotto combinati con flussi di lavoro che aiutano Kimi a utilizzarli in modo efficace.

## Prima di iniziare

Per prima cosa, <a href="https://www.kimi.com/products/kimi-work">scarica e installa Kimi Work</a>. Prepara quanto segue:

- Un nome, una descrizione e un logo per il plugin
- Le attività principali che gli utenti dovrebbero essere in grado di completare in linguaggio naturale
- Un URL del server MCP, se applicabile

<Callout type="warning">
Se il logo del plugin include un prodotto, un marchio o un trademark di terze parti, contatta il titolare dei diritti pertinente e ottieni l'autorizzazione scritta necessaria prima di inviarlo.
</Callout>

## Passo 1: Crea e testa il plugin

1. Apri Kimi Work, digita "/" in una conversazione e seleziona **Plugin Builder**.
2. Descrivi il plugin e fornisci le informazioni che hai preparato. Se hai già un plugin Codex, Claude o di un'altra piattaforma, fornisci i suoi file o l'URL del progetto e segui le istruzioni per convertirlo.

3. Vai a **Plugin** → **Personale**, trova il plugin e installalo.

4. Testa le funzionalità principali in una nuova conversazione, inclusi casi normali e casi limite. Conserva almeno tre prompt di test rappresentativi.
5. Segui le istruzioni di Plugin Builder per ottenere il file ZIP completo del plugin.

Per un plugin supportato da MCP, testa anche il flusso di autenticazione:

- **Nessuna autenticazione**: gli utenti possono utilizzare il plugin immediatamente dopo l'installazione.
- **OAuth**: la pagina di autorizzazione di terze parti dovrebbe aprirsi durante la prima installazione.
- **Autenticazione CLI**: l'installazione non avvia l'autorizzazione. La prima volta che gli utenti invocano il plugin, completano l'autorizzazione nella conversazione. Dopo un'autorizzazione riuscita, generalmente non sarà necessario autorizzarsi nuovamente in altre conversazioni.

## Passo 2: Invia la tua richiesta

Dopo aver creato e testato il plugin, completa il [modulo di invio plugin Kimi](https://moonshot.feishu.cn/share/base/form/shrcnZcnxlNJlbw845KoVgjEhkh) e carica il file ZIP del plugin.

Il modulo richiede:

| Voce | Requisito |
| --- | --- |
| Nome, descrizione e file ZIP del plugin | Obbligatorio |
| Tipo di plugin | Solo Skills, solo MCP o ibrido |
| Autenticazione MCP | Obbligatorio per plugin solo MCP e ibridi |
| Regioni previste | Cina continentale, estero o entrambi |
| Punti salienti e prompt di test consigliati | Almeno tre prompt di test |
| Interesse e materiali per il co-marketing | I materiali sono opzionali e necessari solo se desideri discutere di co-marketing |
| Stato di autorizzazione e conformità | Segnala gli elementi che richiedono ulteriori discussioni |
| Email di contatto | Utilizzata per aggiornamenti sulla revisione e richieste di informazioni aggiuntive |
| Azienda o team, sito web correlato e note | Opzionale |

<Callout type="warning">
Non includere password, token, chiavi API, chiavi private o altri segreti nel modulo o nel file ZIP del plugin. Se gli utenti hanno bisogno della propria chiave, spiega solo come ottenerla e configurarla.
</Callout>

## Cosa succede dopo

Il team Kimi esaminerà la richiesta e il file ZIP del plugin. Se il plugin supera la revisione, o se abbiamo bisogno di ulteriori informazioni o modifiche, ti contatteremo all'indirizzo email fornito e condivideremo i prossimi passi.

## FAQ

### Posso inviare un plugin senza un server MCP?

Sì. Sono supportati i plugin solo Skills. Seleziona **Solo Skills** come tipo di plugin.

### Posso inviare un plugin Codex, Claude o di un'altra piattaforma?

Sì. Nel Passo 1, fornisci i file del plugin esistente o l'URL del progetto a Plugin Builder e segui le istruzioni per convertirlo. Installa e testa il plugin convertito in Kimi Work prima di inviare il file ZIP generato.

### Quali metodi di autenticazione MCP sono supportati?

Attualmente sono supportati i seguenti tre metodi:

- **Nessuna autenticazione**: Gli utenti possono utilizzare il plugin immediatamente dopo l'installazione senza accedere o completare alcun'altra verifica dell'identità.
- **OAuth**: Gli utenti vengono automaticamente reindirizzati alla pagina di autorizzazione del prodotto di terze parti quando installano il plugin per la prima volta. Possono utilizzare il plugin dopo l'autorizzazione.
- **Autenticazione CLI**: L'installazione non avvia un flusso di autorizzazione. La prima volta che gli utenti invocano il plugin in una conversazione, completano l'autorizzazione utilizzando le istruzioni mostrate nella conversazione. Dopo un'autorizzazione riuscita, generalmente non sarà necessario autorizzarsi nuovamente in altre conversazioni.

Testa il flusso che corrisponde al metodo di autenticazione effettivo del tuo plugin. Se un plugin OAuth non reindirizza durante la prima installazione, o un plugin con autenticazione CLI chiede ripetutamente agli utenti di autorizzarsi, controlla la configurazione dell'autenticazione del server MCP prima di inviare la tua richiesta e descrivi il problema in **Note aggiuntive**.

### Come si presenta il flusso di autorizzazione OAuth?

Per un server MCP abilitato OAuth, Plugin Builder identifica le informazioni di autorizzazione pertinenti dall'URL del server MCP. Dopo la creazione del plugin, gli utenti vengono portati alla pagina di autorizzazione del prodotto di terze parti la prima volta che lo installano.

### Cosa succede se desidero esplorare una partnership più ampia con Kimi?

Completa prima il processo di creazione, test e invio del plugin descritto in questa guida. Se desideri esplorare altre forme di collaborazione oltre all'inserimento del plugin, descrivi brevemente la tua proposta in **Note aggiuntive**. Il team Kimi potrebbe contattarti in base alle circostanze.

### L'invio di una richiesta garantisce l'inserimento?

No. Il team Kimi valuta la funzionalità del plugin, l'esperienza utente, la sicurezza, l'affidabilità del servizio e lo stato di autorizzazione pertinente.
