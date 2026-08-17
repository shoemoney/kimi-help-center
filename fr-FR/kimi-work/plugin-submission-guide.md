---
title: "Créer et soumettre des plugins"
slug: "plugin-submission-guide"
order: 4
extract_headings: false
preview: true
preview_content: "Transformez votre produit ou service en plugin Kimi, testez-le et postulez pour son inclusion dans le marché officiel."
---

<SeoMeta
  title="Créer et soumettre des plugins - Centre d'aide Kimi"
  description="Apprenez à créer et tester un plugin dans Kimi Work et postulez pour son inclusion dans le marché officiel des plugins Kimi."
/>

# Créer et soumettre des plugins

Si vous souhaitez connecter votre produit ou service à Kimi afin que les utilisateurs puissent accéder à ses fonctionnalités dans une conversation, suivez ce guide pour créer, tester et soumettre un plugin pour le marché officiel des plugins Kimi.

## Qu'est-ce qu'un plugin Kimi ?

Un plugin Kimi connecte votre produit à Kimi. Il aide Kimi à comprendre quand votre produit est utile et lui fournit les workflows ou outils nécessaires pour aider les utilisateurs. Un plugin peut contenir :

- **Compétences uniquement** : workflows réutilisables adaptés à votre produit ou cas d'utilisation.
- **MCP uniquement** : outils et services exposés à Kimi via un serveur MCP.
- **Compétences et MCP** : outils du produit combinés à des workflows qui aident Kimi à les utiliser efficacement.

## Avant de commencer

Commencez par <a href="https://www.kimi.com/products/kimi-work">télécharger et installer Kimi Work</a>. Préparez les éléments suivants :

- Un nom, une description et un logo pour le plugin
- Les tâches principales que les utilisateurs devraient pouvoir accomplir en langage naturel
- Une URL de serveur MCP, le cas échéant

<Callout type="warning">
Si le logo du plugin inclut un produit, une marque ou une marque déposée tierce, contactez le détenteur des droits concerné et obtenez l'autorisation écrite nécessaire avant de soumettre.
</Callout>

## Étape 1 : Créez et testez le plugin

1. Ouvrez Kimi Work, tapez "/" dans une conversation et sélectionnez **Plugin Builder**.
2. Décrivez le plugin et fournissez les informations que vous avez préparées. Si vous avez déjà un plugin Codex, Claude ou d'une autre plateforme, fournissez ses fichiers ou l'URL du projet et suivez les instructions pour le convertir.

3. Allez dans **Plugins** → **Personnel**, trouvez le plugin et installez-le.

4. Testez les fonctionnalités principales dans une nouvelle conversation, y compris les cas normaux et limites. Conservez au moins trois invites de test représentatives.
5. Suivez les instructions de Plugin Builder pour obtenir le fichier ZIP complet du plugin.

Pour un plugin basé sur MCP, testez également son flux d'authentification :

- **Pas d'authentification** : les utilisateurs peuvent utiliser le plugin immédiatement après l'installation.
- **OAuth** : la page d'autorisation tierce devrait s'ouvrir lors de la première installation.
- **Authentification CLI** : l'installation ne démarre pas l'autorisation. La première fois que les utilisateurs invoquent le plugin, ils complètent l'autorisation dans la conversation. Après une autorisation réussie, ils ne devraient généralement pas avoir besoin de s'autoriser à nouveau dans d'autres conversations.

## Étape 2 : Soumettez votre candidature

