---
title: "Modos de trabajo"
slug: "cli-work-modes"
order: 9
extract_headings: false
preview: true
preview_content: "Cómo usar el modo Plan y Thinking mode en Kimi Code CLI, y cuándo conviene usarlos."
---

<SeoMeta
  title="Modos de trabajo de Kimi Code CLI - Centro de ayuda de Kimi"
  description="Aprende a usar el modo Plan y Thinking mode en Kimi Code CLI, y cuándo conviene usarlos."
/>

# Modos de trabajo

## Modo Plan

El modo Plan es un modo de planificación de solo lectura que permite que la IA cree un plan de implementación antes de empezar a programar, lo que ayuda a evitar esfuerzos desperdiciados en la dirección equivocada.

En el modo Plan, la IA solo puede usar herramientas de solo lectura (`Glob`, `Grep`, `ReadFile`) para explorar el código base. No puede modificar archivos ni ejecutar comandos. La IA escribe el plan en un archivo dedicado y luego lo envía para tu aprobación. Puedes aprobarlo, rechazarlo o agregar comentarios para revisarlo.

### Entrar al modo Plan

Puedes entrar al modo Plan de cuatro maneras:

- **Opción de inicio**: Usa `kimi --plan` para iniciar una nueva sesión directamente en modo Plan
- **Atajo de teclado**: Presiona `Shift-Tab` para activar o desactivar el modo Plan
- **Comando slash**: Ingresa `/plan` o `/plan on`
- **Iniciado por la IA**: En tareas complejas, la IA puede solicitar entrar al modo Plan mediante la herramienta `EnterPlanMode`. Puedes aceptar o rechazar la solicitud

También puedes establecer `default_plan_mode = true` en el archivo de configuración para que cada sesión nueva comience en modo Plan de forma predeterminada.

Después de entrar al modo Plan, el prompt cambia a `📋` y la barra de estado inferior muestra un indicador azul `plan`.

### Revisar y aprobar planes

Cuando la IA termina el plan, lo envía para aprobación mediante `ExitPlanMode`. El panel de aprobación muestra el plan completo. Puedes:

- **Aprobar la ejecución**: Si el plan incluye varias rutas de implementación, la IA muestra 2 o 3 opciones etiquetadas (como "Plan A" o "Plan B (recomendado)") para que elijas una. Después de seleccionar una, la IA sale del modo Plan y ejecuta esa ruta. Si solo hay una ruta, se muestra un botón **Aprobar**
- **Rechazar**: Rechaza el plan y permanece en modo Plan. Puedes dejar comentarios en la conversación
- **Rechazar y salir**: Rechaza el plan y sale del modo Plan en un solo paso
- **Revisar**: Ingresa comentarios de revisión. La IA actualizará el plan según corresponda y lo enviará de nuevo

Presiona `Ctrl-E` para ver el plan completo en el paginador de pantalla completa.

### Administrar el modo Plan

Usa el comando `/plan` para administrar el modo Plan:

- `/plan`: Activa o desactiva el modo Plan
- `/plan on`: Activa el modo Plan
- `/plan off`: Desactiva el modo Plan
- `/plan view`: Ver el plan actual
- `/plan clear`: Borrar el archivo del plan actual

## Thinking mode

Thinking mode permite que la IA piense con mayor profundidad antes de responder, por lo que resulta adecuado para problemas complejos.

Puedes usar el comando `/model` para cambiar de modelos y de Thinking mode. Después de seleccionar un modelo, si ese modelo admite Thinking mode, el sistema te preguntará si quieres activarlo. También puedes activarlo al iniciar con la opción `--thinking`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --thinking",
    },
  ]}
/>

> Consejo: Thinking mode debe ser compatible con el modelo actual. Algunos modelos, como `kimi-k2-thinking-turbo`, siempre usan Thinking mode y no permiten desactivarlo.
