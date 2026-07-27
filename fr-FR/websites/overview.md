---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: true
preview: true
preview_content: "Créez et déployez des sites web full-stack à partir de descriptions en langage naturel, de maquettes ou de modèles."
---

<SeoMeta
  title="Présentation de la fonctionnalité Kimi Websites - Centre d’aide Kimi"
  description="Découvrez les capacités de création de sites web full-stack de Kimi Websites. Générez des sites complets (frontend + backend + base de données) en langage naturel, avec déploiement en un clic, modification multi-tour et export du code."
/>

# Présentation de la fonctionnalité Kimi Websites

## Qu’est-ce que Kimi Websites

Kimi Websites est le produit de création de sites web full-stack de Kimi Agent, propulsé par Kimi K3, un modèle d’IA agentique visuel multimodal. Sa capacité principale est la programmation visuelle (Vibe Coding) : vous pouvez générer un site web full-stack complet à partir de langage naturel, d’une maquette ou d’un enregistrement d’écran, puis le prévisualiser en ligne et le publier en un clic.

Les sites web générés par Kimi Websites peuvent inclure :

- **Frontend** : structure de pages HTML, mises en page et styles CSS, ainsi que logique d’interaction JavaScript (effets de mouvement, animations, etc.)
- **Backend** : stockage persistant en base de données, connexion utilisateur et authentification
- **Ingénierie** : gestion automatique des versions, prévisualisation full-stack et déploiement public

### Fonctionnalités du produit

| Fonctionnalité        | Description                                                  |
|----------------|--------------------------------------------------------------|
| Création de sites par conversation | Décrivez vos besoins en langage naturel, et l’IA génère automatiquement un site web full-stack |
| Compréhension d’images et de vidéos | Importez une maquette, une capture d’écran ou un enregistrement d’écran, et l’IA l’analyse automatiquement pour générer les pages |
| Stockage persistant | Crée automatiquement une base de données backend, avec lecture, écriture et gestion persistantes des données |
| Gestion de base de données | Fournit un panneau visuel de base de données pour les opérations de base, comme consulter, modifier et supprimer des données |
| Connexion utilisateur | Prend en charge la connexion avec un compte Kimi, et peut aussi créer un système de connexion par nom d’utilisateur/mot de passe via la base de données |
| Gestion des versions | L’IA crée automatiquement des commits de version (git commit) et permet de revenir à n’importe quelle version précédente |
| Prévisualisation full-stack | Prend en charge la prévisualisation complète du frontend et du backend ; certains scénarios nécessitent de démarrer manuellement l’environnement sandbox |
| Modification multi-tour | Prend en charge les modifications itératives via des conversations multi-tours et permet de comparer différentes versions |
| Modification visuelle | Annotez les éléments sur la page de prévisualisation en les entourant ou en les marquant, puis envoyez toutes vos suggestions à Kimi en une seule fois |
| Publication et déploiement | Après avoir cliqué manuellement sur « Publier », le site est déployé sur Internet public ; avant publication, il n’est disponible qu’en prévisualisation. Le déploiement full-stack est pris en charge |
| URL personnalisée | Personnalisez le sous-domaine du site, par exemple le `abc` dans `abc.ok.kimi.link` |
| Partage et contrôle d’accès | Obtenez un lien de partage public en un clic, ou rendez le site privé/visible uniquement par vous |
| Sélection de modèles | Propose plusieurs modèles prédéfinis pour commencer rapidement |
| Export du code | Permet de télécharger le package complet du projet (frontend et backend inclus) pour un déploiement autogéré |

## Utilisation

### Méthode 1 : accès sur le Web
Rendez-vous sur la page dédiée de Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Page d’accueil Kimi Websites"
/>

