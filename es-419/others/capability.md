---
title: "¿Qué puede hacer Kimi?"
slug: "capability"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="¿Qué puede hacer Kimi? - Centro de ayuda de Kimi"
  description="Preguntas frecuentes sobre las capacidades de Kimi: búsqueda en línea y uso del navegador, control del escritorio de una computadora (Kimi Computer Use), generación de imágenes/videos/voz, escritura de código, creación de sitios web, creación de PPT y hojas de cálculo, procesamiento de archivos, memoria, compatibilidad multilingüe y longitud de contexto."
/>

# ¿Qué puede hacer Kimi?

## ¿Kimi puede buscar en internet y navegar por páginas web?

Sí. Kimi decide automáticamente si una pregunta requiere acceso en línea y usa herramientas de búsqueda integradas para obtener información. En **Kimi Code** y **Kimi Work**, con **WebBridge**, Kimi también puede usar un navegador como lo haría una persona: navegar, hacer clic, desplazarse, extraer datos y completar tareas web de varios pasos.

## ¿Kimi puede operar el escritorio de mi computadora?

En los chats habituales y en las tareas de Agent, Kimi **no tiene permiso** para operar tu computadora. **En Kimi Work, puedes elegir habilitarlo tú mismo**.

En Kimi Work, con **Kimi Computer Use**, Kimi puede hacer clic, escribir, desplazarse, arrastrar y leer por ti el contenido de la interfaz de una app o capturas de pantalla en tu escritorio. Por ejemplo: “Haz clic en X por mí”, “Ingresa … en Y”, “Revisa el estado actual de la app Z” o “Enumera las apps que están abiertas ahora”. Todas las operaciones se ejecutan en segundo plano, así que Kimi no tomará el control de tu mouse ni cambiará la ventana en primer plano.

**Cómo instalarlo**: En Kimi Work, haz clic en “Complementos”, selecciona “Kimi Computer Use” y haz clic en Instalar. También puedes enviar la siguiente instrucción en modo “Work” para instalarlo:

<CodePreview
  files={[
    {
      name: "install.txt",
      language: "text",
      content: "Instala kimi computer-use por mí: curl -fsSL https://cdn.kimi.com/kimi-computer-use/latest/setup_macos.sh | bash",
    },
  ]}
/>

## ¿Kimi puede generar imágenes, videos y voz?

Sí. Kimi puede generar imágenes, videos y audio mediante complementos de diseño creativo. Antes de usarlos, instala el complemento correspondiente desde la tienda de complementos:

- **Generación de imágenes**: Genera imágenes de alta calidad a partir de descripciones de texto. Admite resoluciones 1K/2K/4K, varias relaciones de aspecto, fondos opacos o transparentes opcionales y salida en JPG / PNG.
- **Generación de video**: Genera videos de alta calidad a partir de descripciones de texto, con imágenes de referencia opcionales. Admite relaciones de aspecto como 16:9, 4:3, 1:1, 3:4, 9:16 y 21:9, con duraciones de 4 a 12 segundos.
- **Generación de audio**: Admite conversión de texto a voz con varias voces en mandarín, o generación de efectos de sonido a partir de descripciones en inglés, con duraciones de 0.5 a 22 segundos.

## ¿Kimi puede escribir código, crear sitios web y preparar PPT y hojas de cálculo?

Sí. Como AI Agent capaz de ejecutar tareas de forma autónoma, Kimi permite crear sitios web, preparar PPT, procesar documentos y hojas de cálculo, realizar Deep Research y mucho más.

## ¿Qué archivos puede procesar Kimi?

Kimi admite formatos comunes como PDF, Word, Excel, PPT, imágenes, TXT y video. **Cada archivo debe pesar como máximo 100 MB, y puedes subir hasta 50 archivos a la vez**.

## ¿Kimi tiene memoria?

Sí. [Memoria](/features/memory-space) guarda automáticamente la información clave para que Kimi pueda entenderte mejor. Si necesitas mantener separados la memoria y los materiales por proyecto, usa la función [Proyecto](/features/project).

## ¿Kimi admite varios idiomas?

Sí. Puedes cambiar el idioma de la interfaz en **“Configuración” → “General” → “Idioma”**. Los idiomas compatibles actualmente incluyen alemán, ruso, francés, chino tradicional, coreano, portugués, tailandés, turco, español, italiano, indonesio, inglés y vietnamita. K2.6 y K3 admiten conversaciones, recuperación de información y creación en varios idiomas.

## ¿Cuánto contenido puede procesar Kimi de una sola vez?

K2.6 tiene un contexto de un solo turno de aproximadamente **128K tokens (alrededor de 50,000–60,000 caracteres chinos)**. Para documentos ultralargos, **K3 ofrece un contexto de 1 millón de tokens** (requiere el nivel de membresía más alto). Para obtener más detalles, consulta [¿Qué debo hacer cuando un chat supera los 200,000 caracteres chinos?](/others/chat-issues).
