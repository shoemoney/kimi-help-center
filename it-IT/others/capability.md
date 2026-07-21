---
title: "Cosa può fare Kimi?"
slug: "capability"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Cosa può fare Kimi? - Centro assistenza Kimi"
  description="Domande frequenti sulle capacità di Kimi: ricerca online e uso del browser, controllo del desktop del computer (Kimi Computer Use), generazione di immagini/video/voce, scrittura di codice, creazione di siti web, realizzazione di PPT e fogli di calcolo, elaborazione di file, memoria, supporto multilingue e lunghezza del contesto."
/>

# Cosa può fare Kimi?

## Kimi può cercare su internet e navigare nelle pagine web?

Sì. Kimi decide automaticamente se una domanda richiede l’accesso online e usa gli strumenti di ricerca integrati per recuperare informazioni. In **Kimi Code** e **Kimi Work**, con **WebBridge**, Kimi può anche usare un browser come farebbe una persona: navigare, fare clic, scorrere, estrarre dati e completare attività web in più passaggi.

## Kimi può controllare il desktop del mio computer?

Nelle chat normali e nelle attività Agent, Kimi **non ha l’autorizzazione** a controllare il tuo computer. **In Kimi Work puoi scegliere tu di abilitarla**.

In Kimi Work, con **Kimi Computer Use**, Kimi può fare clic, digitare, scorrere, trascinare e leggere per te il contenuto dell’interfaccia di un’app o gli screenshot sul tuo desktop. Per esempio: “Fai clic su X per me”, “Inserisci … in Y”, “Controlla lo stato attuale dell’app Z” oppure “Elenca le app attualmente aperte”. Tutte le operazioni vengono eseguite in background, quindi Kimi non prenderà il controllo del mouse né passerà alla finestra in primo piano.

**Come installarlo**: in Kimi Work, fai clic su “Plugin”, seleziona “Kimi Computer Use” e fai clic su Installa. Puoi anche inviare la seguente istruzione in modalità “Work” per installarlo:

<CodePreview
  files={[
    {
      name: "install.txt",
      language: "text",
      content: "Installa kimi computer-use per me: curl -fsSL https://cdn.kimi.com/kimi-computer-use/latest/setup_macos.sh | bash",
    },
  ]}
/>

## Kimi può generare immagini, video e voce?

Sì. Kimi può generare immagini, video e audio tramite plugin di progettazione creativa. Prima dell’uso, installa il plugin corrispondente dal marketplace dei plugin:

- **Generazione di immagini**: genera immagini di alta qualità a partire da descrizioni testuali. Supporta risoluzioni 1K/2K/4K, più proporzioni, sfondi opachi o trasparenti opzionali e output JPG / PNG.
- **Generazione di video**: genera video di alta qualità a partire da descrizioni testuali, con immagini di riferimento opzionali. Supporta proporzioni come 16:9, 4:3, 1:1, 3:4, 9:16 e 21:9, con durate da 4 a 12 secondi.
- **Generazione audio**: supporta la sintesi vocale da testo con più voci in mandarino, oppure la generazione di effetti sonori da descrizioni in inglese, con durate da 0,5 a 22 secondi.

## Kimi può scrivere codice, creare siti web, PPT e fogli di calcolo?

Sì. Come agente AI in grado di eseguire attività in autonomia, Kimi supporta la creazione di siti web, la realizzazione di PPT, l’elaborazione di documenti e fogli di calcolo, Deep Research e molto altro.

## Quali file può elaborare Kimi?

Kimi supporta formati comuni come PDF, Word, Excel, PPT, immagini, TXT e video. **Ogni file deve avere una dimensione massima di 100 MB e puoi caricare fino a 50 file alla volta**.

## Kimi ha una memoria?

Sì. [Memoria](/features/memory-space) salva automaticamente le informazioni chiave, così Kimi può capirti meglio. Se devi tenere separati memoria e materiali per progetto, usa la funzionalità [Progetto](/features/project).

## Kimi supporta più lingue?

Sì. Puoi cambiare la lingua dell’interfaccia in **“Impostazioni” → “Generali” → “Lingua”**. Le lingue attualmente supportate includono tedesco, russo, francese, cinese tradizionale, coreano, portoghese, thailandese, turco, spagnolo, italiano, indonesiano, inglese e vietnamita. K2.6 e K3 supportano entrambi conversazioni, recupero di informazioni e creazione in più lingue.

## Quanti contenuti può elaborare Kimi in una volta?

K2.6 ha un contesto per singolo turno di circa **128K token (all’incirca 50.000–60.000 caratteri cinesi)**. Per documenti molto lunghi, **K3 offre un contesto da 1 milione di token** (richiede il livello di abbonamento più alto). Per i dettagli, consulta [Cosa devo fare quando una chat supera i 200.000 caratteri cinesi?](/others/chat-issues).
