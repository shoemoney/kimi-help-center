---
title: "Nozioni di base sui prompt"
slug: "what-is-prompt"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Nozioni di base sui prompt - Centro assistenza Kimi"
  description="Un prompt è l'istruzione testuale che invii a Kimi: può essere una domanda, una descrizione, un insieme di requisiti o persino un briefing completo di un'attività. Kimi usa il tuo..."
/>

# Nozioni di base sui prompt

<Callout type="info">
Un prompt è l'istruzione testuale che invii a Kimi: può essere una domanda, una descrizione, un insieme di requisiti o persino un briefing completo di un'attività. Kimi usa il tuo prompt per comprendere le tue intenzioni, organizzare una risposta ed eseguire le attività.

In breve: **il modo in cui chiedi determina il modo in cui Kimi risponde.** Un prompt chiaro e specifico porta quasi sempre a una risposta più accurata e di valore.
</Callout>

## Quattro elementi fondamentali di un buon prompt

### 1. Definisci ruolo e contesto

Dire a Kimi chi sei e in quale situazione ti trovi lo aiuta a calibrare il livello di approfondimento e il tono giusti.

| Prompt vago | Prompt migliore |
|-------------|--------------|
| Scrivi un articolo sull'IA | Sono un redattore di una testata tecnologica. Mi serve un articolo divulgativo sull'IA di 2.000 parole per un pubblico generalista, scritto in uno stile accessibile e coinvolgente |
| Aiutami ad analizzare dei dati | Sono un analista di mercato. Analizza i tassi di conversione per canale in questo file Excel, concentrandoti sulle variazioni mese su mese |

### 2. Descrivi l'attività in modo specifico

Più è specifica la tua descrizione, meno cicli di revisione ti serviranno. Una buona descrizione dell'attività include in genere:

- **Cosa fare**: un'azione chiara (analizzare, riassumere, tradurre, generare, confrontare…)
- **Formato di output**: tabella, elenco, paragrafo, codice, Markdown…
- **Ambito e vincoli**: numero di parole, numero di elementi, intervallo temporale, copertura geografica…
- **Requisiti di qualità**: tono accademico, colloquiale, conciso, dettagliato…

<ComparisonBlock
  wrong={"Riassumi questo articolo"}
  correct={"Riassumi questo articolo in 3 punti elenco, ciascuno di non più di 50 parole, in italiano"}
/>

### 3. Fornisci esempi o riferimenti

Quando hai aspettative precise sul formato, dare a Kimi un esempio (few-shot) è molto efficace:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Organizza gli appunti della riunione in questo formato:\n\nArgomento della riunione: xxx\nPartecipanti: xxx\nDecisioni chiave:\nxxx\nxxxAzioni da intraprendere:\n[ ] xxx (Responsabile: xxx, Scadenza: xxx)",
    },
  ]}
/>

### 4. Suddividi le attività complesse in passaggi
Per le attività complesse, suddividi il lavoro in passaggi più piccoli e guida Kimi attraverso di essi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ho bisogno di un report di analisi competitiva. Segui questi passaggi:\nElenca i 3 principali concorrenti nazionali e le loro funzionalità principali\nConfronta le loro strategie di prezzo\nAnalizza i punti di forza e di debolezza di ciascun prodotto\nFornisci raccomandazioni di differenziazione per il nostro prodotto",
    },
  ]}
/>

## Consigli pratici
### Usa domande di follow-up e iterazioni
Non sei soddisfatto della prima risposta? Continua semplicemente la conversazione: non c'è bisogno di ripetere tutto il contesto:
- "Approfondisci il punto 2"
- "Rendi il tono più formale"
- "Aggiungi le fonti dei dati"
- "Rianalizza da una prospettiva diversa"
### Sfrutta file e link
Kimi supporta il caricamento di PDF, documenti Word, file Excel, immagini e altro ancora. Puoi anche incollare direttamente gli URL. Combinare i file con il tuo prompt aumenta enormemente l'efficienza:
| Attività | Esempio di prompt |
|------|---------------|
| Riassumere un PDF | "Riassumi i punti chiave di questo PDF" |
| Analizzare dati | "Analizza i trend di vendita in base a questi dati Excel" |
| Estrarre da URL | "Leggi questo articolo al link ed estrai i punti salienti" |

### Specifica il formato di output
Dì a Kimi esattamente quale formato desideri:
| Esigenza | Esempio di prompt |
|------|---------------|
| Tabella comparativa | "Confronta i pro e i contro di A e B in una tabella" |
| Output di codice | "Implementalo in Python con i commenti" |
| Elenco strutturato | "Organizza come elenco numerato, ogni voce sotto le 20 parole" |
| Markdown | "Restituisci in formato Markdown con gerarchia dei titoli" |

### Usa la memoria per le preferenze persistenti
Se hai preferenze e requisiti ricorrenti, usa la funzione **Memory** di Kimi per ricordarli a lungo termine:
- "Ricorda che sono un ingegnere frontend che preferisce lo stack React"
- "Rispondi sempre in italiano usando il formato Markdown"
- "Includi esempi di codice quando rispondi a domande tecniche"

<Callout type="tip">
In questo modo non dovrai ripeterti: Kimi applicherà automaticamente queste preferenze nelle conversazioni future.
</Callout>

## Errori comuni
| Errore | Approccio migliore |
|---------|----------------|
| Stipare più attività non correlate in un unico messaggio | Avvia una nuova sessione per ogni attività indipendente per mantenere il contesto pulito |
| Prompt troppo vaghi (es. "scrivimi qualcosa") | Specifica cosa scrivere, per chi, in quale stile e di che lunghezza |
| Aspettarsi un output perfetto al primo tentativo | Genera prima una bozza, poi affina con domande di follow-up |
| Non verificare i fatti nell'output dell'IA | Verifica sempre date, dati e affermazioni di fatto |

## Modelli per iniziare subito
Ecco alcuni modelli di prompt pronti all'uso: copia, personalizza e via:
**Scrittura**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Scrivi un [tipo di articolo] su [argomento] per [pubblico di riferimento], di circa [xxx] parole.\nRequisiti: [stile/formato/aspetti su cui concentrarsi]",
    },
  ]}
/>

**Analisi**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analizza [argomento], concentrandoti su [dimensioni chiave].\nFormato di output: [tabella/grafico/report]\nIncludi conclusioni e raccomandazioni.",
    },
  ]}
/>

**Traduzione**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Traduci il testo seguente in [lingua di destinazione], mantenendo un tono [accademico/colloquiale/aziendale].\nPer la terminologia specialistica, indica il termine originale tra parentesi.",
    },
  ]}
/>

<Callout type="info">
Padroneggia questi concetti e queste tecniche fondamentali e collaborerai con Kimi in modo molto più efficace, trasformando l'IA in un vero strumento di produttività.
</Callout>
