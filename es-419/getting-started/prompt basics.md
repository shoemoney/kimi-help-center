---
title: "Conceptos básicos de los prompts"
slug: "what-is-prompt"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Conceptos básicos de los prompts - Centro de ayuda de Kimi"
  description="Un prompt es la instrucción de texto que le envías a Kimi: puede ser una pregunta, una descripción, un conjunto de requisitos o incluso un resumen completo de una tarea. Kimi usa tu..."
/>

# Conceptos básicos de los prompts

<Callout type="info">
Un prompt es la instrucción de texto que le envías a Kimi: puede ser una pregunta, una descripción, un conjunto de requisitos o incluso un resumen completo de una tarea. Kimi usa tu prompt para entender tu intención, organizar una respuesta y ejecutar tareas.

En pocas palabras: **la forma en que preguntas determina cómo responde Kimi.** Un prompt claro y específico casi siempre da como resultado una respuesta más precisa y valiosa.
</Callout>

## Cuatro elementos clave de un buen prompt

### 1. Define el rol y el contexto

Decirle a Kimi quién eres y en qué situación te encuentras lo ayuda a ajustar la profundidad y el tono adecuados.

| Prompt vago | Prompt mejorado |
|-------------|--------------|
| Escribe un artículo sobre IA | Soy editor de un medio de tecnología. Necesito un artículo explicativo sobre IA de 2,000 palabras dirigido al público general, escrito en un estilo accesible y atractivo |
| Ayúdame a analizar datos | Soy analista de mercado. Analiza las tasas de conversión por canal en este archivo de Excel, enfocándote en los cambios mes a mes |

### 2. Describe la tarea de forma específica

Mientras más específica sea tu descripción, menos ciclos de revisión necesitarás. Una buena descripción de tarea suele incluir:

- **Qué hacer**: Una acción clara (analizar, resumir, traducir, generar, comparar…)
- **Formato de salida**: Tabla, lista, párrafo, código, Markdown…
- **Alcance y restricciones**: Cantidad de palabras, número de elementos, rango de tiempo, alcance geográfico…
- **Requisitos de calidad**: Tono académico, conversacional, conciso, detallado…

<ComparisonBlock
  wrong={"Resume este artículo"}
  correct={"Resume este artículo en 3 viñetas, cada una de no más de 50 palabras, en español"}
/>

### 3. Proporciona ejemplos o referencias

Cuando tienes expectativas específicas de formato, darle a Kimi un ejemplo (few-shot) resulta muy eficaz:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Por favor, organiza las notas de la reunión con este formato:\n\nTema de la reunión: xxx\nAsistentes: xxx\nDecisiones clave:\nxxx\nxxxTareas pendientes:\n[ ] xxx (Responsable: xxx, Fecha límite: xxx)",
    },
  ]}
/>

### 4. Divide las tareas complejas en pasos
Para las tareas complejas, divide el trabajo en pasos más pequeños y guía a Kimi a través de ellos:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Necesito un informe de análisis competitivo. Por favor, sigue estos pasos:\nEnumera los 3 principales competidores nacionales y sus funciones clave\nCompara sus estrategias de precios\nAnaliza las fortalezas y debilidades de cada producto\nOfrece recomendaciones de diferenciación para nuestro producto",
    },
  ]}
/>

## Consejos prácticos
### Usa preguntas de seguimiento e iteración
¿No te convenció la primera respuesta? Solo haz una pregunta de seguimiento, sin necesidad de repetir todo el contexto:
- "Por favor, desarrolla más el punto 2"
- "Haz el tono más formal"
- "Agrega las fuentes de los datos"
- "Vuelve a analizarlo desde otro ángulo"
### Aprovecha los archivos y los enlaces
Kimi admite la carga de archivos PDF, documentos de Word, archivos de Excel, imágenes y más. También puedes pegar URLs directamente. Combinar archivos con tu prompt aumenta enormemente la eficiencia:
| Tarea | Ejemplo de prompt |
|------|---------------|
| Resumir PDF | "Resume los puntos clave de este PDF" |
| Analizar datos | "Analiza las tendencias de ventas a partir de estos datos de Excel" |
| Extraer de una URL | "Lee este artículo del enlace y extrae las conclusiones clave" |

### Especifica el formato de salida
Dile a Kimi exactamente qué formato quieres:
| Necesidad | Ejemplo de prompt |
|------|---------------|
| Tabla comparativa | "Compara las ventajas y desventajas de A y B en una tabla" |
| Salida de código | "Implementa esto en Python con comentarios" |
| Lista estructurada | "Organízalo como una lista numerada, cada elemento con menos de 20 palabras" |
| Markdown | "Devuélvelo en formato Markdown con jerarquía de encabezados" |

### Usa la memoria para preferencias permanentes
Si tienes preferencias y requisitos recurrentes, usa la función **Memoria** de Kimi para recordarlos a largo plazo:
- "Recuerda que soy ingeniero de frontend y prefiero el stack de React"
- "Responde siempre en español usando formato Markdown"
- "Incluye ejemplos de código cuando respondas preguntas técnicas"

<Callout type="tip">
De esta forma no tienes que repetirte: Kimi aplicará automáticamente estas preferencias en conversaciones futuras.
</Callout>

## Errores comunes
| Error | Mejor enfoque |
|---------|----------------|
| Meter varias tareas no relacionadas en un solo mensaje | Inicia una nueva sesión para cada tarea independiente y mantén el contexto limpio |
| Prompts demasiado vagos (p. ej., "escríbeme algo") | Especifica qué escribir, para quién, en qué estilo y con qué extensión |
| Esperar un resultado perfecto al primer intento | Genera primero un borrador y luego itera con preguntas de seguimiento |
| No verificar la información generada por la IA | Verifica siempre las fechas, los datos y las afirmaciones factuales |

## Plantillas para empezar rápido
Aquí tienes algunas plantillas de prompts listas para usar: cópialas, personalízalas y adelante:
**Redacción**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Escribe un [tipo de artículo] sobre [tema] para [público objetivo], de aproximadamente [xxx] palabras.\nRequisitos: [estilo/formato/aspectos en los que enfocarse]",
    },
  ]}
/>

**Análisis**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analiza [tema], enfocándote en [dimensiones clave].\nFormato de salida: [tabla/gráfico/informe]\nIncluye conclusiones y recomendaciones.",
    },
  ]}
/>

**Traducción**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Traduce lo siguiente al [idioma destino], manteniendo un tono [académico/conversacional/empresarial].\nIncluye el término original entre paréntesis para la terminología especializada.",
    },
  ]}
/>

<Callout type="info">
Domina estos conceptos y técnicas clave, y colaborarás con Kimi de forma mucho más eficaz, convirtiendo la IA en una verdadera herramienta de productividad.
</Callout>
