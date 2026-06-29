---
title: "Les bases du prompt"
slug: "what-is-prompt"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Les bases du prompt - Kimi Help Center"
  description="Un prompt est l'instruction textuelle que vous envoyez à Kimi : il peut s'agir d'une question, d'une description, d'un ensemble d'exigences, voire d'un brief de tâche complet. Kimi se sert de votre..."
/>

# Les bases du prompt

<Callout type="info">
Un prompt est l'instruction textuelle que vous envoyez à Kimi : il peut s'agir d'une question, d'une description, d'un ensemble d'exigences, voire d'un brief de tâche complet. Kimi se sert de votre prompt pour cerner votre intention, structurer une réponse et exécuter des tâches.

En bref : **la façon dont vous formulez votre demande détermine la façon dont Kimi y répond.** Un prompt clair et précis aboutit presque toujours à une réponse plus juste et plus utile.
</Callout>

## Les quatre éléments clés d'un bon prompt

### 1. Définir le rôle et le contexte

Indiquer à Kimi qui vous êtes et dans quelle situation vous vous trouvez l'aide à adopter le niveau de détail et le ton adéquats.

| Prompt vague | Meilleur prompt |
|-------------|--------------|
| Rédige un article sur l'IA | Je suis rédacteur dans un média tech. J'ai besoin d'un article de vulgarisation de 2 000 mots sur l'IA, destiné au grand public, écrit dans un style accessible et captivant |
| Aide-moi à analyser des données | Je suis analyste de marché. Analyse les taux de conversion par canal dans ce fichier Excel, en mettant l'accent sur les variations d'un mois sur l'autre |

### 2. Décrire précisément la tâche

Plus votre description est précise, moins vous aurez de cycles de révision à faire. Une bonne description de tâche comprend généralement :

- **Quoi faire** : une action claire (analyser, résumer, traduire, générer, comparer…)
- **Format de sortie** : tableau, liste, paragraphe, code, Markdown…
- **Portée et contraintes** : nombre de mots, nombre d'éléments, période, zone géographique…
- **Exigences de qualité** : ton académique, conversationnel, concis, détaillé…

<ComparisonBlock
  wrong={"Résume cet article"}
  correct={"Résume cet article en 3 points, chacun de 50 mots maximum, en français"}
/>

### 3. Fournir des exemples ou des références

Lorsque vous avez des attentes précises en matière de mise en forme, donner un exemple à Kimi (few-shot) se révèle très efficace :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Please organize the meeting notes in this format:\n\nMeeting Topic: xxx\nAttendees: xxx\nKey Decisions:\nxxx\nxxxAction Items:\n[ ] xxx (Owner: xxx, Deadline: xxx)",
    },
  ]}
/>

### 4. Décomposer les tâches complexes en étapes
Pour les tâches complexes, fractionnez le travail en étapes plus petites et guidez Kimi à travers chacune d'elles :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I need a competitive analysis report. Please follow these steps:\nList the top 3 domestic competitors and their core features\nCompare their pricing strategies\nAnalyze each product's strengths and weaknesses\nProvide differentiation recommendations for our product",
    },
  ]}
/>

## Conseils pratiques
### Relancer et itérer
La première réponse ne vous satisfait pas ? Relancez simplement, sans avoir à reformuler tout le contexte :
- « Développe le point 2 »
- « Adopte un ton plus formel »
- « Ajoute les sources de données »
- « Réanalyse sous un autre angle »
### Exploiter les fichiers et les liens
Kimi prend en charge le téléversement de PDF, de documents Word, de fichiers Excel, d'images, et plus encore. Vous pouvez aussi coller directement des URL. Associer des fichiers à votre prompt améliore considérablement votre efficacité :
| Tâche | Exemple de prompt |
|------|---------------|
| Résumer un PDF | « Résume les points clés de ce PDF » |
| Analyser des données | « Analyse les tendances de ventes à partir de ces données Excel » |
| Extraire depuis une URL | « Lis l'article disponible à ce lien et dégages-en les points essentiels » |

### Préciser le format de sortie
Indiquez à Kimi exactement le format souhaité :
| Besoin | Exemple de prompt |
|------|---------------|
| Tableau comparatif | « Compare les avantages et inconvénients de A et B dans un tableau » |
| Sortie de code | « Implémente ceci en Python avec des commentaires » |
| Liste structurée | « Organise sous forme de liste numérotée, chaque élément en moins de 20 mots » |
| Markdown | « Produis le résultat au format Markdown avec une hiérarchie de titres » |

### Utiliser la mémoire pour les préférences durables
Si vous avez des préférences et des exigences récurrentes, exploitez la fonction **Memory** de Kimi pour les retenir sur le long terme :
- « Retiens que je suis ingénieur frontend et que je privilégie la stack React »
- « Réponds toujours en français au format Markdown »
- « Inclus des exemples de code lorsque tu réponds à des questions techniques »

<Callout type="tip">
Ainsi, vous n'avez plus à vous répéter : Kimi appliquera automatiquement ces préférences dans vos prochaines conversations.
</Callout>

## Erreurs courantes
| Erreur | Meilleure approche |
|---------|----------------|
| Entasser plusieurs tâches sans rapport dans un même message | Ouvrez une nouvelle session pour chaque tâche indépendante afin de garder un contexte clair |
| Prompts trop vagues (par ex. « écris-moi quelque chose ») | Précisez quoi écrire, pour qui, dans quel style et de quelle longueur |
| Attendre un résultat parfait dès le premier essai | Générez d'abord un brouillon, puis affinez-le par des relances |
| Ne pas vérifier les informations produites par l'IA | Vérifiez toujours les dates, les données et les affirmations factuelles |

## Modèles pour démarrer rapidement
Voici quelques modèles de prompt prêts à l'emploi : copiez-les, adaptez-les et c'est parti :
**Rédaction**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Write a [article type] about [topic] for [target audience], approximately [xxx] words.\nRequirements: [style/format/focus areas]",
    },
  ]}
/>

**Analyse**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analyze [subject], focusing on [key dimensions].\nOutput format: [table/chart/report]\nInclude conclusions and recommendations.",
    },
  ]}
/>

**Traduction**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Translate the following into [target language], maintaining a [academic/conversational/business] tone.\nInclude the original term in parentheses for domain-specific terminology.",
    },
  ]}
/>

<Callout type="info">
Maîtrisez ces concepts et techniques essentiels, et vous collaborerez avec Kimi bien plus efficacement, faisant de l'IA un véritable outil de productivité.
</Callout>
