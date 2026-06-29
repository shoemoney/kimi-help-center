---
title: "Objetivos"
slug: "cli-goals"
order: 7
extract_headings: false
preview: true
preview_content: "Usa los objetivos para que Kimi Code siga avanzando hacia un resultado definido a lo largo de varios turnos."
---

<SeoMeta
  title="Objetivos - Centro de ayuda de Kimi"
  description="Usa /goal para que Kimi Code siga avanzando hacia un resultado definido a lo largo de varios turnos. Aprende cuándo usar los objetivos, cómo gestionar su ciclo de vida y cómo poner en cola los próximos objetivos."
/>

# Objetivos

Los objetivos hacen que Kimi Code siga trabajando hacia un resultado definido a lo largo de varios turnos. A diferencia de una instrucción normal que indica qué hacer a continuación, un objetivo indica qué debe cumplirse. Usa `/goal` cuando la tarea tenga una meta clara, pero el siguiente paso útil dependa de lo que el agente descubra mientras trabaja: por ejemplo, arreglar un conjunto de pruebas que fallan o rastrear la causa raíz de una compilación rota.

## Iniciar un objetivo

Escribe el objetivo después de `/goal`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Arregla los errores listados en el rastreador de incidencias.",
    },
  ]}
/>

Kimi Code guarda el objetivo, lo envía como el siguiente mensaje del usuario e inicia el modo objetivo. Después de cada turno, verifica si el objetivo está completo, bloqueado, en pausa o aún activo.

Los objetivos funcionan mejor cuando el objetivo define la meta y la evidencia que la demuestra:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Arregla todos los errores etiquetados como checkout-regression, agrega o actualiza pruebas para cada arreglo y ejecuta el conjunto de pruebas de checkout",
    },
  ]}
/>

Evita los objetivos que solo indican una dirección general:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Encuentra todos los errores en este código base.",
    },
  ]}
/>

Ese objetivo no indica qué cuenta como éxito, qué inspeccionar ni cuándo detenerse. El agente puede bloquearse de inmediato o seguir trabajando mucho más de lo que esperabas.

### Cuándo usar los objetivos

Usa los objetivos para trabajos con una meta clara y evidencia verificable.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Arregla todas las pruebas de checkout que fallan y ejecuta el conjunto de pruebas de checkout con éxito.",
    },
  ]}
/>

Kimi Code puede inspeccionar el resultado de las pruebas, modificar archivos, volver a ejecutar verificaciones y decidir cuándo el objetivo está completo.

Usa los objetivos cuando la tarea pueda necesitar varios turnos de investigación y reparación.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Averigua por qué falla la compilación de lanzamiento, arregla la causa raíz y verifica que la compilación sea exitosa.",
    },
  ]}
/>

El objetivo describe el resultado, así que el agente puede adaptarse cuando la primera pista no es la causa raíz.

Usa los objetivos para trabajos ordenados que deban continuar sin otra instrucción.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Actualiza la implementación de la función, agrega documentación, ejecuta las pruebas y resume los archivos modificados.",
    },
  ]}
/>

Esto resulta útil cuando ya conoces las verificaciones o los artefactos que deben existir antes de dar por terminado el trabajo.

### Cuándo no usar los objetivos

No uses los objetivos para temas amplios o discusiones abiertas.

**Contraejemplo:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal ¡Hola!",
    },
  ]}
/>

<Callout type="warning">
Los agentes marcarán el objetivo como completo de inmediato si no se trata de un objetivo real.
</Callout>

No uses los objetivos para tareas que sabes que son imposibles o irresolubles.

**Contraejemplo:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Demuestra que 1 + 1 = 3.",
    },
  ]}
/>

<Callout type="warning">
Los agentes marcarán el objetivo como bloqueado si parece imposible o irresoluble.
</Callout>

No uses los objetivos con metas ambiguas o complicadas.

**Contraejemplo:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Crea un videojuego en un solo archivo HTML.",
    },
  ]}
/>

<Callout type="warning">
Los agentes pueden completar los objetivos, pero también pueden producir resultados inesperados o sorprendentes después de mucho tiempo.
</Callout>

