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
  description="Scopri le funzionalità full-stack di Kimi Websites per creare siti web. Genera siti completi (frontend + backend + database) in linguaggio naturale, con distribuzione in un clic, modifiche multi-turn ed esportazione del codice."
/>

# Panoramica delle funzionalità di Kimi Websites

## Che cos'è Kimi Websites

Kimi Websites è il prodotto di Kimi Agent per creare siti web full-stack, basato su Kimi K3, un modello di IA agentica visiva multimodale. La sua capacità principale è la programmazione visuale (Vibe Coding): puoi generare un intero sito web full-stack da una descrizione in linguaggio naturale, da un mockup di design o da una registrazione dello schermo, quindi visualizzarlo online in anteprima e pubblicarlo con un clic.

I siti web generati da Kimi Websites possono includere:

- **Frontend**: struttura delle pagine HTML, layout e stili CSS, logica di interazione JavaScript (effetti di movimento, animazioni, ecc.)
- **Backend**: archiviazione persistente nel database, accesso utente e autenticazione
- **Ingegneria**: gestione automatica delle versioni, anteprima full-stack e distribuzione pubblica

### Funzionalità del prodotto

| Funzionalità        | Descrizione                                                  |
|----------------|--------------------------------------------------------------|
| Creazione di siti tramite conversazione | Descrivi ciò che ti serve in linguaggio naturale e l'IA genera automaticamente un sito web full-stack |
| Comprensione di immagini/video | Carica un mockup di design, uno screenshot o una registrazione dello schermo: l'IA li interpreta automaticamente e genera le pagine |
| Archiviazione persistente | Crea automaticamente un database backend, con lettura, scrittura e gestione persistenti dei dati |
| Gestione del database | Offre un pannello visivo del database per operazioni di base sui dati, come visualizzazione, modifica ed eliminazione |
| Accesso utente | Supporta l'accesso con account Kimi e può anche creare un sistema di accesso con nome utente/password tramite database |
| Gestione versioni | L'IA crea automaticamente commit di versione (git commit) e supporta il ripristino di qualsiasi versione precedente |
| Anteprima full-stack | Supporta l'anteprima completa di frontend e backend; in alcuni scenari è necessario avviare manualmente l'ambiente sandbox |
| Modifiche multi-turn | Supporta modifiche iterative tramite conversazioni multi-turn e consente di confrontare versioni diverse |
| Modifica visuale | Annota gli elementi nella pagina di anteprima cerchiandoli o contrassegnandoli, poi invia tutti i suggerimenti a Kimi in una sola volta |
| Pubblicazione e distribuzione | Dopo il clic manuale su "Pubblica", il sito viene distribuito sulla rete pubblica; prima della pubblicazione è disponibile solo l'anteprima. La distribuzione full-stack è supportata |
| URL personalizzato | Personalizza il sottodominio del sito, ad esempio `abc` in `abc.ok.kimi.link` |
| Condivisione e controllo accessi | Ottieni un link pubblico di condivisione con un clic oppure imposta il sito come privato/visibile solo a te |
| Selezione template | Offre diversi template preimpostati per iniziare rapidamente a creare |
| Esportazione del codice | Supporta il download del pacchetto completo del progetto (inclusi frontend e backend) per una distribuzione gestita in autonomia |

## Come usare Kimi Websites

### Metodo 1: accesso dal Web
Visita la pagina dedicata a Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Homepage di Kimi Websites"
/>

1. Apri un browser: usa un browser diffuso come Chrome, Safari, Edge o Firefox.
2. Apri l'indirizzo ufficiale di accesso: pagina dedicata a Kimi Websites: [https://www.kimi.com/zh/websites](https://www.kimi.com/zh/websites) (supporta interfacce sia in cinese sia in inglese)
3. Accedi al tuo account: effettua l'accesso con un account Kimi (è supportata la registrazione tramite numero di cellulare o email)
4. Inserisci l'attività di creazione del sito. Kimi Websites offre tre modi principali per creare un sito web:
   1. **Input testuale**: inserisci l'attività nella finestra di dialogo e descrivi in linguaggio naturale il sito che desideri;
   2. **remix da immagine/sito web**: carica un mockup di design o lo screenshot di un sito che ti piace per attivare la funzionalità corrispondente;
   3. **Creazione da template**: crea rapidamente un sito web standard scegliendo un template preimpostato e modificandone i contenuti;
