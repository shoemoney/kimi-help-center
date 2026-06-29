---
title: "API-Fehlercodes"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="API-Fehlercodes - Kimi Help Center"
  description="Häufige Fehlercodes bei der Nutzung der Kimi API und ihre Behebung."
/>

# API-Fehlercodes

<Callout type="info">
Häufige Fehlercodes bei der Nutzung der Kimi API und ihre Behebung.
</Callout>

## Referenz der Fehlercodes

| Fehlercode | Bedeutung | Behebung |
| --- | --- | --- |
| 400 | Bad Request | Format des Anfragetexts sowie Parameternamen und -typen prüfen. Häufige Ursachen: fehlerhaftes JSON, fehlende Pflichtparameter, Werte außerhalb des zulässigen Bereichs. |
| 401 | Unauthorized | Sicherstellen, dass der API Key korrekt, nicht abgelaufen und nicht deaktiviert ist. Header-Format prüfen: `Authorization: Bearer <your-api-key>`. |
| 403 | Forbidden (insufficient balance) | Kontoguthaben aufgebraucht – in der Konsole aufladen. Möglicherweise ist das Konto auch eingeschränkt; wenden Sie sich bei Bedarf an den Support. |
| 404 | Not Found | URL-Pfad der Anfrage und Modellnamen prüfen. Sicherstellen, dass der Endpunkt `https://api.moonshot.ai/v1/...` lautet. |
| 429 | Too Many Requests | Rate Limit überschritten. Frequenz verringern, exponentielles Backoff einsetzen oder den Support für höhere Limits kontaktieren. |
| 500 | Internal Server Error | Vorübergehendes Serverproblem – später erneut versuchen. Falls es weiterhin auftritt, wenden Sie sich mit der `request_id` an support@moonshot.ai. |

## Allgemeine Tipps zur Fehlersuche

<Callout type="tip">
1. **Vollständige Fehlermeldung prüfen**: Das Antwort-JSON enthält unter `error.message` eine ausführliche Beschreibung.
2. **request_id notieren**: Hilft dem Support, das Problem schnell einzugrenzen.
3. **Offizielle Dokumentation heranziehen**: Stellen Sie sicher, dass Ihre Aufrufe der Dokumentation unter [platform.moonshot.ai](https://platform.moonshot.ai) entsprechen.
4. **Wiederholungslogik einbauen**: Setzen Sie bei den Fehlern 429 und 500 exponentielles Backoff ein.
</Callout>
