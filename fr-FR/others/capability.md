---
title: "Que peut faire Kimi ?"
slug: "capability"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Que peut faire Kimi ? - Centre d’aide Kimi"
  description="FAQ sur les capacités de Kimi : recherche en ligne et utilisation d’un navigateur, contrôle du bureau d’un ordinateur (Kimi Computer Use), génération d’images, de vidéos et de voix, écriture de code, création de sites web, de PPT et de feuilles de calcul, traitement de fichiers, mémoire, prise en charge multilingue et longueur du contexte."
/>

# Que peut faire Kimi ?

## Kimi peut-il rechercher sur Internet et parcourir des pages web ?

Oui. Kimi détermine automatiquement si une question nécessite un accès en ligne et utilise ses outils de recherche intégrés pour récupérer des informations. Dans **Kimi Code** et **Kimi Work**, avec **WebBridge**, Kimi peut aussi utiliser un navigateur comme une personne : parcourir des pages, cliquer, faire défiler, extraire des données et accomplir des tâches web en plusieurs étapes.

## Kimi peut-il contrôler le bureau de mon ordinateur ?

Dans les conversations classiques et les tâches Agent, Kimi **n’a pas l’autorisation** de contrôler votre ordinateur. **Dans Kimi Work, vous pouvez choisir d’activer vous-même cette fonction**.

Dans Kimi Work, avec **Kimi Computer Use**, Kimi peut cliquer, saisir du texte, faire défiler, glisser-déposer et lire pour vous le contenu de l’interface d’une application ou des captures d’écran sur votre bureau. Par exemple : « Clique sur X pour moi », « Saisis … dans Y », « Vérifie l’état actuel de l’application Z » ou « Liste les applications actuellement ouvertes ». Toutes les opérations s’exécutent en arrière-plan : Kimi ne prendra donc pas le contrôle de votre souris et ne changera pas la fenêtre au premier plan.

**Installation** : dans Kimi Work, cliquez sur « Plugins », sélectionnez « Kimi Computer Use », puis cliquez sur Installer. Vous pouvez aussi envoyer l’instruction suivante en mode « Work » pour l’installer :

<CodePreview
  files={[
    {
      name: "install.txt",
      language: "text",
      content: "Veuillez installer kimi computer-use pour moi : curl -fsSL https://cdn.kimi.com/kimi-computer-use/latest/setup_macos.sh | bash",
    },
  ]}
/>

## Kimi peut-il générer des images, des vidéos et de la voix ?

Oui. Kimi peut générer des images, des vidéos et de l’audio grâce à des plugins de création. Avant de les utiliser, installez le plugin correspondant depuis la marketplace des plugins :

- **Génération d’images** : générez des images de haute qualité à partir de descriptions textuelles. Prise en charge des résolutions 1K/2K/4K, de plusieurs formats d’image, d’arrière-plans opaques ou transparents au choix, et de sorties JPG / PNG.
- **Génération de vidéos** : générez des vidéos de haute qualité à partir de descriptions textuelles, avec des images de référence facultatives. Prise en charge de formats tels que 16:9, 4:3, 1:1, 3:4, 9:16 et 21:9, pour des durées de 4 à 12 secondes.
- **Génération audio** : prise en charge de la synthèse vocale avec plusieurs voix en mandarin, ou de la génération d’effets sonores à partir de descriptions en anglais, pour des durées de 0,5 à 22 secondes.

## Kimi peut-il écrire du code, créer des sites web, des PPT et des feuilles de calcul ?

Oui. En tant qu’agent IA capable d’exécuter des tâches de manière autonome, Kimi prend en charge la création de sites web, la création de PPT, le traitement de documents et de feuilles de calcul, Deep Research, et bien plus encore.

## Quels fichiers Kimi peut-il traiter ?

Kimi prend en charge les formats courants tels que PDF, Word, Excel, PPT, images, TXT et vidéo. **Chaque fichier doit faire au maximum 100 MB, et vous pouvez téléverser jusqu’à 50 fichiers à la fois**.

## Kimi a-t-il une mémoire ?

Oui. La [Mémoire](/features/memory-space) enregistre automatiquement les informations importantes afin que Kimi vous comprenne mieux. Si vous avez besoin de séparer la mémoire et les ressources par projet, utilisez la fonctionnalité [Projet](/features/project).

## Kimi prend-il en charge plusieurs langues ?

Oui. Vous pouvez changer la langue de l’interface dans **« Paramètres » → « Général » → « Langue »**. Les langues actuellement prises en charge sont l’allemand, le russe, le français, le chinois traditionnel, le coréen, le portugais, le thaï, le turc, l’espagnol, l’italien, l’indonésien, l’anglais et le vietnamien. K2.6 et K3 prennent tous deux en charge les conversations, la recherche d’informations et la création multilingues.

## Quelle quantité de contenu Kimi peut-il traiter en une seule fois ?

K2.6 dispose d’un contexte à tour unique d’environ **128K tokens (soit environ 50 000 à 60 000 caractères chinois)**. Pour les documents très longs, **K3 offre un contexte de 1 million de tokens** (nécessite l’abonnement le plus élevé). Pour en savoir plus, consultez [Que faire lorsqu’une conversation dépasse 200 000 caractères chinois ?](/others/chat-issues).