1. Ouvrez un navigateur : utilisez un navigateur courant comme Chrome, Safari, Edge ou Firefox.
2. Ouvrez l’adresse officielle d’accès : page dédiée Kimi Websites : [https://www.kimi.com/zh/websites](https://www.kimi.com/zh/websites) (interfaces en chinois et en anglais prises en charge)
3. Connectez-vous à votre compte : connectez-vous avec un compte Kimi (inscription par numéro de téléphone mobile ou par e-mail possible)
4. Saisissez votre tâche de création de site. Kimi Websites propose trois grands modes de création :
   1. **Saisie de texte** : saisissez la tâche dans la boîte de dialogue et décrivez en langage naturel le site que vous souhaitez ;
   2. **Remix d’image/de site web** : importez une maquette ou une capture d’écran d’un site web que vous aimez pour déclencher la fonctionnalité correspondante ;
   3. **Création à partir d’un modèle** : créez rapidement un site standard en choisissant un modèle prédéfini et en modifiant le contenu ;
5. Lancez la création : accédez à l’interface de la fonctionnalité Websites, choisissez un modèle ou créez directement par conversation.

<Frames
  src="./images/overview/screenshot-27.png"
  alt="capture d’écran 27"
/>

### Méthode 2 : accès depuis l’application mobile
Sélectionnez l’outil dédié aux sites web dans l’application mobile

<Frames
  src="./images/overview/screenshot-27.png"
  alt="Interface de création de sites web"
/>

Les applications officielles sont disponibles pour iOS, Android et HarmonyOS (nom de l’application : « Kimi »). Au-dessus de la zone de saisie, touchez la barre d’outils (Taskbar) → passez en mode Websites. Elle inclut des outils de génération multimodale et des capacités Agent, ce qui vous permet de fournir une entrée visuelle et de générer du code frontend.

### Méthode 3 : mode Agent général
En mode Agent général, saisissez vos exigences de création de site web

Sur le site officiel ou sur mobile, sélectionnez le modèle K3 et saisissez des instructions liées à la création d’un site web. Kimi invoquera les capacités de programmation visuelle et les outils d’exécution de code.

## Étapes

### Créer un site web par conversation

Décrivez vos besoins en langage naturel dans la zone de saisie, et Kimi les comprendra puis les exécutera. Trois méthodes de création sont prises en charge :

| Méthode             | Description                              |
|--------------------|------------------------------------------|
| Description textuelle   | Saisissez directement les exigences du site, et l’IA génère automatiquement le site |
| Analyse d’une maquette | Importez une maquette, et l’IA la reconnaît puis la recrée sous forme de page web |
| Création rapide de sites standards | Choisissez un modèle prédéfini et modifiez le contenu |

### Exemple pratique

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Saisissez une tâche de création de site web\nCréez un site web pour des chiots West Highland White Terrier, avec une palette principale noir et blanc. Incluez trois sections :\n1. Un calendrier de portraits de qualité studio avec affichage d’images générées par IA ;\n2. Une encyclopédie d’entretien \"Curly-Coat Lab\" ;\n3. Une boutique de produits dérivés vendant des sweats à capuche avec avatars de Westie et des affiches en édition limitée à feuille argentée.\nLa page de paiement doit inclure un module caritatif : faire don de 1 $ par article vendu au sauvetage de chiots errants.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="Exemple de site web"
/>

### Vue d’ensemble du flux de création de site web

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Description des exigences → Kimi réfléchit à la tâche → invoque le SKILL de création de webapp →\ncomprend la stack technique et le processus de build → crée une liste de tâches et initialise le projet → rédige une to-do list → exécute le terminal → génère des images → prévisualise et ajuste →\nmet à jour l’avancement des tâches et développe le cœur du code du site → met à jour les fichiers CSS et de configuration, puis crée les composants → effectue des modifications multi-tours → déploie en ligne → partage et diffuse",
    },
  ]}
/>

Kimi Websites active le SKILL de création de webapp, un agent de génération de code multi-tour dédié à la construction de sites web. Il exécute de manière autonome le flux de travail suivant :

1. Analyse des exigences : analyse automatiquement les modules fonctionnels du site, le style visuel et la logique d’interaction
2. Planification des tâches : décompose le travail en sous-tâches comme la conception, le développement et la préparation des assets
3. Solution technique : sélectionne automatiquement une architecture technique adaptée (par exemple React + Tailwind CSS)
4. Génération d’assets : génère au besoin des assets visuels comme des images et des icônes
5. Construction du code : écrit la structure des pages, les styles et le code d’interaction
6. Optimisation multi-tour : ajuste automatiquement le site à partir de la prévisualisation jusqu’à ce qu’il soit terminé

<Frames
  src="./images/overview/screenshot-26.png"
  alt="capture d’écran 26"
/>

### Prévisualiser et ajuster

