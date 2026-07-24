---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: true
preview: true
preview_content: "Créez et déployez des sites web full-stack à partir de descriptions en langage naturel, de maquettes ou de modèles."
---

<SeoMeta
  title="Présentation de Kimi Websites - Centre d’aide Kimi"
  description="Découvrez les capacités de création de sites web full-stack de Kimi Websites. Générez des sites complets (frontend + backend + base de données) en langage naturel, avec déploiement en un clic, modifications multi-tours et export du code."
/>

# Présentation de Kimi Websites

## Qu’est-ce que Kimi Websites

Kimi Websites est le produit de création de sites web full-stack de Kimi Agent, propulsé par Kimi K3, un modèle d’IA multimodal, visuel et agentique. Sa capacité centrale est la programmation visuelle (Vibe Coding) : vous pouvez générer un site web full-stack complet à partir de langage naturel, d’une maquette ou d’un enregistrement d’écran, puis le prévisualiser en ligne et le publier en un clic.

Les sites générés par Kimi Websites peuvent inclure :

- **Frontend** : structure de pages HTML, mises en page et styles CSS, ainsi que logique d’interaction JavaScript (effets de mouvement, animations, etc.)
- **Backend** : stockage persistant en base de données, connexion utilisateur et authentification
- **Ingénierie** : gestion automatique des versions, prévisualisation full-stack et déploiement public

### Fonctionnalités du produit

| Fonctionnalité        | Description                                                  |
|----------------|--------------------------------------------------------------|
| Création de site conversationnelle | Décrivez votre besoin en langage naturel, et l’IA génère automatiquement un site web full-stack |
| Compréhension image/vidéo | Importez une maquette, une capture d’écran ou un enregistrement d’écran : l’IA l’analyse automatiquement et génère les pages |
| Stockage persistant | Crée automatiquement une base de données backend, avec lecture, écriture et gestion persistantes des données |
| Gestion de base de données | Fournit un panneau visuel de base de données pour les opérations courantes : consultation, modification, suppression |
| Connexion utilisateur | Prend en charge la connexion avec un compte Kimi et peut aussi créer un système identifiant/mot de passe via la base de données |
| Gestion des versions | L’IA crée automatiquement des commits de version (git commit) et permet de revenir à n’importe quelle version antérieure |
| Prévisualisation full-stack | Prend en charge la prévisualisation complète du frontend et du backend ; certains scénarios exigent de démarrer manuellement l’environnement sandbox |
| Modifications multi-tours | Permet d’effectuer des changements itératifs au fil de conversations multi-tours et de comparer différentes versions |
| Édition visuelle | Annotez les éléments sur la page de prévisualisation en les encerclant ou en les marquant, puis envoyez toutes vos suggestions à Kimi en une seule fois |
| Publication et déploiement | Après avoir cliqué manuellement sur « Publier », le site est déployé sur l’Internet public ; avant publication, il reste uniquement en prévisualisation. Le déploiement full-stack est pris en charge |
| URL personnalisée | Personnalisez le sous-domaine du site, par exemple `abc` dans `abc.ok.kimi.link` |
| Partage et contrôle d’accès | Obtenez un lien de partage public en un clic, ou rendez le site privé/visible uniquement par vous |
| Choix de modèles | Propose plusieurs modèles prédéfinis pour démarrer rapidement |
| Export du code | Permet de télécharger le package complet du projet (frontend et backend inclus) pour un déploiement autogéré |

## Mode d’emploi

### Méthode 1 : accès sur le Web
Rendez-vous sur la page dédiée à Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Page d’accueil de Kimi Websites"
/>

