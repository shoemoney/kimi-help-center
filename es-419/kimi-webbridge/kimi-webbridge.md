---
title: "Introducción a la Extensión de navegador Kimi"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Introducción a la Extensión de navegador Kimi - Centro de ayuda de Kimi"
  description="La Extensión de navegador Kimi (antes Kimi WebBridge) es un plugin de navegador para agentes de IA que abre páginas, hace clic en botones, completa formularios y extrae información."
  ogType="article"
/>

# Introducción a la Extensión de navegador Kimi

La Extensión de navegador Kimi (antes Kimi WebBridge) es un plugin de navegador para agentes de IA. Puede abrir páginas, hacer clic en botones, completar formularios y extraer información, para que el agente realice las tareas web tediosas de forma automática, como una persona. También puedes descomponer las páginas web que usas con frecuencia en CLI y convertir las operaciones web grabadas en Skills que el agente puede reutilizar en cualquier momento.

## Dos formas de uso

La Extensión de navegador Kimi ofrece dos formas de uso:

- **Barra lateral del navegador**: haz clic en el ícono de Kimi en la barra de herramientas para abrir la barra lateral, inicia sesión con una cuenta de membresía de Kimi y chatea directamente para que Kimi opere la página actual por ti.
- **Control remoto por un Agent local**: permite que agentes de IA como Kimi Work o Claude Code controlen la extensión de forma remota para automatizar tareas web.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Tutorial de la Extensión de navegador Kimi",
    },
  ]}
/>

## Descarga e instalación

### Paso 1: descarga la Extensión de navegador Kimi

Puedes descargarla mediante los siguientes métodos:

**Método 1: instalar desde la tienda web**

- Para usuarios de Chrome: ve a [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Para usuarios de Edge: ve a [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Método 2: instalación manual**

Si no puedes acceder a la tienda web, puedes usar el método de instalación manual.

Luego sigue los pasos correspondientes a tu navegador:

**Chrome:**

1. Descarga el paquete de la extensión desde el [sitio oficial de la Extensión de navegador Kimi](https://www.kimi.com/features/webbridge).
2. Extrae el archivo descargado
3. Abre `chrome://extensions/` en la barra de direcciones
4. Activa el "Modo de desarrollador" en la esquina superior derecha
5. Haz clic en "Cargar descomprimida"
6. En el selector de archivos, elige la carpeta WebBridge extraída

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. Descarga el paquete de la extensión desde el [sitio oficial de la Extensión de navegador Kimi](https://www.kimi.com/features/webbridge).
2. Extrae el archivo descargado
3. Abre `edge://extensions/` en la barra de direcciones
4. Activa el "Modo de desarrollador" en la esquina inferior izquierda
5. Haz clic en "Cargar descomprimida"
6. En el selector de archivos, elige la carpeta WebBridge extraída

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Después de la instalación, deberías ver la Extensión de navegador Kimi en la lista de extensiones de tu navegador. Para acceder más fácilmente, te recomendamos anclarla a la barra de herramientas del navegador.

### Paso 2: elige tu método de configuración y complétala

#### Método 1: usar con Kimi Work Desktop

1. Descarga Kimi Work desde el [sitio oficial](https://www.kimi.com/products/kimi-work)

2. Una vez instalado, puedes abrir la barra lateral de la extensión y enviar instrucciones, por ejemplo:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Usa la Extensión de navegador Kimi para abrir Xiaohongshu y busca publicaciones sobre el lanzamiento de Kimi K3",
    },
  ]}
/>

#### Método 2: combinar con agentes locales

Compatible con Claude Code, Codex, Cursor, Kimi Code, Hermes Claw y más.

1. Envía el siguiente comando directamente en el agente para instalar la Extensión de navegador Kimi automáticamente. El agente ejecutará la configuración adecuada según tu sistema operativo.

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
      content: "Usa la Extensión de navegador Kimi para abrir X.com y busca publicaciones sobre el lanzamiento de Kimi K3",
    },
  ]}
/>
