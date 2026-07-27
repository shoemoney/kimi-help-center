---
title: "Panoramica di Kimi Claw"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Distribuisci e gestisci il tuo assistente IA Kimi Claw nel cloud con una configurazione in un solo clic."
---

<SeoMeta
  title="Panoramica di Kimi Claw - Centro assistenza Kimi"
  description="Distribuisci e gestisci il tuo assistente IA Kimi Claw nel cloud con una configurazione in un solo clic."
/>

# Panoramica del prodotto

<Callout type="info">
**Kimi Claw** è un assistente IA con una personalità unica e una memoria a lungo termine persistente. Con Kimi Claw puoi creare, distribuire e chattare con la tua istanza OpenClaw direttamente da Kimi.
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## Distribuzione nel cloud in un clic

Non hai ancora un OpenClaw? Vai su [kimi.com/bot](https://kimi.com/bot) per crearne uno. Kimi lo distribuisce nel cloud al posto tuo: niente server da acquistare, niente configurazioni da riga di comando.

<Callout type="warning">

- La distribuzione in un clic richiede un piano **Allegretto o superiore**. [Piani di abbonamento](https://www.kimi.com/membership/pricing).

</Callout>

- Kimi predispone automaticamente il modello **Kimi K2.6**, collega i crediti e i benefit della tua **iscrizione Kimi** e attiva Kimi Web Search, senza bisogno di configurare separatamente le API.
- Per passare al modello **Kimi K3**, puoi modificare la configurazione del modello nelle impostazioni di Kimi Claw o fare riferimento alla guida di configurazione avanzata.
- Kimi Claw può essere distribuito direttamente su Telegram e su altre piattaforme di messaggistica.

## Per iniziare

1. Accedi su [kimi.com/bot](https://kimi.com/bot)
2. Fai clic su **Crea** per avviare un nuovo Kimi Claw
3. Attendi il completamento della configurazione automatica (di solito pochi minuti)
4. Personalizza il nome e la persona del tuo Kimi Claw
5. In **Impostazioni → Canali di chat**, collega le piattaforme che vuoi usare (ad esempio Telegram)

## Collegare un OpenClaw esistente

Se hai già un'istanza OpenClaw in self-hosting, puoi collegarla a Kimi installando il plugin Kimi:

1. Vai su [kimi.com/bot](https://kimi.com/bot) e seleziona **Collega un OpenClaw esistente**
2. Segui le istruzioni per installare il plugin sul tuo dispositivo OpenClaw
3. Una volta effettuato il collegamento, potrai chattare con il tuo OpenClaw tramite Kimi

<a id="switch-to-k3"></a>
## Passa al modello Kimi K3

Kimi Claw utilizza di default il modello Kimi K2.6. Se desideri utilizzare Kimi K3, puoi modificare automaticamente la configurazione locale di OpenClaw con i comandi seguenti.

```bash
# 1. Back up the current config
cp /root/.openclaw/openclaw.json /root/.openclaw/openclaw.json.bak.k3

# 2. Add the k3 model and switch the default model (example uses jq)
jq '
  (.models.providers["kimi-coding"].models // .models.providers.kimi-coding.models) |= . + [{
    "id": "k3",
    "name": "k3",
    "input": ["text", "image"],
    "reasoning": true,
    "contextWindow": 1048576,
    "maxTokens": 65536
  }]
  | .agents.defaults.model.primary = "kimi-coding/k3"
' /root/.openclaw/openclaw.json > /tmp/openclaw.json.tmp \
  && mv /tmp/openclaw.json.tmp /root/.openclaw/openclaw.json

# 3. Restart OpenClaw
openclaw gateway restart

# 4. Verify
session_status
```

Dopo l'esecuzione, verifica che nell'output di `session_status` il campo `model` mostri `kimi-coding/k3` e il limite di `context` sia `1.0m`.

<Callout type="warning">
Il percorso del file di configurazione può variare in base al metodo di installazione: sostituisci `/root/.openclaw/openclaw.json` in base alla tua situazione reale. Assicurati sempre di fare un backup prima di apportare modifiche.
</Callout>
