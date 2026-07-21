---
title: "Bien démarrer"
slug: "preparation"
order: 0
extract_headings: false
preview: true
preview_content: "Les notions essentielles à connaître avant d’utiliser Kimi Code : terminaux, PowerShell, CLI et bonnes pratiques de sécurité."
---

<SeoMeta
  title="Bien se préparer avant d’utiliser Kimi Code - Centre d’aide Kimi"
  description="Découvrez les bases des terminaux, de PowerShell et de la CLI, ainsi que les bonnes pratiques pour utiliser Kimi Code CLI en toute sécurité pendant le développement."
/>

# Bien démarrer

Avant d’utiliser Kimi Code, quelques notions de base vous seront utiles. Elles vous aideront à installer et à utiliser Kimi Code plus facilement.

## Qu’est-ce qu’un terminal ?

Un **terminal** est une fenêtre qui vous permet de piloter votre ordinateur en saisissant des commandes sous forme de texte.

Vous pouvez l’imaginer comme un « gestionnaire de fichiers en mode texte » : dans un terminal, au lieu de cliquer sur des icônes avec la souris, vous tapez des commandes comme `ls`, `cd` ou `mkdir` pour afficher le contenu d’un dossier, changer de répertoire, créer des fichiers, etc.

### Comment ouvrir un terminal

| Système d’exploitation | Comment l’ouvrir |
|---------|---------|
| **macOS** | Appuyez sur `Cmd + Space`, saisissez "Terminal" ou "终端", puis appuyez sur Entrée |
| **Windows** | Appuyez sur `Win + R`, saisissez `powershell` ou `wt` ;<br>ou recherchez "PowerShell"/"Terminal" dans le menu Démarrer |
| **Linux** | Appuyez sur `Ctrl + Alt + T`, ou cherchez "Terminal" dans le menu des applications |

### Comment vérifier votre système d’exploitation

- **macOS** : cliquez sur l’icône Apple dans l’angle supérieur gauche de l’écran → "À propos de ce Mac"
- **Windows** : appuyez sur `Win + Pause/Break`, ou faites un clic droit sur "Ce PC" → "Propriétés"
- **Linux** : exécutez `uname -a` ou `cat /etc/os-release` dans le terminal

## Qu’est-ce que PowerShell ?

**PowerShell** est un outil de terminal couramment utilisé sous Windows. Il est plus puissant que l’invite de commandes standard (CMD). Sous Windows, Kimi Code CLI doit être installé et utilisé dans PowerShell.

Windows propose deux outils de « ligne de commande » différents. Ne les confondez pas :

| Outil | Description | Adapté ? |
|-----|------|---------|
| **CMD (Invite de commandes)** | L’outil de ligne de commande le plus basique de Windows | ❌ Non recommandé |
| **PowerShell** | Un outil de ligne de commande moderne et plus puissant | ✅ Recommandé |

> **Conseil** : la commande d’installation de Kimi Code CLI doit être exécutée dans PowerShell. Elle risque de ne pas fonctionner correctement dans CMD.

## Répertoire de travail

Au démarrage, Kimi Code CLI utilise votre dossier actuel comme **répertoire de travail**. Il ne peut lire et modifier que les fichiers situés dans ce répertoire de travail.

**Avant de commencer, vérifiez le chemin actuel dans votre terminal** :

- L’invite du terminal affiche généralement le répertoire courant, par exemple `~/projects/my-app$`
- Saisissez `pwd` (macOS/Linux) ou `cd` (Windows) pour afficher le chemin complet
- Utilisez `cd <folder-name>` pour accéder au répertoire du projet cible, puis exécutez `kimi`

> **Exemple** : supposons que votre projet se trouve dans `~/Documents/my-project`. Lancez-le ainsi :
> 1. Ouvrez le terminal
> 2. Saisissez `cd ~/Documents/my-project`
> 3. Saisissez `kimi` pour démarrer

## Comment exécuter des commandes

