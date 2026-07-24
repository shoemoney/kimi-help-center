---
title: "Preguntas frecuentes de Kimi Websites"
slug: "websites-faq"
order: 3
extract_headings: true
preview: false
preview_content: "Preguntas frecuentes sobre el uso de Kimi Websites."
---

<SeoMeta
  title="Preguntas frecuentes de Kimi Websites - Centro de ayuda de Kimi"
  description="Solución de problemas comunes en Kimi Websites, incluidos problemas de vista previa, páginas en blanco, pérdida de datos y errores de publicación."
/>

# Preguntas frecuentes de Kimi Websites

> Para ver las instrucciones completas sobre los botones del panel de vista previa, los modos de edición, la publicación y la cancelación de publicación, consulta [Kimi Websites](/websites/websites-overview). Esta página solo cubre problemas frecuentes.

## ¿La vista previa no carga o no puedes ver la versión más reciente?

> Por ejemplo: "El sitio web no aparece", "La vista previa sigue mostrando la versión anterior" o "No puedo ver la última versión guardada".

En la mayoría de los casos, el sitio web se generó y guardó correctamente. El problema de "no poder ver" suele estar relacionado con el panel de vista previa o con la visualización de la tarjeta de versión. La causa más común es que el directorio del proyecto sea incorrecto. Para otros casos, sigue este orden:

<Callout type="warning">
**Verifica el directorio del proyecto**: El proyecto del sitio web debe estar ubicado en `/mnt/agents/output/app`. La vista previa solo lee las versiones guardadas desde este directorio. Si Kimi colocó el proyecto en otro lugar (por ejemplo, en un directorio temporal `/tmp`), la versión puede guardarse correctamente, pero la vista previa no podrá leerla. Pídele a Kimi que mueva el proyecto a este directorio y que vuelva a guardarlo.
</Callout>

1. **Actualiza la página o vuelve a abrir la conversación**: a veces las tarjetas de versión tardan unos segundos en aparecer.
2. **Pídele a Kimi que guarde una nueva versión en la conversación.**
3. **Si la conversación es muy larga, intenta iniciar una nueva** (consulta "Mi conversación es muy larga, ¿debería iniciar una nueva?" más abajo).
4. Si sigue sin aparecer: por lo general, el código y la versión ya se guardaron correctamente (puedes pedirle a Kimi el número de versión). Esto suele deberse a una fluctuación temporal del servicio de vista previa; inténtalo de nuevo más tarde. Si el problema persiste, haz clic en **Comentarios de usuario** (ícono de sobre) en el panel de vista previa para enviar tus comentarios con el número de versión, y nuestro equipo lo revisará.

## ¿El sitio web está en blanco, muestra una pantalla blanca, se bloqueó o no responde?

> Por ejemplo: "La página está completamente en blanco", "El sitio web está vacío", "El sitio web se bloqueó" o "No aparece nada / al hacer clic no pasa nada".

- Una pantalla en blanco o bloqueada suele deberse a un **error de ejecución en el front-end** (por ejemplo, dependencias faltantes, acceso directo a una subpágina o fallo al cargar un recurso o una imagen en particular). Describe el síntoma a Kimi en la conversación (una captura de pantalla ayuda), y Kimi localizará y corregirá el problema, y luego guardará una nueva versión.
- Si sospechas que la pantalla en blanco se debe a **archivos faltantes**, cada versión del sitio web guarda una instantánea. Pídele a Kimi que restaure desde una versión anterior (consulta "Faltan archivos o directorios del proyecto" más abajo).
- **Compatibilidad del navegador**: Algunos navegadores centrados en la privacidad (Brave, ciertos complementos de Firefox) pueden bloquear la carga de recursos del front-end y provocar anomalías de visualización. Intenta agregar el dominio de Kimi a tu lista de permitidos, desactivar temporalmente los escudos o bloqueadores de privacidad, o cambiar a Chrome / Edge / Safari.

## ¿Qué pasa si falla al hacer clic en "Publicar"?

El manejo es el mismo que arriba: inténtalo de nuevo más tarde. Si el problema persiste, envíalo mediante **Comentarios de usuario** con el número de versión. La versión ya se guardó correctamente y no es necesario reconstruirla desde cero.

