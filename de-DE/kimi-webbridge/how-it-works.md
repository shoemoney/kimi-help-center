---
title: "So funktioniert Kimi WebBridge"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="So funktioniert Kimi WebBridge - Kimi Hilfecenter"
  description="Erfahren Sie, wie Kimi WebBridge Ihren Browser lokal mit KI-Agenten verbindet und so sichere Web-Navigation, Klicks, Screenshots und mehr ermöglicht."
  ogType="article"
/>

# So funktioniert Kimi WebBridge

## Ablauf

Kimi WebBridge arbeitet folgendermaßen:

1. **Lokaler Bridge-Dienst**: Ein lokaler Dienst läuft auf Ihrem Computer und empfängt Anweisungen vom Agenten
2. **Browser-Erweiterung**: Führt bestimmte Aktionen im Browser auf Basis des Chrome DevTools Protocol aus
3. **Sicherheitsisolierung**: Die gesamte Ausführung erfolgt lokal – Anmeldestatus und Webseiteninhalte verlassen niemals Ihr Gerät

<Frames
  src="./images/workflow.png"
  alt="workflow"
/>

## Oberfläche der Erweiterung

Klicken Sie auf das WebBridge-Symbol in der Browser-Symbolleiste, um den aktuellen Verbindungsstatus zu prüfen:

**Verbunden**: WebBridge funktioniert einwandfrei und kann mit dem Agenten zusammenarbeiten.

**Getrennt**: Überprüfen Sie Ihre Konfiguration oder führen Sie den Verbindungsbefehl erneut aus.

<Frames
  src="./images/connection.png"
  alt="WebBridge Connection"
/>

## Funktionen

| Funktion | Beschreibung |
|---------|-------------|
| Web-Navigation | Automatisches Öffnen angegebener URLs |
| Elemente anklicken | Simuliert Klicks auf Schaltflächen, Links und andere Seitenelemente |
| Formulare ausfüllen | Gibt automatisch Text ein und wählt Optionen aus |
| Seiten-Screenshots | Erfasst die aktuelle Seite oder einen bestimmten Bereich |
| Inhaltsextraktion | Liest Seitentext, Tabellen und andere strukturierte Daten aus |
| Beibehaltung der Anmeldesitzung | Nutzt vorhandene, im Browser gespeicherte Anmeldestatus |

Anwendungsfälle:

- E-Commerce-Preisvergleich: Automatisch nach Produkten suchen und Preise plattformübergreifend vergleichen
- Informationsrecherche: Webseiten gründlich durchsuchen und strukturierte Informationen extrahieren
- Formularausfüllung: Verschiedene Online-Formulare automatisch ausfüllen
- Dateneingabe: Webdaten automatisch aufbereiten und in einem festgelegten Format eingeben

Weitere Anwendungsfälle finden Sie auf der [offiziellen Website von Kimi WebBridge](https://www.kimi.com/features/webbridge).
