---
title: "K2.6 Agent Swarm [Bêta]"
slug: "agent-swarm"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="K2.6 Agent Swarm [Bêta] - Centre d'aide Kimi"
  description="K2.6 Agent Swarm Beta est une architecture de « mise à l'échelle horizontale » qui coordonne jusqu'à 300 sous-agents travaillant en parallèle — sans rôles prédéfinis ni workflows..."
/>

# K2.6 Agent Swarm [Bêta]

<Callout type="info">
**K2.6 Agent Swarm [Bêta]** est une architecture de « mise à l'échelle horizontale » qui coordonne jusqu'à 300 sous-agents travaillant en parallèle — sans nécessiter de rôles prédéfinis ni de workflows élaborés à la main. Il accomplit les tâches environ **4,5× plus vite** qu'une exécution par agent unique.
</Callout>

Le 27 janvier 2026, Moonshot AI a lancé Kimi K2.5, introduisant Agent Swarm [Bêta]. Le 20 avril 2026, Moonshot AI a publié et rendu open source Kimi K2.6, apportant des améliorations majeures à l'architecture Agent Swarm :
- Jusqu'à **300 sous-agents** travaillant simultanément
- Plus de **4 000 appels d'outils** par tâche
- **4,5× plus rapide** qu'une exécution séquentielle par agent unique

## L'histoire derrière le projet

En 2025, le récit dominant du secteur de l'IA portait sur la mise à l'échelle verticale — des modèles plus grands, davantage de paramètres. Mais cette approche se heurte à un plafond structurel : le goulot d'étranglement de l'exécution séquentielle unique.

Agent Swarm est né d'une situation bien réelle : lorsqu'une membre de l'équipe a tenté d'automatiser la collecte quotidienne d'informations boursières et s'est retrouvée avec 100 lignes de code if-else, elle a compris : « J'écris à la main un système multi-agents. » Si les modèles savent utiliser des outils, pourquoi ne pourraient-ils pas s'auto-architecturer ?

