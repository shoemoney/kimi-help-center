---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: false
preview: true
preview_content: "Crea e pubblica siti web a partire da descrizioni in linguaggio naturale, mockup di design o modelli."
---

<SeoMeta
  title="Panoramica di Kimi Websites - Centro assistenza Kimi"
  description="Crea e pubblica siti web a partire da descrizioni in linguaggio naturale, mockup di design o modelli."
/>

# Kimi Websites

<Callout type="info">
**Kimi Websites** è una funzionalità di Kimi Agent basata sul nuovo modello AI multimodale e visivo Kimi K2.6. La sua capacità principale è il **Vibe Coding**: genera siti web a partire dal linguaggio naturale e li pubblica online.
</Callout>

Comprendendo input visivi (mockup UI, screenshot, video di interazione) e istruzioni in linguaggio naturale, Kimi traduce ciò che fornisci in codice frontend completo e funzionante, che non si limita alla UI statica ma include anche il comportamento interattivo dinamico.

## Panoramica delle funzionalità

| Funzionalità | Descrizione |
|---------|------------|
| **Creazione di siti tramite conversazione** | Descrivi le tue esigenze in linguaggio naturale; l'AI genera automaticamente il sito web |
| **Comprensione di immagini/video** | Carica mockup di design/screenshot/registrazioni dello schermo; l'AI li analizza e genera pagine HTML |
| **Pubblicazione automatica** | Pubblicazione immediata con un solo clic |
| **Modifica iterativa** | Revisioni successive del sito con confronto delle versioni |
| **Condivisione con un clic** | Genera link accessibili per condividere con facilità |
| **Scelta dei modelli** | Più modelli predefiniti per iniziare rapidamente a creare il sito |
| **Esportazione del codice** | Scarica i file HTML/CSS/JS pacchettizzati per l'hosting autonomo |

## Come usare Kimi Websites?

### Metodo 1: visita la pagina di Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Homepage di Kimi websites"
/>

1. **Apri il browser**: usa Chrome, Safari, Edge, Firefox o qualsiasi browser diffuso
2. **Vai su**: [kimi.com/websites](https://www.kimi.com/zh/websites) (disponibile in cinese e inglese)
3. **Accedi**: con il tuo account Kimi (numero di telefono o email)
4. **Inserisci la tua richiesta**:

| Modalità | Descrizione |
|----------|-------------|
| **Input di testo** | Scrivi la tua richiesta in linguaggio naturale |
| **Clonazione di immagine/sito** | Carica un mockup di design o uno screenshot |
| **Basato su modello** | Seleziona un modello predefinito e modificane i contenuti |

5. **Inizia a creare**: scegli un modello o parti da una conversazione

<Frames
  src="./images/overview/screenshot-27.png"
  alt="screenshot 27"
/>

### Metodo 2: app per dispositivi mobili

L'app ufficiale di Kimi è disponibile per iOS, Android e HarmonyOS. Nell'area di input, tocca la **Barra delle attività** → passa alla **modalità Websites Agent**, che include strumenti di generazione multimodale e le funzionalità Agent.

### Metodo 3: usa la modalità K2.6 Agent

Passa alla modalità K2.6 Agent e inserisci un'attività di creazione di un sito web. Kimi attiverà le sue capacità di coding visivo e gli strumenti di esecuzione del codice.

## Come funziona Kimi Websites?

### Passaggio 1: crea un sito web tramite conversazione

Descrivi le tue esigenze in linguaggio naturale. Sono supportate tre modalità di creazione:

| Modalità | Descrizione |
|--------|------------|
| **Descrizione testuale** | Inserisci direttamente i requisiti del sito; l'AI genera automaticamente |
| **Analisi del mockup di design** | Carica un file di design; l'AI lo riconosce e lo ricrea come pagina web |
| **Creazione rapida da modello** | Seleziona un modello predefinito e modificane i contenuti |

**Esempio di prompt**:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Build a website for West Highland Terrier dogs with a black-and-white color scheme. Include three sections:\nA studio-quality photo calendar with AI-generated image display\nA \"Curly Lab\" care and grooming encyclopedia\nA merchandise store selling Westie-print hoodies and limited-edition silver-foil posters. The checkout page should include a charity module — donate $1 per item sold to stray dog rescue.",
    },
  ]}
/>

### Passaggio 2: processo di creazione

<Frames
  src="./images/overview/screenshot-26.png"
  alt="screenshot 26"
/>

