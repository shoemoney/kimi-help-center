---
title: "¿Qué son los plugins de Kimi?"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Conecta herramientas externas a Kimi para que pueda usar apps y servicios al completar tareas. Una vez instalado un plugin, Kimi puede llamar capacidades de terceros —como datos financieros, software de oficina y herramientas de diseño— para ayudarte a trabajar."
---

<SeoMeta
  title="¿Qué son los plugins de Kimi? Cómo instalarlos y usarlos - Centro de ayuda de Kimi"
  description="Conoce los plugins de Kimi: conecta servicios externos como datos financieros, software de oficina y herramientas de diseño a Kimi, y llámalos directamente mientras completas tareas. Cubre dónde funcionan los plugins, la instalación y la autorización, cómo invocarlos, las categorías de plugins y el uso de credits."
/>

# ¿Qué son los plugins de Kimi?

Los plugins conectan herramientas externas a Kimi para que pueda usar apps y servicios al completar tareas. Una vez que instalas un plugin, Kimi puede llamar directamente la capacidad de terceros correspondiente mientras completa una tarea; por ejemplo, consultar datos financieros, operar software de oficina o usar herramientas de diseño. Puedes pedir explícitamente que se use un plugin específico, y Kimi también llamará uno automáticamente cuando sea apropiado.

## ¿Qué es un plugin de Kimi?

Un plugin de Kimi sigue la [definición de plugins de Kimi Code](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html#plugin-manifest) y puede incluir uno o más de los siguientes componentes:

| Componente | Propósito |
| --- | --- |
| Skills | Proporcionan el conocimiento, los pasos y la guía de uso necesarios para completar tareas |
| MCP | Conectan software, servicios, bases de datos o APIs externos |
| Agents | Delegan tareas complejas en subagentes especializados |
| Hooks | Ejecutan automáticamente acciones predefinidas cuando ocurren eventos específicos |
| Commands | Ofrecen puntos de entrada claros y reutilizables basados en comandos |
| System Prompt | Agregan instrucciones de sistema al Agent principal mientras el plugin está habilitado |

La experiencia web de Kimi actualmente admite MCP y Skills en los plugins. Kimi Work y Kimi Code siguen la definición completa de plugins anterior y admiten combinaciones más completas de componentes de plugins.

**Ejemplos:**

- **Plugin de Notion** = MCP de Notion + Skill de guía de uso
- **Plugin de investigación financiera** = varios MCP financieros + varias Skills de análisis + un Agent personalizado

## Dónde puedes usar los plugins

Puedes usar plugins cuando cambias el modelo a **K3** o **K3 Swarm**, y en los escenarios de **Deep Research, Websites y PPT**.

También puedes usar plugins en la **app de escritorio de Kimi Work**; para ver la lista de plugins integrados en el escritorio, consulta el [Centro de plugins de Kimi Work](/kimi-work/plugin-center).

<Callout type="info">
Los plugins aún no son compatibles con las conversaciones de Kimi Claw ni de Kimi Plus.
</Callout>

## Instalación de plugins

- **Puntos de entrada**: usa el **+** del cuadro de entrada o escribe "/"; en el móvil, usa el **+** del cuadro de entrada o "/".
- Busca o explora en el marketplace de plugins, abre los detalles de un plugin y haz clic en instalar.
- Algunos plugins requieren **autorización de OAuth** (se te lleva al inicio de sesión del tercero; una vez autorizado, ya puedes usarlo); algunos plugins están **preinstalados** y no necesitan instalación manual.
- **Plugins exclusivos para empresas**: los usuarios que no son de empresa pueden verlos, pero el botón "Install" aparece atenuado.
- No puedes instalar ni usar plugins si no has iniciado sesión.

## Uso de plugins

- Después de instalarlo, escribe "/" en el cuadro de entrada o haz clic en **+** → Plugins, y luego selecciona el plugin para invocarlo; puedes **invocar varios plugins a la vez**.
- También puedes simplemente describir lo que necesitas (por ejemplo, "busca esta empresa en Tianyancha"), y Kimi elegirá el plugin adecuado automáticamente.
- Cuando Kimi llama las herramientas de un plugin, muestra "Using the xx plugin" en su respuesta.

## Categorías y lista de plugins

El marketplace de plugins se organiza en las categorías siguientes. Los plugins que ves realmente varían según la **región (nacional / internacional)** y la **plataforma**, y algunos plugins aparecen en más de una categoría.

- **Finanzas**: Financial Investment Analysis, Investment Banking & Private Equity, Corporate Finance & Accounting, Wind Financial Data, S&P Global Market Intelligence, Hundsun Gildata, Tonghuashun iFinD, SEC, Global Financial Database, World Bank Open Data, IMF (International Monetary Fund) Database, Stripe, Tianyancha
- **Productividad**: Notion, Baidu Netdisk
- **Desarrollo**: GitHub, Supabase, Neon, Cloudflare
- **Creatividad**: Inspiration Pool, Image Generation, Video Generation, Audio Generation, Canva
- **General**: Vivify

## Datos y permisos

- Cuando seleccionas o pides explícitamente usar un plugin, Kimi prioriza las herramientas que ese plugin proporciona y genera su respuesta a partir de los resultados que esas herramientas devuelven; después de conectar un plugin, Kimi accede al contenido relevante dentro del alcance que autorizas.
- Si un plugin es proporcionado por un tercero, sus reglas de procesamiento de datos las establece esa empresa de forma independiente, y los datos están sujetos a sus términos de servicio y a su política de privacidad; te recomendamos revisarlos antes de autorizar.
- Puedes **desinstalar un plugin o revocar la autorización en cualquier momento**. Después de desinstalarlo, la autorización de OAuth relacionada se revoca; para volver a usar el plugin, tendrás que reinstalarlo y autorizarlo de nuevo.

## Preguntas frecuentes

### ¿Los plugins consumen los credits de mi membresía?
Algunos sí. Cuando Kimi llama las herramientas o los servicios de un plugin para completar una tarea, se consumen credits según el uso real; los plugins sin costo de llamada no generan cargos adicionales.

### ¿Puedo usar varios plugins a la vez?
Sí. Puedes invocar varios plugins a la vez con "/" o **+**.

### ¿Por qué no veo un plugin determinado?
Los plugins disponibles varían según la región (nacional / internacional) y la plataforma; además, algunos plugins solo están disponibles para usuarios personales o empresariales.

### ¿Puedo usar plugins de ChatGPT, Claude u otras plataformas?
Sí. Consulta [Cómo crear un plugin personal](/plugins-and-skills/create): proporciona los archivos del plugin existente o el enlace del proyecto de otra plataforma a Plugin Builder, y sigue las instrucciones para convertirlo en un plugin de Kimi.
