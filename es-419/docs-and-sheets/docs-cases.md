---
title: "Casos de uso y biblioteca de prompts de Kimi Docs"
slug: "docs-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Casos de uso y biblioteca de prompts de Kimi Docs - Centro de ayuda de Kimi"
  description="Casos de uso y prompts de ejemplo para Kimi Docs, desde la revisión de manuscritos hasta la traducción profesional y el diseño de PDF."
/>

# Casos de uso y biblioteca de prompts de Kimi Docs

<Callout type="info">
Casos de uso y prompts de ejemplo para Kimi Docs, desde la revisión de manuscritos hasta la traducción profesional y el diseño de PDF.
</Callout>

## Experto en revisiones

Como un revisor de manuscritos meticuloso, Kimi desglosa los comentarios de revisión, identifica los pasajes pertinentes de tu documento e inserta automáticamente comentarios y sugerencias detallados.

**Prompt de ejemplo**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Eres un revisor de manuscritos sénior especializado en ciudades inteligentes y planificación regional.\nA continuación encontrarás un conjunto de comentarios de revisión específicos. Analiza con cuidado estos problemas,\nlocaliza los párrafos o figuras correspondientes en el documento de Word adjunto e\ninserta los problemas junto con sugerencias de revisión detalladas en forma de comentarios. Nota: los\ncomentarios deben leerse como si los hubiera escrito una persona, no una IA — evita el formato de viñetas.\n\nEntrega el manuscrito original con los comentarios detallados.",
    },
  ]}
/>

## Traducción profesional

Como un traductor incansable, Kimi traduce un PDF en inglés de 50 páginas al francés, página por página, conservando todas las fórmulas y el código en el resultado.

**Prompt de ejemplo**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Busca el PDF de la primera tarea del curso CS336 de Stanford en inglés y, a continuación,\nconviértelo en un PDF en francés. Conserva todo el código y todas las fórmulas matemáticas en la versión en francés.\nLa traducción debe ser fluida — no omitas ni añadas ningún contenido.",
    },
  ]}
/>

<Frames
  src="./images/docs-cases/translate.png"
  alt="Traducir"
/>

## Servicio de diseño y publicación de PDF

Como un diseñador de maquetación, Kimi te ayuda a planear los elementos visuales, organiza automáticamente texto e imágenes y genera carpetas de PDF con calidad de publicación.

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Eres una IA de edición curatorial especializada en arte moderno, en particular en los estudios sobre Picasso.\nTu tarea: recurrir a una amplia iconografía para ayudar al público a comprender por qué hay que revisitar a Picasso\nuna y otra vez.\n\nGenera directamente un PDF.\n\nI. Requisitos fundamentales\nIconografía abundante\nCada período, cada referencia a un artista y cada movimiento debe ir acompañado de imágenes\nPrioriza las imágenes de fuentes originales\nUsa imágenes generadas por IA de alta fidelidad solo cuando no haya imágenes de fuentes disponibles\n\nII. Sistema visual\nLogotipo de MAP como marca de agua a página completa\nComposición asimétrica\nCuadrícula nítida con una ruptura local controlada\nBlanco y negro de alto contraste + toques de colores primarios\n\nIII. Estructura del contenido (genera todas las secciones)\n1. Portada\nPicasso\nSubtítulo de la exposición (English & Chinese)\nMarca de agua del logotipo de MAP\n\n2. Por qué Picasso (con imágenes)\nRetratos de Picasso de distintos períodos\nObras de distintos períodos yuxtapuestas\n\n3. Períodos y movimientos (centrado en la imagen)\nCada período debe incluir de 8 a 12 imágenes:\nPeríodo azul\nPeríodo rosa\nCubismo (analítico / sintético)\nGuerra y política\nExperimentos tardíos\n\nTipos de imagen:\nObra completa\nRecortes de detalle\nDiagramas de deconstrucción estructural (generados por IA cuando sea necesario)\n\n4. Obras clave\nNo menos de 25 obras\nAlgunas obras pueden ocupar páginas completas\nÉnfasis en la estructura, la perspectiva y la deconstrucción\n\n5. Cómo mirar a Picasso\nExplicaciones comparativas basadas en imágenes\nTratamientos en paralelo de un mismo tema\n\n6. Sala de exposición y ritmo\nZonas de visita de alta densidad\nZonas de amortiguación para la reflexión\n\n7. La posición contemporánea de MAP\nPor qué Shanghái necesita a Picasso\nPor qué este momento es importante",
    },
  ]}
/>

## Más escenarios y prompts de ejemplo

| Escenario | Prompt de ejemplo |
|------|-----------|
| **Informe profesional** | Redacta un "Libro blanco de la industria de la economía de baja altura de China 2026" en Word, con estilo McKinsey, que abarque el tamaño del mercado, el panorama competitivo, el contexto normativo y recomendaciones de inversión |
| **Revisión de contratos** | [Sube contrato.docx] Revisa este contrato desde la perspectiva de un abogado, identifica las cláusulas de riesgo e inserta comentarios |
| **Modelado financiero** | Crea un modelo de proyección financiera SaaS a tres años en Word, que incluya proyecciones de ingresos, estructura de costos y flujo de caja |
| **Resumen de contenido extenso** | Sintetiza este artículo académico de 30,000 palabras en un resumen ejecutivo de 5,000 palabras en formato Word |
| **Comparación de varias versiones** | [Sube el Contrato V1 y el V2] Compara las versiones, enumera todos los cambios con descripciones de su impacto y entrega el resultado en Word |
