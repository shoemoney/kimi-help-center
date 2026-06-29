---
title: "Interazione e input"
slug: "cli-interaction"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Interazione e input - Kimi Help Center"
  description="La CLI di Kimi Code offre diversi metodi di interazione per collaborare con l'AI in modo efficiente."
/>

# Interazione e input

La CLI di Kimi Code offre diversi metodi di interazione per collaborare con l'AI in modo efficiente.

## Thinking mode

La Thinking Mode permette all'AI di ragionare più a fondo prima di rispondere, ideale per i problemi complessi.

- Usa il comando `/model` per cambiare modello e attivare la Thinking Mode.
- Puoi anche abilitare la Thinking Mode all'avvio con il flag `--thinking`.

## Input su più righe

Premi **Ctrl-J** per inserire una nuova riga e scrivere su più righe. È utile per prompt più lunghi o per incollare snippet di codice multilinea.

## Incolla dagli appunti

Premi **Ctrl-V** per incollare contenuti dagli appunti: sono supportati sia il testo sia le immagini. Quando incolli un'immagine, l'AI può interpretarne direttamente il contenuto (ad esempio screenshot, mockup di design o schermate di errore).

## Comandi slash

I comandi che iniziano con `/` servono a controllare le sessioni, la configurazione e il debug. Tra i comandi più comuni:

| Comando | Descrizione |
| --- | --- |
| `/help` | Mostra le informazioni di aiuto |
| `/login` | Accedi e autorizza |
| `/model` | Cambia modello e Thinking Mode |
| `/sessions` | Elenca e cambia le sessioni |
| `/clear` | Cancella il contesto corrente |
| `/compact` | Comprime il contesto |
| `/init` | Genera AGENTS.md |
| `/exit` | Esci dalla CLI |

Digitando `/` nel campo di input verrà visualizzato automaticamente l'elenco dei comandi disponibili.

## Completamento dei percorsi con @

Usa il simbolo `@` nell'input per fare riferimento a percorsi di file o cartelle: il sistema li completerà automaticamente.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Check @src/utils/auth.ts for any security vulnerabilities",
    },
  ]}
/>

L'AI leggerà automaticamente il contenuto del file di riferimento come contesto.

## Domande e risposte strutturate

In alcuni casi l'AI presenta opzioni strutturate per il tuo input. Usa i **tasti freccia** per selezionare un'opzione e premi **Invio** per confermare.

## Conferma di approvazione

Quando l'AI deve eseguire modifiche ai file, comandi shell o altre operazioni, ti chiederà conferma. Puoi scegliere tra:

| Opzione | Descrizione |
| --- | --- |
| **Allow** | Consenti questa operazione |
| **Allow for Session** | Consenti operazioni simili per il resto della sessione corrente senza ulteriori richieste |
| **Deny** | Rifiuta questa operazione |

### YOLO mode

Se ti fidi delle operazioni dell'AI, puoi usare la YOLO Mode per saltare tutte le conferme:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --yolo",
    },
  ]}
/>

> In YOLO Mode l'AI eseguirà automaticamente tutte le operazioni: usala con cautela. È consigliata solo in ambienti di sviluppo controllati.
