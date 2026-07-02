---
title: "Kimi Sheets : cas d'usage et bibliothèque de prompts"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Sheets : cas d'usage et bibliothèque de prompts - Centre d'aide Kimi"
  description="Exemples de cas d'usage et de prompts pour Kimi Sheets — de la valorisation financière à la création de storyboards."
/>

# Cas d'usage de Kimi Sheets

<Callout type="info">
Exemples de cas d'usage et de prompts pour Kimi Sheets — de la valorisation financière à la création de storyboards.
</Callout>

## Valorisation financière

À la manière d'un analyste financier, Kimi recueille des données financières réelles, construit un modèle de valorisation DCF et réalise une valorisation simulée d'une entreprise.

<Frames
  src="./images/sheets-cases/dcf.png"
  alt="DCF"
/>

**Exemple de prompt** :

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Réalisez une valorisation DCF de XX Healthcare. Consignez l'intégralité du processus de valorisation et des données\ndans une feuille de calcul Excel, citez les sources, expliquez le raisonnement derrière les estimations\ntelles que la taille du marché, les taux de croissance et la part de marché, et intégrez une analyse de l'environnement macroéconomique.",
    },
  ]}
/>

## Création de storyboard

À la manière d'un storyboardeur, Kimi crée des scripts de storyboard vidéo au format Excel comprenant la durée, les descriptions de plans, la narration, les effets sonores et les images de référence.

<Frames
  src="./images/sheets-cases/transcript.png"
  alt="Transcript"
/>

**Exemple de prompt** :

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Créez un storyboard dans Excel pour une vidéo promotionnelle 3D présentant la nouvelle\nmise à niveau de Kimi AI — OK Computer — qui permet de générer et de modifier des documents Office\n(par ex. mise en forme de thèses longues dans Word, modélisation et analyse de données dans Excel,\ngénération automatique de diapositives).\n\nLe fichier Excel doit comporter :\nColonne A : numéro de séquence (1 à 20)\nColonne B : durée cumulée (secondes)\nColonne C : durée du plan (secondes)\nColonne D : description du plan (3D / mouvement de caméra)\nColonne E : narration/texte (utilisez des couleurs de fond différentes pour distinguer la narration\ndu texte à l'écran)\nColonne F : effets sonores/musique de fond (utilisez des couleurs de police différentes pour les distinguer)\nColonne G : images du storyboard (générez une image par plan — maintenez une cohérence visuelle\nen adoptant le style classique du croquis au trait en noir et blanc)\n\nConcevez de façon autonome le plan créatif, le script et les storyboards, puis\ngénérez les images pour compléter ce scénario, le tout présenté dans un format Excel soigné.",
    },
  ]}
/>

## D'autres scénarios et exemples de prompts

| Scénario | Exemple de prompt |
|------|-----------|
| Modélisation financière | Réalise une valorisation DCF de la société XX — intègre l'ensemble du processus et des données dans Excel, cite les sources et explique le raisonnement derrière les hypothèses clés telles que les taux de croissance |
| Comparaison de données sectorielles | Étudie les 20 premiers constructeurs nationaux de véhicules électriques — présente dans un tableau comparatif leur capitalisation boursière, leurs ventes 2025, leurs modèles phares et leur actualité récente |
| Catalogage de la littérature | Recherche les articles sur l'optimisation de l'inférence des LLM publiés ces trois derniers mois — organise-les dans Excel avec le titre, les auteurs, la méthodologie centrale et les contributions clés |
| Fusion de plusieurs feuilles | [Téléverse 12 fichiers Excel de ventes mensuelles] Fusionne ces 12 feuilles en un récapitulatif annuel, calcule les taux de croissance d'un mois sur l'autre et utilise des formules pour relier les feuilles entre elles |
| Extraction de prospects commerciaux | [Téléverse des PDF/images de salon professionnel] Extrais toutes les informations sur les exposants et organise-les dans un fichier Excel de 1 000 lignes de prospects commerciaux, avec le nom de l'entreprise, les coordonnées et la catégorie de produits |
| Gestion de projet | Crée un fichier Excel de gestion de projet PMO avec liste des tâches, responsables, état d'avancement, diagramme de Gantt et liaisons entre feuilles |
| Visualisation de données | Transforme ce fichier Excel de données de ventes en tableau de bord visuel avec des courbes de tendance, des graphiques de répartition régionale et des graphiques en anneau du taux de réalisation |
