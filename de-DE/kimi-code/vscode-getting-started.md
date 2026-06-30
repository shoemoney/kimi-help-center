---
title: "Schnellstart mit Kimi Code für VS Code"
slug: "vscode-getting-started"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="Schnellstart mit Kimi Code für VS Code - Kimi Hilfecenter"
  description="Kimi Code für VS Code ist eine in Visual Studio Code integrierte Erweiterung. Nach der Installation können Sie Fragen stellen, Code-Diffs prüfen und Änderungen schnell committen..."
/>

# Schnellstart mit Kimi Code für VS Code

<Callout type="warning">
**Hinweis zur Kompatibilität der VS-Code-Erweiterung**

Kimi Code für VS Code steht derzeit nur Nutzern der bisherigen Python-CLI zur Neuinstallation zur Verfügung. Bestehende Nutzer, die das Plugin bereits installiert haben, können es nach dem Upgrade auf die neue CLI weiterhin verwenden. Eine Installation für Nutzer der TS-Version der CLI wird zurzeit nicht unterstützt.
</Callout>

Kimi Code für VS Code ist eine in Visual Studio Code integrierte Erweiterung. Nach der Installation können Sie direkt im Editor Fragen stellen, Code-Diffs prüfen und Änderungen schnell committen.

Die Erweiterung kann den Inhalt der von Ihnen referenzierten Dateien lesen und Änderungsvorschläge über eine visuelle Oberfläche anzeigen, die nach Ihrer Bestätigung ausgeführt werden. Der gesamte Ablauf bleibt unter Ihrer Kontrolle und steigert dabei die Entwicklungseffizienz deutlich.

Diese Erweiterung bietet ein natives Chat-Panel in VS Code und unterstützt:
- Das Referenzieren von Dateien oder Ordnern über das Zeichen `@`.
- Das Ausführen von Projekt-Scans und die Kontextverwaltung über `/`-Befehle.
- Diff-Ansichten, die Dateiänderungen anzeigen und ein Zurücksetzen ermöglichen.
- Die Einbindung von MCP-Servern zum Aufruf externer Tools.

---

## Installation

1.  **Voraussetzungen**: Sie benötigen ein Kimi-Konto-Abonnement oder einen Kimi-API-Schlüssel.
2.  **Marketplace**: Installieren Sie die Erweiterung über den [VS Code Marketplace](vscode:extension/moonshot-ai.kimi-code).

<Callout type="tip">
Falls die Erweiterung nach der Installation nicht erscheint, starten Sie VS Code neu oder führen Sie in der Befehlspalette **Developer: Reload Window** aus (Mac: `Cmd+Shift+P`, Win/Linux: `Ctrl+Shift+P`).
</Callout>

---

## Authentifizierung

Kimi Code unterstützt zwei Authentifizierungsmodi. Sie können den Modus jederzeit über das **Zahnrad-Symbol** wechseln.

<Frames
  src="./images/vscode/kimi-code-gear-icon.png"
  alt="Authentifizierungseinstellungen"
  width={800}
  height={450}
/>

- **Kimi-Konto-Modus**: Klicken Sie auf die Login-Schaltfläche, um die Autorisierung über Ihren Browser durchzuführen.
- **API-Schlüssel-Modus**: Klicken Sie hier, um den Login zu überspringen, wenn Sie bereits einen API-Schlüssel konfiguriert haben.

---

## Typische Arbeitsabläufe

Code lesen: Geben Sie `@` ein, um eine Datei oder einen Ordner auszuwählen, lassen Sie sich den Codeablauf erklären und stellen Sie anschließend weitere Fragen.

Refactoring: Referenzieren Sie den Zielcode wie etwa `@src/feature/`, fordern Sie einen Refactoring-Plan an, prüfen Sie den Diff, übernehmen Sie gezielt einzelne Änderungen und setzen Sie bei Bedarf zurück.

Debugging: Fügen Sie Fehlermeldungen oder Stack-Traces ein, referenzieren Sie zugehörige Dateien, fordern Sie eine Diagnose samt Korrektur an und bestätigen Sie anschließend die vorgeschlagenen Änderungen.

Projektübersicht: Referenzieren Sie einen Ordner wie etwa `@src/services/`, fordern Sie eine Modul-Übersicht oder eine Architekturzusammenfassung an und stellen Sie weitere Fragen zu Abhängigkeiten oder Schwachstellen.

---

## Befehle und Tastenkürzel

Nutzen Sie `CodePreview`, um Befehle schnell zu testen oder wichtige Tastenkürzel nachzuschlagen:

<CodePreview
  files={[
    {
      name: "shortcuts.txt",
      language: "text",
      content: "Ctrl+Shift+K : Fokus auf das Kimi-Eingabefeld setzen\nAlt+K : Referenz auf die aktuelle Datei einfügen\nCtrl+N : Neue Unterhaltung",
    },
  ]}
/>

| Tastenkürzel | Funktion |
| :--- | :--- |
| `Ctrl+Shift+K` / `Cmd+Shift+K` | Fokus auf das Kimi-Eingabefeld setzen |
| `Alt+K` | Referenz auf die aktuelle Datei einfügen |
| `Ctrl+N` / `Cmd+N` | Neue Unterhaltung |
| `↑` / `↓` | Eingabeverlauf durchsuchen |

<Callout type="info">
Geben Sie **Kimi Code** in der Befehlspalette ein, um auf weitere Befehle zuzugreifen: in neuem Tab öffnen, in der Seitenleiste öffnen oder Sitzungen verwalten.
</Callout>
