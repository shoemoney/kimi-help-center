---
title: "Personnalisation et référence"
slug: "cli-customization"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Personnalisation \u0026 référence - Centre d'aide Kimi"
  description="Le CLI Kimi Code propose de nombreuses options de personnalisation, vous permettant d'adapter le comportement et le flux de travail de l'IA à vos besoins."
/>

# Personnalisation et référence

Le CLI Kimi Code propose de nombreuses options de personnalisation, vous permettant d'adapter le comportement et le flux de travail de l'IA à vos besoins.

## Fichier de configuration

Le CLI Kimi Code utilise `~/.kimi/config.toml` comme fichier de configuration global, prenant en charge les formats TOML et JSON. Vous pouvez configurer :

- **Fournisseurs d'API et modèles** : configurez différents fournisseurs de modèles, points de terminaison d'API et clés.
- **Modèle par défaut** : spécifiez le modèle à utiliser par défaut.
- **Paramètres d'exécution** : ajustez le délai d'expiration, la concurrency, le format de sortie et d'autres réglages d'exécution.

> Utilisez la commande `/config` pour ouvrir rapidement le fichier de configuration et le modifier.

## Configuration de projet AGENTS.md

Placez un fichier `AGENTS.md` à la racine de votre projet pour fournir à l'IA un contexte au niveau du projet :

- **Contexte du projet** : décrivez les fonctionnalités, l'architecture et la pile technique du projet.
- **Étapes de build** : comment installer les dépendances, compiler le projet et exécuter les tests.
- **Conventions de code** : conventions de nommage, règles de structure des répertoires, préférences de style de code.
- **Remarques particulières** : restrictions de sécurité, exigences de performance et autres points importants.

Utilisez la commande `/init` pour que l'IA analyse automatiquement votre projet et génère un `AGENTS.md` initial. Vous pouvez aussi modifier le fichier manuellement pour ajouter des informations propres au projet. Les fichiers `AGENTS.md` peuvent être placés dans n'importe quel sous-répertoire — l'IA chargera automatiquement les configurations pertinentes.

## Invite système personnalisée

Vous pouvez personnaliser l'invite système de l'IA de plusieurs manières :

- **Invite système globale** : rédigez-la dans `~/.kimi/AGENTS.md` — elle s'applique à tous les projets.
- **Invite système au niveau du projet** : rédigez-la dans le fichier `AGENTS.md` à la racine du projet — elle ne s'applique qu'au projet courant.
- **Paramètre de lancement** : utilisez l'option `--system-prompt` pour la spécifier au démarrage.

La configuration au niveau du projet l'emporte sur la configuration globale, et le paramètre de lancement a la priorité la plus élevée.

## Intégration MCP

Le CLI Kimi Code prend en charge le Model Context Protocol (MCP), qui permet de se connecter à des outils et sources de données externes pour étendre les capacités de l'IA :

- **Configuration des serveurs MCP** : ajoutez les adresses des serveurs MCP dans le fichier de configuration pour que l'IA puisse invoquer des outils externes.
- **Prise en charge MCP intégrée** : certains outils MCP couramment utilisés sont intégrés et ne nécessitent aucune configuration supplémentaire.
- **Serveurs MCP personnalisés** : vous pouvez développer vos propres serveurs MCP pour offrir des capacités spécifiques à votre domaine.

La configuration MCP peut être placée dans `~/.kimi/config.toml` ou dans les fichiers de configuration au niveau du projet.

## Variables d'environnement

Le CLI Kimi Code prend en charge la configuration via des variables d'environnement — utile pour les pipelines CI/CD et les scripts :

| Variable d'environnement | Description |
| --- | --- |
| `KIMI_API_KEY` | Clé API |
| `KIMI_BASE_URL` | Point de terminaison d'API personnalisé |
| `KIMI_MODEL` | Nom du modèle par défaut |
| `KIMI_MAX_TOKENS` | Nombre maximal de tokens en sortie |

Les variables d'environnement ont priorité sur les réglages du fichier de configuration.

## Références complémentaires

- **Référence des commandes slash** : utilisez `/help` pour afficher toutes les commandes disponibles.
- **Référence des paramètres CLI** : exécutez `kimi --help` pour afficher tous les paramètres de lancement.
- **Documentation officielle** : consultez [Kimi Code Docs](https://www.kimi.com/code/docs/en/) pour la documentation complète la plus récente.
