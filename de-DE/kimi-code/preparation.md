---
title: "Vorbereitung"
slug: "preparation"
order: 0
extract_headings: false
preview: true
preview_content: "Wichtige Grundlagen vor der Nutzung von Kimi Code: Terminal, PowerShell, CLI und Sicherheitsaspekte."
---

<SeoMeta
  title="Vorbereitung vor der Nutzung von Kimi Code - Kimi Help Center"
  description="Lernen Sie die Grundlagen von Terminal, PowerShell und CLI kennen und erfahren Sie, wie Sie Kimi Code CLI sicher für die Entwicklung einsetzen."
/>

# Vorbereitung

Bevor Sie Kimi Code verwenden, sollten Sie einige grundlegende Konzepte kennen. Sie helfen Ihnen dabei, Kimi Code reibungsloser zu installieren und zu nutzen.

## Was ist ein Terminal?

Ein **Terminal** ist ein Fenster, in dem Sie Ihren Computer über Texteingaben steuern.

Sie können es sich wie einen „textbasierten Dateimanager“ vorstellen: Statt Symbole mit der Maus anzuklicken, geben Sie im Terminal Befehle wie `ls`, `cd` und `mkdir` ein, um Ordnerinhalte anzuzeigen, Verzeichnisse zu wechseln, Dateien zu erstellen und vieles mehr.

### So öffnen Sie ein Terminal

| Betriebssystem | So öffnen Sie es |
|---------|---------|
| **macOS** | Drücken Sie `Cmd + Space`, geben Sie "Terminal" oder "终端" ein und drücken Sie dann die Eingabetaste |
| **Windows** | Drücken Sie `Win + R`, geben Sie `powershell` oder `wt` ein;<br>oder suchen Sie im Startmenü nach "PowerShell"/"Terminal" |
| **Linux** | Drücken Sie `Ctrl + Alt + T`, oder öffnen Sie "Terminal" im Anwendungsmenü |

### So prüfen Sie Ihr Betriebssystem

- **macOS**: Klicken Sie oben links auf dem Bildschirm auf das Apple-Symbol → "Über diesen Mac"
- **Windows**: Drücken Sie `Win + Pause/Break`, oder klicken Sie mit der rechten Maustaste auf "Dieser PC" → "Eigenschaften"
- **Linux**: Führen Sie im Terminal `uname -a` oder `cat /etc/os-release` aus

## Was ist PowerShell?

**PowerShell** ist ein häufig verwendetes Terminal-Werkzeug unter Windows. Es ist leistungsfähiger als die klassische Eingabeaufforderung (CMD). Unter Windows muss Kimi Code CLI in PowerShell installiert und verwendet werden.

Windows bietet zwei verschiedene „Kommandozeilen“-Werkzeuge. Verwechseln Sie sie nicht:

| Werkzeug | Beschreibung | Geeignet? |
|-----|------|---------|
| **CMD (Eingabeaufforderung)** | Das einfachste Kommandozeilenwerkzeug in Windows | ❌ Nicht empfohlen |
| **PowerShell** | Ein leistungsfähigeres, modernes Kommandozeilenwerkzeug | ✅ Empfohlen |

> **Tipp**: Der Installationsbefehl für Kimi Code CLI muss in PowerShell ausgeführt werden. In CMD funktioniert er möglicherweise nicht richtig.

## Arbeitsverzeichnis

Wenn Kimi Code CLI startet, verwendet es Ihren aktuellen Ordner als **Arbeitsverzeichnis**. Es kann nur Dateien innerhalb dieses Arbeitsverzeichnisses lesen und ändern.

**Prüfen Sie vor dem Start den aktuellen Pfad in Ihrem Terminal**:

- Die Terminal-Eingabeaufforderung zeigt normalerweise das aktuelle Verzeichnis an, zum Beispiel `~/projects/my-app$`
- Geben Sie `pwd` (macOS/Linux) oder `cd` (Windows) ein, um den vollständigen Pfad anzuzeigen
- Verwenden Sie `cd <folder-name>`, um in das gewünschte Projektverzeichnis zu wechseln, und führen Sie anschließend `kimi` aus

> **Beispiel**: Angenommen, Ihr Projekt liegt in `~/Documents/my-project`. Starten Sie es so:
> 1. Öffnen Sie das Terminal
> 2. Geben Sie `cd ~/Documents/my-project` ein
> 3. Geben Sie `kimi` ein, um zu starten

## Befehle ausführen

Befehle im Terminal oder in PowerShell auszuführen ist einfach:

