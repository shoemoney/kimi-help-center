---
title: "Kernfunktionen in VS Code"
slug: "vscode-core-operations"
order: 12
extract_headings: false
preview: true
preview_content: "Chatbereich, Dateiverweise, Diff-Prüfung, Planmodus und Kontextverwaltung in der Kimi Code-Erweiterung für VS Code."
---

<SeoMeta
title="Kimi Code für VS Code: Kernfunktionen – Kimi Help Center"
description="Beherrschen Sie die wichtigsten Funktionen der Kimi Code-Erweiterung für VS Code: @-Dateiverweise, Slash-Befehle, Diff-Prüfung von Codeänderungen, Planmodus, Nachrichtenwarteschlange und Kontextverwaltung."
/>

# Kernfunktionen in VS Code

<Callout type="warning">
**Anpassung der VS Code-Erweiterung läuft**

Kimi Code für VS Code kann derzeit nur von Nutzern der bisherigen Python-CLI neu installiert werden. Bestehende Nutzer, die die Erweiterung bereits installiert haben, können sie nach dem Upgrade auf die neue CLI weiterverwenden. Andere Nutzer der TS-Version der CLI werden für die Installation derzeit nicht unterstützt.
</Callout>

## Bereich öffnen

<Frames
  src="./images/vscode-getting-started/kimi-code-command-palette.png"
  alt="Kimi Code-Befehlspalette"
/>

Klicken Sie auf das Kimi-Symbol in der Activity Bar oder führen Sie den Befehl "Kimi Code" über die Befehlspalette aus.

## Eingabe und Steuerung

### Dateiverweise

Geben Sie `@` ein und wählen Sie dann eine Datei oder einen Ordner aus. Verwenden Sie zum Beispiel `@src/handlers/`, um auf einen Ordner zu verweisen, `@app.ts`, um auf eine Datei zu verweisen, oder `@src/app.ts:10-20`, um auf einen bestimmten Zeilenbereich zu verweisen.

Drücken Sie `Alt+K`, um die aktuelle Datei oder den ausgewählten Code schnell als Verweis einzufügen.

### Slash-Befehle

Geben Sie `/` ein, um das Befehlsmenü zu öffnen. Verwenden Sie `/init`, um das Projekt zu scannen und Dokumentation zu erstellen, oder `/compact`, um einen zu langen Kontext zu komprimieren.

### Eingabeverlauf

Drücken Sie `↑` / `↓` im Eingabefeld, um schnell durch Ihre zuletzt gesendeten Nachrichten zu blättern. So können Sie eine Frage leichter wiederholen oder überarbeiten.

### Eingabe von Mediendateien

Sie können Mediendateien einfügen, per Drag-and-drop ablegen oder auswählen. Unterstützte Formate sind unter anderem Bildformate wie PNG, JPEG, GIF, WebP und HEIC sowie Videoformate wie MP4, WebM und MOV.

- **Einfügen / Drag-and-drop**: Ein einzelnes Bild darf in Originalgröße bis zu 5MB groß sein. Das System komprimiert es automatisch, unter anderem durch Konvertierung von HEIC in JPEG, Verkleinerung übergroßer Bilder und Reduzierung der Qualität auf etwa 2MB.
- **Dateiauswahl**: Wenn Sie Dateien über die Schaltfläche "+" im Eingabefeld oder über das Menü `@` auswählen, dürfen Bilder bis zu 10MB und Videos bis zu 20MB groß sein.
- **Allgemeine Limits**: Pro Nachricht können bis zu 9 Dateien angehängt werden, mit einer Gesamtgröße von bis zu 80MB. Wenn Mediendateien angehängt sind, werden Modelle, die keine multimodale Eingabe unterstützen, automatisch ausgeblendet.

### Nachrichtenwarteschlange

Während Kimi antwortet, können Sie im Eingabefeld weiter tippen und Nachrichten senden. Diese Nachrichten gehen nicht verloren, sondern werden der **Nachrichtenwarteschlange** hinzugefügt. Die untere Symbolleiste zeigt die Anzahl der Einträge in der Warteschlange an; per Klick können Sie den Warteschlangenbereich aufklappen:

- Liste der Nachrichten anzeigen, die auf den Versand warten
- Nachrichten in der Warteschlange bearbeiten oder löschen
- Reihenfolge der Nachrichten ändern
- Während Kimi antwortet, klicken Sie auf das Symbol ⚡ bei einem Eintrag in der Warteschlange, um diese Nachricht sofort als **Lenkhinweis** einzufügen und Kimi so dazu anzuleiten, die aktuelle Antwort in eine andere Richtung zu führen

### Modelle und Thinking mode

Wechseln Sie das Modell über das Dropdown-Menü in der Eingabeleiste.

Einige Modelle unterstützen erweiterte Denkfähigkeiten. Der Schalter für Thinking mode hat drei Zustände: ausgeblendet, wenn das Modell Thinking mode nicht unterstützt; manuell durch den Nutzer aktiviert/deaktiviert; oder immer aktiviert bei Modellen wie k2-thinking.

Nach der Aktivierung werden Denkschritte in der Antwort standardmäßig eingeklappt. Sie können sie aufklappen, um den Denkprozess anzusehen. Aktivieren Sie `kimi.alwaysExpandThinking` in den Einstellungen, damit der Denkprozess standardmäßig aufgeklappt wird.

