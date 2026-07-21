---
title: "Modalità di lavoro"
slug: "cli-work-modes"
order: 9
extract_headings: false
preview: true
preview_content: "Come usare la modalità Plan e Thinking mode in Kimi Code CLI, e quando usarle."
---

<SeoMeta
  title="Modalità di lavoro di Kimi Code CLI - Centro assistenza Kimi"
  description="Scopri come usare la modalità Plan e Thinking mode in Kimi Code CLI, e quando usarle."
/>

# Modalità di lavoro

## Modalità Plan

La modalità Plan è una modalità di pianificazione in sola lettura che consente all’IA di creare un piano di implementazione prima di iniziare a scrivere codice, aiutando a evitare perdite di tempo nella direzione sbagliata.

In modalità Plan, l’IA può usare solo strumenti in sola lettura (`Glob`, `Grep`, `ReadFile`) per esplorare il codebase. Non può modificare file né eseguire comandi. L’IA scrive il piano in un file dedicato e poi lo sottopone alla tua approvazione. Puoi approvarlo, respingerlo o fornire commenti per la revisione.

### Entrare in modalità Plan

Puoi entrare in modalità Plan in quattro modi:

- **Opzione di avvio**: usa `kimi --plan` per avviare una nuova sessione direttamente in modalità Plan
- **Scorciatoia da tastiera**: premi `Shift-Tab` per attivare o disattivare la modalità Plan
- **Comando slash**: inserisci `/plan` o `/plan on`
- **Avviata dall’IA**: per attività complesse, l’IA può chiedere di entrare in modalità Plan tramite lo strumento `EnterPlanMode`. Puoi accettare o rifiutare

Puoi anche impostare `default_plan_mode = true` nel file di configurazione, così ogni nuova sessione si avvierà in modalità Plan per impostazione predefinita.

Dopo l’ingresso in modalità Plan, il prompt cambia in `📋` e la barra di stato inferiore mostra un indicatore blu `plan`.

### Rivedere e approvare i piani

Quando l’IA completa il piano, lo invia per l’approvazione tramite `ExitPlanMode`. Il pannello di approvazione mostra il piano completo. Puoi:

- **Approvare l’esecuzione**: se il piano include più percorsi di implementazione, l’IA elenca 2–3 opzioni etichettate (ad esempio "Piano A" o "Piano B (consigliato)") tra cui scegliere. Dopo la selezione, l’IA esce dalla modalità Plan ed esegue quel percorso. Se esiste un solo percorso, viene mostrato un pulsante **Approva**
- **Respinge**: respinge il piano e resta in modalità Plan. Puoi fornire feedback nella conversazione
- **Respinge ed esci**: respinge il piano ed esce dalla modalità Plan in un solo passaggio
- **Rivedi**: inserisci commenti di revisione. L’IA aggiornerà il piano di conseguenza e lo invierà di nuovo

Premi `Ctrl-E` per visualizzare il piano completo nel pager a schermo intero.

### Gestire la modalità Plan

Usa il comando `/plan` per gestire la modalità Plan:

- `/plan`: attiva o disattiva la modalità Plan
- `/plan on`: attiva la modalità Plan
- `/plan off`: disattiva la modalità Plan
- `/plan view`: visualizza il piano corrente
- `/plan clear`: svuota il file del piano corrente

## Thinking mode

Thinking mode consente all’IA di riflettere più a fondo prima di rispondere, quindi è adatta ai problemi complessi.

Puoi usare il comando `/model` per cambiare modello e Thinking mode. Dopo aver selezionato un modello, se questo supporta Thinking mode, il sistema chiederà se abilitarla. Puoi abilitarla anche all’avvio con l’opzione `--thinking`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --thinking",
    },
  ]}
/>

> Suggerimento: Thinking mode deve essere supportata dal modello corrente. Alcuni modelli, come `kimi-k2-thinking-turbo`, usano sempre Thinking mode e non possono disattivarla.
