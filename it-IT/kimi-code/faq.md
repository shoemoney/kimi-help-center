---
title: "Domande frequenti su Kimi Code"
slug: "faq"
order: 4
extract_headings: true
preview: true
preview_content: "Domande frequenti su Kimi Code."
---

<SeoMeta
  title="Domande frequenti su Kimi Code - Centro assistenza Kimi"
  description="Domande frequenti su installazione, autenticazione, migrazione, interazione e altro ancora della CLI di Kimi Code."
/>

# Domande frequenti

## Migrazione dalla versione precedente

<Callout type="info">
La CLI di Kimi Code ha subito un importante aggiornamento di versione, passando da Python/uv a Node.js, con un'installazione più semplice, un avvio più rapido e un'interfaccia del terminale ridisegnata. La versione precedente verrà gradualmente dismessa, perciò ti consigliamo di aggiornare il prima possibile.
</Callout>

Se stai migrando dalla versione precedente, segui i passaggi qui sotto: un solo comando trasferisce alla nuova versione la tua configurazione, i server MCP e la cronologia delle sessioni.

### Novità

- **Niente più Python / uv**: ricostruita su Node.js, senza bisogno di un ambiente Python e con un'installazione più semplice
- **Binario nativo, pronto all'uso**: avvio più rapido e ingombro ridotto
- **Interfaccia del terminale ridisegnata**: un'esperienza più fluida e reattiva
- **Migrazione completa dei dati**: configurazione, server MCP e cronologia delle sessioni vengono trasferiti senza interruzioni

### Come migrare

Esistono due modi per migrare.

La **prima volta che esegui `kimi`** dopo aver installato kimi-code, viene verificato automaticamente se in `~/.kimi/` sono presenti dati di kimi-cli. Se ne trova, compare un messaggio di migrazione e puoi scegliere se migrare subito, farlo più tardi o non ricevere più la richiesta.

Puoi anche **eseguirla manualmente in qualsiasi momento**:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi migrate",
    },
  ]}
/>

Puoi decidere se migrare anche le sessioni di chat. Se per ora non ti serve la cronologia, scegli **Config only**; altrimenti scegli **Config + N sessions** per trasferire tutto in una volta sola. Al termine viene mostrato un riepilogo.

### Cosa accade durante la migrazione

**Cosa viene migrato**: la configurazione (`config.toml`), la configurazione dei server MCP, la cronologia degli input e le sessioni di chat che hai scelto di migrare.

**Cosa non viene migrato**: le credenziali di accesso OAuth e le autorizzazioni dei servizi MCP non vengono copiate, perciò dopo la migrazione dovrai eseguire di nuovo `/login` e riautorizzare i server MCP. Anche i plugin di kimi-cli non rientrano nell'ambito della migrazione.

<Callout type="tip">
La migrazione **non modifica né elimina mai** nessuno dei vecchi dati presenti in `~/.kimi/`. kimi-cli continua a funzionare come prima e i due strumenti non interferiscono tra loro. La migrazione può anche essere eseguita più volte: le sessioni già migrate non vengono importate di nuovo.
</Callout>

Dopo la migrazione, le sessioni importate da kimi-cli vengono contrassegnate con `[imported]` nel selettore delle sessioni, così puoi distinguerle da quelle nuove.

## Installazione e autenticazione

### Nessun modello disponibile durante l'esecuzione di `/login`

Se esegui `/login` e vedi il messaggio "No models available for the selected platform", le cause possibili sono:

- **Chiave API non valida o scaduta**: verifica che la chiave API inserita sia corretta e ancora valida.
- **Problema di connessione di rete**: assicurati di poter accedere all'indirizzo del servizio API (come `api.kimi.com` o `api.moonshot.cn`).

**Attenzione alla distinzione tra le piattaforme**

I vantaggi dell'abbonamento Kimi Code e la [Piattaforma aperta di Kimi](https://platform.kimi.com) hanno Base URL diversi. Assicurati che il Base URL corrisponda alla chiave API durante la configurazione.

