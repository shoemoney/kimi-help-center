---
title: "Integrazione con l'IDE"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "Integra la CLI di Kimi Code nel tuo IDE tramite ACP."
---

<SeoMeta
  title="Integrazione con l'IDE - Centro assistenza Kimi"
  description="Integra la CLI di Kimi Code nel tuo IDE tramite l'Agent Client Protocol (ACP). Guide alla configurazione per Zed, gli IDE JetBrains e Paseo, oltre alla risoluzione dei problemi."
/>

# Usare la CLI di Kimi Code negli IDE

<Callout type="info">
La CLI di Kimi Code supporta l'integrazione negli IDE tramite l'[Agent Client Protocol (ACP)](https://agentclientprotocol.com/get-started/introduction), consentendoti di sfruttare la programmazione assistita dall'AI direttamente nel tuo editor.
</Callout>

## Prerequisiti

Prima di configurare il tuo IDE, assicurati che la CLI di Kimi Code sia installata e di aver completato la procedura di login.

L'adattatore ACP è esposto come sottocomando `kimi acp`. L'IDE lo avvia come processo figlio e comunica tramite stdin/stdout usando JSON-RPC. Ogni volta che l'IDE crea una sessione, la CLI riutilizza lo stato di autenticazione esistente, senza bisogno di rieffettuare il login.

<Callout type="tip">
Su macOS, i processi figlio avviati dalla GUI di un IDE in genere **non** ereditano il `PATH` della shell del terminale. Se `kimi` non si trova in una directory di sistema come `/usr/local/bin`, usa il percorso assoluto nella configurazione del tuo IDE. Esegui `which kimi` in un terminale per individuare il percorso attivo.
</Callout>

## Usare la CLI di Kimi Code in Zed

[Zed](https://zed.dev/) è un editor moderno con supporto nativo per ACP.

Aggiungi quanto segue al file di configurazione di Zed in `~/.config/zed/settings.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

Campi di configurazione:

- `type`: valore fisso `"custom"`
- `command`: percorso dell'eseguibile della CLI di Kimi Code. Se `kimi` non è nel `PATH`, usa il percorso completo (ad es. `/Users/you/.local/bin/kimi`).
- `args`: argomenti di avvio. Il sottocomando `acp` passa la CLI in modalità ACP.
- `env`: variabili d'ambiente aggiuntive; di solito lascia questo campo vuoto. Zed inietta automaticamente un ambiente predefinito.

Dopo aver salvato, apri una nuova conversazione nel pannello Agent di Zed: verrà avviato un sottoprocesso ACP `Kimi Code CLI` con la configurazione precedente. Anche i server MCP dichiarati nella sezione `agent_servers` di Zed vengono inoltrati al lato kimi tramite il protocollo ACP.

## Usare la CLI di Kimi Code negli IDE JetBrains

Gli IDE JetBrains (IntelliJ IDEA, PyCharm, WebStorm, ecc.) supportano ACP tramite il plugin di chat AI.

Se non disponi di un abbonamento JetBrains AI, puoi abilitare `llm.enable.mock.response` nel Registry per accedere al pannello di chat AI negli scenari limitati ad ACP. Premi due volte Shift e cerca "Registry" per aprirlo.

Nel menu del pannello di chat AI, fai clic su **Configure ACP agents** e aggiungi la seguente configurazione:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains è rigoroso riguardo al campo `command`: usa sempre un **percorso assoluto**, che puoi ottenere eseguendo `which kimi` in un terminale. Dopo aver salvato, `Kimi Code CLI` comparirà nel selettore di agenti della chat AI.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## Usare la CLI di Kimi Code in Paseo

[Paseo](https://paseo.sh/) è un orchestratore self-hosted che esegue e supervisiona le CLI degli agenti da desktop, web e dispositivi mobili. Si connette alla CLI di Kimi Code tramite ACP, esattamente come fa un IDE.

Scegli **Kimi Code CLI** dal catalogo integrato di provider ACP di Paseo, oppure aggiungi un provider personalizzato in `~/.paseo/config.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

L'adattatore ACP generico di Paseo non gestisce il flusso di login, quindi completa prima il login da terminale (vedi [Prerequisiti](#prerequisiti)); altrimenti la creazione della sessione fallirà con `Authentication required`.

## Risoluzione dei problemi

- **La sessione si disconnette subito / l'IDE mostra "agent exited"**: di solito è dovuto a un percorso `command` errato o a un login mancante. Esegui prima `kimi acp` in un terminale per verificare: se rimane bloccato in attesa di input da stdin, la CLI funziona correttamente e il problema è nella configurazione dell'IDE; se invece esce subito con un errore, segui il messaggio di errore (nella maggior parte dei casi devi eseguire `/login`).
- **L'IDE mostra "auth required"**: la CLI non ha un token di autenticazione utilizzabile. Esci dall'IDE, esegui `kimi` in un terminale per completare il login, quindi riavvia l'IDE.
- **Gli strumenti MCP non sono visibili**: controlla la tabella delle funzionalità di `kimi acp` per verificare che il tipo di trasporto MCP configurato nel tuo IDE sia supportato. L'adattatore ACP della CLI di Kimi Code attualmente supporta i trasporti `http` e `stdio`; i tipi `sse` e `acp` vengono ignorati silenziosamente e viene scritto un avviso nel log.
