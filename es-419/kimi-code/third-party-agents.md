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

[Claude Code](https://code.claude.com/docs/en/overview) es un asistente de programación de línea de comandos de Anthropic.

### Pasos de configuración

Después de instalar, no inicies Claude directamente. Primero ejecuta el siguiente script en la terminal para omitir el flujo de inicio de sesión predeterminado de Anthropic:

<CodePreview
  files={[
    {
      name: "skip-onboarding.sh",
      content: "node --eval \"\n// enable third party model support and fast mode\nconst claudeJsonFilePath = path.join(os.homedir(), '.claude.json');\nif (fs.existsSync(claudeJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeJsonFilePath, 'utf-8'));\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ ...content, penguinModeOrgEnabled: true, hasCompletedOnboarding: true }, null, 2), 'utf-8');\n} else {\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ penguinModeOrgEnabled: true, hasCompletedOnboarding: true }), 'utf-8');\n}\n\n// delete old model id\nconst claudeSettingsJsonFilePath = path.join(os.homedir(), '.claude', 'settings.json');\nif (fs.existsSync(claudeSettingsJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeSettingsJsonFilePath, 'utf-8'));\n    if (typeof content === 'object' && typeof content.env === 'object') {\n        for (const element of [\n            'ANTHROPIC_MODEL',\n            'ANTHROPIC_SMALL_FAST_MODEL',\n            'CLAUDE_CODE_SUBAGENT_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME',\n        ]) {\n            delete content.env[element];\n        }\n        fs.writeFileSync(claudeSettingsJsonFilePath, JSON.stringify(content, null, 2), 'utf-8');\n    }\n}\n\"",
    },
  ]}
/>

Luego define las variables de entorno e inicia:

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

2. Inicia Claude Code con el modelo `kimi-for-coding`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-for-coding",
    },
  ]}
/>

> En Claude Code, puedes presionar **Tab** para cambiar al modelo Kimi K2 Thinking.

> Si te aparece un error 400 causado por llamadas a `tool_search`, puedes resolverlo temporalmente definiendo la variable de entorno `ENABLE_TOOL_SEARCH=false`.

### Cambiar a HighSpeed

HighSpeed ofrece una velocidad de salida de aproximadamente 5–6× la de Standard con un **consumo de créditos de aproximadamente 3×**, y requiere un plan [Allegretto](https://www.kimi.com/membership/pricing) o superior. Hay dos formas de activarlo en Claude Code:

- **Opción 1: el comando `/fast on`**: tras iniciar Claude Code, escribe `/fast on`; la salida `⚡ Fast mode ON` confirma que está activado.
- **Opción 2: el comando `/config`**: escribe `/config` para abrir el panel de configuración y activa **Fast mode** (y **Thinking mode**) en la pestaña **Config**.

## Uso con Roo Code

[Roo Code](https://github.com/RooCodeInc/Roo-Code) es una extensión de programación con IA para VS Code.

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
   | Model | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. Guarda la configuración y todo estará listo.

## Notas importantes

- Al usar las herramientas, mantén la identidad real de la herramienta; alterar el identificador de cliente (User-Agent) se considerará una infracción y podría suspender tus beneficios de membresía.
- Si tienes dudas, consulta la página de [Beneficios](/kimi-code/benefits) o comunícate con el soporte de Kimi.
