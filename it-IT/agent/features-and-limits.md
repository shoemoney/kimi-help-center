---
title: "Funzionalità e limiti di Agent"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Funzionalità e limiti di Agent

<SeoMeta
  title="Funzionalità e limiti di Agent - Centro assistenza Kimi"
  description="Scopri le capacità di Kimi Agent, i consigli d'uso, i limiti e le migliori pratiche per ottenere risultati ottimali."
/>

<Callout type="info">
**Kimi Agent** è un assistente basato su AI che esegue in autonomia attività complesse tramite ragionamento multi-step e integrazione di strumenti. Questa guida raccoglie buone pratiche, limiti e FAQ per aiutarti a sfruttare al meglio la modalità Agent.
</Callout>

## Consigli d'uso

**(1) Prima di inviare un'attività**

Indica con chiarezza informazioni di contesto e vincoli — contesto del progetto, caso d'uso e requisiti particolari — così Kimi potrà comprendere con maggiore precisione il tuo intento.

**(2) Durante l'esecuzione**

Kimi Agent lavora in modo asincrono in background. Se la pagina web sembra bloccata o non risponde, **non fare clic su "Interrompi"**: interromperesti l'esecuzione dell'attività. Puoi lasciare la pagina: l'attività continuerà in background e riceverai una notifica al completamento. Per le attività che richiedono molto tempo (ad esempio Agent Swarm), ti invitiamo ad avere pazienza.

**(3) Scenari per siti web**

Agent può generare contenuti full-stack, incluse interfacce frontend, servizi backend e logica di archiviazione persistente. Se un progetto non funziona come previsto, di solito il problema riguarda l'avvio della sandbox, l'inizializzazione del database, la configurazione dell'autenticazione o azioni di pubblicazione mancanti. Agent standard viene eseguito nel cloud e non può accedere direttamente a file locali o sistemi intranet aziendali. Per accedere a file locali o a una intranet, usa Kimi Claw.

<Callout type="tip">
**Devi accedere a file locali?** Usa Kimi Claw per accedere in modo sicuro a file locali e sistemi intranet aziendali. Scopri di più nella [documentazione di Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Conversazioni multi-turn e modifiche dell'attività**
Nel corso di più scambi e revisioni, Agent potrebbe "dimenticare" alcuni dettagli iniziali. È preferibile definire prima la struttura dell'attività e i punti chiave, quindi procedere con modifiche incrementali.

**(5) Scomposizione delle attività complesse**
Per attività ampie e complesse, suddividile in 2–3 fasi e inviale a Kimi in batch, oppure usa Agent Swarm.

**(6) Limiti dell'output in file**
Nella modalità Agent standard, in genere è possibile generare un solo file per attività (ad esempio un documento o un foglio di calcolo). Per più file (ad esempio sia un documento Word sia una PPT), usa Agent Swarm.

**(7) Limiti di contesto ed equilibrio dell'output**
A causa del limite di contesto di 256K caratteri dei modelli linguistici di grandi dimensioni (circa 40.000–50.000 caratteri cinesi / ~100.000 parole inglesi), l'elaborazione di grandi volumi di file richiede di bilanciare quantità di input e output.

<Callout type="warning">
**Nota sul limite di contesto**: Agent usa una finestra di contesto da 256K caratteri. Per risultati ottimali, fornisci un contesto conciso ed evita di sovraccaricare l'attività con file non necessari.
</Callout>

## Note importanti

<Callout type="warning">
**Uso dei credit**: le attività Agent consumano credit dal pool condiviso. Anche Kimi Code attinge a questo pool condiviso, ma ha un proprio rate limit di 5 ore / settimanale che si applica solo a Kimi Code. Ogni attività Agent consuma in genere 1 unità di credit. Per informazioni dettagliate sui credit in base al livello di abbonamento, consulta [Credit e fatturazione](/agent/quota-and-billing).

- 60–720 attività Agent/mese, a seconda del tuo piano
</Callout>

- **Tempo di esecuzione**: in modalità Agent, una singola attività richiede in genere 5–20 minuti. Le attività Agent Swarm possono richiedere più tempo. Puoi lasciare la pagina: l'importante è non fare clic su Interrompi, per non interrompere l'attività.
- **Uso dei credit**: le attività Agent consumano credit dal pool condiviso, a cui attinge anche Kimi Code (Kimi Code ha un proprio rate limit di 5 ore / settimanale).
- **Attività semplici**: per domande e risposte semplici, si consiglia la modalità chat standard, che offre risposte più rapide.

<Callout type="warning">
**Conformità dei contenuti**: le funzionalità Agent sono soggette al [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2). La generazione di contenuti vietati non è supportata; l'invio di contenuti vietati può comportare la sospensione del servizio.
</Callout>

## FAQ

**D: Che cosa può fare Agent?**

Agent risponde alle seguenti esigenze attraverso più chiamate a strumenti:
- **Generazione e modifica di testi**: genera articoli, report, documenti e altro, supportando diversi stili e formati di scrittura.
- **Sviluppo web**: crea interfacce e servizi di progetti full-stack, con supporto per progettazione di interfacce app, integrazione backend, persistenza dei dati e visualizzazione dei dati.
- **Generazione di slide**: strumento PPT web dedicato per creare presentazioni complete.
- **Assistenza alla programmazione**: scrittura e debug del codice in più linguaggi di programmazione.

**D: Perché il sito web creato da Agent non funziona?**

Un progetto completo è in genere composto da tre parti: interfaccia frontend, servizi backend e archiviazione dei dati. Agent può generare contenuti di progetto full-stack su tutti e tre i livelli. Se il progetto non funziona come previsto, di solito il problema riguarda l'avvio della sandbox, l'inizializzazione del database, la configurazione dell'autenticazione o azioni di pubblicazione mancanti.

**D: Quali sono i deliverable di Agent?**

- File completi di esecuzione dell'attività
- Anteprima del progetto distribuito e versioni pubblicate
- Archivio Zip scaricabile (situato in `/mnt/okcomputer/output/`)

**D: Qual è la lunghezza del contesto di Agent?**

Agent usa una lunghezza di contesto di **256K caratteri** (circa 40.000–50.000 caratteri cinesi / ~100.000 parole inglesi).

**D: Come vengono calcolati i credit di Agent?**

Tutte le funzionalità dell'abbonamento, incluso Kimi Code, condividono un unico pool di credit. Ogni attività Agent conta in genere come una unità di credit.
