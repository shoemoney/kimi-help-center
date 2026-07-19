---
title: "FAQ"
slug: "kimi-work-faq"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="FAQ Kimi Work - Centre d’aide Kimi"
  description="FAQ Kimi Work : différences avec la version web, contrôle des autorisations lors de l’accès aux fichiers locaux, possibilités de l’automatisation du navigateur WebBridge et fonctionnement des tâches planifiées."
/>

# FAQ Kimi Work

## Quelle est la différence entre Kimi Work et la version web ?

Si l’app web Kimi est idéale pour discuter rapidement et poser des questions, Kimi Work est un agent local conçu pour les flux de travail approfondis. Il lit et traite vos dossiers locaux, navigue sur le web de manière autonome via WebBridge, exécute du code Python en arrière-plan et lance des tâches planifiées. C’est un collaborateur numérique intégré au niveau du système.

## Comment Kimi Work protège-t-il ma confidentialité lorsqu’il accède à des fichiers locaux ?

Vous gardez la maîtrise totale de vos fichiers. Kimi Work propose un contrôle des autorisations, et vous choisissez le mode d’autorisation :

- **Demander l’autorisation** : demande une autorisation avant d’agir — Kimi sollicite votre accord explicite avant de modifier, remplacer ou exécuter du code dans vos fichiers locaux ;
- **Tout autoriser** : agit directement sans demander d’autorisation.

Lorsque vous choisissez « Demander l’autorisation », rien ne se produit sans votre accord.

## Que peut faire exactement WebBridge (automatisation du navigateur) pour moi ?

WebBridge permet à Kimi d’utiliser un navigateur comme le ferait une personne. Vous pouvez lui demander de consulter les dernières actualités sur un site web et de les résumer, ou encore de récupérer des données boursières historiques dans votre Excel local. Il clique, fait défiler les pages et extrait les données de manière autonome, vous épargnant des heures de travail manuel.

## Que puis-je faire avec les tâches planifiées ? S’exécutent-elles si mon ordinateur est en veille ?

Le planificateur Cron intégré prend en charge les appels à des agents LLM, l’exécution de scripts Python/Shell, et bien plus encore. Vous pouvez déclencher des tâches chaque jour, chaque heure ou selon des conditions. Pour garantir leur exécution sans interruption pendant la nuit, il vous suffit d’activer l’option « Garder l’ordinateur éveillé » dans vos paramètres.
