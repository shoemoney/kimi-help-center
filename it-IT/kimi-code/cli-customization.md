---
title: "Personalizzazione e riferimento"
slug: "cli-customization"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Personalizzazione e riferimento - Centro assistenza Kimi"
  description="La CLI di Kimi Code offre ampie possibilità di personalizzazione, che ti permettono di adattare il comportamento e il flusso di lavoro dell'IA alle tue esigenze."
/>

# Personalizzazione e riferimento

La CLI di Kimi Code offre ampie possibilità di personalizzazione, che ti permettono di adattare il comportamento e il flusso di lavoro dell'IA alle tue esigenze.

## File di configurazione

La CLI di Kimi Code utilizza `~/.kimi/config.toml` come file di configurazione globale, con supporto per i formati TOML e JSON. Puoi configurare:

- **Provider API e modelli**: imposta diversi provider di modelli, endpoint API e chiavi.
- **Modello predefinito**: specifica il modello da usare in modo predefinito.
- **Parametri di esecuzione**: regola timeout, concorrenza, formato di output e altre impostazioni di esecuzione.

> Usa il comando `/config` per aprire rapidamente il file di configurazione in modifica.

## Configurazione del progetto AGENTS.md

Colloca un file `AGENTS.md` nella radice del progetto per fornire all'IA il contesto a livello di progetto:

- **Contesto del progetto**: descrivi le funzionalità, l'architettura e lo stack tecnologico del progetto.
- **Passaggi di build**: come installare le dipendenze, compilare il progetto ed eseguire i test.
- **Convenzioni del codice**: convenzioni di denominazione, regole per la struttura delle directory, preferenze di stile del codice.
- **Note particolari**: restrizioni di sicurezza, requisiti di prestazioni e altri aspetti importanti da considerare.

Usa il comando `/init` per far sì che l'IA esamini automaticamente il tuo progetto e generi un `AGENTS.md` iniziale. Puoi anche modificare manualmente il file per aggiungere informazioni specifiche del progetto. I file `AGENTS.md` possono essere collocati in qualsiasi sottodirectory: l'IA caricherà automaticamente le configurazioni pertinenti.

## System prompt personalizzato

Puoi personalizzare il system prompt dell'IA in diversi modi:

- **System prompt globale**: scrivilo in `~/.kimi/AGENTS.md`, si applica a tutti i progetti.
- **System prompt a livello di progetto**: scrivilo nell'`AGENTS.md` nella radice del progetto, si applica solo al progetto corrente.
- **Parametro di avvio**: usa il flag `--system-prompt` per specificarlo all'avvio.

La configurazione a livello di progetto ha la precedenza su quella globale, mentre il parametro di avvio ha la priorità più alta.

## Integrazione MCP

La CLI di Kimi Code supporta il Model Context Protocol (MCP), che consente di connettersi a strumenti e fonti di dati esterni per ampliare le capacità dell'IA:

- **Configurazione del server MCP**: aggiungi gli indirizzi dei server MCP nel file di configurazione, così l'IA può richiamare strumenti esterni.
- **Supporto MCP integrato**: alcuni strumenti MCP di uso comune sono già integrati e non richiedono configurazione aggiuntiva.
- **Server MCP personalizzati**: puoi sviluppare i tuoi server MCP per fornire capacità specifiche del tuo dominio.

La configurazione MCP può essere collocata in `~/.kimi/config.toml` oppure nei file di configurazione a livello di progetto.

## Variabili d'ambiente

La CLI di Kimi Code supporta la configurazione tramite variabili d'ambiente, utili per pipeline CI/CD e script:

| Variabile d'ambiente | Descrizione |
| --- | --- |
| `KIMI_API_KEY` | Chiave API |
| `KIMI_BASE_URL` | Endpoint API personalizzato |
| `KIMI_MODEL` | Nome del modello predefinito |
| `KIMI_MAX_TOKENS` | Numero massimo di token di output |

Le variabili d'ambiente hanno la precedenza sulle impostazioni del file di configurazione.

## Altri riferimenti

- **Riferimento dei comandi slash**: usa `/help` per visualizzare tutti i comandi disponibili.
- **Riferimento dei parametri CLI**: esegui `kimi --help` per visualizzare tutti i parametri di avvio.
- **Documentazione ufficiale**: visita [Kimi Code Docs](https://www.kimi.com/code/docs/en/) per la documentazione completa e aggiornata.
