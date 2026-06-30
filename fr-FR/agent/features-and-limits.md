---
title: "Fonctionnalités et limites de l'Agent"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Fonctionnalités et limites de l'Agent

<SeoMeta
  title="Fonctionnalités et limites de l'Agent - Centre d'aide Kimi"
  description="Découvrez les capacités de Kimi Agent, des conseils d'utilisation, ses limites et les bonnes pratiques pour obtenir des résultats optimaux."
/>

<Callout type="info">
**Kimi Agent** est un assistant propulsé par l'IA qui exécute de manière autonome des tâches complexes grâce à un raisonnement en plusieurs étapes et à l'intégration d'outils. Ce guide aborde les bonnes pratiques, les limites et les questions fréquentes pour vous aider à tirer le meilleur parti du mode Agent.
</Callout>

## Conseils d'utilisation

**(1) Avant de soumettre une tâche**

Indiquez clairement le contexte et les contraintes — contexte du projet, cas d'usage et exigences particulières — afin d'aider Kimi à comprendre votre intention avec plus de précision.

**(2) Pendant l'exécution**

Kimi Agent s'exécute de manière asynchrone en arrière-plan. Si la page web semble figée ou bloquée, **ne cliquez pas sur « Arrêter »** — cela interromprait l'exécution de la tâche. Vous pouvez quitter la page ; la tâche continuera de s'exécuter en arrière-plan et vous recevrez une notification dès qu'elle sera terminée. Pour les tâches dont la durée est susceptible d'être longue (par exemple K2.6 Agent Swarm [Beta]), faites preuve de patience.

**(3) Scénarios de sites web**

L'Agent peut générer du contenu full-stack, incluant les interfaces frontend, les services backend et la logique de stockage persistant. Si un projet ne fonctionne pas comme prévu, le problème est généralement lié au démarrage du sandbox, à l'initialisation de la base de données, à la configuration de l'authentification ou à une action de publication manquante. L'Agent standard s'exécute dans le cloud et ne peut pas accéder directement aux fichiers locaux ni aux systèmes intranet d'entreprise. Pour accéder à des fichiers locaux ou à l'intranet, utilisez Kimi Claw.

<Callout type="tip">
**Besoin d'accéder à des fichiers locaux ?** Utilisez Kimi Claw pour accéder en toute sécurité aux fichiers locaux et aux systèmes intranet d'entreprise. Pour en savoir plus, consultez la [documentation de Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Conversations à plusieurs tours et ajustements de tâche**
Au fil de plusieurs échanges et révisions, l'Agent peut « oublier » certains détails évoqués au début. Il est préférable d'établir d'abord le cadre de la tâche et les points clés, puis d'apporter des ajustements progressifs.

**(5) Décomposition des grandes tâches**
Pour les tâches volumineuses et complexes, divisez-les en 2 à 3 phases et soumettez-les à Kimi par lots, ou utilisez K2.6 Agent Swarm [Beta].

**(6) Limites de production de fichiers**
En mode Agent standard, un seul fichier peut généralement être produit par tâche (par exemple, un document ou une feuille de calcul). Pour produire plusieurs fichiers (par exemple, à la fois un document Word et un PPT), utilisez K2.6 Agent Swarm [Beta].

**(7) Limites de contexte et équilibre de la production**
En raison de la limite de contexte de 256 K caractères des grands modèles de langage (environ 40 000 à 50 000 caractères chinois / ~100 000 mots anglais), le traitement de gros volumes de fichiers exige d'équilibrer le volume d'entrée et de sortie.

<Callout type="warning">
**Note sur la limite de contexte** : l'Agent utilise une fenêtre de contexte de 256 K caractères. Pour des résultats optimaux, fournissez un contexte concis et évitez de le surcharger avec des fichiers superflus.
</Callout>

## Remarques importantes

<Callout type="warning">
**Consommation de crédits** : les tâches de l'Agent puisent dans le pool de crédits partagé (autres fonctionnalités de l'abonnement). Kimi Code utilise un pool de crédits distinct. Chaque tâche de l'Agent consomme généralement 1 unité de crédits. Pour des informations détaillées sur le crédits selon le niveau d'abonnement, consultez [Crédits et facturation](/agent/quota-and-billing).
Niveau gratuit : 6 tâches Agent/mois
Niveaux payants : de 60 à 720 tâches Agent/mois selon votre formule
</Callout>

- **Durée d'exécution** : en mode Agent, une tâche unique prend généralement de 5 à 20 minutes. Les tâches K2.6 Agent Swarm [Beta] peuvent durer plus longtemps. Vous pouvez quitter la page — il suffit de ne pas cliquer sur Arrêter pour ne pas interrompre la tâche.
- **Consommation de crédits** : les tâches de l'Agent puisent dans le pool de crédits partagé. Kimi Code utilise un pool de crédits distinct.
- **Tâches simples** : pour les questions-réponses simples, le mode de discussion standard est recommandé pour des réponses plus rapides.

<Callout type="warning">
**Conformité du contenu** : les fonctionnalités de l'Agent sont soumises au [Contrat d'utilisation de Kimi](https://www.kimi.com/user/agreement/modelUse?version=v2). La génération de contenu interdit n'est pas prise en charge ; la soumission de contenu interdit peut entraîner la suspension du service.
</Callout>

## FAQ

**Q : Que peut faire l'Agent ?**

L'Agent répond aux besoins suivants grâce à de multiples appels d'outils :
- **Génération et édition de texte** : génère des articles, des rapports, des documents, etc., avec la prise en charge de divers styles et formats rédactionnels.
- **Développement web** : construit des interfaces et des services de projets full-stack, prenant en charge la conception d'interfaces d'application, l'intégration backend, la persistance des données et la visualisation des données.
- **Génération de présentations** : outil PPT web dédié pour générer des présentations complètes.
- **Aide au codage** : écriture et débogage de code dans plusieurs langages de programmation.

**Q : Pourquoi le site web créé par l'Agent ne fonctionne-t-il pas ?**

Un projet complet se compose généralement de trois parties : l'interface frontend, les services backend et le stockage de données. L'Agent peut générer le contenu d'un projet full-stack pour ces trois couches. Si votre projet ne fonctionne pas comme prévu, le problème est généralement lié au démarrage du sandbox, à l'initialisation de la base de données, à la configuration de l'authentification ou à une action de publication manquante.

**Q : Quels sont les livrables de l'Agent ?**

- Les fichiers complets d'exécution de la tâche
- L'aperçu du projet déployé et les versions publiées
- Une archive Zip téléchargeable (située dans `/mnt/okcomputer/output/`)

**Q : Quelle est la longueur de contexte de l'Agent ?**

L'Agent utilise une longueur de contexte de **256 K caractères** (environ 40 000 à 50 000 caractères chinois / ~100 000 mots anglais).

**Q : Comment le crédits de l'Agent est-il calculé ?**

L'Agent, les PPT et les autres fonctionnalités de l'abonnement partagent un même pool de crédits. Kimi Code utilise un pool de crédits distinct. Chaque tâche de l'Agent compte généralement pour une unité de crédits. Consultez votre crédits et votre consommation actuels sur [Crédits d'abonnement](https://www.kimi.com/membership-credits).
