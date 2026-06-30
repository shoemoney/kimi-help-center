---
title: "Kimi Code – Häufige Fragen"
slug: "faq"
order: 4
extract_headings: false
preview: true
preview_content: "Häufig gestellte Fragen zu Kimi Code."
---

<SeoMeta
  title="Kimi Code FAQ - Kimi Hilfecenter"
  description="Häufig gestellte Fragen zur Installation, Authentifizierung, Migration und Bedienung von Kimi Code CLI und mehr."
/>

# Häufig gestellte Fragen

## Umstieg von der älteren Version

<Callout type="info">
Kimi Code CLI hat ein großes Versions-Upgrade hinter sich – der Wechsel von Python/uv zu Node.js bringt eine einfachere Installation, schnellere Startzeiten und eine überarbeitete Terminal-Oberfläche. Die ältere Version wird nach und nach eingestellt, daher empfehlen wir, möglichst bald umzusteigen.
</Callout>

Wenn Sie von der älteren Version umsteigen, folgen Sie den Schritten unten – ein einziger Befehl überträgt Ihre Konfiguration, MCP-Server und Sitzungsverlauf in die neue Version.

### Was ist neu

- **Kein Python / uv mehr**: Neu aufgebaut auf Node.js – keine Python-Umgebung nötig, einfacher zu installieren
- **Native Binary, sofort einsatzbereit**: Schnellerer Start, geringerer Ressourcenbedarf
- **Überarbeitete Terminal-Oberfläche**: Flüssigeres, reaktionsschnelleres Erlebnis
- **Vollständige Datenmigration**: Konfiguration, MCP-Server und Sitzungsverlauf werden nahtlos übernommen

### So migrieren Sie

Es gibt zwei Wege zur Migration.

Beim **ersten Ausführen von `kimi`** nach der Installation von kimi-code wird automatisch geprüft, ob unter `~/.kimi/` Daten von kimi-cli vorhanden sind. Werden welche gefunden, erscheint eine Migrationsabfrage, und Sie können wählen, ob Sie jetzt migrieren, es später erledigen oder nie wieder gefragt werden möchten.

Sie können sie auch **jederzeit manuell ausführen**:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi migrate",
    },
  ]}
/>

Sie können entscheiden, ob auch die Chat-Sitzungen migriert werden sollen. Falls Sie den Verlauf noch nicht benötigen, wählen Sie **Nur Konfiguration**; andernfalls wählen Sie **Konfiguration + N Sitzungen**, um alles in einem Durchgang zu übertragen. Am Ende wird eine Zusammenfassung ausgegeben.

### Was bei der Migration geschieht

**Was migriert wird**: Konfiguration (`config.toml`), MCP-Server-Konfiguration, Eingabeverlauf sowie die von Ihnen ausgewählten Chat-Sitzungen.

**Was nicht migriert wird**: OAuth-Anmeldedaten und MCP-Dienstautorisierungen werden nicht übernommen, daher müssen Sie nach der Migration erneut `/login` ausführen und die MCP-Server neu autorisieren. Auch kimi-cli-Plugins werden nicht berücksichtigt.

<Callout type="tip">
Die Migration **verändert oder löscht niemals** die alten Daten unter `~/.kimi/`. kimi-cli funktioniert weiterhin wie zuvor, und beide stören sich nicht gegenseitig. Die Migration lässt sich auch mehrfach ausführen – bereits migrierte Sitzungen werden nicht erneut importiert.
</Callout>

Nach der Migration sind aus kimi-cli importierte Sitzungen in der Sitzungsauswahl mit `[imported]` gekennzeichnet, sodass Sie sie von neuen unterscheiden können.

## Installation & Authentifizierung

### Keine Modelle verfügbar beim Ausführen von `/login`

Wenn beim Ausführen von `/login` die Meldung „No models available for the selected platform“ erscheint, kann das folgende Ursachen haben:

- **Ungültiger oder abgelaufener API-Schlüssel**: Prüfen Sie, ob der eingegebene API-Schlüssel korrekt und noch gültig ist.
- **Problem mit der Netzwerkverbindung**: Stellen Sie sicher, dass Sie die Adresse des API-Dienstes erreichen (etwa `api.kimi.com` oder `api.moonshot.cn`).

**Unterschied zwischen den Plattformen beachten**

