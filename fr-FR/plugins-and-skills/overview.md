---
title: "Que sont les plugins Kimi ?"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Connectez des outils externes à Kimi pour qu'il utilise des applications et des services afin d'accomplir des tâches. Une fois un plugin installé, Kimi peut faire appel à des fonctionnalités tierces — comme des données financières, des logiciels bureautiques et des outils de design — pour vous aider à accomplir votre travail."
---

<SeoMeta
  title="Que sont les plugins Kimi ? Comment les installer et les utiliser - Centre d'aide Kimi"
  description="Découvrez les plugins Kimi : connectez à Kimi des services externes tels que des données financières, des logiciels bureautiques et des outils de design, et appelez-les directement pendant l'accomplissement de vos tâches. Couvre les contextes d'utilisation des plugins, l'installation et l'autorisation, l'invocation, les catégories de plugins et la consommation de credits."
/>

# Que sont les plugins Kimi ?

Les plugins connectent des outils externes à Kimi pour qu'il utilise des applications et des services afin d'accomplir des tâches. Une fois un plugin installé, Kimi peut appeler directement la fonctionnalité tierce correspondante pendant l'accomplissement d'une tâche — par exemple, interroger des données financières, piloter des logiciels bureautiques ou utiliser des outils de design. Vous pouvez demander explicitement l'utilisation d'un plugin précis, et Kimi en appellera aussi un automatiquement lorsque c'est pertinent.

## Qu'est-ce qu'un plugin Kimi ?

Un plugin Kimi suit la [définition de plugin Kimi Code](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html#plugin-manifest) et peut inclure un ou plusieurs des composants suivants :

| Composant | Rôle |
| --- | --- |
| Skills | Fournissent les connaissances, les étapes et les conseils d'utilisation nécessaires à l'accomplissement des tâches |
| MCP | Connectent des logiciels, services, bases de données ou API externes |
| Agents | Délèguent les tâches complexes à des sous-agents spécialisés |
| Hooks | Exécutent automatiquement des actions prédéfinies lorsque des événements spécifiques se produisent |
| Commands | Fournissent des points d'entrée clairs et réutilisables sous forme de commandes |
| System Prompt | Ajoutent des instructions système à l'Agent principal tant que le plugin est activé |

L'expérience web de Kimi prend actuellement en charge les composants MCP et Skills des plugins. Kimi Work et Kimi Code suivent la définition de plugin complète ci-dessus et prennent en charge des combinaisons plus complètes de composants de plugins.

**Exemples :**

- **Plugin Notion** = MCP Notion + un skill de conseils d'utilisation
- **Plugin de recherche financière** = plusieurs MCP financiers + plusieurs skills d'analyse + un Agent personnalisé

## Où utiliser les plugins

Vous pouvez utiliser les plugins en passant le modèle à **K3** ou **K3 Swarm**, ainsi que dans les scénarios **Deep Research, Websites et PPT**.

Vous pouvez aussi utiliser les plugins dans l'**application de bureau Kimi Work** ; pour la liste des plugins intégrés sur desktop, consultez le [Centre des plugins Kimi Work](/kimi-work/plugin-center).

<Callout type="info">
Les plugins ne sont pas encore pris en charge dans les conversations Kimi Claw ni Kimi Plus.
</Callout>

## Installer des plugins

- **Points d'entrée** : utilisez le **+** de la zone de saisie ou saisissez « / » ; sur mobile, utilisez le **+** de la zone de saisie ou « / ».
- Recherchez ou parcourez la place de marché des plugins, ouvrez la fiche d'un plugin et cliquez sur Installer.
- Certains plugins exigent une **autorisation OAuth** (vous êtes redirigé vers la connexion au service tiers ; une fois l'autorisation accordée, vous pouvez l'utiliser) ; certains plugins sont **préinstallés** et ne demandent aucune installation manuelle.
- **Plugins réservés aux entreprises** : les utilisateurs hors entreprise peuvent les voir, mais le bouton « Installer » est grisé.
- Vous ne pouvez ni installer ni utiliser de plugins lorsque vous êtes déconnecté.

## Utiliser des plugins

- Après l'installation, saisissez « / » dans la zone de saisie ou cliquez sur **+** → Plugins, puis sélectionnez le plugin à invoquer ; vous pouvez **invoquer plusieurs plugins à la fois**.
- Vous pouvez aussi simplement décrire votre besoin (par exemple, « recherche cette entreprise sur Tianyancha »), et Kimi choisira automatiquement le bon plugin.
- Lorsque Kimi appelle les outils d'un plugin, il affiche « Utilisation du plugin xx » dans sa réponse.

## Catégories et liste des plugins

La place de marché des plugins est organisée selon les catégories ci-dessous. Les plugins réellement visibles varient selon la **région (nationale / internationale)** et la **plateforme**, et certains plugins apparaissent dans plusieurs catégories.

- **Finance** : Financial Investment Analysis, Investment Banking & Private Equity, Corporate Finance & Accounting, Wind Financial Data, S&P Global Market Intelligence, Hundsun Gildata, Tonghuashun iFinD, SEC, Global Financial Database, World Bank Open Data, base de données du FMI (Fonds monétaire international), Stripe, Tianyancha
- **Productivité** : Notion, Baidu Netdisk
- **Développement** : GitHub, Supabase, Neon, Cloudflare
- **Créatif** : Inspiration Pool, Image Generation, Video Generation, Audio Generation, Canva
- **Général** : Vivify

## Données et autorisations

- Lorsque vous sélectionnez un plugin ou demandez explicitement à l'utiliser, Kimi privilégie les outils fournis par ce plugin et génère sa réponse à partir des résultats renvoyés par ces outils ; une fois un plugin connecté, Kimi accède aux contenus concernés dans le cadre que vous avez autorisé.
- Si un plugin est fourni par un tiers, ses règles de traitement des données sont définies indépendamment par cette entreprise, et les données sont soumises à ses conditions d'utilisation et à sa politique de confidentialité — nous vous recommandons de les consulter avant d'accorder l'autorisation.
- Vous pouvez **désinstaller un plugin ou révoquer son autorisation à tout moment**. Après la désinstallation, l'autorisation OAuth associée est révoquée ; pour réutiliser le plugin, vous devrez le réinstaller et renouveler l'autorisation.

## FAQ

### Les plugins consomment-ils les credits de mon abonnement ?
Certains, oui. Lorsque Kimi appelle les outils ou services d'un plugin pour accomplir une tâche, des credits sont consommés en fonction de l'usage réel ; les plugins sans coût d'appel n'entraînent aucun frais supplémentaire.

### Puis-je utiliser plusieurs plugins à la fois ?
Oui. Vous pouvez invoquer plusieurs plugins à la fois via « / » ou **+**.

### Pourquoi un plugin donné n'apparaît-il pas ?
Les plugins disponibles varient selon la région (nationale / internationale) et la plateforme ; en outre, certains plugins sont réservés aux utilisateurs personnels ou aux entreprises.

### Puis-je utiliser des plugins de ChatGPT, Claude ou d'autres plateformes ?
Oui. Consultez [Comment créer un plugin personnel](/plugins-and-skills/create) : fournissez à Plugin Builder les fichiers du plugin existant ou le lien du projet depuis l'autre plateforme, puis suivez les instructions pour le convertir en plugin Kimi.
