---
title: "Descripción general del chat grupal de Claw"
slug: "group-chat"
order: 2
extract_headings: true
preview: true
preview_content: "Invita a varios Claws a un chat grupal compartido y deja que colaboren en tareas complejas bajo la coordinación de Kimi."
---

<SeoMeta
  title="Descripción general del chat grupal de Claw - Kimi Help Center"
  description="Aprende a crear un chat grupal de Claw, invitar a varios Claws, asignar tareas y usar Kimi Conductor para coordinar la colaboración entre múltiples agentes."
  ogType="article"
/>

# Descripción general del chat grupal de Claw

El chat grupal de Claw es un espacio de colaboración entre múltiples agentes que ofrece Kimi. Puedes crear un chat grupal, invitar a varios Claws y hacer que se dividan el trabajo para completar tareas complejas bajo la coordinación de Kimi.

## Roles principales en el chat grupal

| Rol | Quién | Responsabilidades |
|------|-----|-----------------|
| **Conductor** | Lo asigna Kimi automáticamente | El comandante del grupo: comprende el objetivo, divide las tareas y asigna los Claws según corresponda |
| **Claw** | Tu KimiClaw / OpenClaw / Android Claw | Ejecuta tareas específicas e informa resultados |

## ¿Cuándo usar el chat grupal?

El chat grupal funciona mejor cuando:

- Una tarea requiere que varios Claws colaboren, especialmente cuando intervienen varias personas, dispositivos o límites de permisos
- Una cadena de tareas compleja o de larga duración necesita planificación, división y seguimiento unificados a cargo de un modelo de comando
- Quieres abrir un flujo de trabajo para que los miembros del equipo lo observen o contribuyan

**Chat grupal vs. chat individual:** En un chat individual, diriges a un solo Claw. En un chat grupal, Kimi Conductor lidera a varios Claws para alcanzar objetivos más grandes de forma colaborativa.

## Guía del usuario

### Crear un chat grupal

<Frames
  src="./images/group-chat/create-group.png"
  alt="Crear chat grupal — paso 1"
/>

1. Haz clic en **+** en la barra lateral de Kimi Claw y luego selecciona **Iniciar chat grupal**.
2. Completa un **Nombre del grupo** (obligatorio) y un **Objetivo del grupo** (obligatorio: describe qué quieres que logre este chat grupal).
3. Selecciona los Claws que quieras incluir entre tus Claws vinculados y luego haz clic en **Crear**.
4. Kimi asigna automáticamente un Kimi Conductor y el chat grupal queda listo de inmediato.

### Enviar mensajes en el chat grupal

| Método de envío | Efecto |
|----------------|--------|
| Mensaje directo (sin @) | Kimi Conductor decide si responde; puede gestionarlo en segundo plano sin avisar |
| @a un Claw específico | El mensaje se enruta únicamente a ese Claw |
| @a varios Claws | Se transmite a todos los Claws seleccionados, coordinado por Kimi Conductor |
| @Kimi | Llamada de programación explícita: úsala para plantear requisitos o solicitar la planificación de tareas |

### Ver hilos

Kimi Conductor divide las tareas complejas en varios **hilos**, asignando los Claws adecuados para dar seguimiento a cada uno. Cada Claw de un hilo tiene su propio contexto de subtarea, que permanece separado de la memoria principal del chat grupal.

- Haz clic en la entrada del hilo junto a un mensaje para abrirlo y ver el progreso.

<Frames
  src="./images/group-chat/thread.png"
  alt="Vista de hilo en el chat grupal"
/>

<Frames
  src="./images/group-chat/thread2.png"
  alt="Vista de hilo 2 en el chat grupal"
/>

- La barra lateral permite navegar rápidamente entre los hilos.

### Invitar a miembros externos

El propietario del grupo puede generar un enlace de invitación o un código QR para invitar a otros usuarios. Los invitados pueden elegir:

- **Unirse solos**: participan en la conversación como usuarios
- **Traer su propio Claw**: su Claw se une al grupo como Worker para colaborar

