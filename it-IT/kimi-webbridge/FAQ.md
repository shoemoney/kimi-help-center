---
title: "FAQ"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="FAQ su Kimi WebBridge - Centro assistenza Kimi"
  description="Domande frequenti su installazione, connessione e utilizzo di Kimi WebBridge con più browser e Local Agent."
  ogType="article"
/>

# FAQ

## Installazione e configurazione

### Compare il messaggio "Cannot add apps from this website" durante l'installazione dell'estensione?

Assicurati di installare dallo store ufficiale (Chrome Web Store o Edge Add-ons). Se non riesci ad accedere allo store, utilizza il metodo di installazione manuale indicato sul sito ufficiale.

### Non succede nulla dopo aver eseguito il comando di connessione?

Verifica la connessione a Internet. Se il problema persiste, prova a riavviare Kimi Claw Desktop ed esegui di nuovo il comando.

### Posso usarlo su più computer?

Sì, ma ogni computer deve essere installato e configurato separatamente.

### Non riesco a trovare Kimi Claw Desktop?

Kimi Claw Desktop è un Kimi Claw distribuito sul tuo computer locale. Apri Kimi Desktop, trova Kimi Claw nella barra laterale sinistra, crea un nuovo Claw e seleziona "Distribuisci sul mio computer".

## Connessione e utilizzo

### Lo stato dell'estensione mostra "Disconnesso"?

Verifica che l'estensione del browser Kimi WebBridge sia installata correttamente, quindi segui i passaggi relativi al tuo metodo di configurazione:

- **Kimi Desktop**: riavvia Kimi Desktop e riprova

- **Altri Local Agent**: invia di nuovo il seguente comando nel tuo Agent, poi riavvia l'Agent al termine dell'esecuzione:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### Su Windows, installando WebBridge, errore: Installazione non riuscita

Kimi WebBridge supporta il sistema operativo Windows e il comando di installazione può essere eseguito in un ambiente Linux:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### Dopo l'installazione WebBridge mostra un avviso di compatibilità con Chrome. Cosa significa?

Se WebBridge riesce ad aprire le pagine normalmente, ma azioni come `snapshot`, `evaluate`, `screenshot` o `click` continuano a fallire, la causa più frequente è **un conflitto con altre estensioni del browser**.

Questo è particolarmente comune con strumenti di scraping, estensioni di assistenza ai siti web, estensioni di registrazione dello schermo ed estensioni di assistenti AI.

Ti consigliamo i seguenti passaggi per risolvere il problema:

1. Apri la pagina di gestione delle estensioni del tuo browser
2. Disattiva temporaneamente le altre estensioni
3. Mantieni attivo solo Kimi WebBridge
4. Riavvia il browser e riprova
5. Se WebBridge funziona correttamente, riattiva le altre estensioni una alla volta per individuare quella in conflitto


### WebBridge può compromettere le mie informazioni di accesso?

No. Tutta l'esecuzione avviene localmente sul tuo dispositivo: gli stati di accesso e i contenuti delle pagine web non lasciano mai la tua macchina. L'Agent può accedere solo ai risultati delle operazioni che autorizzi.

### Perché le operazioni falliscono?

Strutture di pagina complesse o caricamenti dinamici possono causare il fallimento delle operazioni. Prova a semplificare le tue istruzioni, oppure chiedi all'Agent di acquisire prima uno screenshot per confermare lo stato della pagina prima dell'esecuzione.

### Quali browser sono supportati?

Attualmente sono supportati Chrome ed Edge. Per la migliore esperienza ti consigliamo di utilizzare la versione più recente.

## Utilizzo con altri agent

### Quali altri Agent sono supportati?

WebBridge supporta tutti i Local Agent, tra cui Claude Code, Codex, Cursor, Kimi Code, Hermers Claw e altri.

### La configurazione è uguale per i diversi Agent?

Il comando di configurazione è lo stesso per tutti: basta eseguire un singolo comando curl per l'installazione. Per i dettagli, consulta la configurazione delle Skill di ciascun Agent.
