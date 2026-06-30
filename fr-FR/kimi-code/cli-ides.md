---
title: "Intégration à l'IDE"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "Intégrez le CLI Kimi Code à votre IDE via ACP."
---

<SeoMeta
  title="Intégration à l'IDE - Centre d'aide Kimi"
  description="Intégrez le CLI Kimi Code à votre IDE via l'Agent Client Protocol (ACP). Guides de configuration pour Zed, les IDE JetBrains et Paseo, ainsi qu'un dépannage."
/>

# Utiliser le CLI Kimi Code dans les IDE

<Callout type="info">
Le CLI Kimi Code prend en charge l'intégration aux IDE via l'[Agent Client Protocol (ACP)](https://agentclientprotocol.com/), ce qui vous permet de profiter du codage assisté par IA directement dans votre éditeur.
</Callout>

## Prérequis

Avant de configurer votre IDE, assurez-vous que le CLI Kimi Code est installé et que vous avez terminé la configuration de connexion.

L'adaptateur ACP est exposé via la sous-commande `kimi acp`. L'IDE le lance comme processus enfant et communique sur stdin/stdout en utilisant JSON-RPC. Chaque fois que l'IDE crée une session, le CLI réutilise son état d'authentification existant : inutile de vous reconnecter.

<Callout type="tip">
Sous macOS, les processus enfants lancés depuis l'interface graphique d'un IDE n'héritent généralement **pas** du `PATH` du shell du terminal. Si `kimi` ne se trouve pas dans un répertoire système comme `/usr/local/bin`, utilisez le chemin absolu dans la configuration de votre IDE. Exécutez `which kimi` dans un terminal pour trouver le chemin actif.
</Callout>

## Utiliser le CLI Kimi Code dans Zed

[Zed](https://zed.dev/) est un éditeur moderne doté d'une prise en charge native d'ACP.

Ajoutez ce qui suit au fichier de configuration de Zed, situé dans `~/.config/zed/settings.json` :

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

Champs de configuration :

- `type` : valeur fixe `"custom"`
- `command` : chemin vers l'exécutable du CLI Kimi Code. Si `kimi` n'est pas dans le `PATH`, utilisez le chemin complet (par ex. `/Users/you/.local/bin/kimi`).
- `args` : arguments de démarrage. La sous-commande `acp` bascule le CLI en mode ACP.
- `env` : variables d'environnement supplémentaires ; laissez généralement ce champ vide. Zed injecte automatiquement un environnement par défaut.

Une fois la configuration enregistrée, ouvrez une nouvelle conversation dans le panneau Agent de Zed : un sous-processus ACP `Kimi Code CLI` sera lancé selon la configuration ci-dessus. Les serveurs MCP déclarés dans la section `agent_servers` de Zed sont également transmis au côté kimi via le protocole ACP.

## Utiliser le CLI Kimi Code dans les IDE JetBrains

Les IDE JetBrains (IntelliJ IDEA, PyCharm, WebStorm, etc.) prennent en charge ACP via le plugin de chat IA.

Si vous n'avez pas d'abonnement JetBrains AI, vous pouvez activer `llm.enable.mock.response` dans le Registry pour accéder au panneau de chat IA dans les scénarios exclusivement ACP. Appuyez deux fois sur Maj et recherchez « Registry » pour l'ouvrir.

Dans le menu du panneau de chat IA, cliquez sur **Configure ACP agents** et ajoutez la configuration suivante :

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains est strict concernant le champ `command` : utilisez toujours un **chemin absolu**, que vous pouvez obtenir en exécutant `which kimi` dans un terminal. Une fois la configuration enregistrée, `Kimi Code CLI` apparaîtra dans le sélecteur d'agent du chat IA.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## Utiliser le CLI Kimi Code dans Paseo

[Paseo](https://paseo.sh/) est un orchestrateur auto-hébergé qui exécute et supervise les CLI d'agent depuis votre bureau, le web et votre mobile. Il se connecte au CLI Kimi Code via ACP, exactement comme le ferait un IDE.

Choisissez **Kimi Code CLI** dans le catalogue de fournisseurs ACP intégré à Paseo, ou ajoutez un fournisseur personnalisé dans `~/.paseo/config.json` :

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

L'adaptateur ACP générique de Paseo ne pilote pas le flux de connexion : effectuez donc d'abord la connexion en terminal (voir [Prérequis](#prérequis)), sinon la création de session échoue avec `Authentication required`.

## Dépannage

- **La session se déconnecte immédiatement / l'IDE affiche « agent exited »** : il s'agit généralement d'un chemin `command` incorrect ou d'une connexion manquante. Exécutez d'abord `kimi acp` dans un terminal pour vérifier : s'il se bloque en attendant stdin, le CLI lui-même fonctionne et le problème vient de la configuration de l'IDE ; s'il s'arrête immédiatement avec une erreur, suivez le message d'erreur (le plus souvent, vous devez exécuter `/login`).
- **L'IDE affiche « auth required »** : le CLI ne dispose d'aucun token d'authentification utilisable. Quittez l'IDE, exécutez `kimi` dans un terminal pour terminer la connexion, puis redémarrez l'IDE.
- **Les outils MCP ne sont pas visibles** : consultez la table des capacités de `kimi acp` pour confirmer que le type de transport MCP configuré dans votre IDE est pris en charge. L'adaptateur ACP du CLI Kimi Code prend actuellement en charge les transports `http` et `stdio` ; les types `sse` et `acp` sont silencieusement ignorés et un avertissement est inscrit dans le journal.
