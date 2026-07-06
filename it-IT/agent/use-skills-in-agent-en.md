---
title: "Usare le Skill in modalità Agent"
slug: "use-skills-in-agent"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Usare le Skill in modalità Agent - Centro assistenza Kimi"
  description="Scopri come richiamare le skill, creare skill personalizzate, individuare le skill consigliate ed espandere le funzionalità di Kimi in modalità Agent."
  ogType="article"
/>

# Usare le Skill in modalità Agent

## Come richiamare le Skill?

Nella casella di input della modalità Agent di Kimi esistono tre modi per richiamare le Skill:

**Metodo 1: usare il comando `/`**

Digita `/` nella casella di input per far comparire l'elenco delle Skill. Fai clic sul nome di una Skill per inserirla. Puoi anche digitare parole chiave dopo `/` per filtrare l'elenco.

**Metodo 2: usare il menu "➕"**

Fai clic sul pulsante **➕** accanto alla casella di input. Seleziona una Skill dal menu: il nome della Skill verrà inserito come testo nella casella di input.

<Frames
  src="./images/skills/加号-en.png"
  alt="Richiamare le skill con il menu più"
/>

**Metodo 3: lascia decidere a Kimi**

Basta descrivere ciò di cui hai bisogno. Kimi individuerà e attiverà automaticamente la Skill più adatta in base al contenuto del tuo compito.

### Esempio: usare le Skill per generare un report di analisi SEO

Supponiamo che tu sia un content manager e voglia analizzare le prestazioni SEO del tuo sito web:

1. Digita `/` nella casella di input, trova e seleziona la Skill `seo-analyzer`.
2. Prosegui inserendo: `Analizza le prestazioni SEO di https://help.com/zh-cn/help, elenca i problemi principali e i suggerimenti di ottimizzazione.`

<Frames
  src="./images/skills/SEO-en.png"
  alt="Analisi SEO"
/>

3. Dopo l'invio, Kimi cercherà, organizzerà e produrrà automaticamente un report strutturato seguendo il flusso di lavoro di analisi SEO.

Non devi spiegare a Kimi come svolgere l'analisi: il flusso di lavoro è già definito nella Skill.

## Scoprire e gestire le Skill

### Le scelte di Kimi

Kimi offre una serie di skill consigliate pronte all'uso, aggiungibili con un solo clic:

<Frames
  src="./images/skills/kimi-picks.png"
  alt="Skill consigliate"
/>

## Personalizzare le Skill

Se le skill consigliate da Kimi non soddisfano le tue esigenze, puoi creare skill personalizzate su misura per il tuo flusso di lavoro specifico.

**Quando conviene creare una skill personalizzata?**

- Hai un compito ricorrente da eseguire ripetutamente (ad esempio, report settimanali sui competitor).
- Vuoi che Kimi produca contenuti nel formato specifico della tua azienda.
- Hai un insieme di metodi di lavoro che vuoi Kimi segua direttamente.

Una buona skill dovrebbe fare una cosa sola e farla bene. Non cercare di concentrare tutte le esigenze in un'unica skill.

### Opzione 1: dai documenti alle skill

Se disponi già di modelli pronti, documenti standard o file di esempio, puoi caricarli direttamente e lasciare che Kimi li apprenda e generi la skill corrispondente.

1. Seleziona **Da documento Office a Skill** nel pannello **Skill**.
2. Fai clic o trascina i file nell'area di caricamento. Formati supportati: `docx`, `xlsx`, `pdf`, `pptx` e screenshot di documenti. Massimo 3 file per caricamento, ciascuno non superiore a 100 MB.

<Frames
  src="./images/skills/document.png"
  alt="Carica documenti per generare skill"
/>

3. Compila la descrizione della skill, indicando a Kimi cosa deve fare questa skill. Ad esempio: "Aiutami a organizzare i dati settimanali delle vendite seguendo lo stile e il formato di questo modello."
4. Fai clic su **Crea Skill**.

### Opzione 2: crea con Kimi

Se non hai documenti pronti, puoi descrivere le tue esigenze direttamente tramite una conversazione e Kimi ti guiderà passo dopo passo nella creazione della skill.

Digita `/skill-creator` nella casella di input, quindi descrivi quale Skill desideri creare. Kimi ti aiuterà a organizzare i requisiti in una Skill completa.

<Frames
  src="./images/skills/create-skill-en.png"
  alt="Creare le Skill tramite conversazione"
/>

### Gestire le Skill esistenti

Nel pannello **Skill**, passa alla scheda **Skill personalizzate** per modificare, aggiornare i documenti o eliminare le Skill che hai creato.

<Frames
  src="./images/skills/managing-skills.png"
  alt="Gestire le Skill personalizzate"
/>

<Callout type="info">
Le Skill sono supportate nella modalità Agent e in Kimi Claw. Le Skill con il suffisso `swarm` sono disponibili solo negli scenari Swarm (cluster di Agent) e non vengono mostrate in altri contesti.
</Callout>

## Scrivere descrizioni efficaci per le Skill

Kimi si basa sulle descrizioni delle Skill per stabilire "quando usare questa Skill." Più chiara è la descrizione, più accuratamente la Skill verrà attivata.

Una descrizione completa di una Skill dovrebbe includere:
- La funzione principale della Skill.
- Gli scenari per cui è adatta.
- Le parole chiave a cui risponde.
- Il riconoscimento di riferimenti indiretti al requisito.

<ComparisonBlock
  wrong={"Aiuta gli utenti a cercare e scoprire le Skill."}
  correct={"Aiuta gli utenti a cercare e scoprire le Skill. Da usare quando gli utenti vogliono esplicitamente trovare un certo tipo di Skill o descrivono un problema sperando di ricevere consigli su una Skill. Le parole chiave includono “Trova Skill”, “Cerca Skill”, “Esiste una Skill che può fare X?”, ecc."}
/>
