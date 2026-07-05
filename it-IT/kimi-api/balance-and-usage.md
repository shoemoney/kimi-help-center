---
title: "Saldo e utilizzo"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Saldo e utilizzo - Centro assistenza Kimi"
  description="L'API di Kimi offre diversi modi per consultare il saldo del tuo account e i dettagli di utilizzo, aiutandoti a tenere sotto controllo consumi e costi."
/>

# Saldo e utilizzo

L'API di Kimi offre diversi modi per consultare il saldo del tuo account e i dettagli di utilizzo, aiutandoti a tenere sotto controllo consumi e costi.

## Dashboard della console

Accedi a [platform.kimi.ai](https://platform.kimi.ai) e vai alla pagina **fee-detail** (dettagli di fatturazione) nella console per consultare:

- Il saldo attuale dell'account
- Il riepilogo dell'utilizzo giornaliero
- L'utilizzo e i costi per ciascun modello
- L'andamento storico della spesa

<Callout type="info">
La fatturazione giornaliera viene aggiornata entro le **7:00 del giorno successivo**. I dati di utilizzo in tempo reale potrebbero presentare un lieve ritardo.
</Callout>

> **Nota**: la fatturazione giornaliera viene aggiornata entro le **7:00 del giorno successivo**. I dati di utilizzo in tempo reale potrebbero presentare un lieve ritardo.

## API di stima dei token

Prima di inviare una richiesta, puoi usare la Token Estimation API per stimare quanti token consumerà la chiamata — utile per il controllo dei costi.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Passa lo stesso formato `messages` di una richiesta Chat Completion e l'API restituirà il numero stimato di token.

## API di interrogazione del saldo

Interroga direttamente tramite API il saldo attuale del tuo account:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Inserisci la tua API Key nell'intestazione della richiesta per ottenere il saldo disponibile.

## Suggerimenti per il monitoraggio dell'utilizzo

<Callout type="tip">
**Buone pratiche**:
- Controlla regolarmente la pagina fee-detail per monitorare l'andamento della spesa
- Integra la Balance Query API e imposta soglie di avviso per il saldo
- Usa la Token Estimation API prima delle chiamate più importanti per stimare i costi
</Callout>
