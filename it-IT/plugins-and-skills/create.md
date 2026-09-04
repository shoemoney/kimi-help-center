---
title: "Come creare un plugin personale"
slug: "create"
order: 2
extract_headings: true
preview: true
preview_content: "Usa la Skill integrata Plugin Builder in Kimi Work per trasformare un’idea in una frase, un repository di plugin esterno o qualsiasi pagina web in un plugin tutto tuo."
---

<SeoMeta
  title="Come creare un plugin personale - Centro assistenza Kimi"
  description="Crea un plugin personale in Kimi Work con la Skill integrata Plugin Builder: creane uno da un’idea in una frase, importa un repository di plugin esterno o trasforma qualsiasi pagina web in un plugin. Una volta registrato nel tuo marketplace personale di plugin, installalo e usalo subito nelle conversazioni."
/>

# Come creare un plugin personale

In Kimi Work puoi usare la Skill integrata **Plugin Builder** per trasformare un’idea in una frase, un repository di plugin esterno o qualsiasi pagina web in un plugin tutto tuo. Qualunque metodo tu scelga, il plugin ti raggiunge attraverso lo stesso percorso: **creazione / conversione → registrazione nel tuo marketplace personale di plugin (la scheda “Personal”) → fai clic su + per installare → uso in una conversazione**. Una volta installato, è subito disponibile nella conversazione corrente, senza bisogno di riavviare.

Prima di iniziare, assicurati di aver installato l’ultima versione dell’app desktop [Kimi Work](https://www.kimi.ai/products/kimi-work). Plugin Builder è una Skill integrata e non richiede installazioni aggiuntive: digita “/” in una conversazione per richiamarlo, oppure fai clic su “Custom plugin” nel marketplace dei plugin per iniziare a creare nella conversazione principale.

## Crea un nuovo plugin con una frase

Ideale per il caso “ho un’idea ma nessun codice di partenza”. Ti basta descrivere la funzionalità che desideri; Plugin Builder si occupa automaticamente di scaffolding, compilazione dei campi, convalida locale e registrazione — non scriverai mai un file a mano.

1. **Descrivi ciò che ti serve.** Richiama Plugin Builder in una conversazione e spiega in una frase cosa dovrebbe fare il plugin — ad esempio, “creami un plugin che cerca le informazioni di registrazione delle aziende”. I campi deducibili, come nome, descrizione e categoria, vengono compilati automaticamente; solo le informazioni non deducibili, come l’URL di un server MCP o un’icona, ti verranno confermate.
2. **Attendi il completamento della build.** Plugin Builder genera i file del plugin in locale, supera automaticamente la convalida di struttura e specifiche, quindi registra il plugin nel tuo marketplace personale di plugin.
3. **Installa e usa.** Apri **Plugin → Personal**, trova il plugin appena creato e fai clic su + per installarlo. Una volta installato, è immediatamente disponibile nella conversazione corrente e puoi richiamarlo in qualsiasi momento con “/”.

**Prompt in un unico paragrafo:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nCrea per me un plugin di ricerca bibliografica che copra:\n1. Ricerca bibliografica: trovare articoli per argomento / autore / rivista, restituendo voci bibliografiche, abstract e link al testo completo\n2. Esportazione dei risultati: esportare i risultati di ricerca in CSV per importarli facilmente nei gestori di riferimenti bibliografici\n3. Supporto alla rassegna: redigere una bozza di rassegna bibliografica sulla base dei risultati di ricerca",
    },
  ]}
/>

## Importa plugin da un marketplace o da un repository

Passa il link di un repository di plugin a Plugin Builder: lo riconoscerà automaticamente, convertirà il formato e lo installerà nella tua scheda “Personal”. I plugin importati non interferiscono con il marketplace ufficiale e possono essere disinstallati in qualsiasi momento.

1. **Formati di plugin supportati:** Plugin Builder riconosce i manifest di plugin delle seguenti fonti e li converte tutti nel formato nativo `kimi.plugin.json` di Kimi:

| Formato | Note |
| --- | --- |
| `kimi.plugin.json` | Formato nativo di Kimi: i campi obbligatori vengono corretti |
| Manifest di plugin di altre piattaforme di agenti | Come i file `plugin.json` in directory quali `.codex-plugin/plugin.json` o `.claude-plugin/plugin.json`, oltre ai file indice del marketplace forniti da quelle piattaforme |
| `server.json` | Il formato del registry ufficiale MCP: convertito in un plugin contenente solo un servizio MCP |
| `plugin.json` generico | Un manifest generico situato nella directory radice del plugin |

2. **Come importare:** invia il link del repository a Plugin Builder. Riconosce automaticamente le seguenti tipologie di repository:

- **Repository a plugin singolo**: l’intero repository viene convertito in un unico plugin;
- **Repository multi-plugin (monorepo)**: ogni sottodirectory viene convertita in un plugin separato;
- **Repository marketplace / indice di plugin** (un repository con un indice plugins.json o marketplace.json): ogni voce dell’indice viene espansa e convertita in blocco;
- **Repository di sole Skill**: un repository senza manifest di plugin, contenente solo file di Skill, viene pacchettizzato come plugin di tipo Skill.

