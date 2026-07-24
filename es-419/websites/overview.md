---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: true
preview: true
preview_content: "Crea e implementa sitios web full-stack a partir de descripciones en lenguaje natural, maquetas de diseño o plantillas."
---

<SeoMeta
  title="Resumen de la función Kimi Websites - Centro de ayuda de Kimi"
  description="Conoce las capacidades de Kimi Websites para crear sitios web full-stack. Genera sitios completos (frontend + backend + base de datos) en lenguaje natural, con implementación en un clic, edición de varios turnos y exportación de código."
/>

# Resumen de la función Kimi Websites

## Qué es Kimi Websites

Kimi Websites es el producto de Kimi Agent para crear sitios web full-stack, impulsado por Kimi K3, un modelo de IA agéntica visual multimodal. Su capacidad principal es la programación visual (Vibe Coding): puedes generar un sitio web full-stack completo a partir de lenguaje natural, una maqueta de diseño o una grabación de pantalla, y luego previsualizarlo en línea y publicarlo con un clic.

Los sitios generados con Kimi Websites pueden incluir:

- **Frontend**: estructura de páginas HTML, layouts y estilos CSS, y lógica de interacción JavaScript (efectos de movimiento, animaciones, etc.)
- **Backend**: almacenamiento persistente en base de datos, inicio de sesión de usuarios y autenticación
- **Ingeniería**: gestión automática de versiones, vista previa full-stack e implementación pública

### Funciones del producto

| Función        | Descripción                                                  |
|----------------|--------------------------------------------------------------|
| Creación conversacional de sitios web | Describe lo que necesitas en lenguaje natural y la IA genera automáticamente un sitio web full-stack |
| Comprensión de imágenes y video | Sube una maqueta de diseño, una captura de pantalla o una grabación de pantalla, y la IA la interpreta automáticamente y genera las páginas |
| Almacenamiento persistente | Crea automáticamente una base de datos backend, con lectura, escritura y gestión persistentes de datos |
| Gestión de base de datos | Ofrece un panel visual de base de datos para operaciones básicas como ver, editar y eliminar datos |
| Inicio de sesión de usuarios | Admite inicio de sesión con cuenta de Kimi y también puede crear un sistema de usuario/contraseña mediante la base de datos |
| Gestión de versiones | La IA crea automáticamente commits de versión (git commit) y permite volver a cualquier versión anterior |
| Vista previa full-stack | Admite vista previa completa de frontend y backend; en algunos casos es necesario iniciar manualmente el entorno sandbox |
| Edición de varios turnos | Permite cambios iterativos mediante conversaciones de varios turnos y comparar distintas versiones |
| Edición visual | Anota elementos en la página de vista previa encerrándolos en un círculo o marcándolos, y luego envía todas las sugerencias a Kimi de una sola vez |
| Publicación e implementación | Después de hacer clic manualmente en "Publicar", el sitio se implementa en internet pública; antes de publicarlo, solo está disponible en vista previa. Se admite implementación full-stack |
| URL personalizada | Personaliza el subdominio del sitio, como `abc` en `abc.ok.kimi.link` |
| Uso compartido y control de acceso | Obtén un enlace público para compartir con un clic, o configura el sitio como privado/visible solo para ti |
| Selección de plantillas | Ofrece varias plantillas predefinidas para que empieces a crear rápidamente |
| Exportación de código | Permite descargar el paquete completo del proyecto (incluidos frontend y backend) para una implementación autogestionada |

## Cómo usarlo

### Método 1: Acceso desde la web
Visita la página dedicada de Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Página de inicio de Kimi Websites"
/>

