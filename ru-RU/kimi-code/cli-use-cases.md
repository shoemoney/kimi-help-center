---
title: "Типовые сценарии"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Типовые сценарии - Справочный центр Kimi"
  description="Здесь собраны типовые сценарии использования Kimi Code CLI в повседневной разработке, а также примеры запросов для ориентира."
/>

# Типовые сценарии

Здесь собраны типовые сценарии использования Kimi Code CLI в повседневной разработке, а также примеры запросов для ориентира.

## Реализация новых функций

Опишите требования на обычном языке — AI сам прочитает нужный код, напишет новый и проверит результат.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Добавьте сортировку по дате регистрации на страницу списка пользователей — изменения нужны и во фронтенде, и в бэкенде",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Реализуйте middleware для ограничения частоты запросов с использованием алгоритма token bucket: не больше 60 запросов в минуту для каждого IP",
    },
  ]}
/>

## Исправление ошибок

Просто вставьте сообщение об ошибке — AI сам найдет причину и предложит исправление.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "После запуска npm test я получил эту ошибку, пожалуйста, исправьте ее:\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "CI pipeline упал на этапе lint. Вот лог: ... Пожалуйста, исправьте",
    },
  ]}
/>

## Разбор проекта

Если вы подключаетесь к новому проекту или хотите разобраться в конкретном фрагменте кода, просто спросите.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Как в целом устроена архитектура этого проекта? Какие здесь основные модули?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Что делает src/auth/middleware.ts? Как работает процесс аутентификации?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Объясните, как в этом проекте управляются миграции базы данных",
    },
  ]}
/>

## Автоматизация небольших задач

Подходит для массовых изменений в коде, добавления документации, генерации тестов и другой повторяющейся работы.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Добавьте комментарии JSDoc ко всем экспортируемым функциям в каталоге src/utils/",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Сгенерируйте модульные тесты для всех публичных методов класса UserService",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Замените все объявления var в проекте на const или let",
    },
  ]}
/>

## Общие задачи

Kimi Code CLI не ограничивается программированием — он также помогает с исследованиями, анализом данных, массовыми операциями с файлами и многим другим.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Изучите популярные сейчас ORM-библиотеки для Node.js и сравните их плюсы и минусы",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Проанализируйте журналы доступа за последние 7 дней в каталоге logs/ и выведите 10 самых частых путей запросов",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Объедините все CSV-файлы в каталоге data/ в один и удалите повторяющиеся строки",
    },
  ]}
/>
