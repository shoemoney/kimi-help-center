---
title: "Notas de la versión"
slug: "release-notes"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Notas de la versión de Kimi Work - Centro de ayuda de Kimi"
  description="Notas de la versión de Kimi Work: nuevas funciones, cambios y correcciones para Mac y Windows, actualizadas constantemente."
/>

# Notas de la versión

Esta página registra las actualizaciones de versión de Kimi Work, incluidas nuevas funciones, cambios y correcciones, y se actualiza constantemente. Descarga la versión más reciente: [kimi.com/products/kimi-work](https://www.kimi.com/products/kimi-work)

## 3.2.11 (2026-09-18)

**Cambios**

- El panel de detalles ahora permite mostrar el proceso de ejecución del sub-Agent

**Correcciones**

- Se corrigió un problema por el que el acceso directo del menú Inicio quedaba roto después de una actualización dentro de la app en Windows
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.2.10 (2026-09-16)

**Correcciones**

- Se retiró urgentemente el paquete complementario de destino de compartición de Windows para corregir un fallo al iniciar; la función de compartir regresó en 3.2.11 tras la corrección
- Los nombres y descripciones de las skills integradas ahora se localizan según el idioma de la interfaz: el menú «/» filtra por nombres localizados, con respaldo al inglés para los idiomas no disponibles
- Al hacer clic en una tarjeta de carpeta adjunta ahora se localiza el directorio correspondiente en el árbol de archivos del espacio de trabajo
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.2.9 (2026-09-14)

**Novedades**

- Compartir y abrir archivos con Kimi ahora es compatible con formatos de archivo selectos:
  - Compartir con Kimi: envía archivos y contenido directamente a Kimi desde el menú compartir de apps como WeChat
  - Abrir con Kimi: haz clic derecho en los archivos compatibles y elige abrirlos con Kimi
- Actualización de la mascota de escritorio: una UI completamente renovada con respuestas rápidas directamente en la burbuja de conversación — sigue chateando sin abrir la ventana principal
- Visor de PDF actualizado con un nuevo panel de índice, incluidos tabla de contenido y salto por número de página
- Nueva opción de modo de energía “Mantener activo tras apagar la pantalla”: la pantalla puede apagarse mientras el sistema sigue funcionando, sin interrumpir el control remoto ni las tareas en segundo plano

**Cambios**

- Los archivos subidos y los vinculados con “@” en el cuadro de entrada ahora se pueden pulsar para abrir una vista previa en el espacio de trabajo derecho
- La vista previa de imágenes ahora admite copiar / guardar

**Correcciones**

- Se corrigieron varias condiciones de carrera, incluidas la recuperación de edición de cola y el desbloqueo de la navegación tras fallos del navegador
- Se corrigieron problemas de colores en modo oscuro para las funciones de la app
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.2.8 (2026-09-12)

**Cambios**

- El ajuste anti-suspensión ahora ofrece tres opciones: seguir ejecutándose con la pantalla apagada, mantener la pantalla encendida y desactivado

**Correcciones**

- Se corrigió un problema por el que la ventana de Configuración quedaba en blanco después de restaurarse
- Miniaturas de capturas largas optimizadas para reducir el uso de memoria en la vista previa
- Se corrigió una condición de carrera en la actualización de inicio de sesión, evitando que solicitudes antiguas borraran por error el estado de inicio de sesión o sobrescribieran las nuevas credenciales
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.2.7 (2026-09-11)

**Novedades**

- Actualización de capturas de pantalla: capturas largas con desplazamiento en Launcher; extracción de texto OCR con un clic en el editor de capturas; fija capturas en el escritorio como ventanas siempre visibles
- Inyección de ajustes de conversación: las conversaciones nuevas de Work incorporan automáticamente tus ajustes de conversación
- Arrastra archivos a cualquier parte de la ventana para adjuntarlos, incluidas carpetas
- Nuevo plugin de despliegue de sitios web: una vez instalado, despliega proyectos web locales en la nube en un solo paso

**Cambios**

- El inicio automático en Windows ahora solo permanece en la bandeja del sistema, sin abrir la ventana principal
- Tablas Markdown rediseñadas, con desplazamiento horizontal para tablas anchas
- El centro de notificaciones ahora permite marcar todo como leído con un clic
- Los mensajes del control remoto ahora se muestran en segmentos, con tarjetas de sub-Agent y de entregables alineadas con el escritorio

**Correcciones**

- La entrada de voz se desactiva automáticamente en dispositivos sin micrófono, y el dictado se detiene al desconectar el micrófono
- Se corrigió un problema por el que faltaba la función de subida de plugins
- Los enlaces de correo y teléfono ahora muestran un mensaje claro cuando no se pueden abrir, sin fallos silenciosos
- Se corrigió un problema por el que la página de tareas programadas se congelaba cuando se agotaban los créditos
- Rendimiento y arrastrar y soltar de la mascota de escritorio corregidos
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.2.6 (2026-09-07)

**Novedades**

- Nueva recomendación e instalación de plugins en el stream: recomienda automáticamente plugins adecuados para tu tarea y te pide instalarlos
- Ahora puedes instalar plugins mediante enlaces de GitHub, lo que facilita incorporar plugins compartidos

**Cambios**

- La página de detalles del plugin ahora muestra el estado de conexión MCP y permite gestionar la conexión
- Ahora se te pedirá confirmar las tareas programadas que sigan en ejecución antes de salir de la app

**Correcciones**

- Se corrigió un problema por el que “Volver” no respondía después de entrar en ciertas páginas de Configuración
- Se corrigió un problema por el que reinstalar sobre una instalación existente se bloqueaba por error en macOS, y los archivos CAD se abrían por error con el Bloc de notas en Windows
- Se corrigieron problemas con los colores de algunas páginas en modo oscuro, mensajes duplicados del Launcher y la adaptación del ancho de vista previa de DOCX
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.2.5 (2026-09-04)

**Novedades**

- Nueva función de control remoto: controla Kimi Work en tu escritorio desde tu teléfono
- Nueva función Apps: mejora la capacidad de operación web del Agent y la visibilidad de los resultados
- Nueva búsqueda dentro de la conversación: encuentra registros rápidamente dentro de una conversación

**Cambios**

- Mercado de plugins y skills actualizado: lógica de visualización optimizada, con búsqueda de plugins y skills
- Centro de configuración renovado, ahora compatible entre los modos Chat y Work

**Correcciones**

- Se corrigió un problema por el que algunos usuarios veían una visualización anormal del estado de inicio de sesión
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.2.4 (2026-08-31)

**Cambios**

- Visualización optimizada de las citas de fuentes como la búsqueda web y los archivos locales en las respuestas de los mensajes
- Tamaño de fuente e interlineado optimizados en las respuestas de los mensajes

**Correcciones**

- Se corrigieron varios problemas de experiencia en modo oscuro
- Supervisión de procesos optimizada en Windows
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.2.3 (2026-08-28)

**Novedades**

- Nueva entrada “Crear plugin” en el mercado de plugins: crea plugins directamente en el mercado

**Correcciones**

- Pulido de la mascota de escritorio: mejor comportamiento de la ventana, y el idioma ahora sigue los cambios de la app en tiempo real
- Se corrigió un problema de consistencia del estado de la conversación al editar y reenviar un mensaje después de un error
- Consumo de energía optimizado de las funciones siempre activas
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.2.2 (2026-08-26)

**Novedades**

- Nueva mascota de escritorio: Kimi te acompaña e interactúa contigo como una mascota de escritorio
- Nuevos comandos Slash: el cuadro de entrada ahora admite los comandos compact (comprimir contexto), fork (bifurcar conversación) y goal (objetivo)
- Nueva opción “Predeterminado” para los permisos de ejecución: ahora hay tres niveles de permiso disponibles globalmente — “Predeterminado”, “Permitir manualmente” y “Permitir todo”

**Cambios**

- El control del Agent sobre el navegador integrado ahora está activado de forma predeterminada
- Las conversaciones del área de Chat ya no comparten un directorio raíz: cada conversación ahora tiene su propio directorio de trabajo

**Correcciones**

- Se corrigió un problema por el que el primer mensaje mostraba brevemente un estado vacío al enviarse
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.2.1 (2026-08-21)

**Novedades**

- Nuevo Launcher global: invoca un cuadro de entrada flotante en forma de cápsula en el escritorio en cualquier momento y lugar con un atajo de teclado global
  - Al invocarlo, trae automáticamente los archivos seleccionados en Finder / Explorador de archivos, y admite pegar imágenes, agregar archivos adjuntos y arrastrar capturas de pantalla
  - Escribe “/” para abrir el menú de plugins y skills (compatible con búsqueda en pinyin) y elegir un espacio de trabajo
  - Mantén presionado el atajo para dictar; al enviar, se repliega en una minicápsula y puedes volver a la app principal con un clic para ver la respuesta
- Nueva cola de mensajes: mientras el Agent responde, puedes seguir enviando mensajes; los mensajes nuevos se ponen en cola automáticamente, con opción de reordenar arrastrando, editar, eliminar y ver la vista previa detallada
- Dictado por voz en el cuadro de entrada de Work: haz clic en el micrófono o mantén presionado el atajo para empezar a dictar, con reconocimiento mixto chino-inglés

**Cambios**

- Lógica de notificaciones de mensajes actualizada: puedes cambiar las reglas de notificación de mensajes en Configuración

**Correcciones**

- Consumo de energía en espera optimizado, reduciendo el uso de recursos en segundo plano cuando la app está inactiva
- Se corrigió un problema por el que el icono del Dock desaparecía en macOS
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.2.0 (2026-08-19)

**Novedades**

- Nuevo navegador integrado del Agent: las pestañas del navegador se vinculan a las conversaciones y se agrupan en el área de vista previa, y el Agent puede operar el navegador directamente para hacer clic, escribir y más; en Mac, también puedes importar cookies desde tu navegador Chrome local para reutilizar tus sesiones de inicio de sesión existentes (desactivado de forma predeterminada; se puede activar en Configuración)
- Localización en 16 idiomas: el idioma del cliente pasa del chino y el inglés a 16 idiomas

**Cambios**

- Kimi WebBridge ahora es un plugin: el control del navegador real se ha trasladado a un plugin, desactivado de forma predeterminada y se puede activar en Configuración
- Se eliminó la página de lista de tableros; ahora los tableros se cambian mediante la barra de pestañas superior
- El tablero ahora es un tipo del área de vista previa: los tableros se pueden abrir en el área de vista previa del chat, con varios tableros abiertos en paralelo

**Correcciones**

- Renderizado en streaming de mensajes mejorado: las respuestas largas ahora se muestran de forma más fluida
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.1.10 (2026-08-16)

**Correcciones**

- Se corrigió un problema por el que la aplicación se cerraba durante la actualización para algunos usuarios de Windows

## 3.1.9 (2026-08-15)

**Novedades**

- El mercado de plugins personales está disponible: el mercado de plugins ahora tiene una sección «Plugins personales» donde puedes explorar e instalar plugins de desarrolladores individuales

**Correcciones**

- Se corrigió un problema por el que el contenido Markdown en streaming ocasionalmente no se actualizaba
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.1.8 (2026-08-11)

**Novedades**

- Navegación por el historial de mensajes: una nueva barra de navegación de mensajes en el lado derecho de los chats largos te permite volver rápidamente a mensajes anteriores
- Ramificación de conversaciones: inicia una nueva rama desde cualquier turno para seguir explorando, conservando el historial de la conversación original
- Editar y retroceder: edita tu último mensaje y regenera la respuesta
- Carpetas de proyectos: mueve conversaciones dentro o fuera de los proyectos y fija proyectos en el área fijada de la barra lateral
- Edición transparente de archivos: después de que el Agent modifica un archivo, se genera una tarjeta de resumen con el diff; revisa los cambios línea por línea y reviértelos con un clic; los archivos del workspace se actualizan automáticamente cuando cambian en el disco
- Descubrimiento y creación de habilidades: descubre y crea habilidades personalizadas en Work, con compatibilidad para búsqueda de habilidades
- Los componentes de tablero fijados en el escritorio ahora tienen un interruptor para permanecer siempre encima

**Cambios**

- Las nuevas ventanas de conversación independientes ahora son compatibles con Chat
- Los mensajes de usuario demasiado largos en el cuadro de entrada ahora se contraen

**Correcciones**

- Se corrigió la vista previa de enlaces de archivos PDF en Windows; la configuración de Work ya no parpadea en blanco en el modo oscuro; al pegar desde el portapapeles de Word ahora se restaura el texto en lugar de una imagen adjunta
- Se corrigieron varios errores y se mejoraron algunas interacciones y la estabilidad

## 3.1.7 (2026-08-05)

**Novedades**

- Compatibilidad con comentarios a nivel de mensaje: puedes dar me gusta o no me gusta a mensajes específicos de las respuestas del asistente

**Cambios**

- Los componentes de tablero fijados en el escritorio ya no permanecen siempre encima de forma forzada

**Correcciones**

- Se corrigieron algunos errores y se mejoraron algunas interacciones

## 3.1.6 (2026-07-29)

**Novedades**

- El editor de diapositivas PPT está disponible: abre y edita las diapositivas directamente en el workspace, y los cambios se aplican al instante
- Compatibilidad con anotaciones de capturas de pantalla de archivos en el área de vista previa y del navegador; al terminar, las anotaciones se pueden enviar directamente al Agent para su modificación
- Compatibilidad con la migración del disco de almacenamiento en Windows: los datos de Work se pueden migrar a otro disco
- La instalación en Windows ahora permite elegir la ubicación de instalación

**Cambios**

- Se mejoraron algunos problemas de token efficiency

**Correcciones**

- Se corrigieron algunos errores y se mejoraron algunas interacciones
