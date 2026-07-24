---
title: "Funzionalità full-stack di Kimi Websites"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
preview_content: "Funzionalità full-stack di Kimi Websites e limitazioni attuali."
---

<SeoMeta
  title="Perché il sito web generato da Kimi non funziona? - Centro assistenza Kimi"
  description="Scopri gli attuali confini funzionali e le limitazioni di Kimi Websites. Gli scenari non supportati includono pagamenti di terze parti, OAuth e integrazioni API complesse."
/>

# Funzionalità full-stack di Kimi Websites

## Potenziamento della creazione di siti web full-stack

Un sito web completo di solito è composto da tre elementi: **interfaccia front-end, servizi back-end e archiviazione dei dati**. Kimi Websites è stato aggiornato con funzionalità di creazione di siti web full-stack, supportando la generazione e il deployment end-to-end del sito, dalle pagine front-end ai database back-end.

| Funzionalità         | Descrizione                                                           |
|--------------|----------------------------------------------------------------|
| Generazione front-end     | Struttura delle pagine HTML/CSS/JavaScript, stili e logica di interazione                    |
| Database back-end   | Crea automaticamente un database back-end, con supporto per letture/scritture persistenti dei dati e gestione visuale               |
| Accesso utente     | Supporta il login con account Kimi e può anche creare un sistema di accesso con account e password tramite database           |
| Gestione delle versioni     | L’AI effettua automaticamente il commit delle versioni e supporta il rollback a qualsiasi versione precedente                      |
| Anteprima full-stack     | Supporta l’anteprima completa di front-end e back-end; in alcuni scenari è necessario avviare manualmente l’ambiente sandbox                   |
| Pubblicazione e deployment   | Fai clic manualmente su "Pubblica" per effettuare il deployment su Internet pubblico. Prima della pubblicazione, il sito è disponibile solo in anteprima. È supportato il deployment di contenuti full-stack  |

## Risultati prodotti dall’agente

- File completi per l’esecuzione dell’attività, inclusi codice front-end e back-end
- Un sito web full-stack visualizzabile in anteprima online e pubblicabile
- Un pacchetto Zip scaricabile situato nella directory `/mnt/agents/output/app/`

## Casi d’uso

| Scenario             | Esempio di prompt                                                       |
|------------------|------------------------------------------------------------------|
| Creare una landing page da zero   | Crea una landing page di marketing per un prodotto SaaS, con uno stile ispirato alla tecnologia, includendo una sezione hero, presentazione delle funzionalità, prezzi e CTA |
| Ricreare da uno screenshot         | [Carica uno screenshot del design] Trasforma questo design in codice di pagina web eseguibile               |
| Portfolio personale       | Crea un sito portfolio personale per un fotografo, con uno stile minimalista in bianco e nero e supporto per un layout di immagini masonry        |
| Pagina di visualizzazione dati     | Crea una pagina web di visualizzazione dati che mostri i dati sui finanziamenti delle aziende AI nel 2025, includendo grafici e filtri |
| Sito di brand         | Crea il sito ufficiale di un brand di caffè, usando una palette di colori Morandi, con homepage, pagine prodotto e pagine dei punti vendita      |
| App protetta da login     | Crea un sito web di knowledge base interna per un team, in cui i contenuti siano visibili solo dopo il login                   |
| Amministrazione della gestione dati     | Crea un sistema di registrazione eventi in cui gli utenti possano inviare informazioni salvate in un database e gli amministratori possano visualizzare l’elenco delle iscrizioni |
| Strumento/calcolatore    | Crea una pagina web con un calcolatore BMI, con interfaccia pulita, cambio delle unità di misura e suggerimenti sulle categorie di salute     |

## Limitazioni attuali

I seguenti scenari non sono ancora supportati e saranno aperti gradualmente nelle versioni future:

- Integrazione di pagamenti di terze parti, come Stripe e PayPal
- Login OAuth di terze parti, come Google e GitHub. Attualmente sono supportati solo il login con account Kimi o il login con nome utente/password basato su database
- Integrazioni API server-side complesse, come il collegamento a servizi SaaS esterni