## ¿Por cuánto tiempo es válido el enlace del sitio web? ¿Caduca?

Si haces clic en **Publicar** para desplegar el sitio web públicamente, el enlace generado seguirá siendo válido de forma indefinida, a menos que hagas clic manualmente en **Cancelar publicación** para volver privado el sitio, o que el contenido se marque como inapropiado.

## ¿Falta contenido, datos o registros?

> Por ejemplo: "Desapareció el contenido de mi página de inicio", "Se perdió el conocimiento que subí a la base de datos", "Falta la información que subí" o "La IA dice que los datos se perdieron permanentemente".

En la mayoría de los casos, los datos no se han perdido realmente. Verifica lo siguiente en este orden:

1. **Primero, confirma si el sitio web es realmente "full-stack"**: Solo los sitios web full-stack creados con **capacidades de back-end (base de datos)** almacenan datos en la base de datos en la nube de la plataforma, conservándolos entre visitas y dispositivos. En la práctica, muchos sitios web que dicen ser "full-stack" **terminan siendo solo front-end**, y los datos nunca ingresan realmente a la base de datos; en ese caso, al actualizar la página o cambiar de dispositivo, los datos anteriores desaparecerán de forma natural. Pídele a Kimi que confirme si el proyecto incluye un back-end y una base de datos reales.
2. **Sitio web puramente front-end**: Los datos solo se guardan en el almacenamiento local del navegador actual (localStorage). Si cambias de navegador / dispositivo o borras los datos del navegador, se perderán. Si necesitas conservar datos a largo plazo y en varios dispositivos, pídele a Kimi que cambie a una solución full-stack con base de datos.
3. **Sitio web full-stack confirmado**: Los datos se guardan en la base de datos en la nube administrada por la plataforma. **Publicar una nueva versión no borrará los datos existentes**; si los datos siguen sin verse aunque el sitio sea full-stack, suele tratarse de un problema temporal: actualiza o inténtalo de nuevo más tarde.
4. **Si confirmas que los datos realmente se perdieron**: Haz clic en **Comentarios de usuario** (ícono de sobre) en el panel de vista previa para enviar comentarios, y nuestro equipo lo investigará. En este punto, no sigas realizando operaciones repetidas para evitar sobrescribir información.

## ¿Faltan archivos o directorios del proyecto, o aparece "restablecimiento del entorno" / "no se puede recuperar"?

> Por ejemplo: "El directorio de mi proyecto de sitio web desapareció y no se puede recuperar", "Faltan archivos" o "Mensaje de restablecimiento del entorno".

- Cada versión del sitio web **guarda una instantánea**, por lo que normalmente se puede recuperar el código fuente desde versiones anteriores. Pídele a Kimi que enumere las versiones históricas y que revierta / restaure una versión específica.
- Si esto ocurre en una **conversación muy larga** (especialmente si cambiaste de modelo a mitad de la conversación), recomendamos iniciar una nueva conversación (consulta el siguiente punto).
- Si la recuperación sigue sin ser posible, haz clic en **Comentarios de usuario** para enviar tus comentarios, y nuestro equipo lo investigará.

## Mi conversación es muy larga, ¿debería iniciar una nueva?

Si una conversación lleva mucho tiempo activa, abarca muchas versiones o cambiaste de modelo a mitad de la conversación (por ejemplo, K2.6 → K3), es posible que las capacidades actuales no sean las más recientes, lo que puede causar pérdida de contexto o anomalías en los archivos. **Recomendamos iniciar una nueva conversación** para obtener las capacidades más recientes de creación y entrega. Los sitios web publicados y las versiones históricas no se ven afectados y se pueden seguir consultando con normalidad.

## ¿Puedo hacer un despliegue propio después de exportar el código?

Puedes descargar el código completo del proyecto y desplegarlo en tu propio servidor, pero estos dos elementos los proporciona la plataforma de Kimi y **no migrarán con el código**:

- **Inicio de sesión con cuenta de Kimi**: Es una capacidad de inicio de sesión proporcionada por la plataforma y no puede usarse directamente fuera de la plataforma de Kimi. Si necesitas inicio de sesión para un despliegue propio, pídele a Kimi que implemente un sistema de inicio de sesión con usuario y contraseña basado en tu propia base de datos.
- **Base de datos administrada por la plataforma**: Los datos de los sitios web full-stack se guardan en la base de datos en la nube que la plataforma asigna a ese sitio. El código exportado no incluye esos datos ni se conectará automáticamente a tu propia base de datos. Para un despliegue propio, debes configurar tu propia base de datos y migrar los datos.

