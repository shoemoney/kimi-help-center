---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: true
preview: true
preview_content: "Crea e distribuisci siti web full-stack a partire da descrizioni in linguaggio naturale, mockup di design o template."
---

<SeoMeta
  title="Panoramica delle funzionalità di Kimi Websites - Centro assistenza Kimi"
  description="Scopri le funzionalità di Kimi Websites per creare siti web full-stack. Genera siti completi (frontend + backend + database) in linguaggio naturale, con pubblicazione in un clic, modifiche multi-turn ed esportazione del codice."
/>

# Panoramica delle funzionalità di Kimi Websites

## Che cos’è Kimi Websites

Kimi Websites è il prodotto di Kimi Agent per creare siti web full-stack, basato su Kimi K3, un modello AI multimodale, visivo e agentic. La sua funzione principale è la programmazione visuale (Vibe Coding): puoi generare un sito web full-stack completo partendo dal linguaggio naturale, da un mockup di design o da una registrazione dello schermo, quindi visualizzarlo online in anteprima e pubblicarlo con un clic.

I siti generati da Kimi Websites possono includere:

- **Frontend**: struttura delle pagine HTML, layout e stili CSS, logica di interazione JavaScript (effetti di movimento, animazioni, ecc.)
- **Backend**: archiviazione persistente nel database, login utente e autenticazione
- **Engineering**: gestione automatica delle versioni, anteprima full-stack e distribuzione pubblica

### Funzionalità del prodotto

| Funzionalità        | Descrizione                                                  |
|----------------|--------------------------------------------------------------|
| Creazione conversazionale di siti web | Descrivi in linguaggio naturale ciò di cui hai bisogno e l’AI genera automaticamente un sito web full-stack |
| Comprensione di immagini/video | Carica un mockup di design, uno screenshot o una registrazione dello schermo: l’AI li analizza automaticamente e genera le pagine |
| Archiviazione persistente | Crea automaticamente un database backend, con lettura, scrittura e gestione persistenti dei dati |
| Gestione del database | Offre un pannello visuale del database per operazioni di base sui dati, come visualizzare, modificare ed eliminare |
| Login utente | Supporta il login con account Kimi e può anche creare, tramite database, un sistema di accesso con nome utente/password |
| Gestione delle versioni | L’AI crea automaticamente commit di versione (git commit) e supporta il ripristino a qualsiasi versione precedente |
| Anteprima full-stack | Supporta l’anteprima completa di frontend e backend; in alcuni scenari è necessario avviare manualmente l’ambiente sandbox |
| Modifiche multi-turn | Supporta modifiche iterative tramite conversazioni multi-turn e consente di confrontare versioni diverse |
| Modifica visuale | Annota gli elementi nella pagina di anteprima cerchiandoli o contrassegnandoli, poi invia tutti i suggerimenti a Kimi in una sola volta |
| Pubblicazione e distribuzione | Dopo aver fatto clic manualmente su "Pubblica", il sito viene distribuito su Internet pubblico; prima della pubblicazione è disponibile solo in anteprima. È supportata la distribuzione full-stack |
| URL personalizzato | Personalizza il sottodominio del sito, ad esempio `abc` in `abc.ok.kimi.link` |
| Condivisione e controllo degli accessi | Ottieni con un clic un link pubblico di condivisione oppure imposta il sito come privato/visibile solo a te |
| Selezione dei template | Offre diversi template preimpostati per iniziare rapidamente a creare |
| Esportazione del codice | Supporta il download del pacchetto completo del progetto (frontend e backend inclusi) per la distribuzione autogestita |

## Come si usa

### Metodo 1: accesso dal Web
Visita la pagina dedicata a Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Homepage di Kimi Websites"
/>

