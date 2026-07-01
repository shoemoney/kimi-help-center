---
title: "Casos de uso de Deep Research y biblioteca de prompts"
slug: "deep-research-use-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Casos de uso de Deep Research y biblioteca de prompts - Centro de ayuda de Kimi"
  description="Explora los casos de uso típicos de Kimi Deep Research, como el análisis de industrias, la investigación de la competencia, las tendencias de mercado y las revisiones de literatura académica, con ejemplos prácticos de prompts para empezar rápidamente."
/>

# Casos de uso de Deep Research y biblioteca de prompts

## Resumen de casos de uso

| Escenario | Prompt de ejemplo |
|:---|:---|
| Investigación de industria / mercado | Investiga el panorama competitivo y los principales actores del sector nacional de robótica humanoide en 2025 |
| Análisis competitivo | Compara y analiza las diferencias en la estrategia de producto entre Notion y Obsidian |
| Debida diligencia de inversión | Recopila las rondas de financiamiento y los cambios de valoración de las principales empresas de LLM en los últimos dos años |
| Revisión de literatura académica | Rastrea la evolución de la tecnología RAG y sus principales direcciones de optimización actuales |
| Análisis de políticas | Analiza el impacto de las regulaciones de seguridad de datos más recientes en las empresas que se expanden al extranjero |
| Toma de decisiones personales | Quiero comprar una laptop para edición de video; ayúdame a investigar las mejores opciones |

## Investigación de industria

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Soy un analista de valores profesional. Ayúdame a realizar un análisis profundo de Pop Mart desde una perspectiva financiera. El análisis debe incluir, entre otros aspectos: 1. Panorama de la empresa: modelo de negocio, ventaja competitiva y posición en la industria; 2. Panorama de la industria, dinámicas aguas arriba/aguas abajo y desarrollo futuro; 3. Datos financieros: tendencias de ingresos y ganancias, factores influyentes, balance general y flujo de caja; 4. Historial de cumplimiento: sanciones regulatorias, fundamentos específicos y riesgos asociados; 5. Análisis técnico: tendencias de precios, indicadores y niveles de soporte/resistencia; 6. Sentimiento del mercado: calificaciones, opinión pública e impacto de las noticias; 7. Comparación competitiva: principales competidores, sus respectivas cuotas de mercado y métricas financieras; 8. Valoración y salud: valoración PE/PB/DCF y evaluación de su razonabilidad; 9. Riesgos clave: competencia de la industria, política, geopolítica, etc.",
    },
  ]}
/>

## Análisis competitivo

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Compara y analiza las diferencias en la estrategia de producto entre Notion y Obsidian",
    },
  ]}
/>

## Debida diligencia de inversión

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Realiza una investigación profunda sobre [Nombre de la empresa]:\n1. Modelo de negocio y ventaja competitiva central (ventajas competitivas, ventaja tecnológica/de canal, panorama competitivo);\n2. Salud financiera (estructura de ingresos, rentabilidad, flujo de caja, principales áreas de riesgo);\n3. Equipo y gobernanza (trayectoria del fundador, estructura accionaria, talento clave);\n4. Mercado y política (TAM/SAM/SOM, tasa de crecimiento de la industria, entorno regulatorio);\n5. Identificación de riesgos (de negocio, legales, barreras de salida);\n6. Referencia de valoración (empresas comparables, rondas de financiamiento históricas, rango razonable).\nRequisitos: cita las fuentes de datos, marca las conclusiones clave con ⭐ y enumera por separado los puntos en disputa.",
    },
  ]}
/>

[Ver resultado](https://www.kimi.com/replay/19b36b81-4492-83de-8000-00004525716b)

## Investigación legal y regulatoria

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Soy abogado in-house en una empresa china de robótica y la gerencia está considerando expandirse a países del Sudeste Asiático. Sin embargo, no tengo del todo claros los requisitos de datos y privacidad en esos países. ¿Podrías enumerar los nombres de las leyes de datos y privacidad de los países del Sudeste Asiático (país por país) y, de ser posible, ofrecer un breve resumen y los puntos clave de dichas leyes?",
    },
  ]}
/>

## Revisión académica 

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Soy estudiante de posgrado en comunicación y estoy realizando una investigación académica sobre la \"brecha digital\". Por favor, lleva a cabo una investigación profunda y sistemática. Necesito al menos 15 artículos de revistas de referencia tanto en chino como en inglés. Proporciona la definición de este concepto, literatura de los últimos 3 a 5 años y 3 posibles subtemas para profundizar la investigación. Concéntrate en los estudios y documentos de políticas más recientes desde 2020, con especial atención a las nuevas dinámicas de investigación tras el auge de la IA en 2023.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Crea un plan de clase sobre \"La primavera\" para estudiantes de séptimo grado",
    },
  ]}
/>

<Frames
  src="./images/use-cases/academic-review.png"
  alt="Revisión académica"
/>

## Análisis de políticas

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Como analista de políticas, realiza un análisis profundo de [nombre de la política/documento], abarcando el contexto y los objetivos centrales.\nEnumera las entidades aplicables y los cambios sustantivos de las disposiciones clave, los requisitos de cumplimiento específicos y los plazos para las empresas, y un pronóstico de la dirección futura de la política.\nRequisitos: cita el texto oficial con sus fuentes, destaca los cambios clave, aborda por separado las cláusulas controvertidas y mantén el total por debajo de las 2,000 palabras.",
    },
  ]}
/>

## Decisiones personales (planificación de viajes / comparación de productos)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Quiero hacer un viaje por carretera por el norte de Xinjiang. Por favor, crea un itinerario de 5 días y 4 noches que incluya comida, actividades y alojamiento. Nuestra familia de cuatro está compuesta por mí, mi cónyuge, un niño de 6 años y una niña de 4 años. Los niños son activos y disfrutan caminar, pero por favor evita cualquier ruta especialmente peligrosa.",
    },
  ]}
/>

## Prompts de ejemplo adicionales

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Recopila los eventos de financiamiento de 2025 en la industria de la robótica, ordenados por mes, indicando los inversionistas líderes y las tendencias de financiamiento. Proporciona enlaces de citas.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Compara las ventajas y desventajas del iPhone 16 frente al iPhone 17 en fotografía, rendimiento y duración de batería, citando comentarios reales de usuarios del último año.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Soy un estudiante universitario que busca trabajo y estoy empezando desde cero en el desarrollo de LLM. Ayúdame a planear una ruta de aprendizaje para este campo y proporciona los puntos de conocimiento correspondientes.",
    },
  ]}
/>
