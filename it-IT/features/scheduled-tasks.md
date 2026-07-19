---
title: "Attività pianificate"
slug: "scheduled-tasks"
order: 5
extract_headings: false
preview: true
preview_content: "Le attività pianificate permettono a Kimi di eseguire automaticamente un'attività ricorrente all'orario che imposti: ideali per briefing quotidiani, monitoraggi settimanali e pulizie periodiche. Disponibili in Kimi e nell'app desktop Kimi Work."
---

<SeoMeta
  title="Come usare le attività pianificate di Kimi - Centro assistenza Kimi"
  description="Scopri le attività pianificate di Kimi: fai eseguire automaticamente a Kimi un'attività a un orario prestabilito, con pianificazioni giornaliere, settimanali, mensili o una tantum, una data di scadenza facoltativa e la possibilità di combinarle con le Skills per lavori più complessi. Ideali per briefing quotidiani, monitoraggi settimanali di settore e pulizie periodiche dei dati. Disponibili in Kimi e nell'app desktop Kimi Work."
/>

# Attività pianificate

Le attività pianificate permettono a Kimi di eseguire automaticamente un'attività fissa all'orario che imposti, così non devi avviarla manualmente ogni volta. Sono ideali per lavori regolari e ripetuti: briefing quotidiani, monitoraggi settimanali di settore, pulizie periodiche dei dati e così via.

Le attività pianificate sono una funzionalità generale, disponibile in **Kimi** e nell'**app desktop Kimi Work**.

## Creare un'attività pianificata

Puoi farlo in due modi:

- **Dal punto di accesso**: fai clic su "Crea attività pianificata" nella barra laterale e compila l'attività nella finestra di dialogo;
- **Da una conversazione**: descrivi in linguaggio naturale ciò che vuoi pianificare e Kimi creerà per te un'attività pianificata, preparando automaticamente titolo, pianificazione e contenuto dell'attività.

Un'attività pianificata include:

- **Titolo**: riassume l'attività, così è facile ritrovarla nell'elenco;
- **Pianificazione**: giornaliera, settimanale, mensile oppure senza ripetizione (una tantum);
- **Data di scadenza**: puoi impostare quando l'attività scade (selezionata per impostazione predefinita al momento della creazione);
- **Contenuto dell'attività**: un prompt che descrive cosa deve fare l'attività. All'orario pianificato, Kimi esegue questo prompt fisso.

## Scrivere un buon prompt per l'attività

Un buon prompt per l'attività indica tre cose insieme:

- **Quando**: quando eseguirla (una data specifica / un orario ogni giorno / un giorno ogni settimana);
- **Formato dell'output**: come vuoi il risultato (punti chiave, tabella, modello, conteggio parole, lingua);
- **Vincoli**: cosa non deve fare o quali requisiti deve rispettare (ad es. entro 200 parole, solo in cinese, includere una nota sui rischi, restituire solo 3 elementi).

**Un modello universale**: Alle [orario], esegui [attività], restituisci il risultato come [formato] e rispetta [vincoli].

Ecco alcuni esempi che puoi copiare e adattare:

<CodePreview
  files={[
    {
      name: "market-news.txt",
      language: "text",
      content: "Ogni giorno alle 9:00, riassumi le ultime notizie di mercato in 3 punti chiave più 1 nota sui rischi, in cinese, entro 200 parole.",
    },
    {
      name: "daily-report-reminder.txt",
      language: "text",
      content: "Tra 1 ora, ricordami di completare il report di lavoro di oggi e allega il modello del report (struttura in quattro parti).",
    },
    {
      name: "bedtime-reminder.txt",
      language: "text",
      content: "Stasera alle 22:30, ricordami di: spegnere il computer, lavarmi e prepararmi per dormire. Mantieni un tono gentile.",
    },
  ]}
/>

## Gestire le attività pianificate

L'**elenco attività** mostra tutte le tue attività pianificate (ordinate per orario). Da ogni scheda attività puoi:

- attivare o disattivare l'attività;
- usare altre azioni: individuare l'attività, eseguirla una volta subito, modificarla ed eliminarla.

