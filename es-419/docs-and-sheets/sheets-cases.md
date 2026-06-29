---
title: "Casos de uso y biblioteca de prompts de Kimi Sheets"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Casos de uso y biblioteca de prompts de Kimi Sheets - Kimi Help Center"
  description="Casos de uso y prompts de ejemplo para Kimi Sheets: desde la valoración financiera hasta la creación de storyboards."
/>

# Casos de uso de Kimi Sheets

<Callout type="info">
Casos de uso y prompts de ejemplo para Kimi Sheets: desde la valoración financiera hasta la creación de storyboards.
</Callout>

## Valoración financiera

Como un analista financiero, Kimi recopila datos financieros reales, construye un modelo de valoración DCF y realiza una valoración simulada de la empresa.

<Frames
  src="./images/sheets-cases/dcf.png"
  alt="DCF"
/>

**Prompt de ejemplo**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Perform a DCF valuation of XX Healthcare. Put the entire valuation process and data\ninto an Excel spreadsheet, cite data sources, provide the reasoning behind estimated\nfigures such as market size, growth rates, and market share, and incorporate macro\nenvironment analysis.",
    },
  ]}
/>

## Creación de storyboards

Como un artista de storyboards, Kimi crea guiones de storyboard de video en formato Excel que incluyen duración, descripciones de tomas, narración, efectos de sonido y cuadros de referencia.

<Frames
  src="./images/sheets-cases/transcript.png"
  alt="Transcript"
/>

**Prompt de ejemplo**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Create a storyboard script in Excel for a 3D promotional video about Kimi AI's new\nupgrade — OK Computer — which supports generating and editing Office documents\n(e.g., long-form thesis formatting in Word, data modeling and analysis in Excel,\nautomatic slide generation).\n\nThe Excel should include:\nColumn A: Sequence number (1-20)\nColumn B: Cumulative duration (seconds)\nColumn C: Shot duration (seconds)\nColumn D: Shot description (3D / camera movement)\nColumn E: Narration/text (use different background colors to distinguish narration\nfrom on-screen text)\nColumn F: Sound effects/BGM (use different font colors to distinguish)\nColumn G: Storyboard frames (generate an image for each shot — maintain visual\nconsistency using the classic black-and-white line sketch style)\n\nPlease design the creative outline, script, and storyboards independently, then\ngenerate frames to complete this script, presented in a polished Excel format.",
    },
  ]}
/>

## Más escenarios y prompts de ejemplo

| Escenario | Prompt de ejemplo |
|------|-----------|
| Modelado financiero | Realiza una valoración DCF de la empresa XX: coloca el proceso completo y los datos en Excel, cita las fuentes y explica el razonamiento detrás de supuestos clave como las tasas de crecimiento |
| Comparación de datos del sector | Investiga las 20 principales empresas nacionales de vehículos de nueva energía (NEV): enumera capitalización de mercado, volumen de ventas de 2025, modelos insignia y noticias recientes en una tabla comparativa |
| Catalogación de literatura | Busca artículos sobre optimización de inferencia de LLM de los últimos tres meses: organízalos en Excel con título, autores, metodología central y aportes clave |
| Combinación de múltiples hojas | [Sube 12 archivos de Excel con ventas mensuales] Combina estas 12 hojas en un resumen anual, calcula las tasas de crecimiento mes a mes y usa fórmulas para vincular las hojas entre sí |
| Extracción de leads de ventas | [Sube PDF/imágenes de la feria] Extrae toda la información de los expositores y organízala en un archivo de Excel de 1000 filas con leads de ventas que incluya nombre de la empresa, datos de contacto y categoría de producto |
| Gestión de proyectos | Crea un Excel de gestión de proyectos PMO con lista de tareas, responsables, estado de avance, diagrama de Gantt y vínculos entre hojas |
| Visualización de datos | Convierte este Excel de datos de ventas en un panel visual con gráficos de líneas de tendencia, gráficos de distribución regional y gráficos de dona de tasa de cumplimiento |
