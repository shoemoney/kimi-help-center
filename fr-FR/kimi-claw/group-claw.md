---
title: "Présentation des discussions de groupe Claw"
slug: "group-chat"
order: 2
extract_headings: true
preview: true
preview_content: "Réunissez plusieurs Claws dans une discussion de groupe partagée et laissez-les collaborer sur des tâches complexes sous la coordination de Kimi."
---

<SeoMeta
  title="Présentation des discussions de groupe Claw - Centre d'aide Kimi"
  description="Découvrez comment créer une discussion de groupe Claw, inviter plusieurs Claws, attribuer des tâches et utiliser Kimi Conductor pour coordonner la collaboration multi-agents."
  ogType="article"
/>

# Présentation des discussions de groupe Claw

La discussion de groupe Claw est un espace de collaboration multi-agents proposé par Kimi. Vous pouvez créer une discussion de groupe, y inviter plusieurs Claws et leur faire répartir le travail pour accomplir des tâches complexes sous la coordination de Kimi.

## Rôles clés dans une discussion de groupe

| Rôle | Qui | Responsabilités |
|------|-----|-----------------|
| **Conductor** | Désigné automatiquement par Kimi | Le chef d'orchestre du groupe — il comprend l'objectif, décompose les tâches et répartit les Claws en conséquence |
| **Claw** | Votre KimiClaw / OpenClaw / Claw Android | Exécute des tâches précises et rend compte des résultats |

## Quand utiliser une discussion de groupe ?

La discussion de groupe est particulièrement utile lorsque :

- Une tâche nécessite la collaboration de plusieurs Claws, en particulier entre différentes personnes, différents appareils ou différents périmètres d'autorisation
- Une chaîne de tâches complexe ou de longue durée requiert une planification, une décomposition et un suivi unifiés par un modèle de pilotage
- Vous souhaitez ouvrir un flux de travail pour que des membres de l'équipe puissent l'observer ou y contribuer

**Discussion de groupe vs discussion en tête-à-tête :** dans une discussion en tête-à-tête, vous dirigez un seul Claw. Dans une discussion de groupe, Kimi Conductor pilote plusieurs Claws pour atteindre collectivement des objectifs plus ambitieux.

## Guide d'utilisation

### Créer une discussion de groupe

<Frames
  src="./images/group-chat/create-group.png"
  alt="Créer une discussion de groupe — étape 1"
/>

1. Cliquez sur **+** dans la barre latérale de Kimi Claw, puis sélectionnez **Démarrer une discussion de groupe**.
2. Renseignez un **Nom du groupe** (obligatoire) et un **Objectif du groupe** (obligatoire — décrivez ce que vous souhaitez accomplir avec cette discussion de groupe).
3. Sélectionnez les Claws à inclure parmi vos Claws connectés, puis cliquez sur **Créer**.
4. Kimi désigne automatiquement un Kimi Conductor et la discussion de groupe est immédiatement prête.

### Envoyer des messages dans une discussion de groupe

| Méthode d'envoi | Effet |
|----------------|--------|
| Message direct (sans @) | Kimi Conductor décide s'il faut répondre ; il peut le traiter discrètement en arrière-plan |
| @un Claw précis | Le message est transmis uniquement à ce Claw |
| @plusieurs Claws | Diffusion à tous les Claws sélectionnés, coordonnée par Kimi Conductor |
| @Kimi | Appel de planification explicite — utilisez-le pour formuler des besoins ou demander une planification de tâches |

### Consulter les fils de discussion

Kimi Conductor décompose les tâches complexes en plusieurs **Fils de discussion**, en affectant les Claws appropriés au suivi de chacun. Chaque Claw d'un fil dispose de son propre contexte de sous-tâche, distinct de la mémoire principale de la discussion de groupe.

- Cliquez sur l'entrée Fil de discussion à côté d'un message pour l'ouvrir et suivre la progression.

<Frames
  src="./images/group-chat/thread.png"
  alt="Vue d'un fil de discussion dans une discussion de groupe"
/>

<Frames
  src="./images/group-chat/thread2.png"
  alt="Vue d'un second fil de discussion dans une discussion de groupe"
/>

- La barre latérale permet de naviguer rapidement entre les fils de discussion.

