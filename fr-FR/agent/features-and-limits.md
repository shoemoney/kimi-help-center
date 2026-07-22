---
title: "Fonctionnalités et limites de l’Agent"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Fonctionnalités et limites de l’Agent

<SeoMeta
  title="Fonctionnalités et limites de l’Agent - Centre d’aide Kimi"
  description="Découvrez les capacités de Kimi Agent, ses conseils d’utilisation, ses limites et les bonnes pratiques pour obtenir les meilleurs résultats."
/>

<Callout type="info">
**Kimi Agent** est un assistant propulsé par l’IA qui exécute de façon autonome des tâches complexes grâce à un raisonnement en plusieurs étapes et à l’intégration d’outils. Ce guide présente les bonnes pratiques, les limites et les questions fréquentes pour vous aider à tirer le meilleur parti du mode Agent.
</Callout>

## Conseils d’utilisation

**(1) Avant de soumettre une tâche**

Indiquez clairement les informations de contexte et les contraintes — contexte du projet, cas d’usage et exigences particulières — afin d’aider Kimi à mieux comprendre votre intention.

**(2) Pendant l’exécution**

Kimi Agent s’exécute de manière asynchrone en arrière-plan. Si la page web semble figée ou bloquée, **ne cliquez pas sur « Arrêter »** : cela interromprait l’exécution de la tâche. Vous pouvez quitter la page ; la tâche continuera en arrière-plan et vous recevrez une notification une fois terminée. Pour les tâches susceptibles de prendre du temps (par exemple Agent Swarm), merci de patienter.

**(3) Scénarios de site web**

Agent peut générer du contenu full-stack, notamment des interfaces frontend, des services backend et une logique de stockage persistant. Si un projet ne s’exécute pas comme prévu, le problème est généralement lié au démarrage du sandbox, à l’initialisation de la base de données, à la configuration de l’authentification ou à des actions de publication manquantes. L’Agent standard s’exécute dans le cloud et ne peut pas accéder directement aux fichiers locaux ni aux systèmes intranet d’entreprise. Pour accéder à des fichiers locaux ou à un intranet, utilisez Kimi Claw.

<Callout type="tip">
**Besoin d’accéder à des fichiers locaux ?** Utilisez Kimi Claw pour accéder en toute sécurité aux fichiers locaux et aux systèmes intranet d’entreprise. Pour en savoir plus, consultez la [documentation Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Conversations multi-tours et ajustements de tâche**
Au fil de plusieurs échanges et révisions, l’Agent peut « oublier » certains détails initiaux. Il est préférable de commencer par définir le cadre de la tâche et les points clés, puis de procéder à des ajustements progressifs.

**(5) Décomposition des tâches volumineuses**
Pour les tâches vastes et complexes, découpez-les en 2 à 3 phases et soumettez-les à Kimi par lots, ou utilisez Agent Swarm.

**(6) Limites de sortie des fichiers**
En mode Agent standard, une tâche ne peut généralement produire qu’un seul fichier (par exemple un document ou une feuille de calcul). Pour plusieurs fichiers (par exemple à la fois un document Word et un PPT), utilisez Agent Swarm.

**(7) Limites de contexte et équilibre des sorties**
En raison de la limite de contexte de 256K caractères des grands modèles de langage (environ 40 000 à 50 000 caractères chinois / ~100 000 mots anglais), le traitement de grands volumes de fichiers exige de trouver un équilibre entre le volume d’entrée et le volume de sortie.

<Callout type="warning">
**Remarque sur la limite de contexte** : Agent utilise une fenêtre de contexte de 256K caractères. Pour de meilleurs résultats, fournissez un contexte concis et évitez de le surcharger avec des fichiers inutiles.
</Callout>

## Points importants

<Callout type="warning">
**Utilisation des credits** : les tâches Agent consomment des credits issus du pool partagé. Kimi Code puise également dans ce pool partagé, mais dispose de sa propre rate limit de 5 heures / hebdomadaire, qui s’applique uniquement à Kimi Code. Chaque tâche Agent consomme généralement 1 unité de credit. Pour des informations détaillées sur les credits selon le niveau d’abonnement, consultez [Credits et facturation](/agent/quota-and-billing).

- 60 à 720 tâches Agent/mois selon votre abonnement
</Callout>

- **Temps d’exécution** : en mode Agent, une tâche unique prend généralement 5 à 20 minutes. Les tâches Agent Swarm peuvent durer plus longtemps. Vous pouvez quitter la page — veillez simplement à ne pas cliquer sur Arrêter afin de ne pas interrompre la tâche.
- **Utilisation des credits** : les tâches Agent consomment des credits issus du pool partagé, dans lequel Kimi Code puise également (Kimi Code dispose de sa propre rate limit de 5 heures / hebdomadaire).
- **Tâches simples** : pour les questions-réponses simples, le mode chat standard est recommandé afin d’obtenir des réponses plus rapides.

<Callout type="warning">
**Conformité du contenu** : les fonctionnalités Agent sont soumises au [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2). La génération de contenu interdit n’est pas prise en charge ; la soumission de contenu interdit peut entraîner la suspension du service.
</Callout>

## FAQ

**Q : Que peut faire Agent ?**

Agent répond aux besoins suivants au moyen de plusieurs appels d’outils :
- **Génération et édition de texte** : générer des articles, rapports, documents, etc., avec prise en charge de différents styles et formats d’écriture.
- **Développement web** : créer des interfaces et services de projet full-stack, avec prise en charge de la conception d’interfaces d’application, de l’intégration backend, de la persistance des données et de la visualisation de données.
- **Génération de diapositives** : outil PPT web dédié à la génération de présentations complètes.
- **Assistance au codage** : écriture et débogage de code dans plusieurs langages de programmation.

**Q : Pourquoi le site web créé par Agent ne fonctionne-t-il pas ?**

Un projet complet se compose généralement de trois parties : interface frontend, services backend et stockage des données. Agent peut générer du contenu de projet full-stack sur ces trois couches. Si votre projet ne s’exécute pas comme prévu, le problème est généralement lié au démarrage du sandbox, à l’initialisation de la base de données, à la configuration de l’authentification ou à des actions de publication manquantes.

**Q : Quels sont les livrables d’Agent ?**

- Fichiers complets d’exécution de la tâche
- Aperçu du projet déployé et versions publiées
- Archive Zip téléchargeable (située dans `/mnt/okcomputer/output/`)

**Q : Quelle est la longueur de contexte d’Agent ?**

Agent utilise une longueur de contexte de **256K caractères** (environ 40 000 à 50 000 caractères chinois / ~100 000 mots anglais).

**Q : Comment les credits Agent sont-ils calculés ?**

Toutes les fonctionnalités d’abonnement, y compris Kimi Code, partagent un même pool de credits. Chaque tâche Agent compte généralement pour une unité de credit.
