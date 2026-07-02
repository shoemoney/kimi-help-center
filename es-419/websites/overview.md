---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: false
preview: true
preview_content: "Crea y publica sitios web a partir de descripciones en lenguaje natural, maquetas de diseño o plantillas."
---

<SeoMeta
  title="Descripción general de Kimi Websites - Centro de ayuda de Kimi"
  description="Crea y publica sitios web a partir de descripciones en lenguaje natural, maquetas de diseño o plantillas."
/>

# Kimi Websites

<Callout type="info">
**Kimi Websites** es una función de producto de Kimi Agent impulsada por el más reciente modelo de IA de agente visual multimodal Kimi K2.6. Su capacidad principal es el **Vibe Coding**: generar sitios web a partir de lenguaje natural y publicarlos en línea.
</Callout>

Al comprender entradas visuales (maquetas de interfaz, capturas de pantalla, videos de interacción) e instrucciones en lenguaje natural, Kimi traduce lo que ingresas en código frontend completo y ejecutable, que abarca no solo la interfaz estática, sino también el comportamiento interactivo y dinámico.

## Descripción general de las funciones

| Función | Descripción |
|---------|------------|
| **Creación de sitios mediante conversación** | Describe lo que necesitas en lenguaje natural y la IA genera el sitio web automáticamente |
| **Comprensión de imágenes y videos** | Sube maquetas de diseño, capturas o grabaciones de pantalla; la IA las interpreta y genera páginas HTML |
| **Publicación automática** | Publicación instantánea con un solo clic |
| **Edición en varias rondas** | Revisiones iterativas del sitio con comparación de versiones |
| **Compartir con un clic** | Genera enlaces accesibles para compartir fácilmente |
| **Selección de plantillas** | Múltiples plantillas predefinidas para empezar a crear tu sitio rápidamente |
| **Exportación de código** | Descarga los archivos HTML/CSS/JS empaquetados para alojarlos por tu cuenta |

## ¿Cómo usar Kimi Websites?

### Método 1: visita la página de Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Página principal de Kimi Websites"
/>

1. **Abre el navegador**: usa Chrome, Safari, Edge, Firefox o cualquier navegador popular
2. **Ingresa a**: [kimi.com/websites](https://www.kimi.com/zh/websites) (compatible con chino e inglés)
3. **Inicia sesión**: con tu cuenta de Kimi (número de teléfono o correo electrónico)
4. **Ingresa tu tarea**:

| Opción | Descripción |
|----------|-------------|
| **Entrada de texto** | Escribe tu solicitud en lenguaje natural |
| **Clonación de imagen o sitio** | Sube una maqueta de diseño o una captura de pantalla |
| **Basada en plantillas** | Selecciona una plantilla predefinida y modifica el contenido |

5. **Empieza a crear**: elige una plantilla o comienza desde la conversación

<Frames
  src="./images/overview/screenshot-27.png"
  alt="captura de pantalla 27"
/>

### Método 2: aplicación móvil

iOS, Android y HarmonyOS cuentan con la aplicación oficial de Kimi. En el área de entrada, toca la **barra de tareas** → cambia al **modo Websites Agent**, que incluye herramientas de generación multimodal y capacidades de Agent.

### Método 3: usa el modo K2.6 Agent

Cambia al modo K2.6 Agent e ingresa una tarea de creación de sitios web. Kimi activará sus capacidades de codificación visual y sus herramientas de ejecución de código.

## ¿Cómo funciona Kimi Websites?

### Paso 1: crea un sitio web mediante una conversación

Describe lo que necesitas en lenguaje natural. Se admiten tres métodos de creación:

| Método | Descripción |
|--------|------------|
| **Descripción de texto** | Ingresa directamente los requisitos del sitio y la IA lo genera automáticamente |
| **Interpretación de maquetas de diseño** | Sube un archivo de diseño; la IA lo reconoce y lo recrea como página web |
| **Creación rápida con plantilla** | Selecciona una plantilla predefinida y modifica el contenido |

**Ejemplo de prompt**:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Crea un sitio web sobre los West Highland Terrier con una combinación de colores en blanco y negro. Incluye tres secciones:\nUn calendario de fotos con calidad de estudio y visualización de imágenes generadas por IA\nUna enciclopedia de cuidados y peluquería «Curly Lab»\nUna tienda que vende sudaderas con capucha con estampado de Westie y pósteres de edición limitada con lámina plateada. La página de pago debe incluir un módulo benéfico — donar $1 por cada artículo vendido al rescate de perros callejeros.",
    },
  ]}
/>

### Paso 2: proceso de creación

