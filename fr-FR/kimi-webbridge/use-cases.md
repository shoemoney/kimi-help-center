---
title: "Démo de cas d’utilisation de Kimi WebBridge"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Démo de cas d’utilisation de Kimi WebBridge - Centre d’aide Kimi"
  description="Découvrez des cas d’utilisation typiques de Kimi WebBridge, avec des exemples de Skill et de CLI pour planifier un voyage, rechercher un logement, mener une recherche bibliographique, et plus encore."
  ogType="article"
/>

# Démo de cas d’utilisation de Kimi WebBridge

Kimi WebBridge permet à un agent d’utiliser le navigateur comme une vraie personne, en s’appuyant sur les sites où vous êtes déjà connecté pour parcourir les pages, extraire les informations et les organiser automatiquement.

<Callout type="tip">
Avec WebBridge, plus la description de votre tâche est précise, plus l’agent pourra l’exécuter correctement. Nous vous recommandons d’indiquer le site cible, les filtres à appliquer et le format de sortie souhaité. Si la structure de la page est complexe, vous pouvez également demander à l’agent de commencer par faire une capture d’écran afin de confirmer l’état de la page avant de poursuivre.
</Callout>

En pratique, WebBridge est souvent utilisé avec Skill et CLI : Skill formalise l’expérience liée à la tâche — les sites à consulter, les étapes à suivre pour collecter les informations et la manière d’organiser les résultats ; CLI fournit des capacités concrètes, comme rechercher, lire des pages, télécharger des fichiers ou interroger des données structurées.

Dites à l’AI Agent, en une phrase, ce que vous faites régulièrement sur le web. Il peut générer pour vous un CLI qui utilise directement votre vraie session de connexion Chrome — sans API, et sans avoir à configurer ni gérer d’API Token.

Les Skills et CLI utilisés dans les scénarios ci-dessous ont été créés de cette manière. Vous pouvez les installer et les utiliser directement, ou vous en servir comme exemples de référence.

<Callout type="warning">
Les Skills et CLI fournis sur cette page sont destinés uniquement à l’apprentissage et aux échanges techniques. Pour toute question ou réserve, veuillez contacter <a href="mailto:support@moonshot.cn">support@moonshot.cn</a>.
</Callout>

## Recherche et organisation d’informations

Lorsque vous devez chercher sur plusieurs sites, WebBridge peut permettre à l’agent d’ouvrir automatiquement les pages cibles, d’en extraire les contenus essentiels et de les organiser dans une sortie structurée, ce qui vous évite d’ouvrir les pages une par une et de copier-coller les informations manuellement.

### Planification de voyage

Passez d’une plateforme de vols à un site de réservation d’hôtels ou à une communauté de voyageurs pour comparer les prix et les horaires, puis organiser des itinéraires, des tableaux de budget et des suggestions d’hébergement.

Outils associés :

- Skill : [travel-planning](https://github.com/better-world-ai/x-cli/tree/main/skills/travel-planning)
- CLI : [ctrip-cli](https://github.com/better-world-ai/x-cli/tree/main/ctrip-cli), [booking-cli](https://github.com/better-world-ai/x-cli/tree/main/booking-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Je prévois un voyage de 5 jours et 4 nuits à Kyoto en novembre pour deux personnes, avec un budget d’environ 8 000 RMB. Merci de vérifier les vols, les hôtels et les horaires d’ouverture des attractions, puis d’organiser les résultats sous forme d’itinéraire jour par jour et de tableau budgétaire.",
    },
  ]}
/>

Installation et utilisation :

