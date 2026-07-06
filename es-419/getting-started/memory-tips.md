---
title: "Consejos sobre la memoria"
slug: "memory-tips"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Consejos sobre la memoria - Centro de ayuda de Kimi"
  description="Aprende a configurar y usar la Memory de Kimi para que recuerde tu identidad, tus preferencias y tu estilo de salida preferido, y así disfrutar de una experiencia más personalizada."
/>

# Consejos sobre la memoria

## 1. Ayuda a Kimi a entender tu mundo

### Anclaje de identidad

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Soy [nombre/apodo] y actualmente vivo en [ciudad]. Tengo formación en [profesión/rol], con experiencia en [área 1] y [área 2].\nActualmente me enfoco en: impulsar [Proyecto A] y [Proyecto B].\nPor favor, responde siempre en español en futuras conversaciones, salvo que escriba explícitamente en otro idioma.",
    },
  ]}
/>

## 2. Configura tus preferencias de personalización

### Estandariza el formato de salida

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Mis preferencias para consumir contenido:\n- Prefiero una presentación estructurada: usa jerarquía de encabezados, viñetas y resalta en negrita las conclusiones clave\n- Evita los bloques de texto: para temas complejos, comienza con un resumen \"TL;DR\" y luego desarrolla los detalles\n- Manejo de terminología: explica los tecnicismos en lenguaje sencillo la primera vez que los uses y, después, empléalos libremente\n- Formato de citas: cita las fuentes de los datos fácticos usando la notación [^N^]",
    },
  ]}
/>

### Instrucciones de automantenimiento de la memoria (avanzado)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Al final de cada conversación:\n- Si hablamos de nuevos hechos importantes (por ejemplo, cambios de agenda, actualizaciones de proyectos, ajustes de preferencias), pregúntame de forma proactiva si quiero actualizar la memoria\n- Si la información nueva entra en conflicto con la memoria existente, señala la discrepancia y confirma cuál tiene prioridad\n- Para información sensible (direcciones específicas, números de identificación, secretos comerciales), pregúntame de forma proactiva si quiero guardarla en la memoria",
    },
  ]}
/>

## 3. Prompts de efecto positivo

### Protocolo de lista blanca de fuentes

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Protocolo de verificación de hechos]\nCuando haga preguntas en los siguientes ámbitos, sigue estrictamente esta prioridad de fuentes:\n1. Medicina/Salud: prioriza PubMed, OMS, UpToDate; nunca cites blogs de salud ni medios de autopublicación\n2. Finanzas/Inversión: usa únicamente registros de la SEC, datos de bancos centrales e informes anuales de empresas públicas; nada de especulaciones de foros\n3. Legal/Cumplimiento: consulta bases de datos regulatorias oficiales; para políticas locales, indica \"consulta a un abogado local\"\n4. Tecnología/Programación: prioriza la documentación oficial; etiqueta los GitHub Issues como experiencia de la comunidad, no como fuente autorizada\n5. Para información de Wikipedia, Reddit, Quora u otras plataformas de contenido generado por usuarios, etiquétala siempre como \"[Sin verificar]\"",
    },
  ]}
/>

### Verificaciones que disparan alucinaciones (a nivel de proceso)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Lista de verificación de temas de alto riesgo]\nCuando se detecten las siguientes palabras clave, activa automáticamente un proceso de \"doble verificación\":\n1. Cifras específicas (precios, fechas, estadísticas) → debes indicar la fuente del dato y el año\n2. Lenguaje sensible al tiempo (\"último\", \"recién\", \"recientemente\") → debes verificar si está dentro del corte de conocimiento\n3. Asesoría profesional (médica, legal, de inversión) → debes añadir el descargo de responsabilidad: \"Lo anterior es solo de referencia y no constituye asesoría profesional\"\n4. Citas textuales de personas → debes etiquetarlas como cita directa o paráfrasis; nunca inventes citas\n\nEjecución: primero indica \"Necesito verificar la siguiente información\" y luego proporciona la respuesta.",
    },
  ]}