- **Prévisualisation en temps réel** : génère une URL de démonstration HTML que vous pouvez ouvrir immédiatement dans un navigateur
- **Modifications par conversation** : poursuivez la conversation pour demander des changements, par exemple « change la barre de navigation pour un style sombre »

#### Exemple réel

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Les couleurs ne rendent pas très bien. Je veux supprimer l’exigence noir et blanc et en faire un site d’apparence normale.\nKimi Websites réorganisera la to-do list et poursuivra la création du site web.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### Interface du panneau de prévisualisation

Une fois le site généré, le panneau de prévisualisation s’ouvre à droite, et des cartes de version apparaissent également dans la conversation. Les principales entrées d’action sont les suivantes :

**Barre d’outils supérieure du panneau de prévisualisation** (de gauche à droite) :

| Bouton | Fonction |
|--------|----------|
| Prévisualisation / Code | Basculer entre la prévisualisation visuelle et les vues du code source/de l’arborescence des fichiers |
| Modifier | Passer en mode modification ; cliquez sur une zone à changer, ajoutez des notes d’annotation, puis envoyez-les à Kimi |
| Publier | Si le site n’est pas encore publié, cliquez sur « Publier » pour le rendre public |
| Partager | Après publication, utilisez la carte de partage pour copier le lien, personnaliser le sous-domaine, ouvrir le site web, cliquer sur « … » pour annuler la publication, ou cliquer sur « Mettre à jour la publication » lorsqu’une nouvelle version est disponible |
| Prévisualisation plein écran | Afficher le site web en plein écran |
| Changer de mode de prévisualisation | Basculer entre les vues desktop et mobile |
| Actualiser | Recharger la prévisualisation |
| Retour utilisateur | Signaler les problèmes rencontrés pendant l’utilisation ; vous pouvez saisir du texte et importer des captures d’écran |
| Fermer | Réduire le panneau de prévisualisation |

**Cartes de version dans la conversation** : affichent le nom du site, le numéro de version (par exemple V2) et l’URL. Cliquez sur **Prévisualiser** pour ouvrir la version correspondante ; cliquez sur **Restaurer** pour revenir à cette version. La carte **Tous les fichiers** permet de consulter ou de télécharger l’ensemble des fichiers du projet. Pour connaître l’utilisation détaillée de chaque bouton, consultez les sections correspondantes ci-dessous.

### Modification visuelle

<Frames
  src="./images/overview/web-case1.png"
  alt="Interface de modification visuelle"
/>

- **Optimisation multi-tour** : ajustez finement les détails du site web au fil de la conversation
- **Modes de modification** :
  - **Mode annotation** : cliquez sur la partie de la page web que vous souhaitez modifier et ajoutez des commentaires en langage naturel
  - **Mode sélection** : sélectionnez n’importe quel élément de la page web et ajoutez des commentaires
  - Utilisez des rectangles, des flèches, des pinceaux, le changement de couleur et d’autres outils de sélection et de modification pour ajouter des suggestions de changement
- Après avoir ajouté des annotations à plusieurs endroits, ajoutez-les à la conversation et envoyez toutes vos suggestions à Kimi en une seule fois

### Déploiement et publication du code
| Méthode de déploiement | Description                                           |
|-------------------|------------------------------------------------------|
| Publication en un clic | Cliquez sur le bouton « Publier » pour déployer le site sur Internet public et générer un lien en ligne accessible (prévisualisation seule avant publication) |
| Télécharger et déployer | Téléchargez le package de code et déployez-le sur votre propre serveur |
| URL personnalisée | Remplacez l’URL aléatoire par défaut par un nom mémorisable, par exemple en personnalisant le `abc` dans `abc.ok.kimi.link` |

> **À propos de « URL personnalisée »** : 3 à 30 caractères, uniquement des lettres minuscules, des chiffres et des traits d’union. Ne peut pas commencer ni se terminer par un trait d’union, et ne peut pas être composé uniquement de chiffres. Certains mots réservés (comme `kimi`, `www`, `login`, etc.) ne sont pas disponibles. Si le nom est déjà pris ou indisponible, veuillez en choisir un autre.

