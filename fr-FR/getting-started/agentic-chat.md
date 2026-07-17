---
title: "Premiers pas avec Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Premiers pas avec Kimi - Centre d'aide Kimi"
  description="Découvrez les trois modèles de Kimi (K2.6, K3, K3 Swarm), les outils intégrés et les capacités multimodales pour bien démarrer avec la conversation et l'exécution de tâches."
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

## Choisir un modèle

Kimi propose plusieurs modèles. Cliquez sur le bouton de changement de modèle au-dessus de la zone de saisie pour en changer.

| Modèle | Puissance de réflexion | Idéal pour |
|--------|------------------------|------------|
| **K2.6** | Standard / High | Conversation et questions-réponses rapides, avec des réponses plus véloces |
| **K3** | Low / High / Max | Tâches de conversation et d'Agent ; le plus performant globalement |
| **K3 Swarm** | Low / High / Max | Recherche à grande échelle et traitement par lots, réalisés en une seule fois |

<Callout type="tip">
K2.6 ne consomme aucun crédit (credit) ; K3 et K3 Swarm sont facturés en crédits. Consultez les [avantages de l'abonnement](https://www.kimi.com/help/membership/membership-overview) pour plus de détails.
</Callout>

### À propos de Kimi K3

Kimi K3 est actuellement le modèle le plus puissant de Kimi, avec 2 800 milliards de paramètres, bâti sur Kimi Delta Attention (KDA) et Attention Residuals, doté d'une **vision native** et d'une **fenêtre de contexte d'un million de tokens**. Premier modèle ouvert de la classe 3T au monde, K3 est conçu pour une intelligence de pointe dans le codage sur le long terme, le travail du savoir et le raisonnement, atteignant des performances de premier plan en codage, en exécution sur le long terme et sur un large éventail de tâches d'intelligence générale.

### Outils intégrés

Disponibles d'emblée, sans aucune configuration :

| Outil | Description |
|------|------------|
| **Web Search** | Recherche web en temps réel pour obtenir les dernières actualités et informations |
| **Fetch Tool** | Accès direct à des URL spécifiques (pages web, documents, images et autres ressources en ligne) |
| **Image Search** | Recherche texte-vers-image et image-vers-image pour trouver rapidement du contenu visuel |
| **IPython** | Exécution de code Python pour l'analyse et la visualisation de données |
| **Memory** | Mémoire intelligente qui enregistre vos préférences et habitudes personnelles |

## Capacités visuelles et multimodales
Kimi K3 prend en charge la compréhension dans tous les contextes des images, vidéos et documents bureautiques (PDF/Word/Excel), grâce à une **architecture nativement multimodale** (et non un OCR rapporté). Il peut analyser directement le contenu des documents et accomplir des tâches bureautiques de niveau intermédiaire à avancé (comme écrire des formules Excel ou générer des plans de PPT / du code VBA). Combiné à sa vision native et à sa fenêtre de contexte d'un million de tokens, il peut traiter des contenus multimodaux plus longs et plus complexes.
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

1. **Sortie de fichiers** : K3 peut produire de bout en bout des documents modifiables (par ex. `.pptx`, `.docx`, `.xlsx`, `.pdf`) et d'autres livrables complexes ; K2.6 se concentre sur les questions-réponses rapides et ne produit que du texte (par ex. plans de PPT, corps de texte Word ou code).

<Callout type="tip">
Astuce : pour générer des images, de l'audio ou de la vidéo, cliquez sur « + » → Plugin, sélectionnez la fonctionnalité correspondante, et utilisez-la avec **K3**. Pour créer des documents modifiables complexes ou exécuter des tâches en plusieurs étapes, nous recommandons de choisir **K3** ou **K3 Swarm** pour profiter de l'expérience complète.
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
**Ouvrez une nouvelle session pour chaque tâche** : les tâches indépendantes — rédaction, recherche, débogage — devraient chacune avoir leur propre session pour éviter les interférences de contexte.
</Callout>

<Callout type="tip">
**Résumez régulièrement dans les longues sessions** : après 20 tours et plus, demandez de façon proactive à Kimi de résumer les informations clés afin d'éviter toute perte de données.
</Callout>

<Callout type="tip">
**Supprimez rapidement les informations sensibles** : l'historique des discussions est conservé ; supprimez l'intégralité de la session après avoir traité du contenu privé.
</Callout>
