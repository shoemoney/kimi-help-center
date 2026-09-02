---
title: "Guida all'abbonamento Kimi Code"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Guida all'abbonamento Kimi Code - Centro assistenza Kimi"
  description="Kimi Code è un vantaggio pensato per gli sviluppatori incluso nel piano di abbonamento Kimi, che offre funzionalità di codifica IA ad alte prestazioni. Puoi usufruire di questo vantaggio tramite..."
/>

# Guida all'abbonamento Kimi Code

<Callout type="info">
Kimi Code è un vantaggio pensato per gli sviluppatori incluso nel piano di abbonamento Kimi, che offre funzionalità di codifica IA ad alte prestazioni. Puoi usufruire di questo vantaggio tramite Kimi Code CLI, Claude Code, Roo Code e altri strumenti supportati.
</Callout>

## Vantaggi principali

| Vantaggio | Descrizione |
|-----------|-------------|
| **Ampia compatibilità** | Funziona con Kimi Code CLI, Claude Code, Roo Code e altri coding agent diffusi |
| **Livelli Standard / HighSpeed** | Lo stesso modello a due velocità: HighSpeed offre una velocità di output di circa 5–6× quella di Standard e si cambia all'occorrenza |
| **Risposte ultrarapide** | Velocità di generazione fino a 100 token/s, per aumentare notevolmente l'efficienza di codifica |
| **Concurrency ad alta frequenza** | Circa 300–1.200 richieste ogni 5 ore (a seconda del piano), con fino a 30 stream simultanei |

## Avvio rapido

Scegli il percorso più adatto alla tua situazione:

- **Nuovi utenti**: vai su [kimi.com/code](https://kimi.com/code), accedi e sottoscrivi un Coding Plan.
- **Abbonati esistenti**: accedi alla console per gestire le tue API Key e iniziare a usare Kimi Code.

## Ottenere una API key

1. Accedi alla [Console Kimi](https://kimi.com/code).
2. Vai alla pagina **API Keys**.
3. Fai clic su **Crea nuova API Key**.
4. Copia e conserva in modo sicuro la tua API Key (viene mostrata una sola volta al momento della creazione).

<Callout type="warning">
Non condividere la tua API Key con altri e non inserirla in repository di codice pubblici.
</Callout>

## Login con un clic

In Kimi Code CLI puoi usare il comando `/login` per un'autorizzazione rapida, senza dover copiare manualmente una API Key:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

Il sistema completerà automaticamente l'autorizzazione del dispositivo e l'associazione dell'account: l'intero processo richiede solo pochi secondi.

## Gestione dei dispositivi

- Ogni account può essere utilizzato su più dispositivi.
- Le autorizzazioni dei dispositivi **inattivi da 30 giorni** scadranno automaticamente; sarà necessario eseguire di nuovo `/login` per riautorizzarli.
- Puoi visualizzare e gestire i dispositivi autorizzati nella console.

## Come cambiare modello

**Il modello HighSpeed è ora disponibile.** Kimi Code offre due livelli — **Standard** e **HighSpeed** — basati sullo stesso modello con identica capacità di codifica e che condividono la stessa Base URL, API Key e vantaggi dell'abbonamento. HighSpeed offre una velocità di output di circa **5–6× quella di Standard**: quando vuoi risposte immediate e iterazioni rapide, un solo clic ti offre un'esperienza di codifica più fluida. Differenze principali:

| Voce | Standard | HighSpeed |
| --- | --- | --- |
| ID modello | `kimi-for-coding` | `kimi-for-coding-highspeed` |
| Velocità di output | Riferimento | ~5–6× più veloce di Standard |
| Consumo di crediti | Riferimento | ~3× quello di Standard |
| Capacità di codifica | Completa | Identica a Standard |
| Ideale per | Attività di codifica quotidiane | Risposte immediate, iterazioni rapide |
| Abbonamento | Disponibile per tutti i membri Kimi Code | Richiede un piano [Allegretto](https://www.kimi.com/membership/pricing) o superiore |

Modi per passare al modello desiderato:

- **CLI ufficiale Kimi Code**: digita `/model` in una sessione per passare direttamente tra Standard e HighSpeed, senza modifiche alla configurazione.
- **Kimi Code per VS Code**: scegli il modello desiderato dal menu a discesa nella barra di input; se HighSpeed non compare ancora, riavvia VS Code o reinstalla l'estensione.
- **Strumenti di terze parti**: imposta il Model ID dello strumento sul modello desiderato; tutte le altre impostazioni restano invariate. Per sapere dove trovarlo in ogni strumento, consulta [Utilizzo con Coding Agent di terze parti](/kimi-code/third-party-agents).

<Callout type="info">
- **ID modello stabili**: entrambi gli ID sono identificatori stabili; il backend aggiorna il modello associato con i miglioramenti, senza modifiche alla configurazione del client.
- **Inseriscilo con esattezza**: l'ID HighSpeed deve essere `kimi-for-coding-highspeed`. Se digitato male o impostato su un altro valore, la richiesta ripiega silenziosamente sullo `kimi-for-coding` standard — nessun errore, ma nemmeno accelerazione.
- **401 senza accesso**: senza accesso a HighSpeed, la chiamata restituisce `401`; esegui l'upgrade ad Allegretto o superiore.
</Callout>

<Callout type="tip">
**Perché l'attività complessiva non sembra 5–6× più veloce?** «5–6×» si riferisce alla **velocità di output del modello** (quanto velocemente vengono generati testo/codice). Il tempo totale di un'attività di codifica è dato da «output del modello + chiamate agli strumenti (lettura/scrittura di file, esecuzione di comandi, ricerche web, ecc.) + esecuzione di script»: la durata delle chiamate agli strumenti e dell'esecuzione degli script dipende dal tuo progetto e dai tuoi comandi, e HighSpeed non cambia questa parte. Quindi se il totale non sembra 5–6× più veloce, di solito è perché le chiamate agli strumenti / l'esecuzione degli script hanno occupato la maggior parte del turno, non perché la generazione del modello sia rallentata.
</Callout>
