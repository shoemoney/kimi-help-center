---
title: "Opérations essentielles de VS Code"
slug: "vscode-core-operations"
order: 12
extract_headings: false
preview: true
preview_content: "Panneau de chat, références de fichiers, revue des diffs, mode Plan et gestion du contexte dans l’extension Kimi Code pour VS Code."
---

<SeoMeta
title="Opérations essentielles de Kimi Code pour VS Code - Centre d’aide Kimi"
description="Maîtrisez les fonctions clés de l’extension Kimi Code pour VS Code : références de fichiers avec @, commandes slash, revue des diffs de modifications de code, mode Plan, file de messages et gestion du contexte."
/>

# Opérations essentielles de VS Code

<Callout type="warning">
**Adaptation de l’extension VS Code en cours**

Kimi Code pour VS Code est actuellement disponible en nouvelle installation uniquement pour les utilisateurs de l’ancien CLI Python. Les utilisateurs qui ont déjà installé l’extension peuvent continuer à l’utiliser après être passés au nouveau CLI. L’installation n’est pas prise en charge pour les autres utilisateurs du CLI en version TS pour le moment.
</Callout>

## Ouvrir le panneau

<Frames
  src="./images/vscode-getting-started/kimi-code-command-palette.png"
  alt="Palette de commandes Kimi Code"
/>

Cliquez sur l’icône Kimi dans la barre d’activité, ou exécutez la commande "Kimi Code" depuis la palette de commandes.

## Saisie et contrôles

### Références de fichiers

Saisissez `@`, puis sélectionnez un fichier ou un dossier. Par exemple, utilisez `@src/handlers/` pour référencer un dossier, `@app.ts` pour référencer un fichier, ou `@src/app.ts:10-20` pour référencer une plage de lignes précise.

Appuyez sur `Alt+K` pour insérer rapidement le fichier actuel ou le code sélectionné comme référence.

### Commandes slash

Saisissez `/` pour ouvrir le menu des commandes. Utilisez `/init` pour analyser le projet et générer la documentation, ou `/compact` pour compresser un contexte trop long.

### Historique de saisie

Appuyez sur `↑` / `↓` dans la zone de saisie pour parcourir rapidement les messages que vous avez récemment envoyés, afin de répéter ou de reformuler plus facilement une question.

### Ajout de fichiers multimédias

Vous pouvez coller, glisser-déposer ou sélectionner des fichiers multimédias. Les formats pris en charge incluent les formats d’image tels que PNG, JPEG, GIF, WebP et HEIC, ainsi que les formats vidéo tels que MP4, WebM et MOV.

- **Coller / glisser-déposer** : une image seule peut atteindre 5MB dans sa taille d’origine. Le système la compresse automatiquement, notamment en convertissant HEIC en JPEG, en redimensionnant les images trop grandes et en réduisant leur qualité jusqu’à environ 2MB.
- **Sélecteur de fichiers** : lorsque vous sélectionnez des fichiers via le bouton "+" dans la zone de saisie ou le menu `@`, les images peuvent atteindre 10MB et les vidéos 20MB.
- **Limites générales** : chaque message peut joindre jusqu’à 9 fichiers, pour une taille totale maximale de 80MB. Lorsque des fichiers multimédias sont joints, les modèles qui ne prennent pas en charge l’entrée multimodale sont automatiquement filtrés.

### File de messages

Pendant que Kimi répond, vous pouvez continuer à saisir et à envoyer des messages dans la zone de saisie. Ces messages ne seront pas perdus : ils sont ajoutés à la **file de messages**. La barre d’outils inférieure affiche le nombre d’éléments en attente ; cliquez dessus pour ouvrir le panneau de file :

- Consulter la liste des messages en attente d’envoi
- Modifier ou supprimer des messages dans la file
- Réordonner les messages
- Pendant que Kimi répond, cliquez sur l’icône ⚡ d’un élément de la file pour insérer immédiatement ce message comme **guidage**, afin d’orienter Kimi et de lui faire ajuster la réponse en cours

### Modèles et Thinking mode

Changez de modèle depuis le menu déroulant de la barre de saisie.

Certains modèles prennent en charge des capacités de raisonnement étendues. Le bouton Thinking mode possède trois états : masqué lorsque le modèle ne prend pas en charge Thinking mode, activé/désactivé manuellement par l’utilisateur, ou toujours activé pour des modèles tels que k2-thinking.

Une fois activées, les étapes de réflexion sont repliées par défaut dans la réponse. Vous pouvez les développer pour consulter le processus de raisonnement. Activez `kimi.alwaysExpandThinking` dans les paramètres pour développer le processus de réflexion par défaut.

