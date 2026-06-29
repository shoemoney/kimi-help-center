---
title: "Inicio rápido de Kimi Code para VS Code"
slug: "vscode-getting-started"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="Inicio rápido de Kimi Code para VS Code - Centro de ayuda de Kimi"
  description="Kimi Code para VS Code es una extensión integrada en Visual Studio Code. Una vez instalada, puedes hacer preguntas, revisar diferencias de código y confirmar cambios rápidamente..."
/>

# Inicio rápido de Kimi Code para VS Code

<Callout type="warning">
**Aviso de compatibilidad de la extensión para VS Code**

Actualmente, Kimi Code para VS Code solo está disponible para nuevas instalaciones por parte de usuarios del antiguo CLI de Python. Los usuarios existentes que ya hayan instalado el complemento pueden seguir usándolo tras actualizar al nuevo CLI. Por ahora, los usuarios del CLI en versión TS no pueden realizar la instalación.
</Callout>

Kimi Code para VS Code es una extensión integrada en Visual Studio Code. Tras instalarla, puedes hacer preguntas directamente dentro del editor, revisar diferencias de código y confirmar cambios rápidamente.

La extensión puede leer el contenido de los archivos que indiques y mostrar sugerencias de modificación mediante una interfaz visual, ejecutándolas después de tu confirmación. Todo el flujo de trabajo está bajo tu control y, al mismo tiempo, mejora notablemente la eficiencia del desarrollo.

Esta extensión ofrece un panel de chat nativo en VS Code, que admite:
- Referenciar archivos o carpetas con el símbolo `@`.
- Ejecutar escaneos de proyectos y gestionar el contexto con comandos `/`.
- Vistas de diferencias que muestran los cambios en los archivos con soporte para revertir.
- Integrar servidores MCP para invocar herramientas externas.

---

## Instalación

1.  **Requisitos previos**: Necesitas una suscripción a una cuenta de Kimi o una API key de Kimi.
2.  **Marketplace**: Instálala desde el [Marketplace de VS Code](vscode:extension/moonshot-ai.kimi-code).

<Callout type="tip">
Si la extensión no aparece tras la instalación, reinicia VS Code o ejecuta **Developer: Reload Window** en la paleta de comandos (Mac: `Cmd+Shift+P`, Win/Linux: `Ctrl+Shift+P`).
</Callout>

---

## Autenticación

Kimi Code admite dos modos de autenticación. Puedes cambiar de modo en cualquier momento mediante el **ícono de engranaje**.

<Frames
  src="./images/vscode/kimi-code-gear-icon.png"
  alt="Configuración de autenticación"
  width={800}
  height={450}
/>

- **Modo cuenta de Kimi**: Haz clic en el botón de inicio de sesión para autorizar desde tu navegador.
- **Modo API key**: Haz clic para omitir el inicio de sesión si ya configuraste una API key.

---

## Flujos de trabajo habituales

Lectura de código: Escribe `@` para seleccionar un archivo o carpeta, pide una explicación del flujo del código y sigue haciendo preguntas de seguimiento.

Refactorización: Referencia el código objetivo, como `@src/feature/`, solicita un plan de refactorización, revisa las diferencias y aprueba de forma selectiva, revirtiendo cuando sea necesario.

Depuración: Pega mensajes de error o trazas de pila, referencia los archivos relacionados, solicita un diagnóstico y correcciones, y luego aprueba los cambios propuestos.

Resumen del proyecto: Referencia una carpeta, como `@src/services/`, solicita un mapa de módulos o un resumen de la arquitectura, y sigue preguntando sobre dependencias o puntos débiles.

---

## Comandos y atajos

Usa `CodePreview` para probar comandos rápidamente o consultar atajos clave:

<CodePreview
  files={[
    {
      name: "shortcuts.txt",
      language: "text",
      content: "Ctrl+Shift+K : Focus Kimi input box\nAlt+K : Insert current file reference\nCtrl+N : New conversation",
    },
  ]}
/>

| Atajo | Función |
| :--- | :--- |
| `Ctrl+Shift+K` / `Cmd+Shift+K` | Enfocar el cuadro de entrada de Kimi |
| `Alt+K` | Insertar referencia al archivo actual |
| `Ctrl+N` / `Cmd+N` | Nueva conversación |
| `↑` / `↓` | Navegar por el historial de entradas |

<Callout type="info">
Escribe **Kimi Code** en la paleta de comandos para acceder a más comandos: abrir en una pestaña nueva, abrir en la barra lateral o gestionar sesiones.
</Callout>
