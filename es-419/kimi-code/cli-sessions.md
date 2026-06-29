---
title: "Sesiones y contexto"
slug: "cli-sessions"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Sesiones \u0026 contexto - Kimi Help Center"
  description="Kimi Code CLI admite la gestión de múltiples sesiones y la persistencia del contexto, lo que te permite pausar y retomar tu trabajo en cualquier momento."
/>

# Sesiones y contexto

Kimi Code CLI admite la gestión de múltiples sesiones y la persistencia del contexto, lo que te permite pausar y retomar tu trabajo en cualquier momento.

## Retomar una sesión

Puedes retomar una sesión anterior de varias maneras:

### Continuar la sesión más reciente

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>

Usa la opción `--continue` (o `-c`) para continuar la última conversación.
### Especificar un ID de sesión

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --session \u003csession-id\u003e",
    },
  ]}
/>

Usa la opción `--session` para restaurar una sesión específica.

### Explorar y cambiar

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/sessions",
    },
  ]}
/>

Ejecuta `/sessions` (o `/resume`) para ver la lista de sesiones y elegir una para restaurarla.
## Reproducción al iniciar

Al retomar una sesión, Kimi Code CLI reproduce automáticamente el historial de la conversación, lo que te ayuda a recordar rápidamente el contexto y el progreso previos.

## Persistencia del estado

El siguiente estado se guarda y se restaura automáticamente entre sesiones:

- **Decisiones de aprobación**: se recuerdan decisiones como «Permitir durante la sesión».
- **Subagentes dinámicos**: se conservan las configuraciones de subagentes creadas durante una sesión.
- **Directorios adicionales**: también se mantienen los directorios de trabajo adicionales que se agreguen mediante comandos.

Esto significa que puedes continuar tu trabajo anterior sin interrupciones después de retomar una sesión.

## Limpiar y compactar

Kimi Code CLI comprime automáticamente el contexto cuando es necesario para garantizar que la conversación pueda continuar. También puedes gestionar el contexto manualmente con comandos de barra:

### Limpiar el contexto

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/clear",
    },
  ]}
/>

Escribe `/clear` (o `/reset`) para borrar todo el contexto de la sesión actual y comenzar una conversación nueva:

### Compactar el contexto

Escribe `/compact` para comprimir el contexto, conservando la información clave mientras se reduce el uso de tokens:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact",
    },
  ]}
/>

También puedes incluir instrucciones al compactar para indicarle a la IA qué información debe priorizar:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact Keep the discussion about database migrations",
    },
  ]}
/>

### Estado del contexto

La barra de estado en la parte inferior de la CLI muestra en tiempo real el uso actual del contexto, lo que te ayuda a monitorear su consumo. Cuando el uso es alto, utiliza `/compact` para comprimir el contexto y evitar perder información importante.
