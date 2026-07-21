---
title: "Arbeitsmodi"
slug: "cli-work-modes"
order: 9
extract_headings: false
preview: true
preview_content: "So verwendest du den Planungsmodus und Thinking mode in der Kimi Code CLI – und wann sie sinnvoll sind."
---

<SeoMeta
  title="Arbeitsmodi in der Kimi Code CLI - Kimi-Hilfecenter"
  description="Erfahre, wie du den Planungsmodus und Thinking mode in der Kimi Code CLI verwendest – und wann sie sinnvoll sind."
/>

# Arbeitsmodi

## Planungsmodus

Der Planungsmodus ist ein schreibgeschützter Modus, in dem die KI zunächst einen Implementierungsplan erstellt, bevor sie mit dem Programmieren beginnt. So vermeidest du Aufwand in die falsche Richtung.

Im Planungsmodus kann die KI nur schreibgeschützte Tools (`Glob`, `Grep`, `ReadFile`) verwenden, um die Codebasis zu erkunden. Sie kann keine Dateien ändern und keine Befehle ausführen. Die KI schreibt den Plan in eine eigene Plandatei und legt ihn dir anschließend zur Genehmigung vor. Du kannst ihn genehmigen, ablehnen oder Kommentare zur Überarbeitung hinterlassen.

### Planungsmodus aufrufen

Du kannst den Planungsmodus auf vier Arten aufrufen:

- **Startoption**: Verwende `kimi --plan`, um eine neue Sitzung direkt im Planungsmodus zu starten
- **Tastenkürzel**: Drücke `Shift-Tab`, um den Planungsmodus ein- oder auszuschalten
- **Slash-Befehl**: Gib `/plan` oder `/plan on` ein
- **Von der KI initiiert**: Bei komplexen Aufgaben kann die KI über das Tool `EnterPlanMode` anfragen, in den Planungsmodus zu wechseln. Du kannst zustimmen oder ablehnen

Du kannst außerdem `default_plan_mode = true` in der Konfigurationsdatei setzen, damit jede neue Sitzung standardmäßig im Planungsmodus startet.

Nach dem Wechsel in den Planungsmodus ändert sich der Prompt zu `📋`, und in der unteren Statusleiste erscheint ein blauer `plan`-Indikator.

### Pläne prüfen und genehmigen

Wenn die KI den Plan fertiggestellt hat, reicht sie ihn über `ExitPlanMode` zur Genehmigung ein. Im Genehmigungsbereich wird der vollständige Plan angezeigt. Du kannst:

- **Ausführung genehmigen**: Wenn der Plan mehrere Implementierungswege enthält, listet die KI 2–3 beschriftete Optionen (z. B. „Plan A“ oder „Plan B (Empfohlen)“) zur Auswahl auf. Nachdem du eine Option ausgewählt hast, verlässt die KI den Planungsmodus und führt diesen Weg aus. Gibt es nur einen Weg, wird eine Schaltfläche **Genehmigen** angezeigt
- **Ablehnen**: Den Plan ablehnen und im Planungsmodus bleiben. Du kannst im Gespräch Feedback geben
- **Ablehnen und beenden**: Den Plan ablehnen und den Planungsmodus in einem Schritt verlassen
- **Überarbeiten**: Kommentare zur Überarbeitung eingeben. Die KI aktualisiert den Plan entsprechend und reicht ihn erneut ein

Drücke `Ctrl-E`, um den vollständigen Plan im Vollbild-Pager anzuzeigen.

### Planungsmodus verwalten

Verwende den Befehl `/plan`, um den Planungsmodus zu verwalten:

- `/plan`: Planungsmodus ein- oder ausschalten
- `/plan on`: Planungsmodus einschalten
- `/plan off`: Planungsmodus ausschalten
- `/plan view`: Aktuellen Plan anzeigen
- `/plan clear`: Aktuelle Plandatei löschen

## Thinking mode

Thinking mode ermöglicht der KI, vor einer Antwort gründlicher nachzudenken. Er eignet sich daher besonders für komplexe Probleme.

Mit dem Befehl `/model` kannst du Modelle und Thinking mode wechseln. Nachdem du ein Modell ausgewählt hast, fragt das System, ob Thinking mode aktiviert werden soll, sofern das Modell ihn unterstützt. Du kannst ihn beim Start auch mit der Option `--thinking` aktivieren:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --thinking",
    },
  ]}
/>

> Tipp: Thinking mode muss vom aktuellen Modell unterstützt werden. Einige Modelle, etwa `kimi-k2-thinking-turbo`, verwenden Thinking mode immer und können ihn nicht deaktivieren.
