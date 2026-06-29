---
title: "Prezzi delle API"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Prezzi delle API - Centro assistenza Kimi"
  description="La fatturazione delle API Kimi si basa sul consumo di token, con prezzi specifici per modello e per funzionalità."
/>

# Prezzi delle API

<Callout type="info">
La fatturazione delle API Kimi si basa sul consumo di token, con prezzi specifici per modello e per funzionalità.
</Callout>

## Nozioni di base sulla fatturazione

- **Fatturazione per token**: ogni chiamata API viene fatturata separatamente per i token in input e i token in output
- **Unità di misura del token**: 1M = 1.000.000 di token
- **Prezzi specifici per modello**: i modelli più performanti hanno un costo per token più elevato — scegli quello più adatto al tuo caso d'uso

## Fatturazione delle funzionalità aggiuntive

| Funzionalità | Costo aggiuntivo |
| --- | --- |
| **Web Search** | 0,004 $ per chiamata (indipendente dal consumo di token) |

## Context caching

<Callout type="tip">
Il **Context Caching** ti consente di memorizzare nella cache i contenuti di contesto usati di frequente (come i prompt di sistema e i documenti di riferimento). I token che trovano corrispondenza nella cache vengono fatturati a una tariffa scontata, riducendo concretamente i costi per i contesti ripetitivi.
</Callout>

Consulta la documentazione ufficiale per i dettagli sui prezzi del Context Caching.

## Dettagli sui prezzi

Per la tabella completa dei prezzi dei modelli e le regole di fatturazione:

Puoi visitare [platform.moonshot.ai/docs/pricing/chat](https://www.platform.moonshot.ai/docs/pricing/chat)

## Consigli per ottimizzare i costi

<Callout type="tip">
- Imposta correttamente il parametro `max_tokens` per evitare output inutilmente lunghi
- Usa il Context Caching per i prompt di sistema e i contesti ripetitivi
- Scegli il modello adatto alla complessità del compito — usa modelli leggeri per le attività semplici
- Ottimizza la struttura dei prompt per ridurre al minimo i token in input superflui
</Callout>
