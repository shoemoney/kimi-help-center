---
title: "Présentation de l'Extension de navigateur Kimi"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Présentation de l'Extension de navigateur Kimi - Centre d'aide Kimi"
  description="L'Extension de navigateur Kimi (anciennement Kimi WebBridge) est un plugin de navigateur pour agents IA qui ouvre des pages, clique sur des boutons, remplit des formulaires et extrait des informations."
  ogType="article"
/>

# Présentation de l'Extension de navigateur Kimi

L'Extension de navigateur Kimi (anciennement Kimi WebBridge) est un plugin de navigateur conçu pour les agents IA. Elle peut ouvrir des pages, cliquer sur des boutons, remplir des formulaires et extraire des informations, permettant à l'agent d'accomplir automatiquement les tâches web fastidieuses comme le ferait un humain. Vous pouvez également décomposer vos pages web fréquentes en CLI et transformer les opérations web enregistrées en Skills que l'agent peut réutiliser à tout moment.

## Deux façons de l'utiliser

L'Extension de navigateur Kimi offre deux façons de l'utiliser :

- **Barre latérale du navigateur** : cliquez sur l'icône Kimi dans la barre d'outils pour ouvrir la barre latérale, puis connectez-vous avec votre compte Kimi pour discuter directement et laisser Kimi opérer la page actuelle pour vous.
- **Contrôle à distance par un Agent local** : laissez des agents IA comme Kimi Work ou Claude Code piloter l'extension à distance pour automatiser les tâches web.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Tutoriel de l'Extension de navigateur Kimi",
    },
  ]}
/>

## Télécharger et installer

### Étape 1 : télécharger l'Extension de navigateur Kimi

Vous pouvez la télécharger de plusieurs façons :

**Méthode 1 : installation depuis la boutique en ligne**

- Pour les utilisateurs de Chrome : rendez-vous sur le [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Pour les utilisateurs d'Edge : rendez-vous sur [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Méthode 2 : installation manuelle**

Si vous ne pouvez pas accéder à la boutique en ligne, optez pour l'installation manuelle.

Suivez ensuite les étapes correspondant à votre navigateur :

**Chrome :**

1. Téléchargez le paquet de l'extension depuis le [site officiel de l'Extension de navigateur Kimi](https://www.kimi.com/features/webbridge).
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

1. Téléchargez le paquet de l'extension depuis le [site officiel de l'Extension de navigateur Kimi](https://www.kimi.com/features/webbridge).
2. Décompressez le fichier téléchargé
3. Ouvrez `edge://extensions/` dans la barre d'adresse
4. Activez le « mode développeur » dans le coin inférieur gauche
5. Cliquez sur « Charger l'extension non empaquetée »
6. Dans le sélecteur de fichiers, choisissez le dossier WebBridge décompressé

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Une fois l'installation terminée, l'Extension de navigateur Kimi devrait apparaître dans la liste des extensions de votre navigateur. Pour y accéder plus facilement, nous vous recommandons de l'épingler à la barre d'outils.

### Étape 2 : choisir votre méthode d'installation et terminer la configuration

**Méthode 1 : utilisation avec Kimi Work Desktop**

1. Téléchargez Kimi Work depuis le [site officiel](https://www.kimi.com/products/kimi-work)

2. Ouvrez l'application de bureau Kimi Work téléchargée et passez en mode Work. Trouvez et installez l'Extension de navigateur Kimi dans la place de marché des plugins. Essayez ensuite d'envoyer l'instruction ci-dessous dans la barre latérale du navigateur ou dans Kimi Work :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Utilise l'Extension de navigateur Kimi et ouvre Xiaohongshu, recherche des publications sur la sortie de Kimi K3",
    },
  ]}
/>

**Méthode 2 : associer à des agents locaux**

Compatible avec Claude Code, Codex, Cursor, Kimi Code, Hermes Claw, et bien d'autres.

1. Envoyez directement la commande suivante dans l'agent pour installer automatiquement l'Extension de navigateur Kimi. L'agent lancera la configuration adaptée à votre système d'exploitation.

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
      content: "Utilise l'Extension de navigateur Kimi pour ouvrir X.com et rechercher des publications sur la sortie de Kimi K3",
    },
  ]}
/>
