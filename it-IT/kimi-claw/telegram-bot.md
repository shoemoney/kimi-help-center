---
title: "Bot Telegram"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Bot Telegram - Centro assistenza Kimi"
  description="Collega Kimi Claw a Telegram per chattare con lui da qualsiasi dispositivo, senza bisogno di un browser."
/>

# Bot Telegram

Collega Kimi Claw a Telegram per chattare con lui da qualsiasi dispositivo, senza bisogno di un browser.

## Configurazione passo dopo passo

### 1. Crea un bot con BotFather

1. Apri Telegram e avvia una chat con [@BotFather](https://t.me/BotFather).
2. Invia `/newbot`.
3. Segui le istruzioni per scegliere un **nome visualizzato** e un **nome utente** (deve terminare con `bot`).
4. BotFather ti risponderà con un **token del bot**: copialo e conservalo in un luogo sicuro.

### 2. Collega il bot a Kimi Claw

1. Apri la tua conversazione con Kimi Claw su [kimi.com](https://kimi.com).
2. Comunica a Kimi Claw: _«Ecco il token del mio bot Telegram: `<your-token>`. Configura la connessione a Telegram.»_
3. Kimi Claw salverà il token nella propria configurazione.

### 3. Riavvia e abbina

1. Riavvia Kimi Claw: chiedigli di riavviarsi oppure vai su **Impostazioni → Riavvia Kimi Claw**.
2. Una volta tornato online, apri il tuo nuovo bot Telegram e invia un messaggio.
3. Kimi Claw risponderà: l'abbinamento è completato.

## Suggerimenti

- **Modalità privacy:** per impostazione predefinita, nei gruppi Telegram i bot vedono solo i messaggi che li menzionano o che iniziano con `/`. Se vuoi che Kimi Claw veda tutti i messaggi del gruppo, disattiva la modalità privacy tramite BotFather (`/setprivacy → Disable`).
- **Più bot:** puoi creare più bot Telegram e collegarli alla stessa istanza di Kimi Claw.
- **Sicurezza del token:** non condividere mai pubblicamente il token del tuo bot. In caso di compromissione, revocalo tramite BotFather (`/revoke`) e configurane uno nuovo.
