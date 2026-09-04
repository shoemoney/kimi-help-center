---
title: "Comment créer un plugin personnel"
slug: "create"
order: 2
extract_headings: true
preview: true
preview_content: "Utilisez le skill Plugin Builder intégré à Kimi Work pour transformer une idée en une phrase, un dépôt de plugins externe ou n'importe quelle page web en un plugin à vous."
---

<SeoMeta
  title="Comment créer un plugin personnel - Centre d'aide Kimi"
  description="Créez un plugin personnel dans Kimi Work avec le skill Plugin Builder intégré : partez d'une idée en une phrase, importez un dépôt de plugins externe ou transformez n'importe quelle page web en plugin. Une fois enregistré dans votre place de marché de plugins personnelle, installez-le et utilisez-le immédiatement dans vos conversations."
/>

# Comment créer un plugin personnel

Dans Kimi Work, vous pouvez utiliser le skill intégré **Plugin Builder** pour transformer une idée en une phrase, un dépôt de plugins externe ou n'importe quelle page web en un plugin à vous. Quelle que soit la méthode choisie, le plugin vous parvient par le même chemin : **création / conversion → enregistrement dans votre place de marché de plugins personnelle (l'onglet « Personnel ») → clic sur + pour installer → utilisation dans une conversation**. Une fois installé, il est disponible immédiatement dans la conversation en cours — aucun redémarrage nécessaire.

Avant de commencer, assurez-vous d'avoir installé la dernière version de l'application de bureau [Kimi Work](https://www.kimi.ai/products/kimi-work). Plugin Builder est un skill intégré qui ne requiert aucune installation supplémentaire : saisissez « / » dans une conversation pour l'invoquer, ou cliquez sur « Plugin personnalisé » dans la place de marché des plugins pour commencer la création dans la conversation principale.

## Créer un nouveau plugin en une phrase

Idéal dans le cas « j'ai une idée, mais pas de code existant ». Il vous suffit de décrire la fonctionnalité souhaitée ; Plugin Builder se charge automatiquement de la génération de la structure, du remplissage des champs, de la validation locale et de l'enregistrement — vous n'écrivez pas un seul fichier à la main.

1. **Décrivez votre besoin.** Invoquez Plugin Builder dans une conversation et expliquez en une phrase ce que le plugin doit faire — par exemple, « crée-moi un plugin qui recherche des informations d'immatriculation d'entreprises ». Les champs déductibles, comme le nom, la description et la catégorie, sont remplis automatiquement ; seules les informations non déductibles, comme l'URL d'un serveur MCP ou une icône, vous seront soumises pour confirmation.
2. **Attendez la fin de la génération.** Plugin Builder génère les fichiers du plugin en local, passe automatiquement la validation de structure et de spécification, puis enregistre le plugin dans votre place de marché de plugins personnelle.
3. **Installez et utilisez.** Ouvrez **Plugins → Personnel**, retrouvez le plugin que vous venez de créer et cliquez sur + pour l'installer. Une fois installé, il est immédiatement disponible dans la conversation en cours, et vous pouvez l'invoquer à tout moment avec « / ».

**Prompt en un paragraphe :**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nCrée-moi un plugin de recherche bibliographique qui couvre :\n1. Recherche bibliographique : trouver des articles par sujet / auteur / revue, en renvoyant les notices bibliographiques, les résumés et les liens vers le texte intégral\n2. Export des résultats : exporter les résultats de recherche en CSV pour un import facile dans les gestionnaires de références\n3. Aide à la rédaction : rédiger une revue de littérature à partir des résultats de recherche",
    },
  ]}
/>

## Importer des plugins depuis une place de marché ou un dépôt

Envoyez un lien de dépôt de plugins à Plugin Builder : il le reconnaîtra automatiquement, convertira le format et l'installera dans votre onglet « Personnel ». Les plugins importés n'interfèrent pas avec la place de marché officielle et peuvent être désinstallés à tout moment.

1. **Formats de plugins pris en charge :** Plugin Builder reconnaît les manifestes de plugins des sources suivantes et les convertit tous au format natif `kimi.plugin.json` de Kimi :

| Format | Remarques |
| --- | --- |
| `kimi.plugin.json` | Format natif de Kimi : les champs obligatoires sont corrigés |
| Manifestes de plugins d'autres plateformes d'agents | Tels que les fichiers `plugin.json` dans des répertoires comme `.codex-plugin/plugin.json` ou `.claude-plugin/plugin.json`, ainsi que les fichiers d'index de place de marché fournis par ces plateformes |
| `server.json` | Le format du registre officiel MCP : converti en un plugin contenant uniquement un service MCP |
| `plugin.json` générique | Un manifeste générique situé à la racine du plugin |

2. **Comment importer :** envoyez le lien du dépôt à Plugin Builder. Il reconnaît automatiquement les formes de dépôts suivantes :

- **Dépôt à plugin unique** : l'ensemble du dépôt est converti en un seul plugin ;
- **Dépôt multi-plugins (monorepo)** : chaque sous-répertoire est converti en son propre plugin ;
- **Place de marché de plugins / dépôt d'index** (un dépôt avec un index plugins.json ou marketplace.json) : chaque entrée de l'index est étendue et convertie en lot ;
- **Dépôt de skills uniquement** : un dépôt sans manifeste de plugin, contenant uniquement des fichiers de skills, est empaqueté comme un plugin de type skill.

