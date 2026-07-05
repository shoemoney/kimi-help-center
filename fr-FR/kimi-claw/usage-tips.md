---
title: "Conseils d'utilisation"
slug: "usage-tips"
order: 16
extract_headings: false
preview: false
---

<SeoMeta
  title="Conseils d'utilisation - Centre d'aide Kimi"
  description="Kimi Claw n'est pas un simple outil de questions-réponses : c'est un assistant que vous façonnez. Définissez des règles et il adopte une nouvelle personnalité. Enseignez-lui une méthode et il en fait une habitude. Donnez-lui un..."
/>

# Conseils d'utilisation

<Callout type="info">
Kimi Claw n'est pas un simple outil de questions-réponses : c'est un assistant que vous façonnez. Définissez des règles et il adopte une nouvelle personnalité. Enseignez-lui une méthode et il en fait une habitude. Donnez-lui un planning et il vous garde sur la bonne voie.
</Callout>

## Personnaliser le profil
Une seule instruction suffit pour redéfinir la façon dont Kimi Claw communique. Pensez selon trois axes :
| Axe | Description | Exemple |
|-----------|-------------|---------|
| **Nom et rôle** | Attribuez-lui un nom, un intitulé de poste ou un archétype de personnage | « Tu t'appelles Claw. Tu es mon assistant de recherche. » |
| **Ton** | Plus bref, plus formel, plus enjoué ou plus prudent | « Sois concis et formel » |
| **Structure** | Toujours commencer par un résumé, toujours terminer par des actions à mener | « Commence chaque réponse par un résumé d'une phrase » |

<Callout type="tip">
**Exemples de prompts** :
- « À partir de maintenant, tu t'appelles Claw. Tu es mon assistant de recherche. Commence chaque réponse par un résumé d'une phrase. »
- « Réponds en trois parties : d'abord la conclusion, puis le raisonnement, puis les prochaines étapes concrètes. Sois concis. »
- « Tu es un analyste financier rigoureux. Signale l'incertitude dans chaque conclusion et inclus une note de risque. »
</Callout>

## Acquérir des compétences depuis ClawHub
Kimi Claw intègre une **bibliothèque de compétences ClawHub**. Avant de construire un workflow de zéro, demandez-lui de rechercher une Skill toute prête : voyez cela comme l'installation d'un module conçu pour un usage précis.
Envoyez `/skills` dans une conversation pour parcourir et gérer les compétences installées.
**Bons cas d'usage pour les Skills** :
| Catégorie | Exemples |
|----------|----------|
| **Curation d'informations** | Synthèses d'actualités, analyses concurrentielles, modèles de comptes rendus de réunion |
| **Analyse** | Tendances du marché, interprétation de données, identification de risques |
| **Workflows** | Chaînes de bout en bout : besoins → décomposition → production → relecture |

<Callout type="tip">
**Exemples de prompts** :
- « Trouve une Skill d'analyse concurrentielle, installe-la, puis explique-moi les données d'entrée requises. »
- « Cherche une Skill qui récupère des données boursières, puis fais-moi une analyse. »
- « Quand tu compiles des actualités du marché, suis cette structure : Opportunités / Risques / Données, puis une action à mener. »
</Callout>

## Programmer des tâches
Kimi Claw peut exécuter des tâches selon un planning, devenant ainsi un moteur de rappels quotidiens et un radar d'informations.

<Callout type="tip">
**Pour de meilleurs résultats, précisez trois éléments dans chaque tâche programmée** :
1. **Quand** — Un horaire précis (tous les jours à 9 h 17, chaque lundi, etc.)
2. **Format de sortie** — Liste à puces, tableau, modèle, nombre de mots, langue
3. **Contraintes** — Longueur maximale, sections obligatoires, langue, avertissements sur les risques
</Callout>

**Modèle** :
> À **[horaire]**, fais **[tâche]**, produis le résultat au format **[format de sortie]**, en respectant **[contraintes]**.
**Exemples** :
- « Tous les jours à 9 h 17, résume les dernières actualités du marché : 3 points clés + 1 note de risque, en moins de 200 mots. »
- « Dans 1 heure, rappelle-moi de terminer mon rapport quotidien et joins un modèle en quatre sections. »
- « Ce soir à 22 h 32, rappelle-moi d'éteindre, de décompresser et de me préparer à dormir. Reste chaleureux. »

<Callout type="tip">
**Astuce** : Programmez les tâches à des horaires non ronds (par exemple 9 h 17 plutôt que 9 h 00) pour éviter l'engorgement aux heures de pointe et réduire les délais d'exécution.
</Callout>