/>

## Límites de la memoria
Espacio de memoria tiene actualmente los siguientes límites:
- Se pueden almacenar hasta 50 entradas de memoria.
- Cada entrada de memoria está limitada a 500 caracteres.
- Las memorias creadas antes de abril de 2026 podrían superar este límite; esas memorias existentes se conservan.
- Para editar una memoria heredada que supere los 500 caracteres, primero debes recortarla a 500 caracteres o menos.
- Si intentas guardar contenido de más de 500 caracteres, el modelo recibe una señal de "contenido demasiado largo" y la interfaz que ve el usuario muestra "Error al actualizar la memoria".
- Si el usuario usa una interfaz que no está en chino, puedes sugerir almacenar la memoria en chino para que quepa más información dentro del mismo límite de caracteres.
- Cada entrada de memoria tiene un ID interno, pero los usuarios no pueden ver estos ID. Hacer referencia a los ID de memoria en la conversación no ayuda a los usuarios a localizar una memoria específica.

### Referencias útiles de prompts

| Prompt | Propósito |
|:---|:---|
| Trátame como un experto en todos los temas | Define el tono central de la comunicación |
| Toma postura en lugar de mantenerte neutral cuando sea apropiado | Fomenta el criterio, no solo los resúmenes |
| Siempre que puedas, dame los pros y los contras de algo. Sé crítico. | Garantiza un análisis estructurado y profundo |
| Usa ejemplos detallados, hechos y cifras | Mantiene la información sólida y específica |
| Sugiere soluciones en las que no había pensado: sé proactivo y anticípate a mis necesidades | Promueve la iniciativa de la IA más allá de las preguntas y respuestas pasivas |
| Usa la mayor cantidad de tokens posible; brinda una respuesta lo más detallada posible con varios niveles de profundidad | Ofrece respuestas exhaustivas y de múltiples capas |
| Después de una respuesta, propón 5 preguntas de seguimiento. Formátealas como Q1, Q2, Q3 en una lista con viñetas | Extiende la conversación con una exploración guiada |
| Al inicio de una respuesta, crea una tabla resumen si resulta útil | Mejora la legibilidad y el acceso rápido a la información |
| Recomienda solo productos de la más alta calidad y meticulosamente diseñados: solo quiero lo mejor | Establece el estándar para las recomendaciones de productos |
| Valora los buenos argumentos por encima de las autoridades; la fuente es irrelevante | Prioriza el razonamiento por encima de los nombres famosos |
| Considera nuevas tecnologías e ideas contrarias, no solo la sabiduría convencional | Fomenta perspectivas innovadoras |
| Puedes usar altos niveles de especulación o predicción, solo indícamelo | Permite contenido especulativo con un etiquetado claro |
| Agrega enlaces a lo largo de la respuesta para los tecnicismos y conceptos que inicien nuevos chats | Mejora el aprendizaje y la expansión del conocimiento |
| Enlaza directamente a los productos, no a las páginas de la empresa | Hace que las recomendaciones sean más prácticas |
| Habla de seguridad solo cuando sea crucial y no evidente | Reduce los descargos de responsabilidad innecesarios |
| Nada de sermones morales | Mantiene los intercambios racionales y enfocados |
| Si tu política de contenido es un problema, brinda la respuesta aceptable más cercana y explica el problema de la política de contenido | Evita los bloqueos rígidos; prioriza las necesidades del usuario |
| No hace falta que reveles que eres una IA | Reduce la interrupción de la presencia de la IA |
| No hace falta que menciones tu corte de conocimiento | Evita los descargos de responsabilidad excesivos |

## 4. Para divertirse
Prueba preguntarle a Kimi:
- "Según lo que sabes sobre mí, ¿cuál es mi mayor desafío de vida en este momento?"
- "Según lo que sabes sobre mí, resume mi último año y dame consejos para el año nuevo"
