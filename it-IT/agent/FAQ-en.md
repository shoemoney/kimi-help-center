---
title: "FAQ sulla creazione delle skill"
slug: "create-custom-skills-faq"
order: 9
extract_headings: true
preview: false
---

<SeoMeta
  title="FAQ sulla creazione delle skill - Centro assistenza Kimi"
  description="Domande frequenti sulla creazione delle Kimi Skills, tra cui caricamento di documenti, utilizzo dei token, limiti di frequenza, denominazione delle skill e gestione degli errori di creazione."
/>

# Domande frequenti (FAQ) sulle skill

## Perché il pulsante "Crea skill" è disattivato?

Questo può accadere per i seguenti motivi:
1. Il file caricato o la descrizione della skill è incompleta.
2. Il formato o il numero dei file non soddisfa i requisiti.
3. Il sistema ha rilevato che la quota del tuo account è esaurita.

## Come la creazione delle Skills consuma la quota?

La creazione di una skill consuma i tuoi **token**, che possono provenire dalle ricerche ricevute in omaggio o dalla quota del tuo abbonamento ufficiale.

**Ordine di addebito**:
1. Hanno priorità le ricerche ricevute in omaggio.
2. Se le ricerche in omaggio non sono disponibili, viene utilizzata la quota dell'abbonamento.

<Callout type="info">
Se il processo di creazione fallisce, non verrà addebitato alcun token. I token vengono consumati solo a creazione completata con successo.
</Callout>

## Ci sono limiti al numero o alla frequenza delle creazioni?

Sì, per garantire la stabilità del sistema e un utilizzo equo, sono previsti i seguenti limiti:

1. **Limite di concorrenza**: possono essere eseguite in parallelo un massimo di **3 attività** (In creazione + Non riuscite). Se raggiungi questo limite, riceverai un messaggio per riprovare dopo qualche tempo.
2. **Limite giornaliero**: ogni utente può eseguire un massimo di **10 conversioni "Da documento Office a skill"** al giorno (inclusi i nuovi tentativi). Il superamento di questo limite mostrerà una notifica toast.

## Cosa devo fare se la creazione di una skill fallisce?

* Puoi scegliere di **Riprovare** o **Eliminare** la scheda della skill non riuscita.
* I tentativi falliti non consumano quota.
* La descrizione originale della skill verrà mostrata sulla scheda non riuscita per aiutarti a distinguere le diverse attività.

## Quali requisiti di denominazione si applicano alle nuove skill?

I nomi delle nuove skill devono rispettare le seguenti regole:
1. **Non possono duplicare skill esistenti**: incluse le skill ufficiali e qualsiasi skill che hai già aggiunto.
   - Ad esempio, se hai le skill A, B e C, la creazione di una nuova skill chiamata A richiede di rinominarla per evitare conflitti.
2. **Lunghezza dei caratteri**: massimo 25 caratteri.
3. **Caratteri consentiti**: solo lettere minuscole dell'alfabeto inglese, trattini `-` e trattini bassi `_`.

<Callout type="info">
Rispettare queste regole garantisce che la tua skill venga aggiunta correttamente ed evita confusione con le skill esistenti.
</Callout>

## Cosa succede se un nome di skill viene segnalato come "già in uso"?

Quando crei una nuova skill, il sistema verifica se il nome inserito è in conflitto con skill esistenti, incluse le skill ufficiali e quelle che hai già aggiunto.
Se viene rilevato un conflitto, comparirà un popup che dice:
> Il nome della skill `/skill-name` è già in uso. Rinominala per evitare confusione.

A questo punto, puoi inserire un nuovo nome per la skill e fare clic su **Rinomina e aggiungi**, oppure fare clic su **Annulla** per rinunciare alla creazione.

## Cosa succede se non risolvo un conflitto di denominazione?

Il sistema non consente di aggiungere skill con nomi duplicati. Se non risolvi il conflitto di denominazione, non potrai completare la creazione della skill.
