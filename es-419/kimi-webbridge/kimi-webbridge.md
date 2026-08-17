---
title: "Introducción a Kimi WebBridge"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Introducción a Kimi WebBridge - Centro de ayuda de Kimi"
  description="Kimi WebBridge es una extensión de navegador diseñada para agentes de IA. Se ejecuta directamente en tu navegador Chrome o Edge y aprovecha tus sesiones de inicio de sesión existentes para que los agentes interactúen con las páginas web como lo haría una persona."
  ogType="article"
/>

# Introducción a Kimi WebBridge

Kimi WebBridge es una extensión de navegador diseñada para agentes de IA. A diferencia de las soluciones de automatización de navegadores basadas en la nube, Kimi WebBridge se ejecuta directamente en tu navegador Chrome o Edge y aprovecha automáticamente tus sesiones de inicio de sesión existentes para que los agentes interactúen con las páginas web como lo haría una persona.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Tutorial de Kimi WebBridge",
    },
  ]}
/>

<Callout type="tip">
Te recomendamos instalar Kimi WebBridge en tu computadora de trabajo principal para obtener la mejor experiencia de automatización del navegador.
</Callout>

<Callout type="info">
WebBridge funciona mediante un servicio puente local y una extensión de navegador. Toda la ejecución ocurre localmente en tu dispositivo: los estados de inicio de sesión y el contenido de las páginas web nunca salen de tu equipo.
</Callout>

<Frames
  src="./images/introduction.png"
  alt="Introducción a WebBridge"
/>

## Paso 1: descarga la extensión Kimi WebBridge

Puedes descargarla mediante los siguientes métodos:

**Método 1: instalar desde la tienda web**

- Para usuarios de Chrome: ve a [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Para usuarios de Edge: ve a [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Método 2: instalación manual**

Si no puedes acceder a la tienda web, puedes usar el método de instalación manual.

Luego sigue los pasos correspondientes a tu navegador:

**Chrome:**

1. Descarga el paquete de la extensión desde el [sitio oficial de Kimi WebBridge](https://www.kimi.com/features/webbridge).
2. Extrae el archivo descargado
3. Abre `chrome://extensions/` en la barra de direcciones
4. Activa el "Modo de desarrollador" en la esquina superior derecha
5. Haz clic en "Cargar descomprimida"
6. En el selector de archivos, elige la carpeta de WebBridge extraída

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. Descarga el paquete de la extensión desde el [sitio oficial de Kimi WebBridge](https://www.kimi.com/features/webbridge).
2. Extrae el archivo descargado
3. Abre `edge://extensions/` en la barra de direcciones
4. Activa el "Modo de desarrollador" en la esquina inferior izquierda
5. Haz clic en "Cargar descomprimida"
6. En el selector de archivos, elige la carpeta de WebBridge extraída

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Después de la instalación, deberías ver WebBridge en la lista de extensiones de tu navegador. Para acceder más fácilmente, te recomendamos anclarla a la barra de herramientas del navegador.

## Paso 2: elige tu método de configuración y complétala

### Método 1: usar con Kimi Work Desktop

1. Descarga Kimi Work desde el [sitio oficial](https://www.kimi.com/products/kimi-work)

2. Una vez instalado, puedes enviar instrucciones en Kimi Work, por ejemplo:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Usa Kimi WebBridge para abrir Xiaohongshu y busca publicaciones sobre el lanzamiento de Kimi K2.6",
    },
  ]}
/>

### Método 2: combinar con agentes locales

Compatible con Claude Code, Codex, Cursor, Kimi Code, Hermes Claw y más.

1. Envía el siguiente comando directamente en el agente para instalar WebBridge automáticamente. El agente ejecutará la configuración adecuada según tu sistema operativo.

Si eres usuario de macOS, usa el siguiente comando:

<CodePreview
  files={[
    {
      name: "macos.sh",
      language: "bash",
      content:
        "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

Si eres usuario de Windows, usa el siguiente comando:

<CodePreview
  files={[
    {
      name: "windows.ps1",
      language: "powershell",
      content:
        "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

2. Comienza a usarlo

Una vez que la extensión esté conectada, puedes enviar instrucciones.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Usa Kimi WebBridge para abrir X.com y busca publicaciones sobre el lanzamiento de Kimi K2.6",
    },
  ]}
/>
