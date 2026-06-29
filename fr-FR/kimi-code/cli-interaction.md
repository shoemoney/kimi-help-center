---
title: "Interaction et saisie"
slug: "cli-interaction"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Interaction et saisie - Kimi Help Center"
  description="Le CLI de Kimi Code propose plusieurs modes d'interaction pour collaborer efficacement avec l'IA."
/>

# Interaction et saisie

Le CLI de Kimi Code propose plusieurs modes d'interaction pour collaborer efficacement avec l'IA.

## Thinking mode

Le Thinking Mode permet à l'IA de raisonner plus en profondeur avant de répondre — idéal pour les problèmes complexes.

- Utilisez la commande `/model` pour changer de modèle et activer ou désactiver le Thinking Mode.
- Vous pouvez aussi activer le Thinking Mode au lancement avec l'option `--thinking`.

## Saisie multiligne

Appuyez sur **Ctrl-J** pour insérer un saut de ligne et saisir du texte sur plusieurs lignes. C'est pratique pour les invites plus longues ou pour coller des extraits de code multilignes.

## Coller depuis le presse-papiers

Appuyez sur **Ctrl-V** pour coller le contenu du presse-papiers — texte comme images sont pris en charge. Lorsque vous collez des images, l'IA peut directement en interpréter le contenu (captures d'écran, maquettes, captures d'erreurs, etc.).

## Commandes slash

Les commandes commençant par `/` servent à contrôler les sessions, la configuration et le débogage. Voici les plus courantes :

| Commande | Description |
| --- | --- |
| `/help` | Affiche l'aide |
| `/login` | Connexion et autorisation |
| `/model` | Changer de modèle et activer le Thinking Mode |
| `/sessions` | Lister et changer de session |
| `/clear` | Effacer le contexte actuel |
| `/compact` | Compresser le contexte |
| `/init` | Générer AGENTS.md |
| `/exit` | Quitter le CLI |

Lorsque vous tapez `/` dans le champ de saisie, la liste des commandes disponibles s'affiche automatiquement.

## Complétion de chemin avec @

Utilisez le symbole `@` dans votre saisie pour référencer un chemin de fichier ou de répertoire — le système complète automatiquement :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Check @src/utils/auth.ts for any security vulnerabilities",
    },
  ]}
/>

L'IA lit automatiquement le contenu du fichier référencé pour s'en servir comme contexte.

## Questions-réponses structurées

Dans certains cas, l'IA présente des options structurées pour votre saisie. Utilisez les **touches fléchées** pour sélectionner une option, puis appuyez sur **Entrée** pour confirmer.

## Confirmation d'approbation

Lorsque l'IA doit modifier des fichiers, exécuter des commandes shell ou réaliser d'autres opérations, elle vous demande votre confirmation. Vous pouvez choisir :

| Option | Description |
| --- | --- |
| **Autoriser** | Autoriser cette opération |
| **Autoriser pour la session** | Autoriser les opérations similaires pour le reste de la session en cours, sans nouvelle demande |
| **Refuser** | Refuser cette opération |

### Mode YOLO

Si vous faites confiance aux opérations de l'IA, vous pouvez utiliser le mode YOLO pour ignorer toutes les confirmations :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --yolo",
    },
  ]}
/>

> En mode YOLO, l'IA exécute automatiquement toutes les opérations — à utiliser avec prudence. Recommandé uniquement dans des environnements de développement contrôlés.
