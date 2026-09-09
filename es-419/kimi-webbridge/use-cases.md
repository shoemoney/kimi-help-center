---
title: "Demo de casos de uso de la Extensión de navegador Kimi"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Demo de casos de uso de la Extensión de navegador Kimi - Centro de ayuda de Kimi"
  description="Explora casos de uso típicos de la Extensión de navegador Kimi: planificación de viajes, búsqueda de rentas, investigación de literatura académica, comparación de precios y más, con ejemplos de prompts listos para copiar."
  ogType="article"
/>

# Demo de casos de uso de la Extensión de navegador Kimi

Todas las tareas siguientes se pueden dejar directamente en manos de Kimi: chatea en la barra lateral o deja que un Agent local las ejecute.

## Búsqueda y organización de información

Cuando necesitas buscar en varios sitios web, la Extensión de navegador Kimi permite que el agente abra automáticamente las páginas de destino, extraiga el contenido clave y lo organice en una salida estructurada, evitándote el trabajo tedioso de abrir páginas una por una y copiar y pegar manualmente.

### Planificación de viajes

Salta entre plataformas de vuelos, sitios de reserva de hoteles y comunidades de viaje para comparar precios y horarios; luego organiza itinerarios, tablas de presupuesto y sugerencias de alojamiento.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Estoy planeando un viaje de 5 días y 4 noches a Kioto en noviembre para dos personas, con un presupuesto de alrededor de RMB 8,000. Revisa vuelos, hoteles y horarios de apertura de atracciones, y organiza los resultados en un itinerario día por día y una tabla de presupuesto.",
    },
  ]}
/>

### Filtrado de anuncios de renta

Busca al mismo tiempo en varias plataformas de renta, filtra anuncios por renta, tiempo de traslado, tipo de vivienda y otros criterios, consolida la información y ordena las recomendaciones.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ayúdame a encontrar vivienda en renta cerca de la estación Zhangjiang Hi-Tech Park en Shanghái. Mi presupuesto es de hasta RMB 4,500, el tiempo de traslado debe ser menor a 40 minutos y prefiero un departamento completo de una recámara. Abre varias plataformas, organiza enlaces de anuncios, precios, superficies y tiempos de traslado, y proporciona una lista priorizada de contactos.",
    },
  ]}
/>

## Investigación y análisis de contenido

La Extensión de navegador Kimi ayuda al agente a explorar automáticamente resultados de búsqueda, abrir páginas de detalle, extraer títulos, datos, comentarios y otra información, y después analizarla y resumirla. Es ideal para tareas de investigación que requieren revisar muchas páginas web.

### Investigación de literatura académica

Busca literatura académica, extrae resúmenes de artículos, métodos principales, conclusiones experimentales y relaciones de citación, y genera una revisión estructurada.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Investiga artículos representativos de los últimos dos años sobre memoria de AI Agent, organiza títulos, autores, resúmenes, métodos principales y enlaces de código abierto, y resume la trayectoria de investigación.",
    },
  ]}
/>

### Búsqueda temática en profundidad

¿Quieres entender un tema que no conoces? Deja que Kimi busque automáticamente, lea los resultados uno por uno y reúna todo en un resumen.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Busca modelos de IA locales que valga la pena usar en 2025 y recupera el texto completo de los 10 primeros resultados.",
    },
  ]}
/>

## Asistencia cotidiana de oficina

Usa las capacidades de automatización de la Extensión de navegador Kimi para encargarte de operaciones web repetitivas y mejorar la eficiencia en el trabajo.

### Comparación de precios en e-commerce

Busca el mismo producto en varias plataformas de e-commerce, compara precios, especificaciones y reseñas de usuarios, y organiza las mejores opciones de compra.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Quiero comprar un monitor 4K de 27 pulgadas con un presupuesto de alrededor de RMB 2,000. Busca y compara opciones en las principales plataformas de e-commerce, organiza precios, marcas y reseñas de usuarios, y recomienda las alternativas con mejor relación calidad-precio.",
    },
  ]}
/>

### Extracción de datos web

Extrae de páginas web datos estructurados como tablas y listas, y organízalos automáticamente en el formato especificado, evitando el trabajo de copiar y pegar manualmente.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ayúdame a abrir esta página web, extraer la tabla de precios de productos que aparece en la página y mostrarla como una lista clara.",
    },
  ]}
/>

## Convertir flujos de trabajo repetitivos en Skills

Cuando un mismo flujo de trabajo debe ejecutarse una y otra vez, no hace falta reescribir la instrucción cada vez. Kimi puede "aprender" el proceso y guardarlo como una Skill; después, basta con escribir `/` para invocarla en cualquier momento.

### Grabar acciones como Skill

Ideal para rutinas web con pasos fijos, como abrir un panel todos los días para exportar datos o llenar siempre el mismo formulario.

1. Escribe `/` en la barra lateral y elige "Grabar acciones como Skill"
2. Realiza los pasos una vez como de costumbre: Kimi registrará cada acción
3. Haz clic en "Detener y generar" y Kimi convertirá la ejecución en una Skill
4. Revisa el nombre, los pasos y los parámetros de la Skill y guárdala (la información sensible, como las contraseñas, se puede marcar como parámetros secretos para completarla al reproducirla)

Después, escribe `/` y elige esa Skill para que Kimi la repita por ti. Puedes editar los pasos y el contenido de la Skill en cualquier momento.

### Convertir un sitio web en Skill

Ideal para sitios web que usas con frecuencia, como un panel de datos habitual o un sistema interno.

Escribe `/` en la barra lateral y elige "Convertir un sitio web en Skill". Kimi analiza automáticamente la estructura y el funcionamiento del sitio, lo empaqueta como una Skill lista para usar y, una vez guardada, puedes invocarla en cualquier momento con `/`.

### Guardar esta sesión como Skill

Si Kimi ya completó una buena ejecución en esta conversación, también puedes guardarla directamente para reutilizarla: escribe `/` y elige "Guardar esta sesión como Skill".

Para ver más casos de uso, consulta el [sitio web oficial de la Extensión de navegador Kimi](https://www.kimi.com/zh-cn/features/webbridge).
