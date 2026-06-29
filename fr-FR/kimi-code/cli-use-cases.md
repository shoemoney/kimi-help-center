---
title: "Cas d'usage courants"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Cas d'usage courants - Centre d'aide Kimi"
  description="Voici quelques scénarios typiques d'utilisation de Kimi Code CLI au quotidien dans le développement, chacun accompagné d'exemples de prompts à titre de référence."
/>

# Cas d'usage courants

Voici quelques scénarios typiques d'utilisation de Kimi Code CLI au quotidien dans le développement, chacun accompagné d'exemples de prompts à titre de référence.

## Implémenter de nouvelles fonctionnalités

Décrivez vos besoins en langage naturel — l'IA lira automatiquement le code pertinent, écrira du nouveau code et vérifiera les résultats.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ajoute une fonction de tri par date d'inscription sur la page de liste des utilisateurs — des modifications sont nécessaires à la fois côté frontend et backend",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Implémente un middleware de limitation de débit utilisant l'algorithme du token bucket, limitant chaque IP à 60 requêtes par minute",
    },
  ]}
/>

## Corriger des bugs

Collez directement le message d'erreur à l'IA — elle localisera automatiquement la cause racine et proposera un correctif.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Après avoir lancé npm test, j'ai obtenu cette erreur, corrige-la s'il te plaît :\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Le pipeline CI a échoué à l'étape de lint. Voici le journal : ... Corrige-le s'il te plaît",
    },
  ]}
/>

## Comprendre un projet

Lorsque vous prenez en main un nouveau projet ou que vous avez besoin de comprendre un fragment de code en particulier, il suffit de demander.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Quelle est l'architecture globale de ce projet ? Quels sont les principaux modules ?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Que fait src/auth/middleware.ts ? Comment fonctionne le flux d'authentification ?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Explique comment les migrations de base de données sont gérées dans ce projet",
    },
  ]}
/>

## Automatiser de petites tâches

Idéal pour les modifications de code en masse, l'ajout de documentation, la génération de tests et autres travaux répétitifs.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ajoute des commentaires JSDoc à toutes les fonctions exportées du répertoire src/utils/",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Génère des tests unitaires pour toutes les méthodes publiques de la classe UserService",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Remplace toutes les déclarations var du projet par const ou let",
    },
  ]}
/>

## Tâches générales

Kimi Code CLI ne se limite pas au codage — il peut aussi gérer la recherche, l'analyse de données, les opérations sur des fichiers en masse, et bien plus.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Fais une recherche sur les bibliothèques ORM Node.js majeures actuelles et compare leurs avantages et inconvénients",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analyse les journaux d'accès des 7 derniers jours dans le répertoire logs/ et liste les 10 chemins de requête les plus fréquents",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Fusionne tous les fichiers CSV du répertoire data/ en un seul et supprime les lignes en double",
    },
  ]}
/>
