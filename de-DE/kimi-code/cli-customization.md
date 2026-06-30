---
title: "Anpassung & Referenz"
slug: "cli-customization"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Anpassung \u0026 Referenz - Kimi Hilfecenter"
  description="Die Kimi Code CLI bietet umfangreiche Anpassungsmöglichkeiten, mit denen Sie das Verhalten und den Arbeitsablauf der KI an Ihre Bedürfnisse anpassen können."
/>

# Anpassung & Referenz

Die Kimi Code CLI bietet umfangreiche Anpassungsmöglichkeiten, mit denen Sie das Verhalten und den Arbeitsablauf der KI an Ihre Bedürfnisse anpassen können.

## Konfigurationsdatei

Die Kimi Code CLI verwendet `~/.kimi/config.toml` als globale Konfigurationsdatei und unterstützt sowohl das TOML- als auch das JSON-Format. Folgendes lässt sich konfigurieren:

- **API-Anbieter und Modelle**: Richten Sie verschiedene Modellanbieter, API-Endpunkte und Schlüssel ein.
- **Standardmodell**: Legen Sie das standardmäßig zu verwendende Modell fest.
- **Laufzeitparameter**: Passen Sie Timeout, concurrency, Ausgabeformat und weitere Laufzeiteinstellungen an.

> Mit dem Befehl `/config` öffnen Sie die Konfigurationsdatei schnell zum Bearbeiten.

## Projektkonfiguration über AGENTS.md

Legen Sie eine `AGENTS.md`-Datei im Stammverzeichnis Ihres Projekts ab, um der KI Kontext auf Projektebene bereitzustellen:

- **Projekthintergrund**: Beschreiben Sie Funktionalität, Architektur und Tech-Stack des Projekts.
- **Build-Schritte**: Wie Abhängigkeiten installiert, das Projekt erstellt und Tests ausgeführt werden.
- **Code-Konventionen**: Namenskonventionen, Regeln zur Verzeichnisstruktur, Vorlieben beim Code-Stil.
- **Besondere Hinweise**: Sicherheitsbeschränkungen, Leistungsanforderungen und andere wichtige Aspekte.

Verwenden Sie den Befehl `/init`, damit die KI Ihr Projekt automatisch durchsucht und eine erste `AGENTS.md` erstellt. Sie können die Datei auch manuell bearbeiten, um projektspezifische Informationen hinzuzufügen. `AGENTS.md`-Dateien können in jedem beliebigen Unterverzeichnis abgelegt werden – die KI lädt die relevanten Konfigurationen automatisch.

## Benutzerdefinierter System-Prompt

Sie können den System-Prompt der KI auf verschiedene Weise anpassen:

- **Globaler System-Prompt**: Schreiben Sie ihn in `~/.kimi/AGENTS.md` – er gilt für alle Projekte.
- **System-Prompt auf Projektebene**: Schreiben Sie ihn in die `AGENTS.md` im Stammverzeichnis des Projekts – er gilt nur für das aktuelle Projekt.
- **Startparameter**: Geben Sie ihn beim Start mit dem Flag `--system-prompt` an.

Die Konfiguration auf Projektebene hat Vorrang vor der globalen Konfiguration, und der Startparameter hat die höchste Priorität.

## MCP-Integration

Die Kimi Code CLI unterstützt das Model Context Protocol (MCP), das Verbindungen zu externen Tools und Datenquellen ermöglicht, um die Fähigkeiten der KI zu erweitern:

- **Konfiguration des MCP-Servers**: Fügen Sie die Adressen der MCP-Server in der Konfigurationsdatei hinzu, damit die KI externe Tools aufrufen kann.
- **Integrierte MCP-Unterstützung**: Einige häufig verwendete MCP-Tools sind bereits integriert und erfordern keine zusätzliche Konfiguration.
- **Benutzerdefinierte MCP-Server**: Sie können eigene MCP-Server entwickeln, um domänenspezifische Fähigkeiten bereitzustellen.

Die MCP-Konfiguration kann in `~/.kimi/config.toml` oder in Konfigurationsdateien auf Projektebene abgelegt werden.

## Umgebungsvariablen

Die Kimi Code CLI lässt sich über Umgebungsvariablen konfigurieren – praktisch für CI/CD-Pipelines und Skripte:

| Umgebungsvariable | Beschreibung |
| --- | --- |
| `KIMI_API_KEY` | API-Schlüssel |
| `KIMI_BASE_URL` | Benutzerdefinierter API-Endpunkt |
| `KIMI_MODEL` | Name des Standardmodells |
| `KIMI_MAX_TOKENS` | Maximale Anzahl der Ausgabe-Token |

Umgebungsvariablen haben Vorrang vor den Einstellungen in der Konfigurationsdatei.

## Weitere Referenzen

- **Referenz der Slash-Befehle**: Mit `/help` zeigen Sie alle verfügbaren Befehle an.
- **Referenz der CLI-Parameter**: Führen Sie `kimi --help` aus, um alle Startparameter anzuzeigen.
- **Offizielle Dokumentation**: Besuchen Sie die [Kimi Code Docs](https://www.kimi.com/code/docs/en/) für die aktuellste vollständige Dokumentation.
