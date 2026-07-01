---
title: "Interaktion & Eingabe"
slug: "cli-interaction"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Interaktion & Eingabe - Kimi Hilfecenter"
  description="Die Kimi Code CLI bietet verschiedene Interaktionsmethoden, mit denen Sie effizient mit der KI zusammenarbeiten."
/>

# Interaktion & Eingabe

Die Kimi Code CLI bietet verschiedene Interaktionsmethoden, mit denen Sie effizient mit der KI zusammenarbeiten.

## Thinking mode

Der Thinking Mode ermöglicht es der KI, vor dem Antworten tiefer nachzudenken – ideal für komplexe Probleme.

- Verwenden Sie den Befehl `/model`, um Modelle zu wechseln und den Thinking Mode umzuschalten.
- Sie können den Thinking Mode auch beim Start mit dem Flag `--thinking` aktivieren.

## Mehrzeilige Eingabe

Drücken Sie **Ctrl-J**, um einen Zeilenumbruch für eine mehrzeilige Eingabe einzufügen. Das ist praktisch für längere Prompts oder das Einfügen mehrzeiliger Codeausschnitte.

## Aus der Zwischenablage einfügen

Drücken Sie **Ctrl-V**, um Inhalte aus der Zwischenablage einzufügen – unterstützt werden sowohl Text als auch Bilder. Beim Einfügen von Bildern kann die KI den Bildinhalt direkt interpretieren (z. B. Screenshots, Design-Mockups, Fehler-Screenshots).

## Slash-Befehle

Befehle, die mit `/` beginnen, dienen zur Steuerung von Sitzungen, Konfiguration und Debugging. Häufige Befehle sind:

| Befehl | Beschreibung |
| --- | --- |
| `/help` | Hilfeinformationen anzeigen |
| `/login` | Anmelden und autorisieren |
| `/model` | Modelle und Thinking Mode wechseln |
| `/sessions` | Sitzungen auflisten und wechseln |
| `/clear` | Aktuellen Kontext löschen |
| `/compact` | Kontext komprimieren |
| `/init` | AGENTS.md generieren |
| `/exit` | CLI beenden |

Wenn Sie `/` in das Eingabefeld eingeben, wird automatisch eine Liste der verfügbaren Befehle angezeigt.

## @ Pfadvervollständigung

Verwenden Sie das Symbol `@` in Ihrer Eingabe, um auf Datei- oder Verzeichnispfade zu verweisen – das System vervollständigt automatisch:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Check @src/utils/auth.ts for any security vulnerabilities",
    },
  ]}
/>

Die KI liest den Inhalt der referenzierten Datei automatisch als Kontext ein.

## Strukturierte Fragen und Antworten

In bestimmten Situationen bietet Ihnen die KI strukturierte Optionen zur Eingabe an. Wählen Sie mit den **Pfeiltasten** eine Option aus und bestätigen Sie mit **Enter**.

## Bestätigung der Freigabe

Wenn die KI Dateiänderungen, Shell-Befehle oder andere Vorgänge ausführen muss, fragt sie nach Ihrer Bestätigung. Sie haben folgende Möglichkeiten:

| Option | Beschreibung |
| --- | --- |
| **Allow** | Diesen Vorgang erlauben |
| **Allow for Session** | Ähnliche Vorgänge für den Rest der aktuellen Sitzung ohne weitere Nachfragen erlauben |
| **Deny** | Diesen Vorgang ablehnen |

### YOLO mode

Wenn Sie den Vorgängen der KI vertrauen, können Sie den YOLO Mode nutzen, um alle Bestätigungen zu überspringen:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --yolo",
    },
  ]}
/>

> Im YOLO Mode führt die KI alle Vorgänge automatisch aus – mit Vorsicht zu verwenden. Empfohlen nur in kontrollierten Entwicklungsumgebungen.