1. Ouvrez un navigateur : utilisez un navigateur courant comme Chrome, Safari, Edge ou Firefox.
2. Ouvrez l’adresse officielle : page dédiée Kimi Websites : [https://www.kimi.com/zh/websites](https://www.kimi.com/zh/websites) (interfaces en chinois et en anglais prises en charge)
3. Connectez-vous à votre compte : connectez-vous avec un compte Kimi (inscription par numéro de mobile ou e-mail prise en charge)
4. Saisissez votre tâche de création de site. Kimi Websites propose trois grandes façons de créer un site :
   1. **Saisie de texte** : saisissez la tâche dans la boîte de dialogue et décrivez en langage naturel le site souhaité ;
   2. **Image/remix de site web** : importez une maquette ou la capture d’écran d’un site que vous aimez pour déclencher la fonctionnalité correspondante ;
   3. **Création à partir d’un modèle** : créez rapidement un site standard en choisissant un modèle prédéfini et en modifiant le contenu ;
5. Lancez la création : accédez à l’interface de la fonctionnalité Websites, choisissez un modèle ou créez directement le site par conversation.

<Frames
  src="./images/overview/screenshot-27.png"
  alt="capture d’écran 27"
/>

### Méthode 2 : accès depuis l’application mobile
Sélectionnez l’outil de création de site dédié dans l’App mobile

<Frames
  src="./images/overview/screenshot-27.png"
  alt="Interface de création de site web"
/>

Les Apps officielles sont disponibles pour iOS, Android et HarmonyOS (nom de l’application : « Kimi »). Au-dessus de la zone de saisie, touchez la barre d’outils (barre des tâches) → passez en mode Websites. Elle inclut des outils de génération multimodale et les capacités Agent, ce qui vous permet de fournir une entrée visuelle et de générer du code frontend.

### Méthode 3 : mode Agent général
En mode Agent général, saisissez vos exigences de création de site

Sur le site officiel ou depuis un appareil mobile, sélectionnez le modèle K3 et saisissez des instructions de tâche liées à la création d’un site web. Kimi invoquera ses capacités de programmation visuelle et ses outils d’exécution de code.

## Étapes

### Créer un site par conversation

Décrivez votre besoin en langage naturel dans la zone de saisie, et Kimi le comprendra puis l’exécutera. Trois méthodes de création sont prises en charge :

| Méthode             | Description                              |
|--------------------|------------------------------------------|
| Description textuelle   | Saisissez directement les exigences du site, et l’IA génère automatiquement le site |
| Analyse d’une maquette | Importez une maquette ; l’IA la reconnaît et la recrée sous forme de page web |
| Création rapide de sites standards | Choisissez un modèle prédéfini et modifiez le contenu |

### Exemple pratique

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Saisissez une tâche de création de site\nCréez un site web pour des chiots West Highland White Terrier, avec une palette principale noir et blanc. Incluez trois sections :\n1. Un calendrier de portraits en qualité studio avec des images générées par IA ;\n2. Une encyclopédie de soins \"Curly-Coat Lab\" ;\n3. Une boutique de produits dérivés vendant des sweats à capuche avec des avatars de Westie et des affiches en édition limitée avec dorure argentée.\nLa page de paiement doit inclure un module caritatif : donner 1 $ par article vendu à une association de sauvetage de chiots errants.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="Exemple de site web"
/>

### Vue d’ensemble du workflow de création de site

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Description des exigences → Kimi réfléchit à la tâche → invoque le SKILL de création de webapp →\ncomprend la stack technique et le processus de build → crée une liste de tâches et initialise le projet → rédige une liste de choses à faire → exécute le terminal → génère des images → prévisualise et ajuste →\nmet à jour l’avancement des tâches et développe le code cœur du site → met à jour les fichiers CSS et de configuration, puis crée les composants → effectue des modifications multi-tours → déploie en ligne → partage et diffuse",
    },
  ]}
/>

Kimi Websites active le SKILL de création de webapp, un agent de génération de code multi-tours dédié à la construction de sites web. Il exécute de manière autonome le workflow suivant :

1. Analyse des exigences : analyse automatiquement les modules fonctionnels du site, le style visuel et la logique d’interaction
2. Planification des tâches : décompose le travail en sous-tâches telles que design, développement et préparation des assets
3. Solution technique : sélectionne automatiquement une architecture technique adaptée (comme React + Tailwind CSS)
4. Génération d’assets : génère les assets visuels nécessaires, tels que des images et des icônes
5. Construction du code : écrit la structure des pages, les styles et le code d’interaction
6. Optimisation multi-tours : ajuste automatiquement le résultat à partir de la prévisualisation jusqu’à finalisation du site

<Frames
  src="./images/overview/screenshot-26.png"
  alt="capture d’écran 26"
/>

