---
title: "FAQ"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge FAQ - Kimi Help Center"
  description="Häufig gestellte Fragen zu Installation, Verbindung und Nutzung von Kimi WebBridge mit verschiedenen Browsern und Local Agents."
  ogType="article"
/>

# FAQ

## Installation und Konfiguration

### Beim Installieren der Erweiterung erscheint „Cannot add apps from this website"?

Bitte installieren Sie unbedingt über den offiziellen Web Store (Chrome Web Store oder Edge Add-ons). Falls Sie auf den Web Store nicht zugreifen können, nutzen Sie die manuelle Installationsmethode, die auf der offiziellen Website angeboten wird.

### Nach Ausführen des Verbindungsbefehls passiert nichts?

Bitte überprüfen Sie Ihre Internetverbindung. Falls das Problem weiterhin besteht, starten Sie Kimi Claw Desktop neu und führen Sie den Befehl erneut aus.

### Kann ich es auf mehreren Computern verwenden?

Ja, aber jeder Computer muss separat installiert und konfiguriert werden.

### Ich kann Kimi Claw Desktop nicht finden?

Kimi Claw Desktop ist ein Kimi Claw, der auf Ihrem lokalen Computer bereitgestellt wird. Öffnen Sie Kimi Desktop, suchen Sie Kimi Claw in der linken Seitenleiste, erstellen Sie einen neuen Claw und wählen Sie „Auf meinem Computer bereitstellen".

## Verbindung und Nutzung

### Der Status der Erweiterung zeigt „Disconnected" an?

Bitte vergewissern Sie sich, dass die Kimi WebBridge-Browsererweiterung erfolgreich installiert ist, und folgen Sie dann den Schritten für Ihre Einrichtungsmethode:

- **Kimi Desktop**: Starten Sie Kimi Desktop neu und versuchen Sie es erneut

- **Andere Local Agents**: Senden Sie den folgenden Befehl in Ihrem Agent erneut und starten Sie den Agent nach der Ausführung neu:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### Unter Windows schlägt die Installation von WebBridge mit dem Fehler „Installation failed" fehl

Kimi WebBridge unterstützt das Betriebssystem Windows, und der Installationsbefehl kann in einer Linux-Umgebung ausgeführt werden:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### Nach der Installation zeigt WebBridge eine Chrome-Kompatibilitätswarnung an. Was bedeutet das?

Wenn WebBridge Seiten zwar normal öffnen kann, Aktionen wie `snapshot`, `evaluate`, `screenshot` oder `click` jedoch immer wieder fehlschlagen, liegt die häufigere Ursache in **einem Konflikt mit anderen Browser-Erweiterungen**.

Besonders häufig tritt dies bei Scraping-Tools, Website-Hilfserweiterungen, Bildschirmaufnahme-Erweiterungen und KI-Assistenten-Erweiterungen auf.

Wir empfehlen folgende Schritte zur Fehlersuche:

1. Öffnen Sie die Verwaltungsseite für Erweiterungen Ihres Browsers
2. Deaktivieren Sie andere Erweiterungen vorübergehend
3. Lassen Sie nur Kimi WebBridge aktiviert
4. Starten Sie den Browser neu und versuchen Sie es erneut
5. Wenn WebBridge normal funktioniert, aktivieren Sie die anderen Erweiterungen nacheinander wieder, um die konfliktverursachende Erweiterung zu ermitteln


### Gibt WebBridge meine Anmeldedaten preis?

Nein. Sämtliche Ausführung erfolgt lokal auf Ihrem Gerät – Anmeldestatus und Seiteninhalte verlassen Ihren Rechner nie. Der Agent kann nur auf die von Ihnen autorisierten Ergebnisse der Operationen zugreifen.

### Warum schlagen Operationen fehl?

Komplexe Seitenstrukturen oder dynamisches Laden können dazu führen, dass Operationen fehlschlagen. Vereinfachen Sie Ihre Anweisungen oder bitten Sie den Agent, zunächst einen Screenshot zu erstellen, um den Seitenzustand vor der Ausführung zu bestätigen.

### Welche Browser werden unterstützt?

Derzeit werden Chrome und Edge unterstützt. Für das beste Erlebnis empfehlen wir die Verwendung der neuesten Version.

## Zusammenarbeit mit anderen Agents

### Welche anderen Agents werden unterstützt?

WebBridge unterstützt alle Local Agents, darunter Claude Code, Codex, Cursor, Kimi Code, Hermers Claw und weitere.

### Ist die Konfiguration für verschiedene Agents identisch?

Der Einrichtungsbefehl ist für alle gleich – führen Sie einen einzigen curl-Befehl aus, um zu installieren. Einzelheiten finden Sie in der Skill-Konfiguration des jeweiligen Agents.
