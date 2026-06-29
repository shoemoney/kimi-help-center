---
title: "FAQ sur la création de compétences"
slug: "create-custom-skills-faq"
order: 9
extract_headings: true
preview: false
---

<SeoMeta
  title="FAQ sur la création de compétences - Centre d'aide Kimi"
  description="Questions fréquentes sur la création de Kimi Skills, notamment le téléversement de documents, l'utilisation des tokens, les limites de fréquence, le nommage des compétences et la gestion des échecs de création."
/>

# Foire aux questions (FAQ) sur les compétences

## Pourquoi le bouton « Créer une compétence » est-il désactivé ?

Cela peut se produire pour les raisons suivantes :
1. Le fichier téléversé ou la description de la compétence est incomplet.
2. Le format ou le nombre de fichiers ne respecte pas les exigences.
3. Le système a détecté que le quota de votre compte est épuisé.

## Comment la création de compétences consomme-t-elle le quota ?

La création d'une compétence consomme vos **tokens**, qui peuvent provenir de vos recherches offertes ou de votre quota d'abonnement officiel.

**Ordre de déduction** :
1. Les recherches offertes sont utilisées en priorité.
2. Si aucune recherche offerte n'est disponible, le quota d'abonnement est utilisé.

<Callout type="info">
En cas d'échec de la création, aucun token n'est déduit. Les tokens ne sont consommés qu'en cas de création réussie.
</Callout>

## Existe-t-il des limites sur le nombre ou la fréquence des créations ?

Oui. Afin de garantir la stabilité du système et une utilisation équitable, les limites suivantes s'appliquent :

1. **Limite de concurrence** : un maximum de **3 tâches** (en cours de création + échouées) peuvent s'exécuter en parallèle. Si vous atteignez cette limite, vous serez invité à réessayer ultérieurement.
2. **Limite quotidienne** : chaque utilisateur peut effectuer au maximum **10 conversions « Document bureautique vers compétence »** par jour (réessais inclus). Au-delà de cette limite, une notification s'affiche.

## Que faire en cas d'échec de la création d'une compétence ?

* Vous pouvez choisir de **réessayer** ou de **supprimer** la carte de compétence échouée.
* Les tentatives échouées ne consomment pas de quota.
* La description initiale de la compétence s'affiche sur la carte échouée afin de vous aider à distinguer les différentes tâches.

## Quelles sont les exigences de nommage pour les nouvelles compétences ?

Les noms des nouvelles compétences doivent respecter les règles suivantes :
1. **Ne pas dupliquer une compétence existante** : cela inclut les compétences officielles et toutes celles que vous avez déjà ajoutées.
   - Par exemple, si vous possédez les compétences A, B et C, créer une nouvelle compétence nommée A nécessite de la renommer pour éviter tout conflit.
2. **Longueur des caractères** : 25 caractères maximum.
3. **Caractères autorisés** : uniquement les lettres minuscules de l'alphabet anglais, les traits d'union `-` et les traits de soulignement `_`.

<Callout type="info">
Le respect de ces règles garantit l'ajout de votre compétence et évite toute confusion avec les compétences existantes.
</Callout>

## Que se passe-t-il si un nom de compétence est signalé comme « déjà utilisé » ?

Lors de la création d'une nouvelle compétence, le système vérifie si le nom saisi entre en conflit avec une compétence existante, qu'il s'agisse d'une compétence officielle ou d'une compétence que vous avez déjà ajoutée.
Si un conflit est détecté, une fenêtre contextuelle s'affiche avec le message suivant :
> Le nom de compétence `/skill-name` est déjà utilisé. Veuillez le renommer pour éviter toute confusion.

À ce stade, vous pouvez soit saisir un nouveau nom de compétence et cliquer sur **Renommer et ajouter**, soit cliquer sur **Annuler** pour abandonner la création.

## Que se passe-t-il si je ne résous pas un conflit de nommage ?

Le système n'autorise pas l'ajout de compétences portant des noms identiques. Si vous ne résolvez pas le conflit de nommage, vous ne pourrez pas finaliser la création de la compétence.