1. Abre un navegador: usa un navegador común como Chrome, Safari, Edge o Firefox.
2. Abre la dirección oficial de acceso: página dedicada de Kimi Websites: [https://www.kimi.com/zh/websites](https://www.kimi.com/zh/websites) (admite interfaces en chino e inglés)
3. Inicia sesión en tu cuenta: accede con una cuenta de Kimi (se admite registro con número de celular o correo electrónico)
4. Ingresa la tarea para crear tu sitio web. Kimi Websites ofrece tres formas principales de crear un sitio:
   1. **Entrada de texto**: escribe la tarea en el cuadro de diálogo y describe en lenguaje natural el sitio web que quieres;
   2. **Image/website remix**: sube una maqueta de diseño o una captura de pantalla de un sitio web que te guste para activar la función correspondiente;
   3. **Creación de sitios con plantillas**: crea rápidamente un sitio web estándar eligiendo una plantilla predefinida y editando el contenido;
5. Empieza a crear: entra a la interfaz de Websites, elige una plantilla o crea directamente mediante la conversación.

<Frames
  src="./images/overview/screenshot-27.png"
  alt="captura de pantalla 27"
/>

### Método 2: Acceso desde la app móvil
Selecciona la herramienta dedicada de sitios web en la app móvil

<Frames
  src="./images/overview/screenshot-27.png"
  alt="Interfaz del creador de sitios web"
/>

Las Apps oficiales están disponibles para iOS, Android y HarmonyOS (nombre de la app: "Kimi"). Sobre el cuadro de entrada, toca la barra de herramientas (Taskbar) → cambia al modo Websites. Incluye herramientas de generación multimodal y capacidades de Agent, lo que te permite proporcionar entradas visuales y generar código frontend.

### Método 3: Modo Agent general
En el modo Agent general, ingresa tus requisitos para crear el sitio web

En el sitio web oficial o en un dispositivo móvil, selecciona el modelo K3 e ingresa instrucciones de tarea relacionadas con la creación de un sitio web. Kimi invocará capacidades de programación visual y herramientas de ejecución de código.

## Pasos

### Crear un sitio web mediante conversación

Describe lo que necesitas en lenguaje natural en el cuadro de entrada, y Kimi lo entenderá y ejecutará. Se admiten tres métodos de creación:

| Método             | Descripción                              |
|--------------------|------------------------------------------|
| Descripción de texto   | Ingresa directamente los requisitos del sitio web, y la IA genera el sitio automáticamente |
| Interpretación de maqueta de diseño | Sube una maqueta de diseño, y la IA la reconoce y la recrea como página web |
| Creación rápida de sitios estándar | Elige una plantilla predefinida y edita el contenido |

### Ejemplo práctico

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ingresa una tarea de creación de sitio web\nCrea un sitio web para cachorros West Highland White Terrier, con una paleta principal en blanco y negro. Incluye tres secciones:\n1. Un calendario de retratos con calidad de estudio y muestras de imágenes generadas por IA;\n2. Una enciclopedia de cuidados \"Curly-Coat Lab\";\n3. Una tienda de mercancía que venda sudaderas con avatares de Westie y pósters de edición limitada con foil plateado.\nLa página de pago debe incluir un módulo benéfico: donar $1 por cada artículo vendido al rescate de cachorros callejeros.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="Ejemplo de sitio web"
/>

### Resumen del flujo de creación de sitios web

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Descripción de requisitos → Kimi analiza la tarea → invoca webapp-building SKILL →\ncomprende el stack tecnológico y el proceso de compilación → crea una lista de tareas e inicializa el proyecto → escribe una lista de pendientes → ejecuta la terminal → genera imágenes → previsualiza y ajusta →\nactualiza el avance de la tarea y desarrolla el código central del sitio web → actualiza CSS y archivos de configuración, luego crea componentes → hace ediciones de varios turnos → implementa en línea → comparte y distribuye",
    },
  ]}
/>

Kimi Websites activa webapp-building SKILL, un agente de generación de código de varios turnos dedicado a la creación de sitios web. Ejecuta de forma autónoma el siguiente flujo de trabajo:

1. Análisis de requisitos: analiza automáticamente los módulos funcionales, el estilo visual y la lógica de interacción del sitio web
2. Planificación de tareas: divide el trabajo en subtareas como diseño, desarrollo y preparación de recursos
3. Solución técnica: selecciona automáticamente una arquitectura técnica adecuada (como React + Tailwind CSS)
4. Generación de recursos: genera recursos visuales como imágenes e íconos según sea necesario
5. Construcción de código: escribe la estructura de páginas, los estilos y el código de interacción
6. Optimización de varios turnos: ajusta de forma autónoma con base en la vista previa hasta completar el sitio web

