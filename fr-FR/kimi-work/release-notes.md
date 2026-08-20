---
title: "Notes de version"
slug: "release-notes"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Notes de version de Kimi Work - Centre d'aide Kimi"
  description="Notes de version de Kimi Work : nouvelles fonctionnalités, modifications et corrections pour Mac et Windows, mises à jour en continu."
/>

# Notes de version

Cette page consigne les mises à jour de Kimi Work (nouvelles fonctionnalités, modifications et corrections) et est actualisée en continu. Télécharger la dernière version : [kimi.com/products/kimi-work](https://www.kimi.com/products/kimi-work)

## 3.2.1 (2026-08-20)

**Nouveautés**

- Nouveau Launcher global : affichez un champ de saisie flottant en forme de capsule sur le bureau, à tout moment et où que vous soyez, grâce à un raccourci clavier global
  - Lors de son affichage, il récupère automatiquement les fichiers actuellement sélectionnés dans le Finder / l’Explorateur de fichiers, et prend en charge le collage d’images, l’ajout de pièces jointes et le glisser de captures d’écran
  - Tapez « / » pour ouvrir le menu des plugins et des skills (recherche pinyin prise en charge) et choisir un espace de travail
  - Maintenez le raccourci enfoncé pour dicter ; après l’envoi, il se replie en mini-capsule et vous pouvez revenir à l’app principale d’un clic pour voir la réponse
- Nouvelle file d’attente de messages : pendant que l’Agent répond, vous pouvez continuer à envoyer des messages ; les nouveaux messages sont automatiquement mis en file d’attente, avec possibilité de les réorganiser par glisser-déposer, de les modifier, de les supprimer et d’afficher l’aperçu détaillé
- Dictée vocale dans le champ de saisie Work : cliquez sur le microphone ou maintenez le raccourci enfoncé pour commencer la dictée, avec reconnaissance mixte chinois-anglais

**Modifications**

- Logique des notifications de messages mise à jour : vous pouvez changer les règles de notification des messages dans les Paramètres

**Corrections**

- Consommation d’énergie en veille optimisée, réduisant l’utilisation des ressources en arrière-plan lorsque l’app est inactive
- Correction d’un problème où l’icône du Dock disparaissait sous macOS
- Correction de plusieurs bugs et amélioration de certaines interactions et de la stabilité

## 3.2.0 (2026-08-19)

**Nouveautés**

- Ajout d’un navigateur Agent intégré : les onglets du navigateur sont liés aux conversations et regroupés dans la zone d’aperçu, et l’Agent peut manipuler directement le navigateur — cliquer, saisir du texte, etc. ; sur Mac, vous pouvez également importer les cookies de votre navigateur Chrome local pour réutiliser vos sessions de connexion existantes (désactivé par défaut, activable dans les Paramètres)
- Localisation en 16 langues : le client prend désormais en charge 16 langues, contre seulement le chinois et l’anglais auparavant

**Modifications**

- Kimi WebBridge devient un plugin : le contrôle du navigateur réel a été déplacé dans un plugin, désactivé par défaut et activable dans les Paramètres
- La page de liste des tableaux de bord a été supprimée ; les tableaux de bord se changent désormais via la barre d’onglets supérieure
- Le tableau de bord devient un type de la zone d’aperçu : les tableaux de bord peuvent être ouverts dans la zone d’aperçu de la conversation, et plusieurs tableaux de bord peuvent être ouverts en parallèle

**Corrections**

- Amélioration du rendu en streaming des messages : les longues réponses s’affichent plus fluidement
- Correction de plusieurs bugs et amélioration de certaines interactions et de la stabilité

## 3.1.10 (2026-08-16)

**Corrections**

- Correction d’un problème où l’application plantait lors de la mise à niveau pour certains utilisateurs Windows

## 3.1.9 (2026-08-15)

**Nouveautés**

- Le marché des plugins personnels est en ligne : le marché des plugins propose désormais une section « Plugins personnels » où vous pouvez parcourir et installer des plugins de développeurs indépendants

**Corrections**

- Correction d’un problème où le contenu Markdown en streaming ne s’actualisait parfois pas
- Correction de plusieurs bugs et amélioration de certaines interactions et de la stabilité

## 3.1.8 (2026-08-11)

**Nouveautés**

- Navigation dans l’historique des messages : une nouvelle barre de navigation à droite des longues conversations permet de revenir rapidement aux messages précédents
- Branchement de conversation : créez une nouvelle branche à partir de n’importe quel tour pour continuer à explorer, en conservant l’historique de la conversation d’origine
- Modification et retour en arrière : modifiez votre dernier message et régénérez la réponse
- Dossiers de projet : déplacez des conversations dans ou hors des projets, et épinglez des projets dans la zone épinglée de la barre latérale
- Modification transparente des fichiers : après que l’Agent a modifié un fichier, une carte de résumé des différences est générée — examinez les changements ligne par ligne et revenez en arrière en un clic ; les fichiers du workspace s’actualisent automatiquement lorsqu’ils changent sur le disque
- Découverte et création de skills : découvrez et créez des skills personnalisées dans Work, avec prise en charge de la recherche de skills
- Les composants du tableau de bord épinglés au bureau disposent désormais d’une option « toujours au premier plan »

**Modifications**

- Les nouvelles fenêtres de conversation autonomes prennent désormais en charge le Chat
- Les messages utilisateur trop longs dans la zone de saisie sont désormais repliés

**Corrections**

- Correction de l’aperçu des liens de fichiers PDF sous Windows ; les paramètres Work ne clignotent plus en blanc en mode sombre ; le collage depuis le presse-papiers de Word restaure désormais le texte au lieu d’une pièce jointe image
- Correction de plusieurs bugs et amélioration de certaines interactions et de la stabilité

## 3.1.7 (2026-08-05)

**Nouveautés**

- Prise en charge des commentaires au niveau des messages : vous pouvez aimer ou ne pas aimer des messages précis dans les réponses de l’assistant

**Modifications**

- Les composants de tableau épinglés au bureau ne sont plus contraints de rester au premier plan

**Corrections**

- Correction de plusieurs bugs et amélioration de certaines interactions

## 3.1.6 (2026-07-29)

**Nouveautés**

- L’éditeur de diapositives PPT est disponible : ouvrez et modifiez vos diapositives directement dans le workspace, les changements sont appliqués immédiatement
- Prise en charge de l’annotation de captures d’écran pour les fichiers de la zone d’aperçu et le navigateur ; une fois terminées, les annotations peuvent être envoyées directement à l’Agent pour modification
- Prise en charge de la migration du disque de stockage sous Windows : les données Work peuvent être déplacées vers un autre disque
- L’installation sous Windows permet désormais de choisir l’emplacement d’installation

**Modifications**

- Amélioration de certains problèmes de token efficiency

**Corrections**

- Correction de plusieurs bugs et amélioration de certaines interactions
