---
title: "Premiers pas"
slug: "cli-getting-started"
order: 3
extract_headings: false
preview: true
preview_content: "Guide d'installation, de connexion et de démarrage de Kimi Code CLI."
---

<SeoMeta
  title="Installation et démarrage rapide de Kimi Code CLI - Centre d'aide Kimi"
  description="Démarrez avec Kimi Code CLI : commandes d'installation, utilisation dans le terminal et le navigateur, première connexion, et génération d'AGENTS.md avec /init."
/>

# Premiers pas avec Kimi Code CLI

Kimi Code CLI est un agent IA qui s'exécute dans le terminal pour vous aider à accomplir des tâches de développement logiciel et des opérations quotidiennes en ligne de commande : lire et modifier du code, exécuter des commandes shell, rechercher des fichiers, récupérer des pages web, et planifier puis ajuster de façon autonome ses prochaines étapes en fonction des retours obtenus au fil du travail.

Il convient à des scénarios tels que :

- **Écrire et modifier du code** : implémenter de nouvelles fonctionnalités, corriger des bugs, mener des refactorisations à leur terme
- **Comprendre un projet** : explorer une base de code inconnue et répondre à des questions sur son architecture et son implémentation
- **Automatiser des tâches** : traiter des fichiers par lots, lancer des builds et des tests, enchaîner plusieurs scripts

La CLI est écrite en TypeScript, distribuée via npm, et s'exécute sur Node.js.

## Avant de commencer

- **Système d'exploitation** : macOS, Linux ou Windows (via PowerShell)
- **Compte Kimi** : un abonnement Kimi actif, ou une clé API utilisable

<Callout type="tip">
Kimi Code CLI est une application TUI entièrement interactive. Pour une expérience visuelle optimale, exécutez-la dans un terminal prenant en charge les couleurs vraies (true-color) et les ligatures, tel que [Kitty](https://sw.kovidgoyal.net/kitty/) ou [Ghostty](https://ghostty.org/).
</Callout>

## Installation

Deux options d'installation sont disponibles : le script d'installation officiel (recommandé, aucune installation préalable de Node.js requise) et une installation globale via npm.

### Script d'installation (recommandé)

macOS / Linux :

<Frames
  src="./images/cli-getting-started/screenshot-23.png"
  alt="Installation de Kimi Code CLI"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

Windows (PowerShell) :

<CodePreview
  files={[
    {
      name: "command.ps1",
      language: "powershell",
      content: "irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

Le script télécharge automatiquement la dernière version, vérifie la somme de contrôle et place l'exécutable `kimi` dans votre `PATH`.

<Callout type="tip">
Sous Windows, installez [Git for Windows](https://gitforwindows.org/) avant le premier lancement. Kimi Code CLI utilise le Git Bash fourni comme environnement shell ; si Git Bash est installé à un emplacement personnalisé, définissez `KIMI_SHELL_PATH` sur le chemin absolu de `bash.exe`.
</Callout>

### Installation via npm

Si Node.js 22.19.0 ou une version ultérieure est déjà installé, vous pouvez installer directement via npm :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "node --version\nnpm install -g @moonshot-ai/kimi-code",
    },
  ]}
/>

Ou avec pnpm :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "pnpm add -g @moonshot-ai/kimi-code",
    },
  ]}
/>

### Vérifier l'installation

Une fois l'installation terminée, vérifiez que l'exécutable est prêt :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>

<Callout type="tip">
Si la commande `kimi` est introuvable, rouvrez votre terminal ou exécutez `source ~/.bashrc` (ou `~/.zshrc`).
</Callout>

> En raison de Gatekeeper sur macOS, le premier lancement de `kimi` peut prendre sensiblement plus de temps. Vous pouvez accélérer les lancements suivants en ajoutant votre application de terminal à **Réglages Système → Confidentialité et sécurité → Outils de développement**.

## Mise à jour et désinstallation

**Mise à jour** : exécutez `kimi upgrade` — la CLI recherche la dernière version et propose des options de mise à jour. Choisissez `Install update now` pour effectuer la mise à jour selon votre source d'installation actuelle. Vous pouvez aussi mettre à jour directement via le gestionnaire de paquets :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

**Désinstallation** : si vous avez installé via le script, supprimez l'exécutable `kimi`. Si vous avez installé via npm :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm uninstall -g @moonshot-ai/kimi-code",
    },
  ]}
/>

## Premier lancement

### Terminal interactif

Placez-vous dans le répertoire de votre projet et exécutez `kimi` pour démarrer l'interface interactive :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd your-project\nkimi",
    },
  ]}
/>

### Instruction unique

Pour exécuter une seule instruction sans entrer dans l'interface interactive, utilisez `-p` :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"Take a look at this project's directory structure\"",
    },
  ]}
/>

### Reprendre une session

Pour reprendre la session précédente, ajoutez `-C` :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -C",
    },
  ]}
/>

### Première connexion

Lors du premier lancement, vous devez configurer une source API. Dans l'interface interactive, saisissez `/login` pour lancer le processus de connexion :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

`/login` ouvre un sélecteur de plateforme proposant deux options :

- **Kimi Code (OAuth)** — flux par code d'appareil ; ouvrez le lien sur n'importe quel appareil, connectez-vous, puis saisissez le code pour autoriser
- **Clé API Kimi Platform** — saisissez une clé API issue de `platform.kimi.com` ou `platform.kimi.ai`

Pour vous déconnecter, saisissez `/logout` afin d'effacer les identifiants actuels.

