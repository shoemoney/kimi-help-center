---
title: "Telegram-Bot"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Telegram-Bot - Kimi Hilfecenter"
  description="Verbinden Sie Kimi Claw mit Telegram, damit Sie von jedem Gerät aus mit Kimi chatten können – ganz ohne Browser."
/>

# Telegram-Bot

Verbinden Sie Kimi Claw mit Telegram, damit Sie von jedem Gerät aus mit Kimi chatten können – ganz ohne Browser.

## Schritt-für-Schritt-Einrichtung

### 1. Bot mit BotFather erstellen

1. Öffnen Sie Telegram und starten Sie einen Chat mit [@BotFather](https://t.me/BotFather).
2. Senden Sie `/newbot`.
3. Folgen Sie den Anweisungen, um einen **Anzeigenamen** und einen **Benutzernamen** zu wählen (muss auf `bot` enden).
4. BotFather antwortet mit einem **Bot-Token** – kopieren Sie ihn und bewahren Sie ihn sicher auf.

### 2. Bot mit Kimi Claw verbinden

1. Öffnen Sie Ihre Kimi-Claw-Unterhaltung auf [kimi.com](https://kimi.com).
2. Sagen Sie Kimi Claw: _„Hier ist mein Telegram-Bot-Token: `<your-token>`. Bitte richte die Telegram-Verbindung ein.“_
3. Kimi Claw speichert den Token in seiner Konfiguration.

### 3. Neu starten und koppeln

1. Starten Sie Kimi Claw neu – entweder bitten Sie es darum oder gehen Sie zu **Einstellungen → Kimi Claw neu starten**.
2. Sobald es wieder online ist, öffnen Sie Ihren neuen Telegram-Bot und senden Sie eine Nachricht.
3. Kimi Claw antwortet – die Kopplung ist abgeschlossen.

## Tipps

- **Datenschutzmodus:** Standardmäßig sehen Bots in Telegram-Gruppen nur Nachrichten, die sie erwähnen oder mit `/` beginnen. Wenn Kimi Claw alle Gruppennachrichten sehen soll, deaktivieren Sie den Datenschutzmodus über BotFather (`/setprivacy → Disable`).
- **Mehrere Bots:** Sie können mehrere Telegram-Bots erstellen und sie mit derselben Kimi-Claw-Instanz verbinden.
- **Token-Sicherheit:** Geben Sie Ihren Bot-Token niemals öffentlich weiter. Falls er kompromittiert wird, widerrufen Sie ihn über BotFather (`/revoke`) und richten Sie einen neuen ein.
