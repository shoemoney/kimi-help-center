---
title: "API-Fehlerbehebung"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="API-Fehlerbehebung - Kimi-Hilfecenter"
  description="Häufige Probleme und Lösungen für Entwickler, die die Kimi API verwenden."
/>

# API-Fehlerbehebung

<Callout type="info">
Häufige Probleme und Lösungen für Entwickler, die die Kimi API verwenden.
</Callout>

## Wie behebe ich einen 429-Fehler wegen rate limit?

Ein 429-Fehler bedeutet, dass Ihre Anfragefrequenz das rate limit des aktuellen Kontos überschritten hat. So beheben Sie das Problem:

- Implementieren Sie eine Retry-Strategie mit exponentiellem Backoff (warten Sie vor dem erneuten Versuch 1 s, 2 s, 4 s …).
- Steuern Sie die Anzahl gleichzeitiger Anfragen über einen Warteschlangenmechanismus.
- Erhöhen Sie Ihren kumulierten Aufladebetrag, um Ihre rate limit-Stufe anzuheben.
- Wenden Sie sich an das Vertriebsteam, wenn Sie eine höhere quota benötigen.

## Wie behebe ich einen 401-Authentication Error?

Ein 401-Fehler bedeutet, dass die Authentifizierung mit dem API Key fehlgeschlagen ist. Prüfen Sie Folgendes:

- Stellen Sie sicher, dass der API Key korrekt kopiert wurde (achten Sie auf Leerzeichen am Anfang oder Ende).
- Vergewissern Sie sich, dass der Request-Header das Format `Authorization: Bearer <your-api-key>` hat.
- Prüfen Sie in der Konsole, ob der API Key nicht gelöscht oder deaktiviert wurde.
- Achten Sie darauf, keinen Schlüssel von einer anderen Plattform zu verwenden (Kimi API Keys beginnen mit `sk-`).

<Callout type="warning">
**API Key-Format**: Kimi API Keys beginnen mit `sk-`. Stellen Sie sicher, dass Sie das richtige Schlüsselformat verwenden.
</Callout>

## Fallen für den Dateiupload Gebühren an?

Der Dateiupload selbst ist kostenlos. Wenn Sie eine hochgeladene Datei jedoch in einer Unterhaltung referenzieren, wird ihr Inhalt in tokens zerlegt und als Eingabe-tokens abgerechnet. Größere Dateien erzeugen mehr tokens.

## Wie behebe ich einen 403-Fehler wegen Insufficient Balance?

Ein 403-Fehler weist in der Regel auf ein unzureichendes Kontoguthaben hin. Laden Sie Ihr Guthaben in der Konsole auf — die Mittel stehen sofort zur Verfügung. Sie können auch die API zur Guthabenabfrage verwenden, um Ihr aktuelles Guthaben zu prüfen.

## Was tun, wenn die Antwort abgeschnitten ist?

Wenn die API-Antwort unvollständig oder abgeschnitten ist:

- Prüfen Sie, ob der Parameter `max_tokens` zu niedrig gesetzt ist, und erhöhen Sie ihn bei Bedarf.
- Sehen Sie sich das Feld `finish_reason` in der Antwort an: `length` bedeutet, dass die Ausgabe wegen des token-Limits abgeschnitten wurde; `stop` bedeutet, dass sie normal abgeschlossen wurde.
- Bei der Generierung langer Texte sollten Sie die Anfrage in Abschnitte aufteilen.

<Callout type="tip">
**`finish_reason` prüfen**: `length` = abgeschnitten, `stop` = normal abgeschlossen.
</Callout>

## Kann ich Bilder über die Datei-API hochladen?

Ja. Die Datei-Upload-API unterstützt Bilddateien. Nach dem Hochladen können Bilder in Unterhaltungen referenziert werden. Mit Vision-Modellen können Sie Bilder außerdem direkt in Nachrichten über eine URL oder Base64-Kodierung übergeben.

## Quellen für Web Search?

Die Web Search-Funktion der Kimi API ruft in Echtzeit öffentlich verfügbare Informationen aus dem Internet ab. Die Ergebnisse stammen von Webseiten, die von großen Suchmaschinen indexiert wurden. Jeder Aufruf von Web Search verursacht eine zusätzliche Gebühr von $0.004.

## Gibt es einen Zusammenhang zwischen Kimi-Mitgliedschaft und API concurrency?

<Callout type="warning">
**Kimi-Mitgliedschaftspläne** (wie Allegretto) und die **API** sind getrennte Abrechnungssysteme. Die in Mitgliedschaftsplänen enthaltene Agent-Parallelität gilt nur für Kimi-Endnutzerprodukte und steht in keinem Zusammenhang mit API rate limits. API concurrency-Limits richten sich nach der kumulierten Aufladestufe Ihres Kontos.
</Callout>

## Unterschied zwischen API und Kimi-Web-App

| Aspekt | Kimi-Web-App | Kimi API |
| --- | --- | --- |
| **Zielgruppe** | Dialogprodukt für Endnutzer | Integrationsschnittstelle für Entwickler |
| **Zugriff** | Browserbasiert | Programmatische API-Aufrufe |
| **Abrechnung** | Mitgliedschafts-/credit-System | Nutzungsabhängige Abrechnung nach tokens |
| **Konto** | Gemeinsames Login | Gemeinsames Login |
| **Credits** | Nicht zwischen Systemen übertragbar | Nicht zwischen Systemen übertragbar |

## Sind PPT-Erstellung und Deep Research über die API verfügbar?

<Callout type="warning">
**PPT-Erstellung** und **Deep Research** sind **noch nicht über die API verfügbar**. Diese Funktionen sind derzeit nur über das Kimi-Endnutzerprodukt zugänglich. Aktuelle Informationen finden Sie in den Plattformankündigungen.
</Callout>

## Wird On-Premises-Bereitstellung unterstützt?

Die Kimi API bietet derzeit ausschließlich cloudbasierte API-Dienste und **unterstützt keine private On-Premises-Bereitstellung**. Wenden Sie sich bei Anforderungen an eine private Bereitstellung über [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) an das Vertriebsteam.

## Kann ich die Kimi API von außerhalb Chinas aufrufen?

Die Kimi API ist international über `api.moonshot.ai` verfügbar. Wenn Verbindungsprobleme auftreten, wenden Sie sich an das Vertriebsteam, um die beste Lösung für Ihre Region zu besprechen.
