---
title: "Tâches planifiées"
slug: "scheduled-tasks"
order: 5
extract_headings: false
preview: true
preview_content: "Les tâches planifiées permettent à Kimi d’exécuter automatiquement une tâche définie à l’heure que vous choisissez — idéal pour les briefings quotidiens, la veille hebdomadaire et les nettoyages réguliers. Disponible dans Kimi et l’application de bureau Kimi Work."
---

<SeoMeta
  title="Utiliser les tâches planifiées Kimi - Centre d’aide Kimi"
  description="Découvrez les tâches planifiées Kimi : demandez à Kimi d’exécuter automatiquement une tâche à une heure donnée, selon une fréquence quotidienne, hebdomadaire, mensuelle ou ponctuelle, avec une date d’expiration facultative et la possibilité de les combiner avec des Skills pour des travaux plus complexes. Idéal pour les briefings quotidiens, la veille sectorielle hebdomadaire et les nettoyages périodiques de données. Disponible dans Kimi et l’application de bureau Kimi Work."
/>

# Tâches planifiées

Les tâches planifiées permettent à Kimi d’exécuter automatiquement une tâche définie à l’heure que vous choisissez, sans que vous ayez à la lancer manuellement à chaque fois. Elles sont idéales pour les travaux réguliers et récurrents : briefings quotidiens, veille sectorielle hebdomadaire, nettoyages périodiques de données, etc.

Les tâches planifiées sont une fonctionnalité générale, disponible dans **Kimi** et dans **l’application de bureau Kimi Work**.

## Créer une tâche planifiée

Deux méthodes sont possibles :

- **Depuis le point d’entrée** : cliquez sur "Créer une tâche planifiée" dans la barre latérale, puis renseignez la tâche dans la fenêtre de dialogue ;
- **Depuis une conversation** : décrivez votre besoin de planification en langage naturel, et Kimi créera pour vous une tâche planifiée en rédigeant automatiquement son titre, sa fréquence et son contenu.

Une tâche planifiée comprend :

- **Titre** : résume la tâche pour la retrouver facilement dans la liste ;
- **Planification** : quotidienne, hebdomadaire, mensuelle ou sans répétition (ponctuelle) ;
- **Date d’expiration** : vous pouvez définir la date d’expiration de la tâche (sélectionnée par défaut à la création) ;
- **Contenu de la tâche** : un prompt décrivant ce que la tâche doit faire. À l’heure prévue, Kimi exécute ce prompt fixe.

## Rédiger un bon prompt de tâche

Un bon prompt de tâche précise trois éléments à la fois :

- **Quand** : le moment d’exécution (une date précise / une heure chaque jour / un jour chaque semaine) ;
- **Format de sortie** : la forme attendue du résultat (points clés, tableau, modèle, nombre de mots, langue) ;
- **Contraintes** : ce qu’il ne doit pas faire ou ce qu’il doit respecter (par exemple : en 200 mots maximum, en chinois uniquement, inclure une note de risque, produire seulement 3 éléments).

**Modèle universel** : À [heure], fais [tâche], présente le résultat sous forme de [format] et respecte [contraintes].

Voici quelques exemples que vous pouvez copier et adapter :

<CodePreview
  files={[
    {
      name: "market-news.txt",
      language: "text",
      content: "Chaque jour à 9 h 00, résume les dernières actualités des marchés en 3 points clés, avec 1 note de risque, en chinois et en 200 mots maximum.",
    },
    {
      name: "daily-report-reminder.txt",
      language: "text",
      content: "Dans 1 heure, rappelle-moi de terminer le compte rendu de travail d’aujourd’hui et joins le modèle de rapport (structure en quatre parties).",
    },
    {
      name: "bedtime-reminder.txt",
      language: "text",
      content: "Ce soir à 22 h 30, rappelle-moi de : éteindre l’ordinateur, faire ma toilette et me préparer à dormir. Garde un ton doux.",
    },
  ]}
/>

## Gérer les tâches planifiées

La **liste des tâches** affiche toutes vos tâches planifiées (classées par horaire). Chaque carte de tâche vous permet de :

- activer ou désactiver la tâche ;
- accéder à d’autres actions : localiser la tâche, l’exécuter une fois maintenant, la modifier ou la supprimer.

Dans une conversation, une tâche planifiée apparaît sous forme de **carte de tâche** indiquant son titre, sa fréquence, sa prochaine heure d’exécution et son contenu. Vous pouvez également l’exécuter maintenant, la mettre en pause, la modifier ou la supprimer.

