---
title: "FAQ"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="FAQ Kimi WebBridge - Centre d'aide Kimi"
  description="Questions fréquentes sur l'installation, la connexion et l'utilisation de Kimi WebBridge avec plusieurs navigateurs et des Local Agents."
  ogType="article"
/>

# FAQ

## Installation et configuration

### Le message « Impossible d'ajouter des applications depuis ce site web » s'affiche lors de l'installation de l'extension ?

Veillez à effectuer l'installation depuis la boutique en ligne officielle (Chrome Web Store ou Edge Add-ons). Si vous ne pouvez pas y accéder, utilisez la méthode d'installation manuelle proposée sur le site officiel.

### Rien ne se passe après l'exécution de la commande de connexion ?

Vérifiez votre connexion Internet. Si le problème persiste, redémarrez Kimi Claw Desktop et exécutez à nouveau la commande.

### Puis-je l'utiliser sur plusieurs ordinateurs ?

Oui, mais chaque ordinateur doit être installé et configuré séparément.

### Je ne trouve pas Kimi Claw Desktop ?

Kimi Claw Desktop est un Kimi Claw déployé sur votre ordinateur local. Ouvrez Kimi Desktop, repérez Kimi Claw dans la barre latérale gauche, créez un nouveau Claw, puis sélectionnez « Déployer sur mon ordinateur ».

## Connexion et utilisation

### L'état de l'extension indique « Déconnecté » ?

Vérifiez que l'extension de navigateur Kimi WebBridge est correctement installée, puis suivez les étapes correspondant à votre méthode de configuration :

- **Kimi Desktop** : redémarrez Kimi Desktop et réessayez

- **Autres Local Agents** : renvoyez la commande suivante dans votre Agent, puis redémarrez l'Agent une fois la commande exécutée :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### Sous Windows, l'installation de WebBridge échoue avec l'erreur « Échec de l'installation »

Kimi WebBridge prend en charge le système d'exploitation Windows, et la commande d'installation peut s'exécuter dans un environnement Linux :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### WebBridge affiche un avertissement de compatibilité Chrome après l'installation. Qu'est-ce que cela signifie ?

Si WebBridge ouvre les pages normalement, mais que des actions telles que `snapshot`, `evaluate`, `screenshot` ou `click` échouent systématiquement, la cause la plus fréquente est **un conflit avec d'autres extensions de navigateur**.

C'est particulièrement courant avec les outils de scraping, les extensions d'assistance aux sites web, les extensions d'enregistrement d'écran et les extensions d'assistant IA.

Nous recommandons les étapes suivantes pour diagnostiquer le problème :

1. Ouvrez la page de gestion des extensions de votre navigateur
2. Désactivez temporairement les autres extensions
3. Ne conservez que Kimi WebBridge activé
4. Redémarrez le navigateur et réessayez
5. Si WebBridge fonctionne normalement, réactivez les autres extensions une par une pour identifier celle qui pose problème


### WebBridge risque-t-il de divulguer mes informations de connexion ?

Non. Toute l'exécution se déroule localement sur votre appareil : les états de connexion et le contenu des pages web ne quittent jamais votre machine. L'Agent ne peut accéder qu'aux résultats d'opération que vous autorisez.

### Pourquoi les opérations échouent-elles ?

Des structures de page complexes ou un chargement dynamique peuvent faire échouer les opérations. Essayez de simplifier vos instructions, ou demandez d'abord à l'Agent de faire une capture d'écran pour confirmer l'état de la page avant d'exécuter l'action.

### Quels navigateurs sont pris en charge ?

Actuellement, Chrome et Edge sont pris en charge. Nous recommandons d'utiliser la dernière version pour une expérience optimale.

## Utilisation avec d'autres agents

### Quels autres Agents sont pris en charge ?

WebBridge prend en charge tous les Local Agents, notamment Claude Code, Codex, Cursor, Kimi Code, Hermes Claw, et bien d'autres.

### La configuration est-elle la même pour les différents Agents ?

La commande de configuration est identique pour tous : il suffit d'exécuter une seule commande curl pour l'installation. Reportez-vous à la configuration des Skills de chaque Agent pour plus de détails.
