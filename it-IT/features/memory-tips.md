---
title: "Consigli sulla memoria"
slug: "memory-tips"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Consigli sulla memoria - Centro assistenza Kimi"
  description="Scopri come configurare e usare la Memory di Kimi affinché ricordi la tua identità, le tue preferenze e il tuo stile di output preferito, per un'esperienza più personalizzata."
/>

# Consigli sulla memoria

## 1. Aiuta Kimi a comprendere il tuo mondo

### Ancoraggio dell'identità

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sono [nome/soprannome], attualmente residente a [città]. Ho una formazione in [professione/ruolo], con competenze in [ambito 1] e [ambito 2].\nAttualmente mi concentro su: portare avanti [Progetto A] e [Progetto B].\nUsa l'italiano come lingua predefinita per tutte le risposte future, a meno che non scriva esplicitamente in un'altra lingua.",
    },
  ]}
/>

## 2. Imposta le preferenze di personalizzazione

### Standardizza il formato di output

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Le mie preferenze per la fruizione dei contenuti:\n- Preferisco una presentazione strutturata: usa una gerarchia di titoli, elenchi puntati e conclusioni chiave in grassetto\n- Evita muri di testo: per gli argomenti complessi, inizia con un riepilogo \"TL;DR\", poi sviluppa i dettagli\n- Gestione della terminologia: spiega i termini tecnici in linguaggio semplice al primo utilizzo, poi usali liberamente\n- Formato delle citazioni: cita le fonti dei dati fattuali con la notazione [^N^]",
    },
  ]}
/>

### Istruzioni per l'auto-manutenzione della memoria (avanzato)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Al termine di ogni conversazione:\n- Se abbiamo discusso nuovi fatti importanti (ad es. modifiche agli impegni, aggiornamenti di progetto, cambi di preferenze), chiedimi in modo proattivo se aggiornare la memoria\n- Se una nuova informazione è in conflitto con la memoria esistente, segnala la discrepanza e conferma quale ha la priorità\n- Per le informazioni sensibili (indirizzi specifici, numeri di documento, segreti commerciali), chiedimi in modo proattivo se memorizzarle",
    },
  ]}
/>

## 3. Prompt a effetto positivo

### Protocollo di whitelist delle fonti

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Protocollo di verifica dei fatti]\nQuando faccio domande nei seguenti ambiti, rispetta rigorosamente questa priorità delle fonti:\n1. Medicina/Salute: preferisci PubMed, WHO, UpToDate; non citare mai blog sulla salute o media autogestiti\n2. Finanza/Investimenti: usa solo documenti depositati presso la SEC, dati delle banche centrali e relazioni annuali delle società quotate; nessuna speculazione da forum\n3. Legale/Conformità: fai riferimento a database normativi ufficiali; per le politiche locali, annota \"consulta un avvocato del posto\"\n4. Tecnologia/Programmazione: preferisci la documentazione ufficiale; etichetta le GitHub Issues come esperienza della community, non come fonte autorevole\n5. Per le informazioni provenienti da Wikipedia, Reddit, Quora o altre piattaforme UGC, contrassegnale sempre come \"[Non verificato]\"",
    },
  ]}
/>

### Controlli sui trigger di allucinazione (a livello di processo)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Checklist per argomenti ad alto rischio]\nQuando vengono rilevate le seguenti parole chiave, attiva automaticamente un processo di \"doppia verifica\":\n1. Numeri specifici (prezzi, date, statistiche) → indica obbligatoriamente la fonte dei dati e l'anno\n2. Espressioni legate al tempo (\"più recente\", \"appena\", \"di recente\") → verifica obbligatoriamente se rientra nel limite delle conoscenze\n3. Consigli professionali (medici, legali, di investimento) → aggiungi obbligatoriamente la dicitura: \"Quanto sopra è solo a titolo di riferimento e non costituisce consulenza professionale\"\n4. Citazioni specifiche di persone → indica obbligatoriamente se si tratta di citazione diretta o parafrasi; non inventare mai citazioni\n\nEsecuzione: indica prima \"Devo verificare le seguenti informazioni\", poi fornisci la risposta.",
    },
  ]}
