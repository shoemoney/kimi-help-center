---
title: "Erste Schritte"
slug: "cli-getting-started"
order: 3
extract_headings: false
preview: true
preview_content: "Anleitung zur Installation, Anmeldung und für die ersten Schritte mit der Kimi Code CLI."
---

<SeoMeta
  title="Kimi Code CLI – Installation & Schnellstart - Kimi Hilfecenter"
  description="Erste Schritte mit der Kimi Code CLI: Installationsbefehle, Nutzung im Terminal und Browser, erstmalige Anmeldung und Erstellen von AGENTS.md mit /init."
/>

# Erste Schritte mit der Kimi Code CLI

Die Kimi Code CLI ist ein KI-Agent, der im Terminal läuft und Sie bei Softwareentwicklungsaufgaben und alltäglichen Terminal-Vorgängen unterstützt – beim Lesen und Ändern von Code, beim Ausführen von Shell-Befehlen, beim Durchsuchen von Dateien, beim Abrufen von Webseiten sowie beim eigenständigen Planen und Anpassen der nächsten Schritte anhand des Feedbacks während der Arbeit.

Sie eignet sich für Szenarien wie:

- **Code schreiben und ändern**: neue Funktionen umsetzen, Fehler beheben, Refactorings durchführen
- **Ein Projekt verstehen**: eine unbekannte Codebasis erkunden und Fragen zu Architektur und Implementierung beantworten
- **Aufgaben automatisieren**: Dateien stapelweise verarbeiten, Builds und Tests ausführen, mehrere Skripte verketten

Die CLI ist in TypeScript geschrieben, wird über npm verteilt und läuft auf Node.js.

## Bevor Sie beginnen

- **Betriebssystem**: macOS, Linux oder Windows (über PowerShell)
- **Kimi-Konto**: ein aktives Kimi-Mitgliedschaftsabonnement oder ein aufrufbarer API-Schlüssel

<Callout type="tip">
Die Kimi Code CLI ist eine vollständig interaktive TUI-Anwendung. Für das beste visuelle Erlebnis sollten Sie sie in einem Terminal mit Truecolor- und Ligatur-Unterstützung ausführen, etwa [Kitty](https://sw.kovidgoyal.net/kitty/) oder [Ghostty](https://ghostty.org/).
</Callout>

## Installation

Es stehen zwei Installationsmöglichkeiten zur Verfügung: das offizielle Installationsskript (empfohlen, kein vorinstalliertes Node.js erforderlich) und eine globale npm-Installation.

### Installationsskript (empfohlen)

macOS / Linux:

<Frames
  src="./images/cli-getting-started/screenshot-23.png"
  alt="Installation der Kimi Code CLI"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

Windows (PowerShell):

<CodePreview
  files={[
    {
      name: "command.ps1",
      language: "powershell",
      content: "irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

Das Skript lädt automatisch die neueste Version herunter, prüft die Prüfsumme und legt die ausführbare Datei `kimi` in Ihrem `PATH` ab.

<Callout type="tip">
Installieren Sie unter Windows vor dem ersten Start [Git for Windows](https://gitforwindows.org/). Die Kimi Code CLI verwendet das mitgelieferte Git Bash als Shell-Umgebung; ist Git Bash an einem benutzerdefinierten Ort installiert, setzen Sie `KIMI_SHELL_PATH` auf den absoluten Pfad von `bash.exe`.
</Callout>

### npm-Installation

Wenn Node.js 22.19.0 oder neuer bereits installiert ist, können Sie direkt über npm installieren:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "node --version\nnpm install -g @moonshot-ai/kimi-code",
    },
  ]}
/>

Oder mit pnpm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "pnpm add -g @moonshot-ai/kimi-code",
    },
  ]}
/>

### Installation überprüfen

Überprüfen Sie nach der Installation, ob die ausführbare Datei bereitsteht:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>

<Callout type="tip">
Wird der Befehl `kimi` nicht gefunden, öffnen Sie das Terminal erneut oder führen Sie `source ~/.bashrc` (bzw. `~/.zshrc`) aus.
</Callout>

> Aufgrund von macOS Gatekeeper kann der erste Start von `kimi` spürbar länger dauern. Sie können nachfolgende Starts beschleunigen, indem Sie Ihre Terminal-App unter **Systemeinstellungen → Datenschutz & Sicherheit → Entwicklerwerkzeuge** hinzufügen.

## Aktualisieren und Deinstallieren

