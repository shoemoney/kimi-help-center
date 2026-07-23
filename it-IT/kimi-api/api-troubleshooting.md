---
title: "Risoluzione dei problemi API"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Risoluzione dei problemi API - Centro assistenza Kimi"
  description="Problemi comuni e soluzioni per gli sviluppatori che usano Kimi API."
/>

# Risoluzione dei problemi API

<Callout type="info">
Problemi comuni e soluzioni per gli sviluppatori che usano Kimi API.
</Callout>

## Come gestire l’errore 429 di rate limit?

Un errore 429 indica che la frequenza delle richieste ha superato il rate limit dell’account corrente. Per risolvere il problema:

- Implementa una strategia di retry con backoff esponenziale (attendi 1s, 2s, 4s… prima di riprovare).
- Controlla il numero di richieste simultanee usando un meccanismo di coda.
- Aumenta l’importo cumulativo delle ricariche per passare a una fascia di rate limit superiore.
- Contatta il team commerciale se hai bisogno di una quota più elevata.

## Come gestire l’errore 401 di autenticazione?

Un errore 401 indica che l’autenticazione della API Key non è riuscita. Verifica quanto segue:

- Assicurati che la API Key sia stata copiata correttamente (attenzione agli spazi iniziali o finali).
- Verifica che il formato dell’header della richiesta sia `Authorization: Bearer <your-api-key>`.
- Conferma che la API Key non sia stata eliminata o disabilitata: controlla nella console.
- Assicurati di non usare una chiave proveniente da un’altra piattaforma (le Kimi API Keys iniziano con `sk-`).

<Callout type="warning">
**Formato della API Key**: le Kimi API Keys iniziano con `sk-`. Assicurati di usare il formato corretto della chiave.
</Callout>

## Il caricamento dei file comporta costi?

Il caricamento dei file in sé è gratuito. Tuttavia, quando fai riferimento a un file caricato in una conversazione, il suo contenuto viene analizzato in token e fatturato come token di input. I file più grandi generano più token.

## Come gestire l’errore 403 Insufficient Balance?

Un errore 403 indica in genere un saldo account insufficiente. Effettua una ricarica nella console: i fondi saranno disponibili immediatamente. Puoi anche usare l’API di interrogazione del saldo per verificare il saldo attuale.

## Cosa fare se la risposta è troncata?

Se la risposta dell’API è incompleta o troncata:

- Controlla se il parametro `max_tokens` è impostato su un valore troppo basso e aumentalo se necessario.
- Esamina il campo `finish_reason` nella risposta: `length` significa che l’output è stato troncato a causa del limite di token; `stop` significa che è stato completato normalmente.
- Per generare testi lunghi, valuta di suddividere la richiesta in segmenti.

<Callout type="tip">
**Controlla `finish_reason`**: `length` = troncato, `stop` = completato normalmente.
</Callout>

## Posso caricare immagini tramite l’API dei file?

Sì. L’API di caricamento file supporta i file immagine. Una volta caricate, le immagini possono essere richiamate nelle conversazioni. Con i modelli di visione, puoi anche passare le immagini direttamente nei messaggi tramite URL o codifica Base64.

## Quali sono le fonti di Web Search?

La funzionalità Web Search di Kimi API recupera in tempo reale informazioni disponibili pubblicamente su internet. I risultati provengono da pagine web indicizzate dai principali motori di ricerca. Ogni chiamata Web Search comporta un costo aggiuntivo di $0.004.

## Esiste un rapporto tra l’abbonamento Kimi e la concurrency API?

<Callout type="warning">
**Gli abbonamenti Kimi** (come Allegretto) e l’**API** sono sistemi di fatturazione separati. Il parallelismo degli agent incluso negli abbonamenti si applica solo ai prodotti consumer di Kimi e non ha alcuna relazione con i rate limit dell’API. I limiti di concurrency dell’API sono determinati dalla fascia di ricarica cumulativa del tuo account.
</Callout>

## Differenza tra API e app web Kimi

| Aspetto | Kimi Web App | Kimi API |
| --- | --- | --- |
| **Destinatari** | Prodotto conversazionale per utenti finali | Interfaccia di integrazione per sviluppatori |
| **Accesso** | Tramite browser | Chiamate API programmatiche |
| **Fatturazione** | Sistema di abbonamento/credit | Pay-as-you-go in base ai token |
| **Account** | Login condiviso | Login condiviso |
| **Credit** | Non trasferibili tra i sistemi | Non trasferibili tra i sistemi |

## La generazione di PPT e Deep Research sono disponibili tramite API?

<Callout type="warning">
La **generazione di PPT** e **Deep Research** **non sono ancora disponibili tramite API**. Queste funzionalità sono attualmente accessibili solo tramite il prodotto consumer Kimi. Segui gli annunci della piattaforma per gli aggiornamenti.
</Callout>

## È supportata la distribuzione on-premises?

Kimi API attualmente offre solo servizi API basati su cloud e **non supporta la distribuzione privata on-premises**. Per esigenze di distribuzione privata, contatta il team commerciale tramite [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales).

## Posso chiamare Kimi API dall’esterno della Cina?

Kimi API è disponibile a livello internazionale tramite `api.moonshot.ai`. Se riscontri problemi di connettività, contatta il team commerciale per individuare la soluzione migliore per la tua area geografica.