Kimi website attiva la **SKILL di creazione di webapp**, un agente dedicato alla generazione di codice in più round:
1. **Analisi dei requisiti**: analizza i moduli del sito, lo stile visivo e la logica di interazione
2. **Pianificazione delle attività**: scompone il lavoro in sotto-attività di design, sviluppo e preparazione delle risorse
3. **Scelta dello stack tecnologico**: seleziona l'architettura più adatta (ad esempio React + Tailwind CSS)
4. **Generazione delle risorse**: crea immagini, icone e altre risorse visive
5. **Costruzione del codice**: scrive la struttura della pagina, lo stile e il codice di interazione
6. **Ottimizzazione in più round**: si autoregola in base ai risultati dell'anteprima fino al completamento

### Passaggio 3: anteprima e modifica
- **Anteprima dal vivo**: genera un URL HTML di dimostrazione per visualizzarlo subito nel browser
- **Modifica tramite conversazione**: prosegui la conversazione per richiedere modifiche, ad esempio *"Rendi scura la barra di navigazione"*

<Callout type="tip">
**Esempio**: *"I colori non mi convincono: vorrei abbandonare il requisito del bianco e nero e ottenere un sito dall'aspetto normale."*
Kimi riorganizzerà l'elenco delle attività e proseguirà la creazione.
</Callout>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### Passaggio 4: modifica visiva online
- **Ottimizzazione in più round**: rifinisci i dettagli con una conversazione continua
- **Modalità di modifica**:
  - **Modalità annotazione**: clicca sulle aree per aggiungere annotazioni in linguaggio naturale
  - **Modalità selezione**: seleziona qualsiasi elemento e aggiungi annotazioni
  - Usa rettangoli, frecce, pennelli e cambio di colore per segnalare suggerimenti di revisione
- Invia tutti i suggerimenti di revisione a Kimi in una sola volta
### Passaggio 5: pubblicazione
| Metodo di pubblicazione | Descrizione |
|-------------------|------------|
| **Pubblicazione automatica** | Pubblicazione con un clic e generazione del link online |
| **Download e hosting autonomo** | Scarica i file di codice pacchettizzati e pubblicali sul tuo server |
| **Dominio personalizzato** | Collega il sito generato al tuo dominio |

Al termine della generazione puoi:
- Cliccare sulle diverse versioni di pubblicazione per scaricare i file della versione
- Cliccare sul pulsante di condivisione per ottenere un link pubblicamente accessibile (oppure impostarlo come privato)
- Cliccare sul pulsante di modifica per continuare a revisionare
- Scaricare il codice completo HTML/CSS/JS per la pubblicazione diretta o per ulteriori rifiniture

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## Destinatari
| Destinatari | Caso d'uso |
|----------|----------|
| **Sviluppatori** | Progettare prototipi di prodotto e demo frontend, riducendo drasticamente i tempi di sviluppo da zero |
| **Imprenditori** | Creare rapidamente landing page, vetrine di prodotto e siti aziendali anche con risorse limitate |
| **Product manager** | Trasformare velocemente PRD o mockup di design in prototipi interattivi dimostrabili |
| **Utenti non tecnici** | Nessuna competenza di programmazione richiesta: descrivi la tua idea o carica un'immagine di riferimento per passare dal concept a una pagina web funzionante |

## Scenari di riferimento
| Scenario | Esempio di prompt |
|----------|---------------|
| **Landing page da zero** | Crea una landing page di marketing per un SaaS con un'estetica tech: includi sezione hero, panoramica delle funzionalità, prezzi e CTA |
| **Riproduzione di un sito da video** | [Carica la registrazione dello schermo] Riproduci il sito mostrato in questo video, mantenendo gli effetti di interazione originali |
| **Riproduzione da screenshot** | [Carica il mockup di design] Trasforma questo design in codice di una pagina web funzionante |
| **Portfolio personale** | Crea il sito portfolio di un fotografo: stile minimalista in bianco e nero con galleria a layout masonry |
| **Pagina di visualizzazione dati** | Crea una pagina di visualizzazione che mostri i dati di finanziamento delle aziende AI nel 2025 con grafici e filtri |
| **Sito di un brand** | Crea il sito di un marchio di caffè in tonalità terrose tenui: includi le pagine home, prodotti e ricerca punti vendita |
| **Strumento / Calcolatore** | Crea una pagina web per il calcolo del BMI: interfaccia pulita, supporto al cambio di unità di misura e indicatori del livello di salute |
