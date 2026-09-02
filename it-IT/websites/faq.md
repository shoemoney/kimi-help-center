---
title: "FAQ di Kimi Websites"
slug: "websites-faq"
order: 3
extract_headings: true
preview: false
preview_content: "Domande frequenti sull'uso di Kimi Websites."
---

<SeoMeta
  title="FAQ di Kimi Websites - Centro assistenza Kimi"
  description="Risoluzione dei problemi più comuni di Kimi Websites, inclusi problemi di anteprima, pagine vuote, perdita di dati ed errori di pubblicazione."
/>

# FAQ di Kimi Websites

> Per le istruzioni complete sui pulsanti del pannello di anteprima, le modalità di modifica, la pubblicazione e l'annullamento della pubblicazione, consulta [Kimi Websites](/websites/websites-overview). Questa pagina tratta solo la risoluzione dei problemi più comuni.

## L'anteprima non si carica o non vedo l'ultima versione?

> Ad esempio: "Il sito web non viene visualizzato", "L'anteprima mostra ancora la vecchia versione" oppure "Non vedo l'ultima versione salvata".

Nella maggior parte dei casi, il sito web è stato generato e salvato correttamente. Il problema per cui "non si vede" di solito riguarda il pannello di anteprima o la visualizzazione della scheda versione. La causa più comune è una directory di progetto errata. Negli altri casi, procedi in questo ordine:

<Callout type="warning">
**Verifica la directory del progetto**: Il progetto del sito web deve trovarsi in `/mnt/agents/output/app`. L'anteprima legge solo le versioni salvate da questa directory. Se Kimi ha collocato il progetto altrove, ad esempio in una directory temporanea `/tmp`, la versione può essere salvata correttamente, ma l'anteprima non riuscirà a leggerla: chiedi a Kimi di spostare il progetto in questa directory e di salvarlo di nuovo.
</Callout>

1. **Aggiorna la pagina o riapri la conversazione**: a volte le schede versione impiegano qualche secondo a comparire.
2. **Chiedi a Kimi di salvare una nuova versione nella conversazione.**
3. **Se la conversazione è molto lunga, prova ad avviarne una nuova** (vedi più sotto "La mia conversazione è molto lunga: devo avviarne una nuova?").
4. Se ancora non compare: di solito il codice e la versione sono stati salvati correttamente (puoi chiedere a Kimi il numero di versione). Spesso si tratta di una fluttuazione temporanea del servizio di anteprima: riprova più tardi. Se il problema persiste, fai clic su **Feedback utente** (icona della busta) nel pannello di anteprima per inviare un feedback con il numero di versione; il nostro team verificherà.

## Il sito web è vuoto, mostra una schermata bianca, si blocca o non risponde?

> Ad esempio: "La pagina è completamente vuota", "Il sito web è vuoto", "Il sito web si è bloccato" oppure "Non compare nulla / i clic non hanno effetto".

- Una schermata vuota o bloccata è in genere causata da un **errore di runtime front-end** (ad esempio dipendenze mancanti, accesso diretto a una sottopagina oppure mancato caricamento di una risorsa o immagine specifica). Descrivi il sintomo a Kimi nella conversazione (uno screenshot è utile): individuerà e correggerà il problema, quindi salverà una nuova versione.
- Se sospetti che la schermata vuota sia causata da **file mancanti**, ogni versione del sito web salva uno snapshot. Chiedi a Kimi di ripristinare una versione storica (vedi più sotto "File o directory del progetto mancanti").
- **Compatibilità del browser**: alcuni browser orientati alla privacy (Brave, alcuni componenti aggiuntivi di Firefox) possono bloccare il caricamento delle risorse front-end, causando anomalie di visualizzazione. Prova ad aggiungere il dominio Kimi alla whitelist, a disattivare temporaneamente protezioni o blocchi per la privacy, oppure a passare a Chrome / Edge / Safari.

## Cosa fare se il clic su "Pubblica" non riesce?

La gestione è la stessa descritta sopra: riprova più tardi. Se il problema persiste, invia una segnalazione tramite **Feedback utente** indicando il numero di versione. La versione è già stata salvata correttamente e non deve essere ricostruita da zero.

