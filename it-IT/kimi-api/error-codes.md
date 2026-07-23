---
title: "Codici di errore API"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Codici di errore API - Centro assistenza Kimi"
  description="Codici di errore comuni quando si chiama la API Kimi e come risolverli."
/>

# Codici di errore API

<Callout type="info">
Codici di errore comuni quando si chiama la API Kimi e come risolverli.
</Callout>

## Riferimento dei codici di errore

| Codice di errore | Significato | Soluzione |
| --- | --- | --- |
| 400 | Richiesta non valida | Controlla il formato del corpo della richiesta, i nomi e i tipi dei parametri. Cause comuni: JSON non valido, parametri obbligatori mancanti, valori fuori intervallo. |
| 401 | Non autorizzato | Verifica che la chiave API sia corretta, non scaduta né disabilitata. Conferma il formato dell'intestazione: `Authorization: Bearer <your-api-key>`. |
| 403 | Accesso vietato (saldo insufficiente) | Il saldo dell'account è esaurito: effettua una ricarica nella console. L'account potrebbe anche essere soggetto a restrizioni; se necessario, contatta l'assistenza. |
| 404 | Non trovato | Controlla il percorso URL della richiesta e il nome del modello. Verifica che l'endpoint sia `https://api.moonshot.ai/v1/...`. |
| 429 | Too Many Requests | rate limit superato. Riduci la frequenza, implementa un backoff esponenziale oppure contatta l'assistenza per limiti più elevati. |
| 500 | Internal Server Error | Problema temporaneo del server: riprova più tardi. Se persiste, contatta support@moonshot.ai indicando `request_id`. |

## Suggerimenti generali per la risoluzione dei problemi

<Callout type="tip">
1. **Controlla il messaggio di errore completo**: il JSON di risposta include `error.message` con una descrizione dettagliata.
2. **Annota il request_id**: aiuta l'assistenza a individuare rapidamente il problema.
3. **Consulta la documentazione ufficiale**: assicurati che le chiamate siano conformi alla documentazione su [platform.kimi.ai](https://platform.kimi.ai).
4. **Implementa una logica di nuovo tentativo**: per gli errori 429 e 500, usa un backoff esponenziale.
</Callout>
