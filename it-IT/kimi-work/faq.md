---
title: "FAQ"
slug: "kimi-work-faq"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="FAQ di Kimi Work - Centro assistenza Kimi"
  description="FAQ di Kimi Work: differenze rispetto alla versione web, controllo delle autorizzazioni per l'accesso ai file locali, cosa può fare l'automazione del browser con WebBridge e come vengono eseguite le attività pianificate."
/>

# FAQ di Kimi Work

## Qual è la differenza tra Kimi Work e la versione web?

L'app web di Kimi è perfetta per chat e domande rapide, mentre Kimi Work è un Agent locale progettato per flussi di lavoro approfonditi. Legge e gestisce le cartelle locali, naviga autonomamente sul web tramite WebBridge, esegue codice Python in background ed esegue attività pianificate. È un collaboratore digitale a livello di sistema.

## In che modo Kimi Work tutela la mia privacy quando accede ai file locali?

Hai il pieno controllo sui tuoi file. Kimi Work offre il controllo delle autorizzazioni a tre livelli e sei tu a scegliere come concederle:

- **Predefinito**: le operazioni di routine vengono eseguite automaticamente — Kimi ti richiede un'autorizzazione esplicita prima di operazioni sensibili come modificare, sovrascrivere o eseguire codice all'interno dei tuoi file locali;
- **Consenti manualmente**: chiede l'autorizzazione prima di agire;
- **Consenti tutto**: procede direttamente senza chiedere autorizzazione.

Quando scegli "Consenti manualmente", non accade nulla senza il tuo consenso.

<Callout type="exclamation">
Con il permesso "Consenti tutto" (completamente automatico) attivato, l'IA legge e scrive direttamente i file, esegue codice e modifica le configurazioni di sistema, e gestisce automaticamente i passaggi che altrimenti richiederebbero la tua decisione. Ciò può causare:

- la sovrascrittura, l'eliminazione accidentale o il danneggiamento di file;
- la modifica delle configurazioni di sistema, con conseguenti malfunzionamenti del software;
- modifiche alla crittografia del disco, alle partizioni o al firmware, che rendono il dispositivo limitato o non avviabile.

Alcune operazioni sono irreversibili e i dati possono andare persi definitivamente senza possibilità di recupero. Ti invitiamo a conoscere i rischi di questa modalità, a usarla con cautela e a eseguire il backup dei tuoi dati.

Attivando il permesso "Consenti tutto" (completamente automatico), dichiari di conoscere e accettare i rischi sopra indicati e autorizzi l'IA a eseguire autonomamente le operazioni correlate; i risultati delle operazioni eseguite sulla base della tua autorizzazione sono a tuo carico.
</Callout>

## Che cosa può fare esattamente WebBridge (automazione del browser) per me?

WebBridge consente a Kimi di usare un browser come farebbe una persona. Puoi chiedergli di controllare le ultime notizie su un sito e riassumerle, oppure di estrarre dati azionari storici e salvarli nel tuo Excel locale. Clicca, scorre le pagine ed estrae dati in autonomia, facendoti risparmiare ore di lavoro manuale.

## Cosa posso fare con le attività pianificate? Vengono eseguite se il computer è in sospensione?

Le attività pianificate permettono a Kimi di eseguire automaticamente un'attività fissa a un orario stabilito — con frequenza giornaliera, settimanale, mensile oppure una sola volta (senza ripetizione) — e sono ideali per briefing quotidiani, monitoraggi settimanali e pulizie periodiche.

Su Kimi Work desktop, le attività pianificate vengono eseguite **in locale** e partono solo mentre **l'app è aperta**. I trigger mancati mentre il computer è in sospensione o spento, oppure mentre l'app è chiusa, **non vengono recuperati retroattivamente** alla successiva apertura. Quindi, se hai bisogno che un'attività venga eseguita durante la notte, tieni accesi sia il computer sia l'app Kimi Work. (Al contrario, le attività create in Kimi vengono eseguite nel cloud e non richiedono che il client resti aperto.)

Per maggiori dettagli, consulta [Attività pianificate](/features/scheduled-tasks).
