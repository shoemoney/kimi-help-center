---
title: "Einführung in Kimi WebBridge"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Einführung in Kimi WebBridge - Kimi Hilfecenter"
  description="Kimi WebBridge ist eine Browser-Erweiterung für KI-Agenten. Sie läuft direkt in Ihrem Chrome- oder Edge-Browser und nutzt Ihre bestehenden Login-Sitzungen, damit Agenten mit Webseiten interagieren können wie ein Mensch."
  ogType="article"
/>

# Einführung in Kimi WebBridge

Kimi WebBridge ist eine Browser-Erweiterung für KI-Agenten. Anders als cloudbasierte Lösungen zur Browser-Automatisierung läuft Kimi WebBridge direkt in Ihrem Chrome- oder Edge-Browser und nutzt automatisch Ihre bestehenden Login-Sitzungen, damit Agenten mit Webseiten interagieren können wie ein Mensch.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi WebBridge-Tutorial",
    },
  ]}
/>

<Callout type="tip">
Für das beste Erlebnis bei der Browser-Automatisierung empfehlen wir, Kimi WebBridge auf Ihrem primären Arbeitsrechner einzurichten.
</Callout>

<Callout type="info">
WebBridge funktioniert über einen lokalen Bridge-Dienst und eine Browser-Erweiterung. Die gesamte Ausführung erfolgt lokal auf Ihrem Gerät – Login-Status und Webseiteninhalte verlassen Ihren Rechner nie.
</Callout>

<Frames
  src="./images/introduction.png"
  alt="WebBridge Introduction"
/>

## Schritt 1: Kimi WebBridge-Erweiterung herunterladen

Sie können sie auf folgende Weise herunterladen:

**Methode 1: Aus dem Web Store installieren**

- Für Chrome-Nutzer: Gehen Sie zum [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Für Edge-Nutzer: Gehen Sie zu [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Methode 2: Manuelle Installation**

Wenn Sie nicht auf den Web Store zugreifen können, nutzen Sie die manuelle Installationsmethode.

Folgen Sie dann den Schritten für Ihren Browser:

**Chrome:**

1. Laden Sie das Erweiterungspaket von der [offiziellen Kimi WebBridge-Website](https://www.kimi.com/features/webbridge) herunter.
2. Entpacken Sie die heruntergeladene Datei
3. Öffnen Sie `chrome://extensions/` in der Adresszeile
4. Aktivieren Sie den „Entwicklermodus“ oben rechts
5. Klicken Sie auf „Entpackte Erweiterung laden“
6. Wählen Sie im Dateiauswahldialog den entpackten WebBridge-Ordner aus

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. Laden Sie das Erweiterungspaket von der [offiziellen Kimi WebBridge-Website](https://www.kimi.com/features/webbridge) herunter.
2. Entpacken Sie die heruntergeladene Datei
3. Öffnen Sie `edge://extensions/` in der Adresszeile
4. Aktivieren Sie den „Entwicklermodus“ unten links
5. Klicken Sie auf „Entpackte Erweiterung laden“
6. Wählen Sie im Dateiauswahldialog den entpackten WebBridge-Ordner aus

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Nach der Installation sollte WebBridge in der Erweiterungsliste Ihres Browsers erscheinen. Für einen schnelleren Zugriff empfehlen wir, es an die Browser-Symbolleiste anzuheften.

## Schritt 2: Einrichtungsmethode wählen und Konfiguration abschließen

### Methode 1: Verwendung mit Kimi Work Desktop

1. Laden Sie Kimi Work von der [offiziellen Website](https://www.kimi.com/zh-cn/products/kimi-work) herunter

2. Nach der Installation können Sie in Kimi Work Anweisungen erteilen, zum Beispiel:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Use Kimi Webbridge and open Xiaohongshu, search for posts about the Kimi K2.6 release",
    },
  ]}
/>

### Methode 2: Kopplung mit lokalen Agenten

Unterstützt Claude Code, Codex, Cursor, Kimi Code, Hermes Claw und mehr.

1. Senden Sie den folgenden Befehl direkt an den Agenten, um WebBridge automatisch zu installieren. Der Agent führt die passende Einrichtung je nach Ihrem Betriebssystem aus.

Wenn Sie macOS verwenden, nutzen Sie den folgenden Befehl:

<CodePreview
  files={[
    {
      name: "macos.sh",
      language: "bash",
      content:
        "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

Wenn Sie Windows verwenden, nutzen Sie den folgenden Befehl:

<CodePreview
  files={[
    {
      name: "windows.ps1",
      language: "powershell",
      content:
        "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

2. Loslegen

Sobald die Erweiterung verbunden ist, können Sie Anweisungen erteilen.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Use Kimi WebBridge open X.com and search for posts about the Kimi K2.6 release",
    },
  ]}
/>