<Callout type="tip">
Si vous souhaitez vous connecter à Anthropic, OpenAI, Google ou d'autres fournisseurs, modifiez directement `~/.kimi-code/config.toml` pour configurer la clé API. Pour la référence complète de toutes les options de configuration, consultez la documentation sur les variables d'environnement et les surcharges de configuration.
</Callout>

## Générer AGENTS.md

Exécutez la commande `/init` dans le répertoire de votre projet. Kimi Code CLI analysera automatiquement la structure du projet et générera un fichier `AGENTS.md` :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

`AGENTS.md` sert à fournir à l'IA des informations de contexte sur le projet, les étapes de build, les conventions de code et d'autres éléments de contexte afin de l'aider à mieux comprendre votre projet.

## Votre première conversation

Une fois connecté, décrivez une tâche en langage naturel. Un bon point de départ consiste à laisser Kimi Code CLI se familiariser avec le projet :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Take a look at this project's directory structure and briefly describe what each directory is for.",
    },
  ]}
/>

Kimi Code CLI appelle automatiquement des outils de lecture de fichiers, de recherche et d'autres pour parcourir le contenu pertinent avant de répondre. Par défaut, les opérations en lecture seule sont exécutées automatiquement sans demander de confirmation. Pour les opérations qui modifient des fichiers ou exécutent des commandes shell, il vous demande votre confirmation avant de poursuivre.

Vous pouvez aussi décrire directement une tâche plus concrète :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Add a function in src/utils that converts any string to kebab-case, and add a unit test for it.",
    },
  ]}
/>

Kimi Code CLI planifie les étapes, modifie le code, exécute les tests et vous indique ce qu'il a fait à chaque étape.

<Callout type="tip">
Vous ne savez pas par où commencer ? Tapez `/help` à tout moment pour ouvrir le panneau intégré des commandes et raccourcis clavier. Utilisez `↑`/`↓` pour parcourir et `Esc` pour fermer. Pour quitter, tapez `/exit`, appuyez deux fois sur `Ctrl-C`, ou appuyez sur `Ctrl-D` lorsque le champ de saisie est vide.
</Callout>

## Commandes et raccourcis clavier courants

### Commandes de session

| Commande | Description |
| --- | --- |
| `/new` | Démarrer une nouvelle session en effaçant le contexte actuel |
| `/sessions` | Parcourir l'historique des sessions et en choisir une à reprendre |
| `/model` | Changer le modèle actuel |
| `/compact` | Compresser manuellement le contexte pour libérer des tokens |
| `/fork` | Forker la session actuelle en conservant l'historique mais en poursuivant de façon indépendante |

### Raccourcis clavier les plus utilisés

| Raccourci | Description |
| --- | --- |
| `Esc` | Interrompre la sortie en flux continu / fermer une fenêtre contextuelle |
| `Ctrl-C` | Interrompre la sortie ; appuyez deux fois en mode inactif pour quitter |
| `Shift-Tab` | Activer/désactiver le mode Plan |
| `Ctrl-S` | Injecter un message en cours de flux sans attendre la fin de la réponse en cours |
| `Ctrl-O` | Réduire / développer la sortie des outils |

Pour la liste complète, tapez `/help` ou consultez [Interaction et saisie](/kimi-code/cli-interaction).

## Où les données sont-elles stockées

Par défaut, Kimi Code CLI stocke ses données locales dans `~/.kimi-code/` — fichiers de configuration, enregistrements de session, journaux et cache de mise à jour. Pour les déplacer ailleurs, indiquez un nouveau chemin via la variable d'environnement `KIMI_CODE_HOME`. Pour l'arborescence complète des répertoires, consultez la documentation sur les variables d'environnement.

## FAQ

**J'ai saisi ma clé API, mais le message indique que l'authentification a échoué.**

Vérifiez d'abord que votre clé et votre Base URL appartiennent à la même plateforme. `api.kimi.com` et `api.moonshot.cn` sont deux systèmes de comptes entièrement indépendants, et leurs clés API ne sont pas interchangeables :

| Plateforme | Base URL | Facturation | Création de clé |
|------|---------|---------|-------------|
| **Kimi Code** | Compatible OpenAI : `https://api.kimi.com/coding/v1`<br> Compatible Anthropic : `https://api.kimi.com/coding/` | Abonnement Kimi (quota inclus) | [Console Kimi Code](https://www.kimi.com/code/console) |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1` | Paiement à l'usage | [Kimi Open Platform](https://platform.kimi.com) |

**La commande `kimi` est introuvable après l'installation.**

Le script d'installation ajoute `kimi` à votre PATH, mais vous devez redémarrer le terminal ou exécuter `source ~/.bashrc` (ou `source ~/.zshrc`) pour que cela prenne effet. Si elle reste introuvable, vérifiez que `~/.local/bin` figure bien dans votre PATH.

**Le navigateur ne s'est pas ouvert après l'exécution de `/login`.**

Dans un environnement de serveur distant ou sans interface graphique (headless), `/login` affichera une URL. Copiez-la manuellement dans votre navigateur pour terminer l'autorisation.

Pour tout problème ou suggestion, faites part de vos retours sur [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues).

## Étapes suivantes

- [Interaction et saisie](/kimi-code/cli-interaction) — opérations du champ de saisie, processus d'approbation, mode Plan et mode YOLO expliqués
- [Sessions et contexte](/kimi-code/cli-sessions) — reprendre des sessions, compresser le contexte, exporter des sessions
- [Cas d'usage courants](/kimi-code/cli-use-cases) — exemples de prompts pour des tâches typiques
