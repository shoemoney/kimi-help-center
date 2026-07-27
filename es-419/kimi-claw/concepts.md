---
title: "Conceptos básicos y terminal"
slug: "concepts"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Conceptos básicos y terminal - Centro de ayuda de Kimi"
  description="Comprende los conceptos básicos de Kimi Claw —Memory, Skills, HEARTBEAT, Identity, Soul, Tools y User— y los comandos de terminal para revisar el gateway, el estado del bot, los skills y las tareas programadas."
/>

# Conceptos básicos y terminal

## Conceptos clave

| Concepto | Descripción |
|---------|-------------|
| **Memory** | El sistema de memoria a largo plazo de Kimi Claw. Guarda tus preferencias, hábitos e información importante a lo largo de las conversaciones. |
| **Skills** | Módulos de capacidades instalables desde la biblioteca de ClawHub que le dan a Kimi Claw experiencia especializada en un dominio. |
| **HEARTBEAT** | Tareas en segundo plano programadas que se ejecutan con un temporizador, útiles para recordatorios recurrentes, extracción de datos y resúmenes. |
| **Identity** | La definición del rol de Kimi Claw: nombre, profesión y personalidad. Totalmente personalizable por ti. |
| **Soul** | Los rasgos de personalidad esenciales y los principios de comportamiento que dan forma al estilo de interacción de Kimi Claw. |
| **Tools** | El conjunto de capacidades que Kimi Claw puede invocar: búsqueda web, manejo de archivos, ejecución de código y mucho más. |
| **User** | La definición de la relación entre tú y Kimi Claw, que rige los patrones de interacción y el intercambio de información. |

## Terminal

<Frames
  src="./images/concepts/screenshot-30.png"
  alt="screenshot 30"
/>

Puedes abrir una interfaz de línea de comandos desde **Configuración → Terminal** en la web y ejecutar comandos para controlar Kimi Claw directamente.

O bien, simplemente dile a Kimi Claw qué comando ejecutar en lenguaje natural: él lo ejecutará por ti.

> Nota: La Terminal y los plugins comparten el mismo canal de conexión. Reiniciar el gateway de OpenClaw desconectará la Terminal.

## Referencia de comandos

### Sistema

| Comando | Descripción |
|---------|-------------|
| `/help` | Muestra información de ayuda |
| `/status` | Consulta el estado actual del sistema |
| `/ping` | Prueba si la conexión está activa |
| `/cron` | Administra tareas programadas |
| `/config` | Consulta o edita la configuración |
| `/new` | Inicia una nueva conversación (borra el contexto actual) |
| `/reset` | Reinicia Kimi Claw |
| `/compact` | Comprime el contexto de la conversación actual |
| `/stop` | Detiene la tarea que se está ejecutando |

### Skills

| Comando | Descripción |
|---------|-------------|
| `/skills` | Explora, instala y administra skills |

### Tareas programadas

| Comando | Descripción |
|---------|-------------|
| `/cron` | Consulta y administra el calendario de tareas |

### Memory

| Comando | Descripción |
|---------|-------------|
| `/memory` | Consulta y administra la memoria a largo plazo |

### Configuración y depuración

| Comando | Descripción |
|---------|-------------|
| `/config` | Consulta o edita la configuración del sistema |
| `/logs` | Consulta los registros de ejecución |
| `/debug` | Activa el modo de depuración para diagnósticos detallados |
