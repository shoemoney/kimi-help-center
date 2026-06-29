---
title: "Skills in Kimi Code nutzen"
slug: "use-skills-in-code"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Skills in Kimi Code nutzen - Kimi Hilfecenter"
  description="Erfahren Sie, wie Sie Skills in der Kimi Code CLI erstellen und aufrufen, um teaminterne Coding-Konventionen zu vereinheitlichen und Entwicklungs-Workflows zu automatisieren."
  ogType="article"
/>

# Skills in Kimi Code nutzen

Kimi Code ist ein KI-Programmierassistent, der speziell für Entwickler konzipiert wurde. Er läuft direkt im Terminal oder Editor und hilft beim Schreiben von Code, beim Beheben von Fehlern und beim Erstellen von Dokumentation. Kimi Code kann wissensbasierte Anleitungen über `SKILL.md`-Dateien bereitstellen. Nachdem die KI sie gelesen hat, befolgt sie die darin festgelegten Standards. Geeignet zum Festlegen von Codestilen, Workflows und Best Practices.

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="Skills per Slash-Befehl aufrufen"
/>

## Skills aufrufen

In der Kimi Code CLI können Sie Skills über Slash-Befehle aufrufen:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

Wenn Sie beispielsweise `/skill:git-commits` eingeben, liest Kimi Code den Inhalt der entsprechenden `SKILL.md` und sendet ihn als Anweisung an den Agent.

Sie können dem Slash-Befehl auch zusätzliche Beschreibungen anhängen, die am Ende der Skill-Anweisung ergänzt werden:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix user login issue",
    },
  ]}
/>

Bei normalen Unterhaltungen ist ein manueller Aufruf nicht nötig – der Agent entscheidet anhand des Kontexts automatisch, ob er Skill-Inhalte lesen soll.

## Ihren ersten Skill erstellen

Einen Skill zu erstellen, erfordert nur zwei Schritte: Legen Sie ein Unterverzeichnis im Skills-Verzeichnis an und erstellen Sie darin eine `SKILL.md`-Datei.

Empfohlener Speicherort (gilt für alle Projekte):

<CodePreview
  files={[
    {
      name: "Directory Structure",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md` definiert Metadaten über YAML-Frontmatter, gefolgt von Markdown für die eigentlichen Vorgaben:

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: My project code style standards\n---\n\n## Code Style\n\n- Use 4-space indentation\n- Use camelCase for variable names\n- Use snake_case for function names\n- Every function requires a docstring\n- Single lines not exceeding 100 characters",
    },
  ]}
/>

Sowohl `name` als auch `description` im Frontmatter sind optionale Felder. Werden sie weggelassen, wird standardmäßig der Verzeichnisname verwendet.

### Beispiel

Ihr Team verlangt, dass Commit-Nachrichten dem Conventional-Commits-Format folgen, aber dies immer wieder zu erklären, ist mühsam. Indem Sie es als Skill hinterlegen, genügt künftig ein einziger Befehl, um es aufzurufen.

**Schritt 1: Skill-Datei erstellen**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Git commit message standards using Conventional Commits format\n---\n\n## Git Commit Standards\n\nUse Conventional Commits format: type(scope): description\n\nAllowed types: feat, fix, docs, style, refactor, test, chore\n\nExamples:\n- feat(auth): Add OAuth login support\n- fix(api): Fix user query returning empty value issue",
    },
  ]}
/>

**Schritt 2: Nach Abschluss der Codeänderungen den Skill aufrufen**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fixed login page layout shift in Safari",
    },
  ]}
/>

Kimi Code liest Ihre Vorgaben, kombiniert sie mit der Aufgabenbeschreibung und gibt direkt eine korrekt formatierte Commit-Nachricht aus, ohne dass Sie die Formatanforderungen wiederholen müssen.

## Flow Skills: Mehrstufige Workflows definieren

Während normale Skills statische Vorgaben liefern, können **Flow Skills** automatisierte, mehrstufige Abläufe definieren.

Setzen Sie `type: flow` im Frontmatter und betten Sie ein Flussdiagramm im Mermaid- oder D2-Format ein, um einen Flow Skill zu erstellen.

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Code review workflow\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

Führen Sie ihn mit dem Befehl `/flow:<name>` aus. Der Agent beginnt beim `BEGIN`-Knoten und durchläuft automatisch jeden Schritt der Reihe nach, bis er `END` erreicht.

## So werden Skills geladen

Die Kimi Code CLI sucht und lädt Skills nach folgender Priorität (die erste Übereinstimmung hat Vorrang):

1. **Integrierte Skills**: werden mit dem Softwarepaket installiert und stellen grundlegende Funktionen bereit.
2. **Skills auf Benutzerebene**: werden im Home-Verzeichnis gespeichert und gelten für alle Projekte.
3. **Skills auf Projektebene**: werden im Projektverzeichnis gespeichert und gelten nur für dieses Projekt.

Mit dem Parameter `--skills-dir` können Sie auch manuell zusätzliche Skills-Verzeichnisse angeben:

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
Die Kimi Code CLI enthält zwei nützliche integrierte Skills: `kimi-cli-help` (beantwortet Fragen zur CLI-Nutzung) und `skill-creator` (führt Sie durch die Erstellung neuer Skills). Geben Sie `/skill:skill-creator` ein, um loszulegen.
</Callout>

Vollständige Konfigurationsoptionen und Parametererläuterungen finden Sie in der [Kimi Code CLI Skills-Dokumentation](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html).