## Exécution et notifications

- À l’heure planifiée, Kimi exécute le prompt fixe défini dans la tâche ;
- Chaque exécution crée une notification marquée comme non lue ; vous pouvez consulter le résultat de chaque exécution et accéder à la conversation correspondante ;
- L’état de lecture est synchronisé entre le web et le mobile ;
- Une fois la tâche exécutée, vous pouvez **choisir un modèle pour continuer à poser des questions de suivi** dans la conversation de résultat, puis taper "/" pour **appeler des plugins et des Skills**.

## Combiner avec des Skills

Les tâches planifiées peuvent être combinées avec des **Skills** pour traiter des travaux plus complexes, notamment les **Skills finance** de Kimi (données de marché, analyse des résultats financiers, etc.).

Avant d’en utiliser un, **installez et testez d’abord le Skill** pour vérifier qu’il fonctionne comme prévu, puis utilisez-le dans une tâche planifiée.

## Expiration

Une date d’expiration est sélectionnée par défaut lorsque vous créez une tâche, afin d’éviter que des tâches obsolètes ne s’accumulent. Les expirations par défaut sont les suivantes :

- Quotidienne : +7 jours ;
- Hebdomadaire : +1 mois ;
- Mensuelle : +3 mois.

<Callout type="info">
Les tâches planifiées exécutées localement dans l’application de bureau Kimi Work ne sont pas soumises aux règles d’expiration ci-dessus ; les tâches locales s’exécutent selon leur cycle tant que l’application est ouverte, et les déclenchements manqués pendant sa fermeture ne sont pas exécutés ensuite.
</Callout>

## Quotas et forfaits

Les tâches planifiées limitent le nombre de **tâches pouvant être actives en même temps** (le nombre de tâches créées n’est pas limité). Le nombre de tâches actives dépend de votre forfait d’abonnement :

| Forfait | Free | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Tâches planifiées | 2 | 6 | 15 | 20 | 25 |

- Lorsque vous atteignez la limite de tâches actives et créez une autre tâche, la nouvelle tâche est **enregistrée comme inactive**, avec une invitation à mettre à niveau votre forfait ou à désactiver certaines tâches ;
- Si votre limite de tâches actives diminue (rétrogradation du forfait ou expiration d’avantages), les tâches au-delà de la limite sont automatiquement mises en pause.

Pour connaître les quotas les plus récents, consultez la [page des forfaits d’abonnement](/membership/membership-pricing).

<Callout type="tip">
**Astuce** : avant de planifier une tâche, essayez une fois son contenu dans une conversation classique, ou utilisez "Exécuter une fois maintenant" pour la vérifier. Assurez-vous que la formulation est claire et que le résultat correspond à vos attentes avant de vous appuyer sur la planification. Si la tâche dépend d’un Skill, installez et testez d’abord ce Skill.
</Callout>

## FAQ

### Le nombre de tâches planifiées que je peux créer est-il limité ?
Le nombre de tâches créées n’est pas limité, mais le nombre de tâches pouvant être **actives en même temps** dépend de votre forfait. Si vous dépassez la limite de tâches actives, la nouvelle tâche est enregistrée comme inactive ; vous pouvez mettre à niveau votre forfait ou désactiver certaines tâches pour l’activer.

### Dois-je garder mon ordinateur ou l’application ouverte pour que les tâches s’exécutent ?
Les tâches planifiées créées dans Kimi s’exécutent dans le cloud : vous n’avez pas besoin de garder un client ouvert. Les tâches exécutées localement dans l’application de bureau Kimi Work nécessitent que l’application soit ouverte ; les déclenchements manqués pendant sa fermeture ne sont pas exécutés ensuite.

### Puis-je choisir un modèle lors de l’exécution d’une tâche planifiée ?
Vous ne pouvez pas choisir de modèle lors de la création d’une tâche. Après son exécution, vous pouvez choisir un modèle pour continuer à poser des questions de suivi dans la conversation de résultat, puis taper "/" pour appeler des plugins et des Skills.

### Que faire si j’atteins la limite de tâches actives ?
Désactivez les tâches dont vous n’avez plus besoin, ou passez à un forfait supérieur pour bénéficier d’une limite plus élevée. Consultez la [page des forfaits d’abonnement](/membership/membership-pricing) pour en savoir plus.
