---
title: "Bot Telegram"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Bot Telegram - Kimi Help Center"
  description="Connectez Kimi Claw à Telegram pour discuter avec lui depuis n'importe quel appareil, sans navigateur."
/>

# Bot Telegram

Connectez Kimi Claw à Telegram pour discuter avec lui depuis n'importe quel appareil, sans navigateur.

## Configuration étape par étape

### 1. Créer un bot avec BotFather

1. Ouvrez Telegram et démarrez une conversation avec [@BotFather](https://t.me/BotFather).
2. Envoyez `/newbot`.
3. Suivez les instructions pour choisir un **nom d'affichage** et un **nom d'utilisateur** (qui doit se terminer par `bot`).
4. BotFather vous répondra avec un **token de bot** — copiez-le et conservez-le en lieu sûr.

### 2. Connecter le bot à Kimi Claw

1. Ouvrez votre conversation Kimi Claw sur [kimi.com](https://kimi.com).
2. Indiquez à Kimi Claw : _« Voici mon token de bot Telegram : `<your-token>`. Configure la connexion Telegram, s'il te plaît. »_
3. Kimi Claw enregistrera le token dans sa configuration.

### 3. Redémarrer et appairer

1. Redémarrez Kimi Claw — demandez-lui de redémarrer, ou allez dans **Paramètres → Redémarrer Kimi Claw**.
2. Une fois de nouveau en ligne, ouvrez votre nouveau bot Telegram et envoyez un message.
3. Kimi Claw répondra — l'appairage est terminé.

## Conseils

- **Mode privé :** par défaut, dans les groupes Telegram, les bots ne voient que les messages qui les mentionnent ou qui commencent par `/`. Si vous souhaitez que Kimi Claw voie tous les messages du groupe, désactivez le mode privé via BotFather (`/setprivacy → Disable`).
- **Plusieurs bots :** vous pouvez créer plusieurs bots Telegram et les connecter à la même instance Kimi Claw.
- **Sécurité du token :** ne partagez jamais publiquement votre token de bot. En cas de compromission, révoquez-le via BotFather (`/revoke`) et configurez-en un nouveau.