<Frames
  src="./images/overview/screenshot-26.png"
  alt="captura de pantalla 26"
/>

### Previsualizar y ajustar

- **Vista previa en tiempo real**: genera una URL de demostración HTML que puedes abrir de inmediato en un navegador
- **Ediciones conversacionales**: continúa la conversación para solicitar cambios, como "cambia la barra de navegación a un estilo oscuro"

#### Ejemplo real

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Los colores no se ven muy bien. Quiero quitar el requisito de blanco y negro y hacer que parezca un sitio web normal.\nKimi Websites reorganizará la lista de pendientes y seguirá creando el sitio web.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### Interfaz del panel de vista previa

Después de generar el sitio web, el panel de vista previa se abre a la derecha y también aparecen tarjetas de versión en la conversación. Las principales entradas de operación son las siguientes:

**Barra superior del panel de vista previa** (de izquierda a derecha):

| Botón | Función |
|--------|----------|
| Vista previa / Código | Alterna entre la vista previa visual y las vistas de código fuente/árbol de archivos |
| Editar | Entra al modo de edición; haz clic en el área que quieres cambiar, agrega notas de anotación y envíalas a Kimi |
| Compartir | Publica el sitio web, copia el enlace, personaliza la URL o anula la publicación |
| Vista previa en pantalla completa | Ve el sitio web en pantalla completa |
| Cambiar modo de vista previa | Alterna entre vistas de escritorio y móvil |
| Actualizar | Recarga la vista previa |
| Comentarios de usuario | Envía problemas encontrados durante el uso; puedes escribir texto y subir capturas de pantalla |
| Cerrar | Contrae el panel de vista previa |

**Tarjetas de versión en la conversación**: muestran el nombre del sitio, el número de versión (como V2) y la URL. Haz clic en **Vista previa** para abrir la versión correspondiente; haz clic en **Restaurar** para volver a esa versión. La tarjeta **Todos los archivos** te permite ver o descargar los archivos completos del proyecto. Para conocer el uso detallado de cada botón, consulta las secciones correspondientes a continuación.

### Edición visual

<Frames
  src="./images/overview/web-case1.png"
  alt="Interfaz de edición visual"
/>

- **Optimización de varios turnos**: ajusta los detalles del sitio web mediante una conversación continua
- **Formas de editar**:
  - **Modo de anotación**: haz clic en la parte de la página web que quieres cambiar y agrega comentarios en lenguaje natural
  - **Modo de selección**: selecciona cualquier elemento de la página web y agrega comentarios
  - Usa rectángulos, flechas, pinceles, cambio de color y otras herramientas de selección y edición para agregar cambios sugeridos
- Después de agregar anotaciones en varios lugares, añádelas a la conversación y envía todas las sugerencias a Kimi de una sola vez

### Implementación de código y publicación
| Método de implementación | Descripción                                           |
|-------------------|------------------------------------------------------|
| Publicación en un clic | Haz clic en el botón "Publicar" para implementar el sitio en internet pública y generar un enlace en línea accesible (antes de publicarlo, solo está disponible en vista previa) |
| Descargar e implementar | Descarga el paquete de código e impleméntalo en tu propio servidor |
| URL personalizada | Cambia la URL aleatoria predeterminada por un nombre fácil de recordar, por ejemplo, personalizando `abc` en `abc.ok.kimi.link` |

> **Acerca de la "URL personalizada"**: de 3 a 30 caracteres, solo letras minúsculas, números y guiones. No puede empezar ni terminar con guion, y no puede ser solo números. Algunas palabras reservadas (como `kimi`, `www`, `login`, etc.) no están disponibles. Si el nombre está ocupado o no está disponible, elige otro.

