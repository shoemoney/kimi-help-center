---
title: "Saldo y uso"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Saldo y uso - Centro de ayuda de Kimi"
  description="La API de Kimi ofrece varias maneras de consultar el saldo de tu cuenta y los detalles de uso, para ayudarte a controlar el consumo y los costos."
/>

# Saldo y uso

La API de Kimi ofrece varias maneras de consultar el saldo de tu cuenta y los detalles de uso, para ayudarte a controlar el consumo y los costos.

## Panel de la consola

Inicia sesión en [platform.kimi.ai](https://platform.kimi.ai) y ve a la página **fee-detail** (detalles de facturación) en la consola para consultar:

- El saldo actual de la cuenta
- El desglose de uso diario
- El uso y los costos por modelo
- Las tendencias históricas de gasto

<Callout type="info">
La facturación diaria se actualiza a más tardar a las **7:00 a. m. del día siguiente**. Los datos de uso en tiempo real pueden tener un pequeño retraso.
</Callout>

> **Nota**: La facturación diaria se actualiza a más tardar a las **7:00 a. m. del día siguiente**. Los datos de uso en tiempo real pueden tener un pequeño retraso.

## API de estimación de tokens (Token Estimation)

Antes de enviar una solicitud, puedes usar la API de Token Estimation para estimar cuántos tokens consumirá la llamada, lo cual resulta útil para controlar los costos.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Envía el mismo formato de `messages` que en una solicitud de Chat Completion, y la API devolverá la cantidad estimada de tokens.

## API de consulta de saldo

Consulta el saldo actual de tu cuenta directamente a través de la API:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Incluye tu API Key en el encabezado de la solicitud para obtener tu saldo disponible.

## Consejos para monitorear el uso

<Callout type="tip">
**Buenas prácticas**:
- Revisa la página fee-detail con frecuencia para vigilar las tendencias de gasto
- Integra la API de consulta de saldo y configura umbrales de alerta de saldo
- Usa la API de Token Estimation antes de llamadas importantes para estimar los costos
</Callout>
