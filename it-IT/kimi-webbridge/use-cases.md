---
title: "Demo di casi d’uso dell’Estensione del browser Kimi"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Demo di casi d’uso dell’Estensione del browser Kimi - Centro assistenza Kimi"
  description="Scopri i casi d’uso tipici dell’Estensione del browser Kimi: pianificazione di viaggi, ricerca di case in affitto, ricerca bibliografica, confronto dei prezzi e altro ancora, con esempi di prompt pronti da copiare."
  ogType="article"
/>

# Demo di casi d’uso dell’Estensione del browser Kimi

Tutte le attività qui sotto possono essere affidate direttamente a Kimi: chatta nella barra laterale oppure lascia che un Agent locale le esegua.

## Ricerca e organizzazione delle informazioni

Quando devi cercare su più siti web, l’Estensione del browser Kimi consente all’agente di aprire automaticamente le pagine di destinazione, estrarre i contenuti principali e organizzarli in un output strutturato, evitandoti il lavoro noioso di aprire le pagine una per una e copiare e incollare manualmente.

### Pianificazione viaggi

Passa tra piattaforme di voli, siti di prenotazione hotel e community di viaggio per confrontare prezzi e orari, quindi organizza itinerari, tabelle di budget e suggerimenti per l’alloggio.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sto organizzando un viaggio a Kyoto di 5 giorni e 4 notti a novembre per due persone, con un budget di circa RMB 8,000. Controlla voli, hotel e orari di apertura delle attrazioni, quindi organizza i risultati in un itinerario giorno per giorno e in una tabella del budget.",
    },
  ]}
/>

### Selezione di annunci di affitto

Cerca contemporaneamente su più piattaforme di affitti, filtra gli annunci per canone, tempi di percorrenza, tipo di unità e altri criteri, consolida le informazioni e ordina i consigli.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Aiutami a trovare un alloggio in affitto vicino alla stazione Zhangjiang Hi-Tech Park di Shanghai. Il mio budget è entro RMB 4,500, il tempo di percorrenza dovrebbe essere inferiore a 40 minuti e preferisco un intero appartamento con una camera da letto. Apri più piattaforme, organizza link agli annunci, prezzi, metrature e tempi di percorrenza, e fornisci un elenco di contatti in ordine di priorità.",
    },
  ]}
/>

## Ricerca e analisi dei contenuti

L’Estensione del browser Kimi può aiutare l’agente a sfogliare automaticamente i risultati di ricerca, aprire le pagine di dettaglio, estrarre titoli, dati, commenti e altre informazioni, quindi analizzarli e riassumerli. È particolarmente adatto alle attività di ricerca che richiedono di consultare molte pagine web.

### Ricerca bibliografica

Cerca letteratura accademica, estrae abstract degli articoli, metodi principali, conclusioni sperimentali e relazioni di citazione, quindi produce una rassegna strutturata.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Fai una ricerca sugli articoli rappresentativi degli ultimi due anni sulla memoria degli agenti IA, organizza titoli, autori, abstract, metodi principali e link open-source, e riassumi la traiettoria della ricerca.",
    },
  ]}
/>

### Ricerca approfondita per argomento

Vuoi capire un argomento che non conosci? Lascia che Kimi cerchi automaticamente, legga i risultati uno per uno e riunisca tutto in un riepilogo.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Cerca modelli IA locali che valga la pena usare nel 2025 e recupera il testo completo dei primi 10 risultati.",
    },
  ]}
/>

## Supporto quotidiano per l’ufficio

Usa le capacità di automazione dell’Estensione del browser Kimi per gestire operazioni web ripetitive e migliorare l’efficienza del lavoro.

### Confronto prezzi e-commerce

Cerca lo stesso prodotto su più piattaforme di e-commerce, confronta prezzi, specifiche e recensioni degli utenti, quindi organizza le migliori opzioni di acquisto.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Vorrei acquistare un monitor 4K da 27 pollici con un budget di circa RMB 2,000. Cerca e confronta le opzioni sulle principali piattaforme di e-commerce, organizza prezzi, marchi e recensioni degli utenti, e consiglia le scelte con il miglior rapporto qualità-prezzo.",
    },
  ]}
/>

### Estrazione dati dal web

Estrai dati strutturati come tabelle ed elenchi da pagine web e organizzali automaticamente nel formato specificato, evitando il fastidio di copiare e incollare a mano.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Aiutami ad aprire questa pagina web, estrarre la tabella dei prezzi dei prodotti presente nella pagina e restituirla come elenco chiaro.",
    },
  ]}
/>

## Trasforma i flussi ripetitivi in Skill

Quando lo stesso flusso di lavoro deve essere ripetuto più e più volte, non devi riscrivere l’istruzione ogni volta. Kimi può "imparare" il procedimento e salvarlo come Skill: dopo, ti basta digitare `/` per richiamarla in qualsiasi momento.

### Registra le azioni come Skill

Ideale per le routine web con passaggi fissi, come aprire ogni giorno un pannello per esportare dati o compilare sempre lo stesso modulo.

1. Digita `/` nella barra laterale e scegli "Registra le azioni come Skill"
2. Esegui i passaggi una volta come al solito: Kimi registra ogni azione
3. Fai clic su "Interrompi e genera" e Kimi trasformerà l’esecuzione in una Skill
4. Controlla nome, passaggi e parametri della Skill, quindi salvala (le informazioni sensibili come le password possono essere impostate come parametri riservati da compilare al momento della riproduzione)

In seguito, digita `/` e seleziona la Skill per farla ripetere a Kimi. Puoi modificare i passaggi e i contenuti della Skill in qualsiasi momento.

### Trasforma un sito in una Skill

Ideale per i siti web che usi di continuo, come un pannello dati abituale o un sistema interno.

Digita `/` nella barra laterale e scegli "Trasforma un sito in una Skill". Kimi analizza automaticamente la struttura e il funzionamento del sito, lo racchiude in una Skill pronta all’uso e, una volta salvata, puoi richiamarla in qualsiasi momento con `/`.

### Salva questa sessione come Skill

Se Kimi ha già completato un’ottima esecuzione nella conversazione corrente, puoi salvarla direttamente per riutilizzarla: digita `/` e scegli "Salva questa sessione come Skill".

Per altri casi d’uso, consulta il [sito ufficiale dell’Estensione del browser Kimi](https://www.kimi.com/zh-cn/features/webbridge).