Exécuter des commandes dans un terminal ou dans PowerShell est simple :

1. **Copiez la commande** : copiez le texte de la commande depuis la documentation
   - macOS/Linux : `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash`
   - Windows : `irm https://code.kimi.com/kimi-code/install.ps1 | iex`
2. **Collez-la dans le terminal** : faites un clic droit dans la fenêtre du terminal, ou appuyez sur `Cmd/Ctrl + V` pour coller
3. **Appuyez sur Entrée** : appuyez sur la touche `Enter` pour exécuter la commande
4. **Attendez la fin de l’exécution** : le terminal affiche le déroulement et le résultat de l’opération

> **Remarque** : dans un terminal, `Ctrl+C` sert généralement à **interrompre la commande en cours** ; cela ne copie pas le texte. Pour copier, utilisez `Cmd/Ctrl + Shift + C` ; pour coller, utilisez `Cmd/Ctrl + Shift + V` ; vous pouvez aussi passer par le menu contextuel.

> **Conseil** : si un mot de passe vous est demandé pendant l’exécution d’une commande, le terminal n’affichera aucun caractère. C’est un mécanisme de sécurité normal. Saisissez simplement le mot de passe, puis appuyez sur Entrée.

## Qu’est-ce que la CLI ?

**CLI** signifie **C**ommand-**L**ine **I**nterface. Cela désigne l’utilisation d’un outil en saisissant des commandes textuelles, plutôt qu’en cliquant sur des boutons dans une interface graphique.

Kimi Code CLI est un outil en ligne de commande : vous saisissez `kimi` dans le terminal pour le lancer, puis vous interagissez avec l’IA au moyen de commandes textuelles afin qu’elle vous aide à lire du code, modifier des fichiers, exécuter des commandes, etc.

## Environnement réseau

Pour utiliser Kimi Code, vous devez pouvoir accéder aux serveurs Kimi. Si votre environnement réseau comporte l’une des restrictions suivantes, vous devrez peut-être ajuster vos paramètres :

- **Réseau d’entreprise ou d’établissement scolaire** : certains environnements intranet peuvent restreindre l’accès aux API externes. Si vous disposez d’un proxy, vous pouvez définir son adresse dans la configuration.
- **VPN/proxy** : si vous utilisez un proxy global, vérifiez qu’il n’intercepte pas et ne perturbe pas les requêtes vers `api.kimi.com` ou `api.moonshot.cn`.
- **Pare-feu** : vérifiez que le pare-feu de votre système ou de votre routeur ne bloque pas l’accès réseau du programme de terminal.

## Bonnes pratiques de sécurité

Kimi Code CLI est un puissant agent IA. Il peut :

- **Lire** le contenu des fichiers sur votre ordinateur
- **Modifier** votre code et vos fichiers de configuration
- **Exécuter** des commandes Shell, par exemple pour installer des dépendances ou lancer des tests

**Gardez les points suivants à l’esprit lorsque vous l’utilisez** :

- **Ne le lancez pas dans des répertoires sensibles** : évitez d’exécuter Kimi Code CLI dans des dossiers contenant des mots de passe, des clés ou des fichiers personnels privés.
- **Vérifiez attentivement les actions** : Kimi Code vous demandera confirmation avant de modifier des fichiers ou d’exécuter des commandes. Ne cliquez pas machinalement sur « Accepter ».
- **Comprenez avant de continuer** : si vous n’êtes pas sûr de l’impact d’une action, demandez à Kimi Code d’expliquer précisément ce qu’il va faire avant de décider de poursuivre.
- **Sauvegardez le code important** : avant d’utiliser Kimi Code sur un projet important, nous vous recommandons de valider votre code dans un système de gestion de versions, comme Git, afin de pouvoir revenir en arrière à tout moment.

> **Recommandation** : lors de la première utilisation, essayez Kimi Code CLI dans un projet de test ou dans une copie de votre projet. Une fois que vous connaissez son fonctionnement, utilisez-le dans vos projets de production.
