---
title: "Risoluzione dei problemi generali"
slug: "troubleshooting"
order: 12
extract_headings: false
preview: false
---

<SeoMeta
  title="Risoluzione dei problemi generali - Centro assistenza Kimi"
  description="Questa pagina illustra i codici di errore più comuni e le opzioni di riparazione automatica per Kimi Claw."
/>

# Risoluzione dei problemi generali

Questa pagina illustra i codici di errore più comuni e le opzioni di riparazione automatica per Kimi Claw.

## Codici di errore comuni

| Codice | Significato | Cosa fare |
|------|---------|------------|
| **400** | Bad Request — Input malformato o parametri non validi | Controlla che il messaggio non contenga contenuti non supportati, quindi riprova. |
| **401** | Unauthorized — Autenticazione non riuscita | Esci da Kimi e accedi di nuovo. Se il problema persiste, verifica le tue credenziali API nelle impostazioni di Kimi Claw. |
| **403** | Forbidden — Permessi insufficienti | Verifica che il tuo livello di abbonamento supporti la funzionalità che stai utilizzando. Assicurati che il tuo account non sia soggetto a restrizioni. |
| **429** | Too Many Requests — Limite di richieste superato | Attendi qualche minuto e riprova. Consulta [Limiti delle conversazioni](/kimi-claw/conversation-limits) per i dettagli su come verificare la tua quota. |
| **500** | Internal Server Error — Si è verificato un problema sul server | Riprova dopo una breve attesa. Se il problema si ripete, utilizza le opzioni di riparazione automatica qui sotto o contatta l'assistenza. |

## Opzioni di riparazione automatica

Kimi Claw mette a disposizione strumenti di riparazione integrati, accessibili da **Impostazioni** sul web:

| Opzione | Cosa fa |
|--------|--------------|
| **Riavvia Kimi Claw** | Riavvia la connessione al gateway. Risolve la maggior parte dei problemi temporanei (disconnessioni del bridge, blocchi momentanei). |
| **Ripara Kimi Claw** | Esegue una diagnostica automatica che rileva e corregge i problemi di configurazione. Prova questa opzione quando un semplice riavvio non basta. |
| **Ripristina impostazioni iniziali** | Riporta Kimi Claw allo stato predefinito. I file dello spazio di lavoro e la Memory vengono mantenuti, ma le connessioni alle piattaforme di chat (Telegram, ecc.) dovranno essere riconfigurate. Da usare come ultima risorsa. |

## Percorso di escalation

Se le opzioni di riparazione automatica non risolvono il problema:

1. Esegui `/logs` nel Terminale per acquisire l'output degli errori più recenti.
2. Esegui `/debug` per abilitare la diagnostica dettagliata.
3. Contatta **support@moonshot.ai** indicando i dettagli dell'errore e gli eventuali log pertinenti.
