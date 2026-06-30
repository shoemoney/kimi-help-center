---
title: "Limiti delle conversazioni"
slug: "conversation-limits"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Limiti delle conversazioni - Centro assistenza Kimi"
  description="Quando il contesto della conversazione diventa troppo lungo e supera il limite di token del modello, Kimi Claw potrebbe smettere di rispondere o restituire un errore."
/>

# Limiti delle conversazioni

Quando il contesto della conversazione diventa troppo lungo e supera il limite di token del modello, Kimi Claw potrebbe smettere di rispondere o restituire un errore.

**Come risolvere:**

- Invia `/new` per avviare una nuova conversazione e cancellare il contesto attuale.
- Se l'errore persiste dopo `/new`, è possibile che troppe Skill siano caricate in memoria. Prova a:
  - `/skills` — esamina le skill installate e disinstalla quelle che non ti servono.
  - `/compact` — comprimi il contesto attuale per liberare spazio.
  - `/reset` — ripristina completamente Kimi Claw come ultima risorsa.

## Hai raggiunto il rate limit dell'API?

Significa che hai raggiunto il limite di frequenza delle richieste. Attendi un momento e riprova.

**Per verificare la tua quota e i rate limit:**

1. Vai su [kimi.com/code](https://kimi.com/code).
2. Apri la **Console**.
3. Clicca su **View Quota & Rate Limits** per visualizzare l'utilizzo attuale e i limiti.

Se raggiungi spesso i rate limit, valuta di distribuire le attività nel tempo o di passare a un livello di abbonamento superiore per aumentare il throughput.
