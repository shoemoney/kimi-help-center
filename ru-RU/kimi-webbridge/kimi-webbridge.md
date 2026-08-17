---
title: "Введение в Kimi WebBridge"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Введение в Kimi WebBridge - Справочный центр Kimi"
  description="Kimi WebBridge — расширение для браузера, созданное для AI-агентов. Оно работает прямо в вашем браузере Chrome или Edge и использует уже открытые сеансы входа, чтобы агенты могли взаимодействовать с веб-страницами как человек."
  ogType="article"
/>

# Введение в Kimi WebBridge

Kimi WebBridge — расширение для браузера, созданное для AI-агентов. В отличие от облачных решений для автоматизации браузера, Kimi WebBridge работает прямо в вашем браузере Chrome или Edge и автоматически использует уже открытые сеансы входа, чтобы агенты могли взаимодействовать с веб-страницами как человек.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Руководство по Kimi WebBridge",
    },
  ]}
/>

<Callout type="tip">
Для лучшей работы автоматизации браузера рекомендуем развернуть Kimi WebBridge на вашем основном рабочем компьютере.
</Callout>

<Callout type="info">
WebBridge работает через локальный сервис-мост и расширение браузера. Всё выполняется локально на вашем устройстве — состояния входа и содержимое веб-страниц никогда не покидают ваш компьютер.
</Callout>

<Frames
  src="./images/introduction.png"
  alt="Введение в WebBridge"
/>

## Шаг 1. Скачайте расширение Kimi WebBridge

Скачать его можно одним из следующих способов:

**Способ 1. Установка из магазина расширений**

- Для пользователей Chrome: перейдите в [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Для пользователей Edge: перейдите в [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Способ 2. Ручная установка**

Если у вас нет доступа к магазину расширений, воспользуйтесь ручной установкой.

Затем выполните шаги для вашего браузера:

**Chrome:**

1. Скачайте пакет расширения с [официального сайта Kimi WebBridge](https://www.kimi.com/features/webbridge).
2. Распакуйте скачанный файл
3. Откройте `chrome://extensions/` в адресной строке
4. Включите "Developer mode" в правом верхнем углу
5. Нажмите "Load unpacked"
6. В окне выбора файлов выберите распакованную папку WebBridge

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. Скачайте пакет расширения с [официального сайта Kimi WebBridge](https://www.kimi.com/features/webbridge).
2. Распакуйте скачанный файл
3. Откройте `edge://extensions/` в адресной строке
4. Включите "Developer mode" в левом нижнем углу
5. Нажмите "Load unpacked"
6. В окне выбора файлов выберите распакованную папку WebBridge

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

После установки WebBridge появится в списке расширений вашего браузера. Для быстрого доступа рекомендуем закрепить его на панели инструментов браузера.

## Шаг 2. Выберите способ установки и завершите настройку

### Способ 1. Использование с Kimi Work Desktop

1. Скачайте Kimi Work с [официального сайта](https://www.kimi.com/products/kimi-work)

2. После установки вы можете отправлять инструкции в Kimi Work, например:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Используй Kimi Webbridge и открой Xiaohongshu, найди публикации о релизе Kimi K2.6",
    },
  ]}
/>

### Способ 2. Подключение к локальным агентам

Поддерживаются Claude Code, Codex, Cursor, Kimi Code, Hermes Claw и другие.

1. Отправьте следующую команду прямо в агенте, чтобы автоматически установить WebBridge. Агент выполнит подходящую настройку в зависимости от вашей операционной системы.

Если вы используете macOS, выполните команду ниже:

<CodePreview
  files={[
    {
      name: "macos.sh",
      language: "bash",
      content:
        "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

Если вы используете Windows, выполните команду ниже:

<CodePreview
  files={[
    {
      name: "windows.ps1",
      language: "powershell",
      content:
        "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

2. Начните пользоваться

Когда расширение подключится, вы сможете отправлять инструкции.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Используй Kimi WebBridge, открой X.com и найди публикации о релизе Kimi K2.6",
    },
  ]}
/>
