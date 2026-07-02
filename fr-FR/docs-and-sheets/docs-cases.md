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
      content: "Vous êtes un relecteur de manuscrits chevronné, spécialisé dans les villes intelligentes et l'aménagement du territoire.\nVoici un ensemble de commentaires de révision précis. Analysez attentivement ces problèmes,\nrepérez les paragraphes ou figures correspondants dans le document Word joint, puis\ninsérez chaque problème accompagné de suggestions de révision détaillées sous forme de commentaires. Remarque : les\ncommentaires doivent sembler rédigés par un humain, et non par une IA — évitez la mise en forme à puces.\n\nVeuillez restituer le manuscrit d'origine accompagné des commentaires détaillés.",
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
      content: "Trouvez le PDF du premier devoir du cours CS336 de Stanford en anglais, puis\nconvertissez-le en un PDF en français. Conservez l'intégralité du code et des formules mathématiques dans la version française.\nLa traduction doit être fluide — n'omettez ni n'ajoutez aucun contenu.",
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
      content: "Vous êtes une IA d'édition curatoriale spécialisée dans l'art moderne, en particulier les études sur Picasso.\nVotre mission : recourir à une iconographie abondante pour aider le public à comprendre pourquoi Picasso doit être redécouvert\nencore et encore.\n\nProduisez directement un PDF.\n\nI. Exigences fondamentales\nIconographie abondante\nChaque période, chaque référence à un artiste et chaque mouvement doit être accompagné d'images\nPrivilégiez les images sourcées\nN'utilisez des images générées par IA en haute fidélité que lorsque aucune image sourcée n'est disponible\n\nII. Système visuel\nLogo MAP en filigrane pleine page\nMise en page asymétrique\nGrille nette avec rupture locale maîtrisée\nNoir et blanc très contrasté + touches de couleurs primaires\n\nIII. Structure du contenu (générez toutes les sections)\n1. Couverture\nPicasso\nSous-titre de l'exposition (français et chinois)\nFiligrane du logo MAP\n\n2. Pourquoi Picasso (avec images)\nPortraits de Picasso de différentes périodes\nŒuvres de différentes périodes juxtaposées\n\n3. Périodes et mouvements (centré sur l'image)\nChaque période doit comporter 8 à 12 images :\nPériode bleue\nPériode rose\nCubisme (analytique / synthétique)\nGuerre et politique\nExpérimentations tardives\n\nTypes d'images :\nŒuvre entière\nDétails recadrés\nSchémas de déconstruction structurelle (générés par IA si nécessaire)\n\n4. Œuvres majeures\nAu moins 25 œuvres\nCertaines œuvres peuvent occuper une page entière\nAccent sur la structure, la perspective et la déconstruction\n\n5. Comment regarder Picasso\nExplications comparatives fondées sur l'image\nTraitements d'un même sujet côte à côte\n\n6. Salle d'exposition et rythme\nZones de visite à haute densité\nZones tampons propices à la réflexion\n\n7. La position contemporaine de MAP\nPourquoi Shanghai a besoin de Picasso\nPourquoi ce moment est important",
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