5. Avvia la creazione: entra nell'interfaccia della funzionalità Websites, scegli un template oppure crea direttamente tramite conversazione.

<Frames
  src="./images/overview/screenshot-27.png"
  alt="screenshot 27"
/>

### Metodo 2: accesso dall'app mobile
Seleziona lo strumento dedicato ai siti web nell'app mobile

<Frames
  src="./images/overview/screenshot-27.png"
  alt="Interfaccia del generatore di siti web"
/>

Le app ufficiali sono disponibili per iOS, Android e HarmonyOS (nome dell'app: "Kimi"). Sopra la casella di input, tocca la barra degli strumenti (Taskbar) → passa alla modalità Websites. Include strumenti di generazione multimodale e capacità Agent, consentendoti di fornire input visivi e generare codice frontend.

### Metodo 3: modalità Agent generale
Nella modalità Agent generale, inserisci i requisiti per la creazione del sito

Sul sito ufficiale o da dispositivo mobile, seleziona il modello K3 e inserisci istruzioni relative alla creazione di un sito web. Kimi richiamerà le capacità di programmazione visuale e gli strumenti di esecuzione del codice.

## Passaggi

### Creare un sito web tramite conversazione

Descrivi ciò che ti serve in linguaggio naturale nella casella di input: Kimi lo comprenderà e lo eseguirà. Sono supportati tre metodi di creazione:

| Metodo             | Descrizione                              |
|--------------------|------------------------------------------|
| Descrizione testuale   | Inserisci direttamente i requisiti del sito e l'IA genera automaticamente il sito |
| Interpretazione di mockup di design | Carica un mockup di design: l'IA lo riconosce e lo ricrea come pagina web |
| Creazione rapida di siti standard | Scegli un template preimpostato e modifica i contenuti |

### Esempio pratico

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Inserisci un'attività di creazione sito\nCrea un sito web per cuccioli di West Highland White Terrier, con una palette principale in bianco e nero. Includi tre sezioni:\n1. Un calendario di ritratti in qualità studio con immagini generate dall'IA;\n2. Un'enciclopedia di cura \"Curly-Coat Lab\";\n3. Un negozio di merchandising che venda felpe con avatar di Westie e poster in lamina argentata in edizione limitata.\nLa pagina di checkout deve includere un modulo benefico: dona 1 $ per ogni articolo venduto al salvataggio dei cuccioli randagi.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="Esempio di sito web"
/>

### Panoramica del flusso di creazione di un sito web

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Descrizione dei requisiti → Kimi ragiona sull'attività → richiama la SKILL di creazione webapp →\ncomprende lo stack tecnologico e il processo di build → crea una lista di attività e inizializza il progetto → scrive una lista di cose da fare → esegue il terminale → genera immagini → visualizza in anteprima e regola →\naggiorna l'avanzamento dell'attività e sviluppa il codice principale del sito → aggiorna CSS e file di configurazione, quindi crea componenti → effettua modifiche multi-turn → distribuisce online → condivide e distribuisce",
    },
  ]}
/>

Kimi Websites attiva la SKILL di creazione webapp, un agente di generazione codice multi-turn dedicato alla costruzione di siti web. Esegue autonomamente il seguente flusso di lavoro:

1. Analisi dei requisiti: analizza automaticamente i moduli funzionali del sito, lo stile visivo e la logica di interazione
2. Pianificazione delle attività: suddivide il lavoro in sottoattività come design, sviluppo e preparazione degli asset
3. Soluzione tecnica: seleziona automaticamente un'architettura tecnica adatta (ad esempio React + Tailwind CSS)
4. Generazione asset: genera asset visivi come immagini e icone quando necessario
5. Costruzione del codice: scrive la struttura delle pagine, gli stili e il codice di interazione
6. Ottimizzazione multi-turn: apporta regolazioni in autonomia in base all'anteprima finché il sito web non è completo