> **Acerca de los límites de "Descargar e implementar"**: el **inicio de sesión con cuenta de Kimi** y la **base de datos en la nube administrada por la plataforma** los proporciona la plataforma Kimi y no migrarán con el código exportado. Si implementas el código en tu propio servidor, el método de inicio de sesión debe cambiarse a un esquema de usuario/contraseña basado en tu propia base de datos, y los datos también deben migrarse a tu propia base de datos. Si solo necesitas acceso público, recomendamos usar directamente **Publicación en un clic**; el inicio de sesión con cuenta de Kimi y los datos en la nube seguirán funcionando con normalidad. Consulta [¿Por qué no funciona el sitio web que creé?](/websites/websites-why-not-working) para más detalles.

#### Vista previa por versión
Cuando termine la generación, entrarás a la página de vista previa.
En la interfaz de vista previa, puedes hacer clic en distintas versiones de implementación y descargar archivos de diferentes versiones.

<Frames
  src="./images/overview/screenshot-26.png"
  alt="Vista previa de versión"
/>

#### Publicar, compartir y anular publicación
Antes de publicarlo, el sitio web solo puede previsualizarse en la conversación. Para permitir que otras personas accedan, haz clic en **Compartir** en la esquina superior derecha del panel de vista previa para abrir el panel de publicación:

1. **URL personalizada**: puedes modificar el nombre en la URL predeterminada, por ejemplo, cambiarlo a `yourname.ok.kimi.link`;
2. Haz clic en **Copiar enlace** para obtener la URL pública, o en **Abrir sitio web** para verlo en una nueva pestaña. Después de publicarlo, la parte superior del panel muestra **Publicado**, y cualquier persona con el enlace puede acceder;
3. Para desconectar el sitio, selecciona **Anular publicación** en el menú **…** de la esquina superior derecha del panel. El sitio dejará de estar disponible públicamente (el código y los datos se conservan, y puedes volver a publicarlo en cualquier momento).

### Edición de varios turnos

Si no estás satisfecho con una parte específica, haz clic en el botón de edición en la ventana de vista previa para seguir refinándola.
También puedes enviar instrucciones a Kimi en lenguaje natural y continuar editando con Agent.
Cuando confirmes el resultado, descarga el código HTML/CSS/JS completo e impleméntalo directamente, o sigue puliéndolo en un editor.

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## Para quién es

- Desarrolladores: Diseña prototipos de producto y demos de frontend, reduciendo considerablemente el tiempo necesario para construir desde cero.
- Emprendedores: Crea rápidamente sitios oficiales, landing pages y páginas de presentación de productos cuando los recursos son limitados.
- Product managers: Convierte rápidamente un PRD o una maqueta de diseño en un prototipo interactivo demostrable, sin esperar la planificación de desarrollo.
- Usuarios no técnicos: No se requieren conocimientos de programación. Describe tu idea o sube una imagen de referencia, y pasa del concepto a una página web ejecutable.

## Prompts de ejemplo
**Puedes consultar los siguientes escenarios y prompts para generar contenido**

| Escenario         | Prompt de ejemplo                                                   |
|------------------|------------------------------------------------------------------|
| Crear una landing page desde cero | Ayúdame a crear una landing page de marketing para un producto SaaS con un estilo inspirado en tecnología, que incluya una sección hero, introducción de funciones, precios y CTA |
| Recrear un sitio web a partir de video | [Subir una grabación de pantalla] Recrea el sitio web mostrado en el video y conserva las interacciones originales |
| Recrear a partir de captura de pantalla | [Subir una maqueta de diseño] Implementa este diseño como código de página web ejecutable |
| Portafolio personal | Ayúdame a crear un sitio web de portafolio personal para un fotógrafo, con un estilo minimalista en blanco y negro y soporte para un layout de imágenes tipo masonry |
| Página de visualización de datos | Crea una página web de visualización que muestre datos de financiamiento de empresas de IA en 2025, con gráficos y filtros |
| Sitio web de marca | Ayúdame a crear un sitio web oficial para una marca de café, usando una paleta de colores Morandi, con página de inicio, páginas de productos y páginas de tiendas |
| Utilidad/calculadora | Crea una página web de calculadora de IMC con una interfaz limpia, cambio de unidades y consejos sobre nivel de salud |
