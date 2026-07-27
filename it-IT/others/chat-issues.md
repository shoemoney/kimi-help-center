---
title: "Problemi comuni nelle chat con Kimi"
slug: "chat-issues"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Problemi comuni nelle chat con Kimi - Centro assistenza Kimi"
  description="Hai problemi con le chat di Kimi? Questo articolo riepiloga le procedure di risoluzione per i problemi più comuni, tra cui risposte interrotte, contenuti anomali ed errori di caricamento, per aiutarti a risolverli rapidamente."
/>

# Problemi comuni nelle chat con Kimi

## Non riesci a inviare messaggi / compare un cerchio rosso?

Le cause potrebbero essere:

- **Rate limit attivato**: Kimi prevede un limite alle conversazioni in determinate finestre temporali. Se invii messaggi troppo spesso, potresti non riuscire a continuare l’interazione. Attendi 2–3 ore prima di riprovare e modera la frequenza delle conversazioni.
- **Condizioni di rete scarse**: un segnale debole o una connessione instabile possono impedire l’invio dei messaggi. Passa a un’altra rete e riprova.

## La conversazione supera le 200.000 parole?

Il contesto di una singola conversazione in K2.6 è di circa 128K token (~200.000 parole). Una volta raggiunto questo limite, il modello non riesce più a leggere nuovi contenuti. Cosa fare dipende dal motivo per cui hai raggiunto il limite:

- **Un singolo file che hai inviato è troppo grande e raggiunge il limite già al primo turno**: suddividi il file in parti più piccole e inviale in più blocchi.
- **Una conversazione a più turni arriva gradualmente al limite**: per prima cosa riassumi le conclusioni principali raggiunte finora (puoi anche chiedere a Kimi di "riassumere e generare un documento di passaggio"), quindi incollale in una nuova conversazione come contesto iniziale per continuare.

<Callout type="info">
**Suggerimenti**:
- Più in generale, usare [Memoria](/features/memory-space) e [Progetti](/features/project) ti aiuta a evitare di raggiungere il limite: la Memoria conserva automaticamente le informazioni importanti, mentre un Progetto tiene insieme file di riferimento, istruzioni e memoria, così ogni nuova conversazione include già il contesto.
- Eliminare i messaggi precedenti nella stessa conversazione non libera spazio nella finestra di contesto: è meglio avviare una nuova conversazione.
- Il ragionamento consuma token; per risparmiare credit, imposta **Intensità di ragionamento** su **Standard**.
- Per documenti molto lunghi, K3 offre un contesto da 1M token (disponibile con l’abbonamento di fascia più alta); durante la composizione, seleziona **Lunghezza conversazione: extra lunga**.
</Callout>

## Vedi "parliamo di qualcos’altro"?

Questo messaggio indica che il contenuto corrente ha attivato una policy di sicurezza e che l’argomento non può proseguire. Ti basta digitare un nuovo argomento per riprendere la conversazione: non è necessario attendere.

<Callout type="info">
Se ritieni che il contenuto non violasse le regole, fai clic su "👎" per inviare un feedback e aiutarci a migliorare le nostre policy di sicurezza.
</Callout>

## Vedi "Kimi è un po’ stanco"?

Significa che ci sono troppi utenti online e le risorse di calcolo sono sotto forte carico: è un rate limit nelle ore di punta. Attendi 1–2 minuti e riprova.

<Callout type="tip">
Per ridurre i tempi di attesa, valuta la sottoscrizione di un piano in abbonamento con accesso prioritario a risorse di calcolo dedicate.
</Callout>

## Non riesci a scaricare PPT/Word/Excel?

La finestra di chat di Kimi non genera direttamente file Office scaricabili:

| Tipo di file | Dove generarlo |
|-----------|-------------------|
| **Slides** | Vai a [Kimi Slides](https://www.kimi.com/slides) — supporta la generazione online e il download |
| **Word/Excel** | Usa la modalità **Agent** |

## Come eliminare una singola conversazione?

Nell’app Kimi o nella versione web, individua la conversazione corrispondente ed eliminala. Dopo l’eliminazione, la conversazione non sarà più visibile sui tuoi dispositivi; i dati correlati entreranno nel flusso di trattamento secondo quanto previsto dalla sezione 5 dell’[Informativa sulla privacy di Kimi](https://www.kimi.com/user/agreement/userPrivacy?version=v2).

## Dopo aver eliminato una conversazione, il link di condivisione è ancora accessibile?

No. Le autorizzazioni di accesso del link di condivisione sono direttamente collegate allo stato della conversazione: una volta eliminata la conversazione, il link di condivisione esterno generato da essa smette immediatamente di funzionare; altre persone non potranno più accedere ai contenuti tramite quel link e la piattaforma non ne conserva copie accessibili.

## Hai caricato per errore informazioni sensibili?

Ti consigliamo di eliminare immediatamente la conversazione corrispondente dal client; se sono coinvolte informazioni sensibili come documenti d’identità, carte bancarie o documenti legali, dopo l’eliminazione puoi contattare l’assistenza all’indirizzo [support@moonshot.ai](mailto:support@moonshot.ai), indicando nell’oggetto dell’email il tipo di informazione sensibile (ad esempio “carta d’identità”, “carta bancaria”, “documento legale”), in modo che possiamo dare priorità alla tua richiesta.

## Dopo l’eliminazione alcuni dati vengono comunque conservati?

In base ai requisiti di leggi e regolamenti come la Legge sulla cybersicurezza, la piattaforma deve conservare alcuni log di rete (ad esempio orari delle operazioni e identificativi dell’account) per un determinato periodo, esclusivamente a fini di sicurezza, conformità e controlli normativi, senza utilizzarli per altri scopi senza il tuo consenso.

Se desideri eliminare l’account e cancellare tutti i dati, consulta [Eliminazione dell’account e rimozione dei dati](/others/account-deletion).
