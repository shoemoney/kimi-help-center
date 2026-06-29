---
title: "Perché il sito creato dall'agent non funziona?"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Perché il sito creato dall'agent non funziona? - Kimi Help Center"
  description="Un progetto full-stack comprende l'interfaccia frontend, i servizi backend e l'archiviazione persistente. Kimi Agent può generare tutti e tre, ma il corretto funzionamento dipende dalla configurazione dell'ambiente..."
/>

# Perché non funziona?

<Callout type="tip">
Un progetto full-stack comprende **l'interfaccia frontend, i servizi backend e l'archiviazione persistente**. Kimi Agent può generare tutti e tre, ma il corretto funzionamento dipende dalla configurazione dell'ambiente, dall'impostazione dell'autenticazione e dalle azioni di pubblicazione.
</Callout>

Se la tua app non funziona come previsto, di solito il problema non è la mancanza di funzionalità backend, ma un passaggio incompleto di anteprima, autenticazione, database o pubblicazione.

## Flusso di lavoro full-stack 

1. **Generazione**: l'Agent crea frontend + backend + schema del database e logica dei dati.
2. **Anteprima**: esecuzione in sandbox per i test full-stack in locale (in alcuni casi può essere necessario un avvio manuale).
3. **Versionamento**: l'Agent può utilizzare gli strumenti di versionamento e creare commit automaticamente.
4. **Rollback**: puoi tornare a qualsiasi versione di commit precedente.
5. **Pubblicazione / Condivisione**: l'app viene distribuita su un URL pubblico solo dopo la pubblicazione manuale.

## Cause più comuni di malfunzionamento 

| Sintomo | Causa probabile | Cosa fare |
|----------|-------------|------------|
| Il frontend si carica ma l'API non funziona | Runtime della sandbox non avviato | Avvia la sandbox e riesegui l'anteprima |
| Dati non salvati o non visibili | Database non inizializzato o migrato | Riesegui la configurazione del DB o il passaggio di migrazione |
| Il login non riesce | Flusso di autenticazione non configurato correttamente | Verifica la configurazione di Kimi Login e le impostazioni di callback |
| Gli altri non riescono ad accedere alla tua app | App non pubblicata | Clicca su **Pubblica/Condividi** per distribuirla |
| Le modifiche recenti hanno compromesso le funzionalità | Regressione nell'ultima versione | Esegui il rollback a un commit stabile |

## Supporto per l'autenticazione

- **Fase 1**: supporta **Kimi Login**.
- **Fase successiva**: verranno aggiunti altri provider OAuth.
- **Supportato anche**: l'Agent può generare il login standard con account email/password basato su DB.

## Versionamento e rollback

- L'Agent supporta i nuovi strumenti di versionamento e può eseguire `git commit` in autonomia durante lo sviluppo.
- Puoi consultare la cronologia delle versioni ed eseguire il rollback a un commit selezionato quando necessario.

## Anteprima vs Pubblicazione

- **Anteprima**: per lo sviluppo e i test in sandbox; in alcuni scenari può richiedere l'avvio manuale della sandbox.
- **Pubblica/Condividi**: azione manuale dell'utente che distribuisce la tua app in un ambiente accessibile pubblicamente.

## L'Agent è ideale per

- Prototipazione rapida di prodotti full-stack
- Flussi CRUD con archiviazione persistente
- Operazioni di base sui dati di amministrazione o back-office
- Progetti demo end-to-end con flusso di login, dati e distribuzione

## Limiti attuali

- Le operazioni di produzione avanzate (ad esempio, SRE complesse e HA multi-regione) richiedono ancora un lavoro di ingegneria manuale.
- Per gli scenari di produzione ad alto rischio, esegui una revisione della sicurezza e il rafforzamento della distribuzione prima del rilascio.