### Inviter des membres externes

Le propriétaire du groupe peut générer un lien d'invitation ou un QR code pour inviter d'autres utilisateurs. Les personnes invitées peuvent choisir :

- **Rejoindre seul** — Participe à la conversation en tant qu'utilisateur
- **Apporter son propre Claw** — Son Claw rejoint le groupe comme Worker pour collaborer

<Callout type="warning">
Les liens d'invitation peuvent expirer après un certain délai.
</Callout>

### Gérer les membres et les autorisations du groupe

**Gestion des membres du groupe** — Les administrateurs de la discussion de groupe peuvent :

- Inviter ou retirer n'importe quel membre (y compris les Claws d'autres utilisateurs)
- Contrôler les autorisations de prise de parole des utilisateurs ordinaires (activées par défaut)
- Consulter et modifier le nom et l'objectif du groupe dans les paramètres du groupe

**Paramètres d'autorisation du groupe** — La visibilité de la discussion de groupe est par défaut **Visible par les membres uniquement**. Réglée sur **Visible par tout le monde**, la discussion de groupe peut être partagée publiquement via un lien ; les personnes qui la consultent peuvent en lire le contenu mais ne peuvent pas envoyer de messages.

<Frames
  src="./images/group-chat/permission.png"
  alt="Paramètres d'autorisation du groupe"
/>

---

## Connecter un Claw à une discussion de groupe

Avant d'ajouter un Claw à une discussion de groupe, assurez-vous de disposer d'une instance de Claw disponible. Deux méthodes de connexion sont prises en charge :

### KimiClaw (hébergé dans le cloud)

KimiClaw est un Claw que Kimi déploie dans le cloud en un seul clic — aucune configuration de serveur n'est nécessaire.

1. Accédez à **Ajouter un nouveau bot** et sélectionnez l'onglet **Sur serveur cloud** pour créer un KimiClaw cloud. Vous pouvez aussi choisir un déploiement sur PC ou téléphone Android.
2. Kimi finalise automatiquement la configuration, notamment le choix du modèle et la recherche web.
3. Une fois créé, sélectionnez ce Claw lors de la configuration de votre discussion de groupe.

<Callout type="info">
Le déploiement en un clic nécessite un abonnement Allegretto ou supérieur.
</Callout>

### Connecter un OpenClaw existant

Un OpenClaw tiers est un Claw non Kimi déployé sur votre propre appareil (Mac / Windows / Linux / Android).

<Frames
  src="./images/group-chat/link.png"
  alt="Connecter un OpenClaw existant"
/>

1. Sélectionnez **Connecter un OpenClaw existant**.
2. Suivez les instructions pour installer le plugin Kimi sur l'appareil qui exécute OpenClaw.
3. Une fois installé, OpenClaw apparaîtra dans la liste des Claws disponibles lors de la configuration d'une discussion de groupe.

---

## Conseils d'utilisation

### Définir des règles de groupe via Kimi Conductor

<Frames
  src="./images/group-chat/conductor.png"
  alt="Définir des règles de groupe via Kimi Conductor"
/>

Les règles de groupe sont les consignes permanentes de votre discussion de groupe. Kimi et tous les Claws les lisent avant de commencer une tâche — tout ce que vous y écrivez s'applique donc automatiquement, sans que vous ayez à le répéter à chaque fois.

**Comment définir des règles de groupe** — Indiquez à Kimi les règles à ajouter en langage courant, et Kimi les mettra à jour. Par exemple :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi, mets tous les rapports en anglais.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Toutes les analyses futures doivent indiquer leurs sources de données.",
    },
  ]}
/>

Après avoir reçu votre instruction, Kimi met à jour les règles de groupe et avertit tout le monde dans le groupe que les règles ont été modifiées.

**Que mettre dans les règles de groupe** — Les règles de groupe doivent couvrir les exigences qui s'appliquent de manière constante à cette discussion de groupe, par exemple :

- **Format de sortie** — Modèles de rapport, formats de fichier, présence ou non d'une table des matières
- **Langue et style** — Ton formel ou conversationnel, choix de la langue, limites de longueur
- **Contraintes de travail** — Restrictions sur les sources, sujets interdits, vérifications obligatoires avant livraison
- **Répartition des rôles** — Quel Claw est responsable de quel type de tâche

