---
title: "Precios de la API"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Precios de la API - Centro de ayuda de Kimi"
  description="La facturación de la API de Kimi se basa en el consumo de tokens, con precios específicos por modelo y por función."
/>

# Precios de la API

<Callout type="info">
La facturación de la API de Kimi se basa en el consumo de tokens, con precios específicos por modelo y por función.
</Callout>

## Conceptos básicos de facturación

- **Facturación por token**: cada llamada a la API se factura por separado para los tokens de entrada y los tokens de salida
- **Unidad de token**: 1M = 1,000,000 tokens
- **Precios específicos por modelo**: los modelos con mayores capacidades tienen un costo más alto por token; elige el modelo que mejor se adapte a tu caso de uso

## Facturación de funciones adicionales

| Función | Cargo adicional |
| --- | --- |
| **Web Search** | $0.004 por invocación (independiente del consumo de tokens) |

## Almacenamiento en caché de contexto

<Callout type="tip">
**Context Caching** te permite almacenar en caché el contenido de contexto que usas con frecuencia (como instrucciones del sistema y documentos de referencia). Los tokens que coinciden con la caché se facturan con una tarifa con descuento, lo que reduce de forma efectiva los costos del contexto repetitivo.
</Callout>

Consulta la documentación oficial para conocer los precios detallados de Context Caching.

## Detalles de precios

Para ver la tabla completa de precios por modelo y las reglas de facturación:

Puedes ir a [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## Consejos para optimizar costos

<Callout type="tip">
- Configura el parámetro `max_tokens` de forma adecuada para evitar respuestas innecesariamente largas
- Usa Context Caching para las instrucciones del sistema y el contexto repetitivos
- Elige el modelo adecuado según la complejidad de la tarea; usa modelos ligeros para tareas simples
- Optimiza el diseño de tus prompts para minimizar los tokens de entrada innecesarios
</Callout>
