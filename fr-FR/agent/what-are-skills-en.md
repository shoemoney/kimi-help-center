---
title: "Que sont les Skills ?"
slug: "what-are-skills"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Que sont les Skills ? - Centre d'aide Kimi"
  description="Découvrez le principe de fonctionnement, les types et l'utilisation des Kimi Skills. Les Skills sont des paquets de connaissances réutilisables permettant d'étendre les capacités de l'Agent pour des tâches spécifiques ; ils regroupent des instructions, des bonnes pratiques, des scripts et des ressources."
  ogType="article"
/>

# Que sont les Skills ?

<Frames
  src="./images/skills/what_is_skill.png"
  alt="what_is_skill"
/>

Les Skills sont des paquets de connaissances réutilisables conçus pour repousser les limites des capacités d'un agent IA. Chaque skill comprend :

- **Méthodes de travail et conseils opérationnels** — Des méthodologies adaptées à des types de tâches spécifiques.
- **Bonnes pratiques et normes** — Les standards du secteur et les protocoles internes à respecter.
- **Scripts, outils et ressources de référence** — Des outils et documents facultatifs pour faciliter l'exécution.

## Comment les utiliser ?

Dès le début d'une conversation, l'Agent voit la liste des skills disponibles avec leur nom et une brève description. Si un skill correspond à la tâche en cours, l'Agent en charge l'intégralité des instructions et les exécute en conséquence.

## Le parcours utilisateur

De la découverte des skills à la création des vôtres, voici le parcours complet :

1. **Découvrir des skills** — Parcourez les skills officiels et recommandés dans le panneau Skills pour trouver celui qui correspond à votre besoin.
2. **Installer des skills** — Cliquez sur le bouton « + » pour ajouter un skill instantanément.
3. **Invoquer des skills** — Saisissez `/` dans la zone de saisie pour sélectionner un skill, ou laissez Kimi en déclencher un automatiquement selon votre requête.
4. **Créer le vôtre** — Si les skills existants ne répondent pas à vos besoins, importez des documents ou décrivez vos exigences pour générer un skill personnalisé, ou utilisez `/skill-creator` pour en construire un par le dialogue.

## Comment fonctionnent les Skills ?

Lorsque vous envoyez une requête, Kimi Agent évalue si la tâche en cours fait appel à un skill particulier. Le cas échéant, il charge automatiquement le skill correspondant et suit ses instructions pour accomplir la tâche.

Les skills ne sont chargés que lorsqu'ils sont pertinents pour la tâche, ce qui garantit qu'ils n'interfèrent pas avec le contexte des autres conversations.

## Skills vs. prompts directs : quelle différence ?

Prenons l'exemple de la rédaction d'un rapport hebdomadaire :
- **Prompt direct** : vous demandez directement à Kimi Agent, qui rédige selon sa propre interprétation du format.
- **Avec un skill** : une fois un skill de rapport hebdomadaire installé, chaque résultat respecte la structure, le ton et la longueur que vous avez prédéfinis, sans avoir à répéter les consignes.

| | Prompt direct | Avec un skill |
|---|---|---|
| **Faut-il expliquer les exigences à chaque fois ?** | Oui | Non, appliquées automatiquement |
| **Stabilité du format de sortie** | Variable | Conforme à la définition |
| **Cas d'usage idéal** | Tâches ponctuelles et temporaires | Workflows répétitifs et figés |
| **Configuration nécessaire ?** | Non | Création ou installation requise |

## Types de skills

### (1) Skills officiels et skills recommandés

**Skills officiels** : créés et maintenus par Moonshot AI, accessibles à tous les utilisateurs. Kimi les déclenche automatiquement dans les situations appropriées.

Parmi les skills officiels courants :
- `docx` — Créer et modifier des documents Word ; adapté à toute tâche .docx, notamment la création, la modification, les commentaires, les révisions, les notes de bas de page, la table des matières et la conversion de Markdown vers Word.
- `deep-research` — Mener des recherches approfondies et produire des rapports détaillés à l'aide d'une boîte à outils, avec au moins 10 cycles de recherche itératifs, une réflexion récursive et une visualisation IPython obligatoire.

**Skills recommandés** : une sélection de skills par scénario, ajoutables en un clic, couvrant des cas d'usage courants comme la recherche d'investissement et la mise en forme de documents.

Parmi les skills recommandés courants :
- `sop-writer` — Transformer des processus métier en documents de procédures opérationnelles normalisées (SOP) complets, incluant logigrammes de processus, matrices RACI, étapes opérationnelles détaillées et gestion des exceptions.
- `event-etf-study` — À partir d'un concept ou d'un événement, identifier les actions associées, construire un indice ETF pondéré par la capitalisation boursière, analyser les variations de valeur de marché sur la fenêtre de l'événement et générer des tableaux de bord HTML interactifs. Utilisé lorsque les utilisateurs s'interrogent sur les valeurs thématiques, les ETF thématiques, l'analyse fondée sur les événements ou la recherche événementielle.

**Du document Office au skill** : importez des documents pour générer des skills et reproduire facilement des thèmes de style.

### (2) Skills open source

Téléchargez ou installez les Skills adaptés depuis les communautés open source, en combinaison avec des Agents locaux (comme Kimi Code) ou des Agents cloud (comme Kimi Claw).

**Plateformes de référence pour les skills IA**

| Plateforme | URL | Description |
|----------|-----|-------------|
| SkillsMP | https://skillsmp.com | Une place de marché de skills pour agents IA qui agrège des paquets SKILL.md issus de GitHub, compatible avec Claude Code et OpenAI Codex CLI |
| SkillsLLM | https://skillsllm.com | Une place de marché open source de skills pour agents IA, proposant plus de 1 600 skills vérifiés sur le plan de la sécurité pour Claude Code, Codex CLI et ChatGPT |
| LobeHub Skills | https://lobehub.com/skills | Parcourez et distribuez des paquets SKILL.md compatibles avec Claude Code, Codex CLI et ChatGPT |

### (3) Skills personnalisés

Des skills sur mesure que vous créez pour vos workflows personnels et vos tâches métier spécifiques, par exemple :
- Appliquer des chartes graphiques précises à des documents ou des présentations.
- Générer des e-mails ou des contenus de communication à partir de modèles fixes.
- Organiser des comptes rendus de réunion dans un format précis.
- Exécuter des workflows d'analyse de données spécifiques.
