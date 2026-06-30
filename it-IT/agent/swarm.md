---
title: "K2.6 Agent Swarm [Beta]"
slug: "agent-swarm"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="K2.6 Agent Swarm [Beta] - Centro assistenza Kimi"
  description="K2.6 Agent Swarm Beta è un'architettura di &quot;scalabilità orizzontale&quot; che coordina fino a 300 sub-agent in parallelo — senza ruoli predefiniti né workflow..."
/>

# K2.6 Agent Swarm [Beta]

<Callout type="info">
**K2.6 Agent Swarm [Beta]** è un'architettura di "scalabilità orizzontale" che coordina fino a 300 sub-agent in parallelo — senza bisogno di ruoli predefiniti o workflow costruiti a mano. Porta a termine le attività circa **4,5 volte più velocemente** rispetto all'esecuzione con un singolo agente.
</Callout>

Il 27 gennaio 2026 Moonshot AI ha rilasciato Kimi K2.5, introducendo Agent Swarm [Beta]. Il 20 aprile 2026 Moonshot AI ha rilasciato e reso open source Kimi K2.6, con importanti miglioramenti all'architettura Agent Swarm:
- Fino a **300 sub-agent** che lavorano simultaneamente
- Oltre **4.000 chiamate a strumenti** per ciascuna attività
- **4,5 volte più veloce** rispetto all'esecuzione sequenziale con un singolo agente

## La storia dietro tutto questo

Nel 2025 la narrativa dominante del settore AI si concentrava sulla scalabilità verticale — modelli più grandi, più parametri. Ma questo approccio incontra un limite strutturale: il collo di bottiglia dell'esecuzione sequenziale singola.

Agent Swarm è nato da uno scenario reale: quando un membro del team ha provato ad automatizzare la raccolta quotidiana di informazioni azionarie e si è ritrovata con 100 righe di codice if-else, ha capito: "Sto scrivendo a mano un sistema multi-agente". Se i modelli sanno usare gli strumenti, perché non possono progettare da soli la propria architettura?

Agent Swarm è una struttura organizzativa autoprogettata — concepita dall'AI, non dagli esseri umani. L'Agent principale (orchestratore) dirige in autonomia fino a 300 sub-agent, eseguendo fino a 4.000 passaggi di workflow in parallelo.

<Frames
  src="./images/swarm/swarm.png"
  alt="swarm"
/>

K2.6 Agent Swarm [Beta] adotta il metodo di addestramento PARL (Parallel-Agent Reinforcement Learning). Rispetto agli approcci a singolo agente, riduce i passaggi critici di 3–4,5 volte negli scenari di ricerca su larga scala.

## Come si usa?

<Frames
  src="./images/swarm/screenshot-8.png"
  alt="screenshot 8"
/>