Si solo quieres que la página web sea accesible públicamente, basta con usar la función **Compartir → Publicar** de la plataforma. No necesitas configurar tu propio servidor: el inicio de sesión con cuenta de Kimi y los datos en la nube seguirán funcionando con normalidad.

## ¿El sitio web generado no coincide con tus requisitos?

- En la conversación, señala específicamente qué no coincide: por ejemplo, color, diseño, texto, módulos de funcionalidades, tablas de datos, etc.
- Puedes subir imágenes de referencia, páginas web de ejemplo o descripciones de texto más detalladas para que el agente modifique el sitio según la referencia.
- Si después de varias modificaciones sigues sin estar conforme, intenta iniciar una nueva conversación con una descripción de requisitos más estructurada.

## ¿Puedo seguir modificando el contenido, los enlaces o los estilos del sitio web después de generarlo?

Sí. En la conversación original, sigue indicando al agente qué quieres modificar, por ejemplo:

- "Cambia el título de la página de inicio a XXX"
- "Cambia el enlace del botón 'Contáctanos' a https://xxx"
- "Cambia todo a un tema oscuro"

Después de la modificación, el agente regenerará y desplegará un nuevo enlace.

## ¿Cómo agrego back-end, base de datos o funcionalidad de inicio de sesión al sitio web?

- En la instrucción de creación del sitio web, enfatiza que quieres una página web full-stack con base de datos y funcionalidad de inicio de sesión.
- Como alternativa, puedes pedirle al agente que genere primero la página front-end, luego exportar el código fuente y entregárselo a un desarrollador para un desarrollo secundario.

## ¿Puedo descargar el código fuente del sitio web o exportarlo a GitHub?

La versión actual permite descargar todos los archivos localmente. En la conversación, abre "Todos los archivos" y haz clic en el botón de descarga.

## ¿Cuánto credit consume generar o modificar un sitio web?

Generar un sitio web es una tarea compleja que normalmente consume una cantidad significativa de tokens/credits, según:

- Número de páginas y complejidad
- Si incluye imágenes, tablas y lógica de interacción
- Número de modificaciones iterativas

Recomendamos describir tus requisitos con la mayor claridad posible para reducir la prueba y error. Si no estás conforme con el resultado, puedes explicar la situación en tus comentarios.

## ¿La generación del sitio web es muy lenta, queda en cola o falla la terminal?

- En horas pico (durante el día y la noche de días hábiles) puede haber cola. Recomendamos usarlo fuera de los horarios de mayor demanda.
- Si la tarea queda detenida por más de 10 minutos, primero intenta actualizar la página web.
- Para sitios web complejos, recomendamos dividirlos en tareas más pequeñas: empieza con la página de inicio y luego agrega gradualmente subpáginas y funciones.

## ¿Para qué es adecuado Kimi Websites? ¿Para qué no lo es?

**Adecuado para:**

- Páginas personales/portafolios, landing pages de eventos, páginas de exhibición de productos, páginas de herramientas simples, prototipos de juegos pequeños
- Validar rápidamente ideas de diseño y generar demos interactivas
- Sitios web que requieren una base de datos back-end sencilla y un sistema de usuarios

**No adecuado para:**

- Sitios web complejos con sistemas de pago
- Entornos formales de producción con alta concurrency y alta disponibilidad
- Sitios comerciales que requieren hosting estable a largo plazo con un dominio personalizado

---

Si los métodos anteriores no resuelven tu problema, envíalo mediante el botón **Comentarios de usuario** en la esquina inferior derecha de la web/app de Kimi, o [contacta al soporte al cliente](/others/contact-support). Recomendamos adjuntar:

- El enlace del sitio web donde ocurrió el problema
- El navegador y el sistema operativo que estás usando
- Capturas de pantalla o texto del mensaje de error
- La hora aproximada de la conversación original

Seguiremos optimizando las capacidades de generación de sitios web con base en tus comentarios.
