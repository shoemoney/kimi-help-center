---
title: "Perdita di memoria e contesto"
slug: "memory-loss"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="Perdita di memoria e contesto - Kimi Help Center"
  description="OpenClaw reimposta automaticamente la conversazione ogni giorno alle 4:00. Questo evita che contesti troppo lunghi causino allucinazioni o un peggioramento della qualità delle risposte."
/>

# Perdita di memoria e contesto

## Perché la conversazione di ieri è scomparsa?

OpenClaw reimposta automaticamente la conversazione **ogni giorno alle 4:00**. Questo evita che contesti troppo lunghi causino allucinazioni o un peggioramento della qualità delle risposte.

Se vuoi modificare il momento in cui avviene il reset, puoi cambiare la pianificazione in `config.yaml`.

**Buona prassi:** per qualsiasi cosa importante — preferenze, dettagli di progetto, istruzioni ricorrenti — chiedi esplicitamente a Kimi Claw di salvarla: _"Ricorda questo nella Memory."_ Le informazioni archiviate nella Memory rimangono anche dopo il reset della conversazione.

## Kimi Claw ha perso la memoria?

Il reset giornaliero delle 4 del mattino cancella il contesto attivo della conversazione. Se qualcosa non è stato salvato nella **Memory**, è perduto.

**Come risolvere:**
- Durante una conversazione, di' _"Ricorda X nella Memory"_ e Kimi Claw lo scriverà nella memoria a lungo termine.
- Consulta i ricordi salvati tramite **Workspace → AGENTS.md → #MEMORY**.

<Frames
  src="./images/memory-loss/claw-memory.png"
  alt="Claw Memory"
/>

- Usa il comando `/memory` in qualsiasi momento per visualizzare e gestire i ricordi salvati.

## Per quanto tempo viene conservata la memoria dopo la fine dell'abbonamento?

I file di memoria risiedono nel tuo Workspace e puoi visualizzarli o scaricarli in qualsiasi momento.

- Dopo la scadenza dell'abbonamento, l'istanza cloud viene **conservata per 7 giorni**.
- Se rinnovi entro 7 giorni, tutti i dati — memoria, configurazione, skill — vengono ripristinati completamente.
- Trascorsi i 7 giorni, l'istanza può essere recuperata e i dati eliminati in modo permanente.
- È in fase di sviluppo una funzione di esportazione/backup della memoria per facilitare la migrazione.
