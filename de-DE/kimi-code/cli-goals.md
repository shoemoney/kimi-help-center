---
title: "Ziele"
slug: "cli-goals"
order: 7
extract_headings: false
preview: true
preview_content: "Mit Zielen sorgen Sie dafür, dass Kimi Code über mehrere Schritte hinweg auf ein definiertes Ergebnis hinarbeitet."
---

<SeoMeta
  title="Ziele - Kimi Hilfecenter"
  description="Nutzen Sie /goal, damit Kimi Code über mehrere Schritte hinweg auf ein definiertes Ergebnis hinarbeitet. Erfahren Sie, wann sich Ziele lohnen, wie Sie ihren Lebenszyklus steuern und wie Sie kommende Ziele in die Warteschlange stellen."
/>

# Ziele

Ziele sorgen dafür, dass Kimi Code über mehrere Schritte hinweg auf ein definiertes Ergebnis hinarbeitet. Anders als ein gewöhnlicher Prompt, der vorgibt, was als Nächstes zu tun ist, beschreibt ein Ziel, was wahr werden muss. Verwenden Sie `/goal`, wenn die Aufgabe eine klare Ziellinie hat, der nächste sinnvolle Schritt aber davon abhängt, was der Agent während der Arbeit herausfindet – etwa beim Beheben einer Reihe fehlschlagender Tests oder beim Aufspüren der Grundursache eines kaputten Builds.

## Ein Ziel starten

Schreiben Sie das Ziel hinter `/goal`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix bugs listed in the issue tracker.",
    },
  ]}
/>

Kimi Code speichert das Ziel, sendet es als nächste Benutzernachricht und startet den Zielmodus. Nach jedem Schritt prüft es, ob das Ziel abgeschlossen, blockiert, pausiert oder noch aktiv ist.

Ziele funktionieren am besten, wenn das Ziel sowohl die Ziellinie als auch den Nachweis benennt, der sie belegt:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix every bug labeled checkout-regression, add or update tests for each fix, and run the checkout test suite",
    },
  ]}
/>

Vermeiden Sie Ziele, die nur eine grobe Richtung vorgeben:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Find all bugs in this codebase.",
    },
  ]}
/>

Dieses Ziel sagt nicht, was als Erfolg gilt, was zu prüfen ist oder wann Schluss sein soll. Der Agent kann sofort blockieren oder weit länger arbeiten als erwartet.

### Wann Ziele sinnvoll sind

Nutzen Sie Ziele für Arbeit mit klarer Ziellinie und überprüfbarem Nachweis.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix every failing checkout test and run the checkout test suite successfully.",
    },
  ]}
/>

Kimi Code kann die Testausgabe prüfen, Dateien ändern, Checks erneut ausführen und entscheiden, wann das Ziel erreicht ist.

Nutzen Sie Ziele, wenn eine Aufgabe mehrere Schritte aus Untersuchung und Korrektur erfordern kann.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Find why the release build fails, fix the root cause, and verify the build passes.",
    },
  ]}
/>

Das Ziel beschreibt das Ergebnis, sodass der Agent reagieren kann, wenn der erste Hinweis nicht die Grundursache ist.

Nutzen Sie Ziele für aufeinanderfolgende Arbeit, die ohne weiteren Prompt fortgesetzt werden soll.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Update the feature implementation, add docs, run tests, and summarize the changed files.",
    },
  ]}
/>

Das ist hilfreich, wenn Sie bereits wissen, welche Checks oder Artefakte vorliegen müssen, bevor die Arbeit erledigt ist.

### Wann Ziele ungeeignet sind

Nutzen Sie Ziele nicht für weit gefasste Themen oder offene Diskussionen.

**Gegenbeispiel:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Greetings!",
    },
  ]}
/>

<Callout type="warning">
Bei Nicht-Zielen markiert der Agent das Ziel sofort als abgeschlossen.
</Callout>

Nutzen Sie Ziele nicht für Aufgaben, die bekanntermaßen unmöglich oder unlösbar sind.

**Gegenbeispiel:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Prove 1 + 1 = 3.",
    },
  ]}
/>

<Callout type="warning">
Der Agent markiert das Ziel als blockiert, wenn es unmöglich oder unlösbar erscheint.
</Callout>

Nutzen Sie Ziele nicht mit unklaren oder komplizierten Vorgaben.

**Gegenbeispiel:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Create a videogame in a single HTML file.",
    },
  ]}
/>

<Callout type="warning">
Der Agent kann solche Ziele zwar abschließen, aber auch nach langer Zeit unerwartete oder überraschende Ergebnisse liefern.
</Callout>

## Den Lebenszyklus steuern

Nutzen Sie dieselbe Befehlsoberfläche, um das aktuelle Ziel zu prüfen oder zu steuern:

