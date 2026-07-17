---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: false
preview: true
preview_content: "Créez et déployez des sites web à partir de descriptions en langage naturel, de maquettes ou de modèles."
---

<SeoMeta
  title="Présentation de Kimi Websites - Centre d'aide Kimi"
  description="Créez et déployez des sites web à partir de descriptions en langage naturel, de maquettes ou de modèles."
/>

# Kimi Websites

<Callout type="info">
**Kimi Websites** est une fonctionnalité du produit Kimi Agent, propulsée par le tout dernier modèle d'IA agentique visuel multimodal Kimi K3. Sa capacité phare est le **Vibe Coding** — générer des sites web à partir du langage naturel et les déployer en ligne.
</Callout>

En comprenant les entrées visuelles (maquettes d'interface, captures d'écran, vidéos d'interaction) et les instructions en langage naturel, Kimi traduit les indications de l'utilisateur en code frontend complet et exécutable — couvrant non seulement l'interface statique, mais aussi les comportements interactifs dynamiques.

## Présentation de la fonctionnalité

| Fonctionnalité | Description |
|---------|------------|
| **Création conversationnelle de sites** | Décrivez vos besoins en langage naturel ; l'IA génère automatiquement le site web |
| **Compréhension d'images/vidéos** | Téléversez des maquettes/captures d'écran/enregistrements d'écran ; l'IA les analyse et génère des pages HTML |
| **Déploiement automatique** | Déploiement en un clic pour une publication instantanée |
| **Édition en plusieurs tours** | Révisions itératives du site avec comparaison des versions |
| **Partage en un clic** | Génération de liens accessibles pour un partage facile |
| **Choix de modèles** | Plusieurs modèles prédéfinis pour démarrer rapidement la création |
| **Export du code** | Téléchargez les fichiers HTML/CSS/JS empaquetés pour un hébergement autonome |

## Comment utiliser Kimi Websites ?

### Méthode 1 : accéder à la page Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Page d'accueil Kimi Websites"
/>

1. **Ouvrez votre navigateur** : utilisez Chrome, Safari, Edge, Firefox ou tout autre navigateur courant
2. **Rendez-vous sur** : [kimi.com/websites](https://www.kimi.com/zh/websites) (prend en charge le chinois et l'anglais)
3. **Connectez-vous** : avec votre compte Kimi (numéro de téléphone ou e-mail)
4. **Saisissez votre tâche** :

| Approche | Description |
|----------|-------------|
| **Saisie de texte** | Formulez votre demande en langage naturel |
| **Clonage d'image/de site** | Téléversez une maquette ou une capture d'écran |
| **À partir d'un modèle** | Sélectionnez un modèle prédéfini et modifiez le contenu |

5. **Lancez la création** : choisissez un modèle ou démarrez à partir d'une conversation

<Frames
  src="./images/overview/screenshot-27.png"
  alt="capture d'écran 27"
/>

### Méthode 2 : application mobile

iOS, Android et HarmonyOS disposent tous de l'application officielle Kimi. Dans la zone de saisie, appuyez sur la **barre de tâches** → passez au **mode Websites**, qui inclut des outils de génération multimodale et les capacités de l'Agent.

### Méthode 3 : mode Agent général

Sélectionnez le modèle K3 et saisissez une tâche de création de site. Kimi mobilisera ses capacités de codage visuel et ses outils d'exécution de code.

## Comment fonctionne Kimi Websites ?

### Étape 1 : créer un site web par la conversation

Décrivez vos besoins en langage naturel. Trois méthodes de création sont prises en charge :

| Méthode | Description |
|--------|------------|
| **Description textuelle** | Saisissez directement les exigences du site ; l'IA génère automatiquement |
| **Analyse de maquette** | Téléversez un fichier de conception ; l'IA le reconnaît et le recrée sous forme de page web |
| **Création rapide par modèle** | Sélectionnez un modèle prédéfini et modifiez le contenu |

**Exemple de prompt** :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Créez un site web sur les West Highland Terriers avec une palette de couleurs en noir et blanc. Incluez trois sections :\nUn calendrier photo de qualité studio avec affichage d'images générées par IA\nUne encyclopédie de soins et de toilettage « Curly Lab »\nUne boutique vendant des sweats à capuche à motifs Westie et des affiches en édition limitée à dorure argentée. La page de paiement doit comporter un module caritatif — reverser 1 $ par article vendu au sauvetage des chiens errants.",
    },
  ]}
/>

### Étape 2 : le processus de création

