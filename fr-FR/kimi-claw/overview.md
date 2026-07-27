---
title: "Présentation de Kimi Claw"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Déployez et gérez votre propre assistant IA Kimi Claw dans le cloud grâce à une installation en un clic."
---

<SeoMeta
  title="Présentation de Kimi Claw - Centre d'aide Kimi"
  description="Déployez et gérez votre propre assistant IA Kimi Claw dans le cloud grâce à une installation en un clic."
/>

# Présentation du produit

<Callout type="info">
**Kimi Claw** est un assistant IA doté d'une personnalité unique et d'une mémoire à long terme persistante. Avec Kimi Claw, vous pouvez créer, déployer et discuter avec votre propre instance OpenClaw, directement depuis Kimi.
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## Déploiement cloud en un clic

Vous n'avez pas encore d'OpenClaw ? Rendez-vous sur [kimi.com/bot](https://kimi.com/bot) pour en créer une. Kimi la déploie dans le cloud à votre place — sans achat de serveur ni configuration en ligne de commande.

<Callout type="warning">

- Le déploiement en un clic nécessite un forfait **Allegretto ou supérieur**. [Forfaits d'abonnement](https://www.kimi.com/membership/pricing).

</Callout>

- Kimi configure automatiquement le modèle **Kimi K2.6**, associe les crédits et avantages de votre **Kimi membership** et active Kimi Web Search — aucune configuration API distincte n'est requise.
- Kimi Claw peut être déployé directement sur Telegram et d'autres plateformes de discussion.

## Premiers pas

1. Connectez-vous sur [kimi.com/bot](https://kimi.com/bot)
2. Cliquez sur **Créer** pour lancer un nouveau Kimi Claw
3. Attendez la fin de l'installation automatique (généralement quelques minutes)
4. Personnalisez le nom et la personnalité de votre Kimi Claw
5. Dans **Paramètres → Canaux de discussion**, connectez les plateformes que vous souhaitez utiliser (par exemple Telegram)

## Associer un OpenClaw existant

Si vous hébergez déjà une instance OpenClaw, vous pouvez la connecter à Kimi en installant le plugin Kimi :

1. Rendez-vous sur [kimi.com/bot](https://kimi.com/bot) et sélectionnez **Associer un OpenClaw existant**
2. Suivez les instructions pour installer le plugin sur votre appareil OpenClaw
3. Une fois connecté, vous pouvez discuter avec votre OpenClaw via Kimi

<a id="switch-to-k3"></a>
## Passer au modèle Kimi K3

Kimi Claw utilise le modèle Kimi K2.6 par défaut. Si vous souhaitez utiliser Kimi K3, vous pouvez modifier automatiquement la configuration locale d'OpenClaw à l'aide des commandes suivantes.

```bash
# 1. Back up the current config
cp /root/.openclaw/openclaw.json /root/.openclaw/openclaw.json.bak.k3

# 2. Add the k3 model and switch the default model (example uses jq)
jq '
  (.models.providers["kimi-coding"].models // .models.providers.kimi-coding.models) |= . + [{
    "id": "k3",
    "name": "k3",
    "input": ["text", "image"],
    "reasoning": true,
    "contextWindow": 1048576,
    "maxTokens": 65536
  }]
  | .agents.defaults.model.primary = "kimi-coding/k3"
' /root/.openclaw/openclaw.json > /tmp/openclaw.json.tmp \
  && mv /tmp/openclaw.json.tmp /root/.openclaw/openclaw.json

# 3. Restart OpenClaw
openclaw gateway restart

# 4. Verify
session_status
```

Après exécution, vérifiez que la sortie de `session_status` affiche `model` = `kimi-coding/k3` et que la limite de `context` est `1.0m`.

<Callout type="warning">
Le chemin du fichier de configuration peut varier en fonction de la méthode d'installation ; remplacez `/root/.openclaw/openclaw.json` en fonction de votre situation. Sauvegardez toujours la configuration avant toute modification.
</Callout>
