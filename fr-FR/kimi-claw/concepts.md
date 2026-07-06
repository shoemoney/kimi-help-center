---
title: "Concepts fondamentaux et terminal"
slug: "concepts"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Concepts fondamentaux et terminal - Centre d'aide Kimi"
  description="Comprenez les concepts clés de Kimi Claw — Memory, Skills, HEARTBEAT, Identity, Soul, Tools et User — ainsi que les commandes du terminal pour vérifier le gateway, l'état du bot, les skills et les tâches planifiées."
/>

# Concepts fondamentaux et terminal

## Concepts clés

| Concept | Description |
|---------|-------------|
| **Memory** | Système de mémoire à long terme de Kimi Claw. Conserve vos préférences, vos habitudes et les informations importantes d'une conversation à l'autre. |
| **Skills** | Modules de capacités installables depuis la bibliothèque ClawHub, qui dotent Kimi Claw d'une expertise propre à chaque domaine. |
| **HEARTBEAT** | Tâches d'arrière-plan planifiées qui s'exécutent à intervalles réguliers — idéales pour les rappels récurrents, les extractions de données et les synthèses. |
| **Identity** | Définition du rôle de Kimi Claw : nom, profession, persona. Entièrement personnalisable par vos soins. |
| **Soul** | Traits de personnalité fondamentaux et principes de comportement qui façonnent le style d'interaction de Kimi Claw. |
| **Tools** | L'ensemble des capacités que Kimi Claw peut mobiliser — recherche sur le web, gestion de fichiers, exécution de code et bien plus. |
| **User** | Définition de la relation entre vous et Kimi Claw, qui régit les modes d'interaction et le partage d'informations. |

## Terminal

<Frames
  src="./images/concepts/screenshot-30.png"
  alt="screenshot 30"
/>

Vous pouvez ouvrir une interface en ligne de commande via **Settings → Terminal** sur le web, puis exécuter des commandes pour piloter Kimi Claw directement.

Sinon, indiquez simplement à Kimi Claw la commande à lancer en langage courant — il l'exécutera pour vous.

> Remarque : le Terminal et les plugins partagent le même canal de connexion. Redémarrer le gateway OpenClaw déconnecte le Terminal.

## Référence des commandes

### Système

| Commande | Description |
|---------|-------------|
| `/help` | Afficher les informations d'aide |
| `/status` | Consulter l'état actuel du système |
| `/ping` | Vérifier si la connexion est active |
| `/cron` | Gérer les tâches planifiées |
| `/config` | Consulter ou modifier la configuration |
| `/new` | Démarrer une nouvelle conversation (efface le contexte actuel) |
| `/reset` | Réinitialiser Kimi Claw |
| `/compact` | Compresser le contexte de la conversation en cours |
| `/stop` | Arrêter la tâche en cours d'exécution |

### Skills

| Commande | Description |
|---------|-------------|
| `/skills` | Parcourir, installer et gérer les skills |

### Tâches planifiées

| Commande | Description |
|---------|-------------|
| `/cron` | Consulter et gérer la planification des tâches |

### Memory

| Commande | Description |
|---------|-------------|
| `/memory` | Consulter et gérer la mémoire à long terme |

### Configuration et débogage

| Commande | Description |
|---------|-------------|
| `/config` | Consulter ou modifier la configuration du système |
| `/logs` | Consulter les journaux d'exécution |
| `/debug` | Activer le mode débogage pour des diagnostics détaillés |
