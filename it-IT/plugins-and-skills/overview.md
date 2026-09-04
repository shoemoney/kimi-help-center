---
title: "Cosa sono i plugin di Kimi?"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Collega strumenti esterni a Kimi per consentirgli di usare app e servizi per completare le attività. Una volta installato un plugin, Kimi può richiamare funzionalità di terze parti — come dati finanziari, software per l’ufficio e strumenti di design — per aiutarti a portare a termine il lavoro."
---

<SeoMeta
  title="Cosa sono i plugin di Kimi? Come installarli e usarli - Centro assistenza Kimi"
  description="Scopri i plugin di Kimi: collega a Kimi servizi esterni come dati finanziari, software per l’ufficio e strumenti di design e richiamali direttamente mentre completi le attività. Copre dove funzionano i plugin, installazione e autorizzazione, come richiamarli, le categorie di plugin e l’utilizzo dei credit."
/>

# Cosa sono i plugin di Kimi?

I plugin collegano strumenti esterni a Kimi, consentendogli di usare app e servizi per completare le attività. Una volta installato un plugin, Kimi può richiamare direttamente la funzionalità di terze parti corrispondente durante il completamento di un’attività — ad esempio, interrogare dati finanziari, operare su software per l’ufficio o usare strumenti di design. Puoi chiedere esplicitamente di usare un plugin specifico, e Kimi ne richiamerà uno automaticamente quando opportuno.

## Che cos’è un plugin di Kimi?

Un plugin di Kimi segue la [definizione di plugin di Kimi Code](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html#plugin-manifest) e può includere uno o più dei seguenti componenti:

| Componente | Scopo |
| --- | --- |
| Skill | Fornire le conoscenze, i passaggi e le indicazioni d’uso necessari per completare le attività |
| MCP | Collegare software, servizi, database o API esterni |
| Agents | Delegare attività complesse a sub-agent specializzati |
| Hooks | Eseguire automaticamente azioni predefinite al verificarsi di eventi specifici |
| Commands | Fornire punti di ingresso chiari e riutilizzabili basati su comandi |
| System Prompt | Aggiungere istruzioni di sistema all’Agent principale mentre il plugin è attivo |

L’esperienza web di Kimi supporta attualmente MCP e Skill nei plugin. Kimi Work e Kimi Code seguono la definizione completa di plugin riportata sopra e supportano combinazioni più complete di componenti dei plugin.

**Esempi:**

- **Notion Plugin** = MCP di Notion + Skill con indicazioni d’uso
- **Financial research Plugin** = più MCP finanziari + più Skill di analisi + un Agent personalizzato

## Dove puoi usare i plugin

Puoi usare i plugin impostando il modello su **K3** o **K3 Swarm** e negli scenari **Deep Research, Websites e PPT**.

Puoi usare i plugin anche nell’**app desktop Kimi Work**; per l’elenco dei plugin integrati sul desktop, vedi il [Centro plugin di Kimi Work](/kimi-work/plugin-center).

<Callout type="info">
I plugin non sono ancora supportati nelle conversazioni di Kimi Claw o Kimi Plus.
</Callout>

## Installare i plugin

- **Punti di accesso**: usa il **+** nella casella di input oppure digita “/”; su mobile, usa il **+** nella casella di input oppure “/”.
- Cerca o sfoglia nel marketplace dei plugin, apri i dettagli di un plugin e fai clic su “Install”.
- Alcuni plugin richiedono un’**autorizzazione OAuth** (vieni reindirizzato all’accesso del servizio di terze parti; una volta autorizzato, puoi usarlo); alcuni plugin sono **preinstallati** e non richiedono installazione manuale.
- **Plugin riservati agli utenti aziendali**: gli utenti non aziendali possono vederli, ma il pulsante “Install” è disattivato.
- Non puoi installare o usare i plugin se non hai effettuato l’accesso.

## Usare i plugin

- Dopo l’installazione, digita “/” nella casella di input oppure fai clic su **+** → Plugin, quindi seleziona il plugin per richiamarlo; puoi **richiamare più plugin contemporaneamente**.
- Puoi anche semplicemente descrivere ciò che ti serve (ad esempio, “cerca questa azienda su Tianyancha”) e Kimi sceglierà automaticamente il plugin giusto.
- Quando Kimi chiama gli strumenti di un plugin, nella risposta mostra la dicitura “Using the xx plugin”.

## Categorie ed elenco dei plugin

Il marketplace dei plugin è organizzato nelle categorie seguenti. I plugin che vedi effettivamente variano in base alla **regione (nazionale / internazionale)** e alla **piattaforma**, e alcuni plugin compaiono in più di una categoria.

- **Finanza**: Financial Investment Analysis, Investment Banking & Private Equity, Corporate Finance & Accounting, Wind Financial Data, S&P Global Market Intelligence, Hundsun Gildata, Tonghuashun iFinD, SEC, Global Financial Database, World Bank Open Data, database dell’IMF (Fondo Monetario Internazionale), Stripe, Tianyancha
- **Produttività**: Notion, Baidu Netdisk
- **Sviluppo**: GitHub, Supabase, Neon, Cloudflare
- **Creatività**: Inspiration Pool, Image Generation, Video Generation, Audio Generation, Canva
- **Generale**: Vivify

## Dati e autorizzazioni

- Quando selezioni o chiedi esplicitamente di usare un plugin, Kimi dà priorità agli strumenti forniti da quel plugin e genera la risposta in base ai risultati restituiti; dopo aver collegato un plugin, Kimi accede ai contenuti pertinenti nell’ambito dell’autorizzazione che hai concesso.
- Se un plugin è fornito da terze parti, le regole di trattamento dei dati sono definite autonomamente da quell’azienda e i dati sono soggetti ai suoi termini di servizio e alla sua informativa sulla privacy — ti consigliamo di esaminarli prima di autorizzare.
- Puoi **disinstallare un plugin o revocare l’autorizzazione in qualsiasi momento**. Dopo la disinstallazione, l’autorizzazione OAuth associata viene revocata; per usare di nuovo il plugin dovrai reinstallarlo e autorizzarlo di nuovo.

## FAQ

### I plugin consumano i credit del mio abbonamento?
Alcuni sì. Quando Kimi chiama gli strumenti o i servizi di un plugin per completare un’attività, i credit vengono consumati in base all’utilizzo effettivo; i plugin senza costi di chiamata non comportano addebiti aggiuntivi.

### Posso usare più plugin contemporaneamente?
Sì. Puoi richiamare più plugin contemporaneamente tramite “/” o **+**.

### Perché non vedo un determinato plugin?
I plugin disponibili variano in base alla regione (nazionale / internazionale) e alla piattaforma; inoltre, alcuni plugin sono riservati agli utenti privati o a quelli aziendali.

### Posso usare plugin di ChatGPT, Claude o altre piattaforme?
Sì. Vedi [Come creare un plugin personale](/plugins-and-skills/create): fornisci a Plugin Builder i file del plugin esistente o il link del progetto di un’altra piattaforma e segui le istruzioni per convertirlo in un plugin di Kimi.
