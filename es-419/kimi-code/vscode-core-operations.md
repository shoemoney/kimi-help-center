---
title: "Operaciones principales de VS Code"
slug: "vscode-core-operations"
order: 12
extract_headings: false
preview: true
preview_content: "Panel de chat, referencias a archivos, revisión de diferencias, Modo Plan y gestión de contexto en la extensión de Kimi Code para VS Code."
---

<SeoMeta
title="Operaciones principales de Kimi Code para VS Code - Centro de ayuda de Kimi"
description="Domina las funciones principales de la extensión de Kimi Code para VS Code: referencias a archivos con @, comandos de barra diagonal, revisión de diferencias en cambios de código, Modo Plan, cola de mensajes y gestión de contexto."
/>

# Operaciones principales de VS Code

<Callout type="warning">
**La adaptación de la extensión de VS Code está en curso**

Kimi Code para VS Code actualmente permite nuevas instalaciones solo a usuarios de la CLI heredada de Python. Los usuarios existentes que ya tienen instalada la extensión pueden seguir usándola después de actualizar a la nueva CLI. Por el momento, no se admite la instalación para otros usuarios de la CLI de la versión TS.
</Callout>

## Abrir el panel

<Frames
  src="./images/vscode-getting-started/kimi-code-command-palette.png"
  alt="Paleta de comandos de Kimi Code"
/>

Haz clic en el ícono de Kimi en la barra de actividad o ejecuta el comando "Kimi Code" desde la paleta de comandos.

## Entrada y controles

### Referencias a archivos

Escribe `@` y luego selecciona el nombre de un archivo o una carpeta. Por ejemplo, usa `@src/handlers/` para hacer referencia a una carpeta, `@app.ts` para hacer referencia a un archivo o `@src/app.ts:10-20` para hacer referencia a un rango específico de líneas.

Presiona `Alt+K` para insertar rápidamente el archivo actual o el código seleccionado como referencia.

### Comandos de barra diagonal

Escribe `/` para abrir el menú de comandos. Usa `/init` para analizar el proyecto y generar documentación, o `/compact` para comprimir un contexto demasiado largo.

### Historial de entradas

Presiona `↑` / `↓` en el cuadro de entrada para navegar rápidamente por tus mensajes enviados recientemente; así será más fácil repetir o ajustar una pregunta.

### Entrada de archivos multimedia

Puedes pegar, arrastrar y soltar, o seleccionar archivos multimedia. Los formatos compatibles incluyen formatos de imagen como PNG, JPEG, GIF, WebP y HEIC, así como formatos de video como MP4, WebM y MOV.

- **Pegar / arrastrar y soltar**: Una sola imagen puede tener hasta 5MB en su tamaño original. El sistema la comprimirá automáticamente, lo que incluye convertir HEIC a JPEG, redimensionar imágenes demasiado grandes y reducir la calidad hasta aproximadamente 2MB.
- **Selector de archivos**: Al seleccionar archivos mediante el botón "+" del cuadro de entrada o el menú `@`, las imágenes pueden tener hasta 10MB y los videos hasta 20MB.
- **Límites generales**: Cada mensaje puede adjuntar hasta 9 archivos, con un tamaño total máximo de 80MB. Cuando se adjuntan archivos multimedia, los modelos que no admiten entrada multimodal se filtran automáticamente.

### Cola de mensajes

Mientras Kimi responde, puedes seguir escribiendo y enviando mensajes en el cuadro de entrada. Estos mensajes no se pierden; se agregan a la **cola de mensajes**. La barra de herramientas inferior muestra el número de elementos en la cola, y puedes hacer clic allí para expandir el panel de la cola:

- Ver la lista de mensajes pendientes de envío
- Editar o eliminar mensajes de la cola
- Reordenar mensajes
- Mientras Kimi responde, haz clic en el ícono ⚡ de un elemento de la cola para insertar ese mensaje de inmediato como una **guía**, orientando a Kimi para ajustar la dirección de la respuesta actual

### Modelos y Thinking mode

Cambia de modelo desde el menú desplegable de la barra de entrada.

Algunos modelos admiten capacidades de razonamiento extendido. El interruptor de Thinking mode tiene tres estados: oculto cuando el modelo no admite Thinking mode, activado/desactivado manualmente por el usuario, o siempre activo para modelos como k2-thinking.

