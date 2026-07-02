---
title: "Premiers pas avec Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Premiers pas avec Kimi - Centre d'aide Kimi"
  description="Vous pouvez saisir vos questions dans la zone de discussion, importer des fichiers ou changer de modèle selon vos besoins."
/>

# Premiers pas avec Kimi

Vous pouvez saisir vos questions dans la zone de discussion, importer des fichiers ou changer de modèle selon vos besoins.
Ouvrez [kimi.com](https://www.kimi.com) et envoyez un premier message — dites bonjour à Kimi :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Salut, Kimi !",
    },
  ]}
/>

## Propulsé par K2.6
Kimi K2.6 est un modèle open source qui s'appuie sur K2.5 avec des améliorations majeures, axées sur un codage de pointe, l'exécution sur le long terme et les capacités d'agent swarm. Il atteint des performances de pointe sur l'ensemble des tâches d'agent, du codage, de la compréhension d'images, de la compréhension de vidéos et des benchmarks d'intelligence générale. K2.6 est aussi le modèle **le plus polyvalent** de Kimi — son architecture nativement multimodale prend en charge les entrées visuelles et textuelles, les modes avec et sans réflexion, ainsi que les tâches conversationnelles et agentiques.
Kimi excelle ainsi non seulement dans les conversations de questions-réponses, mais aussi dans la planification autonome de tâches, l'invocation d'outils et le raisonnement en plusieurs étapes — prenant en charge la réflexion approfondie et l'exécution de tâches complexes.
### Outils intégrés
Disponibles d'emblée, sans aucune configuration :
| Outil | Description |
|------|------------|
| **Web Search** | Recherche web en temps réel pour obtenir les dernières actualités et informations |
| **Fetch Tool** | Accès direct à des URL spécifiques (pages web, documents, images et autres ressources en ligne) |
| **Data Source** | Connexion à des bases de données professionnelles ; consultation de listes de bases de données et récupération de données |
| **Image Search** | Recherche texte-vers-image et image-vers-image pour trouver rapidement du contenu visuel |
| **IPython** | Exécution de code Python pour l'analyse et la visualisation de données |
| **Memory** | Mémoire intelligente qui enregistre vos préférences et habitudes personnelles |

