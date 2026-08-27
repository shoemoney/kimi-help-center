---
title: "Bien démarrer avec Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Bien démarrer avec Kimi - Centre d’aide Kimi"
  description="Découvrez les trois modèles de Kimi (K2.6, K3, K3 Swarm), ses outils intégrés et ses capacités multimodales pour prendre rapidement en main le chat et l’exécution de tâches."
/>

# Bien démarrer avec Kimi

Vous pouvez saisir vos questions dans la zone de chat, téléverser des fichiers ou changer de modèle selon vos besoins.
Ouvrez [kimi.com](https://www.kimi.com) et essayez d’envoyer un message — dites bonjour à Kimi :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bonjour, Kimi !",
    },
  ]}
/>

## Choisir un modèle

Kimi propose plusieurs modèles. Cliquez sur le bouton de changement de modèle au-dessus de la zone de saisie pour passer de l’un à l’autre.

| Modèle | Puissance de réflexion | Idéal pour |
|-------|-------------------|----------|
| **K2.6** | Standard / Élevée | Conversations rapides et questions-réponses avec des réponses plus rapides |
| **K3** | Faible / Élevée / Max | Chat et tâches Agent ; le plus performant dans l’ensemble |
| **K3 Swarm** | Faible / Élevée / Max | Recherche à grande échelle et traitement par lots, réalisés en une seule fois |

