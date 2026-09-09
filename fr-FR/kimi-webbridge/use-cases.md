---
title: "Démo de cas d’utilisation de l’Extension de navigateur Kimi"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Démo de cas d’utilisation de l’Extension de navigateur Kimi - Centre d'aide Kimi"
  description="Découvrez des cas d’utilisation typiques de l’Extension de navigateur Kimi : planification de voyage, recherche de logement, recherche bibliographique, comparaison de prix et plus encore, avec des exemples de prompts prêts à copier."
  ogType="article"
/>

# Démo de cas d’utilisation de l’Extension de navigateur Kimi

Toutes les tâches ci-dessous peuvent être confiées directement à Kimi : discutez dans la barre latérale ou laissez un Agent local les exécuter.

## Recherche et organisation d’informations

Lorsque vous devez chercher sur plusieurs sites, l’Extension de navigateur Kimi peut permettre à l’agent d’ouvrir automatiquement les pages cibles, d’en extraire les contenus essentiels et de les organiser dans une sortie structurée, ce qui vous évite d’ouvrir les pages une par une et de copier-coller les informations manuellement.

### Planification de voyage

Passez d’une plateforme de vols à un site de réservation d’hôtels ou à une communauté de voyageurs pour comparer les prix et les horaires, puis organiser des itinéraires, des tableaux de budget et des suggestions d’hébergement.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Je prévois un voyage de 5 jours et 4 nuits à Kyoto en novembre pour deux personnes, avec un budget d’environ 8 000 RMB. Merci de vérifier les vols, les hôtels et les horaires d’ouverture des attractions, puis d’organiser les résultats sous forme d’itinéraire jour par jour et de tableau budgétaire.",
    },
  ]}
/>

### Sélection d’annonces de location

Recherchez simultanément sur plusieurs plateformes de location, filtrez les annonces selon le loyer, le temps de trajet, le type de logement et d’autres critères, consolidez les informations et classez les recommandations.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Aidez-moi à trouver un logement à louer près de la station Zhangjiang Hi-Tech Park à Shanghai. Mon budget est de 4 500 RMB maximum, le temps de trajet doit être inférieur à 40 minutes, et je préfère un appartement entier avec une chambre. Ouvrez plusieurs plateformes, organisez les liens des annonces, les prix, les surfaces et les temps de trajet, puis fournissez une liste de contacts par ordre de priorité.",
    },
  ]}
/>

## Recherche et analyse de contenus

L’Extension de navigateur Kimi peut aider l’agent à parcourir automatiquement les résultats de recherche, ouvrir les pages de détail, extraire les titres, les données, les commentaires et d’autres informations, puis les analyser et les résumer. Il convient particulièrement aux travaux de recherche qui nécessitent de consulter de nombreuses pages web.

### Recherche bibliographique

Recherchez de la littérature académique, extrayez les résumés d’articles, les méthodes principales, les conclusions expérimentales et les relations de citation, puis produisez une revue structurée.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Merci d’étudier des articles représentatifs publiés ces deux dernières années sur la mémoire des AI Agents, d’organiser les titres, auteurs, résumés, méthodes principales et liens open source, puis de résumer l’évolution des travaux de recherche.",
    },
  ]}
/>

### Recherche approfondie sur un sujet

Envie de comprendre un sujet qui vous est inconnu ? Laissez Kimi rechercher automatiquement, lire les résultats un par un, puis rassembler le tout dans un résumé.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Recherchez les modèles d’IA locaux qui vaudront la peine d’être utilisés en 2025 et récupérez le texte intégral des 10 premiers résultats.",
    },
  ]}
/>

## Assistance bureautique au quotidien

Utilisez les capacités d’automatisation de l’Extension de navigateur Kimi pour prendre en charge les opérations web répétitives et gagner en efficacité.

### Comparaison de prix en e-commerce

Recherchez le même produit sur plusieurs plateformes d’e-commerce, comparez les prix, les caractéristiques et les avis utilisateurs, puis organisez les meilleures options d’achat.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Je souhaite acheter un moniteur 4K de 27 pouces avec un budget d’environ 2 000 RMB. Merci de rechercher et comparer les options sur les principales plateformes d’e-commerce, d’organiser les prix, les marques et les avis utilisateurs, puis de recommander les choix offrant le meilleur rapport qualité-prix.",
    },
  ]}
/>

### Extraction de données web

Extrayez des données structurées, comme des tableaux et des listes, depuis des pages web et organisez-les automatiquement dans le format spécifié, afin d’éviter les copier-coller manuels.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Merci de m’aider à ouvrir cette page web, à extraire le tableau des prix des produits qui s’y trouve, puis à le restituer sous forme de liste claire.",
    },
  ]}
/>

## Transformer les processus répétitifs en Skills

Lorsqu’un même processus doit être exécuté encore et encore, inutile de retaper l’instruction à chaque fois. Kimi peut apprendre le processus et l’enregistrer comme un Skill — ensuite, il suffit de taper `/` pour l’appeler à tout moment.

### Enregistrer des actions en tant que Skill

Idéal pour les routines web aux étapes fixes, comme ouvrir chaque jour un tableau de bord pour exporter des données ou remplir un formulaire récurrent.

1. Tapez `/` dans la barre latérale et choisissez « Enregistrer les actions en tant que Skill »
2. Effectuez les étapes une fois comme d’habitude — Kimi enregistre chaque action
3. Cliquez sur « Arrêter et générer » : Kimi transforme cette exécution en Skill
4. Vérifiez le nom, les étapes et les paramètres du Skill, puis enregistrez-le (les informations sensibles comme les mots de passe peuvent être définies comme des paramètres confidentiels, à renseigner lors de la relecture)

Ensuite, tapez `/` et choisissez ce Skill pour que Kimi le refasse pour vous. Vous pouvez modifier les étapes et le contenu du Skill à tout moment.

### Transformer un site en Skill

Idéal pour les sites que vous utilisez en permanence, comme un tableau de bord de données habituel ou un système interne.

Tapez `/` dans la barre latérale et choisissez « Transformer un site en Skill ». Kimi analyse automatiquement la structure et le fonctionnement du site, l’encapsule dans un Skill prêt à l’emploi et, une fois celui-ci enregistré, vous pouvez l’appeler à tout moment avec `/`.

### Enregistrer cette session en tant que Skill

Si Kimi a déjà réalisé une belle exécution dans la conversation en cours, vous pouvez l’enregistrer directement pour la réutiliser : tapez `/` et choisissez « Enregistrer cette session en tant que Skill ».

Pour découvrir d’autres cas d’utilisation, consultez le [site officiel de l’Extension de navigateur Kimi](https://www.kimi.com/zh-cn/features/webbridge).