**Punti di accesso:**
- **Web**: [kimi.com/agent-swarm](https://www.kimi.com/agent-swarm)
- **Mobile**: app Kimi → Cambia modalità → Seleziona K2.6 Agent Swarm [Beta]

<Callout type="warning">
**Accesso Beta**: K2.6 Agent Swarm [Beta] è attualmente disponibile per gli abbonati Moderato, Allegretto, Allegro e Vivace. Le attività consumano molti più crediti rispetto alle normali attività dell'Agent.
</Callout>

**Passaggi:**
1. Descrivi la tua attività e inviala (ad esempio, "Raccogli oltre 200 articoli di Paul Graham")
2. Osserva l'avanzamento in tempo reale: creazione dell'elenco delle attività, generazione dei sub-agent, esecuzione in parallelo
3. Ricevi i risultati: progetti di codice, cartelle di file, analisi dei dati, documenti Office
4. Visualizza l'anteprima, scarica o condividi i risultati
5. Passa al singolo Agent K2.6 per proseguire nei turni successivi

## Casi d'uso

### Scoperta su larga scala

**Caso 1: i 3 migliori creator in 100 nicchie YouTube**

K2.6 Agent Swarm [Beta] ha creato 300 sub-agent per la ricerca in parallelo, generando tabelle strutturate con nomi dei canali, numero di iscritti e descrizioni.

<Frames
  src="./images/swarm/youtube.png"
  alt="YouTube"
/>

<Chat title="Visualizza il risultato" src="https://www.kimi.com/share/19c40eea-b272-8ef2-8000-0000af5e0baa?hide_sidebar=1&disable_auto_preview=1" />

**Caso 2: raccolta di oltre 200 articoli di Paul Graham**

Agent Swarm ha distribuito i sub-agent per cercare, scaricare, categorizzare e riassumere oltre 200 articoli in cartelle tematiche.

<Chat title="Visualizza il risultato" src="https://www.kimi.com/chat/19dbe721-9af2-86eb-8000-09b25205727e?chat_enter_method=home" />

### Produzione su larga scala

**Caso: rassegna bibliografica di 100 pagine a partire da 40 PDF**

K2.6 Agent Swarm [Beta] ha distribuito più sub-agent dedicati alla scrittura, ciascuno responsabile di un capitolo. Risultato finale: un documento accademico di 100 pagine con citazioni, grafici metodologici e analisi della rete di citazioni.

<Frames
  src="./images/swarm/literature-review.png"
  alt="literature review"
/>

### Prospettiva su larga scala

**Caso: revisione esperta della strategia di lancio di un prodotto**
Agent Swarm ha distribuito sub-agent esperti con prospettive diverse (Product Manager, Investitore, Customer Success) per analizzare una strategia di lancio.

<Frames
  src="./images/swarm/expert-review.png"
  alt="expert review"
/>

<Chat title="Visualizza il risultato" src="https://www.kimi.com/share/19c40bc9-31a2-8533-8000-0000bad59b7a?hide_sidebar=1&disable_auto_preview=1" />

**Caso: *Il problema dei tre corpi* riscritto in 20 stili letterari**
20 sub-agent "scrittori" hanno composto in modo indipendente con stili distinti — da Virginia Woolf a Borges a Kafka.

<Chat title="Visualizza il risultato" src="https://www.kimi.com/share/19c409c8-8692-821a-8000-0000070ad369?hide_sidebar=1&disable_auto_preview=1" />

## Approfondimento tecnico

**Architettura di base: Comandante + Specialisti**

- **Orchestratore** = Allenatore/Comandante: ha una visione d'insieme e definisce la strategia
- **Sub-agent** = Giocatori: ciascuno focalizzato su un ruolo specifico

**Principio chiave: congelare i giocatori, addestrare solo l'allenatore**

Tutti i sub-agent mantengono le capacità esistenti; solo l'orchestratore migliora attraverso il reinforcement learning. Questo garantisce chiarezza di responsabilità e stabilità nell'addestramento.

**Prevenire la "pigrizia":**
- **Collasso seriale**: l'orchestratore affida tutto a un unico sub-agent
- **Parallelismo fittizio**: sotto-attività prive di significato per gonfiare le metriche

**Soluzione: meccanismo di ricompensa tridimensionale**
1. Qualità del risultato finale
2. Reale grado di parallelismo raggiunto
3. Tasso di completamento delle sotto-attività

**Metrica dei passaggi critici**

Agent Swarm calcola il tempo del sub-agent più lento in ogni fase. Questo impone una reale ottimizzazione del processo, anziché una suddivisione casuale delle attività.

**Context Sharding**

Ogni sub-agent si concentra sul proprio "taccuino", annotando in autonomia i dettagli rilevanti. All'orchestratore vengono riportate solo le conclusioni chiave — preservando il ragionamento senza saturare la memoria.

**Risultati concreti**

Nel benchmark BrowseComp:
- Accuratezza: 15,9% (singolo agente) → 33,3%
- Passaggi critici ridotti di circa il 40%

## Scenari di applicazione

K2.6 Agent Swarm [Beta] è particolarmente adatto a:
1. **Recupero di informazioni su larga scala**: raccolta massiva di dati da internet
2. **Download in blocco**: raccolta su larga scala di file e risorse
3. **Lettura ad ampio raggio**: elaborazione di oltre 100 documenti
4. **Scrittura di testi lunghi**: contenuti che superano le 100.000 parole
5. **Programmazione complessa**: sviluppo frontend, revisione del codice, refactoring
6. **Automazione d'ufficio**: documenti professionali, fogli di calcolo, presentazioni

**Approfondimenti:**
- [Kimi Agent Swarm: 100 sub-agent su larga scala](https://www.kimi.com/blog/agent-swarm)
- [Kimi K2.5: Visual Agentic Intelligence​](https://www.kimi.com/blog/kimi-k2-5)
- [Kimi K2.6: l'avanzamento del coding open source](https://www.kimi.com/blog/kimi-k2-6)