<Frames
  src="./images/overview/screenshot-26.png"
  alt="screenshot 26"
/>

### Anteprima e regolazioni

- **Anteprima in tempo reale**: genera un URL demo HTML che puoi aprire subito nel browser
- **Modifiche tramite conversazione**: continua la conversazione per richiedere modifiche, ad esempio "cambia la barra di navigazione con uno stile scuro"

#### Esempio reale

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I colori non mi sembrano molto belli. Voglio eliminare il requisito del bianco e nero e renderlo un sito dall'aspetto normale.\nKimi Websites riorganizzerà la lista delle cose da fare e continuerà a costruire il sito web.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### Interfaccia del pannello di anteprima

Dopo la generazione del sito, il pannello di anteprima si apre a destra e nella conversazione compaiono anche le schede delle versioni. Le principali voci operative sono le seguenti:

**Barra degli strumenti superiore del pannello di anteprima** (da sinistra a destra):

| Pulsante | Funzione |
|--------|----------|
| Anteprima / Codice | Passa tra anteprima visuale e viste del codice sorgente/albero dei file |
| Modifica | Entra in modalità modifica; fai clic su un'area che vuoi cambiare, aggiungi note di annotazione e inviale a Kimi |
| Condividi | Pubblica il sito, copia il link, personalizza l'URL o annulla la pubblicazione |
| Anteprima a schermo intero | Visualizza il sito a schermo intero |
| Cambia modalità di anteprima | Alterna tra vista desktop e mobile |
| Aggiorna | Ricarica l'anteprima |
| Feedback utente | Segnala problemi riscontrati durante l'uso; puoi inserire testo e caricare screenshot |
| Chiudi | Comprimi il pannello di anteprima |

**Schede versione nella conversazione**: mostrano il nome del sito, il numero di versione (ad esempio V2) e l'URL. Fai clic su **Anteprima** per aprire la versione corrispondente; fai clic su **Ripristina** per tornare a quella versione. La scheda **Tutti i file** consente di visualizzare o scaricare i file completi del progetto. Per l'uso dettagliato di ciascun pulsante, consulta le sezioni corrispondenti qui sotto.

### Modifica visuale

<Frames
  src="./images/overview/web-case1.png"
  alt="Interfaccia di modifica visuale"
/>

- **Ottimizzazione multi-turn**: rifinisci i dettagli del sito web tramite conversazione continua
- **Modalità di modifica**:
  - **Modalità annotazione**: fai clic sulla parte della pagina web che vuoi modificare e aggiungi commenti in linguaggio naturale
  - **Modalità selezione**: seleziona qualsiasi elemento della pagina web e aggiungi commenti
  - Usa rettangoli, frecce, pennelli, cambio colore e altri strumenti di selezione e modifica per aggiungere suggerimenti di cambiamento
- Dopo aver aggiunto annotazioni in più punti, inseriscile nella conversazione e invia tutti i suggerimenti a Kimi in una sola volta

### Distribuzione del codice e pubblicazione
| Metodo di distribuzione | Descrizione                                           |
|-------------------|------------------------------------------------------|
| Pubblicazione in un clic | Fai clic sul pulsante "Pubblica" per distribuire il sito sulla rete pubblica e generare un link online accessibile (solo anteprima prima della pubblicazione) |
| Download e distribuzione | Scarica il pacchetto di codice e distribuiscilo sul tuo server |
| URL personalizzato | Cambia l'URL casuale predefinito con un nome facile da ricordare, ad esempio personalizzando `abc` in `abc.ok.kimi.link` |

> **Informazioni su "URL personalizzato"**: 3–30 caratteri, solo lettere minuscole, numeri e trattini. Non può iniziare o finire con un trattino e non può essere composto solo da numeri. Alcune parole riservate (come `kimi`, `www`, `login`, ecc.) non sono disponibili. Se il nome è occupato o non disponibile, scegline un altro.

