---
title: "Cómo elegir: K2.6 / K3 / K3 Cluster, intensidad de razonamiento y Agent"
slug: "model-mode-selection"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Cómo elegir modelos y modos de Kimi: K2.6 / K3 / K3 Cluster, intensidad de razonamiento y Agent - Centro de ayuda de Kimi"
  description="Conoce las tres opciones de modelo de Kimi (K2.6 / K3 / K3 Cluster), los niveles de intensidad de razonamiento (Estándar / Avanzado / Extremo) y la diferencia entre Agent y Agent Cluster para elegir el mejor modo en cada situación."
/>

# Cómo elegir: K2.6 / K3 / K3 Cluster, intensidad de razonamiento y Agent

Kimi decide por sí mismo si necesita usar internet según tu pregunta, así que no tienes que activarlo manualmente. Lo que sí debes elegir es el **modelo** y la **intensidad de razonamiento**; para tareas complejas, también puedes usar **Agent** y **Agent Cluster**.

## Tres opciones de modelo

Usa el selector de modelo arriba del cuadro de entrada para elegir:

| Modelo | Intensidad de razonamiento | Ideal para | Credit |
|---|---|---|---|
| **K2.6** | Estándar / Avanzado | Conversaciones rápidas y preguntas y respuestas, con respuestas más veloces | Se descuenta de los credits |
| **K3** | Estándar / Avanzado / Extremo | Conversaciones y tareas de Agent, con la mayor capacidad general | Se descuenta de los credits |
| **K3 Cluster** | Estándar / Avanzado / Extremo | Búsquedas a gran escala, procesamiento por lotes y finalización de grandes volúmenes de tareas de una sola vez | Se descuenta de los credits |

- **K3** puede producir documentos editables de principio a fin, como `.pptx`, `.docx`, `.xlsx` y `.pdf`; **K2.6** está optimizado para preguntas y respuestas rápidas, y solo genera texto, como esquemas de PPT, texto para Word, código y más.
- Para **generación de imágenes / videos / audio**, haz clic en “+” → Plugins, elige la función correspondiente y úsala con **K3**.

<Callout type="info">
K2.6 consume credits de membresía tanto en Chat (el selector de modelo arriba del cuadro de entrada) como cuando se usa como Agent K2.6 dentro de Kimi Work.
</Callout>

## Intensidad de razonamiento: Estándar / Avanzado / Extremo

Cuanto mayor sea la intensidad de razonamiento, más completo será el razonamiento del modelo y, en general, más inteligente será el resultado; pero también **usa más tokens**.

- Si buscas **velocidad y menor uso de credits** → elige **Estándar**;
- Si necesitas **razonamiento más sólido** para análisis complejos o problemas difíciles → elige **Avanzado** o **Extremo** (Extremo es compatible con K3 / K3 Cluster).

## Agent y Agent Cluster

- **Agent de propósito general**: Planifica y completa tareas automáticamente, incluida la generación de sitios web, la creación de PPT, Deep Research y el procesamiento de documentos y hojas de cálculo.
- **Agent Cluster**: Admite más de 4,000 llamadas paralelas a herramientas y puede coordinar de forma autónoma hasta 300 subagentes (Sub-agents) en paralelo. Es ideal para tareas a gran escala, como **búsquedas a gran escala, redacción extensa y procesamiento por lotes**.

## Qué elegir según la situación

- **Preguntas y respuestas rápidas, y conversaciones cotidianas** → K2.6.
- **Conversaciones complejas, redacción de documentos / creación de PPT y hojas de cálculo / tareas de varios pasos** → K3.
- **Búsquedas a gran escala, procesamiento por lotes y redacción muy extensa** → K3 Cluster.
- **Para ahorrar credits** → configura la intensidad de razonamiento en “Estándar”.

## FAQ

### ¿“Thinking Mode” ya no está disponible?
Kimi integró “conversación” y “Agent” en una sola experiencia, por lo que ya no son modos separados. Ahora, el “razonamiento” se controla **eligiendo el modelo y la intensidad de razonamiento**; por ejemplo, usar K3 con una intensidad de razonamiento más alta ofrece un razonamiento más profundo.

### ¿Cuál es la diferencia entre K2.6 y K3?
K2.6 está optimizado para preguntas y respuestas rápidas y responde más rápido. K3 tiene la mayor capacidad general, destaca en conversaciones complejas y tareas de Agent y puede producir documentos editables de principio a fin. Ambos se descuentan de los credits.

### ¿Cuál es la diferencia entre K3 y K3 Cluster?
K3 es adecuado para conversaciones habituales y tareas de Agent. K3 Cluster usa paralelismo a gran escala —miles de llamadas a herramientas y cientos de subagentes— para gestionar tareas de gran volumen, como **búsquedas a gran escala, procesamiento por lotes y redacción muy extensa**.

### ¿Cuánto contenido se puede procesar en un solo turno?
K2.6 admite alrededor de 128K tokens de contexto en un solo turno (aproximadamente entre 50,000 y 60,000 caracteres chinos); K3 ofrece una ventana de contexto de 1 millón de tokens (requiere el beneficio de membresía del nivel más alto). Consulta [¿Qué debo hacer si una conversación supera los 200,000 caracteres chinos?](/others/chat-issues) para más detalles.
