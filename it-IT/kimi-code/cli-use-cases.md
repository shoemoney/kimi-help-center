---
title: "Casi d'uso comuni"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Casi d'uso comuni - Centro assistenza Kimi"
  description="Ecco alcuni scenari tipici di utilizzo di Kimi Code CLI nello sviluppo quotidiano, ciascuno con prompt di esempio a cui fare riferimento."
/>

# Casi d'uso comuni

Ecco alcuni scenari tipici di utilizzo di Kimi Code CLI nello sviluppo quotidiano, ciascuno con prompt di esempio a cui fare riferimento.

## Implementare nuove funzionalità

Descrivi le tue esigenze in linguaggio naturale: l'IA leggerà automaticamente il codice pertinente, scriverà nuovo codice e verificherà i risultati.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Aggiungi alla pagina dell'elenco utenti una funzione di ordinamento per data di registrazione: servono modifiche sia al frontend che al backend",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Implementa un middleware di rate limiting usando l'algoritmo token bucket, limitando ogni IP a 60 richieste al minuto",
    },
  ]}
/>

## Correggere bug

Incolla direttamente il messaggio di errore all'IA: individuerà automaticamente la causa principale e proporrà una correzione.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Dopo aver eseguito npm test ho ottenuto questo errore, correggilo:\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "La pipeline CI è fallita nella fase di lint. Ecco il log: ... Correggilo",
    },
  ]}
/>

## Comprendere un progetto

Quando entri in un nuovo progetto o devi capire una porzione di codice specifica, basta chiedere.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Qual è l'architettura complessiva di questo progetto? Quali sono i moduli principali?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Cosa fa src/auth/middleware.ts? Come funziona il flusso di autenticazione?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Spiega come vengono gestite le migrazioni del database in questo progetto",
    },
  ]}
/>

## Automatizzare piccole attività

Ideale per modifiche al codice in blocco, aggiunta di documentazione, generazione di test e altro lavoro ripetitivo.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Aggiungi commenti JSDoc a tutte le funzioni esportate nella directory src/utils/",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Genera test unitari per tutti i metodi pubblici della classe UserService",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Sostituisci tutte le dichiarazioni var nel progetto con const o let",
    },
  ]}
/>

## Attività generiche

Kimi Code CLI non si limita alla scrittura di codice: può anche occuparsi di ricerche, analisi dei dati, operazioni in blocco sui file e altro ancora.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Fai una ricerca sulle principali librerie ORM per Node.js attualmente diffuse e confrontane pregi e difetti",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analizza i log di accesso degli ultimi 7 giorni nella directory logs/ ed elenca i 10 percorsi di richiesta più frequenti",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Unisci tutti i file CSV nella directory data/ in uno solo e rimuovi le righe duplicate",
    },
  ]}
/>