1. Apri un browser: usa un browser comune come Chrome, Safari, Edge o Firefox.
2. Apri l’indirizzo ufficiale di accesso: pagina dedicata a Kimi Websites: [https://www.kimi.com/zh/websites](https://www.kimi.com/zh/websites) (supporta interfacce in cinese e in inglese)
3. Accedi al tuo account: effettua l’accesso con un account Kimi (è supportata la registrazione con numero di cellulare o email)
4. Inserisci il compito di creazione del sito. Kimi Websites offre tre modi principali per creare un sito web:
   1. **Inserimento di testo**: inserisci il compito nella finestra di dialogo e descrivi in linguaggio naturale il sito che desideri;
   2. **remix da immagine/sito web**: carica un mockup di design o lo screenshot di un sito web che ti piace per attivare la funzionalità corrispondente;
   3. **Creazione da template**: crea rapidamente un sito web standard scegliendo un template preimpostato e modificandone i contenuti;
5. Inizia a creare: accedi all’interfaccia della funzionalità Websites, scegli un template oppure crea direttamente tramite conversazione.

<Frames
  src="./images/overview/screenshot-27.png"
  alt="screenshot 27"
/>

### Metodo 2: accesso dall’app mobile
Seleziona lo strumento dedicato ai siti web nell’app mobile

<Frames
  src="./images/overview/screenshot-27.png"
  alt="Interfaccia del generatore di siti web"
/>

Le App ufficiali sono disponibili per iOS, Android e HarmonyOS (nome dell’app: "Kimi"). Sopra la casella di input, tocca la barra degli strumenti → passa alla modalità Websites. Include strumenti di generazione multimodale e capacità Agent, consentendoti di fornire input visivi e generare codice frontend.

### Metodo 3: modalità Agent generale
In modalità Agent generale, inserisci i requisiti per la creazione del sito web

Sul sito ufficiale o su un dispositivo mobile, seleziona il modello K3 e inserisci istruzioni relative alla creazione di un sito web. Kimi richiamerà le capacità di programmazione visuale e gli strumenti di esecuzione del codice.

## Passaggi

### Creare un sito web tramite conversazione

Descrivi in linguaggio naturale ciò di cui hai bisogno nella casella di input: Kimi lo comprenderà e lo eseguirà. Sono supportati tre metodi di creazione:

| Metodo             | Descrizione                              |
|--------------------|------------------------------------------|
| Descrizione testuale   | Inserisci direttamente i requisiti del sito web e l’AI genera automaticamente il sito |
| Analisi di un mockup di design | Carica un mockup di design: l’AI lo riconosce e lo ricrea come pagina web |
| Creazione rapida di siti web standard | Scegli un template preimpostato e modifica i contenuti |

### Esempio pratico

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Inserisci un compito di creazione sito web\nCrea un sito web per cuccioli di West Highland White Terrier, con una palette principale in bianco e nero. Includi tre sezioni:\n1. Un calendario di ritratti in qualità studio con visualizzazioni di immagini generate dall’AI;\n2. Un’enciclopedia di cura \"Curly-Coat Lab\";\n3. Un negozio di merchandising che venda felpe con avatar di Westie e poster in foil argentato in edizione limitata.\nLa pagina di checkout deve includere un modulo benefico: dona $1 per ogni articolo venduto al salvataggio dei cuccioli randagi.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="Esempio di sito web"
/>

### Panoramica del flusso di creazione del sito web

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Descrizione dei requisiti → Kimi ragiona sul compito → richiama la SKILL di creazione webapp →\ncomprende lo stack tecnologico e il processo di build → crea un elenco di attività e inizializza il progetto → scrive una lista di cose da fare → esegue il terminale → genera immagini → visualizza in anteprima e regola →\naggiorna l’avanzamento delle attività e sviluppa il codice core del sito web → aggiorna CSS e file di configurazione, quindi crea componenti → apporta modifiche multi-turn → distribuisce online → condivide e diffonde",
    },
  ]}
/>

Kimi Websites attiva la SKILL di creazione webapp, un agente di generazione codice multi-turn dedicato alla costruzione di siti web. Svolge in autonomia il seguente flusso di lavoro:

1. Analisi dei requisiti: analizza automaticamente i moduli funzionali del sito, lo stile visivo e la logica di interazione
2. Pianificazione delle attività: suddivide il lavoro in sottoattività come design, sviluppo e preparazione degli asset
3. Soluzione tecnica: seleziona automaticamente un’architettura tecnica adatta (ad esempio React + Tailwind CSS)
4. Generazione degli asset: genera, se necessario, asset visivi come immagini e icone
5. Costruzione del codice: scrive la struttura delle pagine, gli stili e il codice di interazione
6. Ottimizzazione multi-turn: effettua regolazioni in autonomia sulla base dell’anteprima finché il sito web non è completo

<Frames
  src="./images/overview/screenshot-26.png"
  alt="screenshot 26"
