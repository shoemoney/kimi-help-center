---
title: "Cosa sono le Skill?"
slug: "what-are-skills"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Cosa sono le Skill? - Centro assistenza Kimi"
  description="Scopri il funzionamento, le tipologie e l'utilizzo delle Kimi Skills. Le Skill sono pacchetti di conoscenza riutilizzabili che ampliano le capacità dell'Agent in attività specifiche e contengono istruzioni, best practice, script e risorse."
  ogType="article"
/>

# Cosa sono le Skill?

<Frames
  src="./images/skills/what_is_skill.png"
  alt="what_is_skill"
/>

Le Skill sono pacchetti di conoscenza riutilizzabili pensati per estendere i confini delle capacità di un agente AI. Ogni Skill comprende:

- **Metodi di lavoro e linee guida operative** — Metodologie su misura per tipologie di attività specifiche.
- **Best practice e standard** — Standard di settore e protocolli interni da rispettare.
- **Script, strumenti e risorse di riferimento** — Strumenti e materiali opzionali a supporto dell'esecuzione.

## Come si usano?

All'inizio di una conversazione, l'Agent visualizza un elenco delle Skill disponibili con nome e breve descrizione. Se una Skill è pertinente all'attività in corso, l'Agent ne carica le istruzioni complete e le esegue di conseguenza.

## Il percorso dell'utente

Dalla scoperta delle Skill alla creazione di una tua, il percorso completo è il seguente:

1. **Scopri le Skill** — Sfoglia le Skill ufficiali e consigliate nel pannello Skill per trovare quella adatta al tuo scenario.
2. **Installa le Skill** — Fai clic sul pulsante "+" per aggiungere una Skill all'istante.
3. **Richiama le Skill** — Digita `/` nella casella di chat per selezionare una Skill, oppure lascia che Kimi ne attivi una automaticamente in base alla tua richiesta.
4. **Crea la tua** — Se le Skill esistenti non soddisfano le tue esigenze, carica documenti o descrivi i tuoi requisiti per generare una Skill personalizzata, oppure usa `/skill-creator` per crearne una attraverso il dialogo.

## Come funzionano le Skill?

Quando invii una richiesta, Kimi Agent valuta se l'attività in corso richiede una Skill specifica. In tal caso, carica automaticamente la Skill corrispondente e ne segue le istruzioni per portare a termine il compito.

Le Skill vengono caricate solo quando pertinenti all'attività, così da non interferire con il contesto di altre conversazioni.

## Skill o prompt diretto: qual è la differenza?

Prendiamo come esempio la scrittura di un report settimanale:
- **Prompt diretto**: chiedi direttamente a Kimi Agent, che scrive basandosi sulla propria interpretazione del formato.
- **Con le Skill**: dopo aver installato una Skill per i report settimanali, ogni risultato segue la struttura, il tono e la lunghezza che hai predefinito, senza dover ripetere le istruzioni.

| | Prompt diretto | Con le Skill |
|---|---|---|
| **Devi spiegare i requisiti ogni volta?** | Sì | No, vengono applicati automaticamente |
| **Stabilità del formato di output** | Variabile | Coerente con quanto definito |
| **Caso d'uso ideale** | Attività occasionali e temporanee | Flussi di lavoro ripetitivi e standardizzati |
| **Richiede configurazione?** | No | Richiede creazione o installazione |

## Tipologie di Skill

### (1) Skill ufficiali e Skill consigliate

**Skill ufficiali**: create e gestite da Moonshot AI, disponibili per tutti gli utenti. Kimi le attiva automaticamente negli scenari pertinenti.

Tra le Skill ufficiali più comuni:
- `docx` — Crea e modifica documenti Word, adatta a qualsiasi attività in formato .docx: creazione e modifica di documenti, commenti, revisioni, note a piè di pagina, indice e conversione da Markdown a Word.
- `deep-research` — Conduci ricerche approfondite e crea report estesi tramite un toolkit, con almeno 10 cicli di ricerca iterativi, riflessione ricorsiva e visualizzazione obbligatoria con IPython.

**Skill consigliate**: una selezione di Skill basate su scenari concreti, aggiungibili con un clic, che coprono casi d'uso comuni come la ricerca sugli investimenti e la formattazione dei documenti.

Tra le Skill consigliate più comuni:
- `sop-writer` — Trasforma i processi aziendali in documenti SOP (Standard Operating Procedure) completi, comprensivi di diagrammi di flusso dei processi, matrici RACI, passaggi operativi dettagliati e gestione delle eccezioni.
- `event-etf-study` — Partendo da un concetto o da un evento, individua le azioni correlate, costruisce un indice ETF ponderato per capitalizzazione di mercato, analizza le variazioni di valore durante la finestra dell'evento e genera dashboard HTML interattive. Si usa quando gli utenti chiedono informazioni su azioni tematiche, ETF tematici, analisi event-driven o studio di eventi.

**Da documento Office a Skill**: carica documenti per generare Skill e replicare facilmente temi e stili.

### (2) Skill open source

Scarica o installa Skill adatte dalle community open source, combinandole con i Local Agent (come Kimi Code) o i Cloud Agent (come Kimi Claw).

**Principali piattaforme di Skill Hub per l'AI**

| Piattaforma | URL | Descrizione |
|----------|-----|-------------|
| SkillsMP | https://skillsmp.com | Un marketplace di Skill per agenti AI che raccoglie pacchetti SKILL.md da GitHub, compatibile con Claude Code e OpenAI Codex CLI |
| SkillsLLM | https://skillsllm.com | Un marketplace open source di Skill per agenti AI con oltre 1.600 Skill verificate sul piano della sicurezza per Claude Code, Codex CLI e ChatGPT |
| LobeHub Skills | https://lobehub.com/skills | Sfoglia e distribuisci pacchetti SKILL.md compatibili con Claude Code, Codex CLI e ChatGPT |

### (3) Skill personalizzate

Skill personalizzate create da te per i tuoi flussi di lavoro e per attività di ambiti specifici, come ad esempio:
- Applicare guide di stile specifiche a documenti o presentazioni.
- Generare email o contenuti di comunicazione basati su modelli predefiniti.
- Organizzare i verbali delle riunioni in un formato specifico.
- Eseguire flussi di lavoro di analisi dati specifici.
