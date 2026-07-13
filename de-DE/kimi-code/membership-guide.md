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
| **Standard- / HighSpeed-Stufe** | Dasselbe Modell in zwei Geschwindigkeiten – HighSpeed liefert etwa die 5–6-fache Ausgabegeschwindigkeit von Standard und lässt sich bei Bedarf umschalten |
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

## Modelle wechseln

**Das HighSpeed-Modell ist jetzt verfügbar.** Kimi Code bietet zwei Stufen – **Standard** und **HighSpeed** – die auf demselben Modell mit identischer Coding-Fähigkeit basieren und sich dieselbe Base URL, denselben API Key und dieselben Mitgliedschaftsvorteile teilen. HighSpeed liefert etwa die **5–6-fache Ausgabegeschwindigkeit** von Standard; wer sofortige Antworten und schnelle Iteration möchte, erhält mit einem Klick ein flüssigeres Coding-Erlebnis. Die wichtigsten Unterschiede:

| Merkmal | Standard | HighSpeed |
| --- | --- | --- |
| Modell-ID | `kimi-for-coding` | `kimi-for-coding-highspeed` |
| Ausgabegeschwindigkeit | Basiswert | ca. 5–6× schneller als Standard |
| Credit-Verbrauch | Basiswert | ca. 3× so hoch wie Standard |
| Coding-Fähigkeit | Vollständig | Identisch mit Standard |
| Am besten für | Alltägliche Coding-Aufgaben | Sofortige Antworten, schnelle Iteration |
| Mitgliedschaft | Für alle Kimi-Code-Mitglieder verfügbar | Erfordert einen [Allegretto](https://www.kimi.com/membership/pricing)-Tarif oder höher |

Wege zum Wechseln des Zielmodells:

- **Offizielle Kimi Code CLI**: Geben Sie `/model` in einer Sitzung ein, um direkt zwischen Standard und HighSpeed zu wechseln – ohne Konfigurationsänderung.
- **Kimi Code für VS Code**: Wählen Sie das Zielmodell im Dropdown-Menü der Eingabeleiste; falls HighSpeed noch nicht erscheint, starten Sie VS Code neu oder installieren Sie die Erweiterung erneut.
- **Drittanbieter-Tools**: Setzen Sie die Model-ID des Tools auf das Zielmodell; alle anderen Einstellungen bleiben gleich. Wo Sie sie im jeweiligen Tool finden, steht unter [Verwendung in Drittanbieter-Coding-Agenten](/kimi-code/third-party-agents).

<Callout type="info">
- **Stabile Modell-IDs**: Beide IDs sind stabile Bezeichner; das Backend aktualisiert das zugeordnete Modell bei Verbesserungen, ohne Änderung der Client-Konfiguration.
- **Genau eingeben**: Die HighSpeed-ID muss `kimi-for-coding-highspeed` lauten. Bei Tippfehler oder anderem Wert fällt die Anfrage stillschweigend auf das Standard-`kimi-for-coding` zurück – kein Fehler, aber auch keine Beschleunigung.
- **401 ohne Zugriff**: Ohne HighSpeed-Zugriff gibt der Aufruf `401` zurück; führen Sie ein Upgrade auf Allegretto oder höher durch.
</Callout>

<Callout type="tip">
**Warum fühlt sich die Aufgabe insgesamt nicht 5–6× schneller an?** „5–6×" bezieht sich auf die **Modell-Ausgabegeschwindigkeit** (wie schnell Text/Code generiert wird). Die Gesamtdauer einer Coding-Aufgabe setzt sich aus „Modell-Ausgabe + Tool-Aufrufe (Lesen/Schreiben von Dateien, Ausführen von Befehlen, Web-Abrufe usw.) + Skriptausführung" zusammen – wie lange Tool-Aufrufe und Skriptausführung dauern, hängt von Ihrem Projekt und Ihren Befehlen ab, und HighSpeed ändert diesen Teil nicht. Wenn sich die Gesamtaufgabe also nicht 5–6× schneller anfühlt, lag das meist an Tool-Aufrufen / Skriptausführung in dieser Runde, nicht an langsamerer Modellgenerierung.
</Callout>
