---
title: "Cómo crear un plugin personal"
slug: "create"
order: 2
extract_headings: true
preview: true
preview_content: "Usa la skill integrada Plugin Builder de Kimi Work para convertir una idea de una frase, un repositorio de plugins externo o cualquier página web en un plugin propio."
---

<SeoMeta
  title="Cómo crear un plugin personal - Centro de ayuda de Kimi"
  description="Crea un plugin personal en Kimi Work con la skill integrada Plugin Builder: créalo a partir de una idea de una frase, importa un repositorio de plugins externo o convierte cualquier página web en un plugin. Una vez registrado en tu marketplace de plugins personales, instálalo y úsalo de inmediato en las conversaciones."
/>

# Cómo crear un plugin personal

En Kimi Work, puedes usar la skill integrada **Plugin Builder** para convertir una idea de una frase, un repositorio de plugins externo o cualquier página web en un plugin propio. Elijas el método que elijas, el plugin te llega por el mismo camino: **crear / convertir → registrar en tu marketplace de plugins personales (la pestaña "Personal") → hacer clic en + para instalar → usarlo en una conversación**. Una vez instalado, está disponible de inmediato en la conversación actual, sin necesidad de reiniciar.

Antes de empezar, asegúrate de tener instalada la versión más reciente de la app de escritorio de [Kimi Work](https://www.kimi.ai/products/kimi-work). Plugin Builder es una skill integrada y no necesita instalación adicional: escribe "/" en una conversación para invocarlo, o haz clic en "Custom plugin" en el marketplace de plugins para empezar a crear en la conversación principal.

## Crea un plugin nuevo con una sola frase

Ideal para el caso de "tengo una idea pero no tengo código". Solo necesitas describir la capacidad que quieres; Plugin Builder se encarga automáticamente del scaffolding, el llenado de campos, la validación local y el registro: no escribes ni un solo archivo a mano.

1. **Describe lo que necesitas.** Invoca Plugin Builder en una conversación y explica en una frase qué debe hacer el plugin; por ejemplo, "hazme un plugin que consulte información de registro de empresas". Los campos que se pueden inferir, como el nombre, la descripción y la categoría, se completan automáticamente; solo la información que no se puede inferir, como la URL de un servidor MCP o un ícono, se confirmará contigo.
2. **Espera a que termine la compilación.** Plugin Builder genera los archivos del plugin localmente, supera automáticamente la validación de estructura y especificación, y luego registra el plugin en tu marketplace de plugins personales.
3. **Instala y usa.** Abre **Plugins → Personal**, encuentra el plugin que acabas de crear y haz clic en + para instalarlo. Una vez instalado, está disponible de inmediato en la conversación actual, y puedes invocarlo en cualquier momento con "/".

**Prompt de un párrafo:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nCréame un plugin de búsqueda de literatura que cubra:\n1. Búsqueda de literatura: encontrar artículos por tema / autor / revista, devolviendo entradas bibliográficas, resúmenes y enlaces al texto completo\n2. Exportación de resultados: exportar los resultados de búsqueda como CSV para importarlos fácilmente en gestores de referencias\n3. Asistencia de revisión: redactar una revisión de literatura a partir de los resultados de búsqueda",
    },
  ]}
/>

## Importa plugins desde un marketplace o repositorio

Envía un enlace de repositorio de plugins a Plugin Builder, y lo reconocerá automáticamente, convertirá el formato y lo instalará en tu pestaña "Personal". Los plugins importados no interfieren con el marketplace oficial y se pueden desinstalar en cualquier momento.

1. **Formatos de plugin admitidos:** Plugin Builder reconoce los manifests de plugins de las siguientes fuentes y los convierte a todos en el formato nativo `kimi.plugin.json` de Kimi:

| Formato | Notas |
| --- | --- |
| `kimi.plugin.json` | El formato nativo de Kimi: se corrigen los campos obligatorios |
| Manifests de plugins de otras plataformas de agentes | Como los archivos `plugin.json` en directorios como `.codex-plugin/plugin.json` o `.claude-plugin/plugin.json`, así como los archivos de índice del marketplace que incluyen esas plataformas |
| `server.json` | El formato del registro oficial de MCP: se convierte en un plugin que contiene solo un servicio MCP |
| `plugin.json` genérico | Un manifest genérico ubicado en el directorio raíz del plugin |

2. **Cómo importar:** envía el enlace del repositorio a Plugin Builder. Reconoce automáticamente las siguientes formas de repositorio:

- **Repositorio de un solo plugin**: todo el repositorio se convierte en un plugin;
- **Repositorio multiplugin (monorepo)**: cada subdirectorio se convierte en su propio plugin;
- **Repositorio de marketplace / índice de plugins** (un repositorio con un índice plugins.json o marketplace.json): cada entrada del índice se expande y se convierte por lotes;
- **Repositorio solo de Skills**: un repositorio sin manifest de plugin, solo con archivos de skills, se empaqueta como un plugin de tipo skill.

