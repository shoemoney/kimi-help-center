---
title: "Perte de mémoire et contexte"
slug: "memory-loss"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="Perte de mémoire et contexte - Centre d'aide Kimi"
  description="OpenClaw réinitialise automatiquement la conversation chaque jour à 4 h 00. Cela évite que des contextes trop longs ne provoquent des hallucinations ou ne dégradent la qualité des réponses."
/>

# Perte de mémoire et contexte

## Pourquoi la conversation d'hier a-t-elle disparu ?

OpenClaw réinitialise automatiquement la conversation **chaque jour à 4 h 00**. Cela évite que des contextes trop longs ne provoquent des hallucinations ou ne dégradent la qualité des réponses.

Si vous souhaitez modifier le moment de la réinitialisation, vous pouvez ajuster la planification dans `config.yaml`.

**Bonne pratique :** pour tout élément important — préférences, détails de projet, instructions récurrentes — demandez explicitement à Kimi Claw de l'enregistrer : _« Enregistre ceci dans la mémoire. »_ Les informations stockées dans la mémoire sont conservées d'une réinitialisation de conversation à l'autre.

## Kimi Claw a-t-il perdu la mémoire ?

La réinitialisation quotidienne de 4 h efface le contexte de la conversation active. Si un élément n'a pas été enregistré dans la **mémoire**, il est perdu.

**Comment y remédier :**
- Pendant une conversation, dites _« Enregistre X dans la mémoire »_ et Kimi Claw l'inscrira dans le stockage à long terme.
- Consultez les souvenirs enregistrés via **Espace de travail → AGENTS.md → #MEMORY**.

<Frames
  src="./images/memory-loss/claw-memory.png"
  alt="Claw Memory"
/>

- Utilisez à tout moment la commande `/memory` pour afficher et gérer les souvenirs enregistrés.

## Combien de temps la mémoire est-elle conservée après la fin de l'abonnement ?

Les fichiers de mémoire résident dans votre espace de travail, et vous pouvez les consulter ou les télécharger à tout moment.

- À l'expiration de votre abonnement, l'instance cloud est **conservée pendant 7 jours**.
- Renouvelez dans les 7 jours et toutes les données — mémoire, configuration, compétences — sont entièrement restaurées.
- Au-delà de 7 jours, l'instance peut être récupérée et les données définitivement supprimées.
- Une fonctionnalité d'exportation/sauvegarde de la mémoire est en cours de développement pour faciliter la migration.