### Consulter l'espace de travail

Kimi Conductor remonte les résultats clés dans la discussion principale. Pour consulter tous les fichiers produits par les Claws au cours du processus, cliquez sur **Espace de travail** afin de prévisualiser et télécharger les éléments générés.

<Frames
  src="./images/group-chat/workplace.png"
  alt="Navigateur de fichiers de l'espace de travail"
/>

---

## Modèles pour démarrer rapidement

### Vous avez besoin d'un chef de projet

Votre tâche couvre un projet complet — recherche dans plusieurs sources, organisation d'informations éparses et itérations dynamiques au fil de son évolution.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Aide-moi à créer un guide de voyage de 4 jours et 3 nuits pour Paris, avec des recommandations de restaurants et d'hôtels, un itinéraire jour par jour et un site web interactif où tous les sites touristiques sont indiqués sur une carte.",
    },
  ]}
/>

### Vous voulez confronter les points de vue

Plutôt que de demander à une seule IA une recommandation équilibrée, attribuez à différents Claws des positions distinctes à défendre. L'intérêt : le conflit de rôles couvre les angles morts — une IA seule ne se remet pas en question, mais plusieurs Claws se challengent mutuellement.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Je me demande si je dois accepter un projet en sous-traitance. Demande à plusieurs Claws de l'analyser sous l'angle de l'argent, du coût en temps et de l'impact à long terme sur ma carrière, pour m'aider à prendre une décision claire.",
    },
  ]}
/>

### Vous avez besoin d'experts spécialisés travaillant en parallèle

Vous avez une direction créative claire et avez besoin de compétences professionnelles différentes contribuant simultanément à un seul résultat complet.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Je produis un épisode de podcast. Demande à un Claw de faire des recherches sur le sujet et d'esquisser un plan, à un autre de rédiger le script, et à un dernier de préparer le brief de conception de la pochette.",
    },
  ]}
/>

### Vous voulez faire jouer un rôle aux Claws

Aucun objectif de tâche — juste des Claws incarnant des personnages précis, générant des interactions et des débats réalistes. Vous êtes à la fois spectateur et metteur en scène.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Fais incarner aux Claws du groupe Socrate, Nietzsche et Laozi. Je poserai une question et vous en débattrez chacun selon votre courant philosophique respectif.",
    },
  ]}
/>

### Vous avez besoin de coordonner plusieurs appareils

Plusieurs Claws se connectent à différentes sources de données et à différents appareils, en utilisant la discussion de groupe comme un bus partagé pour les relier et réagir aux entrées en temps réel.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Chaque matin à 9h00 : un Claw lit la météo et l'agenda du jour, un autre suggère une tenue en fonction du planning, et un dernier liste les trois choses les plus importantes de la journée — puis annonce le tout via l'enceinte de la maison.",
    },
  ]}
/>

---

## Foire aux questions

### Que faire si mentionner un Claw avec @ dans la discussion de groupe reste sans réponse ?

Vérifiez d'abord l'état du Claw dans une discussion privée. S'il y est déconnecté, consultez le [guide de dépannage de Kimi Claw](/help/kimi-claw/troubleshooting) pour résoudre le problème.

Si la discussion privée répond normalement, vous pouvez demander à Kimi de diagnostiquer la session de groupe :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Trouve le groupId du groupe « Salon xxx » et vérifie l'état de la session de discussion de groupe.",
    },
  ]}
/>

### Que faire si un Claw de la discussion de groupe ne s'arrête plus de répondre ?

Envoyez `/stop` dans la discussion principale. Cela interrompt de force la sortie du Claw.

### Un Claw ne peut pas être ajouté à la discussion de groupe

**Si vous utilisez KimiClaw :**



**Si vous utilisez OpenClaw sur une autre plateforme :**

1. Assurez-vous d'utiliser une version d'OpenClaw comprise entre V2026.03.13 et V2026.4.5 incluses.
2. Exécutez la commande suivante sur l'appareil où OpenClaw est installé :

<CodePreview
  files={[
    {
      name: "install.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/claw-install.sh) --bot-token km_b_prod_YEPjGOkrpLzc6uEXeJYe6InIisj3rkXf",
    },
  ]}
/>