**Aktualisieren**: Führen Sie `kimi upgrade` aus – die CLI sucht nach der neuesten Version und zeigt Aktualisierungsoptionen an. Wählen Sie `Install update now`, um basierend auf Ihrer aktuellen Installationsquelle zu aktualisieren. Sie können auch direkt über den Paketmanager aktualisieren:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

**Deinstallieren**: Wenn Sie über das Skript installiert haben, löschen Sie die ausführbare Datei `kimi`. Bei einer Installation über npm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm uninstall -g @moonshot-ai/kimi-code",
    },
  ]}
/>

## Erster Start

### Interaktives Terminal

Wechseln Sie in Ihr Projektverzeichnis und führen Sie `kimi` aus, um die interaktive Oberfläche zu starten:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd your-project\nkimi",
    },
  ]}
/>

### Einzelne Anweisung

Um eine einzelne Anweisung auszuführen, ohne die interaktive Oberfläche zu öffnen, verwenden Sie `-p`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"Take a look at this project's directory structure\"",
    },
  ]}
/>

### Sitzung fortsetzen

Um die vorherige Sitzung fortzusetzen, fügen Sie `-C` hinzu:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -C",
    },
  ]}
/>

### Erstmalige Anmeldung

Beim ersten Start müssen Sie eine API-Quelle konfigurieren. Geben Sie in der interaktiven Oberfläche `/login` ein, um den Anmeldevorgang zu starten:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

`/login` öffnet eine Plattformauswahl mit zwei Optionen:

- **Kimi Code (OAuth)** – Device-Code-Verfahren; öffnen Sie den Link auf einem beliebigen Gerät, melden Sie sich an und geben Sie den Code zur Autorisierung ein
- **Kimi-Plattform-API-Schlüssel** – geben Sie einen API-Schlüssel von `platform.kimi.com` oder `platform.kimi.ai` ein

Um sich abzumelden, geben Sie `/logout` ein, um die aktuellen Anmeldedaten zu löschen.

<Callout type="tip">
Wenn Sie Anthropic, OpenAI, Google oder andere Anbieter anbinden möchten, bearbeiten Sie `~/.kimi-code/config.toml` direkt, um den API-Schlüssel zu konfigurieren. Die vollständige Referenz aller Konfigurationsoptionen finden Sie in der Dokumentation zu Umgebungsvariablen und Konfigurations-Overrides.
</Callout>

## AGENTS.md erstellen

Führen Sie den Befehl `/init` in Ihrem Projektverzeichnis aus. Die Kimi Code CLI scannt automatisch die Projektstruktur und erstellt eine Datei `AGENTS.md`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

`AGENTS.md` dient dazu, der KI Hintergrundinformationen zum Projekt, Build-Schritte, Code-Konventionen und weiteren Kontext bereitzustellen, damit die KI Ihr Projekt präziser versteht.

## Ihr erstes Gespräch

Nach der Anmeldung beschreiben Sie eine Aufgabe in natürlicher Sprache. Ein guter Ausgangspunkt ist, die Kimi Code CLI sich mit dem Projekt vertraut machen zu lassen:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Wirf einen Blick auf die Verzeichnisstruktur dieses Projekts und beschreibe kurz, wofür jedes Verzeichnis da ist.",
    },
  ]}
/>

Die Kimi Code CLI ruft automatisch Werkzeuge zum Lesen von Dateien, zum Suchen und weitere auf, um die relevanten Inhalte zu durchsuchen, bevor sie antwortet. Schreibgeschützte Vorgänge werden standardmäßig automatisch und ohne Bestätigung ausgeführt. Bei Vorgängen, die Dateien ändern oder Shell-Befehle ausführen, fragt sie vor der Ausführung nach Ihrer Bestätigung.

Sie können auch direkt eine konkretere Aufgabe beschreiben:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Füge in src/utils eine Funktion hinzu, die einen beliebigen String in kebab-case umwandelt, und schreibe einen Unit-Test dafür.",
    },
  ]}
/>

Die Kimi Code CLI plant die Schritte, ändert den Code, führt die Tests aus und teilt Ihnen bei jedem Schritt mit, was sie getan hat.

<Callout type="tip">
Nicht sicher, was Sie tun sollen? Geben Sie jederzeit `/help` ein, um das integrierte Panel mit Befehlen und Tastenkürzeln zu öffnen. Mit `↑`/`↓` blättern Sie, mit `Esc` schließen Sie es. Zum Beenden geben Sie `/exit` ein, drücken Sie zweimal `Ctrl-C` oder drücken Sie `Ctrl-D` bei leerem Eingabefeld.
</Callout>

