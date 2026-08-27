---
title: "Primeros pasos con Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Primeros pasos con Kimi - Centro de ayuda de Kimi"
  description="Conoce los tres modelos de Kimi (K2.6, K3, K3 Swarm), sus herramientas integradas y sus capacidades multimodales para empezar rápidamente con el chat y la ejecución de tareas."
/>

# Primeros pasos con Kimi

Puedes escribir preguntas en el cuadro de chat, subir archivos o cambiar de modelo según tus necesidades.
Abre [kimi.com](https://www.kimi.com) e intenta enviar un mensaje: saluda a Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "¡Hola, Kimi!",
    },
  ]}
/>

## Elige un modelo

Kimi ofrece varios modelos. Haz clic en el botón para cambiar de modelo que está encima del cuadro de entrada.

| Modelo | Nivel de razonamiento | Ideal para |
|-------|-------------------|----------|
| **K2.6** | Estándar / Alto | Conversaciones rápidas y preguntas y respuestas con menor tiempo de respuesta |
| **K3** | Bajo / Alto / Máximo | Chat y tareas de agente; el más capaz en general |
| **K3 Swarm** | Bajo / Alto / Máximo | Búsqueda a gran escala y procesamiento por lotes, de una sola vez |

<Callout type="tip">
K2.6, K3 y K3 Swarm se facturan con credits. Consulta los [beneficios de la membresía](https://www.kimi.com/help/membership/membership-overview) para obtener más detalles.
</Callout>

### Acerca de Kimi K3

Kimi K3 es actualmente el modelo más potente de Kimi, con 2.8 billones de parámetros, basado en Kimi Delta Attention (KDA) y Attention Residuals, con **visión nativa** y una **ventana de contexto de 1 millón de tokens**. Como el primer modelo abierto de clase 3T del mundo, K3 está diseñado para ofrecer inteligencia de frontera en programación de largo alcance, trabajo de conocimiento y razonamiento, con desempeño líder en programación, ejecución de largo alcance y una amplia variedad de tareas de inteligencia general.

### Herramientas integradas

Disponibles desde el primer momento, sin configuración:

| Herramienta | Descripción |
|------|------------|
| **Web Search** | Búsqueda web en tiempo real para obtener las noticias y la información más recientes |
| **Herramienta Fetch** | Acceso directo a URL específicas (páginas web, documentos, imágenes y otros recursos en línea) |
| **Búsqueda de imágenes** | Búsqueda de texto a imagen e imagen a imagen para encontrar contenido visual rápidamente |
| **IPython** | Ejecuta código Python para análisis y visualización de datos |
| **Memoria** | Memoria inteligente que registra tus preferencias y hábitos personales |

## Capacidades visuales y multimodales
Kimi K3 admite comprensión integral de imágenes, videos y documentos de oficina (PDF/Word/Excel), mediante una **arquitectura multimodal nativa** (no un OCR agregado). Puede analizar directamente el contenido de documentos y realizar tareas ofimáticas de nivel intermedio a avanzado (como escribir fórmulas de Excel o generar esquemas de PPT/código VBA). Combinado con visión nativa y una ventana de contexto de 1 millón de tokens, puede manejar materiales multimodales más largos y complejos.
### Compatibilidad con entrada multimodal
- **Imágenes**: PNG, JPEG, WebP, GIF, etc. (mediante URL, Base64 o carga de archivo local)
- **Video**: MP4, etc. (mediante video_url o secuencias de fotogramas + parámetro fps)
- **Documentos**: PDF, Word, Excel, TXT, Markdown, etc.
- **Recursos en línea**: URL, enlaces a artículos
- **Búsqueda de imágenes**: Sube una imagen para buscar imágenes relacionadas o similares
- **Comprensión de video**: Admite comprensión de video: puede analizar grabaciones de pantalla y replicar la lógica de interacción
- **Programación visual**: Sube capturas o grabaciones de pantalla para generar código de frontend (HTML/Vue/React, etc.); puede reproducir automáticamente páginas web a partir de maquetas de diseño

### Formatos de salida
- Texto sin formato / texto e imagen mezclados: Respuestas conversacionales estándar
- Markdown: Texto enriquecido con encabezados, listas, tablas y enlaces
- Bloques de código: HTML/Vue/React/Python/JSON/Mermaid, etc. (con identificadores de lenguaje)
- Datos estructurados en JSON: Salida forzada en modo JSON
- Diagramas Mermaid: Diagramas de flujo, diagramas de secuencia, mapas mentales, etc.
- Fórmulas matemáticas LaTeX: Expresiones matemáticas en línea y en bloque
- Salida de modo dual (Thinking): Devuelve tanto `reasoning_content` (proceso de razonamiento) como `content` (respuesta final)
- Formato de llamada a herramientas: Formato estándar de Function Calling (para desarrolladores)

### Notas importantes

1. **Salida de archivos**: K3 puede producir documentos editables de principio a fin (como `.pptx`, `.docx`, `.xlsx`, `.pdf`) y otros entregables complejos; K2.6 se enfoca en preguntas y respuestas rápidas, y solo genera texto (como esquemas de PPT, cuerpo de texto de Word o código).

<Callout type="tip">
Consejo: Para generar imágenes, audio o video, haz clic en "+" → Complemento, selecciona la función correspondiente y úsala con **K3**. Para crear documentos editables complejos o ejecutar tareas de varios pasos, recomendamos elegir **K3** o **K3 Swarm** para disfrutar la experiencia completa.
</Callout>

## Sesiones vs. turnos de conversación
Cuando haces clic en "Nuevo chat", piensa que estás iniciando una conversación larga con Kimi.
| Concepto | Analogía | Definición técnica |
|---------|---------|---------------------|
| **Sesión** | Una reunión completa (de principio a fin) | Un proceso de chat completo, con inicio y cierre claros |
| **Turno** | Un intercambio (tú hablas, Kimi responde) | Tu entrada y la respuesta de Kimi forman un intercambio de ida y vuelta |

### Diferencias clave
**Sesión**
- **Memoria continua**: Kimi recuerda todo el contexto dentro del chat actual
- **Contexto entre turnos**: Cada respuesta toma como contexto el contenido previo de la conversación para el siguiente turno
- **Límites definidos**: Hacer clic en "Nuevo chat" = empezar de cero; se borra el contexto anterior
**Turno**
- **Recuento acumulativo**: Turno 1, turno 2, … se agregan de forma incremental
- **Memoria limitada**: Demasiados turnos (por ejemplo, 50 o más) pueden hacer que Kimi "olvide" contenido anterior, especialmente en redacción extensa o tareas con requisitos estrictos
- **Restricción de longitud de contexto**: Limitada por la cantidad de tokens; cuando se acumulan turnos, el contenido más antiguo puede comprimirse

<Callout type="tip">
**Caso límite**: Si una sola pregunta y respuesta cierra la conversación, entonces 1 turno = 1 sesión.
</Callout>

## Por qué importa esta distinción
Dentro de una misma sesión, Kimi responde cada nueva pregunta o instrucción que envías tomando como referencia todos los turnos anteriores. A medida que los turnos se acumulan y el contenido se vuelve más extenso, la calidad de las respuestas puede disminuir gradualmente.

### Escenarios comunes
**Escenario 1: Cambiar de tema**
- Incorrecto: Pedir "ayúdame a calcular mis impuestos" en una sesión donde estabas escribiendo una novela de 30,000 palabras
- Correcto: Inicia una nueva sesión para la pregunta sobre impuestos, así evitas que Kimi mezcle personajes de la novela con conceptos fiscales
**Escenario 2: Procesamiento de documentos largos**
- Después de decenas de turnos, Kimi puede "olvidar" reglas o resúmenes de archivos establecidos al inicio
- Solución: Resume de forma proactiva a mitad de la tarea ("Resume nuestro plan hasta ahora") o inicia una nueva sesión
**Escenario 3: Entender los límites del producto**
- Los límites de longitud de contexto se miden en tokens, pero en términos cotidianos puedes pensarlos como "turnos"
- Si ves el aviso "Inicia un nuevo chat", significa que la sesión actual tiene demasiados turnos
## Mejores prácticas

<Callout type="tip">
**Inicia una nueva sesión para cada tarea**: Las tareas independientes —redacción de ensayos, investigación, depuración— deben tener su propia sesión para evitar interferencias de contexto.
</Callout>

<Callout type="tip">
**Resume periódicamente en sesiones largas**: Después de más de 20 turnos, pide proactivamente a Kimi que resuma la información clave para evitar pérdida de datos.
</Callout>

<Callout type="tip">
**Limpia cuanto antes la información sensible**: El historial de chat se conserva; elimina la sesión completa después de manejar contenido privado.
</Callout>
