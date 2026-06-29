---
title: "Bot de Telegram"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Bot de Telegram - Kimi Help Center"
  description="Conecta Kimi Claw a Telegram para chatear con él desde cualquier dispositivo, sin necesidad de un navegador."
/>

# Bot de Telegram

Conecta Kimi Claw a Telegram para chatear con él desde cualquier dispositivo, sin necesidad de un navegador.

## Configuración paso a paso

### 1. Crea un bot con BotFather

1. Abre Telegram e inicia un chat con [@BotFather](https://t.me/BotFather).
2. Envía `/newbot`.
3. Sigue las indicaciones para elegir un **nombre visible** y un **nombre de usuario** (debe terminar en `bot`).
4. BotFather te responderá con un **token del bot**: cópialo y guárdalo en un lugar seguro.

### 2. Conecta el bot a Kimi Claw

1. Abre tu conversación de Kimi Claw en [kimi.com](https://kimi.com).
2. Dile a Kimi Claw: _«Este es el token de mi bot de Telegram: `<your-token>`. Por favor, configura la conexión con Telegram.»_
3. Kimi Claw guardará el token en su configuración.

### 3. Reinicia y vincula

1. Reinicia Kimi Claw, ya sea pidiéndole que se reinicie o desde **Configuración → Reiniciar Kimi Claw**.
2. Una vez que vuelva a estar en línea, abre tu nuevo bot de Telegram y envía un mensaje.
3. Kimi Claw responderá: la vinculación está completa.

## Consejos

- **Modo de privacidad:** De forma predeterminada, los bots en los grupos de Telegram solo ven los mensajes que los mencionan o que comienzan con `/`. Si quieres que Kimi Claw vea todos los mensajes del grupo, desactiva el modo de privacidad desde BotFather (`/setprivacy → Disable`).
- **Varios bots:** Puedes crear varios bots de Telegram y conectarlos a la misma instancia de Kimi Claw.
- **Seguridad del token:** Nunca compartas públicamente el token de tu bot. Si se ve comprometido, revócalo desde BotFather (`/revoke`) y configura uno nuevo.
