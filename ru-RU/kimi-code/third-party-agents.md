---
title: "Использование со сторонними агентами для написания кода"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Использование со сторонними агентами для написания кода - Справочный центр Kimi"
  description="Преимуществами Kimi Code можно пользоваться в Claude Code и Roo Code, чтобы работать с возможностями ИИ Kimi в привычных инструментах для написания кода."
/>

# Использование со сторонними агентами для написания кода

Преимуществами Kimi Code можно пользоваться в Claude Code и Roo Code, чтобы работать с возможностями ИИ Kimi в привычных инструментах для написания кода.

## Необходимые условия

- Активная подписка Kimi с включёнными преимуществами Kimi Code.
- Ключ API (создаётся в [консоли Kimi](https://www.kimi.com/code)).

## Использование с Claude Code

[Claude Code](https://code.claude.com/docs/en/overview) — это ассистент Anthropic для написания кода в командной строке.

### Настройка

1. Задайте переменные окружения:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. Запустите Claude Code с моделью `kimi-for-coding`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-for-coding",
    },
  ]}
/>

> В Claude Code можно нажать **Tab**, чтобы переключиться на модель Kimi K2 Thinking.

> Если вы столкнулись с ошибкой 400, вызванной вызовами `tool_search`, временно устранить её можно, задав переменную окружения `ENABLE_TOOL_SEARCH=false`.

### Переключение на HighSpeed

HighSpeed выдаёт примерно в 5–6 раз более высокую скорость вывода, чем Standard, при **расходе кредитов примерно в 3 раза больше**, и требует тарифа [Allegretto](https://www.kimi.com/membership/pricing) или выше. Включить его в Claude Code можно двумя способами:

- **Способ 1: команда `/fast on`** — после запуска Claude Code введите `/fast on`; вывод `⚡ Fast mode ON` подтверждает включение.
- **Способ 2: команда `/config`** — введите `/config`, чтобы открыть панель конфигурации, затем включите **Fast mode** (и **Thinking mode**) на вкладке **Config**.

## Использование с Roo Code

[Roo Code](https://github.com/RooCodeInc/Roo-Code) — это расширение для написания кода с ИИ в VS Code.

### Установка Roo Code

1. Найдите **Roo Code** в магазине расширений VS Code и установите его.
2. После установки значок Roo Code появится на панели действий; если этого не произошло, перезапустите VS Code.

### Настройка модели Kimi Code

1. Откройте панель Roo Code и перейдите на страницу **Настройки**.
2. В разделе **Провайдеры** выберите **совместимый с OpenAI** и заполните поля:

   | Параметр | Значение |
   | --- | --- |
   | Точка входа | `https://api.kimi.com/coding/v1` |
   | Ключ API | Ваш ключ API |
   | Модель | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. Сохраните конфигурацию — всё готово к работе.

## Важно

- Преимущества Kimi Code поддерживаются только в **Kimi Code CLI**, **Claude Code** и **Roo Code**.
- Использование вашего ключа API на неавторизованных платформах или в неавторизованных инструментах может считаться нарушением и привести к ограничению доступа.
- Если у вас есть вопросы, см. страницу [Преимущества](/kimi-code/benefits) или обратитесь в поддержку Kimi.
