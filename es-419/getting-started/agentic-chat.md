---
title: "Primeros pasos con Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Primeros pasos con Kimi - Centro de ayuda de Kimi"
  description="Conoce los tres modelos de Kimi (K2.6, K3, K3 Swarm), sus herramientas integradas y sus capacidades multimodales para empezar a chatear y ejecutar tareas rápidamente."
/>

# Primeros pasos con Kimi

Puedes escribir preguntas en el cuadro de chat, subir archivos o cambiar entre modelos según lo que necesites.
Abre [kimi.com](https://www.kimi.com) y prueba a enviar un mensaje y saluda a Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "¡Hola, Kimi!",
    },
  ]}
/>

## Elegir un modelo

Kimi ofrece varios modelos. Haz clic en el botón de cambio de modelo, situado encima del cuadro de entrada, para cambiar.

| Modelo | Fuerza de pensamiento | Ideal para |
|-------|-------------------|----------|
| **K2.6** | Standard / High | Conversación rápida y preguntas y respuestas con respuestas más ágiles |
| **K3** | Low / High / Max | Tareas de chat y de Agent; el más capaz en general |
| **K3 Swarm** | Low / High / Max | Búsqueda a gran escala y procesamiento por lotes, completado de una sola vez |

<Callout type="tip">
K2.6 no consume créditos; K3 y K3 Swarm se cobran por créditos. Consulta los [beneficios de membresía](https://www.kimi.com/help/membership/membership-overview) para más detalles.
</Callout>

### Acerca de Kimi K3

Kimi K3 es actualmente el modelo más potente de Kimi, con 2,8 billones de parámetros, construido sobre Kimi Delta Attention (KDA) y Attention Residuals, con **visión nativa** y una **ventana de contexto de 1 millón de tokens**. Como el primer modelo abierto de clase 3T del mundo, K3 está diseñado para la inteligencia de vanguardia en codificación de largo alcance, trabajo del conocimiento y razonamiento, alcanzando un rendimiento líder en codificación, ejecución de largo alcance y una amplia gama de tareas de inteligencia general.

### Herramientas integradas

Disponibles de inmediato, sin necesidad de configuración:

| Herramienta | Descripción |
|------|------------|
| **Web Search** | Búsqueda web en tiempo real para obtener las noticias e información más recientes |
| **Fetch Tool** | Acceso directo a URL específicas (páginas web, documentos, imágenes y otros recursos en línea) |
| **Image Search** | Búsqueda de texto a imagen e imagen a imagen para descubrir contenido visual con rapidez |
| **IPython** | Ejecuta código Python para análisis y visualización de datos |
| **Memory** | Memoria inteligente que registra tus preferencias y hábitos personales |

## Capacidades visuales y multimodales
Kimi K3 admite la comprensión de todo tipo de escenarios con imágenes, videos y documentos de oficina (PDF/Word/Excel), mediante una **arquitectura multimodal nativa** (no un OCR añadido). Puede analizar directamente el contenido de los documentos y realizar tareas de oficina de nivel intermedio a avanzado (como escribir fórmulas de Excel o generar esquemas de PPT o código VBA). Combinado con la visión nativa y una ventana de contexto de 1 millón de tokens, puede procesar materiales multimodales más largos y complejos.
### Entrada multimodal compatible
- **Imágenes**: PNG, JPEG, WebP, GIF, etc. (mediante URL, Base64 o subida de archivo local)
- **Video**: MP4, etc. (mediante video_url o secuencias de fotogramas de imagen + parámetro fps)
- **Documentos**: PDF, Word, Excel, TXT, Markdown, etc.
- **Recursos en línea**: URL, enlaces a artículos
- **Búsqueda de imágenes**: Sube una imagen para buscar imágenes relacionadas o similares
- **Comprensión de video**: Admite la comprensión de video; puede analizar grabaciones de pantalla y replicar la lógica de interacción
- **Codificación visual**: Sube capturas de pantalla o grabaciones de pantalla para generar código frontend (HTML/Vue/React, etc.); puede reproducir automáticamente páginas web a partir de maquetas de diseño

### Formatos de salida
- Texto simple / texto e imágenes combinados: Respuestas conversacionales estándar
- Markdown: Texto enriquecido con encabezados, listas, tablas y enlaces
- Bloques de código: HTML/Vue/React/Python/JSON/Mermaid, etc. (con identificadores de lenguaje)
- Datos estructurados JSON: Salida en modo JSON forzado
- Diagramas Mermaid: Diagramas de flujo, diagramas de secuencia, mapas mentales, etc.
- Fórmulas matemáticas LaTeX: Expresiones matemáticas en línea y de bloque
- Salida de modo dual (Thinking): Devuelve tanto `reasoning_content` (proceso de pensamiento) como `content` (respuesta final)
- Formato de llamada a herramientas: Formato estándar de Function Calling (para desarrolladores)

### Notas importantes

1. **Salida de archivos**: K3 puede producir documentos editables de extremo a extremo (como `.pptx`, `.docx`, `.xlsx`, `.pdf`) y otros entregables complejos; K2.6 se enfoca en preguntas y respuestas rápidas y solo genera texto (como esquemas de PPT, cuerpo de texto de Word o código).

<Callout type="tip">
Consejo: Para generar imágenes, audio o video, haz clic en «+» → Plugin, selecciona la función correspondiente y úsala con **K3**. Para crear documentos editables complejos o ejecutar tareas de varios pasos, te recomendamos elegir **K3** o **K3 Swarm** para disfrutar de la experiencia completa.
</Callout>

## Sesiones vs. turnos de conversación
Cuando haces clic en «Nuevo chat», piensa en ello como el inicio de una larga conversación con Kimi.
| Concepto | Analogía | Definición técnica |
|---------|---------|---------------------|
| **Sesión** | Una reunión completa (de principio a fin) | Un proceso de chat completo con un inicio y un final claros |
| **Turno** | Un intercambio (tú hablas, Kimi responde) | Tu entrada y la respuesta de Kimi forman un ida y vuelta |

### Diferencias clave
**Sesión**
- **Memoria continua**: Kimi recuerda todo el contexto dentro del chat actual
- **Contexto entre turnos**: Cada respuesta toma como referencia el contenido previo de la conversación para el siguiente turno
- **Límites definidos**: Hacer clic en «Nuevo chat» = empezar de cero; el contexto anterior se borra
**Turno**
- **Conteo acumulativo**: Turno 1, Turno 2, … se van sumando de forma incremental
- **Memoria limitada**: Demasiados turnos (por ejemplo, más de 50) pueden hacer que Kimi «olvide» contenido anterior, sobre todo en escritura extensa o tareas con requisitos estrictos
- **Restricción de longitud del contexto**: Limitada por la cantidad de tokens; al acumularse los turnos, el contenido más antiguo puede comprimirse

<Callout type="tip">
**Caso límite**: Si una sola pregunta y respuesta da por concluida la conversación, entonces 1 turno = 1 sesión.
</Callout>

## Por qué importa esta distinción
Dentro de una misma sesión, cada nueva pregunta o instrucción que envías se responde tomando como referencia todos los turnos anteriores. A medida que los turnos se acumulan y el contenido se alarga, la calidad de las respuestas puede ir disminuyendo.

### Escenarios comunes
**Escenario 1: Cambiar de tema**
- Incorrecto: Pedir «ayúdame a calcular mis impuestos» en una sesión donde has estado escribiendo una novela de 30.000 palabras
- Correcto: Inicia una nueva sesión para la pregunta de impuestos, para evitar que Kimi confunda personajes de la novela con conceptos tributarios
**Escenario 2: Procesamiento de documentos largos**
- Después de decenas de turnos, Kimi puede «olvidar» reglas o resúmenes de archivos establecidos al inicio
- Solución: Resume de forma proactiva a mitad de la tarea («Resume nuestro plan hasta ahora») o inicia una nueva sesión
**Escenario 3: Comprender los límites del producto**
- Los límites de longitud del contexto se miden en tokens, pero en términos cotidianos, piénsalo como «turnos»
- Si ves un aviso de «Iniciar un nuevo chat», significa que la sesión actual tiene demasiados turnos
## Mejores prácticas

<Callout type="tip">
**Inicia una nueva sesión para cada tarea**: Las tareas independientes —redacción de ensayos, investigación, depuración— deben tener cada una su propia sesión para evitar interferencias de contexto.
</Callout>

<Callout type="tip">
**Resume periódicamente en sesiones largas**: Después de más de 20 turnos, pídele de forma proactiva a Kimi que resuma la información clave para evitar la pérdida de datos.
</Callout>

<Callout type="tip">
**Limpia la información sensible con prontitud**: El historial de chat se conserva; elimina toda la sesión después de manejar contenido privado.
</Callout>