/>

### Anteprima e regolazioni

- **Anteprima in tempo reale**: genera un URL demo HTML che puoi aprire subito nel browser
- **Modifiche conversazionali**: continua la conversazione per richiedere cambiamenti, ad esempio "cambia la barra di navigazione con uno stile scuro"

#### Esempio reale

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I colori non sono molto belli. Voglio rimuovere il requisito del bianco e nero e renderlo un sito dall’aspetto normale.\nKimi Websites riorganizzerà la lista delle attività e continuerà a creare il sito web.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="caso web 2"
/>

### Interfaccia del pannello di anteprima

Dopo la generazione del sito, il pannello di anteprima si apre a destra e nella conversazione compaiono anche le schede di versione. Le principali voci operative sono le seguenti:

**Barra degli strumenti superiore del pannello di anteprima** (da sinistra a destra):

| Pulsante | Funzione |
|--------|----------|
| Anteprima / Codice | Passa dalla visualizzazione dell’anteprima visuale a quella del codice sorgente/albero dei file |
| Modifica | Entra in modalità modifica; fai clic su un’area che vuoi cambiare, aggiungi note di annotazione e inviale a Kimi |
| Pubblica | Se il sito non è ancora pubblicato, fai clic su "Pubblica" per renderlo pubblico |
| Condividi | Dopo la pubblicazione, usa la scheda di condivisione per copiare il link, personalizzare il sottodominio, aprire il sito web, fare clic su "…" per annullare la pubblicazione oppure fare clic su "Aggiorna pubblicazione" quando è disponibile una nuova versione |
| Anteprima a schermo intero | Visualizza il sito web a schermo intero |
| Cambia modalità anteprima | Passa dalla vista desktop a quella mobile e viceversa |
| Aggiorna | Ricarica l’anteprima |
| Feedback utente | Invia problemi riscontrati durante l’uso; puoi inserire testo e caricare screenshot |
| Chiudi | Comprimi il pannello di anteprima |

**Schede di versione nella conversazione**: mostrano il nome del sito, il numero di versione (ad esempio V2) e l’URL. Fai clic su **Anteprima** per aprire la versione corrispondente; fai clic su **Ripristina** per tornare a quella versione. La scheda **Tutti i file** ti consente di visualizzare o scaricare i file completi del progetto. Per l’uso dettagliato di ciascun pulsante, consulta le sezioni corrispondenti qui sotto.

### Modifica visuale

<Frames
  src="./images/overview/web-case1.png"
  alt="Interfaccia di modifica visuale"
/>

- **Ottimizzazione multi-turn**: perfeziona i dettagli del sito web tramite una conversazione continua
- **Modi per modificare**:
  - **Modalità annotazione**: fai clic sulla parte della pagina web che vuoi cambiare e aggiungi commenti in linguaggio naturale
  - **Modalità selezione**: seleziona qualsiasi elemento della pagina web e aggiungi commenti
  - Usa rettangoli, frecce, pennelli, cambio colore e altri strumenti di selezione e modifica per aggiungere le modifiche suggerite
- Dopo aver aggiunto annotazioni in più punti, inseriscile nella conversazione e invia tutti i suggerimenti a Kimi in una sola volta

### Distribuzione del codice e pubblicazione
| Metodo di distribuzione | Descrizione                                           |
|-------------------|------------------------------------------------------|
| Pubblicazione in un clic | Fai clic sul pulsante "Pubblica" per distribuire il sito su Internet pubblico e generare un link online accessibile (prima della pubblicazione è disponibile solo in anteprima) |
| Download e distribuzione | Scarica il pacchetto di codice e distribuiscilo sul tuo server |
| URL personalizzato | Cambia l’URL casuale predefinito con un nome facile da ricordare, ad esempio personalizzando `abc` in `abc.ok.kimi.link` |

> **Informazioni su "URL personalizzato"**: 3–30 caratteri, solo lettere minuscole, numeri e trattini. Non può iniziare o finire con un trattino e non può essere composto solo da cifre. Alcune parole riservate (come `kimi`, `www`, `login`, ecc.) non sono disponibili. Se il nome è già occupato o non disponibile, scegline un altro.

