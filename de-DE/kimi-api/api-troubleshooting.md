---
title: "API-Fehlerbehebung"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="API-Fehlerbehebung - Kimi Help Center"
  description="Häufige Probleme und Lösungen für Entwickler, die die Kimi API nutzen."
/>

# API-Fehlerbehebung

<Callout type="info">
Häufige Probleme und Lösungen für Entwickler, die die Kimi API nutzen.
</Callout>

## Wie gehe ich mit dem 429-Fehler bei rate limit um?

Ein 429-Fehler bedeutet, dass Ihre Anfragefrequenz das aktuelle rate limit Ihres Kontos überschritten hat. So lösen Sie das Problem:

- Implementieren Sie eine Wiederholungsstrategie mit exponentiellem Backoff (warten Sie 1 s, 2 s, 4 s … vor jedem neuen Versuch).
- Steuern Sie die Anzahl gleichzeitiger Anfragen über einen Warteschlangenmechanismus.
- Erhöhen Sie Ihren kumulierten Aufladebetrag, um in eine höhere rate-limit-Stufe aufzusteigen.
- Wenden Sie sich an das Vertriebsteam, wenn Sie eine höhere quota benötigen.

## Wie gehe ich mit dem 401-Authentifizierungsfehler um?

Ein 401-Fehler bedeutet, dass die Authentifizierung des API Key fehlgeschlagen ist. Prüfen Sie Folgendes:

- Stellen Sie sicher, dass der API Key korrekt kopiert wurde (achten Sie auf führende oder nachfolgende Leerzeichen).
- Überprüfen Sie, dass das Format des Anfrage-Headers `Authorization: Bearer <your-api-key>` lautet.
- Vergewissern Sie sich, dass der API Key nicht gelöscht oder deaktiviert wurde – prüfen Sie dies in der Konsole.
- Achten Sie darauf, keinen Schlüssel einer anderen Plattform zu verwenden (Kimi API Keys beginnen mit `sk-`).

<Callout type="warning">
**API-Key-Format**: Kimi API Keys beginnen mit `sk-`. Stellen Sie sicher, dass Sie das richtige Schlüsselformat verwenden.
</Callout>

## Fallen für das Hochladen von Dateien Kosten an?

Das Hochladen von Dateien selbst ist kostenlos. Sobald Sie jedoch eine hochgeladene Datei in einer Konversation referenzieren, wird ihr Inhalt in Tokens umgewandelt und als Input-Tokens abgerechnet. Größere Dateien erzeugen mehr Tokens.

## Wie gehe ich mit dem 403-Fehler wegen unzureichendem Guthaben um?

Ein 403-Fehler weist in der Regel auf ein unzureichendes Kontoguthaben (Insufficient Balance) hin. Laden Sie in der Konsole auf – die Mittel stehen sofort zur Verfügung. Sie können auch die API zur Guthabenabfrage nutzen, um Ihr aktuelles Guthaben zu prüfen.

## Was tun, wenn die Antwort abgeschnitten ist?

Wenn die API-Antwort unvollständig oder abgeschnitten ist:

- Prüfen Sie, ob der Parameter `max_tokens` zu niedrig eingestellt ist, und erhöhen Sie ihn bei Bedarf.
- Sehen Sie sich das Feld `finish_reason` in der Antwort an: `length` bedeutet, dass die Ausgabe aufgrund des Token-Limits abgeschnitten wurde; `stop` bedeutet einen normalen Abschluss.
- Erwägen Sie bei der Erzeugung langer Texte, die Anfrage in Abschnitte zu unterteilen.

<Callout type="tip">
**`finish_reason` prüfen**: `length` = abgeschnitten, `stop` = normal abgeschlossen.
</Callout>

## Kann ich über die Datei-API Bilder hochladen?

Ja. Die API zum Hochladen von Dateien unterstützt Bilddateien. Nach dem Hochladen können Bilder in Konversationen referenziert werden. Mit Vision-Modellen können Sie Bilder auch direkt in Nachrichten per URL oder Base64-Kodierung übergeben.

## Quellen für Web Search?

Die Web-Search-Funktion der Kimi API ruft öffentlich verfügbare Informationen in Echtzeit aus dem Internet ab. Die Ergebnisse stammen von Webseiten, die von den großen Suchmaschinen indexiert werden. Jede Web-Search-Anfrage verursacht eine zusätzliche Gebühr von 0,004 $.

## Gibt es einen Zusammenhang zwischen der Kimi-Mitgliedschaft und der API-concurrency?

<Callout type="warning">
**Kimi-Mitgliedschaftspläne** (wie Allegretto) und die **API** sind getrennte Abrechnungssysteme. Die in den Mitgliedschaftsplänen enthaltene Agent-Parallelität gilt nur für die Endkundenprodukte von Kimi und steht in keinem Zusammenhang mit den rate limits der API. Die concurrency-Limits der API richten sich nach der kumulierten Aufladestufe Ihres Kontos.
</Callout>

## Unterschied zwischen API und Kimi-Web-App

| Aspekt | Kimi-Web-App | Kimi API |
| --- | --- | --- |
| **Zielgruppe** | Konversationsprodukt für Endkunden | Integrationsschnittstelle für Entwickler |
| **Zugang** | Browserbasiert | Programmatische API-Aufrufe |
| **Abrechnung** | Mitgliedschafts-/quota-System | Pay-as-you-go nach Tokens |
| **Konto** | Gemeinsamer Login | Gemeinsamer Login |
| **Credits** | Nicht zwischen Systemen übertragbar | Nicht zwischen Systemen übertragbar |

## Sind PPT-Generierung und Deep Research über die API verfügbar?

<Callout type="warning">
**PPT-Generierung** und **Deep Research** sind **noch nicht über die API verfügbar**. Diese Funktionen sind derzeit nur über das Kimi-Endkundenprodukt zugänglich. Verfolgen Sie die Plattform-Ankündigungen für Updates.
</Callout>

## Wird eine On-Premises-Bereitstellung unterstützt?

Die Kimi API bietet derzeit ausschließlich cloudbasierte API-Dienste an und **unterstützt keine private On-Premises-Bereitstellung**. Bei Bedarf an einer privaten Bereitstellung wenden Sie sich über [platform.moonshot.ai/contact-sales](https://platform.moonshot.ai/contact-sales) an das Vertriebsteam.

## Kann ich die Kimi API von außerhalb Chinas aufrufen?

Die Kimi API ist international über `api.moonshot.ai` verfügbar. Falls Verbindungsprobleme auftreten, wenden Sie sich an das Vertriebsteam, um die beste Lösung für Ihre Region zu besprechen.
