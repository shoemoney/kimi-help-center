---
title: "FAQ"
slug: "kimi-work-faq"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="FAQ Kimi Work - Centre d’aide Kimi"
  description="FAQ Kimi Work : différences avec la version web, contrôle des autorisations lors de l’accès aux fichiers locaux, possibilités offertes par l’automatisation du navigateur avec WebBridge et fonctionnement des tâches planifiées."
/>

# FAQ Kimi Work

## Quelle est la différence entre Kimi Work et la version web ?

L’application web Kimi est idéale pour les échanges rapides et les requêtes ponctuelles, tandis que Kimi Work est un agent local conçu pour des processus de travail plus approfondis. Il lit et traite vos dossiers locaux, navigue sur le web de façon autonome via WebBridge, exécute du code Python en arrière-plan et lance des tâches planifiées. C’est un collaborateur numérique à l’échelle du système.

## Comment Kimi Work protège-t-il ma confidentialité lorsqu’il accède à mes fichiers locaux ?

Vous gardez un contrôle total sur vos fichiers. Kimi Work propose un contrôle des autorisations à trois niveaux, et c’est vous qui choisissez le mode d’accès :

- **Par défaut** : les opérations courantes s’exécutent automatiquement — Kimi vous invite à donner votre accord explicite avant les opérations sensibles comme modifier, remplacer ou exécuter du code dans vos fichiers locaux ;
- **Autorisation manuelle** : demander une autorisation avant d’agir ;
- **Tout autoriser** : exécuter directement les actions sans demander d’autorisation.

Lorsque vous choisissez « Autorisation manuelle », rien ne se passe sans votre consentement.

<Callout type="exclamation">
Lorsque l’autorisation « Tout autoriser » (entièrement automatique) est activée, l’IA lit et écrit directement des fichiers, exécute du code et modifie la configuration du système, et traite automatiquement les étapes qui nécessiteraient autrement votre décision. Cela peut entraîner :

- l’écrasement, la suppression par erreur ou la corruption de fichiers ;
- la modification de la configuration du système, provoquant des dysfonctionnements logiciels ;
- des modifications du chiffrement du disque, des partitions ou du firmware, rendant l’appareil limité ou incapable de démarrer.

Certaines opérations sont irréversibles et les données peuvent être définitivement perdues sans possibilité de récupération. Veuillez prendre connaissance des risques de ce mode, l’utiliser avec prudence et sauvegarder vos données.

L’activation de l’autorisation « Tout autoriser » (entièrement automatique) vaut reconnaissance et acceptation des risques ci-dessus et autorisation donnée à l’IA d’exécuter les opérations concernées de manière autonome ; les résultats des opérations effectuées sur la base de votre autorisation sont à votre charge.
</Callout>

## Que peut faire WebBridge (automatisation du navigateur) pour moi, concrètement ?

WebBridge permet à Kimi d’utiliser un navigateur comme le ferait une personne. Vous pouvez lui demander de consulter les dernières actualités sur un site et d’en faire la synthèse, ou encore d’extraire des données boursières historiques vers votre fichier Excel local. Il clique, fait défiler les pages et extrait les données de façon autonome, vous évitant des heures de travail manuel.

## Que puis-je faire avec les tâches planifiées ? S’exécutent-elles si mon ordinateur est en veille ?

Les tâches planifiées permettent à Kimi d’exécuter automatiquement une tâche fixe à une heure définie — selon une fréquence quotidienne, hebdomadaire, mensuelle ou ponctuelle (sans répétition) — ce qui est idéal pour les briefings quotidiens, le suivi hebdomadaire et les nettoyages périodiques.

Dans l’application de bureau Kimi Work, les tâches planifiées s’exécutent **localement** et uniquement lorsque **l’application est ouverte**. Les déclenchements manqués pendant que votre ordinateur est en veille ou éteint, ou lorsque l’application est fermée, ne sont **pas exécutés rétroactivement** à la prochaine ouverture. Si vous avez besoin qu’une tâche s’exécute pendant la nuit, laissez donc votre ordinateur et l’application Kimi Work allumés. (À l’inverse, les tâches créées dans Kimi s’exécutent dans le cloud et ne nécessitent pas que le client reste ouvert.)

Consultez [Tâches planifiées](/features/scheduled-tasks) pour plus de détails.
