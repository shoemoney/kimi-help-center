---
title: "Saldo y uso"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Saldo y uso - Centro de ayuda de Kimi"
  description="Kimi API ofrece varias formas de consultar el saldo de tu cuenta y los detalles de uso, para que puedas dar seguimiento al consumo y los costos."
/>

# Saldo y uso

Kimi API ofrece varias formas de consultar el saldo de tu cuenta y los detalles de uso, para que puedas dar seguimiento al consumo y los costos.

## Panel de la consola

Inicia sesión en [platform.kimi.ai](https://platform.kimi.ai) y ve a la página **fee-detail** (detalles de facturación) en la consola para consultar:

- Saldo actual de la cuenta
- Desglose de uso diario
- Uso y costos por modelo
- Tendencias históricas de gasto

<Callout type="info">
La facturación diaria se actualiza antes de las **7:00 a. m. del día siguiente**. Los datos de uso en tiempo real pueden tener un leve retraso.
</Callout>

> **Nota**: La facturación diaria se actualiza antes de las **7:00 a. m. del día siguiente**. Los datos de uso en tiempo real pueden tener un leve retraso.

## API de Token Estimation

Antes de enviar una solicitud, puedes usar la API de Token Estimation para estimar cuántos tokens consumirá la llamada; esto resulta útil para controlar costos.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Pasa el mismo formato de `messages` que usarías en una solicitud de Chat Completion, y la API devolverá el número estimado de tokens.

## API de consulta de saldo

Consulta el saldo actual de tu cuenta directamente mediante la API:

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
- Revisa la página fee-detail con regularidad para monitorear las tendencias de gasto
- Integra la API de consulta de saldo y configura umbrales de alerta de saldo
- Usa la API de Token Estimation antes de llamadas críticas para estimar costos
</Callout>
