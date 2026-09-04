---
title: "Utiliser les compétences dans Kimi Claw"
slug: "use-skills-in-claw"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Utiliser les compétences dans Kimi Claw - Centre d'aide Kimi"
  description="Découvrez comment télécharger, synchroniser, invoquer et personnaliser des compétences dans Kimi Claw pour automatiser efficacement vos flux de travail et gérer la mémoire à long terme."
  ogType="article"
/>

# Utiliser les compétences dans Kimi Claw

Kimi Claw est un assistant IA doté d'une personnalité propre et de capacités de mémoire à long terme. Il peut exécuter des tâches programmées en arrière-plan, collaborer entre plateformes, conserver le contexte en mémoire et automatiser les tâches fastidieuses comme l'agrégation d'informations, la surveillance et les notifications.

## Obtenir et gérer les compétences

### Télécharger des compétences depuis Kimi

Vous pouvez télécharger des compétences officielles ou personnalisées depuis la plateforme Kimi vers votre Claw local :

1. Ouvrez Kimi Claw et rendez-vous dans la section **Compétences**.
2. Parcourez la liste des compétences, sélectionnez celle dont vous avez besoin et choisissez **Télécharger vers Claw**.
3. Une fois téléchargée, vous pouvez l'invoquer directement dans Claw.

<Callout type="info">
Lorsqu'une compétence est mise à jour, la version locale n'est pas écrasée automatiquement. Pour obtenir le contenu le plus récent, retéléchargez-la manuellement.
</Callout>

### Synchroniser les compétences depuis Kimi Agent

Si vous avez déjà ajouté des compétences dans Kimi Agent (version web), Kimi Claw peut les synchroniser et les afficher directement, sans nécessiter de reconfiguration.

Lorsque Kimi Claw détecte que les versions des compétences diffèrent entre les deux plateformes, il affiche une invite **Mise à jour requise** à côté de la compétence. Cliquez pour synchroniser vers la dernière version.

### Utiliser la bibliothèque de compétences Clawhub

Kimi Claw intègre une **bibliothèque de compétences Clawhub** qui réunit des compétences vérifiées et de qualité, couvrant divers scénarios de travail courants :

- **Organisation de l'information** : résumés d'actualités, comparatifs de concurrents, modèles de comptes rendus de réunion.
- **Travaux d'analyse** : revue d'actions et de secteurs, interprétation de données, identification des risques.
- **Gestion des flux de travail** : processus complets, de la décomposition des besoins à la livraison des résultats.

Accédez à la bibliothèque de compétences, parcourez-la ou recherchez les compétences adaptées à votre scénario de travail, puis cliquez pour les installer.

## Invoquer des compétences

Dans la zone de saisie de Kimi Claw, il existe trois façons d'invoquer une compétence, identiques à la version web :

- Tapez `/` pour sélectionner une compétence dans la liste contextuelle.
- Cliquez sur le bouton **+** à côté de la zone de saisie et choisissez dans le menu.
- Tapez directement le nom de la compétence.

<Callout type="warning">
L'accès aux compétences n'est actuellement pas disponible dans les OpenClaw tiers, dans Kimi Claw local et dans Kimi Claw pour ordinateur de bureau.
</Callout>

## Apprendre votre méthode de travail à Claw

Au-delà des compétences prédéfinies, vous pouvez « apprendre » à Claw l'expérience et les méthodes que vous avez accumulées, afin qu'il travaille durablement selon vos habitudes. Il y a trois grandes approches :

**Donnez des processus** : indiquez à Claw les étapes précises que vous suivez pour traiter un type de tâche donné.

**Donnez des critères** : indiquez à Claw ce qui compte le plus pour vous — exactitude, rapidité, faisabilité ou maîtrise des risques.

**Donnez des modèles** : indiquez à Claw le format de sortie souhaité. Par exemple, si la structure de votre rapport quotidien est « Ce que j'ai fait aujourd'hui → Problèmes rencontrés → Plan pour demain → Aide nécessaire », dites-le directement à Claw, qui organisera vos futurs rapports dans ce format.

### Étude de cas

Supposons que vous soyez chef de produit et que vous ayez besoin que Kimi Claw vous aide à examiner les retours utilisateurs chaque semaine. Vous pouvez l'enseigner à Claw ainsi :

1. **Processus** : « Chaque lundi, après avoir collecté les retours utilisateurs, classez-les d'abord par module fonctionnel, puis attribuez un niveau de priorité (P0-P3), et enfin dégagez les problèmes les plus fréquents. »

2. **Critères** : « J'accorde la plus grande importance à l'authenticité et à la faisabilité des retours ; excluez donc les avis en doublon et ne conservez que ceux qui décrivent un cas d'usage précis. »

3. **Modèle** : « Format de sortie : Module fonctionnel | Contenu du retour | Priorité | Nombre d'utilisateurs | Solution proposée »

Une fois que vous direz à Claw « Aide-moi à organiser les retours utilisateurs de cette semaine », il procédera automatiquement selon ces critères, sans que vous ayez à répéter vos explications à chaque fois.

<Callout type="tip">
Grâce à la combinaison des compétences et de méthodes de travail personnalisées, Kimi Claw accomplit les tâches plus vite et avec plus de précision, en produisant des résultats conformes à vos habitudes.
</Callout>

## Remarques sur l'usage mobile

Lorsque vous utilisez des compétences sur mobile, gardez à l'esprit les limitations suivantes :

- Si vous avez ajouté des compétences dans la version web, le menu plus affiche un accès aux compétences. Cliquer dessus insère la compétence sous forme de texte dans la zone de saisie.
- Si aucune compétence n'a été ajoutée dans la version web, le menu plus sur mobile n'affiche pas l'accès aux compétences.
- Si l'historique de la conversation contient du contenu généré par une compétence, une invite s'affiche : **Compétence générée, actuellement prise en charge uniquement sur la plateforme web Kimi**.

Nous vous recommandons d'effectuer certaines opérations de gestion des compétences (telles que la création, la modification, la suppression) sur la plateforme web, le mobile servant principalement à invoquer des compétences existantes.
