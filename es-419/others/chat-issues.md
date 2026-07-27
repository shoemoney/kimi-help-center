---
title: "Problemas comunes del chat de Kimi"
slug: "chat-issues"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Problemas comunes del chat de Kimi - Centro de ayuda de Kimi"
  description="¿Tienes problemas con los chats de Kimi? Este artículo resume pasos de solución para problemas comunes del chat, como respuestas interrumpidas, contenido anómalo y fallas de carga, para ayudarte a resolverlos rápido."
/>

# Problemas comunes del chat de Kimi

## ¿No puedes enviar mensajes o aparece un círculo rojo?

Esto puede deberse a lo siguiente:

- **Se activó el rate limit**: Kimi tiene un límite de conversaciones dentro de ciertos intervalos de tiempo. Si envías mensajes con demasiada frecuencia, es posible que no puedas seguir interactuando. Espera entre 2 y 3 horas antes de volver a intentarlo y administra la frecuencia de tus conversaciones.
- **Mala conexión de red**: una señal débil o una conexión inestable puede impedir que se envíen los mensajes. Cambia a otra red e inténtalo de nuevo.

## ¿La conversación supera las 200,000 palabras?

El contexto de una sola conversación en K2.6 es de aproximadamente 128K tokens (~200,000 palabras). Cuando se alcanza este límite, el modelo ya no puede leer contenido nuevo. Qué hacer depende de por qué llegaste al límite:

- **Un solo archivo que enviaste es demasiado grande y alcanza el límite en el primer turno**: divide el archivo en partes más pequeñas y envíalas por lotes.
- **Una conversación de varios turnos llega gradualmente al límite**: primero resume las conclusiones clave hasta el momento (también puedes pedirle a Kimi que "resuma y genere un documento de traspaso"), luego pega ese resumen en una conversación nueva como contexto inicial para continuar.

<Callout type="info">
**Consejos**:
- En el fondo, usar [Memoria](/features/memory-space) y [Proyectos](/features/project) te ayuda a evitar llegar al límite: la Memoria conserva automáticamente la información clave, y un Proyecto mantiene juntos tus archivos de referencia, instrucciones y memoria para que cada conversación nueva incluya el contexto.
- Eliminar mensajes anteriores dentro de la misma conversación no libera espacio en la ventana de contexto; mejor inicia una conversación nueva.
- El razonamiento consume tokens; para ahorrar créditos, establece **Intensidad de razonamiento** en **Estándar**.
- Para documentos muy largos, K3 ofrece un contexto de 1M tokens (disponible con la membresía de nivel más alto); al redactar, selecciona **Longitud de la conversación: Extra larga**.
</Callout>

## ¿Ves "hablemos de otra cosa"?

Este aviso indica que el contenido actual activó una política de seguridad y que no se puede continuar con el tema. Simplemente escribe un tema nuevo para retomar la conversación; no hace falta esperar.

<Callout type="info">
Si crees que el contenido no infringía ninguna norma, haz clic en "👎" para enviar comentarios y ayudarnos a mejorar nuestras políticas de seguridad.
</Callout>

## ¿Ves "Kimi está un poco cansado"?

Esto significa que hay demasiados usuarios en línea y los recursos de cómputo están bajo mucha carga: es un rate limit de horas pico. Espera 1 o 2 minutos e inténtalo de nuevo.

<Callout type="tip">
Para reducir los tiempos de espera, considera suscribirte a un plan de membresía y obtener acceso prioritario a recursos de cómputo dedicados.
</Callout>

## ¿No puedes descargar PPT/Word/Excel?

La ventana de chat de Kimi no genera archivos de Office descargables por sí sola:

| Tipo de archivo | Dónde generarlo |
|-----------|-------------------|
| **Diapositivas** | Ve a [Kimi Slides](https://www.kimi.com/slides) — permite generar y descargar en línea |
| **Word/Excel** | Usa el modo **Agent** |

## ¿Cómo elimino una conversación individual?

Busca la conversación correspondiente en la app de Kimi o en la versión web y haz clic en eliminar. Una vez eliminada, la conversación dejará de mostrarse en tu dispositivo; los datos relacionados entrarán en el proceso de tratamiento conforme a lo dispuesto en la sección 5 de la [Política de privacidad de Kimi](https://www.kimi.com/user/agreement/userPrivacy?version=v2).

## Si elimino una conversación, ¿el enlace compartido sigue funcionando?

No. El acceso al enlace compartido está directamente vinculado al estado de la conversación: cuando se elimina la conversación, el enlace externo generado a partir de ella deja de funcionar al mismo tiempo. Otras personas ya no podrán acceder al contenido a través de ese enlace, y la plataforma no conserva una copia accesible del enlace.

## ¿Qué hago si subí información sensible por error?

Te recomendamos eliminar de inmediato la conversación correspondiente en el cliente. Si se trata de información sensible como un documento de identidad, una tarjeta bancaria o documentos legales, tras la eliminación puedes escribir al soporte a través de [support@moonshot.ai](mailto:support@moonshot.ai) e indicar el tipo de información sensible en el asunto del correo (por ejemplo, “documento de identidad”, “tarjeta bancaria” o “documentos legales”), para que podamos darle prioridad a tu caso.

## Después de eliminar, ¿se conserva algún dato?

De acuerdo con los requisitos de leyes y reglamentos como la Ley de Ciberseguridad, la plataforma debe conservar ciertos registros de red (como la hora de las operaciones y los identificadores de cuenta) durante un período determinado, que se usan únicamente para fines de cumplimiento de seguridad y revisiones regulatorias, y no se usarán para ningún otro fin sin tu consentimiento.

Si necesitas eliminar tu cuenta y borrar todos tus datos, consulta [Eliminación de cuenta y de datos](/others/account-deletion).
