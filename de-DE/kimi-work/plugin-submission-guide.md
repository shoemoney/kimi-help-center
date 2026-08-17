---
title: "Plugins erstellen und einreichen"
slug: "plugin-submission-guide"
order: 4
extract_headings: false
preview: true
preview_content: "Verwandeln Sie Ihr Produkt oder Ihre Dienstleistung in ein Kimi-Plugin, testen Sie es und beantragen Sie die Aufnahme in den offiziellen Marketplace."
---

<SeoMeta
  title="Plugins erstellen und einreichen - Kimi Hilfezentrum"
  description="Erfahren Sie, wie Sie ein Plugin in Kimi Work erstellen, testen und für die Aufnahme in den offiziellen Kimi-Plugin-Marktplatz beantragen."
/>

# Plugins erstellen und einreichen

Möchten Sie Ihr Produkt oder Ihre Dienstleistung mit Kimi verbinden, damit Nutzer dessen Funktionen in Gesprächen nutzen können? Folgen Sie dieser Anleitung, um ein Plugin zu erstellen, zu testen und für den offiziellen Kimi-Plugin-Marktplatz einzureichen.

## Was ist ein Kimi-Plugin?

Ein Kimi-Plugin verbindet Ihr Produkt mit Kimi. Es hilft Kimi zu verstehen, wann Ihr Produkt nützlich ist, und stellt Kimi die notwendigen Workflows oder Tools zur Verfügung, um Nutzern zu helfen. Ein Plugin kann enthalten:

- **Nur Skills**: Wiederverwendbare Workflows, die auf Ihr Produkt oder Anwendungsfall zugeschnitten sind.
- **Nur MCP**: Tools und Dienste, die Kimi über einen MCP-Server zur Verfügung stehen.
- **Skills und MCP**: Produkttools kombiniert mit Workflows, die Kimi helfen, sie effektiv zu nutzen.

## Vorbereitung