## Per quanto tempo resta valido il link del sito web? Scade?

Se fai clic su **Pubblica** per distribuire pubblicamente il sito web, il link generato resterà valido a tempo indeterminato, a meno che tu non faccia clic manualmente su **Annulla pubblicazione** per rendere il sito privato, oppure il contenuto venga segnalato come inappropriato.

## Mancano contenuti, dati o record?

> Ad esempio: "Il contenuto della mia homepage è scomparso", "Le conoscenze che ho caricato nel database non ci sono più", "Le informazioni che ho caricato mancano" oppure "L'IA dice che i dati sono persi definitivamente".

Nella maggior parte dei casi, i dati non sono stati realmente persi. Verifica in quest'ordine:

1. **Per prima cosa, conferma che il sito web sia davvero "full-stack"**: solo i siti full-stack creati con **funzionalità back-end (database)** archiviano i dati nel database cloud della piattaforma, mantenendoli tra visite e dispositivi diversi. In pratica, molti siti web che dichiarano di essere "full-stack" **finiscono per essere solo front-end**, e i dati non entrano mai davvero nel database: in questo caso, aggiornare la pagina o cambiare dispositivo farà naturalmente sparire i dati precedenti. Chiedi a Kimi di confermare se il progetto include un vero back-end e un database.
2. **Sito web solo front-end**: i dati vengono salvati solo nello storage locale del browser corrente (localStorage). Cambiare browser / dispositivo o cancellare i dati del browser li farà perdere. Se hai bisogno di conservare i dati a lungo termine e su più dispositivi, chiedi a Kimi di passare a una soluzione full-stack con database.
3. **Sito full-stack confermato**: i dati vengono salvati nel database cloud gestito dalla piattaforma. **La pubblicazione di una nuova versione non cancella i dati esistenti**; se i dati non sono ancora visibili nonostante il sito sia full-stack, di solito si tratta di un problema temporaneo: aggiorna o riprova più tardi.
4. **Se confermi che i dati sono stati effettivamente persi**: fai clic su **Feedback utente** (icona della busta) nel pannello di anteprima per inviare una segnalazione; il nostro team verificherà. A questo punto evita di continuare a ripetere operazioni, per non rischiare sovrascritture.

## Mancano file o directory del progetto, oppure compare "ripristino dell'ambiente" / "impossibile recuperare"?

> Ad esempio: "La directory del progetto del mio sito web è sparita e non può essere recuperata", "Mancano dei file" oppure "Messaggio di ripristino dell'ambiente".

- Ogni versione del sito web **salva uno snapshot**, quindi il codice sorgente di solito può essere recuperato dalle versioni storiche. Chiedi a Kimi di elencare le versioni storiche e di eseguire il rollback / ripristino a una versione specifica.
- Se accade in una **conversazione molto lunga** (soprattutto se hai cambiato modello a metà conversazione), ti consigliamo di avviare una nuova conversazione (vedi il punto successivo).
- Se il recupero non è ancora possibile, fai clic su **Feedback utente** per inviare una segnalazione; il nostro team verificherà.

## La mia conversazione è molto lunga: devo avviarne una nuova?

Se una conversazione va avanti da molto tempo, comprende molte versioni oppure hai cambiato modello a metà conversazione (ad esempio K2.6 → K3), le funzionalità correnti potrebbero non essere aggiornate all'ultima versione, con possibili perdite di contesto o anomalie nei file. **Ti consigliamo di avviare una nuova conversazione** per usare le funzionalità più recenti di creazione e consegna. I siti web pubblicati e le versioni storiche non vengono interessati e restano normalmente accessibili.

## Posso distribuire autonomamente il sito dopo aver esportato il codice?

Puoi scaricare il codice completo del progetto e distribuirlo sul tuo server, ma i due elementi seguenti sono forniti dalla piattaforma Kimi e **non migrano insieme al codice**:

- **Accesso con account Kimi**: è una funzionalità di login fornita dalla piattaforma e non può essere usata direttamente fuori dalla piattaforma Kimi. Se per la distribuzione autonoma hai bisogno del login, chiedi a Kimi di implementare un sistema di accesso con nome utente/password basato sul tuo database.
- **Database gestito dalla piattaforma**: i dati dei siti web full-stack vengono salvati nel database cloud assegnato dalla piattaforma a quel sito. Il codice esportato non include questi dati, né si collegherà automaticamente al tuo database. La distribuzione autonoma richiede di configurare un database proprio e migrare i dati.