## Modes de travail

### Confirmation d’opération et exécution d’outils

Lorsque Kimi propose d’exécuter un outil ou d’écrire dans un fichier, une boîte de confirmation apparaît avec trois options :

- **Oui** : approuver uniquement l’opération en cours
- **Oui, pour cette session** : approuver les opérations similaires pendant la session en cours, jusqu’au démarrage d’une nouvelle session
- **Non** : refuser d’exécuter l’opération

Activez `kimi.yoloMode` dans les paramètres pour approuver automatiquement tous les appels d’outils. Cette option convient si vous faites confiance au flux de travail et souhaitez gagner en efficacité.

### Boîte de dialogue de question

Pendant l’exécution, Kimi peut vous poser une question, par exemple vous demander de choisir une approche d’implémentation. Une carte de question apparaît alors en bas. Vous pouvez sélectionner directement une option prédéfinie, ou choisir "Réponse personnalisée..." pour saisir votre propre réponse. Une fois votre réponse fournie, Kimi poursuit l’exécution.

### Mode Plan

Cliquez sur l’icône 📋 à gauche de la zone de saisie pour passer en mode Plan. Lorsqu’il est activé, Kimi affiche d’abord une carte de plan extensible avant l’exécution proprement dite, avec la liste des étapes qu’il compte suivre. Vous pouvez examiner le plan avant de le laisser continuer.

- Le bouton du mode Plan conserve son réglage précédent à chaque nouvelle session.
- Si Kimi diffuse déjà une réponse, quitter le mode Plan nécessite une deuxième confirmation afin d’éviter d’interrompre la tâche en cours.

### Suivi des modifications de fichiers

Après modification de fichiers par Kimi, tous les changements sont suivis et affichés dans la section "Modifications de fichiers". Vous pouvez consulter la liste des fichiers modifiés et leur état — ajouté, modifié ou supprimé, par exemple — ainsi que les statistiques des lignes ajoutées et supprimées.

Pour chaque fichier, vous pouvez afficher les changements dans la vue diff native de VS Code, rétablir son état d’origine ou conserver les changements afin d’effacer l’enregistrement de suivi. Les opérations par lot sont prises en charge : vous pouvez donc conserver ou annuler tous les changements en une seule fois. L’état de référence est capturé la première fois qu’un fichier est modifié au cours de la session ; l’annulation restaure le fichier à cette version de référence.

## Gestion du contexte

### Historique des sessions

Cliquez sur le menu déroulant d’historique en haut du panneau pour parcourir les sessions précédentes. Les données de session sont stockées localement et prennent en charge la recherche par mot-clé. Vous pouvez supprimer d’anciennes sessions ou charger une session pour reprendre une conversation précédente.

La barre d’état affiche le pourcentage d’utilisation du contexte ainsi que le nombre de token en entrée/sortie. Lorsque l’utilisation du contexte est élevée, utilisez la commande `/compact` pour le compresser.

### Changer de répertoire de travail

Cliquez sur l’icône d’engrenage (menu d’actions) à droite de la zone de saisie → **Répertoire de travail** pour changer le répertoire de travail parmi les différents sous-répertoires du Workspace actuel. Après le changement, une nouvelle session démarre automatiquement afin que Kimi puisse travailler à partir du contexte du nouveau répertoire. Vous pouvez sélectionner directement un sous-répertoire enregistré, ou utiliser "Parcourir..." pour explorer n’importe quel sous-dossier.

## Menu d’actions

### Liste des fonctionnalités

L’icône d’engrenage située à droite de la zone de saisie ouvre le menu d’actions, qui comprend les fonctionnalités suivantes :

- **Répertoire de travail** : changer le répertoire de travail actuel (voir "Changer de répertoire de travail" ci-dessus)
- **Serveurs MCP** : ouvrir le panneau de configuration des serveurs MCP
- **Configuration générale** : ouvrir la page de configuration de Kimi dans les paramètres de VS Code
- **Afficher les journaux** : ouvrir le panneau des journaux de sortie de Kimi Code pour le dépannage
- **Réinitialiser Kimi** : réinitialiser la Webview Kimi, utile lorsque l’interface est figée ou ne répond plus
- **Se déconnecter / Se connecter** : vous déconnecter de votre compte Kimi ou vous y reconnecter

Vous pouvez également exécuter "Kimi Code: Run CLI" depuis la palette de commandes de VS Code pour lancer directement Kimi Code CLI dans le terminal intégré.
