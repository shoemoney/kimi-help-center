---
title: "Límites de tasa"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Límites de tasa - Centro de ayuda de Kimi"
  description="La API de Kimi aplica límites de tasa a la frecuencia de solicitudes y a la concurrencia para garantizar la estabilidad de la plataforma y un uso justo. Los niveles de rate limit se basan en el saldo acumulado de tu cuenta..."
/>

# Límites de tasa

La API de Kimi aplica límites de tasa a la frecuencia de solicitudes y a la concurrencia para garantizar la estabilidad de la plataforma y un uso justo. Los niveles de rate limit（límite de frecuencia） se basan en el monto acumulado de recargas de tu cuenta.

## Niveles de rate limit

Los límites de tasa de la API se organizan por niveles según el **monto acumulado de recargas** de tu cuenta: mientras más hayas recargado, mayores serán los límites disponibles. Para conocer los umbrales específicos de cada nivel y los límites correspondientes de RPM (solicitudes por minuto) y TPM (tokens por minuto), consulta la consola en [platform.kimi.ai](https://platform.kimi.ai).

## ¿Cómo consultar los límites actuales?

- Inicia sesión en la consola de la API para ver tu nivel de rate limit actual.
- Los encabezados de respuesta de la API también incluyen información sobre el rate limit:
  - `X-RateLimit-Limit`: tope actual del rate limit
  - `X-RateLimit-Remaining`: solicitudes disponibles restantes
  - `X-RateLimit-Reset`: momento en que se restablece el límite

## Manejar errores 429

Cuando la frecuencia de tus solicitudes supera el límite, la API devuelve un código de estado 429. Acciones recomendadas:

1. **Implementa retroceso exponencial**: espera 1 segundo al principio y luego duplica el tiempo de espera con cada reintento (2 s, 4 s, 8 s…).
2. **Controla la concurrencia**: usa colas de solicitudes o semáforos para limitar la cantidad de solicitudes simultáneas.
3. **Agrupa solicitudes**: combina varias solicitudes pequeñas en menos solicitudes más grandes.

## Solicitar límites de tasa más altos

Si las necesidades de tu negocio superan los límites de tasa actuales:

- **Recarga para subir de nivel**: aumenta tu monto acumulado de recargas y el sistema actualizará automáticamente tu nivel de rate limit.
- **Contacta a ventas**: para requerimientos especiales, comunícate con el equipo de ventas de la plataforma a través de [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) para solicitar una cuota de tasa personalizada.
