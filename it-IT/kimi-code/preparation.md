---
title: "Prepararsi"
slug: "preparation"
order: 0
extract_headings: false
preview: true
preview_content: "Le nozioni essenziali da conoscere prima di usare Kimi Code: terminali, PowerShell, CLI e aspetti di sicurezza."
---

<SeoMeta
  title="Prepararsi all’uso di Kimi Code - Centro assistenza Kimi"
  description="Scopri le basi di terminali, PowerShell e CLI, e come usare Kimi Code CLI in modo sicuro per lo sviluppo."
/>

# Prepararsi

Prima di usare Kimi Code, è utile conoscere alcuni concetti di base. Ti aiuteranno a installare e utilizzare Kimi Code con più facilità.

## Che cos’è un terminale?

Un **terminale** è una finestra in cui controlli il computer digitando comandi testuali.

Puoi immaginarlo come un “gestore di file testuale”: nel terminale, invece di fare clic sulle icone con il mouse, digiti comandi come `ls`, `cd` e `mkdir` per visualizzare il contenuto delle cartelle, spostarti tra le directory, creare file e altro ancora.

<Frames
  src="./images/preparation/preparation-01.png"
  alt="Illustrazione del terminale"
/>

### Come aprire un terminale

| Sistema operativo | Come aprirlo |
|---------|---------|
| **macOS** | Premi `Cmd + Space`, inserisci "Terminale" o "终端", quindi premi Enter |
| **Windows** | Premi `Win + R`, inserisci `powershell` o `wt`;<br>oppure cerca "PowerShell"/"Terminale" nel menu Start |
| **Linux** | Premi `Ctrl + Alt + T`, oppure cerca "Terminale" nel menu delle applicazioni |

### Come verificare il sistema operativo

- **macOS**: fai clic sull’icona Apple nell’angolo in alto a sinistra dello schermo → "Informazioni su questo Mac"
- **Windows**: premi `Win + Pause/Break`, oppure fai clic con il tasto destro su "Questo PC" → "Proprietà"
- **Linux**: esegui `uname -a` o `cat /etc/os-release` nel terminale

## Che cos’è PowerShell?

<Frames
  src="./images/preparation/preparation-02.png"
  alt="Illustrazione di PowerShell"
/>

**PowerShell** è uno strumento terminale molto usato su Windows. È più potente del Prompt dei comandi standard (CMD). Su Windows, Kimi Code CLI deve essere installato e utilizzato in PowerShell.

Windows offre due diversi strumenti a “riga di comando”. Non confonderli:

| Strumento | Descrizione | Consigliato? |
|-----|------|---------|
| **CMD (Prompt dei comandi)** | Lo strumento a riga di comando più basilare di Windows | ❌ Non consigliato |
| **PowerShell** | Uno strumento a riga di comando più moderno e potente | ✅ Consigliato |

> **Suggerimento**: il comando di installazione di Kimi Code CLI deve essere eseguito in PowerShell. In CMD potrebbe non funzionare correttamente.

## Directory di lavoro

Quando Kimi Code CLI si avvia, usa la cartella corrente come **directory di lavoro**. Può leggere e modificare solo i file all’interno di quella directory.

**Prima di iniziare, verifica il percorso corrente nel terminale**:

- Il prompt del terminale mostra di solito la directory corrente, ad esempio `~/projects/my-app$`
- Inserisci `pwd` (macOS/Linux) o `cd` (Windows) per visualizzare il percorso completo
- Usa `cd <folder-name>` per entrare nella directory del progetto di destinazione, quindi esegui `kimi`

> **Esempio**: supponiamo che il tuo progetto si trovi in `~/Documents/my-project`. Avvialo così:
> 1. Apri il terminale
> 2. Inserisci `cd ~/Documents/my-project`
> 3. Inserisci `kimi` per avviare

## Come eseguire i comandi

<Frames
  src="./images/preparation/preparation-03.png"
  alt="Illustrazione dell’esecuzione dei comandi"
/>

Eseguire comandi in un terminale o in PowerShell è semplice:

1. **Copia il comando**: copia il testo del comando dalla documentazione
   - macOS/Linux: `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash`
   - Windows: `irm https://code.kimi.com/kimi-code/install.ps1 | iex`
2. **Incollalo nel terminale**: fai clic con il tasto destro nella finestra del terminale, oppure premi `Cmd/Ctrl + V` per incollare
3. **Premi Enter**: premi il tasto `Enter` per eseguire il comando
4. **Attendi il completamento**: il terminale mostrerà il processo di esecuzione e il risultato

> **Nota**: in un terminale, `Ctrl+C` di solito **interrompe il comando corrente**; non copia il testo. Per copiare, usa `Cmd/Ctrl + Shift + C`; per incollare, usa `Cmd/Ctrl + Shift + V`; in alternativa, usa il menu del tasto destro.

> **Suggerimento**: se durante l’esecuzione di un comando ti viene chiesto di inserire una password, il terminale non mostrerà alcun carattere. È un normale meccanismo di sicurezza. Digita semplicemente la password e premi Enter.

## Che cos’è la CLI?

<Frames
  src="./images/preparation/preparation-04.png"
  alt="Illustrazione del terminale"
/>

**CLI** sta per **C**ommand-**L**ine **I**nterface, cioè interfaccia a riga di comando. Significa usare uno strumento digitando comandi testuali invece di fare clic su pulsanti in un’interfaccia grafica.

Kimi Code CLI è uno strumento a riga di comando: inserisci `kimi` nel terminale per avviarlo, quindi interagisci con l’AI tramite comandi testuali affinché ti aiuti a leggere codice, modificare file, eseguire comandi e altro ancora.

## Ambiente di rete

Per usare Kimi Code devi poter accedere ai server Kimi. Se il tuo ambiente di rete presenta una delle seguenti restrizioni, potresti dover modificare le impostazioni:

- **Rete aziendale/scolastica**: alcuni ambienti intranet possono limitare l’accesso alle API esterne. Se usi un proxy, puoi impostarne l’indirizzo nella configurazione.
- **VPN/proxy**: se usi un proxy globale, assicurati che non intercetti né interferisca con le richieste verso `api.kimi.com` o `api.moonshot.cn`.
- **Firewall**: verifica che il firewall del sistema o del router non blocchi l’accesso alla rete dal programma del terminale.

## Considerazioni sulla sicurezza

Kimi Code CLI è un potente agente AI. Può:

- **Leggere** il contenuto dei file sul tuo computer
- **Modificare** il codice e i file di configurazione
- **Eseguire** comandi Shell, ad esempio installare dipendenze o avviare test

**Quando lo usi, tieni presente quanto segue**:

- **Non avviarlo in directory sensibili**: evita di eseguire Kimi Code CLI in directory che contengono password, chiavi o file personali privati.
- **Controlla con attenzione le azioni**: Kimi Code chiederà la tua conferma prima di modificare file o eseguire comandi. Non fare clic su “Accetto” per abitudine.
- **Comprendi prima di procedere**: se non sei sicuro dell’impatto di un’azione, chiedi a Kimi Code di spiegare esattamente cosa farà prima di decidere se continuare.
- **Esegui il backup del codice importante**: prima di usare Kimi Code su un progetto importante, consigliamo di salvare il codice in un sistema di controllo versione, come Git, così potrai tornare indietro in qualsiasi momento.

> **Consiglio**: la prima volta, prova Kimi Code CLI in un progetto di test o in una copia del tuo progetto. Quando avrai preso confidenza con il suo funzionamento, usalo nei progetti di produzione.