3. **Instala desde la pestaña Personal:** cuando termina el procesamiento, Plugin Builder te indica qué plugins se pueden usar. Ve a **Plugins → Personal** y haz clic en "Install" en la tarjeta correspondiente para empezar a usarlo en las conversaciones.

**Prompts de un párrafo:**

Importar un solo repositorio:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nImporta el plugin del repositorio https://github.com/owner/example como plugin personal. Después de la conversión, comprueba primero si la estructura y las dependencias se pueden usar; una vez confirmado, regístralo en mi marketplace de plugins personales. Si la conversión falla, dime por qué.",
    },
  ]}
/>

Importar por lotes un marketplace de plugins:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nConvierte por lotes la colección de plugins de https://github.com/hashgraph-online/awesome-ai-plugins en plugins personales. Convierte solo los primeros 5 para que los revise; después de mi confirmación, convierte todos los demás, regístralos uno por uno en mi marketplace de plugins personales y, por último, dame un informe completo agrupado por “utilizable / dependencias no disponibles / fallido”.",
    },
  ]}
/>

Convertir solo un subdirectorio específico:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nConvierte solo el plugin del directorio https://github.com/owner/repo/tree/main/plugins/example. Una vez que la conversión y las comprobaciones pasen, regístralo en mi marketplace de plugins personales.",
    },
  ]}
/>

**Gestión de los plugins importados:**

- **Actualizar un plugin**: si el repositorio de origen recibe actualizaciones, o quieres cambiar el nombre o la descripción, solo tienes que decírselo a Plugin Builder: lo volverá a convertir o lo modificará y lo registrará de nuevo.
- **Desinstalar / eliminar**: desinstala desde la pestaña "Personal" para desactivar un plugin; la entrada permanece en la pestaña después de desinstalarlo, así que elimina la entrada si quieres quitarla por completo.
- **Directorio de origen**: el resultado convertido se conserva en el directorio plugins/ de tu espacio de trabajo local. Son los "archivos de origen" del plugin, y Plugin Builder basa las futuras actualizaciones en él; no lo elimines manualmente.

## Convierte una página web en un plugin

Ideal para el caso de "un sitio que uso a menudo no tiene API pública, pero quiero que Kimi obtenga datos y lo opere por mí". Envía la URL a Plugin Builder y describe lo que necesitas; por ejemplo, "convierte el sitio web XX en un plugin; quiero buscar XX". Hay dos opciones de navegador para analizar el sitio y ejecutar el plugin:

| Método | Ideal para | Qué necesitas |
| --- | --- | --- |
| **Navegador integrado (predeterminado)** | La mayoría de los sitios web; usa el navegador integrado de Kimi Work para analizar el sitio y ejecutar el plugin | No hay que instalar nada; cuando se requiera iniciar sesión, hazlo una vez en el navegador integrado |
| **WebBridge (wb)** | Reutilizar cuentas con las que ya iniciaste sesión en Chrome | Instala WebBridge primero y úsalo para controlar tu Chrome |

1. **Analiza el sitio.** Plugin Builder abre la URL en el navegador que elijas. Si la página requiere iniciar sesión, te pedirá que lo hagas una vez en el navegador; nunca te pedirá tu contraseña, cookies ni ninguna credencial.
2. **Ingeniería inversa de las APIs y generación del plugin.** Opera de verdad las funciones principales de la página, captura las solicitudes de red, deduce las APIs de datos internas del sitio y luego genera un plugin de tipo skill con scripts de consulta integrados.
3. **Valida, registra e instala.** Igual que en los métodos anteriores: una vez que el plugin supera la validación, se registra en la pestaña "Personal"; haz clic en + para instalarlo y empezar a usarlo.

A partir de entonces, solo di "búscame XX", y Kimi usará el plugin para obtener los datos directamente en el navegador y organizar los resultados. Si las APIs del sitio cambian y el plugin deja de funcionar, pídele a Plugin Builder que vuelva a analizar el sitio y actualice el plugin.

**Prompt de un párrafo:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nConvierte Hacker News (https://news.ycombinator.com) en un plugin que cubra:\n1. Buscar publicaciones: ingresar una palabra clave y devolver títulos, enlaces, puntuaciones y cantidad de comentarios de las publicaciones\n2. Portada: obtener las 30 publicaciones principales actuales de la página de inicio\n3. Leer comentarios: abrir una publicación determinada y resumir los puntos clave de los comentarios principales",
    },
  ]}
/>

<Callout type="warning">
El método del navegador integrado depende de la capacidad de navegador integrado de Kimi Work: si se te pide actualizar, actualiza la app de escritorio a la versión más reciente. El método de WebBridge requiere que WebBridge esté instalado primero en tu computadora y en Chrome.
</Callout>