## Gestionar el ciclo de vida

Usa el mismo conjunto de comandos para inspeccionar o controlar el objetivo actual:

| Comando | Acción |
| --- | --- |
| `/goal` o `/goal status` | Muestra el objetivo actual y su progreso |
| `/goal pause` | Pausa el objetivo activo sin eliminarlo |
| `/goal resume` | Reanuda un objetivo en pausa o bloqueado |
| `/goal cancel` | Elimina el objetivo actual |
| `/goal replace <objetivo>` | Reemplaza el objetivo actual con uno nuevo |

Un objetivo puede detenerse de tres maneras:

- **completo**: el objetivo está cumplido, Kimi Code lo borra y el agente resume cómo finalizó el trabajo
- **en pausa**: lo pausaste, interrumpiste el turno, reanudaste una sesión que tenía un objetivo activo o se produjo un error del modelo, del proveedor o del entorno de ejecución
- **bloqueado**: Kimi Code necesita información, no puede completar el objetivo tal como está planteado o alcanzó un límite de presupuesto. Cuando el agente bloquea un objetivo, escribe un mensaje breve explicando por qué.

Escribe las condiciones de detención dentro del objetivo. `/goal` no tiene un parámetro aparte para el límite de detención.

## Poner en cola los próximos objetivos

A veces los agentes completan un objetivo demasiado rápido. Algunos usuarios se decepcionan al poder asignar solo un objetivo a la vez. Muchas personas ya saben qué próximos objetivos quieren perseguir. Tenían que esperar a que el objetivo actual se completara, abrir la TUI y enviar el siguiente objetivo manualmente.

Usa `/goal next` cuando tengas más trabajo listo pero no quieras interrumpir el objetivo actual:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next Actualiza las notas de lanzamiento después de que pasen las pruebas",
    },
  ]}
/>

Los próximos objetivos no son visibles para el agente mientras se ejecuta el objetivo actual. Cuando el objetivo actual se completa, Kimi Code inicia el primer objetivo en cola de la misma manera en que los usuarios escriben `/goal <objetivo>`.

Si no hay ningún objetivo activo, `/goal next <objetivo>` inicia ese objetivo de inmediato. Se comporta como `/goal <objetivo>` y muestra un mensaje de estado antes de que comience el objetivo.

Gestiona los próximos objetivos de forma interactiva:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next manage",
    },
  ]}
/>

En el gestor, usa <kbd>↑</kbd> / <kbd>↓</kbd> para navegar, <kbd>Espacio</kbd> para seleccionar un objetivo y moverlo, <kbd>↑</kbd> / <kbd>↓</kbd> para reordenarlo, <kbd>E</kbd> para editar, <kbd>D</kbd> para eliminar y <kbd>Esc</kbd> para cancelar. Al editar, usa <kbd>Shift-Enter</kbd> o <kbd>Ctrl-J</kbd> para agregar una nueva línea y <kbd>Enter</kbd> para guardar.

Si el objetivo actual está en pausa, cancelado o bloqueado, Kimi Code no inicia el siguiente objetivo en cola. Cuando un objetivo se bloquea y hay objetivos en cola, la TUI te recuerda que estos esperan a que se complete.

## Usa el modo objetivo con cuidado

El modo objetivo es útil para trabajos que pueden verificarse con archivos, pruebas, salida de comandos, artefactos generados o un informe escrito claro. Es menos útil para una edición puntual o una pregunta que solo necesita una respuesta.

En el modo de permisos `manual`, el trabajo del objetivo puede pausarse para aprobar una llamada a una herramienta. Para trabajos sin supervisión, usa un modo de permisos acorde al riesgo del repositorio y a los comandos que el agente pueda ejecutar.

En el modo de instrucción no interactivo, solo se admite la creación de objetivos:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"/goal Arregla la prueba de checkout que falla\"",
    },
  ]}
/>

El modo de instrucción sale con el código `0` cuando el objetivo se completa, `3` cuando se bloquea y `6` cuando se pausa. `/goal next` y otros comandos de gestión son controles de la TUI.