Agent Swarm est une structure organisationnelle auto-conçue — conçue par l'IA, et non par des humains. L'Agent principal (l'orchestrateur) dirige de façon autonome jusqu'à 300 sous-agents, exécutant jusqu'à 4 000 étapes de workflow en parallèle.

<Frames
  src="./images/swarm/swarm.png"
  alt="swarm"
/>

K2.6 Agent Swarm [Bêta] s'appuie sur la méthode d'entraînement PARL (Parallel-Agent Reinforcement Learning). Comparée aux approches par agent unique, elle réduit les étapes critiques d'un facteur 3 à 4,5 dans les scénarios de recherche à grande échelle.

## Comment l'utiliser ?

<Frames
  src="./images/swarm/screenshot-8.png"
  alt="screenshot 8"
/>

**Points d'accès :**
- **Web** : [kimi.com/agent-swarm](https://www.kimi.com/agent-swarm)
- **Mobile** : application Kimi → Changer de mode → Sélectionner K2.6 Agent Swarm [Bêta]

<Callout type="warning">
**Accès bêta** : K2.6 Agent Swarm [Bêta] est actuellement réservé aux membres Moderato, Allegretto, Allegro et Vivace. Les tâches consomment nettement plus de crédits que les tâches Agent standard.
</Callout>

**Étapes :**
1. Décrivez votre tâche et envoyez-la (par exemple, « Rassembler plus de 200 articles de Paul Graham »)
2. Suivez la progression en temps réel : création de la liste de tâches, génération des sous-agents, exécution parallèle
3. Recevez les livrables : projets de code, dossiers de fichiers, analyses de données, documents Office
4. Prévisualisez, téléchargez ou partagez les résultats
5. Basculez vers un K2.6 Agent unique pour poursuivre lors des échanges suivants

## Cas d'usage

### Découverte à grande échelle

**Cas 1 : les 3 meilleurs créateurs dans 100 niches YouTube**

K2.6 Agent Swarm [Bêta] a créé 300 sous-agents pour effectuer une recherche en parallèle, générant des tableaux structurés avec les noms de chaînes, le nombre d'abonnés et les descriptions.

<Frames
  src="./images/swarm/youtube.png"
  alt="YouTube"
/>

<Chat title="Voir le résultat" src="https://www.kimi.com/share/19c40eea-b272-8ef2-8000-0000af5e0baa?hide_sidebar=1&disable_auto_preview=1" />

**Cas 2 : rassembler plus de 200 articles de Paul Graham**

Agent Swarm a déployé des sous-agents pour rechercher, télécharger, classer et résumer plus de 200 articles dans des dossiers thématiques.

<Chat title="Voir le résultat" src="https://www.kimi.com/chat/19dbe721-9af2-86eb-8000-09b25205727e?chat_enter_method=home" />

### Production à grande échelle

**Cas : une revue de littérature de 100 pages à partir de 40 PDF**

K2.6 Agent Swarm [Bêta] a déployé plusieurs sous-agents spécialisés dans la rédaction, chacun responsable d'un chapitre. Résultat final : un document académique de 100 pages avec citations, graphiques méthodologiques et analyse du réseau de citations.

<Frames
  src="./images/swarm/literature-review.png"
  alt="literature review"
/>

### Pluralité des perspectives à grande échelle

**Cas : revue d'experts sur une stratégie de lancement produit**
Agent Swarm a déployé des sous-agents experts aux points de vue variés (chef de produit, investisseur, Customer Success) pour examiner une stratégie de lancement.

<Frames
  src="./images/swarm/expert-review.png"
  alt="expert review"
/>

<Chat title="Voir le résultat" src="https://www.kimi.com/share/19c40bc9-31a2-8533-8000-0000bad59b7a?hide_sidebar=1&disable_auto_preview=1" />

**Cas : *Le Problème à trois corps* réécrit dans 20 styles littéraires**
20 sous-agents « écrivains » ont composé indépendamment dans des styles distincts — de Virginia Woolf à Borges en passant par Kafka.

<Chat title="Voir le résultat" src="https://www.kimi.com/share/19c409c8-8692-821a-8000-0000070ad369?hide_sidebar=1&disable_auto_preview=1" />

## Plongée technique

**Architecture centrale : commandant + spécialistes**

- **Orchestrateur** = entraîneur/commandant : voit l'ensemble, définit la stratégie
- **Sous-agents** = joueurs : chacun concentré sur un rôle précis

**Principe clé : figer les joueurs, n'entraîner que l'entraîneur**

Tous les sous-agents conservent leurs capacités existantes ; seul l'orchestrateur s'améliore grâce au reinforcement learning. Cela offre une responsabilité claire et une stabilité d'entraînement.

**Prévenir la « paresse » :**
- **Effondrement séquentiel** : l'orchestrateur confie tout à un seul sous-agent
- **Fausse parallélisation** : des sous-tâches dénuées de sens pour fausser les métriques

**Solution : un mécanisme de récompense tridimensionnel**
1. Qualité du résultat final
2. Véritable parallélisme atteint
3. Taux d'achèvement des sous-tâches

**Métrique des étapes critiques**

Agent Swarm calcule le temps du sous-agent le plus lent à chaque étape. Cela impose une véritable optimisation du processus plutôt qu'un découpage aveugle des tâches.

**Context sharding**

Chaque sous-agent se concentre sur son propre « carnet de notes », consignant les détails pertinents de façon indépendante. Seules les conclusions clés sont remontées à l'orchestrateur — préservant le raisonnement sans saturer la mémoire.

**Résultats concrets**

Sur le benchmark BrowseComp :
- Précision : 15,9 % (agent unique) → 33,3 %
- Étapes critiques réduites d'environ 40 %

## Scénarios d'application

K2.6 Agent Swarm [Bêta] est particulièrement adapté aux cas suivants :
1. **Recherche d'informations à grande échelle** : collecte massive de données sur Internet
2. **Téléchargements en masse** : collecte de fichiers et de ressources à grande échelle
3. **Lecture à large spectre** : traitement de plus de 100 documents
4. **Rédaction longue** : contenus dépassant 100 000 mots
5. **Programmation complexe** : développement frontend, revue de code, refactorisation
6. **Automatisation bureautique** : documents professionnels, feuilles de calcul, présentations

**Pour aller plus loin :**
- [Kimi Agent Swarm : 100 sous-agents à grande échelle](https://www.kimi.com/blog/agent-swarm)
- [Kimi K2.5 : intelligence agentique visuelle​](https://www.kimi.com/blog/kimi-k2-5)
- [Kimi K2.6 : faire progresser le codage open source](https://www.kimi.com/blog/kimi-k2-6)