> **À propos des limites de « Télécharger et déployer »** : **la connexion avec un compte Kimi** et **la base de données cloud gérée par la plateforme** sont fournies par la plateforme Kimi et ne migrent pas avec le code exporté. Si vous déployez le code sur votre propre serveur, la méthode de connexion doit être remplacée par un système nom d’utilisateur/mot de passe fondé sur votre propre base de données, et les données doivent également être migrées vers votre base de données. Pour un simple accès public, nous recommandons d’utiliser directement **Publication en un clic** ; la connexion avec compte Kimi et les données cloud continueront alors de fonctionner normalement. Consultez [Pourquoi le site web que j’ai créé ne fonctionne-t-il pas ?](/websites/websites-why-not-working) pour en savoir plus.

#### Prévisualisation par version
Une fois la génération terminée, vous accédez à la page de prévisualisation.
Dans l’interface de prévisualisation, vous pouvez cliquer sur différentes versions de déploiement et télécharger les fichiers de différentes versions.

<Frames
  src="./images/overview/screenshot-26.png"
  alt="Prévisualisation de version"
/>

#### Publier, partager et annuler la publication
Avant publication, le site web ne peut être prévisualisé que dans la conversation. Pour permettre à d’autres personnes d’y accéder, cliquez sur **Partager** dans l’angle supérieur droit du panneau de prévisualisation afin d’ouvrir le panneau de publication :

1. **URL personnalisée** : vous pouvez modifier le nom dans l’URL par défaut, par exemple en le remplaçant par `yourname.ok.kimi.link` ;
2. Cliquez sur **Copier le lien** pour obtenir l’URL publique, ou sur **Ouvrir le site web** pour l’afficher dans un nouvel onglet. Après publication, le haut du panneau affiche **Publié**, et toute personne disposant du lien peut y accéder ;
3. Pour mettre le site hors ligne, sélectionnez **Annuler la publication** dans le menu **…** situé dans l’angle supérieur droit du panneau. Le site ne sera plus accessible publiquement (le code et les données sont conservés, et vous pouvez le republier à tout moment).

### Modification multi-tour

Si une partie précise ne vous convient pas, cliquez sur le bouton de modification dans la fenêtre de prévisualisation pour continuer à l’affiner.
Vous pouvez aussi envoyer des instructions à Kimi en langage naturel et poursuivre la modification avec Agent.
Lorsque le résultat vous convient, téléchargez le code HTML/CSS/JS complet et déployez-le directement, ou continuez à le peaufiner dans un éditeur.

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## À qui s’adresse cette fonctionnalité

- Développeurs : concevez des prototypes produit et des démos frontend, en réduisant fortement le temps nécessaire pour partir de zéro.
- Entrepreneurs : créez rapidement des sites officiels, des landing pages et des pages de présentation produit lorsque les ressources sont limitées.
- Chefs de produit : transformez rapidement un PRD ou une maquette en prototype interactif démontrable, sans attendre la planification du développement.
- Utilisateurs non techniques : aucune connaissance en code n’est requise. Décrivez votre idée ou importez une image de référence, et passez du concept à une page web exécutable.

## Exemples de prompts
**Vous pouvez vous inspirer des scénarios et prompts suivants pour générer du contenu**

| Scénario         | Exemple de prompt                                                   |
|------------------|------------------------------------------------------------------|
| Créer une landing page à partir de zéro | Aide-moi à créer une landing page marketing pour un produit SaaS au style technologique, avec une section hero, une présentation des fonctionnalités, les tarifs et un CTA |
| Recréer un site web à partir d’une vidéo | [Importer un enregistrement d’écran] Recrée le site web montré dans la vidéo et conserve les interactions d’origine |
| Recréer à partir d’une capture d’écran | [Importer une maquette] Implémente ce design sous forme de code de page web exécutable |
| Portfolio personnel | Aide-moi à créer un site portfolio personnel pour un photographe, avec un style noir et blanc minimaliste et la prise en charge d’une mise en page d’images en masonry |
| Page de visualisation de données | Crée une page web de visualisation présentant les données de financement des entreprises d’IA en 2025, avec graphiques et filtres |
| Site de marque | Aide-moi à créer le site officiel d’une marque de café, avec une palette de couleurs Morandi, une page d’accueil, des pages produits et des pages de boutiques |
| Utilitaire/calculatrice | Crée une page web de calcul de l’IMC avec une interface épurée, un changement d’unités et des conseils selon le niveau de santé |
