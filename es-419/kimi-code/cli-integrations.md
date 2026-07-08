---
title: "Integraciones de herramientas"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Integraciones de herramientas - Centro de ayuda de Kimi"
  description="Además de la integración con tu IDE, puedes integrar Kimi Code CLI en otras herramientas para mejorar tu flujo de trabajo en la terminal."
/>

# Integraciones de herramientas

<Callout type="info">
Además de la integración con tu IDE, puedes integrar Kimi Code CLI en otras herramientas para mejorar tu flujo de trabajo en la terminal.
</Callout>

## Complemento de Zsh

[zsh-kimi-cli](https://github.com/MoonshotAI/zsh-kimi-cli) es un complemento de Zsh que te permite cambiar rápidamente a Kimi Code CLI desde tu shell.

### Instalación con Oh My Zsh

Si usas Oh My Zsh, sigue estos pasos para instalarlo:

1. Clona el repositorio en el directorio de complementos personalizados de Oh My Zsh:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. Agrega `kimi-cli` a la lista de complementos en `~/.zshrc`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. Vuelve a cargar la configuración:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### Uso

Una vez instalado, presiona **Ctrl-X** en tu terminal para cambiar rápidamente a Kimi Code CLI sin tener que escribir manualmente el comando `kimi`.
