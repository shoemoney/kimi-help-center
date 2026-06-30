---
title: "Risoluzione dei problemi dell'API"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Risoluzione dei problemi dell'API - Centro assistenza Kimi"
  description="Problemi comuni e soluzioni per gli sviluppatori che utilizzano l'API Kimi."
/>

# Risoluzione dei problemi dell'API

<Callout type="info">
Problemi comuni e soluzioni per gli sviluppatori che utilizzano l'API Kimi.
</Callout>

## Come gestire l'errore 429 di rate limit?

Un errore 429 indica che la frequenza delle richieste ha superato il rate limit dell'account corrente. Per risolverlo:

- Implementa una strategia di retry con backoff esponenziale (attendi 1s, 2s, 4s… prima di riprovare).
- Controlla il numero di richieste in concurrency tramite un meccanismo di coda.
- Aumenta l'importo cumulativo delle ricariche per passare a un livello di rate limit superiore.
- Contatta il team commerciale se hai bisogno di una quota più elevata.

## Come gestire l'errore 401 di autenticazione?

Un errore 401 indica che l'autenticazione tramite API Key non è andata a buon fine. Verifica quanto segue:

- Assicurati di aver copiato correttamente l'API Key (attenzione agli spazi iniziali o finali).
- Verifica che il formato dell'header della richiesta sia `Authorization: Bearer <your-api-key>`.
- Conferma che l'API Key non sia stata eliminata o disabilitata: controlla nella console.
- Assicurati di non utilizzare una chiave di un'altra piattaforma (le API Key di Kimi iniziano con `sk-`).

<Callout type="warning">
**Formato API Key**: le API Key di Kimi iniziano con `sk-`. Verifica di utilizzare il formato di chiave corretto.
</Callout>

## Il caricamento dei file comporta dei costi?

Il caricamento dei file è di per sé gratuito. Tuttavia, quando fai riferimento a un file caricato all'interno di una conversazione, il suo contenuto viene convertito in token e addebitato come token di input. File più grandi generano un numero maggiore di token.

## Come gestire l'errore 403 di saldo insufficiente?

Un errore 403 indica in genere un saldo dell'account insufficiente. Effettua una ricarica nella console: i fondi sono disponibili immediatamente. Puoi anche utilizzare l'API di interrogazione del saldo per verificare il credito attuale.

## Cosa fare se la risposta è troncata?

Se la risposta dell'API è incompleta o troncata:

- Verifica se il parametro `max_tokens` è impostato su un valore troppo basso e aumentalo se necessario.
- Controlla il campo `finish_reason` nella risposta: `length` indica che l'output è stato troncato a causa del limite di token; `stop` indica che si è completato normalmente.
- Per la generazione di testi lunghi, valuta di suddividere la richiesta in più parti.

<Callout type="tip">
**Controlla `finish_reason`**: `length` = troncato, `stop` = completato normalmente.
</Callout>

## Posso caricare immagini tramite l'API dei file?

Sì. L'API di caricamento file supporta i file immagine. Una volta caricate, le immagini possono essere richiamate nelle conversazioni. Con i modelli Vision, puoi anche passare le immagini direttamente nei messaggi tramite URL o codifica Base64.

## Quali sono le fonti per la Web Search?

La funzione di Web Search dell'API Kimi recupera in tempo reale informazioni pubblicamente disponibili da internet. I risultati provengono da pagine web indicizzate dai principali motori di ricerca. Ogni invocazione di Web Search comporta un costo aggiuntivo di $0,004.

## C'è una relazione tra l'abbonamento Kimi e la concurrency dell'API?

<Callout type="warning">
I **piani di abbonamento Kimi** (come Allegretto) e l'**API** sono sistemi di fatturazione separati. Il parallelismo degli agent incluso nei piani di abbonamento si applica esclusivamente ai prodotti consumer di Kimi e non ha alcuna relazione con i rate limit dell'API. I limiti di concurrency dell'API sono determinati dal livello di ricarica cumulativa del tuo account.
</Callout>

## Differenza tra l'API e l'app web Kimi

| Aspetto | App web Kimi | API Kimi |
| --- | --- | --- |
| **Destinatari** | Prodotto conversazionale rivolto ai consumatori | Interfaccia di integrazione rivolta agli sviluppatori |
| **Accesso** | Tramite browser | Chiamate API programmatiche |
| **Fatturazione** | Sistema di abbonamento/crediti | Pagamento a consumo in base ai token |
| **Account** | Login condiviso | Login condiviso |
| **Crediti** | Non trasferibili tra i sistemi | Non trasferibili tra i sistemi |

## La generazione di PPT e la Deep Research sono disponibili tramite API?

<Callout type="warning">
La **generazione di PPT** e la **Deep Research** **non sono ancora disponibili tramite API**. Queste funzioni sono attualmente accessibili solo tramite il prodotto consumer Kimi. Segui gli annunci della piattaforma per gli aggiornamenti.
</Callout>

## È supportata l'installazione on-premises?

L'API Kimi offre attualmente solo servizi API basati sul cloud e **non supporta l'installazione privata on-premises**. Per esigenze di installazione privata, contatta il team commerciale tramite [platform.moonshot.ai/contact-sales](https://platform.moonshot.ai/contact-sales).

## Posso chiamare l'API Kimi dall'esterno della Cina?

L'API Kimi è disponibile a livello internazionale tramite `api.moonshot.ai`. Se riscontri problemi di connettività, contatta il team commerciale per individuare la soluzione più adatta alla tua area geografica.