## Arbeitsmodi

### Bestätigung von Aktionen und Tool-Ausführung

Wenn Kimi vorschlägt, ein Tool auszuführen oder in eine Datei zu schreiben, erscheint ein Bestätigungsdialog mit drei Optionen:

- **Ja**: Nur die aktuelle Aktion genehmigen
- **Ja, für diese Sitzung**: Ähnliche Aktionen innerhalb der aktuellen Sitzung genehmigen, bis eine neue Sitzung beginnt
- **Nein**: Ausführung der Aktion ablehnen

Aktivieren Sie `kimi.yoloMode` in den Einstellungen, um alle Tool-Aufrufe automatisch zu genehmigen. Das eignet sich, wenn Sie dem Workflow vertrauen und effizienter arbeiten möchten.

### Fragedialog

Während der Ausführung stellt Kimi Ihnen möglicherweise eine Frage, zum Beispiel welche Implementierungsvariante Sie wählen möchten. Unten erscheint dann eine Fragekarte. Sie können direkt eine vordefinierte Option auswählen oder "Benutzerdefinierte Antwort..." wählen, um eine eigene Antwort einzugeben. Nachdem Sie geantwortet haben, setzt Kimi die Ausführung fort.

### Planmodus

Klicken Sie links im Eingabefeld auf das Symbol 📋, um den Planmodus zu aktivieren. Ist er aktiviert, gibt Kimi vor der eigentlichen Ausführung zuerst eine ausklappbare Plan-Karte aus, in der die vorgesehenen Schritte aufgeführt sind. Sie können den Plan prüfen, bevor Kimi fortfährt.

- Die Schaltfläche für den Planmodus behält ihre vorherige Einstellung für jede neue Sitzung bei.
- Wenn Kimi bereits eine Antwort streamt, erfordert das Verlassen des Planmodus eine zweite Bestätigung, damit die aktuelle Aufgabe nicht versehentlich unterbrochen wird.

### Nachverfolgung von Dateiänderungen

Nachdem Kimi Dateien geändert hat, werden alle Änderungen nachverfolgt und im Abschnitt "Dateiänderungen" angezeigt. Sie können die Liste der geänderten Dateien samt Status anzeigen, etwa hinzugefügt, geändert oder gelöscht, zusammen mit Statistiken zu hinzugefügten und entfernten Zeilen.

Für jede Datei können Sie die Änderungen in der nativen Diff-Ansicht von VS Code anzeigen, die Datei in den ursprünglichen Zustand zurückversetzen oder die Änderungen behalten, um den Nachverfolgungseintrag zu löschen. Sammelaktionen werden unterstützt, sodass Sie alle Änderungen auf einmal behalten oder verwerfen können. Der Ausgangszustand wird erfasst, wenn eine Datei in der Sitzung zum ersten Mal geändert wird; beim Zurücksetzen wird die Datei auf diese Ausgangsversion zurückgesetzt.

## Kontextverwaltung

### Sitzungsverlauf

Klicken Sie oben im Bereich auf das Dropdown-Menü für den Verlauf, um frühere Sitzungen zu durchsuchen. Sitzungsdaten werden lokal gespeichert und unterstützen die Stichwortsuche. Sie können alte Sitzungen löschen oder eine Sitzung laden, um ein früheres Gespräch fortzusetzen.

Die Statusleiste zeigt den Prozentsatz der Kontextnutzung sowie die Anzahl der Eingabe-/Ausgabe-token an. Wenn die Kontextnutzung hoch ist, verwenden Sie den Befehl `/compact`, um den Kontext zu komprimieren.

### Arbeitsverzeichnis wechseln

Klicken Sie rechts im Eingabefeld auf das Zahnradsymbol (Aktionsmenü) → **Arbeitsverzeichnis**, um das Arbeitsverzeichnis zwischen verschiedenen Unterverzeichnissen im aktuellen Workspace zu wechseln. Nach dem Wechsel startet automatisch eine neue Sitzung, damit Kimi auf Basis des neuen Verzeichniskontexts arbeiten kann. Sie können ein registriertes Unterverzeichnis direkt auswählen oder mit "Durchsuchen..." einen beliebigen Unterordner auswählen.

## Aktionsmenü

### Funktionsliste

Das Zahnradsymbol rechts im Eingabefeld öffnet das Aktionsmenü mit folgenden Funktionen:

- **Arbeitsverzeichnis**: Aktuelles Arbeitsverzeichnis wechseln (siehe oben "Arbeitsverzeichnis wechseln")
- **MCP-Server**: Konfigurationsbereich für MCP-Server öffnen
- **Allgemeine Konfiguration**: Kimi-Konfigurationsseite in den VS Code-Einstellungen öffnen
- **Protokolle anzeigen**: Ausgabebereich für Kimi Code-Protokolle zur Fehlerbehebung öffnen
- **Kimi zurücksetzen**: Kimi Webview zurücksetzen, hilfreich, wenn die Oberfläche eingefroren ist oder nicht reagiert
- **Abmelden / Anmelden**: Bei Ihrem Kimi-Konto abmelden oder wieder anmelden

Sie können außerdem "Kimi Code: Run CLI" über die VS Code-Befehlspalette ausführen, um Kimi Code CLI direkt im integrierten Terminal zu starten.
