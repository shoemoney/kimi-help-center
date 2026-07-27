---
title: "Precios de la API"
slug: "api-pricing"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Precios de la API - Centro de ayuda de Kimi"
  description="La facturación de Kimi API se basa en el consumo de tokens, con precios específicos por modelo y por función."
/>

# Precios de la API

<Callout type="info">
La facturación de Kimi API se basa en el consumo de tokens, con precios específicos por modelo y por función.
</Callout>

## Aspectos básicos de facturación

- **Facturación por token**: Cada llamada a la API se factura por separado según los tokens de entrada y los tokens de salida
- **Unidad de token**: 1M = 1,000,000 tokens
- **Precios por modelo**: Los modelos con mayores capacidades tienen costos por token más altos; elige el modelo que mejor se adapte a tu caso de uso

## Facturación de funciones adicionales

| Función | Cargo adicional |
| --- | --- |
| **Web Search** | $0.004 por invocación (independiente del consumo de tokens) |

## Caché de contexto

<Callout type="tip">
La **caché de contexto** te permite almacenar en caché contenido de contexto usado con frecuencia (como prompts del sistema y documentos de referencia). Los tokens que coinciden con la caché se facturan con una tarifa con descuento, lo que reduce de forma efectiva los costos de contextos repetitivos.
</Callout>

Consulta la documentación oficial para conocer en detalle los precios de la caché de contexto.

## Detalles de precios

Para ver la tabla completa de precios por modelo y las reglas de facturación:

Puedes ir a [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## Consejos para optimizar costos

<Callout type="tip">
- Configura adecuadamente el parámetro `max_tokens` para evitar salidas innecesariamente largas
- Usa la caché de contexto para prompts del sistema y contextos repetitivos
- Elige el modelo adecuado según la complejidad de la tarea; usa modelos ligeros para tareas simples
- Optimiza el diseño de tus prompts para minimizar tokens de entrada innecesarios
</Callout>
