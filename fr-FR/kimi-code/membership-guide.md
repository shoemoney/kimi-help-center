---
title: "Guide de l'abonnement Kimi Code"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Guide de l'abonnement Kimi Code - Centre d'aide Kimi"
  description="Kimi Code est un avantage destiné aux développeurs, inclus dans l'abonnement Kimi, qui offre des capacités de codage par IA hautes performances. Vous pouvez en profiter via..."
/>

# Guide de l'abonnement Kimi Code

<Callout type="info">
Kimi Code est un avantage destiné aux développeurs, inclus dans l'abonnement Kimi, qui offre des capacités de codage par IA hautes performances. Vous pouvez en profiter via Kimi Code CLI, Claude Code, Roo Code et d'autres outils compatibles.
</Callout>

## Principaux atouts

| Atout | Description |
|-----------|-------------|
| **Large compatibilité** | Fonctionne avec Kimi Code CLI, Claude Code, Roo Code et d'autres agents de codage courants |
| **Offres Standard / HighSpeed** | Le même modèle à deux vitesses — HighSpeed offre une vitesse de sortie environ 5 à 6× supérieure à Standard et se change à la demande |
| **Réponses ultra-rapides** | Des vitesses de génération atteignant 100 tokens/s, pour un gain de productivité considérable |
| **Forte concurrency** | Environ 300 à 1 200 requêtes par fenêtre de 5 heures (selon votre formule), avec jusqu'à 30 flux simultanés |

## Démarrage rapide

Choisissez la voie adaptée à votre situation :

- **Nouveaux utilisateurs** : rendez-vous sur [kimi.com/code](https://kimi.com/code), connectez-vous et souscrivez à une formule Coding.
- **Abonnés existants** : accédez à la console pour gérer vos API Keys et commencer à utiliser Kimi Code.

## Obtenir une clé API

1. Connectez-vous à la [console Kimi](https://kimi.com/code).
2. Accédez à la page **API Keys**.
3. Cliquez sur **Créer une nouvelle clé API**.
4. Copiez votre API Key et conservez-la en lieu sûr (elle ne s'affiche qu'une seule fois, à sa création).

<Callout type="warning">
Ne partagez pas votre API Key avec autrui et ne la déposez jamais dans un dépôt de code public.
</Callout>

## Connexion en un clic

Dans Kimi Code CLI, la commande `/login` permet une autorisation rapide sans avoir à copier manuellement une API Key :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

Le système effectue automatiquement l'autorisation de l'appareil et la liaison du compte — l'ensemble du processus ne prend que quelques secondes.

## Gestion des appareils

- Chaque compte peut être utilisé sur plusieurs appareils.
- Les autorisations d'appareils **inactives depuis 30 jours** expirent automatiquement ; vous devrez alors exécuter à nouveau `/login` pour vous réautoriser.
- Vous pouvez consulter et gérer les appareils autorisés depuis la console.

## Comment changer de modèle

**Le modèle HighSpeed est désormais disponible.** Kimi Code propose deux offres — **Standard** et **HighSpeed** — basées sur le même modèle avec des capacités de codage identiques, partageant la même Base URL, la même API Key et les mêmes avantages d'abonnement. HighSpeed offre une vitesse de sortie environ **5 à 6× supérieure** à Standard ; pour des réponses instantanées et une itération rapide, un seul clic suffit pour une expérience de codage plus fluide. Principales différences :

| Élément | Standard | HighSpeed |
| --- | --- | --- |
| ID de modèle | `kimi-for-coding` | `kimi-for-coding-highspeed` |
| Vitesse de sortie | Référence | ~5 à 6× plus rapide que Standard |
| Consommation de crédits | Référence | ~3× celle de Standard |
| Capacité de codage | Complète | Identique à Standard |
| Idéal pour | Tâches de codage quotidiennes | Réponses instantanées, itération rapide |
| Abonnement | Disponible pour tous les membres Kimi Code | Nécessite une formule [Allegretto](https://www.kimi.com/membership/pricing) ou supérieure |

Façons de basculer vers le modèle cible :

- **CLI officielle Kimi Code** : tapez `/model` dans une session pour basculer directement entre Standard et HighSpeed — sans modifier la configuration.
- **Kimi Code pour VS Code** : choisissez le modèle cible dans le menu déroulant de la barre de saisie ; si HighSpeed n'apparaît pas encore, redémarrez VS Code ou réinstallez l'extension.
- **Outils tiers** : réglez l'ID de modèle de l'outil sur le modèle cible ; tous les autres réglages restent inchangés. Pour savoir où le trouver dans chaque outil, consultez [Utilisation avec des Coding Agents tiers](/kimi-code/third-party-agents).

<Callout type="info">
- **ID de modèle stables** : les deux ID sont des identifiants stables ; le backend met à jour le modèle associé à mesure des améliorations, sans changement de configuration côté client.
- **Saisissez-le exactement** : l'ID HighSpeed doit être `kimi-for-coding-highspeed`. En cas d'erreur de saisie ou d'autre valeur, la requête bascule silencieusement sur le `kimi-for-coding` standard — sans erreur, mais sans accélération non plus.
- **401 sans accès** : sans accès HighSpeed, l'appel renvoie une erreur `401` ; passez à Allegretto ou supérieur.
</Callout>

<Callout type="tip">
**Pourquoi la tâche entière ne semble-t-elle pas 5 à 6× plus rapide ?** « 5 à 6× » désigne la **vitesse de sortie du modèle** (la rapidité de génération du texte / code). La durée totale d'une tâche de codage se compose de « sortie du modèle + appels d'outils (lecture/écriture de fichiers, exécution de commandes, recherches web, etc.) + exécution de scripts » — la durée des appels d'outils et de l'exécution de scripts dépend de votre projet et de vos commandes, et HighSpeed ne modifie pas cette partie. Donc si l'ensemble ne semble pas 5 à 6× plus rapide, c'est généralement parce que les appels d'outils / l'exécution de scripts ont occupé l'essentiel de ce tour, et non parce que la génération du modèle a ralenti.
</Callout>
