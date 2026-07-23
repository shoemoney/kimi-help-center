---
title: "Guthaben & Nutzung"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Guthaben & Nutzung - Kimi Help Center"
  description="Kimi API bietet mehrere Möglichkeiten, Ihr Kontoguthaben und Ihre Nutzungsdetails einzusehen, damit Sie Verbrauch und Kosten im Blick behalten."
/>

# Guthaben & Nutzung

Kimi API bietet mehrere Möglichkeiten, Ihr Kontoguthaben und Ihre Nutzungsdetails einzusehen, damit Sie Verbrauch und Kosten im Blick behalten.

## Konsolen-Dashboard

Melden Sie sich bei [platform.kimi.ai](https://platform.kimi.ai) an und öffnen Sie in der Konsole die Seite **fee-detail** (Abrechnungsdetails), um Folgendes einzusehen:

- Aktuelles Kontoguthaben
- Tägliche Nutzungsaufschlüsselung
- Nutzung und Kosten je Modell
- Historische Ausgabentrends

<Callout type="info">
Die tägliche Abrechnung wird bis **7:00 Uhr am Folgetag** aktualisiert. Echtzeit-Nutzungsdaten können leicht verzögert sein.
</Callout>

> **Hinweis**: Die tägliche Abrechnung wird bis **7:00 Uhr am Folgetag** aktualisiert. Echtzeit-Nutzungsdaten können leicht verzögert sein.

## Token Estimation API

Bevor Sie eine Anfrage senden, können Sie mit der Token Estimation API abschätzen, wie viele token der Aufruf verbraucht — hilfreich für die Kostenkontrolle.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Übergeben Sie dasselbe `messages`-Format wie bei einer Chat Completion-Anfrage; die API gibt daraufhin die geschätzte token-Anzahl zurück.

## API zur Guthabenabfrage

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

Fügen Sie Ihren API-Key in den Anfrage-Header ein, um Ihr verfügbares Guthaben abzurufen.

## Tipps zur Nutzungsüberwachung

<Callout type="tip">
**Empfehlungen**:
- Prüfen Sie die Seite **fee-detail** regelmäßig, um die Kostenentwicklung im Blick zu behalten
- Integrieren Sie die API zur Guthabenabfrage und legen Sie Schwellenwerte für Guthabenwarnungen fest
- Nutzen Sie vor kritischen Aufrufen die Token Estimation API, um die Kosten abzuschätzen
</Callout>
