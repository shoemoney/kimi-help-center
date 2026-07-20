---
title: "Problemas frecuentes del chat de Kimi"
slug: "chat-issues"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Problemas frecuentes del chat de Kimi - Centro de ayuda de Kimi"
  description="¿Tienes problemas con los chats de Kimi? Este artículo reúne pasos de solución para las incidencias más comunes, como respuestas interrumpidas, contenido anómalo y errores de carga, para que las resuelvas rápido."
/>

# Problemas frecuentes del chat de Kimi

## ¿No puedes enviar mensajes o aparece un círculo rojo?

Esto puede deberse a:

- **Se activó el rate limit**: Kimi tiene un límite de conversaciones dentro de ciertos intervalos de tiempo. Enviar mensajes con demasiada frecuencia puede impedir que sigas interactuando. Espera de 2 a 3 horas antes de volver a intentarlo y modera la frecuencia de tus conversaciones.
- **Mala conexión a internet**: una señal débil o una conexión inestable pueden impedir el envío de mensajes. Cambia de red e inténtalo de nuevo.

## ¿La conversación supera las 200,000 palabras?

El límite de contexto de K2.6 en una sola conversación es de aproximadamente 128K tokens (~200,000 palabras). Una vez alcanzado este límite, el modelo ya no puede aceptar nuevas entradas.

<Callout type="tip">
**Acciones recomendadas**:

1. **Inicia una nueva conversación**: copia las conclusiones clave o el esquema de la conversación original en una nueva para continuar.
2. **Genera un documento de traspaso**: pídele a Kimi que «resuma y genere un documento de traspaso» y luego pégalo en una nueva conversación como contexto inicial; así ahorras tokens y conservas la información.

**Nota**: eliminar mensajes dentro de la misma conversación **no** libera la ventana de contexto. En su lugar, inicia una nueva conversación.
</Callout>

<Callout type="info">
Los modelos de razonamiento consumen más tokens para razonar, lo que reduce el límite de contexto efectivo. Cuando trabajes con documentos largos, prefiere K2 en lugar de K2-Thinking.
</Callout>

## ¿Ves «hablemos de otra cosa»?

Este mensaje indica que el contenido actual activó una política de seguridad y el tema no puede continuar. Solo escribe un nuevo tema para retomar la conversación, sin necesidad de esperar.

<Callout type="info">
Si crees que el contenido no infringía ninguna norma, haz clic en «👎» para enviar tus comentarios y ayudarnos a mejorar nuestras políticas de seguridad.
</Callout>

## ¿Ves «Kimi está un poco cansado»?

Esto significa que hay demasiados usuarios conectados y los recursos de cómputo están bajo una alta carga: es un rate limit en horas pico. Espera de 1 a 2 minutos e inténtalo de nuevo.

<Callout type="tip">
Para reducir los tiempos de espera, considera suscribirte a un plan de membresía y tener acceso prioritario a recursos de cómputo dedicados.
</Callout>

## ¿No puedes descargar PPT/Word/Excel?

La ventana de chat de Kimi por sí sola no genera archivos de Office descargables:

| Tipo de archivo | Dónde generarlo |
|-----------|-------------------|
| **Presentaciones** | Ve a [Kimi Slides](https://www.kimi.com/slides): permite generarlas y descargarlas en línea |
| **Word/Excel** | Usa el modo **Agent** |
