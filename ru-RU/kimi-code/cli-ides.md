---
title: "Интеграция с IDE"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "Интегрируйте Kimi Code CLI в вашу IDE через ACP."
---

<SeoMeta
  title="Интеграция с IDE — Справочный центр Kimi"
  description="Интегрируйте Kimi Code CLI в вашу IDE через Agent Client Protocol (ACP). Инструкции по настройке Zed, IDE JetBrains и Paseo, а также устранение неполадок."
/>

# Использование Kimi Code CLI в IDE

<Callout type="info">
Kimi Code CLI поддерживает интеграцию с IDE через [Agent Client Protocol (ACP)](https://agentclientprotocol.com/), позволяя писать код с помощью ИИ прямо в редакторе.
</Callout>

## Предварительные требования

Перед настройкой IDE убедитесь, что Kimi Code CLI установлен и вход в аккаунт выполнен.

Адаптер ACP доступен как подкоманда `kimi acp`. IDE запускает его как дочерний процесс и обменивается данными через stdin/stdout по JSON-RPC. Каждый раз, когда IDE создает сессию, CLI использует уже имеющееся состояние аутентификации — повторно входить в аккаунт не нужно.

<Callout type="tip">
Дочерние процессы, запущенные из графического интерфейса IDE на macOS, обычно **не** наследуют `PATH` терминальной оболочки. Если `kimi` находится не в системном каталоге вроде `/usr/local/bin`, укажите в конфигурации IDE абсолютный путь. Чтобы узнать текущий путь, выполните `which kimi` в терминале.
</Callout>

## Использование Kimi Code CLI в Zed

[Zed](https://zed.dev/) — современный редактор со встроенной поддержкой ACP.

Добавьте следующий фрагмент в конфигурационный файл Zed по адресу `~/.config/zed/settings.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

Поля конфигурации:

- `type`: фиксированное значение `"custom"`
- `command`: путь к исполняемому файлу Kimi Code CLI. Если `kimi` отсутствует в `PATH`, укажите полный путь (например, `/Users/you/.local/bin/kimi`).
- `args`: аргументы запуска. Подкоманда `acp` переводит CLI в режим ACP.
- `env`: дополнительные переменные окружения; обычно это поле оставляют пустым. Zed автоматически подставляет окружение по умолчанию.

После сохранения откройте новый диалог на панели Agent в Zed — редактор запустит подпроцесс ACP `Kimi Code CLI` с указанной выше конфигурацией. Серверы MCP, объявленные в разделе `agent_servers` Zed, также передаются на сторону kimi по протоколу ACP.

## Использование Kimi Code CLI в IDE JetBrains

IDE JetBrains (IntelliJ IDEA, PyCharm, WebStorm и др.) поддерживают ACP через плагин AI-чата.

Если у вас нет подписки JetBrains AI, включите `llm.enable.mock.response` в Registry, чтобы получить доступ к панели AI-чата в сценариях только с ACP. Дважды нажмите Shift и найдите "Registry", чтобы открыть ее.

В меню панели AI-чата нажмите **Configure ACP agents** и добавьте следующую конфигурацию:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains строго обрабатывает поле `command` — всегда указывайте **абсолютный путь**. Его можно получить, выполнив `which kimi` в терминале. После сохранения `Kimi Code CLI` появится в селекторе агентов AI-чата.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## Использование Kimi Code CLI в Paseo

[Paseo](https://paseo.sh/) — self-hosted-оркестратор, который запускает agent CLI и следит за их работой с вашего компьютера, из веб-интерфейса и с мобильных устройств. Он подключается к Kimi Code CLI по ACP — так же, как это делает IDE.

Выберите **Kimi Code CLI** во встроенном каталоге ACP-провайдеров Paseo или добавьте собственного провайдера в `~/.paseo/config.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

Универсальный ACP-адаптер Paseo не запускает сценарий входа, поэтому сначала выполните вход в терминале (см. [Предварительные требования](#предварительные-требования)) — иначе создание сессии завершится ошибкой `Authentication required`.

## Устранение неполадок

- **Сессия сразу отключается / IDE показывает "agent exited"**: обычно причина в неверном пути `command` или в том, что вход не выполнен. Сначала запустите `kimi acp` в терминале для проверки: если процесс остается в ожидании stdin, с самим CLI все в порядке, а проблема в конфигурации IDE; если он сразу завершается с ошибкой, следуйте сообщению об ошибке (чаще всего нужно выполнить `/login`).
- **IDE показывает "auth required"**: у CLI нет пригодного token аутентификации. Закройте IDE, запустите `kimi` в терминале и выполните вход, затем перезапустите IDE.
- **Инструменты MCP не отображаются**: проверьте таблицу возможностей `kimi acp` и убедитесь, что тип транспорта MCP, настроенный в вашей IDE, поддерживается. Сейчас ACP-адаптер Kimi Code CLI поддерживает транспорты `http` и `stdio`; типы `sse` и `acp` silently dropped, а предупреждение записывается в журнал.