1. **Befehl kopieren**: Kopieren Sie den Befehlstext aus der Dokumentation
   - macOS/Linux: `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash`
   - Windows: `irm https://code.kimi.com/kimi-code/install.ps1 | iex`
2. **Ins Terminal einfügen**: Klicken Sie mit der rechten Maustaste in das Terminalfenster, oder drücken Sie `Cmd/Ctrl + V`, um den Text einzufügen
3. **Enter drücken**: Drücken Sie die Taste `Enter`, um den Befehl auszuführen
4. **Abschluss abwarten**: Das Terminal zeigt den Ausführungsverlauf und das Ergebnis an

> **Hinweis**: In einem Terminal **unterbricht `Ctrl+C` normalerweise den aktuellen Befehl**; es kopiert keinen Text. Verwenden Sie zum Kopieren `Cmd/Ctrl + Shift + C` und zum Einfügen `Cmd/Ctrl + Shift + V`; alternativ können Sie das Kontextmenü per Rechtsklick nutzen.

> **Tipp**: Wenn Sie während der Ausführung eines Befehls aufgefordert werden, ein Passwort einzugeben, zeigt das Terminal keine Zeichen an. Das ist ein normaler Sicherheitsmechanismus. Geben Sie das Passwort einfach ein und drücken Sie die Eingabetaste.

## Was ist CLI?

**CLI** steht für **C**ommand-**L**ine **I**nterface. Gemeint ist die Bedienung eines Werkzeugs über Texteingaben statt über Schaltflächen in einer grafischen Oberfläche.

Kimi Code CLI ist ein Kommandozeilenwerkzeug: Sie geben im Terminal `kimi` ein, um es zu starten, und interagieren dann per Textbefehlen mit der KI. So kann sie Ihnen dabei helfen, Code zu lesen, Dateien zu ändern, Befehle auszuführen und mehr.

## Netzwerkumgebung

Um Kimi Code zu verwenden, benötigen Sie Zugriff auf die Kimi-Server. Wenn Ihre Netzwerkumgebung eine der folgenden Einschränkungen aufweist, müssen Sie möglicherweise Ihre Einstellungen anpassen:

- **Unternehmens-/Schulnetzwerk**: Manche Intranet-Umgebungen beschränken den Zugriff auf externe API. Wenn Sie einen Proxy verwenden, können Sie die Proxy-Adresse in der Konfiguration festlegen.
- **VPN/Proxy**: Wenn Sie einen globalen Proxy verwenden, achten Sie darauf, dass er Anfragen an `api.kimi.com` oder `api.moonshot.cn` nicht abfängt oder stört.
- **Firewall**: Prüfen Sie, ob die Firewall Ihres Systems oder Routers den Netzwerkzugriff des Terminalprogramms blockiert.

## Sicherheitsaspekte

Kimi Code CLI ist ein leistungsfähiger KI-Agent. Es kann:

- Dateiinhalte auf Ihrem Computer **lesen**
- Ihren Code und Ihre Konfigurationsdateien **ändern**
- Shell-Befehle **ausführen**, zum Beispiel Abhängigkeiten installieren oder Tests starten

**Bitte beachten Sie bei der Verwendung Folgendes**:

- **Nicht in sensiblen Verzeichnissen starten**: Vermeiden Sie es, Kimi Code CLI in Verzeichnissen auszuführen, die Passwörter, Schlüssel oder private persönliche Dateien enthalten.
- **Aktionen sorgfältig prüfen**: Kimi Code bittet Sie um Bestätigung, bevor Dateien geändert oder Befehle ausgeführt werden. Klicken Sie nicht aus Gewohnheit auf „Zustimmen“.
- **Erst verstehen, dann fortfahren**: Wenn Sie unsicher sind, welche Auswirkungen eine Aktion hat, bitten Sie Kimi Code, genau zu erklären, was es tun wird, bevor Sie entscheiden, ob Sie fortfahren möchten.
- **Wichtigen Code sichern**: Bevor Sie Kimi Code in einem wichtigen Projekt verwenden, empfehlen wir, Ihren Code in eine Versionsverwaltung wie Git einzuchecken, damit Sie jederzeit zurückrollen können.

> **Empfehlung**: Probieren Sie Kimi Code CLI bei der ersten Nutzung in einem Testprojekt oder in einer Kopie Ihres Projekts aus. Sobald Sie mit der Funktionsweise vertraut sind, können Sie es in Ihren Produktionsprojekten einsetzen.
