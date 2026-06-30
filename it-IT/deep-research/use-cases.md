---
title: "Casi d'uso di Deep Research e raccolta di prompt"
slug: "deep-research-use-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Casi d'uso di Deep Research e raccolta di prompt - Centro assistenza Kimi"
  description="Sono un analista finanziario professionista. Aiutami a condurre un'analisi approfondita di Pop Mart da una prospettiva finanziaria. L'analisi dovrebbe includere ma..."
/>

# Casi d'uso di Deep Research e raccolta di prompt

## Panoramica dei casi d'uso

| Scenario | Esempio di prompt |
|:---|:---|
| Ricerca di settore / di mercato | Analizza il panorama competitivo e i principali protagonisti del settore della robotica umanoide nazionale nel 2025 |
| Analisi della concorrenza | Confronta e analizza le differenze nella strategia di prodotto tra Notion e Obsidian |
| Due diligence sugli investimenti | Raccogli i round di finanziamento e le variazioni di valutazione delle principali aziende LLM degli ultimi due anni |
| Rassegna della letteratura accademica | Ricostruisci l'evoluzione della tecnologia RAG e le sue principali direzioni di ottimizzazione attuali |
| Analisi delle policy | Analizza l'impatto delle ultime normative sulla sicurezza dei dati sulle aziende che si espandono all'estero |
| Decisioni personali | Voglio acquistare un laptop per il montaggio video: aiutami a individuare le opzioni migliori |

## Ricerca di settore

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sono un analista finanziario professionista. Aiutami a condurre un'analisi approfondita di Pop Mart da una prospettiva finanziaria. L'analisi dovrebbe includere, ma non limitarsi a: 1. Panoramica aziendale: modello di business, vantaggio competitivo e posizione nel settore; 2. Panoramica del settore, dinamiche a monte/a valle e sviluppi futuri; 3. Dati finanziari: andamento di ricavi e utili, fattori di influenza, stato patrimoniale e flussi di cassa; 4. Storico di conformità — eventuali sanzioni normative, motivazioni specifiche e rischi associati; 5. Analisi tecnica: andamento dei prezzi, indicatori e livelli di supporto/resistenza; 6. Sentiment di mercato: rating, opinione pubblica e impatto delle notizie; 7. Confronto competitivo: principali concorrenti, rispettive quote di mercato e indicatori finanziari; 8. Valutazione e solidità: valutazione PE/PB/DCF e analisi della sua ragionevolezza; 9. Rischi principali: concorrenza di settore, policy, geopolitica, ecc.",
    },
  ]}
/>

## Analisi della concorrenza

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Confronta e analizza le differenze nella strategia di prodotto tra Notion e Obsidian",
    },
  ]}
/>

## Due diligence sugli investimenti

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Conduci una ricerca approfondita su [Nome azienda]:\n1. Modello di business e vantaggio competitivo principale (vantaggi competitivi, edge tecnologico/di canale, panorama competitivo);\n2. Solidità finanziaria (struttura dei ricavi, redditività, flussi di cassa, principali aree di rischio);\n3. Team e governance (background del fondatore, struttura azionaria, talenti chiave);\n4. Mercato e policy (TAM/SAM/SOM, tasso di crescita del settore, contesto normativo);\n5. Identificazione dei rischi (operativi, legali, barriere all'uscita);\n6. Riferimento di valutazione (aziende comparabili, round di finanziamento storici, fascia ragionevole).\nRequisiti: cita le fonti dei dati, segna le conclusioni chiave con ⭐, elenca separatamente i punti controversi.",
    },
  ]}
/>

[Visualizza il risultato]（https://www.kimi.com/replay/19b36b81-4492-83de-8000-00004525716b）

## Ricerca legale e normativa

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sono un avvocato in-house in un'azienda cinese di robotica e la direzione sta valutando l'espansione nei paesi del Sud-Est asiatico. Tuttavia, non ho molta dimestichezza con i requisiti in materia di dati e privacy in quei paesi. Potresti aiutarmi elencando i nomi delle leggi sui dati e sulla privacy dei paesi del Sud-Est asiatico (paese per paese) e, preferibilmente, fornendo una breve sintesi e i punti chiave di tali leggi?",
    },
  ]}
/>

## Rassegna accademica 

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sono uno studente di magistrale in scienze della comunicazione e sto conducendo una ricerca accademica sul \"divario digitale\". Esegui una ricerca approfondita e sistematica. Mi servono almeno 15 articoli di riviste fondamentali, sia in cinese sia in inglese. Fornisci la definizione di questo concetto, la letteratura degli ultimi 3-5 anni e 3 potenziali sotto-argomenti per ulteriori ricerche. Concentrati sugli studi più recenti e sui documenti di policy a partire dal 2020, con particolare attenzione alle nuove dinamiche di ricerca successive al boom dell'IA del 2023.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Crea un piano di lezione su \"La primavera\" per studenti della prima media",
    },
  ]}
/>

<Frames
  src="./images/use-cases/academic-review.png"
  alt="Rassegna accademica"
/>

## Analisi delle policy

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "In qualità di analista di policy, conduci un'analisi approfondita di [nome policy/documento], comprendendo il contesto e gli obiettivi principali.\nElenca i soggetti destinatari e le modifiche sostanziali delle disposizioni chiave, i requisiti di conformità specifici e le relative tempistiche per le imprese, oltre a una previsione sull'orientamento futuro della policy.\nRequisiti: cita il testo ufficiale con le fonti, evidenzia le modifiche chiave, tratta separatamente le clausole controverse e mantieni il totale entro 2.000 parole.",
    },
  ]}
/>

## Decisioni personali (pianificazione di viaggi / confronto tra prodotti)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Voglio fare un viaggio on the road attraverso lo Xinjiang settentrionale. Crea un itinerario di 5 giorni e 4 notti che includa gastronomia, attività e pernottamenti. La nostra famiglia di quattro persone è composta da me, dal mio coniuge, da un bambino di 6 anni e da una bambina di 4 anni. I bambini sono vivaci e amano camminare, ma evita per favore i percorsi particolarmente pericolosi.",
    },
  ]}
/>

## Altri esempi di prompt

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Raccogli gli eventi di finanziamento del 2025 nel settore della robotica, ordinati per mese, indicando gli investitori principali e le tendenze di finanziamento. Fornisci i link alle fonti.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Confronta pro e contro di iPhone 16 e iPhone 17 in termini di fotografia, prestazioni e durata della batteria, citando feedback reali degli utenti dell'ultimo anno.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sono uno studente universitario in cerca di lavoro e parto da zero nello sviluppo di LLM. Aiutami a pianificare un percorso di apprendimento per questo ambito e fornisci i relativi punti di conoscenza.",
    },
  ]}
/>
