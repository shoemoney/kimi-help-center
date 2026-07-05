---
title: "Per iniziare"
slug: "cli-getting-started"
order: 3
extract_headings: false
preview: true
preview_content: "Guida all'installazione, all'accesso e ai primi passi con Kimi Code CLI."
---

<SeoMeta
  title="Installazione e avvio rapido di Kimi Code CLI - Centro assistenza Kimi"
  description="Inizia a usare Kimi Code CLI: comandi di installazione, utilizzo da terminale e browser, primo accesso e generazione di AGENTS.md con /init."
/>

# Per iniziare con Kimi Code CLI

Kimi Code CLI è un AI agent che gira nel terminale e ti aiuta a portare a termine attività di sviluppo software e operazioni quotidiane da riga di comando: legge e modifica codice, esegue comandi shell, cerca file, recupera pagine web e pianifica autonomamente i passi successivi, adattandoli in base ai riscontri man mano che procede.

È adatto a scenari come:

- **Scrivere e modificare codice**: implementare nuove funzionalità, correggere bug, completare refactoring
- **Comprendere un progetto**: esplorare un codebase sconosciuto e rispondere a domande su architettura e implementazione
- **Automatizzare attività**: elaborare file in batch, eseguire build e test, concatenare più script tra loro

La CLI è scritta in TypeScript, distribuita tramite npm ed eseguita su Node.js.

## Prima di iniziare

- **Sistema operativo**: macOS, Linux o Windows (tramite PowerShell)
- **Account Kimi**: un abbonamento Kimi attivo oppure una chiave API utilizzabile

<Callout type="tip">
Kimi Code CLI è un'applicazione TUI completamente interattiva. Per la migliore esperienza visiva, eseguila in un terminale con supporto per true-color e legature, come [Kitty](https://sw.kovidgoyal.net/kitty/) o [Ghostty](https://ghostty.org/).
</Callout>

## Installazione

Sono disponibili due opzioni di installazione: lo script di installazione ufficiale (consigliato, non richiede Node.js preinstallato) e l'installazione globale tramite npm.

### Script di installazione (consigliato)

macOS / Linux:

<Frames
  src="./images/cli-getting-started/screenshot-23.png"
  alt="Installazione di Kimi Code CLI"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

Windows (PowerShell):

<CodePreview
  files={[
    {
      name: "command.ps1",
      language: "powershell",
      content: "irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

Lo script scarica automaticamente l'ultima release, verifica il checksum e colloca l'eseguibile `kimi` nel tuo `PATH`.

<Callout type="tip">
Su Windows, installa [Git for Windows](https://gitforwindows.org/) prima del primo avvio. Kimi Code CLI utilizza il Git Bash incluso come ambiente shell; se Git Bash è installato in una posizione personalizzata, imposta `KIMI_SHELL_PATH` sul percorso assoluto di `bash.exe`.
</Callout>

### Installazione tramite npm

Se hai già installato Node.js 22.19.0 o versioni successive, puoi installare direttamente tramite npm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "node --version\nnpm install -g @moonshot-ai/kimi-code",
    },
  ]}
/>

Oppure con pnpm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "pnpm add -g @moonshot-ai/kimi-code",
    },
  ]}
/>

### Verifica dell'installazione

Dopo l'installazione, verifica che l'eseguibile sia pronto:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>

<Callout type="tip">
Se il comando `kimi` non viene trovato, prova a riaprire il terminale o a eseguire `source ~/.bashrc` (oppure `~/.zshrc`).
</Callout>

> A causa di Gatekeeper di macOS, la prima esecuzione di `kimi` potrebbe richiedere sensibilmente più tempo. Puoi velocizzare gli avvii successivi aggiungendo l'app del terminale a **Impostazioni di sistema → Privacy e sicurezza → Strumenti per sviluppatori**.

## Aggiornamento e disinstallazione

**Aggiornamento**: esegui `kimi upgrade`: la CLI verifica la presenza dell'ultima versione e propone le opzioni di aggiornamento. Scegli `Install update now` per aggiornare in base alla tua attuale fonte di installazione. Puoi anche aggiornare direttamente tramite il gestore di pacchetti:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

**Disinstallazione**: se hai effettuato l'installazione tramite lo script, elimina l'eseguibile `kimi`. Se hai installato tramite npm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm uninstall -g @moonshot-ai/kimi-code",
    },
  ]}
/>

## Primo avvio

### Terminale interattivo

Spostati nella directory del tuo progetto ed esegui `kimi` per avviare l'interfaccia interattiva:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd your-project\nkimi",
    },
  ]}
/>

### Istruzione singola

Per eseguire una singola istruzione senza accedere all'interfaccia interattiva, usa `-p`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"Take a look at this project's directory structure\"",
    },
  ]}
/>

### Riprendere una sessione

Per riprendere la sessione precedente, aggiungi `-C`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -C",
    },
  ]}
/>

### Primo accesso

Al primo avvio devi configurare una fonte API. Nell'interfaccia interattiva, digita `/login` per avviare la procedura di accesso:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

`/login` apre un selettore di piattaforma che supporta due opzioni:

- **Kimi Code (OAuth)**: flusso device-code; apri il link su qualsiasi dispositivo, accedi e inserisci il codice per autorizzare
- **Chiave API di Kimi Platform**: inserisci una chiave API da `platform.kimi.com` o `platform.kimi.ai`

Per disconnetterti, digita `/logout` per cancellare le credenziali correnti.

<Callout type="tip">
Se vuoi collegare Anthropic, OpenAI, Google o altri provider, modifica direttamente `~/.kimi-code/config.toml` per configurare la chiave API. Per il riferimento completo di tutte le opzioni di configurazione, consulta la documentazione su variabili d'ambiente e override di configurazione.
</Callout>

