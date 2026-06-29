---
title: "Primeros pasos"
slug: "cli-getting-started"
order: 3
extract_headings: false
preview: true
preview_content: "Guía de instalación, inicio de sesión y primeros pasos de Kimi Code CLI."
---

<SeoMeta
  title="Instalación e inicio rápido de Kimi Code CLI - Centro de ayuda de Kimi"
  description="Comienza con Kimi Code CLI: comandos de instalación, uso en terminal y navegador, primer inicio de sesión y generación de AGENTS.md con /init."
/>

# Primeros pasos con Kimi Code CLI

Kimi Code CLI es un agente de IA que se ejecuta en la terminal y te ayuda a realizar tareas de desarrollo de software y operaciones cotidianas en la terminal: leer y modificar código, ejecutar comandos de shell, buscar archivos, obtener páginas web y planificar y ajustar de forma autónoma sus siguientes pasos según los resultados que va obteniendo.

Resulta ideal para escenarios como:

- **Escribir y modificar código**: implementar nuevas funciones, corregir errores y completar refactorizaciones
- **Comprender un proyecto**: explorar una base de código desconocida y responder preguntas sobre su arquitectura e implementación
- **Automatizar tareas**: procesar archivos por lotes, ejecutar compilaciones y pruebas, y encadenar varios scripts

La CLI está escrita en TypeScript, se distribuye a través de npm y se ejecuta sobre Node.js.

## Antes de comenzar

- **Sistema operativo**: macOS, Linux o Windows (mediante PowerShell)
- **Cuenta de Kimi**: una suscripción de membresía de Kimi activa o una clave de API que puedas usar

<Callout type="tip">
Kimi Code CLI es una aplicación TUI totalmente interactiva. Para la mejor experiencia visual, ejecútala en una terminal compatible con color verdadero y ligaduras, como [Kitty](https://sw.kovidgoyal.net/kitty/) o [Ghostty](https://ghostty.org/).
</Callout>

## Instalación

Hay dos opciones de instalación disponibles: el script de instalación oficial (recomendado, no requiere Node.js preinstalado) y una instalación global con npm.

### Script de instalación (recomendado)

macOS / Linux:

<Frames
  src="./images/cli-getting-started/screenshot-23.png"
  alt="Instalación de Kimi Code CLI"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

Windows (PowerShell):

<CodePreview
  files={[
    {
      name: "command.ps1",
      language: "powershell",
      content: "irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

El script descarga automáticamente la versión más reciente, verifica la suma de comprobación y coloca el ejecutable `kimi` en tu `PATH`.

<Callout type="tip">
En Windows, instala [Git for Windows](https://gitforwindows.org/) antes del primer inicio. Kimi Code CLI usa el Git Bash incluido como su entorno de shell; si Git Bash está instalado en una ubicación personalizada, configura `KIMI_SHELL_PATH` con la ruta absoluta de `bash.exe`.
</Callout>

### Instalación con npm

Si ya tienes instalado Node.js 22.19.0 o una versión posterior, puedes instalar directamente con npm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "node --version\nnpm install -g @moonshot-ai/kimi-code",
    },
  ]}
/>

O con pnpm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "pnpm add -g @moonshot-ai/kimi-code",
    },
  ]}
/>

### Verificar la instalación

Después de instalar, verifica que el ejecutable esté listo:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>

<Callout type="tip">
Si el comando `kimi` no se encuentra, intenta reabrir tu terminal o ejecutar `source ~/.bashrc` (o `~/.zshrc`).
</Callout>

> Debido a Gatekeeper de macOS, la primera ejecución de `kimi` puede tardar bastante más. Puedes acelerar los inicios posteriores agregando tu aplicación de terminal en **Configuración del sistema → Privacidad y seguridad → Herramientas para desarrolladores**.

## Actualizar y desinstalar

**Actualizar**: ejecuta `kimi upgrade` — la CLI busca la versión más reciente y muestra las opciones de actualización. Elige `Install update now` para actualizar según tu fuente de instalación actual. También puedes actualizar directamente con el gestor de paquetes:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

**Desinstalar**: si lo instalaste con el script, elimina el ejecutable `kimi`. Si lo instalaste con npm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm uninstall -g @moonshot-ai/kimi-code",
    },
  ]}
/>

## Primer inicio

### Terminal interactiva

Muévete al directorio de tu proyecto y ejecuta `kimi` para iniciar la interfaz interactiva:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd your-project\nkimi",
    },
  ]}
/>

### Instrucción única

Para ejecutar una sola instrucción sin entrar a la interfaz interactiva, usa `-p`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"Take a look at this project's directory structure\"",
    },
  ]}
/>

### Reanudar sesión

Para reanudar la sesión anterior, agrega `-C`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -C",
    },
  ]}
/>

### Primer inicio de sesión

En el primer inicio debes configurar una fuente de API. En la interfaz interactiva, escribe `/login` para comenzar el flujo de inicio de sesión:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

`/login` abre un selector de plataformas con dos opciones:

- **Kimi Code (OAuth)** — flujo de código de dispositivo; abre el enlace en cualquier dispositivo, inicia sesión e ingresa el código para autorizar
- **Clave de API de Kimi Platform** — ingresa una clave de API de `platform.kimi.com` o `platform.kimi.ai`

Para cerrar sesión, escribe `/logout` para borrar las credenciales actuales.

