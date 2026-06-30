---
title: "Kimi Code – Mitgliedschaftsleitfaden"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Code – Mitgliedschaftsleitfaden - Kimi Hilfecenter"
  description="Kimi Code ist ein speziell auf Entwickler zugeschnittener Vorteil im Rahmen der Kimi-Mitgliedschaft und bietet leistungsstarke KI-gestützte Programmierfunktionen. Sie können diesen Vorteil über..."
/>

# Kimi Code – Mitgliedschaftsleitfaden

<Callout type="info">
Kimi Code ist ein speziell auf Entwickler zugeschnittener Vorteil im Rahmen der Kimi-Mitgliedschaft und bietet leistungsstarke KI-gestützte Programmierfunktionen. Sie können diesen Vorteil über Kimi Code CLI, Claude Code, Roo Code und weitere unterstützte Tools nutzen.
</Callout>

## Wichtige Vorteile

| Vorteil | Beschreibung |
|-----------|-------------|
| **Breite Kompatibilität** | Funktioniert mit Kimi Code CLI, Claude Code, Roo Code und weiteren gängigen Coding-Agenten |
| **Blitzschnelle Antworten** | Generierungsgeschwindigkeiten von bis zu 100 token/s, die Ihre Programmiereffizienz erheblich steigern |
| **Hochfrequente Parallelität** | Etwa 300–1.200 Anfragen pro 5-Stunden-Fenster (je nach Tarif), mit bis zu 30 gleichzeitigen Streams |

## Schnellstart

Wählen Sie den Weg, der zu Ihrer Situation passt:

- **Neue Nutzer**: Gehen Sie zu [kimi.com/code](https://kimi.com/code), melden Sie sich an und abonnieren Sie einen Coding-Plan.
- **Bestehende Abonnenten**: Öffnen Sie die Konsole, um Ihre API-Keys zu verwalten und mit Kimi Code loszulegen.

## API-Key erhalten

1. Melden Sie sich bei der [Kimi-Konsole](https://kimi.com/code) an.
2. Wechseln Sie zur Seite **API Keys**.
3. Klicken Sie auf **Neuen API-Key erstellen**.
4. Kopieren Sie Ihren API-Key und bewahren Sie ihn sicher auf (er wird nur einmal bei der Erstellung angezeigt).

<Callout type="warning">
Geben Sie Ihren API-Key nicht an andere weiter und committen Sie ihn nicht in öffentliche Code-Repositories.
</Callout>

## Anmeldung mit einem Klick

In Kimi Code CLI können Sie den Befehl `/login` für eine schnelle Autorisierung nutzen, ohne einen API-Key manuell kopieren zu müssen:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

Das System schließt die Geräteautorisierung und die Kontoverknüpfung automatisch ab – der gesamte Vorgang dauert nur wenige Sekunden.

## Geräteverwaltung

- Jedes Konto kann auf mehreren Geräten verwendet werden.
- Geräteautorisierungen, die **30 Tage lang inaktiv** waren, laufen automatisch ab; Sie müssen `/login` dann erneut ausführen, um sich neu zu autorisieren.
- In der Konsole können Sie autorisierte Geräte einsehen und verwalten.
