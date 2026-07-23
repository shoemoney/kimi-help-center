---
title: "Solución de problemas de API"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Solución de problemas de API - Centro de ayuda de Kimi"
  description="Problemas comunes y soluciones para desarrolladores que usan Kimi API."
/>

# Solución de problemas de API

<Callout type="info">
Problemas comunes y soluciones para desarrolladores que usan Kimi API.
</Callout>

## ¿Cómo manejar un error 429 por rate limit?

Un error 429 significa que la frecuencia de tus solicitudes superó el rate limit actual de la cuenta. Para resolverlo:

- Implementa una estrategia de reintentos con espera exponencial (espera 1 s, 2 s, 4 s… antes de volver a intentar).
- Controla la cantidad de solicitudes concurrentes mediante un mecanismo de cola.
- Aumenta el monto acumulado de recargas para subir de nivel de rate limit.
- Contacta al equipo de ventas si necesitas una quota más alta.

## ¿Cómo manejar un error 401 de autenticación?

Un error 401 significa que falló la autenticación de la API Key. Revisa lo siguiente:

- Asegúrate de haber copiado correctamente la API Key (presta atención a espacios al inicio o al final).
- Verifica que el formato del encabezado de la solicitud sea `Authorization: Bearer <your-api-key>`.
- Confirma que la API Key no haya sido eliminada ni deshabilitada; revísalo en la consola.
- Asegúrate de no estar usando una clave de otra plataforma (las Kimi API Keys comienzan con `sk-`).

<Callout type="warning">
**Formato de la API Key**: las Kimi API Keys comienzan con `sk-`. Asegúrate de usar el formato de clave correcto.
</Callout>

## ¿La carga de archivos tiene costo?

La carga de archivos en sí es gratuita. Sin embargo, cuando haces referencia a un archivo cargado en una conversación, su contenido se analiza en tokens y se factura como tokens de entrada. Los archivos más grandes generan más tokens.

## ¿Cómo manejar un error 403 por saldo insuficiente?

Un error 403 suele indicar que el saldo de la cuenta es insuficiente. Recarga en la consola: los fondos estarán disponibles de inmediato. También puedes usar la API de consulta de saldo para revisar tu saldo actual.

## ¿Qué hago si la respuesta aparece cortada?

Si la respuesta de la API está incompleta o truncada:

- Revisa si el parámetro `max_tokens` está configurado con un valor demasiado bajo y auméntalo según sea necesario.
- Inspecciona el campo `finish_reason` en la respuesta: `length` significa que la salida se truncó por el límite de tokens; `stop` significa que se completó normalmente.
- Para generar textos largos, considera dividir la solicitud en segmentos.

<Callout type="tip">
**Revisa `finish_reason`**: `length` = truncada, `stop` = completada normalmente.
</Callout>

## ¿Puedo subir imágenes mediante la API de archivos?

Sí. La API de carga de archivos admite archivos de imagen. Una vez cargadas, las imágenes pueden referenciarse en conversaciones. Con los modelos Vision, también puedes enviar imágenes directamente en los mensajes mediante URL o codificación Base64.

## Fuentes de Web Search

La función Web Search de Kimi API recupera en tiempo real información disponible públicamente en internet. Los resultados provienen de páginas web indexadas por los principales motores de búsqueda. Cada invocación de Web Search genera un cargo adicional de $0.004.

## ¿Hay relación entre la membresía de Kimi y la concurrency de API?

<Callout type="warning">
**Los planes de membresía de Kimi** (como Allegretto) y la **API** son sistemas de facturación separados. El paralelismo de agentes incluido en los planes de membresía aplica únicamente a los productos de consumo de Kimi y no está relacionado con los rate limits de API. Los límites de concurrency de API se determinan según el nivel de recarga acumulada de tu cuenta.
</Callout>

## Diferencias entre API y la app web de Kimi

| Aspecto | App web de Kimi | Kimi API |
| --- | --- | --- |
| **Objetivo** | Producto conversacional para consumidores | Interfaz de integración para desarrolladores |
| **Acceso** | Basado en navegador | Llamadas programáticas a la API |
| **Facturación** | Sistema de membresía/credit | Pago por uso según tokens |
| **Cuenta** | Inicio de sesión compartido | Inicio de sesión compartido |
| **Credits** | No transferibles entre sistemas | No transferibles entre sistemas |

## ¿La generación de PPT y Deep Research están disponibles mediante API?

<Callout type="warning">
**La generación de PPT** y **Deep Research** **aún no están disponibles mediante API**. Actualmente, solo se puede acceder a estas funciones desde el producto de consumo de Kimi. Sigue los anuncios de la plataforma para enterarte de las novedades.
</Callout>

## ¿Se admite la implementación on-premises?

Actualmente, Kimi API solo ofrece servicios de API en la nube y **no admite implementaciones privadas on-premises**. Si necesitas una implementación privada, contacta al equipo de ventas en [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales).

## ¿Puedo llamar a Kimi API desde fuera de China?

Kimi API está disponible internacionalmente mediante `api.moonshot.ai`. Si tienes problemas de conectividad, contacta al equipo de ventas para evaluar la mejor solución para tu región.