<Callout type="tip">
Si quieres conectar Anthropic, OpenAI, Google u otros proveedores, edita `~/.kimi-code/config.toml` directamente para configurar la clave de API. Para la referencia completa de todas las opciones de configuración, consulta la documentación sobre variables de entorno y anulaciones de configuración.
</Callout>

## Generar AGENTS.md

Ejecuta el comando `/init` en el directorio de tu proyecto. Kimi Code CLI analizará automáticamente la estructura del proyecto y generará un archivo `AGENTS.md`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

`AGENTS.md` sirve para darle a la IA información de contexto del proyecto, pasos de compilación, convenciones de código y otros datos que la ayuden a entender tu proyecto con mayor precisión.

## Tu primera conversación

Una vez que hayas iniciado sesión, describe una tarea en lenguaje natural. Un buen punto de partida es dejar que Kimi Code CLI se familiarice con el proyecto:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Take a look at this project's directory structure and briefly describe what each directory is for.",
    },
  ]}
/>

Kimi Code CLI llama automáticamente a herramientas de lectura de archivos, búsqueda y otras para examinar el contenido relevante antes de responder. Las operaciones de solo lectura se ejecutan automáticamente de forma predeterminada, sin necesidad de confirmación. Para las operaciones que modifican archivos o ejecutan comandos de shell, te pide confirmación antes de continuar.

También puedes describir una tarea más concreta directamente:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Add a function in src/utils that converts any string to kebab-case, and add a unit test for it.",
    },
  ]}
/>

Kimi Code CLI planifica los pasos, modifica el código, ejecuta las pruebas y te informa lo que hizo en cada paso.

<Callout type="tip">
¿No sabes qué hacer? Escribe `/help` en cualquier momento para abrir el panel integrado de comandos y atajos de teclado. Usa `↑`/`↓` para navegar y `Esc` para cerrar. Para salir, escribe `/exit`, presiona `Ctrl-C` dos veces o presiona `Ctrl-D` con el cuadro de entrada vacío.
</Callout>

## Comandos y atajos de teclado comunes

### Comandos de sesión

| Comando | Descripción |
| --- | --- |
| `/new` | Inicia una nueva sesión y borra el contexto actual |
| `/sessions` | Explora el historial de sesiones y elige una para reanudar |
| `/model` | Cambia el modelo actual |
| `/compact` | Comprime manualmente el contexto para liberar tokens |
| `/fork` | Bifurca la sesión actual, conservando el historial pero continuando de forma independiente |

### Atajos de teclado más usados

| Atajo | Descripción |
| --- | --- |
| `Esc` | Interrumpir la salida en streaming / cerrar una ventana emergente |
| `Ctrl-C` | Interrumpir la salida; presiónalo dos veces estando inactivo para salir |
| `Shift-Tab` | Activar o desactivar el modo Plan |
| `Ctrl-S` | Inyectar un mensaje a mitad del stream sin esperar a que termine la respuesta actual |
| `Ctrl-O` | Contraer / expandir la salida de las herramientas |

Para la lista completa, escribe `/help` o visita [Interacción y entrada](/kimi-code/cli-interaction).

## Dónde se almacenan los datos

Kimi Code CLI guarda sus datos locales en `~/.kimi-code/` de forma predeterminada: archivos de configuración, registros de sesiones, logs y la caché de actualizaciones. Para moverlos a otra ubicación, apunta a una nueva ruta mediante la variable de entorno `KIMI_CODE_HOME`. Para conocer la estructura completa de directorios, consulta la documentación sobre variables de entorno.

## Preguntas frecuentes

**Ingresé mi clave de API, pero dice que la autenticación falló.**

Primero, confirma que tu clave y tu Base URL pertenezcan a la misma plataforma. `api.kimi.com` y `api.moonshot.cn` son dos sistemas de cuentas completamente independientes, y sus claves de API no son intercambiables:

| Plataforma | Base URL | Facturación | Creación de la clave |
|------|---------|---------|-------------|
| **Kimi Code** | Compatible con OpenAI: `https://api.kimi.com/coding/v1`<br> Compatible con Anthropic: `https://api.kimi.com/coding/` | Suscripción de membresía de Kimi (incluye quota) | [Consola de Kimi Code](https://www.kimi.com/code/console) |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1` | Pago por uso | [Kimi Open Platform](https://platform.kimi.com) |

**El comando `kimi` no se encuentra después de la instalación.**

El script de instalación agrega `kimi` a tu PATH, pero debes reiniciar la terminal o ejecutar `source ~/.bashrc` (o `source ~/.zshrc`) para que surta efecto. Si aún no se encuentra, verifica que `~/.local/bin` esté en tu PATH.

**El navegador no apareció después de ejecutar `/login`.**

En un servidor remoto o entorno sin interfaz gráfica, `/login` mostrará una URL. Cópiala manualmente en tu navegador para completar la autorización.

Si tienes algún problema o sugerencia, comparte tus comentarios en [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues).

## Próximos pasos

- [Interacción y entrada](/kimi-code/cli-interaction) — operaciones del cuadro de entrada, flujo de aprobación, modo Plan y modo YOLO explicados
- [Sesiones y contexto](/kimi-code/cli-sessions) — reanudar sesiones, comprimir el contexto y exportar sesiones
- [Casos de uso comunes](/kimi-code/cli-use-cases) — ejemplos de prompts para tareas típicas
