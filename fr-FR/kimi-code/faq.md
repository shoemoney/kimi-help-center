---
title: "FAQ Kimi Code"
slug: "faq"
order: 4
extract_headings: false
preview: true
preview_content: "Foire aux questions sur Kimi Code."
---

<SeoMeta
  title="FAQ Kimi Code - Centre d'aide Kimi"
  description="Foire aux questions sur l'installation, l'authentification, la migration, l'interaction et plus encore de la CLI Kimi Code."
/>

# Foire aux questions

## Migrer depuis l'ancienne version

<Callout type="info">
La CLI Kimi Code a connu une mise à jour majeure de version — passant de Python/uv à Node.js, ce qui simplifie l'installation, accélère le démarrage et propose une interface de terminal repensée. L'ancienne version sera progressivement abandonnée ; nous vous recommandons donc d'effectuer la mise à niveau dès que possible.
</Callout>

Si vous migrez depuis l'ancienne version, suivez les étapes ci-dessous : une seule commande transfère votre configuration, vos serveurs MCP et votre historique de sessions vers la nouvelle version.

### Nouveautés

- **Fini Python / uv** : reconstruit sur Node.js — plus besoin d'environnement Python, installation simplifiée
- **Binaire natif, prêt à l'emploi** : démarrage plus rapide, empreinte allégée
- **Interface de terminal repensée** : une expérience plus fluide et plus réactive
- **Migration complète des données** : configuration, serveurs MCP et historique de sessions sont tous transférés sans accroc

### Comment migrer

Il existe deux façons de migrer.

La **première fois que vous lancez `kimi`** après avoir installé kimi-code, il vérifie automatiquement si des données kimi-cli existent dans `~/.kimi/`. S'il en trouve, une invite de migration apparaît, et vous pouvez choisir de migrer maintenant, plus tard, ou de ne plus être sollicité.

Vous pouvez aussi **la lancer manuellement à tout moment** :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi migrate",
    },
  ]}
/>

Vous pouvez choisir de migrer également vos sessions de conversation. Si vous n'avez pas encore besoin de l'historique, choisissez **Config only** ; sinon, choisissez **Config + N sessions** pour tout transférer d'un coup. Un récapitulatif s'affiche à la fin.

### Ce qui se passe pendant la migration

**Ce qui est migré** : la configuration (`config.toml`), la configuration des serveurs MCP, l'historique des saisies, ainsi que les sessions de conversation que vous avez choisi de migrer.

**Ce qui n'est pas migré** : les identifiants de connexion OAuth et les autorisations de service MCP ne sont pas copiés ; vous devrez donc relancer `/login` et réautoriser les serveurs MCP après la migration. Les plugins kimi-cli ne sont pas non plus concernés.

<Callout type="tip">
La migration **ne modifie ni ne supprime jamais** les anciennes données de `~/.kimi/`. kimi-cli continue de fonctionner comme avant, et les deux n'interfèrent pas l'un avec l'autre. La migration peut aussi être relancée plusieurs fois : les sessions déjà migrées ne sont pas réimportées.
</Callout>

Après la migration, les sessions importées depuis kimi-cli sont marquées d'un `[imported]` dans le sélecteur de sessions, afin que vous puissiez les distinguer des nouvelles.

## Installation et authentification

### Aucun modèle disponible lors de l'exécution de `/login`

Si vous voyez « No models available for the selected platform » lors de l'exécution de `/login`, cela peut être dû à :

- **Une clé API invalide ou expirée** : vérifiez que la clé API saisie est correcte et toujours valide.
- **Un problème de connexion réseau** : confirmez que vous pouvez accéder à l'adresse du service API (telle que `api.kimi.com` ou `api.moonshot.cn`).

**Attention à la distinction entre plateformes**

Les avantages de l'abonnement Kimi Code et la [Kimi Open Platform](https://platform.kimi.com) ont des Base URLs différentes. Veuillez vous assurer que la Base URL correspond à la clé API lors de la configuration.

