---
title: "Cas d'usage et bibliothèque de prompts de Kimi Docs"
slug: "docs-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Cas d'usage et bibliothèque de prompts de Kimi Docs - Centre d'aide Kimi"
  description="Exemples de cas d'usage et de prompts pour Kimi Docs — de la relecture de manuscrits à la traduction professionnelle et à la conception de PDF."
/>

# Cas d'usage et bibliothèque de prompts de Kimi Docs

<Callout type="info">
Exemples de cas d'usage et de prompts pour Kimi Docs — de la relecture de manuscrits à la traduction professionnelle et à la conception de PDF.
</Callout>

## Expert en relecture

À la manière d'un relecteur de manuscrits méticuleux, Kimi décompose les retours de révision, repère les passages concernés dans votre document et insère automatiquement des commentaires et suggestions détaillés.

**Exemple de prompt** :

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "You are a senior manuscript reviewer specializing in smart cities and regional planning.\nBelow is a set of specific review comments. Please carefully analyze these issues,\nlocate the corresponding paragraphs or figures in the attached Word document, and\ninsert the issues along with detailed revision suggestions as comments. Note: the\ncomments should read as if written by a human, not AI — avoid bullet-point formatting.\n\nPlease output the original manuscript with detailed comments.",
    },
  ]}
/>

## Traduction professionnelle

Tel un traducteur infatigable, Kimi traduit en français, page après page, un PDF anglais de 50 pages tout en conservant l'intégralité des formules et du code dans le résultat.

**Exemple de prompt** :

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Find the first assignment PDF for Stanford's CS336 course in English, then convert\nit to a French PDF. Preserve all code and mathematical formulas in the French version.\nThe translation should be fluent — do not omit or add any content.",
    },
  ]}
/>

<Frames
  src="./images/docs-cases/translate.png"
  alt="Traduction"
/>

## Conception de PDF et service d'édition

Comme un maquettiste, Kimi vous aide à planifier les éléments visuels, agence automatiquement textes et images, et génère des portfolios PDF de qualité professionnelle prêts à publier.

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "You are a curatorial publishing AI specializing in modern art, particularly Picasso studies.\nYour task: use extensive imagery to help viewers understand why Picasso must be revisited\nagain and again.\n\nOutput directly as a PDF.\n\nI. Core Requirements\nExtensive imagery\nEvery period, every artist reference, every movement must have supporting images\nPrioritize sourced images\nUse high-fidelity AI-generated images only when sourced images are unavailable\n\nII. Visual System\nMAP Logo as full-page watermark\nAsymmetric layout\nClear grid with controlled local disruption\nHigh-contrast black \u0026 white + primary color accents\n\nIII. Content Structure (generate all sections)\n1. Cover\nPicasso\nExhibition subtitle (English \u0026 Chinese)\nMAP Logo watermark\n\n2. Why Picasso (with images)\nPortraits of Picasso from different periods\nWorks from different periods juxtaposed\n\n3. Periods \u0026 Movements (image-centric)\nEach period must include 8–12 images:\nBlue Period\nRose Period\nCubism (Analytic / Synthetic)\nWar \u0026 Politics\nLate Experiments\n\nImage types:\nFull artwork\nDetail crops\nStructural deconstruction diagrams (AI-generated when needed)\n\n4. Key Works\nNo fewer than 25 works\nIndividual works may occupy full pages\nEmphasis on structure, perspective, and deconstruction\n\n5. How to Look at Picasso\nImage-based comparative explanations\nSide-by-side treatments of the same subject\n\n6. Exhibition Hall \u0026 Rhythm\nHigh-density viewing zones\nReflective buffer zones\n\n7. MAP's Contemporary Position\nWhy Shanghai needs Picasso\nWhy this moment matters",
    },
  ]}
/>

## Autres scénarios et exemples de prompts

| Scénario | Exemple de prompt |
|------|-----------|
| **Rapport professionnel** | Rédigez un « Livre blanc 2026 sur le secteur de l'économie de basse altitude en Chine » dans Word, dans le style McKinsey, couvrant la taille du marché, le paysage concurrentiel, le contexte réglementaire et les recommandations d'investissement |
| **Relecture de contrat** | [Importez contract.docx] Examinez ce contrat du point de vue d'un avocat, identifiez les clauses à risque, insérez des commentaires |
| **Modélisation financière** | Construisez dans Word un modèle de prévision financière SaaS sur trois ans, incluant les projections de revenus, la structure de coûts et les flux de trésorerie |
| **Synthèse de documents longs** | Condensez cet article universitaire de 30 000 mots en une synthèse exécutive de 5 000 mots au format Word |
| **Comparaison multi-versions** | [Importez les versions V1 et V2 du contrat] Comparez les versions, listez toutes les modifications avec une description de leur impact, et produisez le résultat au format Word |
