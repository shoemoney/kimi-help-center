---
title: "Obiettivi"
slug: "cli-goals"
order: 7
extract_headings: false
preview: true
preview_content: "Usa gli obiettivi per far sì che Kimi Code lavori verso un risultato definito attraverso i vari turni."
---

<SeoMeta
  title="Obiettivi - Centro assistenza Kimi"
  description="Usa /goal per far sì che Kimi Code lavori verso un risultato definito attraverso i vari turni. Scopri quando usare gli obiettivi, come gestirne il ciclo di vita e come mettere in coda gli obiettivi successivi."
/>

# Obiettivi

Gli obiettivi fanno sì che Kimi Code lavori verso un risultato definito attraverso i vari turni. A differenza di un normale prompt che dice cosa fare dopo, un obiettivo dice cosa deve diventare vero. Usa `/goal` quando il compito ha un traguardo chiaro, ma il passo utile successivo dipende da ciò che l'agente apprende mentre lavora — per esempio, correggere un gruppo di test che falliscono o risalire alla causa originaria di una build interrotta.

## Avviare un obiettivo

Scrivi l'obiettivo dopo `/goal`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Correggi i bug elencati nell'issue tracker.",
    },
  ]}
/>

Kimi Code salva l'obiettivo, lo invia come messaggio utente successivo e avvia la modalità obiettivo. Dopo ogni turno, verifica se l'obiettivo è completato, bloccato, in pausa o ancora attivo.

Gli obiettivi danno il meglio quando l'obiettivo indica il traguardo e la prova che lo dimostra:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Correggi ogni bug etichettato checkout-regression, aggiungi o aggiorna i test per ogni correzione ed esegui la suite di test di checkout",
    },
  ]}
/>

Evita obiettivi che indicano solo una direzione generica:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Trova tutti i bug in questo codebase.",
    },
  ]}
/>

Questo obiettivo non specifica cosa conta come successo, cosa esaminare o quando fermarsi. L'agente potrebbe bloccarsi subito o continuare a lavorare molto più a lungo del previsto.

### Quando usare gli obiettivi

Usa gli obiettivi per lavori con un traguardo chiaro e prove verificabili.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Correggi ogni test di checkout che fallisce ed esegui con successo la suite di test di checkout.",
    },
  ]}
/>

Kimi Code può esaminare l'output dei test, modificare i file, rieseguire i controlli e decidere quando l'obiettivo è completato.

Usa gli obiettivi quando il compito può richiedere diversi turni di indagine e correzione.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Trova perché la build di rilascio fallisce, correggi la causa originaria e verifica che la build passi.",
    },
  ]}
/>

L'obiettivo descrive il risultato, così l'agente può adattarsi quando il primo indizio non corrisponde alla causa originaria.

Usa gli obiettivi per lavori sequenziali che devono proseguire senza un altro prompt.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Aggiorna l'implementazione della funzionalità, aggiungi la documentazione, esegui i test e riepiloga i file modificati.",
    },
  ]}
/>

È utile quando conosci già i controlli o gli artefatti che devono esistere prima che il lavoro sia concluso.

### Quando non usare gli obiettivi

Non usare gli obiettivi per argomenti generici o discussioni aperte.

**Controesempio:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Salve!",
    },
  ]}
/>

<Callout type="warning">
Gli agenti contrassegneranno immediatamente come completato un obiettivo che non lo è davvero.
</Callout>

Non usare gli obiettivi per compiti notoriamente impossibili o irrisolvibili.

**Controesempio:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Dimostra che 1 + 1 = 3.",
    },
  ]}
/>

<Callout type="warning">
Gli agenti contrassegneranno l'obiettivo come bloccato se appare impossibile o irrisolvibile.
</Callout>

Non usare gli obiettivi con obiettivi ambigui o complicati.

**Controesempio:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Crea un videogioco in un singolo file HTML.",
    },
  ]}
/>

<Callout type="warning">
Gli agenti possono completare gli obiettivi, ma possono anche produrre risultati inattesi o sorprendenti dopo molto tempo.
</Callout>

## Gestire il ciclo di vita

Usa gli stessi comandi per esaminare o controllare l'obiettivo corrente:

