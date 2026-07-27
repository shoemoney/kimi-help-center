---
title: "Rate limits"
slug: "api-rate-limits"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Rate limits – Kimi Help Center"
  description="Kimi API setzt rate limits für Anfragehäufigkeit und concurrency durch, um die Stabilität der Plattform und eine faire Nutzung sicherzustellen. Die Rate-limit-Stufen richten sich nach dem kumulierten Aufladebetrag Ihres Kontos..."
/>

# Rate limits

Kimi API setzt rate limits für Anfragehäufigkeit und concurrency durch, um die Stabilität der Plattform und eine faire Nutzung sicherzustellen. Die Rate-limit-Stufen richten sich nach dem kumulierten Aufladebetrag Ihres Kontos.

## Rate-limit-Stufen

API rate limits sind nach dem **kumulierten Aufladebetrag** Ihres Kontos gestaffelt: Je mehr Sie insgesamt aufgeladen haben, desto höher fallen die verfügbaren rate limits aus. Die konkreten Schwellenwerte der einzelnen Stufen sowie die zugehörigen Limits für RPM (Anfragen pro Minute) und TPM (tokens pro Minute) finden Sie in der Konsole von [platform.kimi.ai](https://platform.kimi.ai).

## Aktuelle Limits prüfen

- Melden Sie sich in der API-Konsole an, um Ihre aktuelle Rate-limit-Stufe einzusehen.
- Die Antwort-Header der API enthalten ebenfalls Informationen zu den rate limits:
  - `X-RateLimit-Limit`: Aktuelle Obergrenze des rate limit
  - `X-RateLimit-Remaining`: Verbleibende verfügbare Anfragen
  - `X-RateLimit-Reset`: Zeitpunkt, zu dem das Limit zurückgesetzt wird

## 429-Fehler behandeln

Wenn Ihre Anfragehäufigkeit das Limit überschreitet, gibt die API den Statuscode 429 zurück. Empfohlene Maßnahmen:

1. **Exponentielles Backoff implementieren**: Warten Sie zunächst 1 Sekunde und verdoppeln Sie die Wartezeit bei jedem erneuten Versuch (2s, 4s, 8s …).
2. **concurrency steuern**: Verwenden Sie Anfragewarteschlangen oder Semaphore, um die Anzahl gleichzeitiger Anfragen zu begrenzen.
3. **Anfragen bündeln**: Fassen Sie mehrere kleine Anfragen zu weniger, dafür größeren Anfragen zusammen.

## Höhere rate limits anfordern

Wenn Ihre geschäftlichen Anforderungen die aktuellen rate limits übersteigen:

- **Aufladen, um hochgestuft zu werden**: Erhöhen Sie Ihren kumulierten Aufladebetrag; das System stuft Ihre Rate-limit-Stufe automatisch hoch.
- **Vertrieb kontaktieren**: Bei besonderen Anforderungen wenden Sie sich über [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) an das Vertriebsteam der Plattform, um eine individuelle rate quota anzufordern.
