---
title: "Descripción general de Kimi Claw"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Implementa y administra tu propio asistente de IA Kimi Claw en la nube con una configuración de un solo clic."
---

<SeoMeta
  title="Descripción general de Kimi Claw - Centro de ayuda de Kimi"
  description="Implementa y administra tu propio asistente de IA Kimi Claw en la nube con una configuración de un solo clic."
/>

# Descripción general del producto

<Callout type="info">
**Kimi Claw** es un asistente de IA con una personalidad única y memoria a largo plazo persistente. A través de Kimi Claw, puedes crear, implementar y conversar con tu propia instancia de OpenClaw directamente desde Kimi.
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## Implementación en la nube con un solo clic

¿Aún no tienes un OpenClaw? Ve a [kimi.com/bot](https://kimi.com/bot) para crear uno. Kimi lo implementa en la nube por ti: sin comprar servidores ni configurar la línea de comandos.

<Callout type="warning">

- La implementación con un solo clic requiere un plan **Allegretto o superior**. [Planes de membresía](https://www.kimi.com/membership/pricing).

</Callout>

- Kimi configura automáticamente el modelo **Kimi K2.6**, vincula los créditos de tu **membresía de Kimi** y habilita Kimi Web Search, sin necesidad de configurar una API por separado.
- Kimi Claw se puede implementar directamente en Telegram y otras plataformas de chat.

## Primeros pasos

1. Inicia sesión en [kimi.com/bot](https://kimi.com/bot)
2. Haz clic en **Crear** para lanzar un nuevo Kimi Claw
3. Espera a que se complete la configuración automática (normalmente unos minutos)
4. Personaliza el nombre y la personalidad de tu Kimi Claw
5. En **Configuración → Canales de chat**, conecta las plataformas que quieras usar (por ejemplo, Telegram)

## Vincular un OpenClaw existente

Si ya tienes una instancia de OpenClaw autoalojada, puedes conectarla a Kimi instalando el complemento de Kimi:

1. Ve a [kimi.com/bot](https://kimi.com/bot) y selecciona **Vincular OpenClaw existente**
2. Sigue las instrucciones para instalar el complemento en tu dispositivo OpenClaw
3. Una vez conectado, puedes conversar con tu OpenClaw a través de Kimi

<a id="switch-to-k3"></a>
## Cambiar al modelo Kimi K3

Kimi Claw utiliza el modelo Kimi K2.6 de forma predeterminada. Si deseas usar Kimi K3, puedes modificar la configuración local de OpenClaw con los siguientes comandos.

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

Tras la ejecución, confirma que en la salida de `session_status` el campo `model` muestre `kimi-coding/k3` y el límite de `context` sea `1.0m`.

<Callout type="warning">
La ruta del archivo de configuración puede variar según el método de instalación; reemplázala según tu entorno. Asegúrate de hacer una copia de seguridad antes de modificarla.
</Callout>