## Generare AGENTS.md

Esegui il comando `/init` nella directory del tuo progetto. Kimi Code CLI analizzerà automaticamente la struttura del progetto e genererà un file `AGENTS.md`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

`AGENTS.md` serve a fornire all'AI informazioni di contesto sul progetto, passaggi di build, convenzioni di codice e altre informazioni utili affinché l'AI comprenda il tuo progetto con maggiore precisione.

## La tua prima conversazione

Una volta effettuato l'accesso, descrivi un'attività in linguaggio naturale. Un buon punto di partenza è lasciare che Kimi Code CLI prenda confidenza con il progetto:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Dai un'occhiata alla struttura delle directory di questo progetto e descrivi brevemente a cosa serve ciascuna directory.",
    },
  ]}
/>

Kimi Code CLI richiama automaticamente gli strumenti di lettura file, ricerca e altri per esplorare i contenuti pertinenti prima di rispondere. Per impostazione predefinita, le operazioni in sola lettura vengono eseguite automaticamente senza richiedere conferma. Per le operazioni che modificano file o eseguono comandi shell, chiede la tua conferma prima di procedere.

Puoi anche descrivere direttamente un'attività più concreta:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Aggiungi una funzione in src/utils che converta qualsiasi stringa in kebab-case e aggiungi un test unitario per essa.",
    },
  ]}
/>

Kimi Code CLI pianifica i passaggi, modifica il codice, esegue i test e ti comunica cosa ha fatto a ogni passo.

<Callout type="tip">
Non sai da dove cominciare? Digita `/help` in qualsiasi momento per aprire il pannello integrato con comandi e scorciatoie da tastiera. Usa `↑`/`↓` per sfogliare ed `Esc` per chiudere. Per uscire, digita `/exit`, premi `Ctrl-C` due volte oppure premi `Ctrl-D` con la casella di input vuota.
</Callout>

## Comandi e scorciatoie da tastiera comuni

### Comandi di sessione

| Comando | Descrizione |
| --- | --- |
| `/new` | Avvia una nuova sessione, cancellando il contesto corrente |
| `/sessions` | Sfoglia la cronologia delle sessioni e scegline una da riprendere |
| `/model` | Cambia il modello corrente |
| `/compact` | Comprimi manualmente il contesto per liberare token |
| `/fork` | Crea un fork della sessione corrente, mantenendo la cronologia ma proseguendo in modo indipendente |

### Scorciatoie da tastiera più usate

| Scorciatoia | Descrizione |
| --- | --- |
| `Esc` | Interrompi l'output in streaming / chiudi un popup |
| `Ctrl-C` | Interrompi l'output; premi due volte quando è inattivo per uscire |
| `Shift-Tab` | Attiva/disattiva la modalità Plan |
| `Ctrl-S` | Inserisci un messaggio durante lo streaming senza attendere il completamento della risposta corrente |
| `Ctrl-O` | Comprimi / espandi l'output degli strumenti |

Per l'elenco completo, digita `/help` o visita [Interazione e input](/kimi-code/cli-interaction).

## Dove vengono memorizzati i dati

Per impostazione predefinita, Kimi Code CLI memorizza i propri dati locali in `~/.kimi-code/`: file di configurazione, registri delle sessioni, log e cache degli aggiornamenti. Per spostarli altrove, indica un nuovo percorso tramite la variabile d'ambiente `KIMI_CODE_HOME`. Per la struttura completa delle directory, consulta la documentazione sulle variabili d'ambiente.

## Domande frequenti

**Ho inserito la mia chiave API, ma indica che l'autenticazione è fallita.**

Innanzitutto, verifica che la tua chiave e il Base URL appartengano alla stessa piattaforma. `api.kimi.com` e `api.moonshot.cn` sono due sistemi di account completamente indipendenti e le loro chiavi API non sono intercambiabili:

| Piattaforma | Base URL | Fatturazione | Creazione della chiave |
|------|---------|---------|-------------|
| **Kimi Code** | Compatibile con OpenAI: `https://api.kimi.com/coding/v1`<br> Compatibile con Anthropic: `https://api.kimi.com/coding/` | Abbonamento Kimi (include crediti) | [Console Kimi Code](https://www.kimi.com/code/console) |
| **Piattaforma aperta di Kimi** | `https://api.moonshot.cn/v1` | A consumo | [Piattaforma aperta di Kimi](https://platform.kimi.com) |

**Il comando `kimi` non viene trovato dopo l'installazione.**

Lo script di installazione aggiunge `kimi` al tuo PATH, ma devi riavviare il terminale o eseguire `source ~/.bashrc` (oppure `source ~/.zshrc`) affinché abbia effetto. Se ancora non viene trovato, controlla che `~/.local/bin` sia nel tuo PATH.

**Il browser non si è aperto dopo l'esecuzione di `/login`.**

In un server remoto o in un ambiente headless, `/login` mostrerà un URL. Copialo manualmente nel browser per completare l'autorizzazione.

Se hai problemi o suggerimenti, lascia un feedback su [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues).

## Passaggi successivi

- [Interazione e input](/kimi-code/cli-interaction): spiegazione delle operazioni nella casella di input, del flusso di approvazione, della modalità Plan e della modalità YOLO
- [Sessioni e contesto](/kimi-code/cli-sessions): riprendere le sessioni, comprimere il contesto, esportare le sessioni
- [Casi d'uso comuni](/kimi-code/cli-use-cases): esempi di prompt per attività tipiche
