---
title: "Tareas programadas"
slug: "scheduled-tasks"
order: 5
extract_headings: false
preview: true
preview_content: "Las tareas programadas permiten que Kimi ejecute automáticamente una tarea fija en el horario que definas: ideales para informes diarios, seguimiento semanal y limpiezas periódicas. Disponibles en Kimi y en la app de escritorio Kimi Work."
---

<SeoMeta
  title="Cómo usar las tareas programadas de Kimi - Centro de ayuda de Kimi"
  description="Conoce las tareas programadas de Kimi: haz que Kimi ejecute automáticamente una tarea en un horario definido, con programación diaria, semanal, mensual o de una sola vez, fecha de vencimiento opcional y la posibilidad de combinarlas con Skills para trabajos más complejos. Ideales para informes diarios, seguimiento semanal de la industria y limpiezas periódicas de datos. Disponibles en Kimi y en la app de escritorio Kimi Work."
/>

# Tareas programadas

Las tareas programadas permiten que Kimi ejecute automáticamente una tarea fija en el horario que definas, para que no tengas que iniciarla manualmente cada vez. Son ideales para trabajos periódicos y repetitivos: informes diarios, seguimiento semanal de la industria, limpiezas periódicas de datos, etc.

Las tareas programadas son una función general, disponible en **Kimi** y en la **app de escritorio Kimi Work**.

## Crear una tarea programada

Hay dos formas:

- **Desde el punto de entrada**: haz clic en "Crear tarea programada" en la barra lateral y completa la tarea en el cuadro de diálogo;
- **Desde una conversación**: describe en lenguaje natural lo que necesitas programar, y Kimi creará una tarea programada por ti, redactando automáticamente el título, la programación y el contenido de la tarea.

Una tarea programada incluye:

- **Título**: resume la tarea para que sea fácil encontrarla en la lista;
- **Programación**: diaria, semanal, mensual o sin repetición (una sola vez);
- **Fecha de vencimiento**: puedes definir cuándo vence la tarea (se selecciona de forma predeterminada al crearla);
- **Contenido de la tarea**: un prompt que describe lo que debe hacer la tarea. A la hora programada, Kimi ejecuta ese prompt fijo.

## Escribir un buen prompt de tarea

Un buen prompt de tarea indica tres cosas a la vez:

- **Cuándo**: cuándo debe ejecutarse (una fecha específica / una hora todos los días / un día cada semana);
- **Formato de salida**: cómo quieres el resultado (puntos clave, una tabla, una plantilla, cantidad de palabras, idioma);
- **Restricciones**: qué no debe hacer o qué debe cumplir (por ejemplo, máximo 200 palabras, solo en chino, incluir una nota de riesgo, mostrar solo 3 elementos).

**Plantilla universal**: A las [hora], haz [tarea], entrégalo como [formato] y sigue [restricciones].

Aquí tienes algunos ejemplos que puedes copiar y adaptar:

<CodePreview
  files={[
    {
      name: "market-news.txt",
      language: "text",
      content: "Todos los días a las 9:00, resume las últimas noticias del mercado en 3 puntos clave más 1 nota de riesgo, en chino y en un máximo de 200 palabras.",
    },
    {
      name: "daily-report-reminder.txt",
      language: "text",
      content: "En 1 hora, recuérdame terminar el informe de trabajo de hoy y adjunta la plantilla del informe (estructura de cuatro partes).",
    },
    {
      name: "bedtime-reminder.txt",
      language: "text",
      content: "Esta noche a las 22:30, recuérdame: apagar la computadora, lavarme y prepararme para dormir. Mantén un tono amable.",
    },
  ]}
/>

## Administrar tareas programadas

La **lista de tareas** muestra todas tus tareas programadas (ordenadas por hora). En cada tarjeta de tarea puedes:

- activar o desactivar la tarea;
- realizar más acciones: localizar la tarea, ejecutarla una vez ahora, editarla y eliminarla.

