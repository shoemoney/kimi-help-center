---
title: "Saldo e utilizzo"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Saldo e utilizzo - Centro assistenza Kimi"
  description="Kimi API offre diversi modi per consultare il saldo dell'account e i dettagli di utilizzo, così puoi monitorare consumi e costi."
/>

# Saldo e utilizzo

Kimi API offre diversi modi per consultare il saldo dell'account e i dettagli di utilizzo, così puoi monitorare consumi e costi.

## Dashboard della console

Accedi a [platform.kimi.ai](https://platform.kimi.ai) e vai alla pagina **fee-detail** (dettagli di fatturazione) nella console per visualizzare:

- Saldo attuale dell'account
- Dettaglio dell'utilizzo giornaliero
- Utilizzo e costi per modello
- Andamento storico della spesa

<Callout type="info">
La fatturazione giornaliera viene aggiornata entro le **7:00 del giorno successivo**. I dati di utilizzo in tempo reale potrebbero essere disponibili con un lieve ritardo.
</Callout>

> **Nota**: la fatturazione giornaliera viene aggiornata entro le **7:00 del giorno successivo**. I dati di utilizzo in tempo reale potrebbero essere disponibili con un lieve ritardo.

## API di Token Estimation

Prima di inviare una richiesta, puoi usare l'API di Token Estimation per stimare quanti token consumerà la chiamata: utile per tenere sotto controllo i costi.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Usa lo stesso formato `messages` di una richiesta Chat Completion: l'API restituirà il numero stimato di token.

## API per interrogare il saldo

Consulta il saldo attuale del tuo account direttamente tramite API:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Includi la tua API Key nell'intestazione della richiesta per recuperare il saldo disponibile.

## Consigli per monitorare l'utilizzo

<Callout type="tip">
**Buone pratiche**:
- Controlla regolarmente la pagina fee-detail per monitorare l'andamento della spesa
- Integra l'API per interrogare il saldo e imposta soglie di avviso sul saldo
- Usa l'API di Token Estimation prima delle chiamate critiche per stimarne i costi
</Callout>
