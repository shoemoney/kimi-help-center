---
title: "Tarification de l'API"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Tarification de l'API - Centre d'aide Kimi"
  description="Facturation de l'API Kimi basée sur la consommation de tokens, avec une tarification propre à chaque modèle et à chaque fonctionnalité."
/>

# Tarification de l'API

<Callout type="info">
Facturation de l'API Kimi basée sur la consommation de tokens, avec une tarification propre à chaque modèle et à chaque fonctionnalité.
</Callout>

## Principes de facturation

- **Facturation au token** : chaque appel d'API est facturé séparément pour les tokens d'entrée et les tokens de sortie
- **Unité de token** : 1 M = 1 000 000 de tokens
- **Tarification propre à chaque modèle** : les modèles les plus performants ont un coût par token plus élevé — choisissez celui qui correspond le mieux à votre usage

## Facturation des fonctionnalités supplémentaires

| Fonctionnalité | Frais supplémentaires |
| --- | --- |
| **Web Search** | 0,004 $ par appel (indépendant de la consommation de tokens) |

## Mise en cache du contexte

<Callout type="tip">
Le **Context Caching** vous permet de mettre en cache le contenu contextuel fréquemment utilisé (comme les invites système et les documents de référence). Les tokens qui touchent le cache sont facturés à un tarif réduit, ce qui réduit efficacement les coûts liés aux contextes répétitifs.
</Callout>

Consultez la documentation officielle pour connaître la tarification détaillée du Context Caching.

## Détails de la tarification

Pour consulter le tableau complet des tarifs par modèle et les règles de facturation :

Rendez-vous sur [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## Conseils pour optimiser les coûts

<Callout type="tip">
- Définissez correctement le paramètre `max_tokens` pour éviter des sorties inutilement longues
- Utilisez le Context Caching pour les invites système et les contextes répétitifs
- Choisissez le modèle adapté à la complexité de la tâche — privilégiez les modèles légers pour les tâches simples
- Optimisez la conception de vos invites afin de réduire au minimum les tokens d'entrée superflus
</Callout>
