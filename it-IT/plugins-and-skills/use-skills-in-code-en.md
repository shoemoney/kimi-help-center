---
title: "Usare le Skill in Kimi Code"
slug: "use-skills-in-code"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Usare le Skill in Kimi Code - Centro assistenza Kimi"
  description="Scopri come creare e richiamare le Skill nella CLI di Kimi Code per standardizzare le convenzioni di programmazione del team e automatizzare i flussi di lavoro di sviluppo."
  ogType="article"
/>

# Usare le Skill in Kimi Code

Kimi Code è un assistente di programmazione basato sull'IA pensato appositamente per gli sviluppatori: si esegue direttamente nel terminale o nell'editor per scrivere codice, correggere bug e generare documentazione. Kimi Code consente di fornire indicazioni basate sulla conoscenza tramite file `SKILL.md`. Dopo averli letti, l'IA segue gli standard definiti al loro interno. Ideale per definire stili di codice, flussi di lavoro e best practice.

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="Richiamare le skill con il comando slash"
/>

## Richiamare le Skill

La CLI di Kimi Code consente di richiamare le Skill usando comandi slash:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

Ad esempio, digitando `/skill:git-commits` Kimi Code leggerà il contenuto del corrispondente `SKILL.md` e lo invierà come istruzione all'Agent.

Puoi anche aggiungere descrizioni ulteriori dopo il comando slash, che verranno accodate all'istruzione della Skill:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix user login issue",
    },
  ]}
/>

Nelle conversazioni normali non è necessario richiamarle manualmente: l'Agent deciderà automaticamente, in base al contesto, se leggere il contenuto della Skill.

## Creare la tua prima Skill

Creare una Skill richiede solo due passaggi: crea una sottocartella nella directory delle Skill, poi crea al suo interno un file `SKILL.md`.

Posizione di archiviazione consigliata (valida per tutti i progetti):

<CodePreview
  files={[
    {
      name: "Directory Structure",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md` usa il Frontmatter YAML per definire i metadati, seguito da Markdown per le specifiche principali:

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: My project code style standards\n---\n\n## Code Style\n\n- Use 4-space indentation\n- Use camelCase for variable names\n- Use snake_case for function names\n- Every function requires a docstring\n- Single lines not exceeding 100 characters",
    },
  ]}
/>

Sia `name` che `description` nel Frontmatter sono campi facoltativi. Se omessi, viene utilizzato come predefinito il nome della directory.

### Esempio

Il tuo team richiede che i messaggi di commit seguano il formato Conventional Commits, ma doverlo spiegare ogni volta è noioso. Scrivendolo come Skill, in futuro basterà un solo comando per richiamarlo.

**Passaggio 1: creare il file della Skill**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Git commit message standards using Conventional Commits format\n---\n\n## Git Commit Standards\n\nUse Conventional Commits format: type(scope): description\n\nAllowed types: feat, fix, docs, style, refactor, test, chore\n\nExamples:\n- feat(auth): Add OAuth login support\n- fix(api): Fix user query returning empty value issue",
    },
  ]}
/>

**Passaggio 2: dopo aver completato le modifiche al codice, richiama la Skill**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fixed login page layout shift in Safari",
    },
  ]}
/>

Kimi Code leggerà i tuoi standard, li combinerà con la descrizione dell'attività e produrrà direttamente un messaggio di commit formattato correttamente, senza che tu debba ripetere alcun requisito di formato.

## Flow Skill: definire flussi di lavoro in più passaggi

Mentre le Skill normali forniscono standard statici, le **Flow Skill** possono definire processi automatizzati composti da più passaggi.

Imposta `type: flow` nel Frontmatter e incorpora un diagramma di flusso in formato Mermaid o D2 per creare una Flow Skill.

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Code review workflow\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

Eseguila con il comando `/flow:<name>`. L'Agent partirà dal nodo `BEGIN` e completerà automaticamente ogni passaggio in sequenza fino a raggiungere `END`.

## Meccanismo di caricamento delle Skill

La CLI di Kimi Code cerca e carica le Skill secondo la seguente priorità (vince la prima corrispondenza trovata):

1. **Skill integrate**: installate con il pacchetto software, forniscono funzionalità di base.
2. **Skill a livello utente**: archiviate nella home directory, applicabili a tutti i progetti.
3. **Skill a livello di progetto**: archiviate nella directory del progetto, applicabili solo a quel progetto.

Puoi anche specificare manualmente directory aggiuntive di Skill usando il parametro `--skills-dir`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --skills-dir /path/to/my-skills",
    },
  ]}
/>

<Callout type="info">
La CLI di Kimi Code include due utili Skill integrate: `kimi-cli-help` (risponde alle domande sull'uso della CLI) e `skill-creator` (ti guida nella creazione di nuove Skill). Digita `/skill:skill-creator` per iniziare.
</Callout>

Per le opzioni di configurazione complete e la spiegazione dei parametri, consulta la [documentazione delle Skill della CLI di Kimi Code](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html).
