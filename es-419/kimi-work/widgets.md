---
title: "Widgets"
slug: "widgets"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Widgets de Kimi Work - Centro de ayuda de Kimi"
  description="Conoce los Widgets de Kimi Work: páginas interactivas generadas por el modelo directamente en un chat. Vincula una Widget Task para crear un Live Widget que se actualiza constantemente, y guarda widgets en tu Dashboard."
/>

# Widgets

Un widget es una página interactiva generada por el modelo y presentada al instante en un chat. No necesitas dar instrucciones explícitas sobre el entregable: el modelo crea un widget cuando se ajusta al escenario (por ejemplo, mostrar un mapa, redactar un correo electrónico, organizar una receta o visualizar datos), lo que te ayuda a entender la respuesta de forma más rápida e intuitiva.

Los widgets pueden conectarse a datos locales o plugins externos para actualizarse continuamente, y se pueden guardar en tu [Dashboard](/kimi-work/dashboard) para consultarlos y administrarlos a largo plazo.

## Generar un widget

1. Describe lo que necesitas en lenguaje natural en un chat, por ejemplo:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Crea un widget con un resumen diario de noticias tecnológicas de EE. UU., actualizado todos los días a las 9 a. m.",
    },
  ]}
/>

2. Mientras se genera, puedes ver cómo la página del widget toma forma paso a paso;
3. Una vez generado, el widget está listo para interactuar directamente en el chat.

## Widget Tasks y Live Widgets

- **Widget Task**: una tarea que se ejecuta automáticamente cuando se cumplen condiciones específicas; se puede activar según un horario o por un evento.
- **Live Widget**: un widget vinculado a una Widget Task, cuyo contenido se actualiza automáticamente con cada ejecución de la tarea. Por ejemplo, una vez que el widget "Resumen diario de noticias tecnológicas de EE. UU." se vincula a una tarea que se ejecuta cada mañana, su contenido se actualiza automáticamente todos los días.

<Callout type="info">
Hay un límite en la cantidad de Widget Tasks que pueden ejecutarse al mismo tiempo, y varía según el plan. Cuando alcances el límite, pausa algunas tareas desde la página de Dashboard antes de crear nuevas.
</Callout>

## Guardar en Dashboard

Después de generar un widget, pasa el cursor sobre él y selecciona "Save to Dashboard" para guardarlo en un dashboard. Un mismo widget puede existir en varios dashboards al mismo tiempo.

En el Dashboard también puedes ver la tarea vinculada a un Live Widget, activarla o desactivarla, y consultar sus 10 ejecuciones más recientes. Consulta [Dashboard](/kimi-work/dashboard).
