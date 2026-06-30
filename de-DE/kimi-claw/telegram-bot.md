---
title: "Telegram-Bot"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Telegram-Bot - Kimi Hilfecenter"
  description="Verbinde Kimi Claw mit Telegram, damit du von jedem Gerät aus mit Kimi chatten kannst – ganz ohne Browser."
/>

# Telegram-Bot

Verbinde Kimi Claw mit Telegram, damit du von jedem Gerät aus mit Kimi chatten kannst – ganz ohne Browser.

## Schritt-für-Schritt-Einrichtung

### 1. Bot mit BotFather erstellen

1. Öffne Telegram und starte einen Chat mit [@BotFather](https://t.me/BotFather).
2. Sende `/newbot`.
3. Folge den Anweisungen, um einen **Anzeigenamen** und einen **Benutzernamen** zu wählen (muss auf `bot` enden).
4. BotFather antwortet mit einem **Bot-Token** – kopiere ihn und bewahre ihn sicher auf.

### 2. Bot mit Kimi Claw verbinden

1. Öffne deine Kimi-Claw-Unterhaltung auf [kimi.com](https://kimi.com).
2. Sage Kimi Claw: _„Hier ist mein Telegram-Bot-Token: `<your-token>`. Bitte richte die Telegram-Verbindung ein.“_
3. Kimi Claw speichert den Token in seiner Konfiguration.

### 3. Neu starten und koppeln

1. Starte Kimi Claw neu – entweder bitte es darum oder gehe zu **Einstellungen → Kimi Claw neu starten**.
2. Sobald es wieder online ist, öffne deinen neuen Telegram-Bot und sende eine Nachricht.
3. Kimi Claw antwortet – die Kopplung ist abgeschlossen.

## Tipps

- **Datenschutzmodus:** Standardmäßig sehen Bots in Telegram-Gruppen nur Nachrichten, die sie erwähnen oder mit `/` beginnen. Wenn Kimi Claw alle Gruppennachrichten sehen soll, deaktiviere den Datenschutzmodus über BotFather (`/setprivacy → Disable`).
- **Mehrere Bots:** Du kannst mehrere Telegram-Bots erstellen und sie mit derselben Kimi-Claw-Instanz verbinden.
- **Token-Sicherheit:** Gib deinen Bot-Token niemals öffentlich weiter. Falls er kompromittiert wird, widerrufe ihn über BotFather (`/revoke`) und richte einen neuen ein.
