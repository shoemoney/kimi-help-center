---
title: "Warum funktioniert die vom Agenten erstellte Website nicht?"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Warum funktioniert die vom Agenten erstellte Website nicht? - Kimi Help Center"
  description="Ein Full-Stack-Projekt umfasst Frontend-UI, Backend-Dienste und persistente Speicherung. Kimi Agent kann alle drei erzeugen, aber ein erfolgreicher Betrieb hängt von der Umgebung ab..."
/>

# Warum funktioniert es nicht?

<Callout type="tip">
Ein Full-Stack-Projekt umfasst **Frontend-UI, Backend-Dienste und persistente Speicherung**. Kimi Agent kann alle drei erzeugen, doch ein reibungsloser Betrieb setzt die richtige Einrichtung der Umgebung, die Konfiguration der Authentifizierung und die Veröffentlichung voraus.
</Callout>

Wenn Ihre App nicht wie erwartet funktioniert, liegt das Problem in der Regel nicht an fehlenden Backend-Fähigkeiten. Meist ist eine Vorschau, Authentifizierung, Datenbank oder Veröffentlichung unvollständig.

## Full-Stack-Workflow

1. **Generieren**: Der Agent erstellt Frontend + Backend + Datenbankschema und Datenlogik.
2. **Vorschau**: Ausführung in der Sandbox zum lokalen Full-Stack-Test (in manchen Fällen ist ein manueller Start erforderlich).
3. **Versionieren**: Der Agent kann Versionswerkzeuge nutzen und automatisch Commits erstellen.
4. **Zurücksetzen**: Sie können zu jeder vorherigen Commit-Version zurückkehren.
5. **Veröffentlichen / Teilen**: Die App wird erst nach manueller Veröffentlichung unter einer öffentlichen URL bereitgestellt.

## Häufige Ursachen für Fehler

| Symptom | Wahrscheinliche Ursache | Lösung |
|----------|-------------|------------|
| Frontend lädt, aber API schlägt fehl | Sandbox-Laufzeit nicht gestartet | Sandbox starten und Vorschau erneut ausführen |
| Daten werden nicht gespeichert oder nicht angezeigt | Datenbank nicht initialisiert oder migriert | Schritt zur Datenbankeinrichtung oder -migration erneut ausführen |
| Anmeldung schlägt fehl | Authentifizierungsablauf nicht korrekt konfiguriert | Kimi-Login-Konfiguration und Callback-Einstellungen prüfen |
| Andere können nicht auf Ihre App zugreifen | App nicht veröffentlicht | Auf **Veröffentlichen/Teilen** klicken, um bereitzustellen |
| Letzte Änderungen haben Funktionen beschädigt | Regression in der neuesten Version | Zu einem stabilen Commit zurückkehren |

## Unterstützung für Authentifizierung

- **Phase 1**: Unterstützt **Kimi Login**.
- **Nächste Phase**: Weitere OAuth-Anbieter werden ergänzt.
- **Ebenfalls unterstützt**: Eine standardmäßige datenbankbasierte Anmeldung per E-Mail und Passwort kann vom Agenten erzeugt werden.

## Version und Zurücksetzen

- Der Agent unterstützt neue Versionswerkzeuge und kann während der Entwicklung selbstständig `git commit` ausführen.
- Sie können den Versionsverlauf einsehen und bei Bedarf zu einem ausgewählten Commit zurückkehren.

## Vorschau vs. Veröffentlichen

- **Vorschau**: Für Entwicklung und Tests in der Sandbox; in manchen Szenarien ist ein manueller Sandbox-Start erforderlich.
- **Veröffentlichen/Teilen**: Eine manuelle Aktion, die Ihre App in eine öffentlich zugängliche Umgebung bereitstellt.

## Wofür sich der Agent am besten eignet

- Schnelles Prototyping von Full-Stack-Produkten
- CRUD-Abläufe mit persistenter Speicherung
- Grundlegende Admin- oder Back-Office-Datenoperationen
- End-to-End-Demoprojekte mit Anmeldung, Daten und Bereitstellungsablauf

## Aktuelle Grenzen

- Fortgeschrittener Produktivbetrieb (zum Beispiel komplexes SRE und Multi-Region-HA) erfordert weiterhin manuelle Entwicklungsarbeit.
- Führen Sie bei risikoreichen Produktivszenarien vor der Veröffentlichung eine Sicherheitsprüfung und eine Härtung der Bereitstellung durch.
