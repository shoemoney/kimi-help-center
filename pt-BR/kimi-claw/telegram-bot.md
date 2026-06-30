---
title: "Bot do Telegram"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Bot do Telegram - Central de Ajuda Kimi"
  description="Conecte o Kimi Claw ao Telegram para conversar com ele de qualquer dispositivo — sem precisar de navegador."
/>

# Bot do Telegram

Conecte o Kimi Claw ao Telegram para conversar com ele de qualquer dispositivo — sem precisar de navegador.

## Configuração passo a passo

### 1. Crie um bot com o BotFather

1. Abra o Telegram e inicie uma conversa com o [@BotFather](https://t.me/BotFather).
2. Envie `/newbot`.
3. Siga as instruções para escolher um **nome de exibição** e um **nome de usuário** (deve terminar em `bot`).
4. O BotFather responderá com um **token do bot** — copie-o e guarde em local seguro.

### 2. Conecte o bot ao Kimi Claw

1. Abra sua conversa do Kimi Claw em [kimi.com](https://kimi.com).
2. Diga ao Kimi Claw: _"Aqui está o token do meu bot do Telegram: `<your-token>`. Configure a conexão com o Telegram, por favor."_
3. O Kimi Claw salvará o token em sua configuração.

### 3. Reinicie e faça o pareamento

1. Reinicie o Kimi Claw — peça para ele reiniciar ou vá em **Configurações → Reiniciar Kimi Claw**.
2. Assim que ele voltar a ficar online, abra seu novo bot do Telegram e envie uma mensagem.
3. O Kimi Claw responderá — o pareamento está concluído.

## Dicas

- **Modo de privacidade:** Por padrão, bots em grupos do Telegram só enxergam mensagens que os mencionam ou que começam com `/`. Se você quiser que o Kimi Claw veja todas as mensagens do grupo, desative o Modo de Privacidade pelo BotFather (`/setprivacy → Disable`).
- **Vários bots:** Você pode criar vários bots do Telegram e conectá-los à mesma instância do Kimi Claw.
- **Segurança do token:** Nunca compartilhe o token do seu bot publicamente. Se ele for comprometido, revogue-o pelo BotFather (`/revoke`) e configure um novo.