| Comando | Azione |
| --- | --- |
| `/goal` o `/goal status` | Mostra l'obiettivo corrente e i suoi progressi |
| `/goal pause` | Mette in pausa l'obiettivo attivo senza eliminarlo |
| `/goal resume` | Riprende un obiettivo in pausa o bloccato |
| `/goal cancel` | Rimuove l'obiettivo corrente |
| `/goal replace <objective>` | Sostituisce l'obiettivo corrente con uno nuovo |

Un obiettivo può fermarsi in tre modi:

- **completato**: l'obiettivo è raggiunto, Kimi Code lo cancella e l'agente riassume come ha portato a termine il lavoro
- **in pausa**: lo hai messo in pausa, hai interrotto il turno, hai ripreso una sessione con un obiettivo attivo oppure si è verificato un errore del modello, del provider o del runtime
- **bloccato**: Kimi Code ha bisogno di un input, non può completare l'obiettivo così come formulato oppure ha raggiunto un limite di budget. Quando l'agente blocca un obiettivo, scrive un breve messaggio che ne spiega il motivo.

Inserisci le condizioni di arresto nell'obiettivo stesso. `/goal` non dispone di un parametro separato per i limiti di arresto.

## Mettere in coda gli obiettivi successivi

Gli agenti a volte completano un obiettivo troppo in fretta. Gli utenti possono restare delusi dal poter assegnare un solo obiettivo alla volta. Molte persone conoscono già gli obiettivi successivi che vogliono perseguire. Dovevano aspettare che l'obiettivo corrente si completasse, aprire la TUI e inviare manualmente l'obiettivo successivo.

Usa `/goal next` quando hai altro lavoro pronto ma non vuoi interrompere l'obiettivo corrente:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next Aggiorna le note di rilascio dopo che i test passano",
    },
  ]}
/>

Gli obiettivi successivi non sono visibili all'agente mentre l'obiettivo corrente è in esecuzione. Quando l'obiettivo corrente si completa, Kimi Code avvia il primo obiettivo successivo allo stesso modo in cui gli utenti inseriscono `/goal <objective>`.

Se nessun obiettivo è attivo, `/goal next <objective>` avvia subito quell'obiettivo. Si comporta come `/goal <objective>` e mostra un messaggio di stato prima che l'obiettivo inizi.

Gestisci gli obiettivi successivi in modo interattivo:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next manage",
    },
  ]}
/>

Nel gestore, usa <kbd>↑</kbd> / <kbd>↓</kbd> per sfogliare, <kbd>Space</kbd> per selezionare un obiettivo da spostare, <kbd>↑</kbd> / <kbd>↓</kbd> per riordinarlo, <kbd>E</kbd> per modificare, <kbd>D</kbd> per eliminare e <kbd>Esc</kbd> per annullare. Durante la modifica, usa <kbd>Shift-Enter</kbd> o <kbd>Ctrl-J</kbd> per aggiungere una nuova riga e <kbd>Enter</kbd> per salvare.

Se l'obiettivo corrente è in pausa, annullato o bloccato, Kimi Code non avvia l'obiettivo successivo in coda. Quando un obiettivo si blocca e ci sono obiettivi successivi in coda, la TUI ti ricorda che sono in attesa del completamento.

## Usare la modalità obiettivo con attenzione

La modalità obiettivo è utile per i lavori verificabili tramite file, test, output di comandi, artefatti generati o un chiaro resoconto scritto. È meno utile per una singola modifica o una domanda che richiede una sola risposta.

Nella modalità di permessi `manual`, il lavoro sull'obiettivo può mettersi in pausa per l'approvazione delle chiamate agli strumenti. Per il lavoro non presidiato, usa una modalità di permessi adeguata al rischio del repository e ai comandi che l'agente può eseguire.

Nella modalità prompt non interattiva è supportata solo la creazione di obiettivi:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"/goal Correggi il test di checkout che fallisce\"",
    },
  ]}
/>

La modalità prompt termina con codice `0` quando l'obiettivo si completa, `3` quando si blocca e `6` quando si mette in pausa. `/goal next` e gli altri comandi di gestione sono controlli della TUI.