| Befehl | Aktion |
| --- | --- |
| `/goal` oder `/goal status` | Das aktuelle Ziel und seinen Fortschritt anzeigen |
| `/goal pause` | Das aktive Ziel pausieren, ohne es zu löschen |
| `/goal resume` | Ein pausiertes oder blockiertes Ziel fortsetzen |
| `/goal cancel` | Das aktuelle Ziel entfernen |
| `/goal replace <objective>` | Das aktuelle Ziel durch ein neues ersetzen |

Ein Ziel kann auf drei Arten stoppen:

- **abgeschlossen**: Das Ziel ist erledigt, Kimi Code entfernt das Ziel und der Agent fasst zusammen, wie er die Arbeit abgeschlossen hat
- **pausiert**: Sie haben es pausiert, den Schritt unterbrochen, eine Sitzung mit einem aktiven Ziel fortgesetzt oder es ist ein Modell-, Anbieter- oder Laufzeitfehler aufgetreten
- **blockiert**: Kimi Code braucht eine Eingabe, kann das Ziel in der angegebenen Form nicht erreichen oder hat eine Budgetgrenze erreicht. Wenn der Agent ein Ziel blockiert, schreibt er eine kurze Nachricht mit der Begründung.

Schreiben Sie Abbruchbedingungen in das Ziel selbst. `/goal` hat kein eigenes Flag für ein Stopplimit.

## Kommende Ziele in die Warteschlange stellen

Manchmal schließen Agenten ein Ziel zu schnell ab. Nutzer sind mitunter enttäuscht, dass sie immer nur ein Ziel auf einmal vergeben können. Viele kennen die kommenden Ziele, die sie verfolgen möchten, bereits. Bisher mussten sie warten, bis das aktuelle Ziel abgeschlossen war, die TUI öffnen und das nächste Ziel manuell einreichen.

Verwenden Sie `/goal next`, wenn Sie weitere Arbeit bereit haben, aber das aktuelle Ziel nicht unterbrechen möchten:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next Update the release notes after the tests pass",
    },
  ]}
/>

Kommende Ziele sind für den Agenten nicht sichtbar, während das aktuelle Ziel läuft. Sobald das aktuelle Ziel abgeschlossen ist, startet Kimi Code das erste kommende Ziel auf dieselbe Weise, wie wenn Nutzer `/goal <objective>` eingeben.

Wenn kein Ziel aktiv ist, startet `/goal next <objective>` dieses Ziel sofort. Es verhält sich wie `/goal <objective>` und zeigt vor dem Start des Ziels eine Statusmeldung.

Verwalten Sie kommende Ziele interaktiv:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next manage",
    },
  ]}
/>

Im Verwaltungsmodus blättern Sie mit <kbd>↑</kbd> / <kbd>↓</kbd>, wählen mit <kbd>Space</kbd> ein Ziel zum Verschieben aus, ordnen es mit <kbd>↑</kbd> / <kbd>↓</kbd> neu an, bearbeiten mit <kbd>E</kbd>, löschen mit <kbd>D</kbd> und brechen mit <kbd>Esc</kbd> ab. Beim Bearbeiten fügen Sie mit <kbd>Shift-Enter</kbd> oder <kbd>Ctrl-J</kbd> eine neue Zeile ein und speichern mit <kbd>Enter</kbd>.

Ist das aktuelle Ziel pausiert, abgebrochen oder blockiert, startet Kimi Code das nächste kommende Ziel nicht. Wenn ein Ziel blockiert und kommende Ziele vorhanden sind, weist Sie die TUI darauf hin, dass diese auf den Abschluss warten.

## Den Zielmodus mit Bedacht einsetzen

Der Zielmodus eignet sich für Arbeit, die sich anhand von Dateien, Tests, Befehlsausgaben, erzeugten Artefakten oder einem klaren schriftlichen Bericht überprüfen lässt. Für eine einmalige Bearbeitung oder eine Frage, die nur eine einzige Antwort braucht, ist er weniger geeignet.

Im Berechtigungsmodus `manual` kann die Zielarbeit zur Freigabe eines Tool-Aufrufs pausieren. Für unbeaufsichtigte Arbeit wählen Sie einen Berechtigungsmodus, der zum Risiko des Repositorys und zu den Befehlen passt, die der Agent ausführen darf.

Im nicht-interaktiven Prompt-Modus wird nur das Anlegen von Zielen unterstützt:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"/goal Fix the failing checkout test\"",
    },
  ]}
/>

Der Prompt-Modus beendet sich mit Code `0`, wenn das Ziel abgeschlossen wird, mit `3`, wenn es blockiert, und mit `6`, wenn es pausiert. `/goal next` und die anderen Verwaltungsbefehle sind TUI-Steuerelemente.