<Callout type="tip">
K2.6, K3 et K3 Swarm sont tous facturés en credits. Consultez les [avantages de l’abonnement](https://www.kimi.com/help/membership/membership-overview) pour en savoir plus.
</Callout>

### À propos de Kimi K3

Kimi K3 est actuellement le modèle le plus puissant de Kimi. Doté de 2,8 billions de paramètres, il repose sur Kimi Delta Attention (KDA) et Attention Residuals, avec une **vision native** et une **fenêtre de contexte d’un million de tokens**. Premier modèle ouvert de classe 3T au monde, K3 est conçu pour offrir une intelligence de pointe en codage longue durée, travail de connaissance et raisonnement. Il atteint des performances de premier plan en codage, en exécution de longue haleine et dans un large éventail de tâches d’intelligence générale.

### Outils intégrés

Disponibles immédiatement, sans configuration :

| Outil | Description |
|------|------------|
| **Web Search** | Recherche web en temps réel pour accéder aux dernières actualités et informations |
| **Outil de récupération** | Accès direct à des URLs précises (pages web, documents, images et autres ressources en ligne) |
| **Recherche d’images** | Recherche texte-image et image-image pour trouver rapidement du contenu visuel |
| **IPython** | Exécution de code Python pour l’analyse et la visualisation de données |
| **Mémoire** | Mémoire intelligente qui enregistre vos préférences et habitudes personnelles |

## Capacités visuelles et multimodales
Kimi K3 comprend de bout en bout les images, les vidéos et les documents bureautiques (PDF/Word/Excel) grâce à une **architecture multimodale native** (et non à un OCR ajouté après coup). Il peut analyser directement le contenu des documents et réaliser des tâches bureautiques de niveau intermédiaire à avancé (comme rédiger des formules Excel ou générer des plans de PPT/du code VBA). Associé à sa vision native et à une fenêtre de contexte d’un million de tokens, il peut traiter des contenus multimodaux plus longs et plus complexes.
### Entrées multimodales prises en charge
- **Images** : PNG, JPEG, WebP, GIF, etc. (via URL, Base64 ou téléversement de fichier local)
- **Vidéo** : MP4, etc. (via video_url ou séquences d’images + paramètre fps)
- **Documents** : PDF, Word, Excel, TXT, Markdown, etc.
- **Ressources en ligne** : URLs, liens d’articles
- **Recherche d’images** : téléversez une image pour rechercher des images liées ou similaires
- **Compréhension vidéo** : prend en charge la compréhension vidéo — il peut analyser des enregistrements d’écran et reproduire la logique d’interaction
- **Codage visuel** : téléversez des captures d’écran ou des enregistrements d’écran pour générer du code frontend (HTML/Vue/React, etc.) ; il peut recréer automatiquement des pages web à partir de maquettes de design

### Formats de sortie
- Texte brut / texte et image combinés : réponses conversationnelles standard
- Markdown : texte enrichi avec titres, listes, tableaux et liens
- Blocs de code : HTML/Vue/React/Python/JSON/Mermaid, etc. (avec identifiants de langage)
- Données structurées JSON : sortie forcée en mode JSON
- Diagrammes Mermaid : organigrammes, diagrammes de séquence, cartes mentales, etc.
- Formules mathématiques LaTeX : expressions mathématiques en ligne et en bloc
- Sortie bimodale (Thinking) : renvoie à la fois `reasoning_content` (processus de réflexion) et `content` (réponse finale)
- Format d’appel d’outil : format standard Function Calling (pour les développeurs)

### Points importants

1. **Sortie de fichiers** : K3 peut produire de bout en bout des documents modifiables (comme `.pptx`, `.docx`, `.xlsx`, `.pdf`) et d’autres livrables complexes ; K2.6 privilégie les questions-réponses rapides et ne produit que du texte (comme des plans de PPT, du corps de texte Word ou du code).

<Callout type="tip">
Astuce : pour générer des images, de l’audio ou de la vidéo, cliquez sur "+" → Plugin, sélectionnez la fonctionnalité correspondante et utilisez-la avec **K3**. Pour créer des documents modifiables complexes ou exécuter des tâches en plusieurs étapes, nous vous recommandons de choisir **K3** ou **K3 Swarm** afin de profiter de l’expérience complète.
</Callout>

## Sessions et tours de conversation
Lorsque vous cliquez sur "Nouvelle conversation", considérez que vous entamez une longue conversation avec Kimi.
| Concept | Analogie | Définition technique |
|---------|---------|---------------------|
| **Session** | Une réunion complète (du début à la fin) | Un processus de chat complet, avec un début et une fin clairement définis |
| **Tour** | Un échange (vous parlez, Kimi répond) | Votre saisie et la réponse de Kimi forment un aller-retour |

### Principales différences
**Session**
- **Mémoire continue** : Kimi mémorise tout le contexte de la conversation en cours
- **Contexte entre les tours** : chaque réponse s’appuie sur le contenu précédent de la conversation comme contexte pour le tour suivant
- **Limites définies** : cliquer sur "Nouvelle conversation" = nouveau départ ; le contexte précédent est effacé
**Tour**
- **Décompte cumulatif** : Tour 1, Tour 2, … s’ajoutent progressivement
- **Mémoire limitée** : un trop grand nombre de tours (par exemple 50+) peut amener Kimi à "oublier" des éléments antérieurs, surtout pour les textes longs ou les tâches aux exigences strictes
- **Contrainte de longueur du contexte** : limitée par le nombre de tokens ; lorsque les tours s’accumulent, le contenu le plus ancien peut être compressé

<Callout type="tip">
**Cas limite** : si une seule question-réponse clôt la conversation, alors 1 tour = 1 session.
</Callout>

## Pourquoi cette distinction est importante
Au sein d’une même session, chaque nouvelle question ou instruction que vous envoyez reçoit une réponse qui tient compte de tous les tours précédents. À mesure que les tours s’accumulent et que le contenu s’allonge, la qualité des réponses peut diminuer progressivement.

### Scénarios fréquents
**Scénario 1 : Changer de sujet**
- À éviter : demander "aide-moi à calculer mes impôts" dans une session où vous rédigez un roman de 30 000 mots
- À faire : ouvrir une nouvelle session pour la question fiscale — vous éviterez que Kimi confonde les personnages du roman avec des notions fiscales
**Scénario 2 : Traitement d’un long document**
- Après des dizaines de tours, Kimi peut "oublier" des règles ou des résumés de fichiers établis au début
- Solution : résumez proactivement en cours de tâche ("Résume notre plan jusqu’ici"), ou démarrez une nouvelle session
**Scénario 3 : Comprendre les limites du produit**
- Les limites de longueur de contexte se mesurent en tokens, mais au quotidien, vous pouvez les envisager comme des "tours"
- Si vous voyez une invite "Commencer une nouvelle conversation", cela signifie que la session en cours comporte trop de tours
## Bonnes pratiques

<Callout type="tip">
**Démarrez une nouvelle session pour chaque tâche** : les tâches indépendantes — rédaction d’essai, recherche, débogage — doivent chacune disposer de leur propre session afin d’éviter les interférences de contexte.
</Callout>

<Callout type="tip">
**Résumez régulièrement dans les longues sessions** : après 20 tours ou plus, demandez proactivement à Kimi de résumer les informations clés pour éviter toute perte de données.
</Callout>

<Callout type="tip">
**Supprimez rapidement les informations sensibles** : l’historique de chat est conservé ; supprimez toute la session après avoir traité du contenu privé.
</Callout>
