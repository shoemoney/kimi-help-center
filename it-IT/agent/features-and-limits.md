---
title: "Funzionalità e limiti di Agent"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Funzionalità e limiti di Agent

<SeoMeta
  title="Agent Features & Limitations - Centro assistenza Kimi"
  description="Scopri le capacità di Kimi Agent, consigli d'uso, limiti e best practice per ottenere risultati ottimali."
/>

<Callout type="info">
**Kimi Agent** è un assistente basato sull'IA che esegue autonomamente attività complesse attraverso ragionamenti a più fasi e l'integrazione di strumenti. Questa guida illustra best practice, limiti e domande frequenti per aiutarti a sfruttare al meglio la modalità Agent.
</Callout>

## Consigli d'uso

**(1) Prima di inviare un'attività**

Indica chiaramente informazioni di contesto e vincoli — contesto del progetto, caso d'uso e requisiti particolari — per aiutare Kimi a comprendere le tue intenzioni con maggiore precisione.

**(2) Durante l'esecuzione**

Kimi Agent viene eseguito in background in modo asincrono. Se la pagina web appare bloccata o ferma, **non fare clic su "Interrompi"**: in questo modo interromperesti l'esecuzione dell'attività. Puoi lasciare la pagina; l'attività continuerà a essere eseguita in background e riceverai una notifica al suo completamento. Per le attività che richiedono molto tempo (ad esempio K2.6 Agent Swarm [Beta]), ti chiediamo di pazientare.

**(3) Scenari di siti web**

Agent è in grado di generare contenuti full-stack, comprese interfacce frontend, servizi backend e logica di archiviazione persistente. Se un progetto non funziona come previsto, il problema è solitamente legato all'avvio della sandbox, all'inizializzazione del database, alla configurazione dell'autenticazione o all'assenza di azioni di pubblicazione. L'Agent standard viene eseguito nel cloud e non può accedere direttamente a file locali o sistemi intranet aziendali. Per accedere a file locali o all'intranet, utilizza Kimi Claw.

<Callout type="tip">
**Devi accedere a file locali?** Utilizza Kimi Claw per accedere in modo sicuro a file locali e sistemi intranet aziendali. Scopri di più nella [documentazione di Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Conversazioni a più turni e modifiche alle attività**
Nel corso di più turni di dialogo e revisioni, l'Agent potrebbe "dimenticare" alcuni dettagli iniziali. È preferibile definire prima la struttura dell'attività e i punti chiave, per poi apportare modifiche graduali.

**(5) Scomposizione di attività complesse**
Per attività grandi e complesse, suddividile in 2-3 fasi e inviale a Kimi in più passaggi, oppure utilizza K2.6 Agent Swarm [Beta].

**(6) Limiti dei file in output**
Nella modalità Agent standard, di norma è possibile produrre un solo file per attività (ad esempio un documento o un foglio di calcolo). Per più file (ad esempio sia un documento Word sia un PPT), utilizza K2.6 Agent Swarm [Beta].

**(7) Limiti di contesto ed equilibrio dell'output**
A causa del limite di contesto di 256K caratteri dei modelli linguistici di grandi dimensioni (circa 40.000-50.000 caratteri cinesi / ~100.000 parole in inglese), l'elaborazione di grandi quantità di file richiede di bilanciare il volume di input e output.

<Callout type="warning">
**Nota sul limite di contesto**: Agent utilizza una finestra di contesto di 256K caratteri. Per risultati ottimali, fornisci un contesto conciso ed evita di sovraccaricarlo con file superflui.
</Callout>

## Note importanti

<Callout type="warning">
**Utilizzo dei crediti**: le attività di Agent consumano crediti dal pool condiviso (altre funzionalità dell'abbonamento). Kimi Code utilizza un pool di crediti separato. Ogni attività di Agent consuma in genere 1 unità di crediti. Per informazioni dettagliate sui crediti in base al livello di abbonamento, consulta [Crediti e fatturazione](/agent/quota-and-billing).
Piano gratuito: 6 attività Agent/mese
Piani a pagamento: da 60 a 720 attività Agent/mese a seconda del piano
</Callout>

- **Tempo di esecuzione**: in modalità Agent, una singola attività richiede in genere 5-20 minuti. Le attività K2.6 Agent Swarm [Beta] possono richiedere più tempo. Puoi lasciare la pagina: assicurati solo di non fare clic su Interrompi per interrompere l'attività.
- **Utilizzo dei crediti**: le attività di Agent consumano crediti dal pool condiviso. Kimi Code utilizza un pool di crediti separato.
- **Attività semplici**: per semplici domande e risposte, si consiglia la modalità chat standard per risposte più rapide.

<Callout type="warning">
**Conformità dei contenuti**: le funzionalità di Agent sono soggette al [Kimi User Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2). La generazione di contenuti vietati non è supportata; l'invio di contenuti vietati può comportare la sospensione del servizio.
</Callout>

## Domande frequenti

**D: Cosa può fare Agent?**

Agent risponde alle seguenti esigenze tramite più chiamate agli strumenti:
- **Generazione e modifica di testi**: genera articoli, report, documenti e altro ancora, con supporto per vari stili e formati di scrittura.
- **Sviluppo web**: crea interfacce e servizi per progetti full-stack, supportando il design dell'interfaccia delle app, l'integrazione del backend, la persistenza dei dati e la visualizzazione dei dati.
- **Generazione di slide**: strumento PPT dedicato basato sul web per generare presentazioni complete.
- **Assistenza alla programmazione**: scrittura e debug del codice in diversi linguaggi di programmazione.

**D: Perché il sito web creato con Agent non funziona?**

Un progetto completo è in genere composto da tre parti: interfaccia frontend, servizi backend e archiviazione dei dati. Agent è in grado di generare contenuti di progetto full-stack su tutti e tre i livelli. Se il tuo progetto non funziona come previsto, il problema è solitamente legato all'avvio della sandbox, all'inizializzazione del database, alla configurazione dell'autenticazione o all'assenza di azioni di pubblicazione.

**D: Quali sono i deliverable di Agent?**

- File completi dell'esecuzione dell'attività
- Anteprima del progetto distribuito e versioni pubblicate
- Archivio Zip scaricabile (situato in `/mnt/okcomputer/output/`)

**D: Qual è la lunghezza del contesto di Agent?**

Agent utilizza una lunghezza di contesto di **256K caratteri** (circa 40.000-50.000 caratteri cinesi / ~100.000 parole in inglese).

**D: Come vengono calcolati i crediti di Agent?**

Agent, PPT e altre funzionalità dell'abbonamento condividono un unico pool di crediti. Kimi Code utilizza un pool di crediti separato. Ogni attività di Agent conta in genere come un'unità di crediti. Visualizza i tuoi crediti attuali e l'utilizzo in [Crediti dell'abbonamento](https://www.kimi.com/membership-credits).