Après avoir créé et testé le plugin, complétez le [formulaire de soumission de plugin Kimi](https://moonshot.feishu.cn/share/base/form/shrcnZcnxlNJlbw845KoVgjEhkh) et téléchargez le fichier ZIP du plugin.

Le formulaire demande :

| Élément | Exigence |
| --- | --- |
| Nom, description et fichier ZIP du plugin | Obligatoire |
| Type de plugin | Compétences uniquement, MCP uniquement ou hybride |
| Authentification MCP | Obligatoire pour les plugins MCP uniquement et hybrides |
| Régions ciblées | Chine continentale, outre-mer ou les deux |
| Points forts et invites de test recommandées | Au moins trois invites de test |
| Intérêt pour le co-marketing et matériel | Le matériel est facultatif et seulement nécessaire si vous souhaitez discuter de co-marketing |
| Statut d'autorisation et de conformité | Divulguez les éléments nécessitant une discussion supplémentaire |
| E-mail de contact | Utilisé pour les mises à jour de l'examen et les demandes d'informations supplémentaires |
| Société ou équipe, site web associé et notes | Facultatif |

<Callout type="warning">
N'incluez pas de mots de passe, tokens, clés API, clés privées ou autres secrets dans le formulaire ou le fichier ZIP du plugin. Si les utilisateurs ont besoin de leur propre clé, expliquez seulement comment ils peuvent l'obtenir et la configurer.
</Callout>

## Ce qui se passe ensuite

L'équipe Kimi examinera la candidature et le fichier ZIP du plugin. Si le plugin passe l'examen, ou si nous avons besoin de plus d'informations ou de modifications, nous vous contacterons à l'adresse e-mail fournie et partagerons les prochaines étapes.

## FAQ

### Puis-je soumettre un plugin sans serveur MCP ?

Oui. Les plugins uniquement compétences sont pris en charge. Sélectionnez **Compétences uniquement** comme type de plugin.

### Puis-je soumettre un plugin Codex, Claude ou d'une autre plateforme ?

Oui. À l'étape 1, fournissez les fichiers du plugin existant ou l'URL du projet à Plugin Builder et suivez les instructions pour le convertir. Installez et testez le plugin converti dans Kimi Work avant de soumettre le fichier ZIP généré.

### Quelles méthodes d'authentification MCP sont prises en charge ?

Les trois méthodes suivantes sont actuellement prises en charge :

- **Pas d'authentification** : Les utilisateurs peuvent utiliser le plugin immédiatement après l'installation sans se connecter ou compléter toute autre vérification d'identité.
- **OAuth** : Les utilisateurs sont automatiquement redirigés vers la page d'autorisation du produit tiers lorsqu'ils installent le plugin pour la première fois. Ils peuvent utiliser le plugin après l'autorisation.
- **Authentification CLI** : L'installation ne démarre pas un flux d'autorisation. La première fois que les utilisateurs invoquent le plugin dans une conversation, ils complètent l'autorisation en utilisant les instructions affichées dans la conversation. Après une autorisation réussie, ils n'ont généralement pas besoin de s'autoriser à nouveau dans d'autres conversations.

Testez le flux qui correspond à la méthode d'authentification réelle de votre plugin. Si un plugin OAuth ne redirige pas lors de la première installation, ou si un plugin authentifié CLI demande répétitivement aux utilisateurs de s'autoriser, vérifiez la configuration d'authentification du serveur MCP avant de soumettre votre candidature et décrivez le problème dans **Notes supplémentaires**.

### À quoi ressemble le flux d'autorisation OAuth ?

Pour un serveur MCP activé OAuth, Plugin Builder identifie les informations d'autorisation pertinentes à partir de l'URL du serveur MCP. Après la création du plugin, les utilisateurs sont dirigés vers la page d'autorisation du produit tiers la première fois qu'ils l'installent.

### Que faire si je souhaite explorer un partenariat plus large avec Kimi ?

Commencez par compléter le processus de création, de test et de soumission du plugin décrit dans ce guide. Si vous souhaitez explorer d'autres formes de collaboration au-delà de l'inscription du plugin, décrivez brièvement votre proposition dans **Notes supplémentaires**. L'équipe Kimi peut vous contacter en fonction des circonstances.

### La soumission d'une candidature garantit-elle l'inscription ?

Non. L'équipe Kimi évalue la fonctionnalité du plugin, l'expérience utilisateur, la sécurité, la fiabilité du service et le statut d'autorisation pertinent.
