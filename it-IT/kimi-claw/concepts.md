---
title: "Concetti fondamentali e terminale"
slug: "concepts"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Concetti fondamentali e terminale - Kimi Help Center"
  description="Image: 截图30"
/>

# Concetti fondamentali e terminale

## Concetti chiave

| Concetto | Descrizione |
|---------|-------------|
| **Memory** | Il sistema di memoria a lungo termine di Kimi Claw. Conserva le tue preferenze, le tue abitudini e le informazioni importanti tra una conversazione e l'altra. |
| **Skills** | Moduli di competenze installabili dalla libreria ClawHub che conferiscono a Kimi Claw un'esperienza specifica per ogni ambito. |
| **HEARTBEAT** | Attività in background pianificate che si avviano a intervalli regolari, utili per promemoria ricorrenti, raccolta di dati e riepiloghi. |
| **Identity** | La definizione del ruolo di Kimi Claw: nome, professione, personalità. Completamente personalizzabile a tuo piacimento. |
| **Soul** | I tratti caratteriali fondamentali e i principi di comportamento che plasmano lo stile di interazione di Kimi Claw. |
| **Tools** | L'insieme delle capacità che Kimi Claw può attivare: ricerca sul web, gestione dei file, esecuzione di codice e molto altro. |
| **User** | La definizione della relazione tra te e Kimi Claw, che regola le modalità di interazione e la condivisione delle informazioni. |

## Terminale

<Frames
  src="./images/concepts/screenshot-30.png"
  alt="screenshot 30"
/>

Puoi aprire un'interfaccia a riga di comando dal web tramite **Impostazioni → Terminale** ed eseguire comandi per controllare direttamente Kimi Claw.

In alternativa, basta indicare a Kimi Claw quale comando eseguire usando un linguaggio naturale: lo eseguirà al posto tuo.

> Nota: il Terminale e i plugin condividono lo stesso canale di connessione. Il riavvio del gateway OpenClaw disconnette il Terminale.

## Riferimento dei comandi

### Sistema

| Comando | Descrizione |
|---------|-------------|
| `/help` | Mostra le informazioni di aiuto |
| `/status` | Visualizza lo stato attuale del sistema |
| `/ping` | Verifica se la connessione è attiva |
| `/cron` | Gestisci le attività pianificate |
| `/config` | Visualizza o modifica la configurazione |
| `/new` | Avvia una nuova conversazione (cancella il contesto attuale) |
| `/reset` | Reimposta Kimi Claw |
| `/compact` | Comprimi il contesto della conversazione attuale |
| `/stop` | Interrompi l'attività attualmente in esecuzione |

### Skills

| Comando | Descrizione |
|---------|-------------|
| `/skills` | Sfoglia, installa e gestisci le skills |

### Attività pianificate

| Comando | Descrizione |
|---------|-------------|
| `/cron` | Visualizza e gestisci la pianificazione delle attività |

### Memory

| Comando | Descrizione |
|---------|-------------|
| `/memory` | Visualizza e gestisci la memoria a lungo termine |

### Configurazione e debug

| Comando | Descrizione |
|---------|-------------|
| `/config` | Visualizza o modifica la configurazione del sistema |
| `/logs` | Visualizza i log di runtime |
| `/debug` | Attiva la modalità debug per una diagnostica dettagliata |
