---
title: "API-Fehlercodes"
slug: "api-error-codes"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="API-Fehlercodes - Kimi Help Center"
  description="Häufige Fehlercodes beim Aufruf der Kimi API und wie Sie sie beheben."
/>

# API-Fehlercodes

<Callout type="info">
Häufige Fehlercodes beim Aufruf der Kimi API und wie Sie sie beheben.
</Callout>

## Fehlercode-Referenz

| Fehlercode | Bedeutung | Lösung |
| --- | --- | --- |
| 400 | Ungültige Anfrage | Prüfen Sie Format des Anfrage-Bodys, Parameternamen und Typen. Häufige Ursachen: fehlerhaftes JSON, fehlende Pflichtparameter, Werte außerhalb des zulässigen Bereichs. |
| 401 | Nicht autorisiert | Stellen Sie sicher, dass der API-Schlüssel korrekt, nicht abgelaufen und nicht deaktiviert ist. Prüfen Sie das Header-Format: `Authorization: Bearer <your-api-key>`. |
| 403 | Verboten (Insufficient Balance) | Das Kontoguthaben ist aufgebraucht — laden Sie es in der Konsole auf. Das Konto kann auch eingeschränkt sein; wenden Sie sich bei Bedarf an den Support. |
| 404 | Nicht gefunden | Prüfen Sie den URL-Pfad der Anfrage und den Modellnamen. Stellen Sie sicher, dass der Endpunkt `https://api.moonshot.ai/v1/...` lautet. |
| 429 | Too Many Requests | Das rate limit wurde überschritten. Reduzieren Sie die Häufigkeit, implementieren Sie exponentielles Backoff oder wenden Sie sich an den Support, um höhere Limits zu erhalten. |
| 500 | Internal Server Error | Vorübergehendes Serverproblem — versuchen Sie es später erneut. Falls der Fehler weiterhin auftritt, wenden Sie sich mit der `request_id` an support@moonshot.ai. |

## Allgemeine Tipps zur Fehlerbehebung

<Callout type="tip">
1. **Vollständige Fehlermeldung prüfen**: Das Antwort-JSON enthält `error.message` mit einer detaillierten Beschreibung.
2. **request_id notieren**: Hilft dem Support, das Problem schnell zu finden.
3. **Offizielle Dokumentation heranziehen**: Stellen Sie sicher, dass Ihre Aufrufe der Dokumentation unter [platform.kimi.ai](https://platform.kimi.ai) entsprechen.
4. **Wiederholungslogik implementieren**: Verwenden Sie bei 429- und 500-Fehlern exponentielles Backoff.
</Callout>