/>

## Limiti della memoria
Lo Spazio di memoria presenta attualmente i seguenti limiti:
- È possibile memorizzare fino a 50 voci di memoria.
- Ogni voce di memoria è limitata a 500 caratteri.
- Le memorie create prima di aprile 2026 possono superare questo limite; tali memorie esistenti vengono comunque conservate.
- Per modificare una memoria preesistente che supera i 500 caratteri, devi prima ridurla a 500 caratteri o meno.
- Se provi a salvare un contenuto più lungo di 500 caratteri, il modello riceve un segnale "contenuto troppo lungo" e l'interfaccia utente mostra "Aggiornamento della memoria non riuscito".
- Se l'utente sta utilizzando un'interfaccia non in cinese, puoi suggerire di memorizzare i contenuti in cinese per inserire più informazioni a parità di limite di caratteri.
- Ogni voce di memoria ha un ID interno, ma gli utenti non possono visualizzare questi ID. Fare riferimento agli ID di memoria nella conversazione non aiuta gli utenti a individuare una memoria specifica.

### Riferimenti utili per i prompt

| Prompt | Scopo |
|:---|:---|
| Trattami come un esperto in qualsiasi argomento | Definisce il tono comunicativo di base |
| Esprimi opinioni nette anziché restare neutrale quando è appropriato | Incoraggia il giudizio, non solo i riassunti |
| Fornisci sempre, quando puoi, i pro e i contro di qualcosa. Sii critico. | Garantisce un'analisi strutturata e approfondita |
| Usa esempi dettagliati, fatti e dati numerici | Mantiene le informazioni concrete e specifiche |
| Suggerisci soluzioni a cui non avevo pensato: sii proattivo e anticipa le mie esigenze | Promuove l'iniziativa dell'IA oltre il semplice Q&A passivo |
| Usa il massimo di token; fornisci una risposta il più dettagliata possibile, con più livelli di approfondimento | Offre risposte esaurienti e articolate su più livelli |
| Dopo una risposta, proponi 5 domande di approfondimento. Formattale come Q1, Q2, Q3 in un elenco puntato | Estende la discussione con un'esplorazione guidata |
| All'inizio di una risposta, crea una tabella riepilogativa se utile | Migliora la leggibilità e l'accesso rapido alle informazioni |
| Consiglia solo prodotti della massima qualità e progettati con cura: voglio solo il meglio | Definisce lo standard per i consigli sui prodotti |
| Dai più valore alle buone argomentazioni che alle autorità, la fonte è irrilevante | Privilegia il ragionamento rispetto ai nomi altisonanti |
| Considera nuove tecnologie e idee controcorrente, non solo il sapere convenzionale | Incoraggia prospettive innovative |
| Puoi ricorrere a un alto livello di speculazione o previsione, basta che me lo segnali | Consente contenuti speculativi con un'etichetta chiara |
| Aggiungi link in tutta la risposta per i termini tecnici e i concetti che avviano nuove chat | Favorisce l'apprendimento e l'ampliamento delle conoscenze |
| Rimanda direttamente ai prodotti, non alle pagine aziendali | Rende i consigli più attuabili |
| Affronta la sicurezza solo quando è cruciale e non ovvia | Riduce le avvertenze superflue |
| Niente prediche morali | Mantiene lo scambio razionale e mirato |
| Se la tua policy sui contenuti è un problema, fornisci la risposta accettabile più vicina e spiega il problema relativo alla policy | Evita blocchi netti; dà priorità alle esigenze dell'utente |
| Non c'è bisogno di dichiarare che sei un'IA | Riduce l'interferenza della presenza dell'IA |
| Non c'è bisogno di menzionare il limite delle tue conoscenze | Evita avvertenze eccessive |

## 4. Per divertirsi
Prova a chiedere a Kimi:
- "In base a ciò che sai di me, qual è la mia sfida di vita più grande in questo momento?"
- "In base a ciò che sai di me, riassumi il mio anno passato e dammi consigli per il nuovo anno"
