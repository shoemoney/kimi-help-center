---
title: "Panoramica di Kimi Claw Android"
slug: "kimi-claw-android-guide"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Panoramica di Kimi Claw Android - Centro assistenza Kimi"
  description="Scopri come distribuire OpenClaw sul tuo telefono Android e trasformarlo in un assistente remoto AI attivo 24/7."
  ogType="article"
/>

# Panoramica di Kimi Claw Android

Questo articolo spiega come distribuire OpenClaw su telefoni Android e trasformare un telefono inutilizzato nel tuo assistente remoto AI attivo 24/7. Potrai controllare il telefono da remoto, usare app, collegarti alla smart home e creare un assistente personalizzato tramite app di messaggistica come Kimi, Feishu e WeChat.

Si consiglia di distribuire Kimi Claw Android su telefoni inutilizzati, così da evitare conflitti di autorizzazioni con l’uso quotidiano. Non aggiornare manualmente la versione di OpenClaw: gli aggiornamenti ufficialmente adattati saranno distribuiti tramite gli aggiornamenti di versione in-app.

## Introduzione a Kimi Claw Android

<Frames
  src="./images/kimi-claw-android-guide/img-06.png"
/>

Requisiti di sistema:

| Voce | Requisito |
| --- | --- |
| Sistema operativo | Android 8.0 e versioni successive |
| Spazio di archiviazione disponibile | Almeno 5GB |
| Rete | È necessaria una connessione di rete stabile |
| Account | Abbonamento Kimi Allegretto o superiore |

<Callout type="info">
Si consiglia di usare telefoni inutilizzati per evitare interferenze con l’uso quotidiano.
</Callout>

## Download e installazione
### Scaricare Kimi Claw Android

Puoi scaricarlo nei seguenti modi:

