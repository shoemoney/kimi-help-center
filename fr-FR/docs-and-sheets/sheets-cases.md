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
      content: "Perform a DCF valuation of XX Healthcare. Put the entire valuation process and data\ninto an Excel spreadsheet, cite data sources, provide the reasoning behind estimated\nfigures such as market size, growth rates, and market share, and incorporate macro\nenvironment analysis.",
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
      content: "Create a storyboard script in Excel for a 3D promotional video about Kimi AI's new\nupgrade — OK Computer — which supports generating and editing Office documents\n(e.g., long-form thesis formatting in Word, data modeling and analysis in Excel,\nautomatic slide generation).\n\nThe Excel should include:\nColumn A: Sequence number (1-20)\nColumn B: Cumulative duration (seconds)\nColumn C: Shot duration (seconds)\nColumn D: Shot description (3D / camera movement)\nColumn E: Narration/text (use different background colors to distinguish narration\nfrom on-screen text)\nColumn F: Sound effects/BGM (use different font colors to distinguish)\nColumn G: Storyboard frames (generate an image for each shot — maintain visual\nconsistency using the classic black-and-white line sketch style)\n\nPlease design the creative outline, script, and storyboards independently, then\ngenerate frames to complete this script, presented in a polished Excel format.",
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
