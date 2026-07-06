---
title: "Funzionalità dei modelli"
slug: "api-model-capabilities"
order: 11
extract_headings: true
preview: false
---

<SeoMeta
  title="Funzionalità dei modelli - Centro assistenza Kimi"
  description="Di seguito trovi le domande frequenti sulle funzionalità dei modelli della Kimi API."
/>

# Funzionalità dei modelli

Di seguito trovi le domande frequenti sulle funzionalità dei modelli della Kimi API.

## Supporta la modalità JSON?

Sì. La Kimi API offre la modalità JSON, che vincola l'output del modello a un JSON valido. Come si usa:

- Imposta il parametro `response_format` su `{"type": "json_object"}` nella tua richiesta.
- Istruisci inoltre esplicitamente il modello nel prompt affinché restituisca JSON e descrivi la struttura attesa.
- In modalità JSON, il modello garantisce un output costituito da una stringa JSON analizzabile.

## Supporta il fine-tuning dei modelli?

La Kimi API **al momento non supporta** il fine-tuning dei modelli avviato dall'utente. Per esigenze di modelli personalizzati, contatta il team commerciale tramite [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) per scoprire le opzioni di personalizzazione enterprise.

## Supporta l'OCR?

I modelli Vision della Kimi API sono in grado di comprendere le immagini e di riconoscere il testo al loro interno, ottenendo risultati simili all'OCR:

- Supportano il riconoscimento del testo in inglese, cinese e molte altre lingue.
- Riconoscono testo stampato e parte del testo manoscritto.
- Ogni immagine viene fatturata a una tariffa fissa di 1.024 token.
- Oltre al riconoscimento del semplice testo, i modelli sanno interpretare anche tabelle, grafici e altri contenuti strutturati presenti nelle immagini.

## Supporta TTS (sintesi vocale) e ASR (riconoscimento vocale)?

La Kimi API **al momento non supporta** né TTS né ASR. Per le funzionalità legate alla voce, valuta di abbinare un servizio vocale di terze parti alla Kimi API. Segui gli annunci della piattaforma per restare aggiornato sui prossimi sviluppi.
