---
title: "Rate limit"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Rate limit - Centro assistenza Kimi"
  description="Kimi API applica rate limit alla frequenza delle richieste e alla concurrency per garantire stabilità della piattaforma e un uso equo. I livelli di rate limit dipendono dall'importo cumulativo delle ricariche del tuo account..."
/>

# Rate limit

Kimi API applica rate limit alla frequenza delle richieste e alla concurrency per garantire stabilità della piattaforma e un uso equo. I livelli di rate limit dipendono dall'importo cumulativo delle ricariche del tuo account.

## Livelli di rate limit

I rate limit dell'API sono organizzati per livelli in base all'**importo cumulativo delle ricariche** del tuo account: più ricarichi, più aumentano i rate limit disponibili. Per le soglie specifiche di ciascun livello e i relativi limiti RPM (richieste al minuto) e TPM (token al minuto), consulta la console [platform.kimi.ai](https://platform.kimi.ai).

## Come verificare i limiti attuali?

- Accedi alla console API per visualizzare il tuo livello di rate limit attuale.
- Anche gli header di risposta dell'API includono informazioni sui rate limit:
  - `X-RateLimit-Limit`: soglia attuale del rate limit
  - `X-RateLimit-Remaining`: richieste ancora disponibili
  - `X-RateLimit-Reset`: ora in cui il limite viene reimpostato

## Gestire gli errori 429

Quando la frequenza delle richieste supera il limite, l'API restituisce un codice di stato 429. Azioni consigliate:

1. **Implementa il backoff esponenziale**: attendi inizialmente 1 secondo, quindi raddoppia il tempo di attesa a ogni nuovo tentativo (2s, 4s, 8s…).
2. **Controlla la concurrency**: usa code di richieste o semafori per limitare il numero di richieste simultanee.
3. **Raggruppa le richieste**: combina più richieste piccole in un numero minore di richieste più grandi.

## Richiedere rate limit più elevati

Se le esigenze della tua attività superano i rate limit attuali:

- **Ricarica per salire di livello**: aumenta l'importo cumulativo delle ricariche e il sistema aggiornerà automaticamente il tuo livello di rate limit.
- **Contatta il team commerciale**: per esigenze particolari, rivolgiti al team commerciale della piattaforma tramite [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) per richiedere una quota di rate limit personalizzata.
