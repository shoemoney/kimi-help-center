---
title: "Guida all'abbonamento Kimi Code"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Guida all'abbonamento Kimi Code - Centro assistenza Kimi"
  description="Kimi Code è un vantaggio pensato per gli sviluppatori incluso nel piano di abbonamento Kimi, che offre funzionalità di codifica AI ad alte prestazioni. Puoi usufruire di questo vantaggio tramite..."
/>

# Guida all'abbonamento Kimi Code

<Callout type="info">
Kimi Code è un vantaggio pensato per gli sviluppatori incluso nel piano di abbonamento Kimi, che offre funzionalità di codifica AI ad alte prestazioni. Puoi usufruire di questo vantaggio tramite Kimi Code CLI, Claude Code, Roo Code e altri strumenti supportati.
</Callout>

## Vantaggi principali

| Vantaggio | Descrizione |
|-----------|-------------|
| **Ampia compatibilità** | Funziona con Kimi Code CLI, Claude Code, Roo Code e altri coding agent diffusi |
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
