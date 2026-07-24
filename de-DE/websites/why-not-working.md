---
title: "Full-Stack-Funktionen von Kimi Websites"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
preview_content: "Full-Stack-Funktionen von Kimi Websites und aktuelle Einschränkungen."
---

<SeoMeta
  title="Warum funktioniert die von Kimi erstellte Website nicht? – Kimi Help Center"
  description="Erfahre mehr über die derzeitigen Funktionsgrenzen und Einschränkungen von Kimi Websites. Nicht unterstützte Szenarien sind unter anderem Zahlungen über Drittanbieter, OAuth und komplexe API-Integrationen."
/>

# Full-Stack-Funktionen von Kimi Websites

## Upgrade für den Full-Stack-Websitebau

Eine vollständige Website besteht in der Regel aus drei Teilen: **Frontend-Oberfläche, Backend-Diensten und Datenspeicherung**. Kimi Websites wurde um Full-Stack-Funktionen für den Websitebau erweitert und unterstützt nun die durchgängige Erstellung und Bereitstellung von Websites – von Frontend-Seiten bis zu Backend-Datenbanken.

| Funktion         | Beschreibung                                                           |
|--------------|----------------------------------------------------------------|
| Frontend-Generierung     | Seitenstruktur, Styling und Interaktionslogik mit HTML/CSS/JavaScript                    |
| Backend-Datenbank   | Erstellt automatisch eine Backend-Datenbank mit Unterstützung für dauerhaftes Lesen und Schreiben von Daten sowie visuelle Verwaltung               |
| Benutzeranmeldung     | Unterstützt die Anmeldung mit einem Kimi-Konto und kann außerdem über die Datenbank ein Anmeldesystem mit Benutzername und Passwort erstellen           |
| Versionsverwaltung     | Die KI legt Versionen automatisch fest und unterstützt das Zurücksetzen auf jede frühere Version                      |
| Full-Stack-Vorschau     | Unterstützt eine vollständige Frontend- und Backend-Vorschau; in einigen Szenarien muss die Sandbox-Umgebung manuell gestartet werden                   |
| Veröffentlichung und Deployment   | Klicke manuell auf „Veröffentlichen“, um die Website öffentlich im Internet bereitzustellen. Vor der Veröffentlichung ist die Website nur als Vorschau verfügbar. Das Deployment von Full-Stack-Inhalten wird unterstützt  |

## Vom Agent gelieferte Ergebnisse

- Vollständige Dateien zur Aufgabenausführung, einschließlich Frontend- und Backend-Code
- Eine Full-Stack-Website, die online in der Vorschau angezeigt und veröffentlicht werden kann
- Ein herunterladbares Zip-Paket im Verzeichnis `/mnt/agents/output/app/`

## Anwendungsfälle

| Szenario             | Beispiel-Prompt                                                       |
|------------------|------------------------------------------------------------------|
| Landingpage von Grund auf erstellen   | Erstelle eine Marketing-Landingpage für ein SaaS-Produkt in einem technisch inspirierten Stil, einschließlich Hero-Bereich, Feature-Vorstellung, Preisen und CTA |
| Aus Screenshot nachbauen         | [Design-Screenshot hochladen] Verwandle dieses Design in ausführbaren Webseiten-Code               |
| Persönliches Portfolio       | Erstelle eine persönliche Portfolio-Website für einen Fotografen, mit minimalistischem Schwarz-Weiß-Stil und Unterstützung für ein Masonry-Bildlayout        |
| Datenvisualisierungsseite     | Erstelle eine Webseite zur Datenvisualisierung, die Finanzierungsdaten von KI-Unternehmen für 2025 zeigt, einschließlich Diagrammen und Filterung |
| Markenwebsite         | Erstelle eine offizielle Website für eine Kaffeemarke mit Morandi-Farbpalette, Startseite, Produktseiten und Filialseiten      |
| App mit Login-Schutz     | Erstelle eine interne Wissensdatenbank-Website für ein Team, deren Inhalte erst nach der Anmeldung sichtbar sind                   |
| Admin für Datenverwaltung     | Erstelle ein System zur Veranstaltungsanmeldung, in dem Benutzer Informationen einreichen können, die in einer Datenbank gespeichert werden, und Admins die Anmeldeliste einsehen können |
| Tool/Rechner    | Erstelle eine BMI-Rechner-Webseite mit übersichtlicher Oberfläche, Einheitenwechsel und Hinweisen zu Gesundheitskategorien     |

## Aktuelle Einschränkungen

Die folgenden Szenarien werden noch nicht unterstützt und in künftigen Versionen nach und nach freigeschaltet:

- Integration von Zahlungen über Drittanbieter, etwa Stripe und PayPal
- Drittanbieter-Login per OAuth, etwa über Google und GitHub. Derzeit werden nur die Anmeldung mit einem Kimi-Konto oder ein datenbankbasierter Login mit Benutzername und Passwort unterstützt
- Komplexe serverseitige API-Integrationen, etwa die Anbindung externer SaaS-Dienste
