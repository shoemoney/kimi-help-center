---
title: "Guida rapida a Kimi Code per VS Code"
slug: "vscode-getting-started"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="Guida rapida a Kimi Code per VS Code - Centro assistenza Kimi"
  description="Kimi Code per VS Code è un'estensione integrata in Visual Studio Code. Una volta installata, puoi porre domande, esaminare le differenze nel codice e applicare rapidamente le modifiche..."
/>

# Guida rapida a Kimi Code per VS Code

<Callout type="warning">
**Avviso di compatibilità dell'estensione per VS Code**

Attualmente Kimi Code per VS Code può essere installato ex novo solo dagli utenti della precedente CLI in Python. Gli utenti esistenti che hanno già installato il plugin possono continuare a utilizzarlo dopo l'aggiornamento alla nuova CLI. Al momento l'installazione non è supportata per gli utenti della CLI in versione TS.
</Callout>

Kimi Code per VS Code è un'estensione integrata in Visual Studio Code. Dopo l'installazione, puoi porre domande direttamente nell'editor, esaminare le differenze nel codice e applicare rapidamente le modifiche.

L'estensione è in grado di leggere il contenuto dei file a cui fai riferimento e di mostrare i suggerimenti di modifica tramite un'interfaccia visiva, applicandoli dopo la tua conferma. L'intero flusso di lavoro resta sotto il tuo controllo, migliorando al tempo stesso in modo significativo l'efficienza dello sviluppo.

Questa estensione offre un pannello di chat nativo in VS Code, con supporto per:
- Riferimenti a file o cartelle tramite il simbolo `@`.
- Esecuzione di scansioni del progetto e gestione del contesto tramite i comandi `/`.
- Viste delle differenze che mostrano le modifiche ai file, con possibilità di annullamento.
- Integrazione di server MCP per richiamare strumenti esterni.

---

## Installazione

1.  **Prerequisiti**: serve un abbonamento a un account Kimi oppure una chiave API Kimi.
2.  **Marketplace**: installa tramite il [VS Code Marketplace](vscode:extension/moonshot-ai.kimi-code).

<Callout type="tip">
Se l'estensione non compare dopo l'installazione, riavvia VS Code oppure esegui **Developer: Reload Window** nella tavolozza dei comandi (Mac: `Cmd+Shift+P`, Win/Linux: `Ctrl+Shift+P`).
</Callout>

---

## Autenticazione

Kimi Code supporta due modalità di autenticazione. Puoi passare dall'una all'altra in qualsiasi momento tramite l'**icona a forma di ingranaggio**.

<Frames
  src="./images/vscode/kimi-code-gear-icon.png"
  alt="Impostazioni di autenticazione"
  width={800}
  height={450}
/>

- **Modalità account Kimi**: fai clic sul pulsante di accesso per autorizzare tramite il browser.
- **Modalità chiave API**: fai clic per saltare l'accesso se hai già configurato una chiave API.

---

## Flussi di lavoro tipici

Lettura del codice: digita `@` per selezionare un file o una cartella, chiedi una spiegazione del flusso del codice e prosegui con domande di approfondimento.

Refactoring: fai riferimento al codice di destinazione, ad esempio `@src/feature/`, richiedi un piano di refactoring, esamina le differenze e approva in modo selettivo, ricorrendo all'annullamento quando necessario.

Debug: incolla i messaggi di errore o le tracce dello stack, fai riferimento ai file correlati, richiedi una diagnosi e le correzioni, quindi approva le modifiche proposte.

Panoramica del progetto: fai riferimento a una cartella, ad esempio `@src/services/`, richiedi una mappa dei moduli o un riepilogo dell'architettura e prosegui chiedendo informazioni su dipendenze o punti deboli.

---

## Comandi e scorciatoie

Usa `CodePreview` per testare rapidamente i comandi o consultare le scorciatoie principali:

<CodePreview
  files={[
    {
      name: "shortcuts.txt",
      language: "text",
      content: "Ctrl+Shift+K : Focus Kimi input box\nAlt+K : Insert current file reference\nCtrl+N : New conversation",
    },
  ]}
/>

| Scorciatoia | Funzione |
| :--- | :--- |
| `Ctrl+Shift+K` / `Cmd+Shift+K` | Porta il focus sulla casella di input di Kimi |
| `Alt+K` | Inserisci un riferimento al file corrente |
| `Ctrl+N` / `Cmd+N` | Nuova conversazione |
| `↑` / `↓` | Sfoglia la cronologia degli input |

<Callout type="info">
Digita **Kimi Code** nella tavolozza dei comandi per accedere ad altri comandi: apri in una nuova scheda, apri nella barra laterale o gestisci le sessioni.
</Callout>
