---
title: "Límites de la conversación"
slug: "conversation-limits"
order: 6
extract_headings: true
preview: false
---

<SeoMeta
  title="Límites de la conversación - Centro de ayuda de Kimi"
  description="Cuando el contexto de la conversación se vuelve demasiado largo y supera el límite de tokens del modelo, Kimi Claw puede dejar de responder o devolver un error."
/>

# Límites de la conversación

Cuando el contexto de la conversación se vuelve demasiado largo y supera el límite de tokens del modelo, Kimi Claw puede dejar de responder o devolver un error.

**Cómo solucionarlo:**

- Envía `/new` para iniciar una conversación nueva y borrar el contexto actual.
- Si el error persiste después de `/new`, es posible que haya demasiadas Skills cargadas en memoria. Prueba:
  - `/skills` — revisa las skills instaladas y desinstala las que no necesites.
  - `/compact` — comprime el contexto actual para liberar espacio.
  - `/reset` — reinicia Kimi Claw por completo como último recurso.

## ¿Alcanzaste el rate limit de la API?

Esto significa que llegaste al tope de frecuencia de solicitudes. Espera un momento e inténtalo de nuevo.

**Para revisar tu quota y tus rate limits:**

1. Ve a [kimi.com/code](https://kimi.com/code).
2. Abre la **Consola**.
3. Haz clic en **Ver quota y rate limits** para ver tu uso actual y los topes.

Si alcanzas los rate limits con frecuencia, considera espaciar tus tareas o subir a un nivel de membresía superior para obtener mayor rendimiento.
