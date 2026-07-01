---
title: "Présentation de Kimi WebBridge"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Présentation de Kimi WebBridge - Centre d'aide Kimi"
  description="Kimi WebBridge est une extension de navigateur conçue pour les agents IA. Elle s'exécute directement dans votre navigateur Chrome ou Edge et exploite vos sessions de connexion existantes pour permettre aux agents d'interagir avec les pages web comme le ferait un humain."
  ogType="article"
/>

# Présentation de Kimi WebBridge

Kimi WebBridge est une extension de navigateur conçue pour les agents IA. Contrairement aux solutions d'automatisation de navigateur basées sur le cloud, Kimi WebBridge s'exécute directement dans votre navigateur Chrome ou Edge et exploite automatiquement vos sessions de connexion existantes pour permettre aux agents d'interagir avec les pages web comme le ferait un humain.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Tutoriel Kimi WebBridge",
    },
  ]}
/>

<Callout type="tip">
Pour profiter de la meilleure expérience d'automatisation du navigateur, nous vous recommandons d'installer Kimi WebBridge sur votre ordinateur de travail principal.
</Callout>

<Callout type="info">
WebBridge fonctionne via un service de pont local et une extension de navigateur. Toute l'exécution se déroule localement sur votre appareil : vos états de connexion et le contenu des pages web ne quittent jamais votre machine.
</Callout>

<Frames
  src="./images/introduction.png"
  alt="Présentation de WebBridge"
/>

## Étape 1 : télécharger l'extension Kimi WebBridge

Vous pouvez la télécharger de plusieurs façons :

**Méthode 1 : installation depuis la boutique en ligne**

- Pour les utilisateurs de Chrome : rendez-vous sur le [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Pour les utilisateurs d'Edge : rendez-vous sur [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Méthode 2 : installation manuelle**

Si vous ne pouvez pas accéder à la boutique en ligne, optez pour l'installation manuelle.

Suivez ensuite les étapes correspondant à votre navigateur :

**Chrome :**

1. Téléchargez le paquet de l'extension depuis le [site officiel de Kimi WebBridge](https://www.kimi.com/features/webbridge).
2. Décompressez le fichier téléchargé
3. Ouvrez `chrome://extensions/` dans la barre d'adresse
4. Activez le « mode développeur » dans le coin supérieur droit
5. Cliquez sur « Charger l'extension non empaquetée »
6. Dans le sélecteur de fichiers, choisissez le dossier WebBridge décompressé

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge :**

1. Téléchargez le paquet de l'extension depuis le [site officiel de Kimi WebBridge](https://www.kimi.com/features/webbridge).
2. Décompressez le fichier téléchargé
3. Ouvrez `edge://extensions/` dans la barre d'adresse
4. Activez le « mode développeur » dans le coin inférieur gauche
5. Cliquez sur « Charger l'extension non empaquetée »
6. Dans le sélecteur de fichiers, choisissez le dossier WebBridge décompressé

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Une fois l'installation terminée, WebBridge devrait apparaître dans la liste des extensions de votre navigateur. Pour y accéder plus facilement, nous vous recommandons de l'épingler à la barre d'outils.

## Étape 2 : choisir votre méthode d'installation et terminer la configuration

### Méthode 1 : utilisation avec Kimi Work Desktop

1. Téléchargez Kimi Work depuis le [site officiel](https://www.kimi.com/zh-cn/products/kimi-work)

2. Une fois l'installation terminée, vous pouvez envoyer des instructions dans Kimi Work, par exemple :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Utilise Kimi Webbridge et ouvre Xiaohongshu, recherche des publications sur la sortie de Kimi K2.6",
    },
  ]}
/>

### Méthode 2 : associer à des agents locaux

Compatible avec Claude Code, Codex, Cursor, Kimi Code, Hermes Claw, et bien d'autres.

1. Envoyez directement la commande suivante dans l'agent pour installer automatiquement WebBridge. L'agent lancera la configuration adaptée à votre système d'exploitation.

Si vous êtes un utilisateur de macOS, exécutez la commande ci-dessous :

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

Si vous êtes un utilisateur de Windows, exécutez la commande ci-dessous :

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

2. Commencer à utiliser

Une fois l'extension connectée, vous pouvez envoyer des instructions.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Utilise Kimi WebBridge pour ouvrir X.com et rechercher des publications sur la sortie de Kimi K2.6",
    },
  ]}
/>
