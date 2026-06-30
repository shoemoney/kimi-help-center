---
title: "Gesprächslimits"
slug: "conversation-limits"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Gesprächslimits - Kimi Hilfecenter"
  description="Wenn der Gesprächskontext zu lang wird und das Token-Limit des Modells überschreitet, reagiert Kimi Claw möglicherweise nicht mehr oder gibt einen Fehler zurück."
/>

# Gesprächslimits

Wenn der Gesprächskontext zu lang wird und das Token-Limit des Modells überschreitet, reagiert Kimi Claw möglicherweise nicht mehr oder gibt einen Fehler zurück.

**So beheben Sie das Problem:**

- Senden Sie `/new`, um ein neues Gespräch zu beginnen und den aktuellen Kontext zu löschen.
- Falls der Fehler nach `/new` weiterhin besteht, sind möglicherweise zu viele Skills in den Speicher geladen. Versuchen Sie Folgendes:
  - `/skills` — überprüfen Sie die installierten Skills und deinstallieren Sie alle, die Sie nicht benötigen.
  - `/compact` — komprimieren Sie den aktuellen Kontext, um Speicherplatz freizugeben.
  - `/reset` — setzen Sie Kimi Claw als letzten Ausweg vollständig zurück.

## API-rate-limit erreicht?

Das bedeutet, dass Sie die Obergrenze für die Anfragehäufigkeit erreicht haben. Warten Sie einen Moment und versuchen Sie es erneut.

**So überprüfen Sie Ihre quota und rate limits:**

1. Gehen Sie zu [kimi.com/code](https://kimi.com/code).
2. Öffnen Sie die **Console**.
3. Klicken Sie auf **View Quota & Rate Limits**, um Ihre aktuelle Nutzung und Obergrenzen anzuzeigen.

Wenn Sie häufig an die rate limits stoßen, sollten Sie Ihre Aufgaben zeitlich entzerren oder auf eine höhere Mitgliedschaftsstufe upgraden, um einen höheren Durchsatz zu erzielen.