> **Limiti di "Download e distribuzione"**: **login con account Kimi** e **database cloud gestito dalla piattaforma** sono forniti dalla piattaforma Kimi e non migrano con il codice esportato. Se distribuisci il codice sul tuo server, il metodo di login deve essere cambiato in uno schema nome utente/password basato sul tuo database, e anche i dati devono essere migrati nel tuo database. Se ti serve solo l’accesso pubblico, ti consigliamo di usare direttamente **Pubblicazione in un clic**: il login con account Kimi e i dati cloud continueranno a funzionare normalmente. Per i dettagli, consulta [Perché il sito web che ho creato non funziona?](/websites/websites-why-not-working).

#### Anteprima per versione
Al termine della generazione, accederai alla pagina di anteprima.
Nell’interfaccia di anteprima puoi fare clic su diverse versioni di distribuzione e scaricare i file delle varie versioni.

<Frames
  src="./images/overview/screenshot-26.png"
  alt="Anteprima versione"
/>

#### Pubblicare, condividere e annullare la pubblicazione
Prima della pubblicazione, il sito web può essere visualizzato solo in anteprima nella conversazione. Per consentire ad altri di accedervi, fai clic su **Condividi** nell’angolo in alto a destra del pannello di anteprima per aprire il pannello di pubblicazione:

1. **URL personalizzato**: puoi modificare il nome nell’URL predefinito, ad esempio cambiandolo in `yourname.ok.kimi.link`;
2. Fai clic su **Copia link** per ottenere l’URL pubblico, oppure su **Apri sito web** per visualizzarlo in una nuova scheda. Dopo la pubblicazione, nella parte superiore del pannello compare **Pubblicato** e chiunque abbia il link può accedervi;
3. Per mettere offline il sito, seleziona **Annulla pubblicazione** dal menu **…** nell’angolo in alto a destra del pannello. Il sito non sarà più accessibile pubblicamente (codice e dati vengono conservati e potrai ripubblicarlo in qualsiasi momento).

### Modifiche multi-turn

Se una parte specifica non ti soddisfa, fai clic sul pulsante di modifica nella finestra di anteprima per continuare a perfezionarla.
Puoi anche inviare istruzioni a Kimi in linguaggio naturale e proseguire la modifica con Agent.
Quando confermi il risultato, scarica il codice HTML/CSS/JS completo e distribuiscilo direttamente, oppure continua a rifinirlo in un editor.

<Frames
  src="./images/overview/web-case1.png"
  alt="caso web 1"
/>

## A chi è utile

- Sviluppatori: progettano prototipi di prodotto e demo frontend, riducendo drasticamente il tempo necessario per partire da zero.
- Imprenditori: creano rapidamente siti ufficiali, landing page e pagine vetrina di prodotto anche con risorse limitate.
- Product manager: trasformano rapidamente un PRD o un mockup di design in un prototipo interattivo dimostrabile, senza attendere la pianificazione dello sviluppo.
- Utenti non tecnici: non serve saper programmare. Descrivi la tua idea o carica un’immagine di riferimento e passa dal concept a una pagina web eseguibile.

## Prompt di esempio
**Puoi fare riferimento ai seguenti scenari e prompt per generare contenuti**

| Scenario         | Prompt di esempio                                                   |
|------------------|------------------------------------------------------------------|
| Creare una landing page da zero | Aiutami a creare una landing page marketing per un prodotto SaaS con uno stile ispirato alla tecnologia, includendo una sezione hero, presentazione delle funzionalità, prezzi e CTA |
| Ricreare un sito web da video | [Carica una registrazione dello schermo] Ricrea il sito web mostrato nel video e conserva le interazioni originali |
| Ricreare da screenshot | [Carica un mockup di design] Implementa questo design come codice di pagina web eseguibile |
| Portfolio personale | Aiutami a creare un sito portfolio personale per un fotografo, con uno stile minimalista in bianco e nero e supporto per un layout di immagini masonry |
| Pagina di visualizzazione dati | Crea una pagina web di visualizzazione che mostri i dati di finanziamento delle aziende AI nel 2025, con grafici e filtri |
| Sito web di brand | Aiutami a creare il sito ufficiale di un brand di caffè, usando una palette Morandi, con homepage, pagine prodotto e pagine dei punti vendita |
| Strumento/calcolatore | Crea una pagina web con calcolatore BMI dotata di interfaccia pulita, cambio unità e suggerimenti sul livello di salute |
