---
title: "Come funziona Kimi WebBridge"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Come funziona Kimi WebBridge - Centro assistenza Kimi"
  description="Scopri come Kimi WebBridge collega il tuo browser agli AI Agent in locale, abilitando navigazione web sicura, clic, screenshot e altro ancora."
  ogType="article"
/>

# Come funziona Kimi WebBridge

## Flusso di lavoro

Kimi WebBridge funziona così:

1. **Servizio Bridge locale**: un servizio locale viene eseguito sul tuo computer per ricevere le istruzioni dall'Agent
2. **Estensione del browser**: esegue azioni specifiche nel browser basandosi sul Chrome DevTools Protocol
3. **Isolamento di sicurezza**: tutta l'esecuzione avviene in locale: gli stati di accesso e il contenuto delle pagine web non lasciano mai il tuo dispositivo

<Frames
  src="./images/workflow.png"
  alt="flusso di lavoro"
/>

## Interfaccia dell'estensione

Fai clic sull'icona di WebBridge nella barra degli strumenti del browser per verificare lo stato attuale della connessione:

**Connesso**: WebBridge funziona correttamente e può collaborare con l'Agent.

**Disconnesso**: controlla la configurazione o esegui di nuovo il comando di connessione.

<Frames
  src="./images/connection.png"
  alt="Connessione WebBridge"
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

Per altri casi d'uso, consulta il [sito ufficiale di Kimi WebBridge](https://www.kimi.com/features/webbridge).
