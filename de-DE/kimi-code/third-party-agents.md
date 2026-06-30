---
title: "Verwendung mit Coding-Agents von Drittanbietern"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Verwendung mit Coding-Agents von Drittanbietern - Kimi Hilfecenter"
  description="Die Kimi-Code-Vorteile lassen sich mit Claude Code und Roo Code nutzen, sodass Sie die KI-Fähigkeiten von Kimi direkt in Ihren bevorzugten Coding-Tools einsetzen können."
/>

# Verwendung mit Coding-Agents von Drittanbietern

Die Kimi-Code-Vorteile lassen sich mit Claude Code und Roo Code nutzen, sodass Sie die KI-Fähigkeiten von Kimi direkt in Ihren bevorzugten Coding-Tools einsetzen können.

## Voraussetzungen

- Eine aktive Kimi-Mitgliedschaft mit aktivierten Kimi-Code-Vorteilen.
- Ein API Key (in der [Kimi Console](https://www.kimi.com/code) erstellt).

## Verwendung mit Claude Code

[Claude Code](https://www.docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) ist ein Coding-Assistent für die Kommandozeile von Anthropic.

### Konfigurationsschritte

1. Legen Sie die Umgebungsvariablen fest:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. Starten Sie Claude Code mit dem Modell `kimi-k2.5`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-k2.5",
    },
  ]}
/>

> In Claude Code können Sie mit **Tab** zum Modell Kimi K2 Thinking wechseln.

> Sollte ein durch `tool_search`-Aufrufe verursachter 400-Fehler auftreten, können Sie ihn vorübergehend beheben, indem Sie die Umgebungsvariable `ENABLE_TOOL_SEARCH=false` setzen.

## Verwendung mit Roo Code

[Roo Code](https://www.github.com/RooCodeInc/Roo-Code) ist eine KI-Coding-Erweiterung für VS Code.

### Roo Code installieren

1. Suchen Sie im VS Code Extensions Marketplace nach **Roo Code** und installieren Sie es.
2. Nach der Installation erscheint das Roo-Code-Symbol in der Aktivitätsleiste; falls nicht, starten Sie VS Code neu.

### Das Kimi-Code-Modell konfigurieren

1. Öffnen Sie das Roo-Code-Panel und wechseln Sie zur Seite **Settings**.
2. Wählen Sie im Bereich **Providers** die Option **OpenAI Compatible** und tragen Sie Folgendes ein:

   | Einstellung | Wert |
   | --- | --- |
   | Entrypoint | `https://api.kimi.com/coding/v1` |
   | API Key | Ihr API Key |
   | Model | `kimi-k2.5` |

3. Speichern Sie die Konfiguration – und schon kann es losgehen.

## Wichtige Hinweise

- Die Kimi-Code-Vorteile werden ausschließlich in **Kimi Code CLI**, **Claude Code** und **Roo Code** unterstützt.
- Die Verwendung Ihres API Keys mit nicht autorisierten Plattformen oder Tools kann als Verstoß gewertet werden und zu eingeschränktem Zugriff führen.
- Bei Fragen werfen Sie einen Blick auf die Seite [Vorteile](/kimi-code/benefits) oder wenden Sie sich an den Kimi-Support.
