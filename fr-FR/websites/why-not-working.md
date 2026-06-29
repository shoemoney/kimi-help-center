---
title: "Pourquoi le site créé par l'agent ne fonctionne-t-il pas ?"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Pourquoi le site créé par l'agent ne fonctionne-t-il pas ? - Kimi Help Center"
  description="Un projet full-stack comprend une interface frontend, des services backend et un stockage persistant. Kimi Agent peut générer les trois, mais leur bon fonctionnement dépend de la config de l'env..."
/>

# Pourquoi ça ne marche pas ?

<Callout type="tip">
Un projet full-stack comprend **une interface frontend, des services backend et un stockage persistant**. Kimi Agent peut générer ces trois éléments, mais leur bon fonctionnement à l'exécution dépend de la configuration de l'environnement, des paramètres d'authentification et des actions de publication.
</Callout>

Si votre application ne fonctionne pas comme prévu, le problème vient rarement d'une fonctionnalité backend manquante. Il s'agit généralement d'une étape incomplète : aperçu, authentification, base de données ou publication.

## Le déroulement full-stack

1. **Génération** : l'agent crée le frontend, le backend, le schéma de base de données et la logique des données.
2. **Aperçu** : exécution en sandbox pour des tests full-stack en local (un démarrage manuel peut parfois être nécessaire).
3. **Versionnage** : l'agent peut utiliser des outils de versionnage et créer automatiquement des commits.
4. **Retour en arrière** : vous pouvez revenir à n'importe quelle version de commit antérieure.
5. **Publication / Partage** : l'application n'est déployée sur une URL publique qu'après votre publication manuelle.

## Causes d'échec fréquentes

| Symptôme | Cause probable | Que faire |
|----------|-------------|------------|
| Le frontend se charge mais l'API échoue | Le runtime de la sandbox n'est pas démarré | Démarrez la sandbox et relancez l'aperçu |
| Les données ne sont pas enregistrées ou invisibles | Base de données non initialisée ou non migrée | Relancez l'étape de configuration ou de migration de la base |
| La connexion échoue | Le flux d'authentification est mal configuré | Vérifiez la configuration de Kimi Login et les paramètres de callback |
| Les autres ne peuvent pas accéder à votre application | Application non publiée | Cliquez sur **Publier/Partager** pour la déployer |
| Des changements récents ont cassé des fonctionnalités | Régression dans la dernière version | Revenez à un commit stable |

## Prise en charge de l'authentification

- **Phase 1** : prise en charge de **Kimi Login**.
- **Phase suivante** : d'autres fournisseurs OAuth seront ajoutés.
- **Également pris en charge** : l'agent peut générer une connexion standard par e-mail/mot de passe reposant sur une base de données.

## Versionnage et retour en arrière

- L'agent prend en charge de nouveaux outils de versionnage et peut effectuer des `git commit` de façon autonome pendant le développement.
- Vous pouvez consulter l'historique des versions et revenir à un commit sélectionné en cas de besoin.

## Aperçu vs Publication

- **Aperçu** : pour le développement et les tests en sandbox ; un démarrage manuel de la sandbox peut être requis dans certains cas.
- **Publier/Partager** : action manuelle de l'utilisateur qui déploie votre application dans un environnement accessible au public.

## L'agent excelle pour

- Le prototypage rapide de produits full-stack
- Les flux CRUD avec stockage persistant
- Les opérations de données d'administration ou de back-office basiques
- Les projets de démonstration de bout en bout avec connexion, données et flux de déploiement

## Limites actuelles

- Les opérations de production avancées (par exemple, le SRE complexe et la haute disponibilité multi-région) nécessitent encore un travail d'ingénierie manuel.
- Pour les scénarios de production à haut risque, effectuez une revue de sécurité et un renforcement du déploiement avant la mise en ligne.