## Capacités visuelles et multimodales
K2.6 prend en charge la compréhension dans tous les contextes des images, vidéos et documents bureautiques (PDF/Word/Excel), grâce à une **architecture nativement multimodale** (et non un OCR rapporté). Il peut analyser directement le contenu des documents et accomplir des tâches bureautiques de niveau intermédiaire à avancé (comme écrire des formules Excel ou générer des plans de PPT / du code VBA).
### Prise en charge des entrées multimodales
- **Images** : PNG, JPEG, WebP, GIF, etc. (via URL, Base64 ou import de fichier local)
- **Vidéo** : MP4, etc. (via video_url ou des séquences d'images + le paramètre fps)
- **Documents** : PDF, Word, Excel, TXT, Markdown, etc.
- **Ressources en ligne** : URL, liens d'articles
- **Recherche d'images** : importez une image pour rechercher des images apparentées ou similaires
- **Compréhension vidéo** : prend en charge la compréhension vidéo — il peut analyser des enregistrements d'écran et reproduire la logique d'interaction
- **Codage visuel** : importez des captures d'écran ou des enregistrements d'écran pour générer du code frontend (HTML/Vue/React, etc.) ; peut reproduire automatiquement des pages web à partir de maquettes

### Formats de sortie
- Texte brut / mélange texte-images : réponses conversationnelles standard
- Markdown : texte enrichi avec titres, listes, tableaux et liens
- Blocs de code : HTML/Vue/React/Python/JSON/Mermaid, etc. (avec identifiants de langage)
- Données structurées JSON : sortie en mode JSON forcé
- Diagrammes Mermaid : organigrammes, diagrammes de séquence, cartes mentales, etc.
- Formules mathématiques LaTeX : expressions mathématiques en ligne et en bloc
- Sortie en double mode (Thinking) : renvoie à la fois `reasoning_content` (processus de réflexion) et `content` (réponse finale)
- Format d'appel d'outil : format standard Function Calling (pour les développeurs)

### Remarques importantes

<Callout type="warning">
1. **Limitation de la génération d'images** : le mode de discussion standard prend uniquement en charge la *recherche* d'images, pas leur *génération* (la génération d'images nécessite le mode K2.6 Agent).
2. **Limitation de la sortie de fichiers** : seul le contenu textuel est pris en charge en sortie (par ex. plans de PPT, corps de texte Word, code). La sortie directe de fichiers binaires (`.pptx`, `.docx`, `.xlsx`, `.pdf`) n'est pas prise en charge.
3. Pour la génération d'images ou la production de documents modifiables complexes, utilisez [K2.6 Agent](https://www.kimi.com/agent) ou l'outil d'exécution de code.
</Callout>

## Sessions et tours de conversation
Lorsque vous cliquez sur « Nouvelle discussion », voyez cela comme le début d'une longue conversation avec Kimi.
| Concept | Analogie | Définition technique |
|---------|---------|---------------------|
| **Session** | Une réunion entière (du début à la fin) | Un processus de discussion complet avec un début et une fin clairs |
| **Tour** | Un échange (vous parlez, Kimi répond) | Votre saisie et la réponse de Kimi forment un aller-retour |

### Différences clés
**Session**
- **Mémoire continue** : Kimi se souvient de tout le contexte au sein de la discussion en cours
- **Contexte entre les tours** : chaque réponse s'appuie sur le contenu de la conversation précédente comme contexte pour le tour suivant
- **Limites définies** : cliquer sur « Nouvelle discussion » = repartir de zéro ; le contexte précédent est effacé
**Tour**
- **Comptage cumulatif** : Tour 1, Tour 2, … ajoutés progressivement
- **Mémoire limitée** : un trop grand nombre de tours (par ex. 50+) peut amener Kimi à « oublier » le contenu antérieur, en particulier pour la rédaction de longs textes ou les tâches aux exigences strictes
- **Contrainte de longueur de contexte** : limitée par le nombre de tokens ; lorsque les tours s'accumulent, le contenu le plus ancien peut être compressé

<Callout type="tip">
**Cas particulier** : si une seule question-réponse clôt la conversation, alors 1 tour = 1 session.
</Callout>

## Pourquoi cette distinction est importante
Au sein d'une même session, chaque nouvelle question ou instruction que vous envoyez reçoit une réponse tenant compte de tous les tours précédents. À mesure que les tours s'accumulent et que le contenu s'allonge, la qualité des réponses peut progressivement décliner.

### Scénarios courants
**Scénario 1 : changer de sujet**
- À éviter : demander « aide-moi à calculer mes impôts » dans une session où vous rédigez un roman de 30 000 mots
- Recommandé : ouvrir une nouvelle session pour la question fiscale — pour éviter que Kimi ne confonde les personnages du roman avec des notions fiscales
**Scénario 2 : traitement de longs documents**
- Après des dizaines de tours, Kimi peut « oublier » les règles ou les résumés de fichiers établis au début
- Solution : résumer de façon proactive en cours de tâche (« Résume notre plan jusqu'ici »), ou ouvrir une nouvelle session
**Scénario 3 : comprendre les limites du produit**
- Les limites de longueur de contexte se mesurent en tokens, mais au quotidien, voyez-les en termes de « tours »
- Si un message « Démarrez une nouvelle discussion » s'affiche, c'est que la session en cours compte trop de tours
## Bonnes pratiques

<Callout type="tip">
1. **Ouvrez une nouvelle session pour chaque tâche** : les tâches indépendantes — rédaction, recherche, débogage — devraient chacune avoir leur propre session pour éviter les interférences de contexte.
2. **Résumez régulièrement dans les longues sessions** : après 20 tours et plus, demandez de façon proactive à Kimi de résumer les informations clés afin d'éviter toute perte de données.
3. **Supprimez rapidement les informations sensibles** : l'historique des discussions est conservé ; supprimez l'intégralité de la session après avoir traité du contenu privé.
</Callout>