In una conversazione, un'attività pianificata appare come una **scheda attività** che mostra titolo, frequenza, prossima esecuzione e contenuto: anche da lì puoi eseguirla subito, metterla in pausa, modificarla o eliminarla.

## Esecuzione e notifiche

- All'orario pianificato, Kimi esegue il prompt fisso impostato nell'attività;
- Ogni esecuzione crea una notifica contrassegnata come non letta; puoi visualizzare il risultato di ciascuna esecuzione e passare alla conversazione corrispondente;
- Lo stato di lettura si sincronizza tra web e mobile;
- Dopo l'esecuzione di un'attività, puoi **scegliere un modello per continuare a fare domande di follow-up** nella conversazione del risultato e digitare "/" per **richiamare plugin e Skills**.

## Combinare con le Skills

Le attività pianificate possono essere combinate con le **Skills** per gestire lavori più complessi, in particolare le **Skills finanziarie** di Kimi (dati di mercato, analisi degli utili e così via).

Prima di usarne una, **installa e testa la Skill**, verificando che funzioni come previsto, poi usala in un'attività pianificata.

## Scadenza

Quando crei un'attività, viene selezionata per impostazione predefinita una data di scadenza, per evitare che attività obsolete restino attive. Le scadenze predefinite sono:

- Giornaliera: +7 giorni;
- Settimanale: +1 mese;
- Mensile: +3 mesi.

<Callout type="info">
Le attività pianificate eseguite localmente nell'app desktop Kimi Work non sono soggette alle regole di scadenza sopra indicate; le attività locali vengono eseguite secondo il proprio ciclo mentre l'app è aperta, e le attivazioni mancate mentre l'app è chiusa non vengono eseguite in seguito.
</Callout>

## Quote e piani

Le attività pianificate limitano il numero di **attività che puoi mantenere attive contemporaneamente** (non c'è limite al numero di attività che puoi creare). Il numero di attività attive varia in base al tuo piano di abbonamento:

| Piano | Free | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Attività pianificate | 2 | 6 | 15 | 20 | 25 |

- Quando raggiungi il limite di attività attive e crei un'altra attività, la nuova attività viene **salvata come inattiva**, con un invito ad aggiornare il piano o a disattivare alcune attività;
- Se il tuo limite di attività attive diminuisce (downgrade del piano o vantaggi scaduti), le attività oltre il limite vengono messe automaticamente in pausa.

Per le quote più aggiornate, consulta la [pagina dei piani di abbonamento](/membership/membership-pricing).

<Callout type="tip">
**Suggerimento**: prima di pianificare un'attività, prova una volta il suo contenuto in una normale conversazione oppure usa "Esegui una volta subito" per verificarla: assicurati che la formulazione sia chiara e che il risultato sia quello atteso prima di affidarti alla pianificazione. Se l'attività dipende da una Skill, installa e testa prima quella Skill.
</Callout>

## FAQ

### C'è un limite al numero di attività pianificate che posso creare?
Non c'è limite al numero di attività che puoi creare, ma il numero che puoi mantenere **attivo contemporaneamente** dipende dal tuo piano. Quando superi il limite di attività attive, una nuova attività viene salvata come inattiva; puoi aggiornare il piano o disattivare alcune attività per attivarla.

### Devo tenere il computer o l'app aperti perché le attività vengano eseguite?
Le attività pianificate create in Kimi vengono eseguite nel cloud: non devi tenere aperto alcun client. Le attività eseguite localmente nell'app desktop Kimi Work richiedono che l'app sia aperta; le attivazioni mancate mentre è chiusa non vengono eseguite in seguito.

### Posso scegliere un modello quando viene eseguita un'attività pianificata?
Non puoi scegliere un modello durante la creazione di un'attività. Dopo l'esecuzione, puoi scegliere un modello per continuare a fare domande di follow-up nella conversazione del risultato e digitare "/" per richiamare plugin e Skills.

### Cosa succede se raggiungo il limite di attività attive?
Disattiva le attività che non ti servono più oppure aggiorna il piano per aumentare il limite di attività attive. Consulta la [pagina dei piani di abbonamento](/membership/membership-pricing) per i dettagli.