> **Limiti di "Download e distribuzione"**: **accesso con account Kimi** e **database cloud gestito dalla piattaforma** sono forniti dalla piattaforma Kimi e non migrano con il codice esportato. Se distribuisci il codice sul tuo server, il metodo di accesso deve essere cambiato in uno schema con nome utente/password basato sul tuo database, e anche i dati devono essere migrati nel tuo database. Per il solo accesso pubblico, consigliamo di usare direttamente **Pubblicazione in un clic**: l'accesso con account Kimi e i dati cloud continueranno a funzionare normalmente. Per i dettagli, consulta [Perché il sito web che ho creato non funziona?](/websites/websites-why-not-working).

#### Anteprima di una versione specifica
Al termine della generazione, accederai alla pagina di anteprima.
Nell'interfaccia di anteprima puoi fare clic sulle diverse versioni distribuite e scaricare i file delle varie versioni.

<Frames
  src="./images/overview/screenshot-26.png"
  alt="Anteprima versione"
/>

#### Pubblicare, condividere e annullare la pubblicazione
Prima della pubblicazione, il sito può essere visualizzato solo in anteprima nella conversazione. Per consentire ad altri di accedervi, fai clic su **Condividi** nell'angolo in alto a destra del pannello di anteprima per aprire il pannello di pubblicazione:

1. **URL personalizzato**: puoi modificare il nome nell'URL predefinito, ad esempio cambiandolo in `yourname.ok.kimi.link`;
2. Fai clic su **Copia link** per ottenere l'URL pubblico oppure su **Apri sito web** per visualizzarlo in una nuova scheda. Dopo la pubblicazione, nella parte superiore del pannello compare **Pubblicato** e chiunque abbia il link può accedervi;
3. Per mettere il sito offline, seleziona **Annulla pubblicazione** dal menu **…** nell'angolo in alto a destra del pannello. Il sito non sarà più accessibile pubblicamente (codice e dati vengono conservati e potrai ripubblicarlo in qualsiasi momento).

### Modifiche multi-turn

Se non sei soddisfatto di una parte specifica, fai clic sul pulsante di modifica nella finestra di anteprima per continuare a perfezionarla.
Puoi anche inviare istruzioni a Kimi in linguaggio naturale e continuare a modificare con Agent.
Una volta confermato il risultato, scarica il codice HTML/CSS/JS completo e distribuiscilo direttamente, oppure continua a rifinirlo in un editor.

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## A chi è rivolto

- Sviluppatori: progettare prototipi di prodotto e demo frontend, riducendo notevolmente il tempo necessario per partire da zero.
- Imprenditori: creare rapidamente siti ufficiali, landing page e pagine vetrina di prodotto quando le risorse sono limitate.
- Product manager: trasformare rapidamente un PRD o un mockup di design in un prototipo interattivo dimostrabile, senza attendere la pianificazione dello sviluppo.
- Utenti non tecnici: non sono richieste competenze di programmazione. Descrivi la tua idea o carica un'immagine di riferimento e passa dal concept a una pagina web eseguibile.

## Prompt di esempio
**Puoi fare riferimento ai seguenti scenari e prompt per generare contenuti**

| Scenario         | Prompt di esempio                                                   |
|------------------|------------------------------------------------------------------|
| Creare una landing page da zero | Aiutami a creare una landing page di marketing per un prodotto SaaS con uno stile ispirato alla tecnologia, includendo una sezione hero, presentazione delle funzionalità, prezzi e CTA |
| Ricreare un sito web da video | [Carica una registrazione dello schermo] Ricrea il sito web mostrato nel video e conserva le interazioni originali |
| Ricreare da screenshot | [Carica un mockup di design] Implementa questo design come codice di pagina web eseguibile |
| Portfolio personale | Aiutami a creare un sito portfolio personale per un fotografo, con uno stile minimalista in bianco e nero e supporto per un layout di immagini masonry |
| Pagina di visualizzazione dati | Crea una pagina web di visualizzazione che mostri i dati di finanziamento delle aziende di IA nel 2025, includendo grafici e filtri |
| Sito web di brand | Aiutami a creare un sito ufficiale per un brand di caffè, usando una palette di colori Morandi, con homepage, pagine prodotto e pagine dei punti vendita |
| Utility/calcolatore | Crea una pagina web per il calcolo del BMI con un'interfaccia pulita, cambio unità e suggerimenti sul livello di salute |