### Prévisualiser et ajuster

- **Prévisualisation en temps réel** : génère une URL de démo HTML que vous pouvez ouvrir immédiatement dans un navigateur
- **Modifications conversationnelles** : poursuivez la conversation pour demander des changements, par exemple « passer la barre de navigation en style sombre »

#### Exemple réel

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Les couleurs ne rendent pas très bien. Je veux supprimer l’exigence de noir et blanc et obtenir un site à l’apparence plus classique.\nKimi Websites réorganisera la liste de tâches et poursuivra la création du site.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="cas web 2"
/>

### Interface du panneau de prévisualisation

Une fois le site généré, le panneau de prévisualisation s’ouvre à droite, et des cartes de version apparaissent également dans la conversation. Les principales entrées d’action sont les suivantes :

**Barre d’outils supérieure du panneau de prévisualisation** (de gauche à droite) :

| Bouton | Fonction |
|--------|----------|
| Prévisualisation / Code | Basculer entre la prévisualisation visuelle et les vues du code source/de l’arborescence des fichiers |
| Modifier | Entrer en mode édition ; cliquez sur une zone à modifier, ajoutez des notes d’annotation et envoyez-les à Kimi |
| Partager | Publier le site, copier le lien, personnaliser l’URL ou dépublier |
| Prévisualisation plein écran | Afficher le site en plein écran |
| Changer de mode de prévisualisation | Basculer entre les vues ordinateur et mobile |
| Actualiser | Recharger la prévisualisation |
| Retour utilisateur | Signaler des problèmes rencontrés pendant l’utilisation ; vous pouvez saisir du texte et importer des captures d’écran |
| Fermer | Replier le panneau de prévisualisation |

**Cartes de version dans la conversation** : elles affichent le nom du site, le numéro de version (par exemple V2) et l’URL. Cliquez sur **Prévisualiser** pour ouvrir la version correspondante ; cliquez sur **Restaurer** pour revenir à cette version. La carte **Tous les fichiers** permet de consulter ou de télécharger les fichiers complets du projet. Pour le détail d’utilisation de chaque bouton, consultez les sections correspondantes ci-dessous.

### Édition visuelle

<Frames
  src="./images/overview/web-case1.png"
  alt="Interface d’édition visuelle"
/>

- **Optimisation multi-tours** : affinez les détails du site au fil d’une conversation continue
- **Modes de modification** :
  - **Mode annotation** : cliquez sur la partie de la page web à modifier et ajoutez des commentaires en langage naturel
  - **Mode sélection** : sélectionnez n’importe quel élément de la page web et ajoutez des commentaires
  - Utilisez des rectangles, flèches, pinceaux, changements de couleur et autres outils de sélection et d’édition pour ajouter des suggestions de modification
- Après avoir ajouté des annotations à plusieurs endroits, ajoutez-les à la conversation et envoyez toutes vos suggestions à Kimi en une seule fois

### Déploiement du code et publication
| Méthode de déploiement | Description                                           |
|-------------------|------------------------------------------------------|
| Publication en un clic | Cliquez sur le bouton « Publier » pour déployer le site sur l’Internet public et générer un lien en ligne accessible (prévisualisation uniquement avant publication) |
| Télécharger et déployer | Téléchargez le package de code et déployez-le sur votre propre serveur |
| URL personnalisée | Remplacez l’URL aléatoire par défaut par un nom mémorisable, par exemple en personnalisant `abc` dans `abc.ok.kimi.link` |

> **À propos de l’« URL personnalisée »** : 3 à 30 caractères, uniquement des lettres minuscules, des chiffres et des traits d’union. Elle ne peut pas commencer ni se terminer par un trait d’union, ni être entièrement numérique. Certains mots réservés (comme `kimi`, `www`, `login`, etc.) ne sont pas disponibles. Si le nom est déjà pris ou indisponible, veuillez en choisir un autre.