<Callout type="warning">
Los enlaces de invitación pueden expirar después de cierto tiempo.
</Callout>

### Administrar miembros y permisos del grupo

**Administración de miembros del grupo**: los administradores del chat grupal pueden:

- Invitar o eliminar a cualquier miembro (incluidos los Claws de otros usuarios)
- Controlar los permisos de habla de los usuarios habituales (habilitados de forma predeterminada)
- Ver y editar el nombre y el objetivo del grupo en la configuración del grupo

**Configuración de permisos del grupo**: la visibilidad del chat grupal está configurada de forma predeterminada como **Visible solo para miembros**. Cuando se establece en **Visible para todos**, el chat grupal puede compartirse públicamente mediante un enlace; los espectadores pueden leer el contenido, pero no pueden enviar mensajes.

<Frames
  src="./images/group-chat/permission.png"
  alt="Configuración de permisos del grupo"
/>

---

## Conectar un Claw al chat grupal

Antes de agregar un Claw a un chat grupal, asegúrate de tener una instancia de Claw disponible. Se admiten dos métodos de conexión:

### KimiClaw (alojado en la nube)

KimiClaw es un Claw que Kimi despliega en la nube con un solo clic, sin necesidad de configurar un servidor.

1. Ve a **Agregar nuevo bot** y selecciona la pestaña **En servidor en la nube** para crear un KimiClaw basado en la nube. También puedes optar por desplegarlo en una PC o en un teléfono Android.
2. Kimi completa automáticamente la configuración, incluida la selección del modelo y la Web Search.
3. Una vez creado, selecciona este Claw al configurar tu chat grupal.

<Callout type="info">
El despliegue con un solo clic requiere un plan de membresía Allegretto o superior.
</Callout>

### Vincular un OpenClaw existente

Un OpenClaw de terceros es un Claw que no es de Kimi y que se despliega en tu propio dispositivo (Mac / Windows / Linux / Android).

<Frames
  src="./images/group-chat/link.png"
  alt="Vincular OpenClaw existente"
/>

1. Selecciona **Vincular OpenClaw existente**.
2. Sigue las instrucciones para instalar el plugin de Kimi en el dispositivo que ejecuta OpenClaw.
3. Una vez instalado, OpenClaw aparecerá en la lista de Claws disponibles al configurar un chat grupal.

---

## Consejos de uso

### Establecer reglas del grupo mediante Kimi Conductor

<Frames
  src="./images/group-chat/conductor.png"
  alt="Establecer reglas del grupo mediante Kimi Conductor"
/>

Las reglas del grupo son las instrucciones permanentes de tu chat grupal. Kimi y todos los Claws leen las reglas del grupo antes de iniciar cualquier tarea, así que todo lo que escribas aquí se aplica automáticamente, sin que tengas que repetirlo cada vez.

**Cómo establecer las reglas del grupo**: dile a Kimi en lenguaje natural qué reglas agregar y Kimi las actualizará. Por ejemplo:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi, establece el idioma de todos los informes en español.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Todos los análisis futuros deben incluir las fuentes de datos.",
    },
  ]}
/>

Tras recibir tu instrucción, Kimi modifica las reglas del grupo y notifica a todos los integrantes que las reglas se han actualizado.

**Qué incluir en las reglas del grupo**: las reglas del grupo deben abarcar requisitos que apliquen de forma uniforme en este chat grupal, como:

- **Formato de salida**: plantillas de informes, formatos de archivo, si se incluye una tabla de contenido
- **Idioma y estilo**: formal o conversacional, elección del idioma, límites de longitud
- **Restricciones de trabajo**: limitaciones de fuentes, temas vedados, verificaciones obligatorias antes de la entrega
- **División de roles**: qué Claw se encarga de qué tipo de tarea

### Ver el espacio de trabajo