| Piattaforma | Base URL | Fatturazione | Creazione della chiave |
|------|---------|---------|-------------|
| **Kimi Code** | Compatibile con Anthropic: `https://api.kimi.com/coding/` | Abbonamento Kimi (crediti inclusi) | [Console di Kimi Code](https://www.kimi.com/code/console) |
| **Piattaforma aperta di Kimi** | `https://api.moonshot.cn/v1` | Pagamento a consumo | [Piattaforma aperta di Kimi](https://platform.kimi.com) |

### La chiave API non è valida

Possibili motivi per cui una chiave API non è valida:

- **Chiave inserita in modo errato**: controlla la presenza di spazi extra o caratteri mancanti.
- **Chiave scaduta o revocata**: verifica lo stato della chiave nella console della piattaforma.

### Abbonamento scaduto o crediti esauriti

Se utilizzi la piattaforma Kimi Code, puoi controllare i crediti attuali e lo stato dell'abbonamento con il comando `/usage`. Se i crediti sono esauriti o l'abbonamento è scaduto, devi rinnovarlo o aggiornarlo su [Kimi Code](https://kimi.com/code).

## Abbonamento

### Come richiedo una fattura o effettuo l'upgrade del mio abbonamento?

Visita la [pagina dell'abbonamento Kimi](https://www.kimi.com/membership/pricing#pricing-faq) e segui le istruzioni per richiedere una fattura o aggiornare il tuo piano.

## Problemi di interazione

### Incollare un'immagine non funziona

Quando incolli un'immagine con `Ctrl-V`, se vedi il messaggio "Current model does not support image input", significa che il modello attuale non supporta l'input di immagini.

Soluzioni:

- **Passa a un modello che supporta le immagini**: usa un modello con la funzionalità `image_in`.
- **Controlla il contenuto degli appunti**: assicurati che gli appunti contengano effettivamente dati di immagine e non il percorso a un file immagine.

## Aggiornamenti e upgrade

### Il primo avvio su macOS è lento

Gatekeeper di macOS esegue un controllo di sicurezza la prima volta che viene eseguito un nuovo programma, rallentando l'avvio. Soluzioni:

- **Attendi il completamento del controllo**: abbi pazienza al primo avvio; le esecuzioni successive torneranno alla velocità normale.
- **Aggiungi agli strumenti per sviluppatori**: aggiungi la tua app del terminale in **Impostazioni di sistema → Privacy e sicurezza → Strumenti per sviluppatori**.

### Come aggiornare la CLI di Kimi Code

Esegui `kimi upgrade` per verificare la disponibilità dell'ultima versione e visualizzare le opzioni di aggiornamento. Scegli `Install update now` per aggiornare. Puoi anche aggiornare direttamente tramite il gestore di pacchetti:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

## Domande frequenti sull'estensione VS Code

Qui sotto trovi le domande frequenti sull'estensione VS Code di Kimi Code.

### VS Code segnala che nessun workspace è aperto

Apri una cartella in VS Code. L'estensione VS Code di Kimi Code richiede un workspace per funzionare correttamente.

### VS Code segnala che la CLI non è stata trovata

Installa manualmente la CLI di Kimi Code e configura `kimi.executablePath` nelle impostazioni di VS Code, oppure assicurati che la CLI integrata sia presente.

### L'accesso da VS Code non riesce

Prova a saltare l'accesso e a usare invece la modalità con chiave API, controlla la connessione di rete o riprova più tardi tramite il menu delle azioni dell'estensione Kimi Code.

### VS Code invia messaggi senza alcuna risposta

Verifica che la CLI di Kimi Code sia disponibile, che il modello sia configurato e che in VS Code sia aperta una cartella di workspace. Controlla i log degli errori tramite "Kimi Code: Show Logs".

### La connessione di VS Code va in timeout

Se non c'è alcuna risposta entro 30 secondi, si verifica un timeout. Controlla la connessione di rete e riprova.

### Errore in VS Code prima di inviare un messaggio

Alcuni errori impediscono l'invio dei messaggi in VS Code, ad esempio CLI di Kimi Code non trovata, versione troppo vecchia, accesso non effettuato o sessione occupata. L'errore viene mostrato come notifica toast e il testo inserito viene conservato per un nuovo tentativo.

## Feedback e contatti

### La documentazione non ha risolto il mio problema

Se quanto sopra non ha risolto il tuo problema, contattaci pure via email: [code@moonshot.ai](mailto:code@moonshot.ai). Nell'email descrivi il problema riscontrato, i passaggi eseguiti e qualsiasi informazione di log pertinente, e ti risponderemo il prima possibile.

Se hai problemi o suggerimenti, puoi anche inviare un feedback su [GitHub Issues](https://github.com/MoonshotAI/kimi-cli/issues).