Die Kimi Code-Mitgliedschaftsvorteile und die [Kimi Open Platform](https://platform.kimi.com) verwenden unterschiedliche Base-URLs. Achten Sie bei der Konfiguration darauf, dass Base-URL und API-Key zusammenpassen.

| Plattform | Base-URL | Abrechnung | Schlüsselerstellung |
|------|---------|---------|-------------|
| **Kimi Code** | Anthropic-kompatibel: `https://api.kimi.com/coding/` | Kimi-Mitgliedschaftsabonnement (inklusive quota) | [Kimi Code Console](https://www.kimi.com/code/console) |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1` | Nutzungsbasierte Abrechnung | [Kimi Open Platform](https://platform.kimi.com) |

### API-Schlüssel ist ungültig

Mögliche Gründe für einen ungültigen API-Schlüssel:

- **Schlüssel falsch eingegeben**: Achten Sie auf zusätzliche Leerzeichen oder fehlende Zeichen.
- **Schlüssel abgelaufen oder widerrufen**: Prüfen Sie den Status des Schlüssels in der Plattform-Konsole.

### Mitgliedschaft abgelaufen oder quota aufgebraucht

Wenn Sie die Kimi Code-Plattform nutzen, können Sie Ihre aktuelle quota und Ihren Mitgliedschaftsstatus über den Befehl `/usage` einsehen. Ist Ihre quota aufgebraucht oder Ihre Mitgliedschaft abgelaufen, müssen Sie unter [Kimi Code](https://kimi.com/code) verlängern oder upgraden.

## Abonnement

### Wie fordere ich eine Rechnung an oder upgrade meine Mitgliedschaft?

Besuchen Sie die [Kimi-Mitgliedschaftsseite](https://www.kimi.com/membership/pricing?from=kfc_docs_faq#pricing-faq) und folgen Sie den Anweisungen, um eine Rechnung anzufordern oder Ihren Tarif zu upgraden.

## Probleme bei der Bedienung

### Einfügen eines Bildes schlägt fehl

Wenn Sie mit `Ctrl-V` ein Bild einfügen und die Meldung „Current model does not support image input“ erscheint, unterstützt das aktuelle Modell keine Bildeingabe.

Lösungen:

- **Zu einem Modell mit Bildunterstützung wechseln**: Verwenden Sie ein Modell mit der Fähigkeit `image_in`.
- **Inhalt der Zwischenablage prüfen**: Stellen Sie sicher, dass die Zwischenablage tatsächlich Bilddaten enthält und nicht nur den Pfad zu einer Bilddatei.

## Aktualisierungen & Upgrades

### Erster Start unter macOS ist langsam

Gatekeeper unter macOS führt beim ersten Start eines neuen Programms eine Sicherheitsprüfung durch, was den Start verlangsamt. Lösungen:

- **Abwarten, bis die Prüfung abgeschlossen ist**: Haben Sie beim ersten Start etwas Geduld; folgende Starts laufen wieder in normaler Geschwindigkeit.
- **Zu den Entwicklerwerkzeugen hinzufügen**: Fügen Sie Ihre Terminal-App unter **Systemeinstellungen → Datenschutz & Sicherheit → Entwicklerwerkzeuge** hinzu.

### So aktualisieren Sie Kimi Code CLI

Führen Sie `kimi upgrade` aus, um nach der neuesten Version zu suchen und Update-Optionen anzuzeigen. Wählen Sie `Install update now`, um zu aktualisieren. Sie können auch direkt über den Paketmanager upgraden:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

## FAQ zur VS Code-Erweiterung

Nachfolgend finden Sie häufig gestellte Fragen zur Kimi Code VS Code Extension.

### VS Code meldet, dass kein Arbeitsbereich geöffnet ist

Bitte öffnen Sie einen Ordner in VS Code. Die Kimi Code VS Code-Erweiterung benötigt einen Arbeitsbereich, um ordnungsgemäß zu funktionieren.

### VS Code meldet, dass die CLI nicht gefunden werden kann

Bitte installieren Sie Kimi Code CLI manuell und konfigurieren Sie `kimi.executablePath` in den VS Code-Einstellungen, oder stellen Sie sicher, dass die integrierte CLI vorhanden ist.

### Anmeldung in VS Code schlägt fehl

Versuchen Sie, die Anmeldung zu überspringen und stattdessen den API-Key-Modus zu verwenden, prüfen Sie Ihre Netzwerkverbindung oder versuchen Sie es später über das Aktionsmenü der Kimi Code-Erweiterung erneut.

### VS Code sendet Nachrichten, erhält aber keine Antwort

Bitte stellen Sie sicher, dass Kimi Code CLI verfügbar ist, das Modell konfiguriert ist und in VS Code ein Arbeitsbereichsordner geöffnet ist. Prüfen Sie die Fehlerprotokolle über „Kimi Code: Show Logs“.

### Zeitüberschreitung der VS Code-Verbindung

Wenn innerhalb von 30 Sekunden keine Antwort erfolgt, kommt es zu einer Zeitüberschreitung. Bitte prüfen Sie Ihr Netzwerk und versuchen Sie es erneut.

### Fehler in VS Code vor dem Senden einer Nachricht

Bestimmte Fehler verhindern das Senden von Nachrichten in VS Code, etwa wenn Kimi Code CLI nicht gefunden wird, die Version zu niedrig ist, Sie nicht angemeldet sind oder die Sitzung belegt ist. Der Fehler wird als Toast-Benachrichtigung angezeigt, und Ihre Eingabe bleibt für einen erneuten Versuch erhalten.

## Feedback & Kontakt

### Die Dokumentation hat mein Problem nicht gelöst

Wenn das oben Beschriebene Ihr Problem nicht gelöst hat, können Sie uns gerne per E-Mail kontaktieren: [code@moonshot.ai](mailto:code@moonshot.ai). Bitte beschreiben Sie in der E-Mail das aufgetretene Problem, die durchgeführten Schritte sowie alle relevanten Protokollinformationen, und wir melden uns so schnell wie möglich bei Ihnen.

Wenn Sie Fragen oder Vorschläge haben, können Sie uns auch über [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues) Feedback geben.