3. **Installazione dalla scheda Personal:** al termine dell’elaborazione, Plugin Builder ti indica quali plugin sono utilizzabili. Vai su **Plugin → Personal** e fai clic su “Install” sulla scheda corrispondente per iniziare a usarlo nelle conversazioni.

**Prompt in un unico paragrafo:**

Importare un singolo repository:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nImporta il plugin del repository https://github.com/owner/example come plugin personale. Dopo la conversione, verifica prima che struttura e dipendenze siano utilizzabili; una volta confermato, registralo nel mio marketplace personale di plugin. Se la conversione non riesce, spiegami il motivo.",
    },
  ]}
/>

Importare in blocco un marketplace di plugin:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nConverti in blocco la raccolta di plugin all’indirizzo https://github.com/hashgraph-online/awesome-ai-plugins in plugin personali. Converti solo i primi 5 per farmeli esaminare; dopo la mia conferma, converti tutti gli altri, registrali uno a uno nel mio marketplace personale di plugin e infine dammi un report completo raggruppato per “utilizzabili / dipendenze non disponibili / non riusciti”.",
    },
  ]}
/>

Convertire solo una sottodirectory specifica:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nConverti solo il plugin nella directory https://github.com/owner/repo/tree/main/plugins/example. Una volta superate conversione e verifiche, registralo nel mio marketplace personale di plugin.",
    },
  ]}
/>

**Gestione dei plugin importati:**

- **Aggiornare un plugin**: se il repository sorgente riceve aggiornamenti, o vuoi cambiare nome o descrizione, basta dirlo a Plugin Builder: lo riconvertirà o modificherà e lo registrerà di nuovo.
- **Disinstallare / rimuovere**: disinstalla dalla scheda “Personal” per disattivare un plugin; dopo la disinstallazione la voce rimane nella scheda — eliminala se vuoi rimuoverla completamente.
- **Directory sorgente**: l’output convertito viene conservato nella directory plugins/ del tuo workspace locale. Sono i “file sorgente” del plugin e Plugin Builder li usa come base per gli aggiornamenti futuri — non eliminarli manualmente.

## Trasforma una pagina web in un plugin

Ideale per il caso “un sito che uso spesso non ha API pubbliche, ma voglio che Kimi recuperi i dati e lo operi per me”. Invia l’URL a Plugin Builder e descrivi ciò che ti serve — ad esempio, “trasforma il sito XX in un plugin; voglio cercare XX”. Per analizzare il sito ed eseguire il plugin ci sono due opzioni di browser:

| Metodo | Ideale per | Cosa serve |
| --- | --- | --- |
| **Browser integrato (predefinito)** | La maggior parte dei siti; usa il browser integrato di Kimi Work per analizzare il sito ed eseguire il plugin | Niente da installare; quando è richiesto l’accesso, accedi una volta nel browser integrato |
| **WebBridge (wb)** | Riutilizzare gli account a cui hai già effettuato l’accesso in Chrome | Installa prima WebBridge e usalo per pilotare il tuo Chrome |

1. **Analizza il sito.** Plugin Builder apre l’URL nel browser che hai scelto. Se la pagina richiede l’accesso, ti chiederà di accedere una volta nel browser — non ti chiederà mai password, cookie o altre credenziali.
2. **Ricostruzione delle API e generazione del plugin.** Opera concretamente sulle funzionalità principali della pagina, cattura le richieste di rete, ricava le API dati interne del sito e quindi genera un plugin di tipo Skill con script di interrogazione integrati.
3. **Convalida, registrazione, installazione.** Come per i metodi precedenti: una volta che il plugin supera la convalida, viene registrato nella scheda “Personal”; fai clic su + per installarlo e iniziare a usarlo.

Da quel momento, basta dire “cercami XX” e Kimi usa il plugin per recuperare i dati direttamente nel browser e organizzare i risultati. Se le API del sito cambiano e il plugin smette di funzionare, chiedi a Plugin Builder di rianalizzare il sito e aggiornare il plugin.

**Prompt in un unico paragrafo:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nTrasforma Hacker News (https://news.ycombinator.com) in un plugin che copra:\n1. Ricerca dei post: inserire una parola chiave e restituire titoli, link, punteggi e numero di commenti dei post\n2. Prima pagina: recuperare i 30 post principali attuali della home page\n3. Lettura dei commenti: aprire un determinato post e riassumere i punti chiave dei commenti principali",
    },
  ]}
/>

<Callout type="warning">
Il metodo del browser integrato si basa sulla funzionalità del browser integrato di Kimi Work — se ti viene chiesto di aggiornare, porta l’app desktop all’ultima versione. Il metodo WebBridge richiede che WebBridge sia già installato sul computer e in Chrome.
</Callout>