<Frames
  src="./images/overview/screenshot-26.png"
  alt="capture d'écran 26"
/>

Kimi Websites active le **SKILL de création de webapp** — un agent dédié de génération de code en plusieurs tours :
1. **Analyse des besoins** : analyse les modules du site, le style visuel et la logique d'interaction
2. **Planification des tâches** : décompose en sous-tâches de conception, de développement et de préparation des ressources
3. **Choix de la pile technique** : sélectionne l'architecture appropriée (par ex. React + Tailwind CSS)
4. **Génération des ressources** : génère images, icônes et autres éléments visuels
5. **Construction du code** : rédige la structure des pages, les styles et le code d'interaction
6. **Optimisation en plusieurs tours** : s'ajuste automatiquement selon les résultats de la prévisualisation jusqu'à l'achèvement

### Étape 3 : prévisualiser et ajuster
- **Prévisualisation en direct** : génère une URL de démonstration HTML consultable immédiatement dans le navigateur
- **Édition conversationnelle** : poursuivez la conversation pour demander des modifications, par ex. *« Mettez la barre de navigation en sombre »*

<Callout type="tip">
**Exemple** : *« Les couleurs ne sont pas terribles — j'aimerais abandonner l'exigence du noir et blanc et en faire un site d'aspect normal. »*
Kimi réorganisera la liste des tâches et poursuivra la création.
</Callout>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### Étape 4 : édition visuelle en ligne
- **Optimisation en plusieurs tours** : peaufinez les détails au fil de la conversation
- **Modes d'édition** :
  - **Mode annotation** : cliquez sur des zones pour ajouter des annotations en langage naturel
  - **Mode sélection** : sélectionnez n'importe quel élément et ajoutez des annotations
  - Utilisez rectangles, flèches, pinceaux et changements de couleur pour signaler vos suggestions de révision
- Envoyez toutes vos suggestions de révision à Kimi en une seule fois
### Étape 5 : déployer et publier
| Méthode de déploiement | Description |
|-------------------|------------|
| **Déploiement automatique** | Déploiement en un clic avec génération d'un lien en ligne |
| **Téléchargement et hébergement autonome** | Téléchargez les fichiers de code empaquetés et déployez-les sur votre propre serveur |
| **Domaine personnalisé** | Associez le site généré à votre propre nom de domaine |

Une fois la génération terminée, vous pouvez :
- Cliquer sur les différentes versions de déploiement pour télécharger les fichiers de version
- Cliquer sur le bouton de partage pour obtenir un lien déployé publiquement (ou le passer en privé)
- Cliquer sur le bouton d'édition pour poursuivre les révisions
- Télécharger le code HTML/CSS/JS complet pour un déploiement direct ou un perfectionnement supplémentaire

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## Public cible
| Public | Cas d'usage |
|----------|----------|
| **Développeurs** | Concevoir des prototypes de produits et des démos frontend, réduisant considérablement le temps de création depuis zéro |
| **Entrepreneurs** | Créer rapidement des pages de destination, des vitrines de produits et des sites d'entreprise avec des ressources limitées |
| **Chefs de produit** | Transformer rapidement des PRD ou des maquettes en prototypes interactifs présentables |
| **Utilisateurs non techniques** | Aucun code requis — décrivez votre idée ou téléversez une image de référence pour passer du concept à une page web fonctionnelle |

## Scénarios de référence
| Scénario | Exemple de prompt |
|----------|---------------|
| **Page de destination depuis zéro** | Créez une page de destination marketing SaaS à l'esthétique tech — avec section héros, présentation des fonctionnalités, tarifs et CTA |
| **Reproduction de site à partir d'une vidéo** | [Téléverser l'enregistrement d'écran] Reproduisez le site montré dans cette vidéo en conservant les effets d'interaction d'origine |
| **Reproduction à partir d'une capture d'écran** | [Téléverser la maquette] Transformez cette conception en code de page web exécutable |
| **Portfolio personnel** | Créez le site portfolio d'un photographe — style minimaliste noir et blanc avec une mise en page d'images en mosaïque |
| **Page de visualisation de données** | Créez une page de visualisation présentant les données de financement des entreprises d'IA en 2025 avec graphiques et filtres |
| **Site de marque** | Créez le site d'une marque de café aux tons terreux sobres — avec pages d'accueil, produits et localisateur de magasins |
| **Utilitaire / Calculateur** | Créez une page web de calculateur d'IMC — interface épurée, prise en charge du changement d'unité, avec indicateurs de niveau de santé |
