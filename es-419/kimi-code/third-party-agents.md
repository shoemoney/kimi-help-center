---
title: "Uso con agentes de programación de terceros"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Uso con agentes de programación de terceros - Centro de ayuda de Kimi"
  description="Los beneficios de Kimi Code se pueden usar con Claude Code y Roo Code, lo que te permite disfrutar de las capacidades de IA de Kimi dentro de tus herramientas de programación preferidas."
/>

# Uso con agentes de programación de terceros

Los beneficios de Kimi Code se pueden usar con Claude Code y Roo Code, lo que te permite disfrutar de las capacidades de IA de Kimi dentro de tus herramientas de programación preferidas.

## Requisitos previos

- Una membresía activa de Kimi con los beneficios de Kimi Code habilitados.
- Una API Key (creada en la [consola de Kimi](https://www.kimi.com/code)).

## Uso con Claude Code

[Claude Code](https://www.docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) es un asistente de programación de línea de comandos de Anthropic.

### Pasos de configuración

1. Define las variables de entorno:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. Inicia Claude Code con el modelo `kimi-k2.5`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-k2.5",
    },
  ]}
/>

> En Claude Code, puedes presionar **Tab** para cambiar al modelo Kimi K2 Thinking.

> Si te aparece un error 400 causado por llamadas a `tool_search`, puedes resolverlo temporalmente definiendo la variable de entorno `ENABLE_TOOL_SEARCH=false`.

## Uso con Roo Code

[Roo Code](https://www.github.com/RooCodeInc/Roo-Code) es una extensión de programación con IA para VS Code.

### Instalar Roo Code

1. Busca **Roo Code** en el VS Code Extensions Marketplace e instálalo.
2. Tras la instalación, el ícono de Roo Code aparecerá en la barra de actividad; si no aparece, reinicia VS Code.

### Configurar el modelo de Kimi Code

1. Abre el panel de Roo Code y ve a la página de **Settings**.
2. En la sección **Providers**, selecciona **OpenAI Compatible** y completa lo siguiente:

   | Configuración | Valor |
   | --- | --- |
   | Entrypoint | `https://api.kimi.com/coding/v1` |
   | API Key | Tu API Key |
   | Model | `kimi-k2.5` |

3. Guarda la configuración y todo estará listo.

## Notas importantes

- Los beneficios de Kimi Code solo son compatibles con **Kimi Code CLI**, **Claude Code** y **Roo Code**.
- Usar tu API Key con plataformas o herramientas no autorizadas puede considerarse una infracción y podría resultar en acceso restringido.
- Si tienes dudas, consulta la página de [Beneficios](/kimi-code/benefits) o comunícate con el soporte de Kimi.
