---
title: "Recherche agentique"
slug: "search"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="La recherche agentique pour des guides et des réponses - Centre d'aide Kimi"
  description="La recherche agentique de Kimi repose sur une architecture d'apprentissage par renforcement agentique de bout en bout. Contrairement aux approches traditionnelles d'orchestration d'outils, elle permet à l'IA..."
/>

# Recherche agentique

<Callout type="info">
La recherche agentique de Kimi repose sur une architecture d'apprentissage par renforcement agentique de bout en bout. Contrairement aux approches traditionnelles d'orchestration d'outils, elle laisse l'IA décider de façon autonome du moment où chercher, des outils à mobiliser et de la manière d'ajuster sa stratégie — ce qui rend possibles des tâches complexes de collecte et de traitement de l'information.
</Callout>

Par rapport à la recherche traditionnelle par correspondance de mots-clés, les capacités de recherche de Kimi ont connu deux grandes évolutions :
- **Explorer Search** (octobre 2024) associait la compréhension sémantique des grands modèles de langage à la récupération d'informations en temps réel, en décomposant automatiquement les questions complexes et en remontant jusqu'aux sources.
- **Agentic Search** va plus loin grâce à une planification autonome et à l'appel d'outils, prenant en charge l'interrogation de données financières, la recherche de littérature académique, la recherche d'images et d'autres tâches multimodales.

## Paramètres de la Web Search

<Frames
  src="./images/search/web-search.png"
  alt="Web search"
/>

La Web Search (Auto/Désactivée) repousse les limites de fraîcheur des connaissances pour fournir des informations en temps réel, fiables et traçables.

Cliquez sur le bouton « Web search » sous la zone de saisie de la conversation. Une fois activé, Kimi détermine de façon autonome si la question actuelle nécessite des données en temps réel, et mobilise intelligemment les moteurs de recherche et les bases de données verticales pour récupérer et synthétiser l'information.

## Capacités essentielles

### 1. La fraîcheur alliée à l'autorité
Une récupération web en temps réel couvrant plus de 100 sources vérifiées et fiables (grands médias d'information, communiqués officiels, plateformes de données financières, bases de données de revues académiques) — pour une information à la fois actuelle et faisant autorité.

### 2. Attribution des sources
Toutes les réponses issues d'une recherche comprennent des liens vers les sources de référence. Cliquez pour consulter la page d'origine et vérifier pleinement l'exactitude et le contexte.

### 3. Accès mondial à l'information
La prise en charge des conversations en langage naturel s'étend à plusieurs langues. Kimi peut rechercher de façon proactive dans des sources non anglophones (par exemple, de la documentation technique en japonais ou des actualités en français) et synthétise automatiquement les informations multilingues.

## Cas d'usage recommandés

- Actualités et mises à jour en temps réel (dernières nouvelles, données boursières, changements de politique)
- Vérification des faits (rumeurs en ligne, données historiques, méthodes statistiques)
- Recherche professionnelle (veille concurrentielle, avancées académiques, normes sectorielles)

## Badges de sources faisant autorité

La Web Search de Kimi filtre les sources selon trois critères — pertinence, autorité et fraîcheur — en écartant automatiquement les sites à risque, les reprises en double, les contenus web de faible qualité et les informations hallucinées, afin de garantir des résultats fiables.

Les sources de qualité qui passent le filtrage rigoureux de Kimi sont signalées dans les réponses par des badges d'autorité (par exemple, certification de site officiel, certification académique, icônes de certification média), ce qui vous aide à identifier rapidement les informations les plus dignes de confiance.

**Mécanisme de filtrage des sources** :
- **Écartées** : sites d'agrégation de faible qualité, médias personnels non vérifiés, pages en cache expirées
- **Privilégiées** : sites d'organismes publics, médias faisant autorité, revues académiques, canaux officiels de communication financière

## Sources de données financières et académiques

<Frames
  src="./images/search/screenshot-5.png"
  alt="screenshot 5"
/>

Dans les contextes professionnels, Kimi prend en charge l'interrogation de bases de données spécialisées pour obtenir des données professionnelles structurées et traçables.

<Frames
  src="./images/search/screenshot-6.png"
  alt="screenshot 6"
/>

Formulez simplement votre demande dans la conversation, et Kimi sélectionnera automatiquement la source de données appropriée.

### Exemples de requêtes

- « Consulte les données de chiffre d'affaires d'Apple sur les cinq dernières années »
- « Recherche les derniers articles sur l'optimisation de l'inférence des grands modèles de langage »
- « Compare le PIB, le PIB par habitant et les taux de chômage des trois plus grandes économies mondiales »

### Sources de données prises en charge

| Source | Description |
|--------|-------------|
| **Global Finance Data** | Données financières mondiales : actions, contrats à terme, indices, etc. |
| **Academic data** | Revues, articles, prépublications, thèses, brevets, etc. |
| **Stock Finance data** | Données financières chinoises et mondiales : actions, contrats à terme, indices, etc. |
| **Données de la Banque mondiale** | PIB, population, emploi, commerce des pays, etc. |

## Recherche intelligente

### Recherche par image

Kimi prend en charge la recherche et la compréhension à partir d'images. Après le téléversement d'une image, Kimi peut automatiquement mobiliser des outils de recherche d'images pour en identifier le contenu et récupérer les informations associées.

**Exemples de requêtes** :
- « Où se trouve cet endroit ? »
- « Que se passe-t-il dans ce mème / que dit cette personne ? »
- « Trouve le vrai McDonald's »

**Comment l'utiliser** :
- Téléversez directement une image (formats JPG, PNG et autres pris en charge)
- Décrivez le contenu de l'image ou posez des questions la concernant dans votre prompt
- Kimi combinera la reconnaissance d'image et la Web Search pour fournir l'origine de l'image, des images similaires et des informations associées

**Scénarios types** :
- Identifier des objets, monuments ou modèles de produits inconnus
- Retrouver la source ou l'origine d'une image
- Analyser les données d'un graphique ou d'une capture d'écran et récupérer les informations de contexte pertinentes

### Accès direct par URL

Kimi Search prend en charge l'accès direct par URL pour récupérer des ressources sur Internet.

<Frames
  src="./images/search/screenshot-22.png"
  alt="screenshot 22"
/>

**Collez directement une URL dans la conversation**, et Kimi récupérera et analysera automatiquement le contenu de la page.

**Exemples de cas d'usage** :
- Résume les points clés de cet article
- Extrais les données essentielles de ce rapport de résultats au format PDF
- Recherche les informations relatives à l'image à partir de l'URL

## Conseils

<Callout type="warning">
- Privilégiez les liens **accessibles publiquement** (par exemple, pages d'actualités, documents PDF publics)
- Certaines pages **protégées par mot de passe** ou dont l'exploration est restreinte peuvent être inaccessibles
- Pour les pages **chargées dynamiquement**, Kimi peut ne récupérer que le contenu HTML initial
- Kimi **ne peut pas relire les liens de conversations partagées** (c'est-à-dire les liens vers d'autres discussions Kimi)
</Callout>
