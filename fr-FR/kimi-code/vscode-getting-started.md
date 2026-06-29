---
title: "Démarrage rapide de Kimi Code pour VS Code"
slug: "vscode-getting-started"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="Démarrage rapide de Kimi Code pour VS Code - Centre d'aide Kimi"
  description="Kimi Code pour VS Code est une extension intégrée à Visual Studio Code. Une fois installée, vous pouvez poser des questions, examiner les différences de code et valider rapidement vos modific..."
/>

# Démarrage rapide de Kimi Code pour VS Code

<Callout type="warning">
**Avis de compatibilité de l'extension VS Code**

Kimi Code pour VS Code n'est actuellement disponible en nouvelle installation que pour les utilisateurs de l'ancien CLI Python. Les utilisateurs existants ayant déjà installé l'extension peuvent continuer à l'utiliser après la mise à niveau vers le nouveau CLI. L'installation n'est pour l'instant pas prise en charge pour les utilisateurs du CLI en version TS.
</Callout>

Kimi Code pour VS Code est une extension intégrée à Visual Studio Code. Une fois installée, vous pouvez poser des questions directement dans l'éditeur, examiner les différences de code et valider rapidement vos modifications.

L'extension peut lire le contenu des fichiers que vous référencez et présenter des suggestions de modification via une interface visuelle, qu'elle exécute après votre confirmation. Vous gardez le contrôle de l'ensemble du processus tout en améliorant nettement votre efficacité de développement.

Cette extension fournit un panneau de discussion natif dans VS Code, qui prend en charge :
- Le référencement de fichiers ou de dossiers à l'aide du symbole `@`.
- L'exécution d'analyses de projet et la gestion du contexte via les commandes `/`.
- Des vues de différences affichant les changements de fichiers, avec prise en charge de l'annulation.
- L'intégration de serveurs MCP pour appeler des outils externes.

---

## Installation

1.  **Prérequis** : vous avez besoin d'un abonnement à un compte Kimi ou d'une clé API Kimi.
2.  **Marketplace** : installez l'extension depuis la [Marketplace de VS Code](vscode:extension/moonshot-ai.kimi-code).

<Callout type="tip">
Si l'extension n'apparaît pas après l'installation, redémarrez VS Code ou exécutez **Developer: Reload Window** dans la palette de commandes (Mac : `Cmd+Shift+P`, Win/Linux : `Ctrl+Shift+P`).
</Callout>

---

## Authentification

Kimi Code prend en charge deux modes d'authentification. Vous pouvez en changer à tout moment via l'**icône d'engrenage**.

<Frames
  src="./images/vscode/kimi-code-gear-icon.png"
  alt="Paramètres d'authentification"
  width={800}
  height={450}
/>

- **Mode compte Kimi** : cliquez sur le bouton de connexion pour autoriser l'accès via votre navigateur.
- **Mode clé API** : cliquez pour ignorer la connexion si vous avez déjà configuré une clé API.

---

## Flux de travail courants

Lecture de code : saisissez `@` pour sélectionner un fichier ou un dossier, demandez une explication du déroulement du code et poursuivez avec des questions complémentaires.

Refactorisation : référencez le code cible, par exemple `@src/feature/`, demandez un plan de refactorisation, examinez les différences et approuvez sélectivement, en annulant les modifications si nécessaire.

Débogage : collez les messages d'erreur ou les traces de pile, référencez les fichiers concernés, demandez un diagnostic et des correctifs, puis approuvez les modifications proposées.

Vue d'ensemble du projet : référencez un dossier, par exemple `@src/services/`, demandez une cartographie des modules ou un résumé de l'architecture, et poursuivez en interrogeant les dépendances ou les points faibles.

---

## Commandes et raccourcis

Utilisez `CodePreview` pour tester rapidement des commandes ou consulter les principaux raccourcis :

<CodePreview
  files={[
    {
      name: "shortcuts.txt",
      language: "text",
      content: "Ctrl+Shift+K : Focus Kimi input box\nAlt+K : Insert current file reference\nCtrl+N : New conversation",
    },
  ]}
/>

| Raccourci | Fonction |
| :--- | :--- |
| `Ctrl+Shift+K` / `Cmd+Shift+K` | Placer le curseur dans le champ de saisie Kimi |
| `Alt+K` | Insérer une référence au fichier actuel |
| `Ctrl+N` / `Cmd+N` | Nouvelle conversation |
| `↑` / `↓` | Parcourir l'historique de saisie |

<Callout type="info">
Saisissez **Kimi Code** dans la palette de commandes pour accéder à d'autres commandes : ouvrir dans un nouvel onglet, ouvrir dans la barre latérale ou gérer les sessions.
</Callout>
