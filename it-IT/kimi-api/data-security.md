---
title: "Elaborazione dei dati e sicurezza"
slug: "api-data-security"
order: 13
extract_headings: true
preview: false
---

<SeoMeta
  title="Elaborazione dei dati e sicurezza - Centro assistenza Kimi"
  description="FAQ sulla sicurezza dei dati utente e sulla protezione della privacy per Kimi API."
/>

# Elaborazione dei dati e sicurezza

<Callout type="info">
FAQ sulla sicurezza dei dati utente e sulla protezione della privacy per Kimi API.
</Callout>

Kimi API attribuisce la massima importanza alla sicurezza dei dati utente e alla protezione della privacy.
## I dati degli utenti vengono usati per addestrare i modelli?

<Callout type="warning">
**No.** I dati utente inviati tramite l'API (inclusi i contenuti in ingresso e l'output del modello) **non vengono usati per addestrare o migliorare i modelli di Kimi**. I tuoi dati servono esclusivamente a soddisfare la richiesta API in corso e non vengono conservati in modo persistente per scopi di addestramento.
</Callout>

## Come viene garantita la sicurezza dei dati privati?
Kimi API adotta diverse misure per proteggere i tuoi dati privati:
| Misura | Descrizione |
| --- | --- |
| **Crittografia in transito** | Tutte le comunicazioni API utilizzano HTTPS/TLS |
| **Isolamento dei dati** | I dati di utenti diversi sono rigorosamente isolati |
| **Non usati per l'addestramento** | I dati API non vengono usati per addestrare i modelli |
| **Controllo degli accessi** | Autenticazione tramite API Key per consentire solo accessi autorizzati |
| **Certificazioni di conformità** | La piattaforma ha ottenuto le relative certificazioni di sicurezza |

<Callout type="tip">
Per esigenze di sicurezza più elevate, contatta il team commerciale per scoprire le soluzioni di sicurezza di livello enterprise.
</Callout>

## Revisione della sicurezza dei contenuti
Kimi API integra un meccanismo di revisione della sicurezza dei contenuti:
- Il sistema rileva e filtra automaticamente i contenuti vietati (attività illegali, violenza, materiale esplicito, ecc.)
- Quando viene attivato, l'API restituisce una risposta di errore appropriata
- La revisione dei contenuti non memorizza né espone i tuoi dati originali
- Se ritieni che una revisione sia stata attivata erroneamente, contatta il supporto indicando il `request_id`
## Come eliminare i file caricati?
I file caricati tramite l'API dei file possono essere eliminati in qualsiasi momento:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "DELETE https://api.moonshot.ai/v1/files/{file_id}",
    },
  ]}
/>

Includi la tua API Key nell'header della richiesta e specifica l'ID del file da eliminare. Una volta eliminato, il file non potrà più essere referenziato e i suoi dati verranno rimossi dal server.

<Callout type="info">
Puoi anche visualizzare ed eliminare i file caricati nella pagina di gestione dei file della console.
</Callout>
