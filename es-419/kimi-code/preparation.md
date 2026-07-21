---
title: "Preparación"
slug: "preparation"
order: 0
extract_headings: false
preview: true
preview_content: "Conceptos básicos que debes conocer antes de usar Kimi Code: terminales, PowerShell, CLI y consideraciones de seguridad."
---

<SeoMeta
  title="Preparación antes de usar Kimi Code - Centro de ayuda de Kimi"
  description="Aprende los conceptos básicos de terminales, PowerShell y CLI, y cómo usar Kimi Code CLI de forma segura para desarrollar."
/>

# Preparación

Antes de usar Kimi Code, conviene que entiendas algunos conceptos básicos. Te ayudarán a instalar y usar Kimi Code con mayor facilidad.

## ¿Qué es una terminal?

Una **terminal** es una ventana desde la que controlas tu computadora escribiendo comandos de texto.

Puedes verla como un “administrador de archivos basado en texto”: en una terminal, en lugar de hacer clic en íconos con el mouse, escribes comandos como `ls`, `cd` y `mkdir` para ver el contenido de carpetas, cambiar de directorio, crear archivos y más.

<Frames
  src="./images/preparation/preparation-01.png"
  alt="Ilustración de una terminal"
/>

### Cómo abrir una terminal

| Sistema operativo | Cómo abrirla |
|---------|---------|
| **macOS** | Presiona `Cmd + Space`, ingresa "Terminal" o "终端" y luego presiona Enter |
| **Windows** | Presiona `Win + R`, ingresa `powershell` o `wt`;<br>o busca "PowerShell"/"Terminal" en el menú Inicio |
| **Linux** | Presiona `Ctrl + Alt + T`, o busca "Terminal" en el menú de aplicaciones |

### Cómo verificar tu sistema operativo

- **macOS**: Haz clic en el ícono de Apple en la esquina superior izquierda de la pantalla → "Acerca de esta Mac"
- **Windows**: Presiona `Win + Pause/Break`, o haz clic derecho en "Este equipo" → "Propiedades"
- **Linux**: Ejecuta `uname -a` o `cat /etc/os-release` en la terminal

## ¿Qué es PowerShell?

<Frames
  src="./images/preparation/preparation-02.png"
  alt="Ilustración de PowerShell"
/>

**PowerShell** es una herramienta de terminal de uso común en Windows. Es más potente que el símbolo del sistema estándar (CMD). En Windows, Kimi Code CLI debe instalarse y usarse en PowerShell.

Windows tiene dos herramientas distintas de “línea de comandos”. No las confundas:

| Herramienta | Descripción | ¿Es adecuada? |
|-----|------|---------|
| **CMD (Símbolo del sistema)** | La herramienta de línea de comandos más básica de Windows | ❌ No recomendada |
| **PowerShell** | Una herramienta de línea de comandos más potente y moderna | ✅ Recomendada |

> **Consejo**: El comando de instalación de Kimi Code CLI debe ejecutarse en PowerShell. Es posible que no funcione correctamente en CMD.

## Directorio de trabajo

Cuando Kimi Code CLI se inicia, usa tu carpeta actual como **directorio de trabajo**. Solo puede leer y modificar archivos dentro de ese directorio de trabajo.

**Antes de empezar, revisa la ruta actual en tu terminal**:

- El prompt de la terminal suele mostrar el directorio actual, por ejemplo `~/projects/my-app$`
- Ingresa `pwd` (macOS/Linux) o `cd` (Windows) para ver la ruta completa
- Usa `cd <folder-name>` para entrar al directorio del proyecto de destino y luego ejecuta `kimi`

> **Ejemplo**: Supongamos que tu proyecto está en `~/Documents/my-project`. Inícialo así:
> 1. Abre la terminal
> 2. Ingresa `cd ~/Documents/my-project`
> 3. Ingresa `kimi` para iniciar

## Cómo ejecutar comandos

<Frames
  src="./images/preparation/preparation-03.png"
  alt="Ilustración de ejecución de comandos"
/>

Ejecutar comandos en una terminal o en PowerShell es sencillo:

1. **Copia el comando**: Copia el texto del comando desde la documentación
   - macOS/Linux: `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash`
   - Windows: `irm https://code.kimi.com/kimi-code/install.ps1 | iex`
2. **Pégalo en la terminal**: Haz clic derecho en la ventana de la terminal, o presiona `Cmd/Ctrl + V` para pegar
3. **Presiona Enter**: Presiona la tecla `Enter` para ejecutar el comando
4. **Espera a que termine**: La terminal mostrará el proceso de ejecución y el resultado

> **Nota**: En una terminal, `Ctrl+C` normalmente **interrumpe el comando actual**; no copia texto. Para copiar, usa `Cmd/Ctrl + Shift + C`; para pegar, usa `Cmd/Ctrl + Shift + V`; o usa el menú contextual.

> **Consejo**: Si se te pide ingresar una contraseña mientras se ejecuta un comando, la terminal no mostrará ningún carácter. Es un mecanismo de seguridad normal. Simplemente escribe la contraseña y presiona Enter.

## ¿Qué es CLI?

<Frames
  src="./images/preparation/preparation-04.png"
  alt="Ilustración de una terminal"
/>

**CLI** significa **C**ommand-**L**ine **I**nterface. Consiste en usar una herramienta escribiendo comandos de texto en lugar de hacer clic en botones dentro de una interfaz gráfica.

Kimi Code CLI es una herramienta de línea de comandos: ingresas `kimi` en la terminal para iniciarla y luego interactúas con la AI mediante comandos de texto para que te ayude a leer código, modificar archivos, ejecutar comandos y más.

## Entorno de red

Para usar Kimi Code, necesitas acceso a los servidores de Kimi. Si tu entorno de red tiene alguna de las siguientes restricciones, quizá debas ajustar la configuración:

- **Red de la empresa o escuela**: Algunos entornos de intranet pueden restringir el acceso a API externas. Si tienes un proxy, puedes configurar su dirección en la configuración.
- **VPN/proxy**: Si usas un proxy global, asegúrate de que no intercepte ni interfiera con las solicitudes a `api.kimi.com` o `api.moonshot.cn`.
- **Firewall**: Verifica si el firewall de tu sistema o router está bloqueando el acceso de red desde el programa de terminal.

## Consideraciones de seguridad

Kimi Code CLI es un AI Agent potente. Puede:

- **Leer** el contenido de archivos en tu computadora
- **Modificar** tu código y tus archivos de configuración
- **Ejecutar** comandos Shell, como instalar dependencias o ejecutar pruebas

**Ten en cuenta lo siguiente al usarlo**:

- **No lo inicies en directorios sensibles**: Evita ejecutar Kimi Code CLI en directorios que contengan contraseñas, claves o archivos personales privados.
- **Revisa las acciones con cuidado**: Kimi Code te pedirá confirmación antes de modificar archivos o ejecutar comandos. No hagas clic en “Aceptar” por costumbre.
- **Comprende antes de continuar**: Si no tienes claro el impacto de una acción, pídele a Kimi Code que explique exactamente qué hará antes de decidir si continúas.
- **Haz copia de seguridad del código importante**: Antes de usar Kimi Code en un proyecto importante, recomendamos guardar tu código en un control de versiones, como Git, para que puedas revertir cambios en cualquier momento.

> **Recomendación**: La primera vez que lo uses, prueba Kimi Code CLI en un proyecto de prueba o en una copia de tu proyecto. Cuando te familiarices con su funcionamiento, úsalo en tus proyectos de producción.
