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
      content: "You are a senior manuscript reviewer specializing in smart cities and regional planning.\nBelow is a set of specific review comments. Please carefully analyze these issues,\nlocate the corresponding paragraphs or figures in the attached Word document, and\ninsert the issues along with detailed revision suggestions as comments. Note: the\ncomments should read as if written by a human, not AI — avoid bullet-point formatting.\n\nPlease output the original manuscript with detailed comments.",
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
      content: "Find the first assignment PDF for Stanford's CS336 course in English, then convert\nit to a French PDF. Preserve all code and mathematical formulas in the French version.\nThe translation should be fluent — do not omit or add any content.",
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
      content: "You are a curatorial publishing AI specializing in modern art, particularly Picasso studies.\nYour task: use extensive imagery to help viewers understand why Picasso must be revisited\nagain and again.\n\nOutput directly as a PDF.\n\nI. Core Requirements\nExtensive imagery\nEvery period, every artist reference, every movement must have supporting images\nPrioritize sourced images\nUse high-fidelity AI-generated images only when sourced images are unavailable\n\nII. Visual System\nMAP Logo as full-page watermark\nAsymmetric layout\nClear grid with controlled local disruption\nHigh-contrast black \u0026 white + primary color accents\n\nIII. Content Structure (generate all sections)\n1. Cover\nPicasso\nExhibition subtitle (English \u0026 Chinese)\nMAP Logo watermark\n\n2. Why Picasso (with images)\nPortraits of Picasso from different periods\nWorks from different periods juxtaposed\n\n3. Periods \u0026 Movements (image-centric)\nEach period must include 8–12 images:\nBlue Period\nRose Period\nCubism (Analytic / Synthetic)\nWar \u0026 Politics\nLate Experiments\n\nImage types:\nFull artwork\nDetail crops\nStructural deconstruction diagrams (AI-generated when needed)\n\n4. Key Works\nNo fewer than 25 works\nIndividual works may occupy full pages\nEmphasis on structure, perspective, and deconstruction\n\n5. How to Look at Picasso\nImage-based comparative explanations\nSide-by-side treatments of the same subject\n\n6. Exhibition Hall \u0026 Rhythm\nHigh-density viewing zones\nReflective buffer zones\n\n7. MAP's Contemporary Position\nWhy Shanghai needs Picasso\nWhy this moment matters",
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
