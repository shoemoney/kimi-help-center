---
title: "Come funziona l'Estensione del browser Kimi"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Come funziona l'Estensione del browser Kimi - Centro assistenza Kimi"
  description="Scopri come l'Estensione del browser Kimi collega il tuo browser agli agenti IA in locale, abilitando navigazione web sicura, clic, screenshot e altro ancora."
  ogType="article"
/>

# Come funziona l'Estensione del browser Kimi

## Flusso di lavoro

L'Estensione del browser Kimi supporta due modalità d'uso — **chat nella barra laterale** e **controllo remoto tramite un Agent locale** — e funziona così:

1. **Barra laterale del browser**: fai clic sull'icona di Kimi nella barra degli strumenti per aprire la barra laterale, quindi accedi con un account Kimi con abbonamento per chattare direttamente
2. **Servizio Bridge locale**: un servizio locale viene eseguito sul tuo computer per ricevere le istruzioni dall'Agent
3. **Estensione del browser**: esegue azioni specifiche nel browser basandosi sul Chrome DevTools Protocol
4. **Isolamento di sicurezza**: tutta l'esecuzione avviene in locale: gli stati di accesso e il contenuto delle pagine web non lasciano mai il tuo dispositivo

<Frames
  src="./images/workflow.png"
  alt="flusso di lavoro"
/>

## Interfaccia dell'estensione

Fai clic sull'icona dell'Estensione del browser Kimi nella barra degli strumenti del browser per espandere la barra laterale e inviare un'attività.

<Frames
  src="./images/sidebar.png"
  alt="Kimi Browser Extension sidebar"
/>

## Funzionalità

| Funzionalità | Descrizione |
|---------|-------------|
| Navigazione web | Apre automaticamente gli URL indicati |
| Clic sugli elementi | Simula i clic su pulsanti, link e altri elementi della pagina |
| Compilazione dei moduli | Inserisce automaticamente testo e seleziona le opzioni |
| Screenshot delle pagine | Cattura la pagina attuale o un'area specifica |
| Estrazione dei contenuti | Legge il testo della pagina, le tabelle e altri dati strutturati |
| Persistenza della sessione di accesso | Utilizza gli stati di accesso esistenti salvati nel browser |

Casi d'uso:

- Confronto prezzi e-commerce: cerca automaticamente i prodotti e confronta i prezzi su più piattaforme
- Ricerca di informazioni: naviga in profondità nelle pagine web ed estrae informazioni strutturate
- Compilazione di moduli: compila automaticamente vari moduli online
- Inserimento dati: organizza e inserisce automaticamente i dati web in un formato specifico

Per altri casi d'uso, consulta il [sito ufficiale dell'Estensione del browser Kimi](https://www.kimi.com/features/webbridge).
