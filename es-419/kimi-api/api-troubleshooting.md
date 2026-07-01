---
title: "Solución de problemas de la API"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Solución de problemas de la API - Centro de ayuda de Kimi"
  description="Problemas comunes y soluciones para desarrolladores que usan la API de Kimi."
/>

# Solución de problemas de la API

<Callout type="info">
Problemas comunes y soluciones para desarrolladores que usan la API de Kimi.
</Callout>

## ¿Cómo manejar el error 429 de rate limit?

Un error 429 significa que la frecuencia de tus solicitudes ha superado el rate limit de la cuenta actual. Para resolverlo:

- Implementa una estrategia de reintento con retroceso exponencial (espera 1s, 2s, 4s… antes de reintentar).
- Controla la cantidad de solicitudes concurrentes mediante un mecanismo de cola.
- Aumenta tu monto acumulado de recarga para subir de nivel en tu rate limit.
- Comunícate con el equipo de ventas si necesitas una cuota mayor.

## ¿Cómo manejar el error 401 de autenticación?

Un error 401 significa que la autenticación de la API Key falló. Revisa lo siguiente:

- Asegúrate de haber copiado la API Key correctamente (cuidado con los espacios al inicio o al final).
- Verifica que el formato del encabezado de la solicitud sea `Authorization: Bearer <your-api-key>`.
- Confirma que la API Key no haya sido eliminada ni deshabilitada; revísalo en la consola.
- Asegúrate de no estar usando una clave de otra plataforma (las API Keys de Kimi comienzan con `sk-`).

<Callout type="warning">
**Formato de la API Key**: Las API Keys de Kimi comienzan con `sk-`. Asegúrate de usar el formato de clave correcto.
</Callout>

## ¿La carga de archivos tiene costo?

La carga de archivos en sí es gratuita. Sin embargo, cuando haces referencia a un archivo cargado en una conversación, su contenido se convierte en tokens y se cobra como tokens de entrada. Los archivos más grandes generan más tokens.

## ¿Cómo manejar el error 403 de saldo insuficiente?

Un error 403 normalmente indica que el saldo de la cuenta es insuficiente. Recarga en la consola: los fondos quedan disponibles de inmediato. También puedes usar la API de consulta de saldo para revisar tu saldo actual.

## ¿Qué hago si la respuesta aparece truncada?

Si la respuesta de la API está incompleta o truncada:

- Verifica si el parámetro `max_tokens` está configurado con un valor demasiado bajo y auméntalo según sea necesario.
- Revisa el campo `finish_reason` en la respuesta: `length` indica que la salida se truncó debido al límite de tokens; `stop` indica que se completó con normalidad.
- Para generación de texto extenso, considera dividir la solicitud en segmentos.

<Callout type="tip">
**Revisa `finish_reason`**: `length` = truncado, `stop` = completado con normalidad.
</Callout>

## ¿Puedo cargar imágenes a través de la API de archivos?

Sí. La API de carga de archivos admite archivos de imagen. Una vez cargadas, las imágenes pueden referenciarse en las conversaciones. Con los modelos Vision, también puedes pasar imágenes directamente en los mensajes mediante una URL o codificación Base64.

## ¿De dónde provienen las fuentes de la Web Search?

La función de Web Search de la API de Kimi recupera información disponible públicamente en internet en tiempo real. Los resultados provienen de páginas web indexadas por los principales motores de búsqueda. Cada invocación de Web Search tiene un costo adicional de $0.004.

## ¿Existe alguna relación entre la membresía de Kimi y la concurrencia de la API?

<Callout type="warning">
Los **planes de membresía de Kimi** (como Allegretto) y la **API** son sistemas de facturación independientes. El paralelismo de agentes incluido en los planes de membresía aplica únicamente a los productos de consumo de Kimi y no tiene relación con los rate limits de la API. Los límites de concurrencia de la API se determinan según el nivel acumulado de recarga de tu cuenta.
</Callout>

## Diferencia entre la API y la aplicación web de Kimi

| Aspecto | Aplicación web de Kimi | API de Kimi |
| --- | --- | --- |
| **Destinatario** | Producto conversacional orientado al consumidor | Interfaz de integración orientada al desarrollador |
| **Acceso** | Mediante navegador | Llamadas programáticas a la API |
| **Facturación** | Sistema de membresía/créditos | Pago por uso según tokens |
| **Cuenta** | Inicio de sesión compartido | Inicio de sesión compartido |
| **Créditos** | No transferibles entre sistemas | No transferibles entre sistemas |

## ¿La generación de PPT y el deep research están disponibles a través de la API?

<Callout type="warning">
La **generación de PPT** y el **deep research** **aún no están disponibles a través de la API**. Por ahora, estas funciones solo se pueden usar a través del producto de consumo de Kimi. Sigue los anuncios de la plataforma para conocer las novedades.
</Callout>

## ¿Se admite el despliegue on-premises?

La API de Kimi actualmente ofrece únicamente servicios de API en la nube y **no admite el despliegue privado on-premises**. Para requisitos de despliegue privado, comunícate con el equipo de ventas a través de [platform.moonshot.ai/contact-sales](https://platform.moonshot.ai/contact-sales).

## ¿Puedo llamar a la API de Kimi desde fuera de China?

La API de Kimi está disponible internacionalmente a través de `api.moonshot.ai`. Si tienes problemas de conectividad, comunícate con el equipo de ventas para analizar la mejor solución para tu región.
