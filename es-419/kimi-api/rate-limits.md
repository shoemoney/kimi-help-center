---
title: "Rate limits"
slug: "api-rate-limits"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Rate limits - Centro de ayuda de Kimi"
  description="Kimi API aplica rate limits a la frecuencia de solicitudes y la concurrency para garantizar la estabilidad de la plataforma y un uso justo. Los niveles de rate limit se basan en el monto..."
/>

# Rate limits

Kimi API aplica rate limits a la frecuencia de solicitudes y la concurrency para garantizar la estabilidad de la plataforma y un uso justo. Los niveles de rate limit se basan en el monto acumulado de recargas de tu cuenta.

## Niveles de rate limit

Los rate limits de API se organizan por niveles según el **monto acumulado de recargas** de tu cuenta: cuanto más hayas recargado, mayores serán los rate limits disponibles. Para conocer los umbrales específicos de cada nivel y sus límites correspondientes de RPM (solicitudes por minuto) y TPM (tokens por minuto), consulta la consola de [platform.kimi.ai](https://platform.kimi.ai).

## ¿Cómo consultar tus límites actuales?

- Inicia sesión en la consola de API para ver tu nivel actual de rate limit.
- Los encabezados de respuesta de API también incluyen información de rate limit:
  - `X-RateLimit-Limit`: Tope actual de rate limit
  - `X-RateLimit-Remaining`: Solicitudes disponibles restantes
  - `X-RateLimit-Reset`: Momento en que se restablece el límite

## Manejar errores 429

Cuando la frecuencia de tus solicitudes supera el límite, la API devuelve un código de estado 429. Acciones recomendadas:

1. **Implementa retroceso exponencial**: espera 1 segundo al inicio y luego duplica el tiempo de espera en cada reintento (2s, 4s, 8s…).
2. **Controla la concurrency**: usa colas de solicitudes o semáforos para limitar la cantidad de solicitudes simultáneas.
3. **Agrupa solicitudes**: combina varias solicitudes pequeñas en menos solicitudes de mayor tamaño.

## Solicitar rate limits más altos

Si las necesidades de tu negocio superan los rate limits actuales:

- **Recarga para subir de nivel**: aumenta el monto acumulado de recargas y el sistema actualizará automáticamente tu nivel de rate limit.
- **Contacta a ventas**: si tienes requisitos especiales, comunícate con el equipo de ventas de la plataforma en [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) para solicitar una quota de rate limit personalizada.