> **À propos des limites de « Télécharger et déployer »** : la **connexion par compte Kimi** et la **base de données cloud gérée par la plateforme** sont fournies par la plateforme Kimi et ne seront pas migrées avec le code exporté. Si vous déployez le code sur votre propre serveur, la méthode de connexion doit être remplacée par un système identifiant/mot de passe basé sur votre propre base de données, et les données doivent également être migrées vers votre propre base. Pour un simple accès public, nous recommandons d’utiliser directement **Publication en un clic** ; la connexion par compte Kimi et les données cloud continueront alors de fonctionner normalement. Consultez [Pourquoi le site que j’ai créé ne fonctionne-t-il pas ?](/websites/websites-why-not-working) pour plus de détails.

#### Prévisualisation d’une version spécifique
Une fois la génération terminée, vous accédez à la page de prévisualisation.
Dans l’interface de prévisualisation, vous pouvez cliquer sur différentes versions de déploiement et télécharger les fichiers de chaque version.

<Frames
  src="./images/overview/screenshot-26.png"
  alt="Prévisualisation de version"
/>

#### Publier, partager et dépublier
Avant publication, le site ne peut être prévisualisé que dans la conversation. Pour permettre à d’autres personnes d’y accéder, cliquez sur **Partager** dans l’angle supérieur droit du panneau de prévisualisation afin d’ouvrir le panneau de publication :

1. **URL personnalisée** : vous pouvez modifier le nom dans l’URL par défaut, par exemple en le remplaçant par `yourname.ok.kimi.link` ;
2. Cliquez sur **Copier le lien** pour obtenir l’URL publique, ou sur **Ouvrir le site web** pour l’afficher dans un nouvel onglet. Après publication, le haut du panneau indique **Publié**, et toute personne disposant du lien peut y accéder ;
3. Pour mettre le site hors ligne, sélectionnez **Dépublier** dans le menu **…** situé dans l’angle supérieur droit du panneau. Le site ne sera plus accessible publiquement (le code et les données sont conservés, et vous pouvez le republier à tout moment).

### Modifications multi-tours

Si une partie précise ne vous convient pas, cliquez sur le bouton de modification dans la fenêtre de prévisualisation pour continuer à l’affiner.
Vous pouvez aussi envoyer des instructions à Kimi en langage naturel et poursuivre l’édition avec Agent.
Une fois le résultat validé, téléchargez le code HTML/CSS/JS complet et déployez-le directement, ou continuez à le peaufiner dans un éditeur.

<Frames
  src="./images/overview/web-case1.png"
  alt="cas web 1"
/>

## À qui s’adresse Kimi Websites

- Développeurs : concevoir des prototypes produit et des démos frontend, en réduisant fortement le temps nécessaire pour partir de zéro.
- Entrepreneurs : créer rapidement des sites officiels, des landing pages et des pages de présentation produit lorsque les ressources sont limitées.
- Chefs de produit : transformer rapidement un PRD ou une maquette en prototype interactif démontrable, sans attendre la planification du développement.
- Utilisateurs non techniques : aucune connaissance en code n’est requise. Décrivez votre idée ou importez une image de référence, et passez du concept à une page web exécutable.

## Exemples de prompts
**Vous pouvez vous inspirer des scénarios et prompts suivants pour générer du contenu**

| Scénario         | Exemple de prompt                                                   |
|------------------|------------------------------------------------------------------|
| Créer une landing page de zéro | Aide-moi à créer une landing page marketing pour un produit SaaS au style technologique, comprenant une section hero, une présentation des fonctionnalités, les tarifs et un CTA |
| Recréer un site à partir d’une vidéo | [Importer un enregistrement d’écran] Recrée le site montré dans la vidéo et conserve les interactions d’origine |
| Recréer à partir d’une capture d’écran | [Importer une maquette] Implémente ce design sous forme de code de page web exécutable |
| Portfolio personnel | Aide-moi à créer un site portfolio personnel pour un photographe, avec un style minimaliste noir et blanc et la prise en charge d’une mise en page d’images en maçonnerie |
| Page de visualisation de données | Crée une page web de visualisation montrant les données de financement des entreprises d’IA en 2025, avec graphiques et filtres |
| Site de marque | Aide-moi à créer un site officiel pour une marque de café, avec une palette Morandi, comprenant une page d’accueil, des pages produits et des pages de boutiques |
| Outil/calculateur | Crée une page web de calcul de l’IMC avec une interface épurée, le changement d’unités et des conseils sur le niveau de santé |
