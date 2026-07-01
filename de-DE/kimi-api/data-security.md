---
title: "Datenverarbeitung & Sicherheit"
slug: "api-data-security"
order: 13
extract_headings: true
preview: false
---

<SeoMeta
  title="Datenverarbeitung & Sicherheit - Kimi Hilfecenter"
  description="FAQ zu Datensicherheit und Datenschutz für die Kimi API."
/>

# Datenverarbeitung & Sicherheit

<Callout type="info">
FAQ zu Datensicherheit und Datenschutz für die Kimi API.
</Callout>

Die Kimi API nimmt Datensicherheit und Datenschutz sehr ernst.
## Werden Nutzerdaten für das Modelltraining verwendet?

<Callout type="warning">
**Nein.** Über die API übermittelte Nutzerdaten (einschließlich Eingabeinhalte und Modellausgaben) werden **nicht zum Trainieren oder Verbessern der Kimi-Modelle verwendet**. Ihre Daten dienen ausschließlich der Bearbeitung der aktuellen API-Anfrage und werden nicht dauerhaft zu Trainingszwecken gespeichert.
</Callout>

## Wie wird die Sicherheit privater Daten gewährleistet?
Die Kimi API setzt mehrere Maßnahmen ein, um Ihre privaten Daten zu schützen:
| Maßnahme | Beschreibung |
| --- | --- |
| **Verschlüsselung bei der Übertragung** | Die gesamte API-Kommunikation erfolgt über HTTPS/TLS |
| **Datenisolierung** | Daten verschiedener Nutzer werden strikt voneinander getrennt |
| **Keine Verwendung zum Training** | API-Daten werden nicht für das Modelltraining genutzt |
| **Zugriffskontrolle** | API-Key-Authentifizierung ausschließlich für autorisierten Zugriff |
| **Compliance-Zertifizierungen** | Die Plattform verfügt über einschlägige Sicherheitszertifizierungen |

<Callout type="tip">
Bei höheren Sicherheitsanforderungen wenden Sie sich an das Vertriebsteam, um mehr über Sicherheitslösungen auf Enterprise-Niveau zu erfahren.
</Callout>

## Prüfung auf sichere Inhalte
Die Kimi API verfügt über einen integrierten Mechanismus zur Prüfung der Inhaltssicherheit:
- Das System erkennt und filtert verbotene Inhalte automatisch (illegale Aktivitäten, Gewalt, explizites Material usw.)
- Bei Auslösung gibt die API eine entsprechende Fehlermeldung zurück
- Die Inhaltsprüfung speichert oder offenbart Ihre Originaldaten nicht
- Wenn Sie der Meinung sind, dass eine Prüfung fälschlicherweise ausgelöst wurde, wenden Sie sich mit der `request_id` an den Support
## Wie lösche ich hochgeladene Dateien?
Über die Datei-API hochgeladene Dateien können jederzeit gelöscht werden:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "DELETE https://api.moonshot.ai/v1/files/{file_id}",
    },
  ]}
/>

Fügen Sie Ihren API-Key in den Anfrage-Header ein und geben Sie die Datei-ID an, um die Datei zu löschen. Nach dem Löschen kann die Datei nicht mehr referenziert werden, und ihre Daten werden vom Server entfernt.

<Callout type="info">
Sie können hochgeladene Dateien auch auf der Seite zur Dateiverwaltung in der Konsole ansehen und löschen.
</Callout>
