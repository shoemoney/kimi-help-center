---
title: "Обзор Kimi Claw"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Разверните собственного AI-ассистента Kimi Claw в облаке одним кликом и управляйте им."
---

<SeoMeta
  title="Обзор Kimi Claw - Справочный центр Kimi"
  description="Разверните собственного AI-ассистента Kimi Claw в облаке одним кликом и управляйте им."
/>

# Обзор продукта

<Callout type="info">
**Kimi Claw** — AI-ассистент с уникальным характером и долговременной памятью. С Kimi Claw вы можете создать, развернуть и использовать в чате собственный экземпляр OpenClaw прямо из Kimi.
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## Развертывание в облаке одним кликом

У вас еще нет OpenClaw? Перейдите на [kimi.com/bot](https://kimi.com/bot), чтобы создать его. Kimi развернет его в облаке за вас — без покупки сервера и настройки через командную строку.

<Callout type="warning">

- Для развертывания одним кликом требуется тариф **Allegretto или выше**. [Тарифы](https://www.kimi.com/membership/pricing).

</Callout>

- Kimi автоматически настраивает модель **Kimi K2.6**, подключает кредиты и льготы [Kimi membership](https://www.kimi.com/membership/pricing) и включает Kimi Web Search — отдельная настройка API не нужна.
- Kimi Claw можно развернуть напрямую в Telegram и на других чат-платформах.

## Начало работы

1. Войдите на [kimi.com/bot](https://kimi.com/bot)
2. Нажмите **Создать**, чтобы запустить новый Kimi Claw
3. Дождитесь завершения автоматической настройки (обычно это занимает несколько минут)
4. Настройте имя и образ вашего Kimi Claw
5. В разделе **Настройки → Каналы чата** подключите платформы, которыми хотите пользоваться (например, Telegram)

## Подключение существующего OpenClaw

Если вы уже самостоятельно развернули экземпляр OpenClaw, его можно подключить к Kimi, установив плагин Kimi:

1. Перейдите на [kimi.com/bot](https://kimi.com/bot) и выберите **Подключить существующий OpenClaw**
2. Следуйте инструкциям, чтобы установить плагин на устройство с OpenClaw
3. После подключения вы сможете общаться со своим OpenClaw через Kimi

<a id="switch-to-k3"></a>
## Переключение на модель Kimi K3

Kimi Claw по умолчанию использует модель Kimi K2.6. Если вы хотите использовать Kimi K3, выполните следующую команду, чтобы изменить локальную конфигурацию OpenClaw.

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

После выполнения убедитесь, что в выводе `session_status` параметр `model` отображается как `kimi-coding/k3`, а лимит `context` равен `1.0m`.

<Callout type="warning">
Путь к конфигурационному файлу может отличаться в зависимости от способа установки; замените `/root/.openclaw/openclaw.json` на актуальный путь. Перед изменением обязательно сделайте резервную копию.
</Callout>
