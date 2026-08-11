---
title: "Widgets"
slug: "widgets"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Widgets Kimi Work - Centre d'aide Kimi"
  description="Découvrez les widgets Kimi Work : des pages interactives générées par le modèle directement dans une conversation. Liez une tâche de widget pour obtenir un widget dynamique qui se met à jour en continu, et enregistrez vos widgets dans votre tableau de bord."
/>

# Widgets

Un widget (Widget) est une page interactive générée par le modèle et présentée instantanément dans une conversation. Inutile de formuler des consignes explicites sur le livrable : le modèle crée un widget lorsque le scénario s’y prête (par exemple, afficher une carte, rédiger un e-mail, organiser une recette ou visualiser des données), pour vous aider à comprendre la réponse plus vite et plus intuitivement.

Les widgets peuvent se connecter à des données locales ou à des plugins externes pour se mettre à jour en continu, et peuvent être enregistrés dans votre [tableau de bord (Dashboard)](/kimi-work/dashboard) pour être consultés et gérés sur la durée.

## Générer un widget

1. Décrivez ce dont vous avez besoin en langage naturel dans une conversation, par exemple :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Crée-moi un widget de veille quotidienne sur l’actualité tech américaine, mis à jour chaque jour à 9 h",
    },
  ]}
/>

2. Pendant la génération, vous pouvez voir la page du widget se construire étape par étape ;
3. Une fois généré, le widget est immédiatement interactif dans la conversation.

## Tâches de widget et widgets dynamiques

- **Tâche de widget (Widget Task)** : une tâche qui s’exécute automatiquement lorsque des conditions précises sont remplies — elle peut être déclenchée selon un calendrier ou par un événement.
- **Widget dynamique (Live Widget)** : un widget lié à une tâche de widget, dont le contenu se met automatiquement à jour à chaque exécution de la tâche. Par exemple, une fois le widget « Veille quotidienne sur l’actualité tech américaine » lié à une tâche exécutée chaque matin, son contenu s’actualise automatiquement chaque jour.

<Callout type="info">
Le nombre de tâches de widget pouvant s’exécuter simultanément est limité et varie selon votre offre. Lorsque vous atteignez la limite, mettez certaines tâches en pause depuis la page du tableau de bord avant d’en créer de nouvelles.
</Callout>

## Enregistrer dans le tableau de bord

Une fois un widget généré, survolez-le et sélectionnez « Save to Dashboard » pour l’enregistrer dans un tableau de bord. Un même widget peut exister dans plusieurs tableaux de bord à la fois.

Dans le tableau de bord, vous pouvez également consulter la tâche liée à un widget dynamique, l’activer ou la désactiver, et vérifier ses 10 dernières exécutions. Voir [Tableau de bord](/kimi-work/dashboard).
