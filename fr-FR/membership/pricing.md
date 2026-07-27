---
title: "Détails des tarifs"
slug: "membership-pricing"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Détails des tarifs - Centre d’aide Kimi"
  description="Kimi propose quatre formules d’abonnement, chacune disponible au mois ou à l’année. La facturation annuelle vous fait économiser jusqu’à 480 $/an."
/>

# Détails des tarifs

Kimi propose quatre formules d’abonnement, chacune disponible au mois ou à l’année. La facturation annuelle vous fait économiser jusqu’à **480 $/an**.

## Les formules en un coup d’œil

| Fonctionnalité | Moderato (19 $/mois) | Allegretto (39 $/mois) | Allegro (99 $/mois) | Vivace (199 $/mois) |
|---------|-------------------|---------------------|-------------------|-------------------|
| Credits Agent* | 60 | 150 | 360 | 720 |
| Tâches Agent simultanées | 2 | 2 | 4 | 4 |
| Priorité de vitesse Agent | 4× | 4× | 4× | 4× |
| Agent Swarm (bêta) | 25 utilisations | 50 utilisations | 120 utilisations | 240 utilisations |
| Sous-tâches Agent Swarm simultanées | 2 | 4 | 4 | 8 |
| Credits Kimi Code | 1× | 5× | 15× | 30× |
| Kimi Claw | — | ✅ | ✅ | ✅ |
| Kimi Claw Android | — | ✅ | ✅ | ✅ |
| Base de données professionnelle | 2 000 appels | 5 000 appels | 12 000 appels | 24 000 appels |

\* Valeurs approximatives fondées sur la consommation habituelle de tokens par tâche. Les credits mensuels sont convertis en nombre équivalent de tâches pour une même fonctionnalité ; à titre indicatif uniquement.

## Tarifs mensuels et annuels

| Formule | Mensuel | Annuel (par mois) | Total annuel | Économie |
| --- | --- | --- | --- | --- |
| Moderato | 19 $/mois | 15 $/mois | 180 $/an | 48 $/an |
| Allegretto | 39 $/mois | 31 $/mois | 372 $/an | 96 $/an |
| Allegro | 99 $/mois | 79 $/mois | 948 $/an | 240 $/an |
| Vivace | 199 $/mois | 159 $/mois | 1 908 $/an | 480 $/an |

## Attribution des credits

Toutes les fonctionnalités incluses dans les abonnements Kimi partagent une même réserve de credits, décomptée selon l’utilisation de tokens. Kimi Code dispose également de son propre rate limit de 5 heures par semaine, qui s’applique uniquement à Kimi Code et n’affecte pas les autres fonctionnalités. Dans Chat, K2.6 est gratuit et ne consomme pas de credits. Les formules supérieures incluent une réserve de credits proportionnellement plus importante, pour des workflows plus fréquents et plus complexes. Consultez [Mise à jour des credits et règles d’utilisation](/membership/update-rules) pour en savoir plus.

## FAQ sur les credits

### Qu’est-ce que le prélèvement « Claw-云主机 » de 0.6% déduit chaque jour à 16:00 ?

Il s’agit du coût de fonctionnement du sandbox de votre hôte cloud Kimi Claw. Kimi Claw est un déploiement OpenClaw dans le cloud : chaque fois que vous invoquez Claw, le système démarre un sandbox cloud isolé pour exécuter du code, piloter le navigateur ou appeler des outils. Les sandbox ne sont pas « en veille gratuite » — ils sont facturés en continu selon la durée d’exécution et la consommation de ressources. Même lorsque vous n’exécutez pas activement de tâches, un hôte cloud déployé conserve son environnement d’exécution et ses données ; environ 0.6% de vos credits d’abonnement est donc déduit chaque jour, avec un règlement à 16:00.

Si vous ne prévoyez pas d’utiliser Kimi Claw pendant un certain temps, sauvegardez d’abord localement les fichiers importants tels que les fichiers memory, soul et workspace, puis supprimez l’hôte cloud ; aucun frais ne s’applique après la suppression, et vous pouvez le redéployer à tout moment.

### Qu’est-ce que le prélèvement « Agent Website - Cloud Service » de 0.08% ?

Il s’agit des frais de service cloud pour un site web que vous avez publié avec Agent. Un site web publié occupe en permanence des ressources cloud pour rester en ligne et accessible ; environ 0.08% de vos credits d’abonnement est donc déduit. Si vous n’avez plus besoin que le site web soit en ligne, cliquez sur « Unpublish » pour arrêter les prélèvements.
