---
title: "Rate limit"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Rate limit - Centro assistenza Kimi"
  description="Le API di Kimi applicano rate limit sulla frequenza delle richieste e sulla concorrenza per garantire la stabilità della piattaforma e un utilizzo equo. I livelli di rate limit si basano sull'importo cumulativo di ricarica del tuo account..."
/>

# Rate limit

Le API di Kimi applicano rate limit（limite di frequenza） sulla frequenza delle richieste e sulla concorrenza per garantire la stabilità della piattaforma e un utilizzo equo. I livelli di rate limit si basano sull'importo cumulativo di ricarica del tuo account.

## Livelli di rate limit

I rate limit delle API sono suddivisi in livelli in base all'**importo cumulativo di ricarica** del tuo account: più ricarichi, più alti sono i rate limit disponibili. Per le soglie specifiche di ciascun livello e i relativi limiti di RPM (richieste al minuto) e TPM (token al minuto), consulta la console di [platform.moonshot.ai](https://www.platform.moonshot.ai).

## Come verificare i limiti attuali?

- Accedi alla console API per visualizzare il tuo attuale livello di rate limit.
- Anche le intestazioni delle risposte API includono informazioni sui rate limit:
  - `X-RateLimit-Limit`: limite massimo di rate attuale
  - `X-RateLimit-Remaining`: richieste disponibili rimanenti
  - `X-RateLimit-Reset`: momento in cui il limite si reimposta

## Gestire gli errori 429

Quando la frequenza delle tue richieste supera il limite, l'API restituisce un codice di stato 429. Azioni consigliate:

1. **Implementa un backoff esponenziale**: attendi 1 secondo all'inizio, poi raddoppia il tempo di attesa a ogni tentativo (2s, 4s, 8s…).
2. **Controlla la concorrenza**: usa code di richieste o semafori per limitare il numero di richieste simultanee.
3. **Raggruppa le richieste**: unisci più piccole richieste in poche richieste più grandi.

## Richiedere rate limit più elevati

Se le esigenze della tua attività superano gli attuali rate limit:

- **Ricarica per passare a un livello superiore**: aumenta il tuo importo cumulativo di ricarica e il sistema aggiornerà automaticamente il tuo livello di rate limit.
- **Contatta il team commerciale**: per esigenze particolari, rivolgiti al team commerciale della piattaforma tramite [platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales) per richiedere una rate quota personalizzata.
