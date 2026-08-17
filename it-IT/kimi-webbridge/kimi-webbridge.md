---
title: "Introduzione a Kimi WebBridge"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Introduzione a Kimi WebBridge - Centro assistenza Kimi"
  description="Kimi WebBridge è un'estensione per browser pensata per gli AI Agent. Funziona direttamente nel tuo browser Chrome o Edge e sfrutta le sessioni di accesso già attive per consentire agli Agent di interagire con le pagine web come farebbe una persona."
  ogType="article"
/>

# Introduzione a Kimi WebBridge

Kimi WebBridge è un'estensione per browser pensata per gli AI Agent. A differenza delle soluzioni di automazione del browser basate sul cloud, Kimi WebBridge funziona direttamente nel tuo browser Chrome o Edge e sfrutta automaticamente le sessioni di accesso già attive per consentire agli Agent di interagire con le pagine web come farebbe una persona.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Tutorial di Kimi WebBridge",
    },
  ]}
/>

<Callout type="tip">
Ti consigliamo di installare Kimi WebBridge sul computer di lavoro principale per ottenere la migliore esperienza di automazione del browser.
</Callout>

<Callout type="info">
WebBridge funziona tramite un servizio bridge locale e un'estensione per browser. Tutta l'esecuzione avviene localmente sul tuo dispositivo: gli stati di accesso e i contenuti delle pagine web non lasciano mai la tua macchina.
</Callout>

<Frames
  src="./images/introduction.png"
  alt="WebBridge Introduction"
/>

## Passaggio 1: scarica l'estensione Kimi WebBridge

Puoi scaricarla con i metodi seguenti:

**Metodo 1: installazione dallo store web**

- Per gli utenti Chrome: vai al [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Per gli utenti Edge: vai a [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Metodo 2: installazione manuale**

Se non riesci ad accedere allo store web, puoi usare il metodo di installazione manuale.

Segui poi i passaggi relativi al tuo browser:

**Chrome:**

1. Scarica il pacchetto dell'estensione dal [sito ufficiale di Kimi WebBridge](https://www.kimi.com/features/webbridge).
2. Estrai il file scaricato
3. Apri `chrome://extensions/` nella barra degli indirizzi
4. Attiva la "Modalità sviluppatore" nell'angolo in alto a destra
5. Fai clic su "Carica estensione non pacchettizzata"
6. Nel selettore di file, scegli la cartella WebBridge estratta

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. Scarica il pacchetto dell'estensione dal [sito ufficiale di Kimi WebBridge](https://www.kimi.com/features/webbridge).
2. Estrai il file scaricato
3. Apri `edge://extensions/` nella barra degli indirizzi
4. Attiva la "Modalità sviluppatore" nell'angolo in basso a sinistra
5. Fai clic su "Carica estensione non pacchettizzata"
6. Nel selettore di file, scegli la cartella WebBridge estratta

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Dopo l'installazione, dovresti vedere WebBridge nell'elenco delle estensioni del browser. Per un accesso più rapido, ti consigliamo di fissarla alla barra degli strumenti del browser.

## Passaggio 2: scegli il metodo di configurazione e completa l'impostazione

### Metodo 1: utilizzo con Kimi Work Desktop

1. Scarica Kimi Work dal <a href="https://www.kimi.com/products/kimi-work">sito ufficiale</a>

2. Una volta installato, puoi inviare istruzioni in Kimi Work, ad esempio:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Usa Kimi Webbridge e apri Xiaohongshu, cerca i post sul rilascio di Kimi K2.6",
    },
  ]}
/>

### Metodo 2: abbinamento con gli Agent locali

Supporta Claude Code, Codex, Cursor, Kimi Code, Hermes Claw e altri.

1. Invia direttamente all'Agent il comando seguente per installare automaticamente WebBridge. L'Agent eseguirà la configurazione appropriata in base al tuo sistema operativo.

Se usi macOS, utilizza il comando qui sotto:

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

Se usi Windows, utilizza il comando qui sotto:

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

2. Inizia a usarlo

Una volta collegata l'estensione, puoi inviare istruzioni.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Usa Kimi WebBridge apri X.com e cerca i post sul rilascio di Kimi K2.6",
    },
  ]}
/>