3. **Installer depuis l'onglet Personnel :** une fois le traitement terminé, Plugin Builder vous indique quels plugins sont utilisables. Allez dans **Plugins → Personnel** et cliquez sur « Installer » sur la carte correspondante pour commencer à l'utiliser dans vos conversations.

**Prompts en un paragraphe :**

Importer un seul dépôt :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nImporte le plugin du dépôt https://github.com/owner/example comme plugin personnel. Après la conversion, vérifie d'abord que la structure et les dépendances sont utilisables ; une fois confirmé, enregistre-le dans ma place de marché de plugins personnelle. Si la conversion échoue, explique-moi pourquoi.",
    },
  ]}
/>

Importer en lot une place de marché de plugins :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nConvertis en lot la collection de plugins sur https://github.com/hashgraph-online/awesome-ai-plugins en plugins personnels. Ne convertis que les 5 premiers pour que je les examine ; après ma confirmation, convertis tous les autres, enregistre-les un par un dans ma place de marché de plugins personnelle, et donne-moi enfin un rapport complet groupé par « utilisables / dépendances indisponibles / échec ».",
    },
  ]}
/>

Convertir uniquement un sous-répertoire précis :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nConvertis uniquement le plugin situé dans le répertoire https://github.com/owner/repo/tree/main/plugins/example. Une fois la conversion et les vérifications réussies, enregistre-le dans ma place de marché de plugins personnelle.",
    },
  ]}
/>

**Gérer les plugins importés :**

- **Mettre à jour un plugin** : si le dépôt source est mis à jour, ou si vous voulez changer le nom ou la description, dites-le simplement à Plugin Builder — il le reconvertira ou le modifiera et l'enregistrera à nouveau.
- **Désinstaller / supprimer** : désinstallez depuis l'onglet « Personnel » pour désactiver un plugin ; l'entrée reste dans l'onglet après la désinstallation — supprimez l'entrée si vous voulez la retirer complètement.
- **Répertoire source** : le résultat de la conversion est conservé dans le répertoire plugins/ de votre espace de travail local. Ce sont les « fichiers source » du plugin, sur lesquels Plugin Builder s'appuie pour les futures mises à jour — ne le supprimez pas manuellement.

## Transformer une page web en plugin

Idéal dans le cas « un site que j'utilise souvent n'a pas d'API publique, mais je veux que Kimi récupère des données et l'utilise pour moi ». Envoyez l'URL à Plugin Builder et décrivez votre besoin — par exemple, « transforme le site XX en plugin ; je veux rechercher XX ». Deux options de navigateur sont disponibles pour analyser le site et exécuter le plugin :

| Méthode | Idéal pour | Ce qu'il vous faut |
| --- | --- | --- |
| **Navigateur intégré (par défaut)** | La plupart des sites ; utilise le navigateur intégré de Kimi Work pour analyser le site et exécuter le plugin | Rien à installer ; lorsqu'une connexion est requise, connectez-vous une fois dans le navigateur intégré |
| **WebBridge (wb)** | Réutiliser des comptes déjà connectés dans Chrome | Installez d'abord WebBridge et utilisez-le pour piloter votre Chrome |

1. **Analyser le site.** Plugin Builder ouvre l'URL dans le navigateur choisi. Si la page exige une connexion, il vous demandera de vous connecter une fois dans le navigateur — il ne demande jamais votre mot de passe, vos cookies ni aucun identifiant.
2. **Rétroconcevoir les API et générer le plugin.** Il utilise réellement les fonctionnalités principales de la page, capture les requêtes réseau, détermine les API de données internes du site, puis génère un plugin de type skill avec des scripts de requête intégrés.
3. **Valider, enregistrer, installer.** Comme pour les méthodes précédentes : une fois le plugin validé, il est enregistré dans l'onglet « Personnel » ; cliquez sur + pour l'installer et commencer à l'utiliser.

Ensuite, dites simplement « recherche XX pour moi », et Kimi utilise le plugin pour récupérer les données directement dans le navigateur et organiser les résultats. Si les API du site changent et que le plugin cesse de fonctionner, demandez à Plugin Builder de réanalyser le site et de mettre à jour le plugin.

**Prompt en un paragraphe :**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nTransforme Hacker News (https://news.ycombinator.com) en un plugin qui couvre :\n1. Recherche de posts : saisir un mot-clé et renvoyer les titres, liens, scores et nombres de commentaires des posts\n2. Page d'accueil : récupérer les 30 premiers posts actuels de la page d'accueil\n3. Lecture des commentaires : ouvrir un post donné et résumer les points clés des principaux commentaires",
    },
  ]}
/>

<Callout type="warning">
La méthode du navigateur intégré repose sur la fonctionnalité de navigateur intégré de Kimi Work — si vous êtes invité à mettre à niveau, mettez à jour l'application de bureau vers la dernière version. La méthode WebBridge exige que WebBridge soit d'abord installé sur votre ordinateur et dans Chrome.
</Callout>
