---
title: "Búsqueda agéntica"
slug: "search"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Búsqueda agéntica para guías y respuestas｜Centro de ayuda de Kimi"
  description="La búsqueda agéntica de Kimi se basa en una arquitectura de aprendizaje por refuerzo agéntico de extremo a extremo. A diferencia de los enfoques tradicionales de orquestación de herramientas, permite que la IA..."
/>

# Búsqueda agéntica

<Callout type="info">
La búsqueda agéntica de Kimi se basa en una arquitectura de aprendizaje por refuerzo agéntico de extremo a extremo (End-to-End Agentic RL). A diferencia de los enfoques tradicionales de orquestación de herramientas, permite que la IA decida de forma autónoma cuándo buscar, qué herramientas usar y cómo ajustar su estrategia, lo que habilita tareas complejas de recopilación y procesamiento de información.
</Callout>

Frente a la búsqueda tradicional por coincidencia de palabras clave, las capacidades de búsqueda de Kimi han pasado por dos grandes evoluciones:
- **Explorer Search** (octubre de 2024) combinó la comprensión semántica de los grandes modelos de lenguaje (LLM) con la recuperación de información en tiempo real, descomponiendo automáticamente preguntas complejas y rastreando las fuentes.
- **Agentic Search** va más allá con la planificación autónoma y la invocación de herramientas, con soporte para consultas de datos financieros, recuperación de literatura académica, búsqueda de imágenes y otras tareas multimodales.

## Configuración de la búsqueda web

<Frames
  src="./images/search/web-search.png"
  alt="Búsqueda web"
/>

La búsqueda web (Web Search) (Automática/Desactivada) rompe las barreras de la actualidad del conocimiento para ofrecer información en tiempo real, confiable y rastreable.

Haz clic en el interruptor de "Web Search" debajo del cuadro de entrada del chat. Cuando está activado, Kimi determina por sí mismo si la pregunta actual requiere datos en tiempo real e invoca de forma inteligente motores de búsqueda y bases de datos verticales para recuperar y sintetizar información.

## Capacidades principales

### 1. Actualidad y autoridad
Recuperación web en tiempo real que abarca más de 100 fuentes verificadas y confiables (los principales medios de comunicación, anuncios gubernamentales, plataformas de datos financieros, bases de datos de revistas académicas), lo que garantiza información actual y autorizada.

### 2. Atribución de fuentes
Todas las respuestas basadas en búsquedas incluyen enlaces a las fuentes de referencia. Haz clic en ellos para ver la página original y verificar por completo la exactitud y el contexto.

### 3. Acceso a información global
Admite conversaciones en lenguaje natural en varios idiomas. Kimi puede buscar de forma proactiva en fuentes que no están en inglés (por ejemplo, documentación técnica en japonés, noticias en francés) y sintetizar automáticamente información multilingüe.

## Casos de uso recomendados

- Noticias y actualizaciones en tiempo real (noticias de última hora, datos bursátiles, cambios de políticas)
- Verificación de hechos (rumores en línea, datos históricos, metodologías estadísticas)
- Investigación profesional (inteligencia sobre la competencia, fronteras académicas, normas de la industria)

## Insignias de fuentes autorizadas

La búsqueda web de Kimi filtra las fuentes en tres dimensiones —relevancia, autoridad y actualidad— descartando automáticamente sitios riesgosos, contenido duplicado y replicado, contenido web de baja calidad e información alucinada para garantizar resultados confiables.

Las fuentes de alta calidad que superan el riguroso filtrado de Kimi se marcan con insignias de autoridad en las respuestas (por ejemplo, íconos de certificación de sitio oficial, certificación académica o certificación de medios), lo que te ayuda a identificar rápidamente la información más confiable.

**Mecanismo de filtrado de fuentes**:
- **Descartadas**: sitios agregadores de baja calidad, medios de autoría propia sin verificar, páginas en caché caducadas
- **Priorizadas**: sitios web de organismos gubernamentales, medios autorizados, revistas académicas, canales oficiales de reportes financieros

## Fuentes de datos financieros y académicos

<Frames
  src="./images/search/screenshot-5.png"
  alt="captura de pantalla 5"
/>

En escenarios profesionales, Kimi admite consultas a bases de datos de dominios verticales para obtener datos profesionales estructurados y rastreables.

<Frames
  src="./images/search/screenshot-6.png"
  alt="captura de pantalla 6"
/>

Solo indica tu solicitud en la conversación y Kimi seleccionará automáticamente la fuente de datos adecuada.

### Consultas de ejemplo

- "Busca los datos de ingresos de Apple de los últimos cinco años"
- "Busca los artículos más recientes sobre la optimización de la inferencia en grandes modelos de lenguaje"
- "Compara el PIB, el PIB per cápita y las tasas de desempleo de las tres economías más grandes del mundo"

### Fuentes de datos compatibles

| Fuente | Descripción |
|--------|-------------|
| **Global Finance Data** | Datos financieros mundiales de acciones, futuros, índices y más |
| **Academic Data** | Revistas, artículos, preprints, tesis, patentes, etc. |
| **Stock Finance Data** | Datos financieros de acciones, futuros, índices y más, de China y del mundo |
| **World Bank Data** | PIB, población, empleo, comercio de los países, etc. |

## Búsqueda inteligente

### Búsqueda de imágenes

Kimi admite la búsqueda y comprensión basadas en imágenes. Tras subir una imagen, Kimi puede invocar automáticamente herramientas de búsqueda de imágenes para identificar el contenido y recuperar información relacionada.

**Consultas de ejemplo**:
- "¿Dónde está este lugar?"
- "¿Qué pasa en este meme / qué dice esta persona?"
- "Encuentra el McDonald's real"

**Cómo usarla**:
- Sube una imagen directamente (admite JPG, PNG y otros formatos)
- Describe el contenido de la imagen o haz preguntas relacionadas con ella en tu prompt
- Kimi combinará el reconocimiento de imágenes con la búsqueda web para ofrecer el origen de la imagen, imágenes similares e información relacionada

**Escenarios típicos**:
- Identificar objetos, monumentos o modelos de productos desconocidos
- Encontrar la fuente o el origen de una imagen
- Analizar datos en gráficos o capturas de pantalla y recuperar información de contexto relevante

### Acceso directo por URL

La búsqueda de Kimi admite el acceso directo por URL para obtener recursos de internet.

<Frames
  src="./images/search/screenshot-22.png"
  alt="captura de pantalla 22"
/>

**Pega una URL directamente en la conversación** y Kimi obtendrá y analizará automáticamente el contenido de la página.

**Casos de uso de ejemplo**:
- Resume los puntos clave de este artículo
- Extrae los datos clave de este PDF de reporte de resultados
- Busca información de imágenes a partir de la URL

## Consejos

<Callout type="warning">
- Prefiere enlaces de **acceso público** (por ejemplo, páginas de noticias, documentos PDF públicos)
- Es posible que algunas páginas **protegidas con contraseña** o con restricciones de rastreo no sean accesibles
- En el caso de páginas de **carga dinámica**, es posible que Kimi solo recupere el contenido HTML inicial
- Kimi **no puede volver a leer enlaces de conversaciones compartidas** (es decir, enlaces a otros chats de Kimi)
</Callout>
