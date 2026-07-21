---
title: "Plugins"
slug: "plugins"
order: 6
extract_headings: false
preview: true
preview_content: "Connectez des outils externes à Kimi afin qu’il puisse utiliser des applications et des services pour accomplir des tâches. Une fois un plugin installé, Kimi peut faire appel à des fonctionnalités tierces — données financières, logiciels bureautiques ou outils de création, par exemple — pour vous aider à avancer dans votre travail."
---

<SeoMeta
  title="Que sont les plugins Kimi ? Comment les installer et les utiliser - Centre d’aide Kimi"
  description="Découvrez les plugins Kimi : connectez à Kimi des services externes comme des données financières, des logiciels bureautiques ou des outils de création, puis appelez-les directement pendant l’exécution de vos tâches. Cette page explique où les plugins sont disponibles, comment les installer, les autoriser et les appeler, ainsi que leurs catégories et leur consommation de credits."
/>

# Plugins

Les plugins connectent des outils externes à Kimi afin qu’il puisse utiliser des applications et des services pour accomplir des tâches. Une fois un plugin installé, Kimi peut appeler directement la fonctionnalité tierce correspondante pendant l’exécution d’une tâche : interroger des données financières, piloter un logiciel bureautique ou utiliser des outils de création, par exemple. Vous pouvez demander explicitement l’utilisation d’un plugin précis ; Kimi peut aussi en appeler un automatiquement lorsque c’est pertinent.

## Où utiliser les plugins

Vous pouvez utiliser les plugins lorsque vous basculez le modèle sur **K3** ou **K3 Swarm**, ainsi que dans les scénarios **Deep Research, Websites et PPT**.

Vous pouvez également utiliser les plugins dans l’application de bureau **Kimi Work** ; pour consulter la liste des plugins intégrés sur ordinateur, voir le [Centre des plugins Kimi Work](/kimi-work/plugin-center).

<Callout type="info">
Les plugins ne sont pas encore pris en charge dans les conversations Kimi Claw ni Kimi Plus.
</Callout>

## Installer des plugins

- **Points d’accès** : sur le web, l’onglet **Plugins** de la barre latérale, le bouton **+** dans le champ de saisie ou la saisie de "/" ; sur mobile, le bouton **+** dans le champ de saisie ou "/".
- Recherchez un plugin ou parcourez le catalogue, ouvrez sa fiche, puis cliquez sur Installer.
- Certains plugins nécessitent une **autorisation OAuth** : vous êtes redirigé vers la connexion du service tiers, puis vous pouvez les utiliser une fois l’autorisation accordée. D’autres plugins sont **préinstallés** et ne nécessitent aucune installation manuelle.
- **Plugins réservés aux entreprises** : les utilisateurs hors entreprise peuvent les voir, mais le bouton « Installer » est grisé.
- Vous devez être connecté pour installer ou utiliser des plugins.

## Utiliser des plugins

- Après l’installation, saisissez "/" dans le champ de saisie ou cliquez sur **+** → Plugins, puis sélectionnez le plugin à appeler ; vous pouvez **appeler plusieurs plugins simultanément**.
- Vous pouvez aussi décrire simplement votre besoin, par exemple « recherche cette entreprise sur Tianyancha » : Kimi choisira automatiquement le plugin adapté.
- Lorsque Kimi appelle les outils d’un plugin, il affiche « Utilisation du plugin xx » dans sa réponse.

## Catégories et liste des plugins

Le catalogue des plugins est organisé selon les catégories ci-dessous. Les plugins que vous voyez réellement varient selon la **région (Chine continentale / international)** et la **surface d’utilisation** ; certains plugins apparaissent dans plusieurs catégories.

- **Finance** : Analyse des investissements financiers, Banque d’investissement et capital-investissement, Finance d’entreprise et comptabilité, Données financières Wind, S&P Global Market Intelligence, Hundsun Gildata, Tonghuashun iFinD, SEC, Base de données financière mondiale, World Bank Open Data, base de données du FMI (Fonds monétaire international), Stripe, Tianyancha
- **Productivité** : Notion, Baidu Netdisk
- **Développement** : GitHub, Supabase, Neon, Cloudflare
- **Création** : Réservoir d’inspiration, Génération d’images, Génération de vidéos, Génération audio, Canva
- **Général** : Vivify

## Credits

Certains plugins appellent des outils ou des services pour accomplir une tâche et **consomment vos credits d’abonnement selon l’utilisation réelle** ; les plugins sans coût d’appel n’entraînent pas de frais supplémentaires.

## Données et autorisations

- Lorsque vous sélectionnez un plugin ou demandez explicitement à l’utiliser, Kimi donne la priorité aux outils fournis par ce plugin et génère sa réponse à partir des résultats qu’ils renvoient ; après la connexion d’un plugin, Kimi accède au contenu pertinent dans le périmètre que vous avez autorisé.
- Si un plugin est fourni par un tiers, ses règles de traitement des données sont définies indépendamment par cette entreprise, et les données sont soumises à ses conditions d’utilisation et à sa politique de confidentialité. Nous vous recommandons de les consulter avant d’accorder l’autorisation.
- Vous pouvez **désinstaller un plugin ou révoquer son autorisation à tout moment**. Après la désinstallation, l’autorisation OAuth associée est révoquée ; pour réutiliser le plugin, vous devrez le réinstaller et l’autoriser de nouveau.

## FAQ

### Les plugins consomment-ils mes credits d’abonnement ?
Certains, oui. Lorsque Kimi appelle les outils ou services d’un plugin pour accomplir une tâche, des credits sont consommés selon l’utilisation réelle ; les plugins sans coût d’appel n’entraînent pas de frais supplémentaires.

### Puis-je utiliser plusieurs plugins à la fois ?
Oui. Vous pouvez appeler plusieurs plugins simultanément via "/" ou **+**.

### Pourquoi ne vois-je pas un plugin donné ?
Les plugins disponibles varient selon la région (Chine continentale / international) et la surface d’utilisation ; en outre, certains plugins sont réservés aux utilisateurs d’entreprise.
