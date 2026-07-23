---
title: "Tarifs de l’API"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Tarifs de l’API - Centre d’aide Kimi"
  description="Facturation de l’API Kimi basée sur la consommation de tokens, avec des tarifs propres à chaque modèle et à chaque fonctionnalité."
/>

# Tarifs de l’API

<Callout type="info">
La facturation de l’API Kimi est basée sur la consommation de tokens, avec des tarifs propres à chaque modèle et à chaque fonctionnalité.
</Callout>

## Principes de facturation

- **Facturation par token** : chaque appel API est facturé séparément pour les tokens d’entrée et les tokens de sortie
- **Unité de token** : 1M = 1,000,000 tokens
- **Tarifs propres à chaque modèle** : les modèles les plus performants ont un coût par token plus élevé — choisissez celui qui correspond le mieux à votre cas d’usage

## Facturation des fonctionnalités supplémentaires

| Fonctionnalité | Frais supplémentaires |
| --- | --- |
| **Web Search** | $0.004 par invocation (indépendamment de la consommation de tokens) |

## Mise en cache du contexte

<Callout type="tip">
La **mise en cache du contexte** vous permet de mettre en cache du contenu de contexte fréquemment utilisé (comme des prompts système et des documents de référence). Les tokens servis depuis le cache sont facturés à un tarif réduit, ce qui diminue efficacement les coûts pour les contextes répétitifs.
</Callout>

Consultez la documentation officielle pour le détail des tarifs de la mise en cache du contexte.

## Détail des tarifs

Pour consulter le tableau complet des tarifs par modèle et les règles de facturation :

Rendez-vous sur [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## Conseils pour optimiser les coûts

<Callout type="tip">
- Définissez correctement le paramètre `max_tokens` afin d’éviter des sorties inutilement longues
- Utilisez la mise en cache du contexte pour les prompts système et les contextes répétitifs
- Choisissez le modèle adapté à la complexité de la tâche — utilisez des modèles légers pour les tâches simples
- Rationalisez la conception de vos prompts afin de réduire les tokens d’entrée superflus
</Callout>
