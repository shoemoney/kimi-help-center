---
title: "Utilisation avec des agents de codage tiers"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Utilisation avec des agents de codage tiers - Centre d'aide Kimi"
  description="Les avantages Kimi Code peuvent être utilisés avec Claude Code et Roo Code, ce qui vous permet de profiter des capacités d'IA de Kimi au sein de vos outils de codage préférés."
/>

# Utilisation avec des agents de codage tiers

Les avantages Kimi Code peuvent être utilisés avec Claude Code et Roo Code, ce qui vous permet de profiter des capacités d'IA de Kimi au sein de vos outils de codage préférés.

## Prérequis

- Un abonnement Kimi actif avec les avantages Kimi Code activés.
- Une clé API (créée dans la [console Kimi](https://www.kimi.com/code)).

## Utilisation avec Claude Code

[Claude Code](https://code.claude.com/docs/en/overview) est un assistant de codage en ligne de commande proposé par Anthropic.

### Étapes de configuration

Après l'installation, ne démarrez pas Claude directement. Exécutez d'abord le script suivant dans le terminal pour ignorer le flux de connexion par défaut d'Anthropic :

<CodePreview
  files={[
    {
      name: "skip-onboarding.sh",
      content: "node --eval \"\n// enable third party model support and fast mode\nconst claudeJsonFilePath = path.join(os.homedir(), '.claude.json');\nif (fs.existsSync(claudeJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeJsonFilePath, 'utf-8'));\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ ...content, penguinModeOrgEnabled: true, hasCompletedOnboarding: true }, null, 2), 'utf-8');\n} else {\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ penguinModeOrgEnabled: true, hasCompletedOnboarding: true }), 'utf-8');\n}\n\n// delete old model id\nconst claudeSettingsJsonFilePath = path.join(os.homedir(), '.claude', 'settings.json');\nif (fs.existsSync(claudeSettingsJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeSettingsJsonFilePath, 'utf-8'));\n    if (typeof content === 'object' && typeof content.env === 'object') {\n        for (const element of [\n            'ANTHROPIC_MODEL',\n            'ANTHROPIC_SMALL_FAST_MODEL',\n            'CLAUDE_CODE_SUBAGENT_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME',\n        ]) {\n            delete content.env[element];\n        }\n        fs.writeFileSync(claudeSettingsJsonFilePath, JSON.stringify(content, null, 2), 'utf-8');\n    }\n}\n\"",
    },
  ]}
/>

Définissez ensuite les variables d'environnement et lancez :

1. Définissez les variables d'environnement :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. Lancez Claude Code avec le modèle `kimi-for-coding` :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-for-coding",
    },
  ]}
/>

> Dans Claude Code, vous pouvez appuyer sur **Tab** pour passer au modèle Kimi K2 Thinking.

> Si vous rencontrez une erreur 400 provoquée par des appels à `tool_search`, vous pouvez la résoudre temporairement en définissant la variable d'environnement `ENABLE_TOOL_SEARCH=false`.

### Basculer vers HighSpeed

HighSpeed offre une vitesse de sortie environ 5 à 6× supérieure à Standard pour une **consommation de crédits environ 3× supérieure**, et nécessite une formule [Allegretto](https://www.kimi.com/membership/pricing) ou supérieure. Il existe deux façons de l'activer dans Claude Code :

- **Option 1 : la commande `/fast on`** — après avoir démarré Claude Code, tapez `/fast on` ; la sortie `⚡ Fast mode ON` confirme l'activation.
- **Option 2 : la commande `/config`** — tapez `/config` pour ouvrir le panneau de configuration, puis activez **Fast mode** (et **Thinking mode**) sous l'onglet **Config**.

## Utilisation avec Roo Code

[Roo Code](https://github.com/RooCodeInc/Roo-Code) est une extension de codage par IA pour VS Code.

### Installer Roo Code

1. Recherchez **Roo Code** dans la marketplace d'extensions de VS Code et installez-le.
2. Une fois l'installation terminée, l'icône Roo Code apparaît dans la barre d'activité ; si ce n'est pas le cas, redémarrez VS Code.

### Configurer le modèle Kimi Code

1. Ouvrez le panneau Roo Code et accédez à la page **Settings**.
2. Dans la section **Providers**, sélectionnez **OpenAI Compatible** et renseignez les champs suivants :

   | Paramètre | Valeur |
   | --- | --- |
   | Entrypoint | `https://api.kimi.com/coding/v1` |
   | Clé API | Votre clé API |
   | Modèle | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. Enregistrez la configuration, et le tour est joué.

## Remarques importantes

- Les avantages Kimi Code sont uniquement pris en charge dans **Kimi Code CLI**, **Claude Code** et **Roo Code**.
- L'utilisation de votre clé API avec des plateformes ou des outils non autorisés peut être considérée comme une infraction et entraîner une restriction d'accès.
- Pour toute question, consultez la page [Avantages](/kimi-code/benefits) ou contactez l'assistance Kimi.
