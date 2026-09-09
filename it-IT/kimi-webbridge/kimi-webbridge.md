---
title: "Introduzione all'Estensione del browser Kimi"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Introduzione all'Estensione del browser Kimi - Centro assistenza Kimi"
  description="L'Estensione del browser Kimi (precedentemente Kimi WebBridge) è un plugin per browser per agenti IA che apre pagine, fa clic sui pulsanti, compila moduli ed estrae informazioni."
  ogType="article"
/>

# Introduzione all'Estensione del browser Kimi

L'Estensione del browser Kimi (precedentemente Kimi WebBridge) è un plugin per browser progettato per gli agenti IA. Può aprire pagine, fare clic sui pulsanti, compilare moduli ed estrarre informazioni, consentendo all'agente di completare automaticamente le operazioni web più noiose come farebbe una persona. Puoi anche scomporre le pagine web che usi più spesso in CLI e trasformare le operazioni web registrate in Skill che l'agente può riutilizzare in qualsiasi momento.

## Due modalità d'uso

L'Estensione del browser Kimi offre due modalità d'uso:

- **Barra laterale del browser**: fai clic sull'icona di Kimi nella barra degli strumenti per aprire la barra laterale, quindi accedi con un account Kimi con abbonamento per chattare direttamente e lasciare che Kimi operi sulla pagina corrente per te.
- **Controllo remoto tramite un Agent locale**: lascia che agenti IA come Kimi Work o Claude Code pilotino l'estensione da remoto per automatizzare le attività web.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Tutorial dell'Estensione del browser Kimi",
    },
  ]}
/>

## Scarica e installa

### Passaggio 1: scarica l'Estensione del browser Kimi

Puoi scaricarla con i metodi seguenti:

**Metodo 1: installazione dallo store web**

- Per gli utenti Chrome: vai al [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Per gli utenti Edge: vai a [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Metodo 2: installazione manuale**

Se non riesci ad accedere allo store web, puoi usare il metodo di installazione manuale.

Segui poi i passaggi relativi al tuo browser:

**Chrome:**

1. Scarica il pacchetto dell'estensione dal [sito ufficiale dell'Estensione del browser Kimi](https://www.kimi.com/features/webbridge).
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

1. Scarica il pacchetto dell'estensione dal [sito ufficiale dell'Estensione del browser Kimi](https://www.kimi.com/features/webbridge).
2. Estrai il file scaricato
3. Apri `edge://extensions/` nella barra degli indirizzi
4. Attiva la "Modalità sviluppatore" nell'angolo in basso a sinistra
5. Fai clic su "Carica estensione non pacchettizzata"
6. Nel selettore di file, scegli la cartella WebBridge estratta

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Dopo l'installazione, dovresti vedere l'Estensione del browser Kimi nell'elenco delle estensioni del browser. Per un accesso più rapido, ti consigliamo di fissarla alla barra degli strumenti del browser.

### Passaggio 2: scegli il metodo di configurazione e completa l'impostazione

#### Metodo 1: utilizzo con Kimi Work Desktop

1. Scarica Kimi Work dal [sito ufficiale](https://www.kimi.com/products/kimi-work)

2. Una volta installato, puoi aprire la barra laterale dell'estensione e inviare istruzioni, ad esempio:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Usa l'Estensione del browser Kimi e apri Xiaohongshu, cerca i post sul rilascio di Kimi K3",
    },
  ]}
/>

#### Metodo 2: abbinamento con gli Agent locali

Supporta Claude Code, Codex, Cursor, Kimi Code, Hermes Claw e altri.

1. Invia direttamente all'Agent il comando seguente per installare automaticamente l'Estensione del browser Kimi. L'Agent eseguirà la configurazione appropriata in base al tuo sistema operativo.

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
      content: "Usa l'Estensione del browser Kimi apri X.com e cerca i post sul rilascio di Kimi K3",
    },
  ]}
/>
