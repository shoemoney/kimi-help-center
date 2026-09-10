---
title: "Einführung in Kimi Browsererweiterung"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Einführung in Kimi Browsererweiterung - Kimi Hilfecenter"
  description="Die Kimi Browsererweiterung (ehemals Kimi WebBridge) ist ein Browser-Plugin für KI-Agenten, das Webseiten öffnet, Schaltflächen klickt, Formulare ausfüllt und Informationen extrahiert."
  ogType="article"
/>

# Einführung in Kimi Browsererweiterung

Die Kimi Browsererweiterung (ehemals Kimi WebBridge) ist ein Browser-Plugin für KI-Agenten. Sie öffnet Webseiten, klickt Schaltflächen, füllt Formulare aus und extrahiert Informationen, damit der Agent lästige Webvorgänge wie ein Mensch automatisch erledigt. Sie können häufig genutzte Webseiten außerdem in CLIs zerlegen und aufgezeichnete Webvorgänge in Skills umwandeln, die der Agent jederzeit wiederverwenden kann.

## Zwei Nutzungsarten

Kimi Browsererweiterung bietet zwei Nutzungsarten:

- **Browser-Seitenleiste**: Klicken Sie auf das Kimi-Symbol in der Symbolleiste, um die Seitenleiste zu öffnen, und melden Sie sich mit einer Kimi-Mitgliedschaft an, um direkt zu chatten und Kimi die aktuelle Seite für Sie bedienen zu lassen.
- **Fernsteuerung durch einen lokalen Agenten**: Lassen Sie KI-Agenten wie Kimi Work oder Claude Code die Erweiterung fernsteuern, um Webaufgaben zu automatisieren.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi Browsererweiterung-Tutorial",
    },
  ]}
/>

## Herunterladen und installieren

### Schritt 1: Kimi Browsererweiterung herunterladen

Sie können sie auf folgende Weise herunterladen:

**Methode 1: Aus dem Web Store installieren**

- Für Chrome-Nutzer: Gehen Sie zum [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Für Edge-Nutzer: Gehen Sie zu [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Methode 2: Manuelle Installation**

Wenn Sie nicht auf den Web Store zugreifen können, nutzen Sie die manuelle Installationsmethode.

Folgen Sie dann den Schritten für Ihren Browser:

**Chrome:**

1. Laden Sie das Erweiterungspaket von der [offiziellen Website der Kimi Browsererweiterung](https://www.kimi.com/features/webbridge) herunter.
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

1. Laden Sie das Erweiterungspaket von der [offiziellen Website der Kimi Browsererweiterung](https://www.kimi.com/features/webbridge) herunter.
2. Entpacken Sie die heruntergeladene Datei
3. Öffnen Sie `edge://extensions/` in der Adresszeile
4. Aktivieren Sie den „Entwicklermodus“ unten links
5. Klicken Sie auf „Entpackte Erweiterung laden“
6. Wählen Sie im Dateiauswahldialog den entpackten WebBridge-Ordner aus

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Nach der Installation sollte Kimi Browsererweiterung in der Erweiterungsliste Ihres Browsers erscheinen. Für einen schnelleren Zugriff empfehlen wir, es an die Browser-Symbolleiste anzuheften.

### Schritt 2: Einrichtungsmethode wählen und Konfiguration abschließen

**Methode 1: Verwendung mit Kimi Work Desktop**

1. Laden Sie Kimi Work von der [offiziellen Website](https://www.kimi.com/products/kimi-work) herunter

2. Öffnen Sie die heruntergeladene Kimi Work Desktop-App und wechseln Sie in den Work mode. Finden und installieren Sie Kimi Browsererweiterung im Plugin-Marktplatz. Versuchen Sie dann, die folgende Anweisung in der Browser-Seitenleiste oder in Kimi Work zu senden:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Verwende Kimi Browsererweiterung, um Xiaohongshu zu öffnen, und suche nach Beiträgen über die Veröffentlichung von Kimi K3",
    },
  ]}
/>

**Methode 2: Kopplung mit lokalen Agenten**

Unterstützt Claude Code, Codex, Cursor, Kimi Code, Hermes Claw und mehr.

1. Senden Sie den folgenden Befehl direkt an den Agenten, um Kimi Browsererweiterung automatisch zu installieren. Der Agent führt die passende Einrichtung je nach Ihrem Betriebssystem aus.

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
      content: "Verwende Kimi Browsererweiterung, um X.com zu öffnen, und suche nach Beiträgen über die Veröffentlichung von Kimi K3",
    },
  ]}
/>
