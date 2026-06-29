---
title: "Utiliser les Skills en mode Agent"
slug: "use-skills-in-agent"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Utiliser les Skills en mode Agent - Centre d'aide Kimi"
  description="Découvrez comment invoquer des skills, créer des skills personnalisés, explorer les skills recommandés et étendre les capacités de Kimi en mode Agent."
  ogType="article"
/>

# Utiliser les Skills en mode Agent

## Comment invoquer les Skills ?

Dans la zone de saisie du mode Agent de Kimi, vous disposez de trois façons d'invoquer les Skills :

**Méthode 1 : utiliser la commande `/`**

Tapez `/` dans la zone de saisie pour afficher la liste des Skills. Cliquez sur le nom d'un Skill pour l'insérer. Vous pouvez également saisir des mots-clés après le `/` pour filtrer la liste.

**Méthode 2 : utiliser le menu « ➕ »**

Cliquez sur le bouton **➕** situé à côté de la zone de saisie. Sélectionnez un Skill dans le menu : son nom sera inséré sous forme de texte dans la zone de saisie.

<Frames
  src="./images/skills/加号-en.png"
  alt="Invoke skills using plus menu"
/>

**Méthode 3 : laisser Kimi décider**

Décrivez simplement votre besoin. Kimi identifie et déclenche automatiquement le Skill le plus adapté en fonction du contenu de votre tâche.

### Exemple : utiliser un Skill pour générer un rapport d'analyse SEO

Supposons que vous soyez responsable de contenu et que vous souhaitiez analyser les performances SEO de votre site web :

1. Tapez `/` dans la zone de saisie, puis trouvez et sélectionnez le Skill `seo-analyzer`.
2. Poursuivez en saisissant : `Analyse les performances SEO de https://help.com/zh-cn/help, et liste les principaux problèmes ainsi que des suggestions d'optimisation.`

<Frames
  src="./images/skills/SEO-en.png"
  alt="SEO analysis"
/>

3. Une fois envoyé, Kimi effectue automatiquement les recherches, organise les informations et produit un rapport structuré en suivant le flux de travail d'analyse SEO.

Nul besoin d'expliquer à Kimi comment mener l'analyse : le flux de travail est déjà défini dans le Skill.

## Explorer et gérer les Skills

### Sélection de Kimi

Kimi propose un ensemble de skills recommandés prêts à l'emploi, ajoutables en un seul clic :

<Frames
  src="./images/skills/kimi-picks.png"
  alt="Recommended skills"
/>

## Personnaliser les Skills

Si les skills recommandés par Kimi ne répondent pas à vos besoins, vous pouvez créer des skills personnalisés adaptés à votre flux de travail.

**Quand créer un skill personnalisé ?**

- Vous avez une tâche récurrente à exécuter régulièrement (par exemple, des rapports hebdomadaires sur la concurrence).
- Vous souhaitez que Kimi produise du contenu dans le format propre à votre entreprise.
- Vous disposez de méthodes de travail établies que vous voulez voir appliquées directement par Kimi.

Un bon skill doit faire une seule chose, et la faire bien. N'essayez pas de regrouper toutes vos exigences dans un seul skill.

### Option 1 : du document au skill

Si vous disposez déjà de modèles, de documents standards ou de fichiers d'exemple, vous pouvez les importer directement et laisser Kimi en tirer parti pour générer le skill correspondant.

1. Sélectionnez **Document Office vers Skill** dans le panneau **Skills**.
2. Cliquez ou faites glisser des fichiers dans la zone d'import. Formats pris en charge : `docx`, `xlsx`, `pdf`, `pptx` et captures d'écran de documents. Maximum 3 fichiers par import, chacun ne dépassant pas 100 Mo.

<Frames
  src="./images/skills/document.png"
  alt="Upload documents to generate skills"
/>

3. Renseignez la description du skill en indiquant à Kimi ce qu'il doit accomplir. Par exemple : « Aide-moi à organiser les données de ventes hebdomadaires en respectant le style et le format de ce modèle. »
4. Cliquez sur **Créer le Skill**.

### Option 2 : créer avec Kimi

Si vous n'avez pas de documents prêts à l'emploi, vous pouvez décrire vos besoins directement par le dialogue, et Kimi vous guidera pas à pas pour créer le skill.

Tapez `/skill-creator` dans la zone de saisie, puis décrivez le Skill que vous souhaitez créer. Kimi vous aidera à structurer vos besoins en un Skill complet.

<Frames
  src="./images/skills/create-skill-en.png"
  alt="Create Skills through dialogue"
/>

### Gérer les Skills existants

Dans le panneau **Skills**, basculez vers l'onglet **Skills personnalisés** pour modifier, mettre à jour les documents ou supprimer les Skills que vous avez créés.

<Frames
  src="./images/skills/managing-skills.png"
  alt="Manage custom Skills"
/>

<Callout type="info">
Les Skills sont pris en charge en mode Agent et dans Kimi Claw. Les Skills portant le suffixe `swarm` ne sont disponibles que dans les scénarios Swarm (cluster d'Agents) et ne s'affichent pas dans les autres contextes.
</Callout>

## Rédiger des descriptions de Skill efficaces

Kimi s'appuie sur la description d'un Skill pour déterminer « quand l'utiliser ». Plus votre description est claire, plus le Skill sera déclenché avec précision.

Une description de Skill complète doit comporter :
- La fonction principale du Skill.
- Les scénarios auxquels il convient.
- Les mots déclencheurs auxquels il répond.
- La reconnaissance des mentions indirectes du besoin.

<ComparisonBlock
  wrong={"Aide les utilisateurs à rechercher et découvrir des Skills."}
  correct={"Aide les utilisateurs à rechercher et découvrir des Skills. À utiliser lorsque les utilisateurs souhaitent explicitement trouver un certain type de Skill ou décrivent un problème en espérant obtenir des recommandations de Skill. Les mots déclencheurs incluent « Trouver des Skills », « Rechercher des Skills », « Existe-t-il un Skill capable de faire X ? », etc."}
/>
