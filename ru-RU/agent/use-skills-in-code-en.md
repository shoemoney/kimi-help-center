---
title: "Использование навыков в Kimi Code"
slug: "use-skills-in-code"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Использование навыков в Kimi Code - Справочный центр Kimi"
  description="Узнайте, как создавать и вызывать навыки в Kimi Code CLI, чтобы стандартизировать правила написания кода в команде и автоматизировать рабочие процессы разработки."
  ogType="article"
/>

# Использование навыков в Kimi Code

Kimi Code — AI-помощник для программирования, созданный специально для разработчиков. Он работает прямо в терминале или редакторе и помогает писать код, исправлять ошибки и готовить документацию. Kimi Code поддерживает рекомендации на основе знаний через файлы `SKILL.md`: прочитав их, AI следует заданным в них стандартам. Это удобно для описания стиля кода, рабочих процессов и лучших практик.

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="Вызов навыков с помощью slash-команды"
/>

## Вызов навыков

Kimi Code CLI позволяет вызывать навыки с помощью slash-команд:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

Например, если ввести `/skill:git-commits`, Kimi Code прочитает содержимое соответствующего файла `SKILL.md` и отправит его агенту как инструкцию.

После slash-команды можно добавить дополнительное описание — оно будет присоединено к инструкции навыка в конце:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix user login issue",
    },
  ]}
/>

В обычном диалоге вручную вызывать навык не нужно: агент сам по контексту определит, стоит ли читать его содержимое.

## Создание первого навыка

Чтобы создать навык, достаточно двух шагов: создать подкаталог в каталоге Skills, а внутри него — файл `SKILL.md`.

Рекомендуемое место хранения (работает для всех проектов):

<CodePreview
  files={[
    {
      name: "Структура каталогов",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

В `SKILL.md` метаданные задаются через YAML Frontmatter, а основные правила описываются в Markdown:

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: Стандарты стиля кода моего проекта\n---\n\n## Стиль кода\n\n- Используйте отступы в 4 пробела\n- Для имён переменных используйте camelCase\n- Для имён функций используйте snake_case\n- У каждой функции должен быть docstring\n- Длина строки не должна превышать 100 символов",
    },
  ]}
/>

Поля `name` и `description` во Frontmatter необязательны. Если их не указать, по умолчанию будет использовано имя каталога.

### Пример

В вашей команде сообщения коммитов должны соответствовать формату Conventional Commits, но каждый раз объяснять это неудобно. Оформив правило как навык, в дальнейшем вы сможете вызывать его одной командой.

**Шаг 1. Создайте файл навыка**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Стандарты сообщений коммитов Git в формате Conventional Commits\n---\n\n## Стандарты коммитов Git\n\nИспользуйте формат Conventional Commits: type(scope): description\n\nДопустимые типы: feat, fix, docs, style, refactor, test, chore\n\nПримеры:\n- feat(auth): Добавить поддержку входа через OAuth\n- fix(api): Исправить проблему, из-за которой запрос пользователя возвращает пустое значение",
    },
  ]}
/>

**Шаг 2. После внесения изменений в код вызовите навык**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fixed login page layout shift in Safari",
    },
  ]}
/>

Kimi Code прочитает ваши стандарты, объединит их с описанием задачи и сразу выдаст корректно оформленное сообщение коммита — вам не придётся заново перечислять требования к формату.

## Потоковые навыки: многошаговые рабочие процессы

Обычные навыки задают статические правила, а **потоковые навыки** позволяют описывать автоматизированные многошаговые процессы.

Чтобы создать потоковый навык, укажите `type: flow` во Frontmatter и добавьте блок-схему в формате Mermaid или D2.

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Рабочий процесс code review\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

Запускайте такой навык командой `/flow:<name>`. Агент начнёт с узла `BEGIN` и автоматически выполнит все шаги по порядку, пока не дойдёт до `END`.

## Механизм загрузки навыков

Kimi Code CLI ищет и загружает навыки в следующем порядке приоритета (первым используется первое совпадение):

1. **Встроенные навыки**: устанавливаются вместе с пакетом и предоставляют базовые возможности.
2. **Навыки уровня пользователя**: хранятся в домашнем каталоге и доступны во всех проектах.
3. **Навыки уровня проекта**: хранятся в каталоге проекта и доступны только в этом проекте.

Дополнительные каталоги с навыками можно указать вручную с помощью параметра `--skills-dir`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --skills-dir /path/to/my-skills",
    },
  ]}
/>

<Callout type="info">
В Kimi Code CLI есть два полезных встроенных навыка: `kimi-cli-help` (отвечает на вопросы по использованию CLI) и `skill-creator` (помогает создавать новые навыки). Чтобы начать, введите `/skill:skill-creator`.
</Callout>

Полный список настроек и пояснения к параметрам см. в [документации по навыкам Kimi Code CLI](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html).