<Frames
  src="./images/overview/screenshot-26.png"
  alt="captura de pantalla 26"
/>

Kimi Websites activa la **SKILL de creación de webapps**: un agente dedicado a la generación de código en varias rondas:
1. **Análisis de requisitos**: analiza los módulos del sitio, el estilo visual y la lógica de interacción
2. **Planificación de tareas**: las descompone en subtareas de diseño, desarrollo y preparación de recursos
3. **Selección de la pila tecnológica**: elige la arquitectura adecuada (por ejemplo, React + Tailwind CSS)
4. **Generación de recursos**: crea imágenes, íconos y otros elementos visuales
5. **Construcción del código**: escribe la estructura de la página, los estilos y el código de interacción
6. **Optimización en varias rondas**: se ajusta por sí mismo según los resultados de la vista previa hasta completar el sitio

### Paso 3: vista previa y ajustes
- **Vista previa en vivo**: genera una URL de demostración HTML para verla de inmediato en el navegador
- **Edición mediante conversación**: continúa la conversación para solicitar cambios, por ejemplo: *«Haz que la barra de navegación sea oscura»*

<Callout type="tip">
**Ejemplo**: *«Los colores no me gustan; quiero quitar el requisito de blanco y negro y que sea un sitio web de aspecto normal.»*
Kimi reorganizará la lista de tareas y continuará con la creación.
</Callout>

<Frames
  src="./images/overview/web-case2.png"
  alt="caso web 2"
/>

### Paso 4: edición visual en línea
- **Optimización en varias rondas**: ajusta los detalles mediante una conversación continua
- **Modos de edición**:
  - **Modo de anotación**: haz clic en las áreas para agregar anotaciones en lenguaje natural
  - **Modo de selección**: selecciona cualquier elemento y agrega anotaciones
  - Usa rectángulos, flechas, pinceles y cambios de color para marcar tus sugerencias de revisión
- Envía todas las sugerencias de revisión a Kimi de una sola vez
### Paso 5: publica y comparte
| Método de publicación | Descripción |
|-------------------|------------|
| **Publicación automática** | Publicación con un clic y un enlace en línea generado |
| **Descarga y alojamiento propio** | Descarga los archivos de código empaquetados y publícalos en tu propio servidor |
| **Dominio personalizado** | Vincula el sitio web generado a tu propio dominio |

Una vez generado el sitio, puedes:
- Hacer clic en las diferentes versiones de publicación para descargar los archivos de cada versión
- Hacer clic en el botón de compartir para obtener un enlace publicado de forma pública (o configurarlo como privado)
- Hacer clic en el botón de edición para seguir revisando
- Descargar el código HTML/CSS/JS completo para publicarlo directamente o perfeccionarlo aún más

<Frames
  src="./images/overview/web-case1.png"
  alt="caso web 1"
/>

## Público objetivo
| Público | Caso de uso |
|----------|----------|
| **Desarrolladores** | Diseñar prototipos de productos y demos de frontend, reduciendo drásticamente el tiempo de crear todo desde cero |
| **Emprendedores** | Crear rápidamente páginas de aterrizaje, vitrinas de productos y sitios corporativos con recursos limitados |
| **Gerentes de producto** | Convertir velozmente PRD o maquetas de diseño en prototipos interactivos listos para mostrar |
| **Usuarios sin conocimientos técnicos** | Sin necesidad de programar: describe tu idea o sube una imagen de referencia para pasar del concepto a una página web funcional |

## Escenarios de referencia
| Escenario | Ejemplo de prompt |
|----------|---------------|
| **Página de aterrizaje desde cero** | Crea una página de aterrizaje de marketing para un SaaS con estética tecnológica: incluye sección principal, descripción de funciones, precios y CTA |
| **Reproducción de video a sitio** | [Sube una grabación de pantalla] Reproduce el sitio web que se muestra en este video y conserva los efectos de interacción originales |
| **Reproducción a partir de captura** | [Sube una maqueta de diseño] Convierte este diseño en código de página web ejecutable |
| **Portafolio personal** | Crea un sitio de portafolio para un fotógrafo: estilo minimalista en blanco y negro con un diseño de imágenes en mosaico |
| **Página de visualización de datos** | Crea una página de visualización que muestre los datos de financiación de empresas de IA en 2025, con gráficos y filtros |
| **Sitio web de marca** | Crea un sitio web para una marca de café en tonos tierra apagados: incluye páginas de inicio, productos y localizador de tiendas |
| **Utilidad o calculadora** | Crea una página web con una calculadora de IMC: interfaz limpia, opción para cambiar de unidad e indicadores del nivel de salud |
