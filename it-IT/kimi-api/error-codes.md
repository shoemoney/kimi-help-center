---
title: "Codici di errore API"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Codici di errore API - Centro assistenza Kimi"
  description="I codici di errore più comuni durante le chiamate alla Kimi API e come risolverli."
/>

# Codici di errore API

<Callout type="info">
I codici di errore più comuni durante le chiamate alla Kimi API e come risolverli.
</Callout>

## Riferimento dei codici di errore

| Codice di errore | Significato | Soluzione |
| --- | --- | --- |
| 400 | Bad Request | Verifica il formato del corpo della richiesta, i nomi e i tipi dei parametri. Cause più frequenti: JSON malformato, parametri obbligatori mancanti, valori fuori intervallo. |
| 401 | Unauthorized | Controlla che l'API Key sia corretta, non scaduta e non disabilitata. Conferma il formato dell'header: `Authorization: Bearer <your-api-key>`. |
| 403 | Forbidden (saldo insufficiente) | Saldo dell'account esaurito: ricaricalo dalla console. L'account potrebbe inoltre essere soggetto a restrizioni; in tal caso contatta l'assistenza. |
| 404 | Not Found | Verifica il percorso URL della richiesta e il nome del modello. Conferma che l'endpoint sia `https://api.moonshot.ai/v1/...`. |
| 429 | Too Many Requests | rate limit superato. Riduci la frequenza, implementa un backoff esponenziale oppure contatta l'assistenza per limiti più elevati. |
| 500 | Internal Server Error | Problema temporaneo del server: riprova più tardi. Se persiste, contatta support@moonshot.ai indicando il `request_id`. |

## Suggerimenti generali per la risoluzione dei problemi

<Callout type="tip">
1. **Leggi il messaggio di errore completo**: il JSON di risposta include `error.message` con una descrizione dettagliata.
2. **Annota il request_id**: aiuta l'assistenza a individuare rapidamente il problema.
3. **Consulta la documentazione ufficiale**: assicurati che le chiamate siano conformi alla documentazione su [platform.moonshot.ai](https://platform.moonshot.ai).
4. **Implementa una logica di ripetizione**: per gli errori 429 e 500, utilizza un backoff esponenziale.
</Callout>
