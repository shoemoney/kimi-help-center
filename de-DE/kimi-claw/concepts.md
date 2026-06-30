---
title: "Grundlagen & Terminal"
slug: "concepts"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Grundlagen \u0026 Terminal - Kimi Hilfecenter"
  description="Image: 截图30"
/>

# Grundlagen & Terminal

## Zentrale Konzepte

| Konzept | Beschreibung |
|---------|-------------|
| **Memory** | Das Langzeitgedächtnis von Kimi Claw. Speichert Ihre Vorlieben, Gewohnheiten und wichtige Informationen über Gespräche hinweg. |
| **Skills** | Installierbare Fähigkeitsmodule aus der ClawHub-Bibliothek, die Kimi Claw mit fachspezifischem Wissen ausstatten. |
| **HEARTBEAT** | Geplante Hintergrundaufgaben, die zeitgesteuert ablaufen – ideal für wiederkehrende Erinnerungen, Datenabrufe und Zusammenfassungen. |
| **Identity** | Die Rollendefinition von Kimi Claw: Name, Beruf, Persona. Vollständig von Ihnen anpassbar. |
| **Soul** | Grundlegende Charaktereigenschaften und Verhaltensprinzipien, die den Interaktionsstil von Kimi Claw prägen. |
| **Tools** | Die Reihe von Fähigkeiten, die Kimi Claw nutzen kann – Web Search, Dateiverarbeitung, Codeausführung und mehr. |
| **User** | Die Beziehungsdefinition zwischen Ihnen und Kimi Claw, die Interaktionsmuster und Informationsaustausch regelt. |

## Terminal

<Frames
  src="./images/concepts/screenshot-30.png"
  alt="screenshot 30"
/>

Im Web können Sie über **Einstellungen → Terminal** eine Befehlszeilenschnittstelle öffnen und Kimi Claw direkt per Befehl steuern.

Alternativ teilen Sie Kimi Claw einfach in normaler Sprache mit, welchen Befehl es ausführen soll – es erledigt das für Sie.

> Hinweis: Das Terminal und die Plugins teilen sich denselben Verbindungskanal. Ein Neustart des OpenClaw-Gateways trennt die Terminalverbindung.

## Befehlsreferenz

### System

| Befehl | Beschreibung |
|---------|-------------|
| `/help` | Hilfeinformationen anzeigen |
| `/status` | Aktuellen Systemstatus anzeigen |
| `/ping` | Prüfen, ob die Verbindung aktiv ist |
| `/cron` | Geplante Aufgaben verwalten |
| `/config` | Konfiguration anzeigen oder bearbeiten |
| `/new` | Ein neues Gespräch beginnen (löscht den aktuellen Kontext) |
| `/reset` | Kimi Claw zurücksetzen |
| `/compact` | Den aktuellen Gesprächskontext komprimieren |
| `/stop` | Die aktuell laufende Aufgabe stoppen |

### Skills

| Befehl | Beschreibung |
|---------|-------------|
| `/skills` | Skills durchsuchen, installieren und verwalten |

### Geplante Aufgaben

| Befehl | Beschreibung |
|---------|-------------|
| `/cron` | Aufgabenplan anzeigen und verwalten |

### Memory

| Befehl | Beschreibung |
|---------|-------------|
| `/memory` | Langzeitgedächtnis anzeigen und verwalten |

### Konfiguration & Fehlersuche

| Befehl | Beschreibung |
|---------|-------------|
| `/config` | Systemkonfiguration anzeigen oder bearbeiten |
| `/logs` | Laufzeitprotokolle anzeigen |
| `/debug` | Debugmodus für detaillierte Diagnosen aktivieren |