Se vuoi solo rendere la pagina web accessibile pubblicamente, usa semplicemente la funzione **Condividi → Pubblica** della piattaforma. Non serve configurare un server proprio: l'accesso con account Kimi e i dati cloud continueranno a funzionare normalmente.

## Il sito web generato non corrisponde alle mie richieste?

- Nella conversazione, indica con precisione cosa non corrisponde: ad esempio colore, layout, testo, moduli funzionali, tabelle dati e così via.
- Puoi caricare immagini di riferimento, pagine web di esempio o descrizioni testuali più dettagliate, così l'agente potrà modificare il sito in base al riferimento.
- Se dopo più modifiche non sei ancora soddisfatto, prova ad avviare una nuova conversazione con una descrizione dei requisiti più strutturata.

## Posso modificare contenuti, link o stili del sito web dopo la generazione?

Sì. Nella conversazione originale, continua a dire all'agente che cosa vuoi modificare, ad esempio:

- "Cambia il titolo della homepage in XXX"
- "Cambia il link del pulsante 'Contattaci' in https://xxx"
- "Passa complessivamente a un tema scuro"

Dopo la modifica, l'agente rigenererà il sito e distribuirà un nuovo link.

## Come aggiungo al sito web un back-end, un database o una funzionalità di login?

- Sottolinea nelle istruzioni di creazione del sito che vuoi una pagina web full-stack con database e funzionalità di login.
- In alternativa, puoi far generare prima all'agente la pagina front-end, poi esportare il codice sorgente e consegnarlo a uno sviluppatore per un ulteriore sviluppo.

## Posso scaricare il codice sorgente del sito web o esportarlo su GitHub?

La versione attuale supporta il download locale di tutti i file. Nella conversazione, apri "Tutti i file" e fai clic sul pulsante di download.

## Quanto credit consuma generare/modificare un sito web?

La generazione di un sito web è un'attività complessa che di solito consuma una quantità significativa di token/credit, a seconda di:

- Numero di pagine e complessità
- Presenza di immagini, tabelle e logica di interazione
- Numero di modifiche iterative

Ti consigliamo di descrivere i requisiti nel modo più chiaro possibile, così da ridurre tentativi ed errori. Se non sei soddisfatto del risultato, puoi spiegare la situazione nel feedback.

## La generazione del sito web è molto lenta, resta in coda o il terminale non riesce?

- Nelle ore di punta (giorni feriali, di giorno e di sera) potrebbero verificarsi code. Ti consigliamo di usare il servizio nelle fasce meno trafficate.
- Se l'attività resta bloccata per più di 10 minuti, prova prima ad aggiornare la pagina web.
- Per siti web complessi, ti consigliamo di suddividerli in attività più piccole: inizia dalla homepage, poi aggiungi gradualmente sottopagine e funzionalità.

## Per cosa è adatto Kimi Websites? Per cosa non lo è?

**Adatto a:**

- Homepage personali/portfolio, landing page per eventi, pagine vetrina di prodotti, pagine con strumenti semplici, piccoli prototipi di giochi
- Validare rapidamente idee di design e generare demo interattive
- Siti web che richiedono un semplice database back-end e un sistema utenti

**Non adatto a:**

- Siti web complessi con sistemi di pagamento
- Ambienti di produzione formali ad alta concurrency e alta disponibilità
- Siti aziendali che richiedono hosting stabile a lungo termine con dominio personalizzato

---

Se i metodi indicati sopra non risolvono il problema, invia una segnalazione tramite il pulsante **Feedback utente** nell'angolo in basso a destra del web/app Kimi, oppure [contatta l'assistenza clienti](/others/contact-support). Ti consigliamo di allegare:

- Il link del sito web in cui si è verificato il problema
- Il browser e il sistema operativo che stai usando
- Screenshot o testo del messaggio di errore
- L'orario approssimativo della conversazione originale

Continueremo a ottimizzare le funzionalità di generazione dei siti web sulla base del tuo feedback.
