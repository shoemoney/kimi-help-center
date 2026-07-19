---
title: "Projets"
slug: "project"
order: 4
extract_headings: false
preview: true
preview_content: "Un projet est un espace de travail persistant qui réunit les fichiers de référence, les discussions et les instructions liés à une tâche de longue durée, afin que vous n’ayez pas à réexpliquer le contexte à chaque nouvelle conversation."
---

<SeoMeta
  title="Qu’est-ce qu’un projet Kimi ? Comment le créer et l’utiliser - Centre d’aide Kimi"
  description="Découvrez les projets Kimi : un espace de travail persistant qui regroupe fichiers de référence, discussions et instructions de projet — idéal pour rédiger une série de documents, mener des recherches au long cours ou maintenir une base de code. Cet article couvre la création et la gestion des projets, les instructions de projet, les fichiers de projet et les quotas des formules."
/>

# Projets

Un projet est un espace de travail persistant. Vous pouvez y réunir les fichiers de référence, les discussions et les instructions liés à une tâche de longue durée ; chaque discussion que vous lancez dans ce projet reprend automatiquement ce contexte. Vous n’avez donc pas besoin de téléverser à nouveau les mêmes fichiers ni de réexpliquer le contexte du projet à chaque fois.

**Quand utiliser un projet** : créez un projet lorsque le travail s’inscrit dans la durée, doit produire plusieurs livrables ou repose sur le même ensemble de fichiers — par exemple pour rédiger une série de documents, mener des recherches continues ou maintenir une base de code. Si la tâche est autonome et ne nécessite pas de contexte partagé, utilisez simplement une discussion classique.

<Callout type="info">
L’application de bureau Kimi Work comporte elle aussi des « Projects », qui sont distincts des projets Kimi (Chat) décrits ici : les deux ne sont pas liés et ne partagent aucune donnée.
</Callout>

## Créer et gérer des projets

**Points d’accès** :
- le bouton « + » à droite de la section « Projets » dans la barre latérale ;
- l’élément « + Nouveau projet » en haut du sélecteur de projet de la page d’accueil.

**Créer** : saisissez un nom de projet (obligatoire, 1 à 50 caractères) et, si vous le souhaitez, des instructions de projet ; cliquez sur « Créer » pour ouvrir la page d’accueil du projet.

**Modifier / Supprimer** :
- survolez le nom d’un projet dans la barre latérale ou faites un clic droit dessus pour « Modifier le titre » ou « Épingler » ;
- la suppression d’un projet nécessite une confirmation. **Une fois le projet supprimé, ses discussions, fichiers et instructions de projet sont définitivement supprimés et ne peuvent pas être récupérés** — procédez avec prudence.

**Barre latérale** : la section « Projets » se trouve sous l’entrée Kimi Claw et au-dessus de l’historique des discussions. Elle liste vos projets du plus récemment créé au plus ancien ; développez un projet pour afficher ses discussions.

## Page d’accueil du projet

La page d’accueil du projet est organisée en trois colonnes :
- **Gauche** : la barre latérale standard ;
- **Centre** : une zone pour démarrer une discussion et la liste des discussions du projet. Le champ de saisie indique « Démarrer une discussion dans 'project name'… » ; envoyer un message ici crée une discussion automatiquement rattachée au projet actuel ;
- **Panneau de droite** : deux blocs — Instructions et Fichiers (repliables).

## Ce que vous pouvez faire dans une discussion de projet

Les discussions d’un projet offrent les mêmes fonctionnalités que les discussions Kimi classiques, tout en intégrant automatiquement le contexte du projet. Vous pouvez :
- utiliser les **fichiers du projet** (lus à la demande par le modèle) et les **instructions du projet** ;
- utiliser les **plugins, Skills et Goal** ;
- **choisir le modèle**.

Lancez une discussion distincte pour chaque livrable afin que les messages et les résultats restent ciblés ; le projet conserve ces discussions liées au même endroit.

## Instructions de projet

- Les instructions de projet sont des consignes personnalisées propres au projet (en texte brut) que Kimi applique dans toutes les discussions du projet ;
- Par exemple : « Vous êtes chef de produit senior. Répondez en chinois et produisez le résultat en Markdown. » ;
- Elles prennent effet à partir de votre prochain message ou dans une nouvelle discussion après enregistrement.

## Fichiers de projet

- Téléversez des fichiers de référence dans un projet afin que toutes ses discussions puissent les utiliser ;
- Les formats pris en charge correspondent aux téléversements Kimi Agent : PDF, DOCX, XLSX, CSV, TXT, MD, fichiers de code courants et formats d’image courants ;
- **Chaque fichier doit faire au maximum 100 MB, et vous pouvez téléverser jusqu’à 50 fichiers** ;
- Les fichiers de projet sont **lus à la demande par le modèle** : au lieu de précharger le texte intégral de chaque fichier à chaque tour, le modèle détermine les fichiers dont il a besoin selon votre question ;
- Le bloc Fichiers affiche une barre de capacité en bas ; lorsqu’elle approche de la limite ou l’atteint, vous êtes invité à supprimer des fichiers ou à changer de formule.

## Fonctionnement du contexte dans un projet

Lorsque vous démarrez une discussion dans un projet, le contexte injecté dans le modèle comprend : **prompt système + mémoire principale globale + instructions du projet + fichiers du projet lus à la demande**.

Les discussions classiques (hors projet) n’injectent ni instructions ni fichiers de projet ; les instructions et fichiers d’un projet ne s’appliquent qu’au sein de ce projet et n’affectent pas les autres projets ni les discussions classiques.

## Quotas et formules

Le nombre de projets et l’espace de stockage des projets augmentent selon votre formule d’abonnement :

| Formule | Free | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Projets | 2 | 20 | 20 | 100 | 100 |
| Stockage des projets | 500MB | 20GB | 20GB | 50GB | 50GB |

D’autres limites (comme le nombre de discussions par projet et la limite de caractères des instructions de projet) varient également selon votre formule ; pour les chiffres les plus récents, consultez la [page des formules d’abonnement](/membership/membership-pricing).

## FAQ

### Les fichiers de projet sont-ils lus intégralement à chaque tour d’une discussion ?
Non. Les fichiers de projet sont lus à la demande : le modèle détermine ceux dont il a besoin selon votre question et ne lit que ceux-là, au lieu de précharger tous les fichiers à chaque tour.

### Combien de fichiers un projet peut-il contenir ?
Chaque fichier doit faire au maximum 100 MB, et vous pouvez téléverser jusqu’à 50 fichiers. Le stockage total du projet dépend de votre formule ; consultez la [page des formules d’abonnement](/membership/membership-pricing).

### Que se passe-t-il lorsque je supprime un projet ?
Supprimer un projet **efface définitivement** ses discussions, fichiers et instructions de projet ; cette action est irréversible. Veuillez confirmer avant de supprimer.

### Que faire si j’atteins la limite de nombre de projets ou de stockage ?
Supprimez les projets ou fichiers dont vous n’avez plus besoin pour libérer de l’espace, ou changez de formule pour bénéficier d’un quota plus élevé. Consultez la [page des formules d’abonnement](/membership/membership-pricing) pour en savoir plus.