| Plateforme | Base URL | Facturation | Création de clé |
|------|---------|---------|-------------|
| **Kimi Code** | Compatible Anthropic : `https://api.kimi.com/coding/` | Abonnement Kimi (inclut les crédits) | [Console Kimi Code](https://www.kimi.com/code/console) |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1` | Paiement à l'usage | [Kimi Open Platform](https://platform.kimi.com) |

### La clé API est invalide

Raisons possibles d'une clé API invalide :

- **Clé saisie incorrectement** : vérifiez l'absence d'espaces superflus ou de caractères manquants.
- **Clé expirée ou révoquée** : confirmez l'état de la clé dans la console de la plateforme.

### Abonnement expiré ou crédits épuisés

Si vous utilisez la plateforme Kimi Code, vous pouvez vérifier vos crédits actuels et l'état de votre abonnement via la commande `/usage`. Si vos crédits sont épuisés ou votre abonnement expiré, vous devez le renouveler ou passer à une offre supérieure sur [Kimi Code](https://kimi.com/code).

## Abonnement

### Comment demander une facture ou faire évoluer mon abonnement ?

Rendez-vous sur la [page d'abonnement Kimi](https://www.kimi.com/membership/pricing#pricing-faq) et suivez les instructions pour soumettre une demande de facture ou faire évoluer votre forfait.

## Problèmes d'interaction

### Échec du collage d'image

Lors du collage d'une image avec `Ctrl-V`, si vous voyez « Current model does not support image input », c'est que le modèle actuel ne prend pas en charge l'entrée d'image.

Solutions :

- **Basculez vers un modèle prenant en charge les images** : utilisez un modèle doté de la capacité `image_in`.
- **Vérifiez le contenu du presse-papiers** : assurez-vous que le presse-papiers contient bien des données d'image, et non un chemin vers un fichier image.

## Mises à jour et mises à niveau

### Le premier lancement sous macOS est lent

Gatekeeper de macOS effectue une vérification de sécurité au premier lancement d'un nouveau programme, ce qui ralentit le démarrage. Solutions :

- **Attendez la fin de la vérification** : soyez patient lors du premier lancement ; les démarrages suivants retrouveront leur vitesse normale.
- **Ajoutez l'outil aux Outils de développement** : ajoutez votre application de terminal dans **Réglages Système → Confidentialité et sécurité → Outils de développement**.

### Comment mettre à niveau la CLI Kimi Code

Exécutez `kimi upgrade` pour vérifier la dernière version et afficher les options de mise à jour. Choisissez `Install update now` pour effectuer la mise à niveau. Vous pouvez aussi mettre à niveau directement via le gestionnaire de paquets :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

## FAQ de l'extension VS Code

Voici les questions fréquentes concernant l'extension VS Code Kimi Code.

### VS Code indique qu'aucun espace de travail n'est ouvert

Veuillez ouvrir un dossier dans VS Code. L'extension VS Code Kimi Code nécessite un espace de travail pour fonctionner correctement.

### VS Code indique que la CLI est introuvable

Veuillez installer manuellement la CLI Kimi Code et configurer `kimi.executablePath` dans les paramètres de VS Code, ou assurez-vous que la CLI intégrée est présente.

### Échec de la connexion dans VS Code

Essayez d'ignorer la connexion et d'utiliser plutôt le mode clé API, vérifiez votre connexion réseau, ou réessayez plus tard via le menu d'actions de l'extension Kimi Code.

### VS Code envoie des messages sans réponse

Veuillez confirmer que la CLI Kimi Code est disponible, que le modèle est configuré et qu'un dossier d'espace de travail est ouvert dans VS Code. Consultez les journaux d'erreurs via « Kimi Code: Show Logs ».

### Délai de connexion dépassé dans VS Code

En l'absence de réponse dans les 30 secondes, le délai expire. Veuillez vérifier votre réseau et réessayer.

### Erreur dans VS Code avant l'envoi d'un message

Certaines erreurs empêchent l'envoi de messages dans VS Code, par exemple : CLI Kimi Code introuvable, version trop ancienne, non connecté, ou session occupée. L'erreur s'affiche sous forme de notification éphémère, et votre saisie est conservée pour une nouvelle tentative.

## Retours et contact

### La documentation n'a pas résolu mon problème

Si ce qui précède n'a pas résolu votre problème, n'hésitez pas à nous contacter par e-mail : [code@moonshot.ai](mailto:code@moonshot.ai). Veuillez décrire dans votre e-mail le problème rencontré, les étapes que vous avez suivies et toute information de journal pertinente ; nous vous répondrons dans les meilleurs délais.

Si vous avez des questions ou des suggestions, vous pouvez aussi nous faire part de vos retours sur [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues).
