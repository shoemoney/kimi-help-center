---
title: "Sitzungen & Kontext"
slug: "cli-sessions"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Sitzungen & Kontext - Kimi Hilfecenter"
  description="Die Kimi Code CLI unterstützt die Verwaltung mehrerer Sitzungen und die dauerhafte Speicherung des Kontexts, sodass Sie Ihre Arbeit jederzeit pausieren und fortsetzen können."
/>

# Sitzungen & Kontext

Die Kimi Code CLI unterstützt die Verwaltung mehrerer Sitzungen und die dauerhafte Speicherung des Kontexts, sodass Sie Ihre Arbeit jederzeit pausieren und fortsetzen können.

## Sitzung fortsetzen

Sie können eine frühere Sitzung auf verschiedene Weise fortsetzen:

### Letzte Sitzung fortsetzen

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>

Verwenden Sie das Flag `--continue` (oder `-c`), um die letzte Unterhaltung fortzusetzen.
### Eine Sitzungs-ID angeben

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --session <session-id>",
    },
  ]}
/>

Verwenden Sie das Flag `--session`, um eine bestimmte Sitzung wiederherzustellen.

### Durchsuchen und wechseln

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/sessions",
    },
  ]}
/>

Führen Sie `/sessions` (oder `/resume`) aus, um die Sitzungsliste anzuzeigen und eine Sitzung zur Wiederherstellung auszuwählen.
## Wiedergabe beim Start

Beim Fortsetzen einer Sitzung gibt die Kimi Code CLI den Verlauf der Unterhaltung automatisch erneut wieder, damit Sie sich den vorherigen Kontext und Fortschritt rasch wieder vergegenwärtigen können.

## Dauerhafte Speicherung des Status

Der folgende Status wird automatisch gespeichert und über Sitzungen hinweg wiederhergestellt:

- **Genehmigungsentscheidungen**: Entscheidungen wie „Für die Sitzung erlauben“ werden gespeichert.
- **Dynamische Subagenten**: Während einer Sitzung erstellte Subagenten-Konfigurationen bleiben erhalten.
- **Zusätzliche Verzeichnisse**: Über Befehle hinzugefügte zusätzliche Arbeitsverzeichnisse bleiben ebenfalls erhalten.

Das bedeutet, dass Sie Ihre bisherige Arbeit nach dem Fortsetzen einer Sitzung nahtlos weiterführen können.

## Leeren & verdichten

Die Kimi Code CLI verdichtet den Kontext bei Bedarf automatisch, damit die Unterhaltung fortgeführt werden kann. Sie können den Kontext aber auch manuell mit Slash-Befehlen verwalten:

### Kontext leeren

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/clear",
    },
  ]}
/>

Geben Sie `/clear` (oder `/reset`) ein, um den gesamten Kontext der aktuellen Sitzung zu leeren und eine neue Unterhaltung zu beginnen:

### Kontext verdichten

Geben Sie `/compact` ein, um den Kontext zu verdichten – wichtige Informationen bleiben erhalten, während der Token-Verbrauch reduziert wird:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact",
    },
  ]}
/>

Sie können beim Verdichten auch Anweisungen mitgeben, um der KI mitzuteilen, welche Informationen Vorrang haben sollen:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact Keep the discussion about database migrations",
    },
  ]}
/>

### Kontextstatus

Die Statusleiste am unteren Rand der CLI zeigt die aktuelle Kontextauslastung in Echtzeit an und hilft Ihnen, den Kontextverbrauch im Blick zu behalten. Bei hoher Auslastung verwenden Sie `/compact`, um den Kontext zu verdichten und den Verlust wichtiger Informationen zu vermeiden.