## Häufige Befehle und Tastenkürzel

### Sitzungsbefehle

| Befehl | Beschreibung |
| --- | --- |
| `/new` | Eine neue Sitzung starten und den aktuellen Kontext löschen |
| `/sessions` | Den Sitzungsverlauf durchsuchen und eine zum Fortsetzen auswählen |
| `/model` | Das aktuelle Modell wechseln |
| `/compact` | Den Kontext manuell komprimieren, um Tokens freizugeben |
| `/fork` | Die aktuelle Sitzung abzweigen – Verlauf bleibt erhalten, läuft aber unabhängig weiter |

### Die meistgenutzten Tastenkürzel

| Tastenkürzel | Beschreibung |
| --- | --- |
| `Esc` | Streaming-Ausgabe unterbrechen / Popup schließen |
| `Ctrl-C` | Ausgabe unterbrechen; im Ruhezustand zweimal drücken zum Beenden |
| `Shift-Tab` | Plan-Modus umschalten |
| `Ctrl-S` | Eine Nachricht mitten im Stream einfügen, ohne das Ende der aktuellen Antwort abzuwarten |
| `Ctrl-O` | Werkzeugausgabe einklappen / ausklappen |

Die vollständige Liste erhalten Sie mit `/help` oder unter [Interaktion & Eingabe](/kimi-code/cli-interaction).

## Wo Daten gespeichert werden

Die Kimi Code CLI speichert ihre lokalen Daten standardmäßig unter `~/.kimi-code/` – Konfigurationsdateien, Sitzungsaufzeichnungen, Protokolle und den Update-Cache. Um sie an einen anderen Ort zu verlegen, geben Sie über die Umgebungsvariable `KIMI_CODE_HOME` einen neuen Pfad an. Die vollständige Verzeichnisstruktur finden Sie in der Dokumentation zu Umgebungsvariablen.

## Häufige Fragen

**Ich habe meinen API-Schlüssel eingegeben, aber es heißt, die Authentifizierung sei fehlgeschlagen.**

Vergewissern Sie sich zunächst, dass Ihr Schlüssel und die Base-URL zur selben Plattform gehören. `api.kimi.com` und `api.moonshot.cn` sind zwei völlig voneinander unabhängige Kontosysteme, und ihre API-Schlüssel sind nicht austauschbar:

| Plattform | Base-URL | Abrechnung | Schlüsselerstellung |
|------|---------|---------|-------------|
| **Kimi Code** | OpenAI-kompatibel: `https://api.kimi.com/coding/v1`<br> Anthropic-kompatibel: `https://api.kimi.com/coding/` | Kimi-Mitgliedschaftsabonnement (inklusive Credits) | [Kimi Code Console](https://www.kimi.com/code/console) |
| **Kimi Offene Plattform** | `https://api.moonshot.cn/v1` | Nutzungsbasierte Abrechnung | [Kimi Offene Plattform](https://platform.kimi.com) |

**Der Befehl `kimi` wird nach der Installation nicht gefunden.**

Das Installationsskript fügt `kimi` zu Ihrem PATH hinzu, doch müssen Sie das Terminal neu starten oder `source ~/.bashrc` (bzw. `source ~/.zshrc`) ausführen, damit dies wirksam wird. Wird es weiterhin nicht gefunden, prüfen Sie, ob `~/.local/bin` in Ihrem PATH enthalten ist.

**Nach dem Ausführen von `/login` ist der Browser nicht aufgegangen.**

In einer Remote-Server- oder Headless-Umgebung zeigt `/login` eine URL an. Kopieren Sie diese manuell in Ihren Browser, um die Autorisierung abzuschließen.

Bei Problemen oder Anregungen geben Sie bitte Feedback über [GitHub Issues](https://github.com/MoonshotAI/kimi-cli/issues).

## Nächste Schritte

- [Interaktion & Eingabe](/kimi-code/cli-interaction) – Bedienung des Eingabefelds, Freigabeablauf, Plan-Modus und YOLO-Modus erklärt
- [Sitzungen & Kontext](/kimi-code/cli-sessions) – Sitzungen fortsetzen, Kontext komprimieren, Sitzungen exportieren
- [Häufige Anwendungsfälle](/kimi-code/cli-use-cases) – Prompt-Beispiele für typische Aufgaben