En una conversación, una tarea programada aparece como una **tarjeta de tarea** que muestra su título, frecuencia, próxima hora de ejecución y contenido; también puedes ejecutarla ahora, pausarla, editarla o eliminarla.

## Ejecución y notificaciones

- A la hora programada, Kimi ejecuta el prompt fijo configurado en la tarea;
- Cada ejecución crea una notificación marcada como no leída; puedes ver el resultado de cada ejecución y saltar a la conversación correspondiente;
- El estado de lectura se sincroniza entre la web y el móvil;
- Después de que se ejecute una tarea, puedes **elegir un modelo para seguir haciendo preguntas de seguimiento** en la conversación del resultado, y escribir "/" para **invocar plugins y Skills**.

## Combinar con Skills

Las tareas programadas pueden combinarse con **Skills** para manejar trabajos más complejos, especialmente las **Skills de finanzas** de Kimi (datos de mercado, análisis de resultados financieros, etc.).

Antes de usar una, **instala y prueba primero la Skill** para confirmar que funciona como esperas; luego úsala en una tarea programada.

## Vencimiento

Al crear una tarea, se selecciona una fecha de vencimiento de forma predeterminada para evitar que queden tareas obsoletas. Los vencimientos predeterminados son:

- Diaria: +7 días;
- Semanal: +1 mes;
- Mensual: +3 meses.

<Callout type="info">
Las tareas programadas que se ejecutan localmente en la app de escritorio Kimi Work no están sujetas a las reglas de vencimiento anteriores; las tareas locales se ejecutan según su ciclo mientras la app esté abierta, y los disparadores omitidos mientras la app estuvo cerrada no se ejecutan después.
</Callout>

## Quotas y planes

Las tareas programadas limitan la cantidad de **tareas que puedes tener activas al mismo tiempo** (no hay límite para la cantidad que puedes crear). La cantidad de tareas activas aumenta según tu plan de membresía:

| Plan | Gratis | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Tareas programadas | 2 | 6 | 15 | 20 | 25 |

- Cuando alcanzas el límite de tareas activas y creas otra, la nueva tarea se **guarda como inactiva**, con un aviso para mejorar tu plan o desactivar algunas tareas;
- Si tu límite de tareas activas disminuye (por bajar de plan o por vencimiento de beneficios), las tareas que excedan el límite se pausan automáticamente.

Para ver las quotas más recientes, consulta la [página de planes de membresía](/membership/membership-pricing).

<Callout type="tip">
**Consejo**: Antes de programar una tarea, prueba su contenido una vez en una conversación normal o usa "Ejecutar una vez ahora" para verificarla: confirma que la redacción sea clara y que el resultado sea el que esperas antes de depender de la programación. Si la tarea depende de una Skill, instala y prueba primero esa Skill.
</Callout>

## Preguntas frecuentes

### ¿Hay un límite para la cantidad de tareas programadas que puedo crear?
No hay límite para la cantidad que puedes crear, pero la cantidad que puedes tener **activas al mismo tiempo** depende de tu plan. Cuando superas el límite de tareas activas, la nueva tarea se guarda como inactiva; puedes mejorar tu plan o desactivar algunas tareas para activarla.

### ¿Necesito mantener mi computadora o la app abiertas para que se ejecuten las tareas?
Las tareas programadas creadas en Kimi se ejecutan en la nube: no necesitas mantener abierto ningún cliente. Las tareas que se ejecutan localmente en la app de escritorio Kimi Work requieren que la app esté abierta; los disparadores omitidos mientras estuvo cerrada no se ejecutan después.

### ¿Puedo elegir un modelo cuando se ejecuta una tarea programada?
No puedes elegir un modelo al crear una tarea. Después de que se ejecute, puedes elegir un modelo para seguir haciendo preguntas de seguimiento en la conversación del resultado, y escribir "/" para invocar plugins y Skills.

### ¿Qué pasa si alcanzo el límite de tareas activas?
Desactiva las tareas que ya no necesites o mejora tu plan para tener un límite de tareas activas más alto. Consulta la [página de planes de membresía](/membership/membership-pricing) para más detalles.