1. Téléchargez ctrip-cli et booking-cli depuis [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Exécutez `npx skills add better-world-ai/x-cli --skill travel-planning`
3. Ouvrez un agent local, par exemple un client compatible avec les Skills comme Kimi Code, Claude Code, Codex CLI ou Cursor, puis envoyez le prompt ci-dessus

### Sélection d’annonces de location

Recherchez simultanément sur plusieurs plateformes de location, filtrez les annonces selon le loyer, le temps de trajet, le type de logement et d’autres critères, consolidez les informations et classez les recommandations.

Outils associés :

- Skill : [rental-assistant](https://github.com/better-world-ai/x-cli/tree/main/skills/rental-assistant)
- CLI : [58-cli](https://github.com/better-world-ai/x-cli/tree/main/58-cli), [anjuke-cli](https://github.com/better-world-ai/x-cli/tree/main/anjuke-cli), [apartments-cli](https://github.com/better-world-ai/x-cli/tree/main/apartments-cli), [rightmove-cli](https://github.com/better-world-ai/x-cli/tree/main/rightmove-cli), [idealista-cli](https://github.com/better-world-ai/x-cli/tree/main/idealista-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Aidez-moi à trouver un logement à louer près de la station Zhangjiang Hi-Tech Park à Shanghai. Mon budget est de 4 500 RMB maximum, le temps de trajet doit être inférieur à 40 minutes, et je préfère un appartement entier avec une chambre. Ouvrez plusieurs plateformes, organisez les liens des annonces, les prix, les surfaces et les temps de trajet, puis fournissez une liste de contacts par ordre de priorité.",
    },
  ]}
/>

Installation et utilisation :

1. Téléchargez 58-cli, anjuke-cli, apartments-cli, rightmove-cli et idealista-cli depuis [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Exécutez `npx skills add better-world-ai/x-cli --skill rental-assistant`
3. Ouvrez un agent local, par exemple un client compatible avec les Skills comme Kimi Code, Claude Code, Codex CLI ou Cursor, puis envoyez le prompt ci-dessus

## Recherche et analyse de contenus

WebBridge peut aider l’agent à parcourir automatiquement les résultats de recherche, ouvrir les pages de détail, extraire les titres, les données, les commentaires et d’autres informations, puis les analyser et les résumer. Il convient particulièrement aux travaux de recherche qui nécessitent de consulter de nombreuses pages web.

### Recherche bibliographique

Recherchez de la littérature académique, extrayez les résumés d’articles, les méthodes principales, les conclusions expérimentales et les relations de citation, puis produisez une revue structurée.

Outils associés :

- Skill : [paper-research](https://github.com/better-world-ai/x-cli/tree/main/skills/paper-research)
- CLI : [scholar-cli](https://github.com/better-world-ai/x-cli/tree/main/scholar-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Merci d’étudier des articles représentatifs publiés ces deux dernières années sur la mémoire des AI Agents, d’organiser les titres, auteurs, résumés, méthodes principales et liens open source, puis de résumer l’évolution des travaux de recherche.",
    },
  ]}
/>

Installation et utilisation :

1. Téléchargez scholar-cli depuis [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Exécutez `npx skills add better-world-ai/x-cli --skill paper-research`
3. Ouvrez un agent local, par exemple un client compatible avec les Skills comme Kimi Code, Claude Code, Codex CLI ou Cursor, puis envoyez le prompt ci-dessus

### Recherche approfondie sur un sujet

Quand vous voulez comprendre un sujet qui vous est inconnu, l’ancienne méthode consiste à ouvrir un moteur de recherche, cliquer sur chaque résultat pour le lire intégralement, copier les points clés, puis les organiser en notes — et une demi-journée s’est envolée.

Laissez l’IA exécuter ce processus pour vous : elle recherche automatiquement, suit les résultats pour récupérer le texte complet, puis peut soit en produire une synthèse, soit conserver le texte original pour que vous le lisiez. Pour explorer un sujet, suivre les nouveautés d’un domaine ou réunir de la matière pour rédiger, utilisez-la d’abord afin de rassembler les informations au même endroit.

Outils associés :

- CLI : [google-cli](https://github.com/better-world-ai/x-cli/tree/main/google-cli), [baidu-cli](https://github.com/better-world-ai/x-cli/tree/main/baidu-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Recherchez les modèles d’IA locaux qui vaudront la peine d’être utilisés en 2025 et récupérez le texte intégral des 10 premiers résultats.",
    },
  ]}
/>

Installation et utilisation :

1. Téléchargez google-cli ou baidu-cli depuis [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Ouvrez un agent local, par exemple un client compatible avec les Skills comme Kimi Code, Claude Code, Codex CLI ou Cursor, puis envoyez le prompt ci-dessus

## Assistance bureautique au quotidien

Utilisez les capacités d’automatisation de WebBridge pour prendre en charge les opérations web répétitives et gagner en efficacité.

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

Pour découvrir d’autres cas d’utilisation, consultez le [site officiel de Kimi WebBridge](https://www.kimi.com/zh-cn/features/webbridge).