Laden Sie zunächst [Kimi Work herunter und installieren Sie es](https://www.kimi.com/products/kimi-work). Bereiten Sie Folgendes vor:

- Einen Plugin-Namen, eine Beschreibung und ein Logo
- Die Kernaufgaben, die Nutzer in natürlicher Sprache erledigen können sollen
- Eine MCP-Server-URL, falls zutreffend

<Callout type="warning">
Falls das Plugin-Logo ein Drittanbieterprodukt, eine Marke oder ein Warenzeichen enthält, wenden Sie sich an den jeweiligen Rechteinhaber und holen Sie die erforderliche schriftliche Genehmigung ein, bevor Sie das Plugin einreichen.
</Callout>

## Schritt 1: Plugin erstellen und testen

1. Öffnen Sie Kimi Work, geben Sie "/" in ein Gespräch ein und wählen Sie **Plugin Builder**.
2. Beschreiben Sie das Plugin und geben Sie die vorbereiteten Informationen ein. Falls Sie bereits ein Plugin für Codex, Claude oder eine andere Plattform haben, stellen Sie dessen Dateien oder Projekt-URL bereit und folgen Sie den Anweisungen zur Konvertierung.

3. Gehen Sie zu **Plugins** → **Persönlich**, suchen Sie das Plugin und installieren Sie es.

4. Testen Sie die Kernfunktionen in einem neuen Gespräch, einschließlich normaler und Grenzfälle. Halten Sie mindestens drei repräsentative Testanfragen bereit.
5. Folgen Sie den Anweisungen des Plugin Builders, um die vollständige Plugin-ZIP-Datei zu erhalten.

Für ein MCP-basiertes Plugin testen Sie zusätzlich den Authentifizierungsablauf:

- **Keine Authentifizierung**: Nutzer können das Plugin sofort nach der Installation verwenden.
- **OAuth**: Die Drittanbieter-Autorisierungsseite sollte bei der ersten Installation geöffnet werden.
- **CLI-Authentifizierung**: Die Installation startet keine Autorisierung. Beim ersten Aufruf des Plugins im Gespräch führen Nutzer die Autorisierung durch. Nach erfolgreicher Autorisierung müssen sie sich in der Regel in anderen Gesprächen nicht erneut autorisieren.

## Schritt 2: Bewerbung einreichen

Nachdem Sie das Plugin erstellt und getestet haben, füllen Sie das [Kimi-Plugin-Einreichungsformular](https://moonshot.feishu.cn/share/base/form/shrcnZcnxlNJlbw845KoVgjEhkh) aus und laden Sie die Plugin-ZIP-Datei hoch.

Das Formular fragt nach:

| Punkt | Anforderung |
| --- | --- |
| Plugin-Name, Beschreibung und ZIP-Datei | Erforderlich |
| Plugin-Typ | Nur Skills, nur MCP oder hybrid |
| MCP-Authentifizierung | Erforderlich für MCP-only und hybride Plugins |
| Zielregionen | Festlandchina, international oder beides |
| Highlights und empfohlene Testanfragen | Mindestens drei Testanfragen |
| Interesse an Co-Marketing und Materialien | Materialien sind optional und nur erforderlich, falls Co-Marketing besprochen werden soll |
| Autorisierungs- und Compliance-Status | Offenlegen von Punkten, die weitere Diskussion erfordern |
| Kontakt-E-Mail | Wird für Prüfungsupdates und Anfragen nach zusätzlichen Informationen verwendet |
| Unternehmen oder Team, zugehörige Website und Anmerkungen | Optional |

<Callout type="warning">
Geben Sie keine Passwörter, Tokens, API-Schlüssel, private Schlüssel oder andere Geheimnisse im Formular oder der Plugin-ZIP an. Falls Nutzer einen eigenen Schlüssel benötigen, erklären Sie lediglich, wie sie diesen erhalten und konfigurieren.
</Callout>

## Nächste Schritte

Das Kimi-Team prüft die Bewerbung und die Plugin-ZIP-Datei. Wenn das Plugin die Prüfung besteht oder wir weitere Informationen oder Änderungen benötigen, kontaktieren wir Sie unter der angegebenen E-Mail-Adresse und teilen die nächsten Schritte mit.

## FAQ

### Kann ich ein Plugin ohne MCP-Server einreichen?

Ja. Plugins nur mit Skills werden unterstützt. Wählen Sie **Nur Skills** als Plugin-Typ.

### Kann ich ein Plugin für Codex, Claude oder eine andere Plattform einreichen?

Ja. Geben Sie in Schritt 1 die vorhandenen Plugin-Dateien oder die Projekt-URL an den Plugin Builder weiter und folgen Sie den Anweisungen zur Konvertierung. Installieren und testen Sie das konvertierte Plugin in Kimi Work, bevor Sie die generierte ZIP-Datei einreichen.

### Welche MCP-Authentifizierungsmethoden werden unterstützt?

Derzeit werden folgende drei Methoden unterstützt:

- **Keine Authentifizierung**: Nutzer können das Plugin sofort nach der Installation ohne Anmeldung oder andere Identitätsprüfung nutzen.
- **OAuth**: Nutzer werden bei der ersten Installation automatisch zur Autorisierungsseite des Drittanbieterprodukts weitergeleitet. Nach der Autorisierung können sie das Plugin nutzen.
- **CLI-Authentifizierung**: Die Installation startet keinen Autorisierungsablauf. Beim ersten Aufruf des Plugins in einem Gespräch führen Nutzer die Autorisierung anhand der im Gespräch angezeigten Anweisungen durch. Nach erfolgreicher Autorisierung müssen sie sich in der Regel in anderen Gesprächen nicht erneut autorisieren.

Testen Sie den Ablauf, der der tatsächlichen Authentifizierungsmethode Ihres Plugins entspricht. Falls ein OAuth-Plugin bei der ersten Installation nicht weiterleitet oder ein CLI-authentifiziertes Plugin Nutzer wiederholt zur Autorisierung auffordert, überprüfen Sie die Authentifizierungskonfiguration des MCP-Servers vor der Einreichung und beschreiben Sie das Problem unter **Zusätzliche Anmerkungen**.

### Wie sieht der OAuth-Autorisierungsablauf aus?

Für einen OAuth-fähigen MCP-Server identifiziert der Plugin Builder die relevanten Autorisierungsinformationen anhand der MCP-Server-URL. Nach der Erstellung des Plugins werden Nutzer bei der ersten Installation zur Autorisierungsseite des Drittanbieterprodukts weitergeleitet.

### Was, wenn ich eine umfassendere Partnerschaft mit Kimi anstrebe?

Schließen Sie zunächst den in dieser Anleitung beschriebenen Prozess der Plugin-Erstellung, -Tests und -Einreichung ab. Falls Sie über die Plugin-Listung hinaus andere Zusammenarbeitsformen erkunden möchten, skizzieren Sie Ihren Vorschlag kurz unter **Zusätzliche Anmerkungen**. Das Kimi-Team wird Sie bei Bedarf kontaktieren.

### Garantiert die Einreichung einer Bewerbung die Listung?

Nein. Das Kimi-Team bewertet die Funktionalität, Nutzererfahrung, Sicherheit, Dienstzuverlässigkeit und relevanten Autorisierungsstatus des Plugins.
