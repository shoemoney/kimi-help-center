---
title: "Capacités full-stack de Kimi Websites"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
preview_content: "Capacités full-stack de Kimi Websites et limites actuelles."
---

<SeoMeta
  title="Pourquoi le site web généré par Kimi ne fonctionne-t-il pas ? - Centre d’aide Kimi"
  description="Découvrez le périmètre de fonctionnalités actuel de Kimi Websites et ses limites. Les scénarios non pris en charge incluent les paiements tiers, OAuth et les intégrations API complexes."
/>

# Capacités full-stack de Kimi Websites

## Mise à niveau de la création de sites web full-stack

Un site web complet comprend généralement trois parties : **interface front-end, services back-end et stockage des données**. Kimi Websites a été enrichi de capacités de création de sites web full-stack, avec la génération et le déploiement de bout en bout, des pages front-end aux bases de données back-end.

| Capacité         | Description                                                           |
|--------------|----------------------------------------------------------------|
| Génération front-end     | Structure de page HTML/CSS/JavaScript, styles et logique d’interaction                    |
| Base de données back-end   | Crée automatiquement une base de données back-end, avec prise en charge de la lecture/écriture persistante des données et de la gestion visuelle               |
| Connexion utilisateur     | Prend en charge la connexion avec un compte Kimi et peut également créer, via la base de données, un système de connexion par compte et mot de passe           |
| Gestion des versions     | L’IA enregistre automatiquement les versions et permet de revenir à n’importe quelle version antérieure                      |
| Aperçu full-stack     | Prend en charge l’aperçu complet du front-end et du back-end ; certains scénarios nécessitent le démarrage manuel de l’environnement bac à sable                   |
| Publication et déploiement   | Cliquez manuellement sur "Publier" pour déployer le site sur l’Internet public. Avant publication, le site est uniquement disponible en aperçu. Le déploiement de contenu full-stack est pris en charge  |

## Livrables de l’agent

- Fichiers complets d’exécution de la tâche, incluant le code front-end et back-end
- Un site web full-stack consultable en ligne en aperçu et publiable
- Une archive Zip téléchargeable située dans le répertoire `/mnt/agents/output/app/`

## Cas d’utilisation

| Scénario             | Exemple de prompt                                                       |
|------------------|------------------------------------------------------------------|
| Créer une landing page de zéro   | Crée une landing page marketing pour un produit SaaS au style technologique, avec une section hero, une présentation des fonctionnalités, les tarifs et un CTA |
| Reproduire à partir d’une capture d’écran         | [Téléverser une capture d’écran de maquette] Transforme cette maquette en code de page web exécutable               |
| Portfolio personnel       | Crée un site web de portfolio personnel pour un photographe, avec un style noir et blanc minimaliste et la prise en charge d’une mise en page d’images en masonry        |
| Page de visualisation de données     | Crée une page web de visualisation de données présentant les financements des entreprises d’IA en 2025, avec graphiques et filtres |
| Site de marque         | Crée le site officiel d’une marque de café, avec une palette de couleurs Morandi, une page d’accueil, des pages produit et des pages de boutiques      |
| Application protégée par connexion     | Crée un site web de base de connaissances interne pour une équipe, dont le contenu n’est consultable qu’après connexion                   |
| Administration de gestion des données     | Crée un système d’inscription à des événements où les utilisateurs peuvent envoyer des informations enregistrées dans une base de données, et où les administrateurs peuvent consulter la liste des inscriptions |
| Outil/calculateur    | Crée une page web de calcul d’IMC avec une interface épurée, le changement d’unités et des conseils par catégorie de santé     |

## Limites actuelles

Les scénarios suivants ne sont pas encore pris en charge et seront progressivement ouverts dans de futures versions :

- Intégration de paiements tiers, comme Stripe et PayPal
- Connexion OAuth tierce, comme Google et GitHub. Pour l’instant, seules la connexion avec un compte Kimi ou la connexion par nom d’utilisateur/mot de passe basée sur une base de données sont prises en charge
- Intégrations API complexes côté serveur, comme la connexion à des services SaaS externes
