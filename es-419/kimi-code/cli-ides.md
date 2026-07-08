---
title: "Integración con IDE"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "Integra Kimi Code CLI en tu IDE mediante ACP."
---

<SeoMeta
  title="Integración con IDE - Centro de ayuda de Kimi"
  description="Integra Kimi Code CLI en tu IDE mediante el Agent Client Protocol (ACP). Guías de configuración para Zed, IDE de JetBrains y Paseo, además de solución de problemas."
/>

# Usar Kimi Code CLI en IDE

<Callout type="info">
Kimi Code CLI admite la integración en IDE mediante el [Agent Client Protocol (ACP)](https://agentclientprotocol.com/get-started/introduction), lo que te permite usar la programación asistida por IA directamente dentro de tu editor.
</Callout>

## Requisitos previos

Antes de configurar tu IDE, asegúrate de tener instalado Kimi Code CLI y de haber completado la configuración de inicio de sesión.

El adaptador ACP se expone como el subcomando `kimi acp`. El IDE lo inicia como un proceso hijo y se comunica mediante stdin/stdout usando JSON-RPC. Cada vez que el IDE crea una sesión, el CLI reutiliza su estado de autenticación existente, sin necesidad de volver a iniciar sesión.

<Callout type="tip">
En macOS, los procesos hijos que se inician desde la interfaz gráfica de un IDE normalmente **no** heredan el `PATH` del shell de la terminal. Si `kimi` no está en un directorio del sistema como `/usr/local/bin`, usa la ruta absoluta en la configuración de tu IDE. Ejecuta `which kimi` en una terminal para encontrar la ruta activa.
</Callout>

## Usar Kimi Code CLI en Zed

[Zed](https://zed.dev/) es un editor moderno con soporte nativo para ACP.

Agrega lo siguiente al archivo de configuración de Zed ubicado en `~/.config/zed/settings.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

Campos de configuración:

- `type`: valor fijo `"custom"`
- `command`: ruta al ejecutable de Kimi Code CLI. Si `kimi` no está en el `PATH`, usa la ruta completa (por ejemplo, `/Users/you/.local/bin/kimi`).
- `args`: argumentos de inicio. El subcomando `acp` cambia el CLI al modo ACP.
- `env`: variables de entorno adicionales; por lo general déjalo vacío. Zed inyecta un entorno predeterminado automáticamente.

Una vez guardado, abre una nueva conversación en el panel Agent de Zed y este iniciará un subproceso ACP de `Kimi Code CLI` con la configuración anterior. Los servidores MCP declarados en la sección `agent_servers` de Zed también se reenvían al lado de kimi mediante el protocolo ACP.

## Usar Kimi Code CLI en los IDE de JetBrains

Los IDE de JetBrains (IntelliJ IDEA, PyCharm, WebStorm, etc.) admiten ACP a través del plugin de chat con IA.

Si no tienes una suscripción a JetBrains AI, puedes habilitar `llm.enable.mock.response` en el Registry para acceder al panel de chat con IA en escenarios exclusivos de ACP. Presiona Shift dos veces y busca "Registry" para abrirlo.

En el menú del panel de chat con IA, haz clic en **Configure ACP agents** y agrega la siguiente configuración:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains es estricto con el campo `command`: usa siempre una **ruta absoluta**, que puedes obtener ejecutando `which kimi` en una terminal. Una vez guardado, `Kimi Code CLI` aparecerá en el selector de agentes del chat con IA.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## Usar Kimi Code CLI en Paseo

[Paseo](https://paseo.sh/) es un orquestador autohospedado que ejecuta y supervisa CLI de agentes desde tu escritorio, la web y el móvil. Se conecta a Kimi Code CLI mediante ACP, de la misma forma que lo hace un IDE.

Elige **Kimi Code CLI** del catálogo de proveedores ACP integrados de Paseo, o agrega un proveedor personalizado en `~/.paseo/config.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

El adaptador ACP genérico de Paseo no gestiona el flujo de inicio de sesión, así que primero completa el inicio de sesión desde la terminal (consulta [Requisitos previos](#requisitos-previos)); de lo contrario, la creación de la sesión falla con `Authentication required`.

## Solución de problemas

- **La sesión se desconecta de inmediato / el IDE muestra "agent exited"**: por lo general se debe a una ruta de `command` incorrecta o a una falta de inicio de sesión. Ejecuta primero `kimi acp` en una terminal para verificar: si se queda esperando a stdin, el CLI funciona bien y el problema está en la configuración del IDE; si se cierra de inmediato con un error, sigue el mensaje de error (lo más común es que necesites ejecutar `/login`).
- **El IDE muestra "auth required"**: el CLI no tiene un token de autenticación utilizable. Cierra el IDE, ejecuta `kimi` en una terminal para completar el inicio de sesión y luego reinicia el IDE.
- **Las herramientas MCP no son visibles**: revisa la tabla de capacidades de `kimi acp` para confirmar que el tipo de transporte MCP configurado en tu IDE es compatible. El adaptador ACP de Kimi Code CLI admite actualmente los transportes `http` y `stdio`; los tipos `sse` y `acp` se descartan de forma silenciosa y se escribe una advertencia en el registro.