Una vez activado, los pasos de pensamiento aparecen contraídos de forma predeterminada en la respuesta. Puedes expandirlos para ver el proceso de razonamiento. Activa `kimi.alwaysExpandThinking` en la configuración para expandir el proceso de pensamiento de forma predeterminada.

## Modos de trabajo

### Confirmación de operaciones y ejecución de herramientas

Cuando Kimi propone ejecutar una herramienta o escribir en un archivo, aparece un cuadro de confirmación con tres opciones:

- **Sí**: Aprobar solo la operación actual
- **Sí, para esta sesión**: Aprobar operaciones similares dentro de la sesión actual hasta que comience una nueva sesión
- **No**: Rechazar la ejecución de la operación

Activa `kimi.yoloMode` en la configuración para aprobar automáticamente todas las llamadas a herramientas. Esto es adecuado cuando confías en el flujo de trabajo y quieres mayor eficiencia.

### Cuadro de preguntas

Durante la ejecución, Kimi puede hacerte una pregunta, por ejemplo, pedirte que elijas un enfoque de implementación. Aparecerá una tarjeta de pregunta en la parte inferior. Puedes seleccionar directamente una opción predefinida o elegir "Respuesta personalizada..." para escribir tu propia respuesta. Después de responder, Kimi continúa con la ejecución.

### Modo Plan

Haz clic en el ícono 📋 del lado izquierdo del cuadro de entrada para entrar al Modo Plan. Cuando está activado, Kimi primero muestra una tarjeta de plan expandible antes de la ejecución formal, con la lista de pasos que pretende seguir. Puedes revisar el plan antes de permitir que continúe.

- El botón de Modo Plan conserva su configuración anterior para cada sesión nueva.
- Si Kimi ya está transmitiendo una respuesta, salir del Modo Plan requiere una segunda confirmación para evitar interrumpir la tarea actual.

### Seguimiento de cambios en archivos

Después de que Kimi modifica archivos, todos los cambios se registran y se muestran en la sección "Cambios en archivos". Puedes ver la lista de archivos modificados y su estado, como agregados, modificados o eliminados, junto con estadísticas de líneas agregadas y eliminadas.

Para cada archivo, puedes ver los cambios en la vista nativa de diferencias de VS Code, restaurarlo a su estado original o conservar los cambios para borrar el registro de seguimiento. Se admiten operaciones por lote, de modo que puedes conservar o descartar todos los cambios de una vez. El estado base se captura la primera vez que se modifica un archivo en la sesión; revertirlo restaura el archivo a esa versión base.

## Gestión de contexto

### Historial de sesiones

Haz clic en el menú desplegable del historial en la parte superior del panel para explorar sesiones anteriores. Los datos de sesión se almacenan localmente y admiten búsqueda por palabras clave. Puedes eliminar sesiones antiguas o cargar una sesión para continuar una conversación previa.

La barra de estado muestra el porcentaje de uso del contexto y el recuento de token de entrada/salida. Cuando el uso del contexto sea alto, usa el comando `/compact` para comprimirlo.

### Cambio de directorio de trabajo

Haz clic en el ícono de engrane (menú de acciones) del lado derecho del cuadro de entrada → **Directorio de trabajo** para cambiar el directorio de trabajo entre distintos subdirectorios del área de trabajo actual. Después del cambio, se inicia automáticamente una nueva sesión para que Kimi pueda trabajar con base en el contexto del nuevo directorio. Puedes seleccionar directamente un subdirectorio registrado o usar "Examinar..." para buscar cualquier subcarpeta.

## Menú de acciones

### Lista de funciones

El ícono de engrane del lado derecho del cuadro de entrada abre el menú de acciones, que incluye las siguientes funciones:

- **Directorio de trabajo**: Cambia el directorio de trabajo actual (consulta "Cambio de directorio de trabajo" más arriba)
- **Servidores MCP**: Abre el panel de configuración del servidor MCP
- **Configuración general**: Abre la página de configuración de Kimi en la configuración de VS Code
- **Mostrar registros**: Abre el panel de registros de salida de Kimi Code para solucionar problemas
- **Restablecer Kimi**: Restablece el Webview de Kimi, útil cuando la interfaz se congela o no responde
- **Cerrar sesión / Iniciar sesión**: Cierra sesión o vuelve a iniciar sesión en tu cuenta de Kimi

También puedes ejecutar "Kimi Code: Run CLI" desde la paleta de comandos de VS Code para iniciar Kimi Code CLI directamente en la terminal integrada.
