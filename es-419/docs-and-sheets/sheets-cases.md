---
title: "Casos de uso y biblioteca de prompts de Kimi Sheets"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Casos de uso y biblioteca de prompts de Kimi Sheets - Centro de ayuda de Kimi"
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
      content: "Realiza una valoración por DCF de XX Healthcare. Vuelca todo el proceso de valoración y los datos\nen una hoja de cálculo de Excel, cita las fuentes de datos, explica el razonamiento detrás de las estimaciones\ncomo el tamaño del mercado, las tasas de crecimiento y la cuota de mercado, e incorpora un análisis del entorno macroeconómico.",
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
      content: "Crea un guion de storyboard en Excel para un video promocional en 3D sobre la nueva\nactualización de Kimi AI — OK Computer — que permite generar y editar documentos de Office\n(por ejemplo, dar formato a tesis extensas en Word, modelar y analizar datos en Excel,\ngenerar diapositivas automáticamente).\n\nEl Excel debe incluir:\nColumna A: número de secuencia (1-20)\nColumna B: duración acumulada (segundos)\nColumna C: duración del plano (segundos)\nColumna D: descripción del plano (3D / movimiento de cámara)\nColumna E: narración/texto (usa distintos colores de fondo para distinguir la narración\ndel texto en pantalla)\nColumna F: efectos de sonido/música de fondo (usa distintos colores de fuente para distinguirlos)\nColumna G: fotogramas del storyboard (genera una imagen por plano — mantén la coherencia visual\nempleando el clásico estilo de boceto a línea en blanco y negro)\n\nDiseña de forma autónoma el esquema creativo, el guion y los storyboards y, a continuación,\ngenera los fotogramas para completar este guion, presentado en un formato de Excel pulido.",
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
