---
title: "Rate Limits"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Rate Limits - Kimi Hilfecenter"
  description="Die Kimi API erzwingt rate limits für Anfragehäufigkeit und concurrency, um die Stabilität der Plattform und eine faire Nutzung zu gewährleisten. Die rate-limit-Stufen richten sich nach dem..."
/>

# Rate Limits

Die Kimi API erzwingt rate limit（Ratenbegrenzung）s für Anfragehäufigkeit und concurrency, um die Stabilität der Plattform und eine faire Nutzung zu gewährleisten. Die rate-limit-Stufen richten sich nach dem kumulierten Aufladebetrag Ihres Kontos.

## Rate-limit-Stufen

Die rate limits der API sind nach dem **kumulierten Aufladebetrag Ihres Kontos** gestaffelt – je mehr Sie aufgeladen haben, desto höher fallen Ihre verfügbaren rate limits aus. Die konkreten Stufenschwellen sowie die zugehörigen Grenzwerte für RPM (Anfragen pro Minute) und TPM (token pro Minute) finden Sie in der Konsole unter [platform.kimi.ai](https://platform.kimi.ai).

## Aktuelle Limits prüfen?

- Melden Sie sich in der API-Konsole an, um Ihre aktuelle rate-limit-Stufe einzusehen.
- Auch die Antwort-Header der API enthalten Informationen zu den rate limits:
  - `X-RateLimit-Limit`: Aktuelle Obergrenze des rate limit
  - `X-RateLimit-Remaining`: Verbleibende verfügbare Anfragen
  - `X-RateLimit-Reset`: Zeitpunkt, zu dem das Limit zurückgesetzt wird

## 429-Fehler behandeln

Wenn Ihre Anfragehäufigkeit das Limit überschreitet, gibt die API den Statuscode 429 zurück. Empfohlene Maßnahmen:

1. **Exponentiellen Backoff einsetzen**: Warten Sie zunächst 1 Sekunde und verdoppeln Sie die Wartezeit mit jedem weiteren Versuch (2s, 4s, 8s …).
2. **Concurrency steuern**: Begrenzen Sie die Anzahl gleichzeitiger Anfragen mit Anfragewarteschlangen oder Semaphoren.
3. **Anfragen bündeln**: Fassen Sie mehrere kleine Anfragen zu wenigen größeren zusammen.

## Höhere rate limits beantragen

Wenn Ihr Geschäftsbedarf die aktuellen rate limits übersteigt:

- **Durch Aufladen hochstufen**: Erhöhen Sie Ihren kumulierten Aufladebetrag, und das System stuft Ihre rate-limit-Stufe automatisch hoch.
- **Vertrieb kontaktieren**: Bei besonderen Anforderungen wenden Sie sich über [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) an das Vertriebsteam der Plattform, um eine individuelle rate quota anzufragen.
