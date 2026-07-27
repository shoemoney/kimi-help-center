---
title: "Códigos de error de API"
slug: "api-error-codes"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Códigos de error de API - Centro de ayuda de Kimi"
  description="Códigos de error comunes al llamar a Kimi API y cómo resolverlos."
/>

# Códigos de error de API

<Callout type="info">
Códigos de error comunes al llamar a Kimi API y cómo resolverlos.
</Callout>

## Referencia de códigos de error

| Código de error | Significado | Solución |
| --- | --- | --- |
| 400 | Solicitud incorrecta | Revisa el formato del cuerpo de la solicitud, así como los nombres y tipos de los parámetros. Causas comunes: JSON mal formado, parámetros obligatorios faltantes o valores fuera de rango. |
| 401 | No autorizado | Verifica que la API Key sea correcta, que no haya vencido ni esté deshabilitada. Confirma el formato del encabezado: `Authorization: Bearer <your-api-key>`. |
| 403 | Prohibido (saldo insuficiente) | El saldo de la cuenta se agotó; recárgalo en la consola. La cuenta también podría estar restringida; si es necesario, contacta a soporte. |
| 404 | No encontrado | Revisa la ruta de la URL de la solicitud y el nombre del modelo. Confirma que el endpoint sea `https://api.moonshot.ai/v1/...`. |
| 429 | Too Many Requests | Se superó el rate limit. Reduce la frecuencia, implementa retroceso exponencial o contacta a soporte para solicitar límites más altos. |
| 500 | Internal Server Error | Problema temporal del servidor; vuelve a intentarlo más tarde. Si persiste, contacta a support@moonshot.ai con el `request_id`. |

## Consejos generales para solucionar problemas

<Callout type="tip">
1. **Revisa el mensaje de error completo**: La respuesta JSON incluye `error.message` con una descripción detallada.
2. **Anota el request_id**: Ayuda a soporte a ubicar rápidamente el problema.
3. **Consulta la documentación oficial**: Asegúrate de que las llamadas coincidan con la documentación en [platform.kimi.ai](https://platform.kimi.ai).
4. **Implementa lógica de reintentos**: Para errores 429 y 500, usa retroceso exponencial.
</Callout>