#### Metodo 1: scansiona il codice QR per scaricarlo dalla pagina web.
Accedi a [kimi.com](https://kimi.com), trova l’ingresso "Download Kimi Claw Android" e usa il tuo telefono Android per scansionare il codice QR sulla pagina e avviare il download.

<Frames
  src="./images/kimi-claw-android-guide/img-03.png"
/>

#### Metodo 2: scaricalo direttamente da Google Play
Cerca "Kimi Claw" nello store di app del telefono e completa il download.

#### Metodo 3: scarica la Kimi App sul telefono
Apri la Kimi App, tocca Kimi Claw Android; puoi anche collegare un’istanza OpenClaw esistente.

### Configurazione iniziale 

Quando apri Kimi Claw Android per la prima volta, vedrai una pagina di benvenuto. Dopo aver letto le seguenti informazioni importanti, tocca "Avvia configurazione" per accedere alla procedura di configurazione.

- Distribuzione rapida di OpenClaw - Distribuisci OpenClaw su telefoni locali per comunicare tramite Kimi, Feishu e altri servizi.
- Si consiglia di usare un telefono inutilizzato - Kimi Claw Android richiede una rete stabile per funzionare; è consigliabile usare un telefono inutilizzato.
- Usalo in modo sicuro - OpenClaw può comportare rischi per la privacy e la sicurezza: usalo con prudenza.

Dopo aver selezionato Accetta Informativa sulla privacy e Accordo con l’utente, procedi.

#### Passaggio 1: concedere le autorizzazioni
Kimi Claw Android richiede le seguenti autorizzazioni per funzionare stabilmente in background. Tocca "Autorizza" per ciascuna voce e completa l’autorizzazione.

| Autorizzazioni | Spiegazione |
| --- | --- |
| Notifiche di sistema | Mostra lo stato del gateway e i promemoria |
| Autorizzazioni per lo spazio di archiviazione | Sono richiesti almeno 5GB di spazio disponibile |
| Autorizzazione all’esecuzione in background | Mantiene il gateway in esecuzione quando l’app passa in background |

Poiché i percorsi delle impostazioni variano a seconda della marca del telefono, di seguito trovi i passaggi generali:

1. Tocca "Apri impostazioni" per passare alla pagina delle impostazioni del telefono
2. Entra nell’elenco di gestione delle applicazioni e seleziona Kimi Claw Android
3. Attiva l’interruttore di avvio automatico
4. In Gestione consumo energetico, seleziona "Consenti completamente il comportamento in background"
5. Torna a Kimi Claw Android e tocca "Ho completato" per continuare l’installazione

#### Passaggio 2: configurare l’account Kimi

1. Tocca "Vai alla configurazione" per passare alla Kimi App e autorizzare
2. Dopo l’autorizzazione, Kimi creerà automaticamente una API key Kimi Coding Plan per Kimi Claw Android
3. Se sei un utente gratuito, devi prima attivare i privilegi di abbonamento. Tocca "Vai all’upgrade" per attivare l’abbonamento.

#### Passaggio 3: installare OpenClaw

<Frames
  src="./images/kimi-claw-android-guide/img-08.png"
/>

Se l’installazione non riesce, puoi toccare "Reinstalla" per riprovare. Se fallisce più volte, tocca "Hai problemi? Vai al feedback" per inviare la segnalazione.

## Guida utente della Dashboard

### Interfaccia principale

<Frames
  src="./images/kimi-claw-android-guide/img-14.png"
/>

Completata la configurazione, accedi all’interfaccia principale della Dashboard, dove puoi vedere le seguenti informazioni:

- Stato del gateway OpenClaw — Avvio / Connesso / Interrotto e tempo di esecuzione
- Canali chat — Elenco dei canali di comunicazione attualmente collegati
- Log OpenClaw — Log originale del funzionamento di OpenClaw
- Usa conversazione Kimi — Apri la Kimi App, accedi all’interfaccia di conversazione corrispondente a Kimi Claw Android e passa automaticamente al Claw corrispondente.

Se nella parte superiore della Dashboard compare un promemoria sulle autorizzazioni, significa che alcune autorizzazioni non sono state concesse o sono scadute. Segui le indicazioni e completa le autorizzazioni una per una per garantire il corretto funzionamento di Kimi Claw Android.

### Gestione dei canali chat

<Frames
  src="./images/kimi-claw-android-guide/img-33.png"
/>
Nella Dashboard puoi gestire tutti i canali di comunicazione:

- Visualizza i canali collegati e il relativo stato (ad esempio, Kimi - Connesso, Feishu - Connesso)
- Tocca "+ Connect" per aggiungere un nuovo canale chat
- Tocca un canale esistente per visualizzarne i dettagli o eliminarlo

<Callout type="info">
Mantieni almeno un canale chat per garantire la normale comunicazione con Kimi Claw Android.
</Callout>

### Log OpenClaw

- Cerca — Cerca contenuti del log tramite parola chiave
- Filtra livello — Filtra per livello di log (Info / Warning / Error, ecc.)
- Scorrimento automatico in fondo — Scorre automaticamente fino al log più recente
- Aggiorna — Aggiorna manualmente il contenuto del log

<Frames
  src="./images/kimi-claw-android-guide/img-16.png"
/>

### Impostazioni

<Frames
  src="./images/kimi-claw-android-guide/img-21.png"
/>
Tocca Impostazioni per accedere alla pagina delle impostazioni:

**Livello funzionale:**

- ClawHub Skills: si associa automaticamente al sito ufficiale ClawHub e gestisce le skill disponibili per Kimi Claw Android
- OpenClaw Workspace: accedi alla directory locale dei file di configurazione di OpenClaw e modifica le preferenze personali

**Livello di sistema:**

<Frames
  src="./images/kimi-claw-android-guide/backup.png"
/>
- Backup e ripristino: esegue il backup della configurazione e della cronologia OpenClaw correnti e consente di ripristinare configurazioni e registri precedenti
- Servizio di accessibilità: monitora le autorizzazioni del servizio di accessibilità del telefono
- Autorizzazione all’esecuzione in background: monitora l’autorizzazione all’esecuzione in background del telefono
- Aggiornamento versione: monitora la versione; tocca per aggiornare automaticamente

**Informazioni:**

- Aiuto: istruzioni sui consigli di utilizzo di base
- Feedback: invia feedback
- Accordo con l’utente: leggi l’Accordo con l’utente
- Informativa sulla privacy: leggi la Informativa sulla privacy

#### ClawHub Skills

Si associa automaticamente al sito ufficiale ClawHub e gestisce le skill disponibili per Kimi Claw Android. Puoi scaricare e installare Skills per estendere le capacità di Claw.

#### OpenClaw Workspace

<Frames
  src="./images/kimi-claw-android-guide/img-19.png"
/>

#### Backup e ripristino

Kimi Claw Android offre funzioni di backup sia automatiche sia manuali, per evitare la perdita della cronologia e della configurazione OpenClaw.

Backup automatico

Kimi Claw Android esegue automaticamente, a intervalli regolari, il backup della cronologia e della configurazione correnti di OpenClaw, comprimendole in un file compresso per l’archiviazione. Non serve alcuna operazione manuale: il sistema completa tutto automaticamente in background.

Backup manuale:

Se vuoi registrare lo stato in un momento specifico, puoi anche toccare Backup per salvare manualmente uno snapshot della cronologia e della configurazione correnti. Tocca  Backup  per esportare tutti i backup della configurazione attuale.

**Ripristina configurazione:**

Kimi Claw Android supporta il ripristino a stati di configurazione precedenti. Supporta sia gli stati di backup automatico sia quelli di backup manuale di Kimi Claw Android.

Nei seguenti scenari puoi usare la funzione di ripristino per tornare a uno stato precedente:

- Quando la disinstallazione o la reinstallazione dell’app fa scomparire i registri storici, puoi ripristinare i record precedenti
- Quando è necessario cambiare la configurazione di Claw, puoi ripristinare lo stato di configurazione salvato in precedenza
- Quando sostituisci il telefono e lo distribuisci di nuovo, basta importare il file di backup per ripristinare

Tocca il file di backup corrispondente nell’elenco dei backup: cronologia e configurazioni verranno ripristinate automaticamente a quel momento, evitando che i record precedenti vengano cancellati.

## Configurare i canali chat

### Kimi
Kimi è il canale di comunicazione predefinito e si collega automaticamente dopo aver completato la configurazione dell’account Kimi nella procedura di configurazione iniziale, senza bisogno di ulteriori operazioni.

Al termine dell’installazione e della configurazione, Kimi Claw Android comparirà automaticamente nella pagina di cambio bot del client Web (kimi.com). Dopo aver fatto clic per passare, avatar e thread di chat verranno sincronizzati.

In Gestione bot, Kimi Claw Android supporta solo la modifica del nome bot e l’eliminazione del bot.

### Feishu
<Frames
  src="./images/kimi-claw-android-guide/img-25.png"
/>

Supporta tre metodi di connessione:

Metodo 1: apri Feishu per creare

Tocca "Apri Feishu per creare", completa la creazione dell’app in Feishu seguendo le indicazioni e lo stato si aggiornerà automaticamente a "Connesso".

Metodo 2: scansiona il codice QR per creare

1. Tocca "Scansiona codice QR per creare"
2. Usa Feishu per scansionare il codice QR
3. Completa la creazione dell’applicazione Feishu nel browser

**Metodo 3: inserisci manualmente le informazioni del bot**

1. Tocca "Inserisci manualmente le informazioni del bot"
2. Inserisci App ID e App Secret
3. Tocca "Aggiungi" per completare la connessione

### WeChat
Il canale WeChat richiede prima l’installazione di WeChat Claw lato WeChat; Kimi Claw Android comunicherà tramite il terminale WeChat Claw.

Devi prima completare l’installazione di WeChat Claw seguendo la guida ufficiale WeChat. L’installazione è completata quando WeChat ClawBot compare nella pagina chat.

Accedi a Kimi Claw Android, collegati al canale WeChat e completa la procedura scansionando il codice QR con WeChat.

### Telegram

<Frames
  src="./images/kimi-claw-android-guide/img-34.png"
/>

Kimi Claw Android supporta l’integrazione con Telegram; gli utenti devono prima ottenere il proprio bot token e user ID.

## Automazione

Una delle funzionalità principali di Kimi Claw Android è controllare le app sul telefono per completare diverse attività. Dopo aver inviato istruzioni a Claw tramite canali chat come Kimi, Feishu e WeChat, Claw aprirà automaticamente l’app corrispondente sul telefono, eseguirà una serie di operazioni come farebbe una persona reale e infine porterà a termine i compiti specificati.

### Principio di funzionamento

Quando invii istruzioni di attività a Claw tramite il canale chat, Claw:

1. Comprende le richieste dell’attività
2. Apre automaticamente l’app corrispondente sul telefono
3. Completa le attività passo dopo passo simulando le operazioni dell’utente (tocchi, scorrimenti, inserimenti, ecc.)
4. Acquisisce screenshot durante l’esecuzione per facilitare la verifica del processo
5. Ti comunica i risultati dopo aver completato l’attività

### Scenari d’uso tipici

#### Acquisti e consumi

Cercare prodotti, aggiungerli al carrello, visualizzare ordini, riscattare sconti e altro su piattaforme come Taobao, Tmall e Meituan.

#### Viaggi e navigazione

Consultare tariffe taxi, verificare orari della metro, cercare hotel nelle vicinanze, prenotare viaggi e altro su Amap.

#### Social e contenuti

Controllare messaggi, sfogliare contenuti, cercare prodotti, eseguire operazioni interattive e altro su piattaforme come WeChat, Rednote e Douyin.

## Suggerimenti d’uso

### Controllare il telefono tramite software di chat

Completata la configurazione, puoi inviare comandi a Claw in Kimi, Feishu e WeChat per controllare da remoto le applicazioni sui telefoni Android. Ad esempio:

- Aiutami ad aprire WeChat e controllare gli ultimi messaggi
- Apri la mappa e cerca ristoranti nelle vicinanze
- "Aiutami a controllare il calendario per vedere cosa c’è in programma oggi"

### Usare ClawHub Skills

<Frames
  src="./images/kimi-claw-android-guide/img-18.png"
/>
Kimi Claw Android include ClawHub, una libreria di skill integrata. Puoi gestire e installare skill nelle impostazioni per ampliare ulteriormente le capacità di Claw.

Scenari adatti all’uso di Skills:
- Organizzazione delle informazioni: aggregazione di notizie, confronto con prodotti concorrenti
- Analisi dei dati: revisione del mercato, interpretazione dei dati
- Automazione dei flussi di lavoro: un processo completo, dalla scomposizione dei requisiti all’output

### Più canali online contemporaneamente
Puoi collegare contemporaneamente più canali, come Kimi, Feishu e WeChat, e chattare con Claw da diverse app di messaggistica. Per aggiungerli, basta toccare "+ Connect" nella sezione Gestione canali della Dashboard.

## Sicurezza e applicazioni limitate

### Istruzioni di sicurezza

Prima di usare Kimi Claw Android, tieni presenti le seguenti precauzioni di sicurezza:

1. Usa un telefono inutilizzato — Kimi Claw Android occuperà autorizzazioni di sistema del telefono, il che potrebbe influire sull’uso quotidiano. Si consiglia di usare un telefono inutilizzato

2.  Isolamento dei dati sensibili — Kimi Claw Android leggerà dati di file locali: elimina o isola in anticipo le informazioni sensibili

3. Protezione delle applicazioni finanziarie — Il sistema ha bloccato automaticamente l’accesso ad applicazioni bancarie, di pagamento, titoli e assicurazioni per proteggere i fondi

### Elenco delle applicazioni limitate

Per ragioni di sicurezza finanziaria e privacy, le seguenti categorie di app vengono automaticamente bloccate dall’accesso da parte di Kimi Claw Android e non possono essere controllate da remoto:

1. Social

| Package | Descrizione del rischio |
| --- | --- |
| wechat | Sono coinvolte importanti funzioni social private e di pagamento |

2. Banche

| Package | Nome app | Descrizione del rischio |
| --- | --- | --- |
| com.android.bankabc | abc, Agricultural Bank of China | Agricultural Bank of China, che può eseguire operazioni come bonifici e gestione patrimoniale |
| com.bankcomm.main | bocom, Bank of Communications | Bank of Communications, che supporta operazioni come bonifici e gestione patrimoniale |
| com.bjbk.im | Bank of Beijing | Bank of Beijing, che può eseguire operazioni come bonifici e gestione patrimoniale |
| com.cebbank.im | Everbright Bank | China Everbright Bank, che può eseguire operazioni come bonifici e gestione patrimoniale |
| com.cgb.im | Guangfa Bank | Guangfa Bank, che può eseguire operazioni come bonifici e gestione patrimoniale |
| com.chinamworld.bocmbci | boc, Bank of China | Bank of China, una delle Big Four Banks |
| com.chinamworld.main | CCB, China Construction Bank | China Construction Bank, una delle Big Four Banks |
| com.cib.im | Industrial Bank | Industrial Bank, che può eseguire operazioni come bonifici e gestione patrimoniale |
| com.citic.im | China CITIC Bank | China CITIC Bank, che supporta operazioni come bonifici e gestione patrimoniale |
| com.cmbc.im | Minsheng Bank | China Minsheng Bank, che può eseguire operazioni come bonifici e gestione patrimoniale |
| com.cmbchina.ccd.pluto.customerView | cmb, China Merchants Bank | China Merchants Bank, che supporta operazioni come bonifici e gestione patrimoniale |
| com.hxb.im | Huaxia Bank | Huaxia Bank, che può eseguire operazioni come bonifici e gestione patrimoniale |
| com.hzbk.im | Hangzhou Bank | Hangzhou Bank, che supporta operazioni come bonifici e gestione patrimoniale |
| com.icbc | ICBC, Industrial and Commercial Bank of China | Industrial and Commercial Bank of China, una delle Big Four Banks |
| com.jsbk.im | Jiangsu Bank | Jiangsu Bank, che supporta operazioni come bonifici e gestione patrimoniale |
| com.nbbk.im | Ningbo Bank | Ningbo Bank, che supporta operazioni come bonifici e gestione patrimoniale |
| com.pingan.paces.cloud | Ping An Pocket Bank | Ping An Bank Mobile Client |
| com.psbc.im | Postal Savings Bank | Postal Savings Bank of China |
| com.shbk.im | Shanghai Bank | Shanghai Bank, che supporta operazioni come bonifici e gestione patrimoniale |
| com.spdb.im | Shanghai Pufa Bank | Shanghai Pufa Development Bank |

3. Pagamenti

| Package | Nome app | Descrizione del rischio |
| --- | --- | --- |
| com.eg.android.AlipayGphone | Alipay | Alipay, la più grande piattaforma di pagamento di terze parti in Cina |
| com.paypal.android.p2pmobile | paypal | PayPal, la più grande piattaforma di pagamento online al mondo |
| com.unionpay | ysf, Cloud Flash Payment | China UnionPay Cloud Flash Payment, uno strumento di pagamento con carta bancaria |
| com.squareup.cash | cashapp | Cash App, una piattaforma statunitense di pagamenti mobile |
| com.venmo | venmo | Venmo, una piattaforma statunitense di pagamenti P2P |
| com.google.android.apps.walletnfcrel | googlewallet, wallet | Google Wallet, il wallet di pagamento di Google |

4. Titoli

| Package | Nome app | Descrizione del rischio |
| --- | --- | --- |
| com.citics.pbm | CITIC, Xin E Tou | CITIC Securities Trading Client |
| com.cmschina.stock | China Merchants Securities | China Merchants Securities Trading Client |
| com.csc108.newpda | CITIC Construction Investment | CITIC Construction Investment Securities Trading Client |
| com.dfzq.stock | Orient Securities | Orient Securities Trading Client |
| com.eastmoney.android.berlin | eastmoney, Orient Fortune | East Money, piattaforma di trading di azioni/fondi |
| com.ebscn.stock | ebscn, Golden Sunshine | Everbright Securities Trading Client |
| com.foundersc.stock | founder, Xiaofang | Founder Securities Trading Client |
| com.gf.gfstocks | GF Easy Gold Rush | GF Securities Trading Client |
| com.guosen.stock | guosen, Golden Sun | Guoxin Securities Trading Client |
| com.guotai.junan.guiyang | Guotai Junan | Guotai Junan Securities Trading Client |
| com.hexin.plat.android | ths, Flush | Flush, piattaforma di trading e quotazioni per azioni/fondi |
| com.htsc.mdc | Huatai, Zhangle Fortune Link | Huatai Securities Trading Client |
| com.htsec.android | Haitong Securities | Haitong Securities Trading Client |
| com.pingan.stock | Ping An Securities | Ping An Securities Trading Client |
| com.tfzq.stock | Tianfeng Securities | Tianfeng Securities Trading Client |
| com.xueqiu.android | xueqiu, Snowball | Xueqiu, community azionaria e piattaforma di trading |
| com.xyzq.stock | Industrial Securities | Industrial Securities Trading Client |

5. Assicurazioni / Finanza

| Package | Nome app | Descrizione del rischio |
| --- | --- | --- |
| com.pingan.lifeinsurance | Ping An Financial Services Client | Ping An Insurance of China, che consente operazioni come acquisto di assicurazioni e liquidazione dei sinistri |
| com.jd.jrapp | JD Finance | JD Finance offre servizi finanziari come gestione patrimoniale, prestiti e pagamenti |

## Funzionalità supportate e non supportate

### Funzionalità supportate

| Funzione | Descrizione |
| --- | --- |
| Controllo remoto delle applicazioni mobile | Usa da remoto le app su un telefono tramite comandi da software di chat |
| Comunicazione multicanale | Supporta la comunicazione con Claw tramite Kimi, Feishu e WeChat |
| Visualizzazione log in tempo reale | Visualizza i log operativi del gateway OpenClaw, con supporto per ricerca e filtro per livello |
| Backup e ripristino della configurazione | Esegue il backup della configurazione corrente, ripristinabile dopo reinstallazione o sostituzione del dispositivo |
| Monitoraggio dello stato del gateway | Visualizza in tempo reale lo stato della connessione e la durata di esecuzione del gateway OpenClaw |
| Gestione canali | Aggiungi, visualizza ed elimina canali di comunicazione |
| Dashboard OpenClaw | Gestisci OpenClaw tramite la Dashboard integrata |

### Funzionalità e limitazioni non supportate

| Area | Limitazione |
| --- | --- |
| Supporto piattaforma | Attualmente sono supportati solo dispositivi Android; iOS non è supportato |
| Abbonamento | Disponibile solo per membri Kimi Allegretto o superiori |
| App finanziarie | L’accesso ad applicazioni relative a banche, pagamenti, titoli e assicurazioni è vietato (vedi Capitolo 6 per i dettagli) |
| Gestione bot | Il bot di Kimi Claw Android supporta solo modifica del nome ed eliminazione, e non supporta altre configurazioni bot |
| Terminale | Kimi Claw Android al momento non offre la possibilità di operazioni dirette da riga di comando |

## Domande frequenti (FAQ)

<Callout type="info">
Quanto segue è un riferimento per Kimi Claw Android.
</Callout>

### Installazione e configurazione

#### Cosa devo fare se l’installazione di OpenClaw non riesce?

- Assicurati che lo spazio di archiviazione sia sufficiente (almeno 5GB) e non uscire dall’applicazione né bloccare lo schermo durante l’installazione
- Tocca "Reinstalla" per riprovare
- Se il problema si ripete, tocca "Hai un problema, vai al feedback" per inviare la segnalazione

#### Dopo aver concesso le autorizzazioni, lo stato non si aggiorna?

- Per alcune marche di telefoni, le autorizzazioni concesse richiedono il riavvio dell’app per avere effetto
- Torna a Kimi Claw Android. Se lo stato non è stato aggiornato, prova a chiudere e riaprire l’App

#### Gli utenti gratuiti possono usarlo?

- Al momento, per usare Kimi Claw Android devi attivare i privilegi di abbonamento Kimi Allegretto o superiori
- Tocca "Vai all’upgrade" nei passaggi di configurazione dell’account Kimi per attivarlo

#### Durante il ripristino della configurazione compare "Il file di configurazione non è valido"?

- Il file di backup potrebbe essere danneggiato o provenire da una versione incompatibile
- Usa "Configurazione Kimi App con un clic" per riconfigurare

### Connettività e stabilità

#### Perché lo stato del gateway mostra sempre "Avvio"?

- Controlla che la connessione di rete sia normale
- Verifica che tutte le autorizzazioni richieste (notifiche, ottimizzazione batteria, archiviazione, avvio automatico) siano state concesse
- Prova a toccare "Backup e riavvio" nelle impostazioni per riavviare il servizio gateway

#### Il gateway si è disconnesso all’improvviso?

- Controlla se il telefono è entrato in modalità risparmio energetico, causando la chiusura delle app in background
- Verifica che "Ignora ottimizzazione batteria" e "Autorizzazione avvio automatico" siano stati concessi correttamente
- Controlla lo stato del gateway nella Dashboard. Se mostra "Interrotto", tocca Riavvia

#### Kimi Claw Android perde la connessione dopo il blocco del telefono?

- Di solito succede perché la strategia di ottimizzazione della batteria del telefono termina le applicazioni in background
- Assicurati di aver completato le seguenti impostazioni:
  - Ignora ottimizzazione batteria - Autorizzato
  - Autorizzazione autoavvio — Abilitata
  - Gestione consumo energetico — Seleziona "Consenti completamente il comportamento in background"

### Canali e comunicazione

#### È possibile collegare più canali chat contemporaneamente?

- Sì. Puoi collegare contemporaneamente più canali, come Kimi, Feishu, WeChat e altri
- Per aggiungerli, basta toccare "+ Connect" nella gestione canali della Dashboard
- Mantieni almeno un canale per garantire la normale comunicazione

#### Dopo aver scansionato il codice QR Feishu, resta in attesa degli aggiornamenti di stato?

- Assicurati di aver completato nel browser la procedura di creazione dell’applicazione Feishu
- Se non ci sono aggiornamenti per molto tempo, puoi provare a collegarti inserendo manualmente le informazioni del bot

#### Connessione WeChat non riuscita?

- Verifica che le credenziali WeChat Claw siano inserite correttamente e corrispondano ai valori della configurazione lato WeChat
- Se necessario, segui la guida ufficiale di configurazione WeChat Claw per rigenerare e ricollegare le credenziali
- Controlla che la rete mobile possa accedere normalmente ai servizi WeChat

#### Perché non vedo Kimi Claw Android nella Kimi App?

- Verifica che la procedura di configurazione iniziale sia stata completata interamente (concessione autorizzazioni → installazione di OpenClaw → configurazione dell’account Kimi)
- Controlla se lo stato del gateway nella Dashboard è "Connesso"
- Prova ad aggiornare l’elenco bot nella Kimi App

### Uso delle funzioni

#### Perché alcune applicazioni non possono essere controllate da remoto?

- Per motivi di sicurezza, il sistema ha bloccato automaticamente l’accesso alle applicazioni finanziarie, come banche, pagamenti, titoli e assicurazioni
- Per l’elenco completo, consulta il Capitolo 6 "Elenco delle applicazioni limitate".

#### Perché è necessario usare telefoni inutilizzati?

- Durante l’esecuzione, Kimi Claw Android può occupare le autorizzazioni operative del telefono, influendo sul normale utilizzo
- Usare un telefono di riserva evita conflitti di autorizzazioni e protegge i dati privati

#### Come ridistribuire dopo aver cambiato telefono?

1. Esporta il file di configurazione in Dashboard → Impostazioni → Backup e ripristino sul vecchio telefono
2. Installa Kimi Claw Android sul nuovo telefono
3. Seleziona "Ripristina configurazione" nel Passaggio 3 e importa il file di backup precedente.

#### Come visualizzare lo stato di esecuzione di Kimi Claw Android?

- Nell’interfaccia principale della Dashboard puoi visualizzare lo stato del gateway e il tempo di esecuzione
- Tocca "Log in tempo reale" per visualizzare i log operativi dettagliati
- Grazie alle funzioni di ricerca e filtro per livello dei log, i problemi possono essere individuati rapidamente

### Upgrade e versione

#### Come aggiornare Kimi Claw Android?

- Controlla e aggiorna all’ultima versione in Dashboard → Impostazioni → "Aggiornamento versione"
- Si consiglia di eseguire l’aggiornamento in ambiente Wi-Fi

#### Posso aggiornare manualmente la versione di OpenClaw?

- L’aggiornamento manuale non è consigliato: può causare problemi di compatibilità
- L’aggiornamento ufficiale verrà inviato tramite notifica in-app una volta completato l’adattamento

## Feedback e assistenza

Se durante l’uso riscontri problemi o hai suggerimenti:

### Feedback in-app

- Dashboard → Impostazioni → Feedback utente
- Pagina di installazione OpenClaw → "Se hai problemi, invia feedback"

Quando invii feedback, fornisci quanto segue:

- Il tuo Kimi Claw Android ID (visibile facendo clic sul canale Kimi)
- Modello del dispositivo e versione Android
- Descrizione del problema e screenshot

<Callout type="info">
Fornire il Kimi Claw Android ID aiuta i tecnici a individuare rapidamente i problemi: includilo quando invii feedback.
</Callout>
