---
title: "Интеграции с инструментами"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Интеграции с инструментами — Справочный центр Kimi"
  description="Помимо интеграции с IDE, Kimi Code CLI можно подключать к другим инструментам, чтобы сделать работу в терминале удобнее."
/>

# Интеграции с инструментами

<Callout type="info">
Помимо интеграции с IDE, Kimi Code CLI можно подключать к другим инструментам, чтобы сделать работу в терминале удобнее.
</Callout>

## Плагин Zsh

[zsh-kimi-cli](https://www.github.com/MoonshotAI/zsh-kimi-cli) — плагин Zsh, с которым можно быстро переключаться из командной оболочки на Kimi Code CLI.

### Установка в Oh My Zsh

Если вы используете Oh My Zsh, установите плагин так:

1. Клонируйте репозиторий в каталог пользовательских плагинов Oh My Zsh:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. Добавьте `kimi-cli` в список плагинов в `~/.zshrc`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. Перезагрузите конфигурацию:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### Использование

После установки нажмите **Ctrl-X** в терминале, чтобы быстро перейти в Kimi Code CLI, не вводя команду `kimi` вручную.
