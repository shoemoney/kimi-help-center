---
title: "Prezzi API"
slug: "api-pricing"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Prezzi API - Centro assistenza Kimi"
  description="La fatturazione di Kimi API si basa sul consumo di token, con prezzi specifici per modello e funzionalità."
/>

# Prezzi API

<Callout type="info">
La fatturazione di Kimi API si basa sul consumo di token, con prezzi specifici per modello e funzionalità.
</Callout>

## Nozioni di base sulla fatturazione

- **Fatturazione per token**: ogni chiamata API viene addebitata separatamente per i token di input e i token di output
- **Unità token**: 1M = 1,000,000 token
- **Prezzi per modello**: i modelli più avanzati hanno costi per token più elevati — scegli il modello più adatto al tuo caso d’uso

## Fatturazione delle funzionalità aggiuntive

| Funzionalità | Costo aggiuntivo |
| --- | --- |
| **Web Search** | $0.004 per chiamata (indipendentemente dal consumo di token) |

## Cache del contesto

<Callout type="tip">
**La Cache del contesto** consente di memorizzare nella cache i contenuti di contesto usati di frequente (come prompt di sistema e documenti di riferimento). I token recuperati dalla cache vengono fatturati a una tariffa scontata, riducendo di fatto i costi per i contesti ripetitivi.
</Callout>

Consulta la documentazione ufficiale per i dettagli sui prezzi della Cache del contesto.

## Dettagli sui prezzi

Per la tabella completa dei prezzi dei modelli e le regole di fatturazione:

Vai a [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## Suggerimenti per ottimizzare i costi

<Callout type="tip">
- Imposta correttamente il parametro `max_tokens` per evitare output inutilmente lunghi
- Usa la Cache del contesto per prompt di sistema e contesti ripetitivi
- Scegli il modello giusto in base alla complessità dell’attività — usa modelli leggeri per le attività semplici
- Ottimizza la struttura dei prompt per ridurre al minimo i token di input non necessari
</Callout>