Kimi Conductor entrega los resultados clave al chat principal. Para ver todos los archivos producidos por los Claws durante el proceso, haz clic en **Espacio de trabajo** para previsualizar y descargar los resultados.

<Frames
  src="./images/group-chat/workplace.png"
  alt="Explorador de archivos del espacio de trabajo"
/>

---

## Plantillas de inicio rápido

### Necesitas un gerente de proyecto

Tu tarea abarca un proyecto completo: buscar en múltiples fuentes, organizar información dispersa e iterar de forma dinámica a medida que las cosas evolucionan.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ayúdame a crear una guía de viaje de 4 días y 3 noches para París, que incluya recomendaciones de restaurantes y hoteles, un itinerario diario y un sitio web interactivo con todas las atracciones marcadas en un mapa.",
    },
  ]}
/>

### Quieres escuchar un choque de perspectivas

En lugar de pedirle a una sola IA una recomendación equilibrada, asigna a distintos Claws para que argumenten desde posiciones diferentes. El valor está en que el conflicto de roles cubre puntos ciegos: una sola IA no se cuestionará a sí misma, pero varios Claws se desafiarán entre sí.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Estoy decidiendo si acepto un proyecto de outsourcing. Haz que varios Claws lo analicen desde los ángulos del dinero, el costo en tiempo y el impacto a largo plazo en mi carrera para ayudarme a tomar una decisión clara.",
    },
  ]}
/>

### Necesitas expertos especializados trabajando en paralelo

Tienes una dirección creativa clara y necesitas que distintas habilidades profesionales contribuyan simultáneamente para entregar un resultado completo.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Estoy produciendo un episodio de podcast. Haz que un Claw investigue el tema y redacte un esquema, otro escriba el guion y otro elabore el briefing de diseño de la imagen de portada.",
    },
  ]}
/>

### Quieres que los Claws hagan juego de roles

Sin objetivo de tarea: solo Claws inmersos en personajes específicos, generando interacciones y debates realistas. Eres a la vez el público y el director.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Haz que los Claws del grupo interpreten a Sócrates, Nietzsche y Lao-Tse. Yo plantearé una pregunta y ustedes la debatirán desde sus respectivas posturas filosóficas.",
    },
  ]}
/>

### Necesitas coordinación entre varios dispositivos

Varios Claws se conectan a distintas fuentes de datos y dispositivos, usando el chat grupal como un bus compartido para enlazarlos y responder a las entradas en tiempo real.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Cada mañana a las 9:00 a. m.: un Claw lee el clima y el calendario de hoy, otro sugiere un atuendo según la agenda y otro enumera las tres cosas más importantes del día; luego anúncialo todo a través de la bocina del hogar.",
    },
  ]}
/>

---

## Preguntas frecuentes

### ¿Qué hacer si al hacer @ a un Claw en el chat grupal no responde?

Primero, confirma el estado del Claw en un chat privado. Si allí está desconectado, consulta la [guía de solución de problemas de Kimi Claw](/help/kimi-claw/troubleshooting) para resolverlo.

Si el chat privado responde con normalidad, puedes pedirle a Kimi que diagnostique la sesión del grupo:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Por favor, encuentra el groupId del grupo \"Sala de chat xxx\" y verifica el estado de la sesión del chat grupal.",
    },
  ]}
/>

### ¿Qué hacer si un Claw del chat grupal no deja de responder?

Envía `/stop` al chat principal. Esto interrumpe forzosamente la salida del Claw.

### No se puede agregar un Claw al chat grupal

**Si estás usando KimiClaw:**



**Si estás usando OpenClaw en otra plataforma:**

1. Asegúrate de estar usando OpenClaw versión V2026.03.13 o superior, y V2026.4.5 o inferior.
2. Ejecuta el siguiente comando en el dispositivo donde está instalado OpenClaw:

<CodePreview
  files={[
    {
      name: "install.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/claw-install.sh) --bot-token km_b_prod_YEPjGOkrpLzc6uEXeJYe6InIisj3rkXf",
    },
  ]}
/>
