---
title: "IDE-Integration"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "Binden Sie die Kimi Code CLI über ACP in Ihre IDE ein."
---

<SeoMeta
  title="IDE-Integration - Kimi Hilfecenter"
  description="Binden Sie die Kimi Code CLI über das Agent Client Protocol (ACP) in Ihre IDE ein. Einrichtungsanleitungen für Zed, JetBrains-IDEs und Paseo sowie Hilfe zur Fehlerbehebung."
/>

# Kimi Code CLI in IDEs verwenden

<Callout type="info">
Die Kimi Code CLI lässt sich über das [Agent Client Protocol (ACP)](https://agentclientprotocol.com/) in IDEs einbinden, sodass Sie KI-gestütztes Programmieren direkt in Ihrem Editor nutzen können.
</Callout>

## Voraussetzungen

Stellen Sie vor der Konfiguration Ihrer IDE sicher, dass die Kimi Code CLI installiert ist und Sie die Anmeldung abgeschlossen haben.

Der ACP-Adapter wird als Unterbefehl `kimi acp` bereitgestellt. Die IDE startet ihn als Kindprozess und kommuniziert über stdin/stdout mittels JSON-RPC. Jedes Mal, wenn die IDE eine Sitzung erstellt, greift die CLI auf den bestehenden Authentifizierungsstatus zurück – eine erneute Anmeldung ist nicht erforderlich.

<Callout type="tip">
Kindprozesse, die unter macOS aus einer IDE-GUI gestartet werden, erben in der Regel **nicht** den `PATH` der Terminal-Shell. Falls sich `kimi` nicht in einem Systemverzeichnis wie `/usr/local/bin` befindet, verwenden Sie in Ihrer IDE-Konfiguration den absoluten Pfad. Mit `which kimi` im Terminal finden Sie den aktiven Pfad heraus.
</Callout>

## Kimi Code CLI in Zed verwenden

[Zed](https://zed.dev/) ist ein moderner Editor mit nativer ACP-Unterstützung.

Fügen Sie der Zed-Konfigurationsdatei unter `~/.config/zed/settings.json` Folgendes hinzu:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

Konfigurationsfelder:

- `type`: fester Wert `"custom"`
- `command`: Pfad zur ausführbaren Datei der Kimi Code CLI. Befindet sich `kimi` nicht im `PATH`, verwenden Sie den vollständigen Pfad (z. B. `/Users/you/.local/bin/kimi`).
- `args`: Startargumente. Der Unterbefehl `acp` versetzt die CLI in den ACP-Modus.
- `env`: zusätzliche Umgebungsvariablen; in der Regel leer lassen. Zed stellt automatisch eine Standardumgebung bereit.

Öffnen Sie nach dem Speichern eine neue Unterhaltung im Agent-Panel von Zed. Daraufhin wird ein ACP-Unterprozess `Kimi Code CLI` mit der obigen Konfiguration gestartet. MCP-Server, die im Abschnitt `agent_servers` von Zed deklariert sind, werden über das ACP-Protokoll ebenfalls an die kimi-Seite weitergereicht.

## Kimi Code CLI in JetBrains-IDEs verwenden

JetBrains-IDEs (IntelliJ IDEA, PyCharm, WebStorm usw.) unterstützen ACP über das KI-Chat-Plugin.

Wenn Sie kein JetBrains-KI-Abonnement haben, können Sie in der Registry `llm.enable.mock.response` aktivieren, um in reinen ACP-Szenarien auf das KI-Chat-Panel zuzugreifen. Drücken Sie zweimal die Umschalttaste und suchen Sie nach „Registry“, um sie zu öffnen.

Klicken Sie im Menü des KI-Chat-Panels auf **Configure ACP agents** und fügen Sie folgende Konfiguration hinzu:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains ist beim Feld `command` streng – verwenden Sie stets einen **absoluten Pfad**, den Sie mit `which kimi` im Terminal ermitteln. Nach dem Speichern erscheint `Kimi Code CLI` in der Agent-Auswahl des KI-Chats.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## Kimi Code CLI in Paseo verwenden

[Paseo](https://paseo.sh/) ist ein selbst gehosteter Orchestrator, der Agent-CLIs von Ihrem Desktop, im Web und auf Mobilgeräten ausführt und überwacht. Die Verbindung zur Kimi Code CLI erfolgt über ACP – genauso wie bei einer IDE.

Wählen Sie **Kimi Code CLI** aus dem integrierten ACP-Anbieterkatalog von Paseo oder fügen Sie in `~/.paseo/config.json` einen benutzerdefinierten Anbieter hinzu:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

Der generische ACP-Adapter von Paseo steuert den Anmeldevorgang nicht selbst. Schließen Sie daher zuerst die Anmeldung im Terminal ab (siehe [Voraussetzungen](#prerequisites)) – andernfalls schlägt die Sitzungserstellung mit `Authentication required` fehl.

## Fehlerbehebung

- **Sitzung trennt sofort die Verbindung / IDE meldet „agent exited“**: meist ein falscher `command`-Pfad oder eine fehlende Anmeldung. Führen Sie zur Überprüfung zunächst `kimi acp` im Terminal aus – blockiert der Befehl in Erwartung von stdin, funktioniert die CLI selbst einwandfrei und das Problem liegt in der IDE-Konfiguration; beendet er sich sofort mit einem Fehler, folgen Sie der Fehlermeldung (meist müssen Sie `/login` ausführen).
- **IDE meldet „auth required“**: Die CLI hat kein verwendbares Authentifizierungs-Token. Beenden Sie die IDE, führen Sie `kimi` im Terminal aus, um die Anmeldung abzuschließen, und starten Sie die IDE anschließend neu.
- **MCP-Tools sind nicht sichtbar**: Prüfen Sie in der Capability-Tabelle von `kimi acp`, ob der in Ihrer IDE konfigurierte MCP-Transporttyp unterstützt wird. Der ACP-Adapter der Kimi Code CLI unterstützt derzeit die Transporte `http` und `stdio`; die Typen `sse` und `acp` werden stillschweigend verworfen, wobei eine Warnung ins Protokoll geschrieben wird.
