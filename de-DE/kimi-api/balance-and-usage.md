---
title: "Guthaben & Nutzung"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Guthaben & Nutzung - Kimi Hilfecenter"
  description="Die Kimi API bietet mehrere Möglichkeiten, Ihr Kontoguthaben und Ihre Nutzungsdetails einzusehen, damit Sie Verbrauch und Kosten im Blick behalten."
/>

# Guthaben & Nutzung

Die Kimi API bietet mehrere Möglichkeiten, Ihr Kontoguthaben und Ihre Nutzungsdetails einzusehen, damit Sie Verbrauch und Kosten im Blick behalten.

## Konsolen-Dashboard

Melden Sie sich unter [platform.moonshot.ai](https://platform.moonshot.ai) an und rufen Sie in der Konsole die Seite **fee-detail** (Abrechnungsdetails) auf, um Folgendes anzuzeigen:

- Aktuelles Kontoguthaben
- Tägliche Nutzungsaufschlüsselung
- Nutzung und Kosten pro Modell
- Historische Ausgabentrends

<Callout type="info">
Die tägliche Abrechnung wird **bis 7:00 Uhr am Folgetag** aktualisiert. Echtzeit-Nutzungsdaten können leicht verzögert sein.
</Callout>

> **Hinweis**: Die tägliche Abrechnung wird **bis 7:00 Uhr am Folgetag** aktualisiert. Echtzeit-Nutzungsdaten können leicht verzögert sein.

## Token-Schätzungs-API

Bevor Sie eine Anfrage senden, können Sie die Token Estimation API verwenden, um abzuschätzen, wie viele Token der Aufruf verbrauchen wird – nützlich zur Kostenkontrolle.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Übergeben Sie dasselbe `messages`-Format wie bei einer Chat-Completion-Anfrage, und die API gibt die geschätzte Token-Anzahl zurück.

## Guthaben-Abfrage-API

Fragen Sie Ihr aktuelles Kontoguthaben direkt über die API ab:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Geben Sie Ihren API Key im Anfrage-Header an, um Ihr verfügbares Guthaben abzurufen.

## Tipps zur Nutzungsüberwachung

<Callout type="tip">
**Bewährte Vorgehensweisen**:
- Prüfen Sie die Seite „fee-detail“ regelmäßig, um Ausgabentrends zu verfolgen
- Binden Sie die Guthaben-Abfrage-API ein und richten Sie Schwellenwerte für Guthaben-Benachrichtigungen ein
- Nutzen Sie vor kritischen Aufrufen die Token Estimation API, um die Kosten abzuschätzen
</Callout>
