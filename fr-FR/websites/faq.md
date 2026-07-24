---
title: "FAQ Kimi Websites"
slug: "websites-faq"
order: 3
extract_headings: true
preview: false
preview_content: "Questions fréquentes sur l’utilisation de Kimi Websites."
---

<SeoMeta
  title="FAQ Kimi Websites - Centre d’aide Kimi"
  description="Dépannage courant pour Kimi Websites : problèmes d’aperçu, pages blanches, perte de données et échecs de publication."
/>

# FAQ Kimi Websites

> Pour obtenir des instructions complètes sur les boutons du panneau d’aperçu, les modes de modification, la publication et la dépublication, consultez [Kimi Websites](/websites/websites-overview). Cette page traite uniquement des problèmes les plus courants.

## L’aperçu ne se charge pas ou je ne vois pas la dernière version ?

> Par exemple : « Le site web ne s’affiche pas », « L’aperçu montre encore l’ancienne version » ou « Je ne vois pas la dernière version enregistrée ».

Dans la plupart des cas, le site web a bien été généré et enregistré. Le problème d’affichage vient généralement du panneau d’aperçu ou de la carte de version. La cause la plus fréquente est un répertoire de projet incorrect. Pour les autres cas, procédez dans l’ordre suivant :

<Callout type="warning">
**Vérifiez le répertoire du projet** : le projet de site web doit se trouver dans `/mnt/agents/output/app`. L’aperçu lit uniquement les versions enregistrées depuis ce répertoire. Si Kimi a placé le projet ailleurs (par exemple dans un répertoire temporaire `/tmp`), la version peut être enregistrée correctement, mais l’aperçu ne pourra pas la lire : demandez à Kimi de déplacer le projet dans ce répertoire, puis de l’enregistrer à nouveau.
</Callout>

1. **Actualisez la page ou rouvrez la conversation** : les cartes de version peuvent parfois mettre quelques secondes à apparaître.
2. **Demandez à Kimi d’enregistrer une nouvelle version dans la conversation.**
3. **Si la conversation est très longue, essayez d’en démarrer une nouvelle** (voir « Ma conversation est très longue : dois-je en commencer une nouvelle ? » ci-dessous).
4. Si la version n’apparaît toujours pas : le code et la version ont généralement bien été enregistrés (vous pouvez demander le numéro de version à Kimi). Il s’agit souvent d’une fluctuation temporaire du service d’aperçu : veuillez réessayer plus tard. Si le problème persiste, cliquez sur **Retours utilisateur** (icône d’enveloppe) dans le panneau d’aperçu pour envoyer un retour avec le numéro de version ; notre équipe examinera la situation.

## Le site web est vide, affiche un écran blanc, a planté ou ne répond pas ?

> Par exemple : « La page est complètement blanche », « Le site web est vide », « Le site web a planté » ou « Rien ne s’affiche / cliquer ne fait rien ».

- Un écran blanc ou un plantage est généralement dû à une **erreur d’exécution front-end** (dépendances manquantes, accès direct à une sous-page, échec de chargement d’une ressource ou d’une image, etc.). Décrivez le symptôme à Kimi dans la conversation (une capture d’écran est utile) ; il localisera le problème, le corrigera, puis enregistrera une nouvelle version.
- Si vous pensez que l’écran blanc est causé par des **fichiers manquants**, chaque version du site web enregistre un instantané. Demandez à Kimi de restaurer une version précédente (voir « Des fichiers ou répertoires du projet ont disparu » ci-dessous).
- **Compatibilité du navigateur** : certains navigateurs axés sur la confidentialité (Brave, certains modules complémentaires Firefox) peuvent bloquer le chargement de ressources front-end et provoquer des anomalies d’affichage. Essayez d’ajouter le domaine Kimi à votre liste blanche, de désactiver temporairement les protections ou bloqueurs de confidentialité, ou de passer à Chrome / Edge / Safari.

## Que faire si cliquer sur « Publier » échoue ?

Le traitement est le même que ci-dessus : réessayez plus tard. Si le problème persiste, envoyez un retour via **Retours utilisateur** avec le numéro de version. La version a déjà été enregistrée correctement et n’a pas besoin d’être reconstruite depuis zéro.

## Combien de temps le lien du site web reste-t-il valide ? Expire-t-il ?

Si vous cliquez sur **Publier** pour déployer publiquement le site web, le lien généré restera valide indéfiniment, sauf si vous cliquez manuellement sur **Dépublier** pour rendre le site privé, ou si le contenu est signalé comme inapproprié.

## Du contenu, des données ou des enregistrements ont disparu ?

> Par exemple : « Le contenu de ma page d’accueil a disparu », « Les connaissances que j’ai importées dans la base de données ont disparu », « Les informations que j’ai importées sont introuvables » ou « L’IA dit que les données sont définitivement perdues ».

Dans la plupart des cas, les données ne sont pas réellement perdues. Vérifiez dans l’ordre suivant :

1. **Commencez par confirmer que le site web est réellement « full-stack »** : seuls les sites full-stack dotés de **capacités back-end (base de données)** stockent les données dans la base de données cloud de la plateforme, avec persistance entre les visites et les appareils. En pratique, de nombreux sites présentés comme « full-stack » **finissent par être uniquement front-end**, les données n’entrant jamais réellement dans la base de données ; dans ce cas, une actualisation ou un changement d’appareil fera naturellement disparaître les données précédentes. Demandez à Kimi de confirmer que le projet comprend un véritable back-end et une base de données.
2. **Site web purement front-end** : les données sont uniquement enregistrées dans le stockage local (localStorage) de votre navigateur actuel. Changer de navigateur / d’appareil ou effacer les données du navigateur les fera disparaître. Si vous avez besoin d’une conservation des données sur le long terme et sur plusieurs appareils, demandez à Kimi de passer à une solution full-stack avec base de données.
3. **Site web full-stack confirmé** : les données sont enregistrées dans la base de données cloud gérée par la plateforme. **Publier une nouvelle version n’efface pas les données existantes** ; si les données restent invisibles alors que le site est bien full-stack, il s’agit généralement d’un problème temporaire : actualisez ou réessayez plus tard.
4. **Si vous confirmez que les données sont réellement perdues** : cliquez sur **Retours utilisateur** (icône d’enveloppe) dans le panneau d’aperçu pour envoyer un retour ; notre équipe examinera la situation. À ce stade, évitez de multiplier les opérations afin de ne pas écraser d’éventuelles données.

## Des fichiers ou répertoires du projet ont disparu, ou message « environnement réinitialisé » / « récupération impossible » ?

> Par exemple : « Le répertoire de mon projet de site web a disparu et ne peut pas être récupéré », « Des fichiers manquent » ou « Message de réinitialisation de l’environnement ».

- Chaque version du site web **enregistre un instantané** : le code source peut donc généralement être récupéré depuis les versions historiques. Demandez à Kimi de lister les versions précédentes et de revenir / restaurer une version précise.
- Si cela se produit dans une **conversation très longue** (surtout si vous avez changé de modèle en cours de conversation), nous vous recommandons de démarrer une nouvelle conversation (voir le point suivant).
- Si la récupération reste impossible, cliquez sur **Retours utilisateur** pour envoyer un retour ; notre équipe examinera la situation.

## Ma conversation est très longue : dois-je en commencer une nouvelle ?

Si une conversation dure depuis longtemps, s’étend sur de nombreuses versions, ou si vous avez changé de modèle en cours de conversation (par exemple K2.6 → K3), les capacités actuellement utilisées peuvent ne pas correspondre à la dernière version, ce qui peut entraîner une perte de contexte ou des anomalies de fichiers. **Nous recommandons de démarrer une nouvelle conversation** afin de bénéficier des dernières capacités de création et de livraison. Les sites web publiés et les versions historiques ne sont pas affectés et restent accessibles normalement.

## Puis-je auto-déployer le site après avoir exporté le code ?

Vous pouvez télécharger le code complet du projet et le déployer sur votre propre serveur, mais les deux éléments suivants sont fournis par la plateforme Kimi et **ne migreront pas avec le code** :

- **Connexion au compte Kimi** : il s’agit d’une capacité de connexion fournie par la plateforme, qui ne peut pas être utilisée directement une fois hors de la plateforme Kimi. Si vous avez besoin d’une connexion pour un auto-déploiement, demandez à Kimi de mettre en place un système de connexion par nom d’utilisateur et mot de passe fondé sur votre propre base de données.
- **Base de données gérée par la plateforme** : les données d’un site web full-stack sont enregistrées dans la base de données cloud attribuée par la plateforme à ce site. Le code exporté n’inclut pas ces données et ne se connectera pas automatiquement à votre propre base de données. L’auto-déploiement nécessite de configurer votre propre base de données et de migrer les données.

Si vous souhaitez simplement rendre la page web accessible publiquement, utilisez la fonctionnalité **Partager → Publier** de la plateforme. Inutile de configurer votre propre serveur : la connexion au compte Kimi et les données cloud continueront de fonctionner normalement.

## Le site web généré ne correspond pas à mes exigences ?

- Dans la conversation, indiquez précisément ce qui ne correspond pas : par exemple, les couleurs, la mise en page, les textes, les modules fonctionnels, les tableaux de données, etc.
- Vous pouvez importer des images de référence, des pages web d’exemple ou des descriptions textuelles plus détaillées afin que l’Agent modifie le site selon la référence.
- Si vous n’êtes toujours pas satisfait après plusieurs modifications, essayez de démarrer une nouvelle conversation avec une description plus structurée de vos exigences.

## Puis-je encore modifier le contenu, les liens ou les styles du site web après sa génération ?

Oui. Dans la conversation d’origine, continuez à indiquer à l’Agent ce que vous souhaitez modifier, par exemple :

- « Remplace le titre de la page d’accueil par XXX »
- « Remplace le lien du bouton “Nous contacter” par https://xxx »
- « Passe l’ensemble du site en thème sombre »

Après modification, l’Agent régénérera le site et déploiera un nouveau lien.

## Comment ajouter un back-end, une base de données ou une fonctionnalité de connexion au site web ?

- Précisez clairement dans l’instruction de création du site web que vous souhaitez une page web full-stack avec une base de données et une fonctionnalité de connexion.
- Vous pouvez aussi demander à l’Agent de générer d’abord la page front-end, puis exporter le code source et le confier à un développeur pour un développement complémentaire.

## Puis-je télécharger le code source du site web ou l’exporter vers GitHub ?

La version actuelle permet de télécharger tous les fichiers en local. Dans la conversation, ouvrez « Tous les fichiers » et cliquez sur le bouton de téléchargement.

## Combien de credit la génération ou la modification d’un site web consomme-t-elle ?

La génération d’un site web est une tâche complexe qui consomme généralement une quantité importante de tokens/credits, en fonction de :

- Nombre de pages et complexité
- Présence ou non d’images, de tableaux et de logique d’interaction
- Nombre de modifications itératives

Nous vous recommandons de formuler vos exigences aussi clairement que possible afin de réduire les essais et erreurs. Si le résultat ne vous convient pas, vous pouvez expliquer la situation dans un retour.

## La génération du site web est très lente, reste en file d’attente ou le terminal échoue ?

- Aux heures de pointe (en journée et en soirée les jours ouvrés), une file d’attente peut se former. Nous vous recommandons d’utiliser le service en dehors des heures de forte affluence.
- Si la tâche reste bloquée plus de 10 minutes, essayez d’abord d’actualiser la page web.
- Pour les sites web complexes, nous recommandons de les découper en tâches plus petites : commencez par la page d’accueil, puis ajoutez progressivement les sous-pages et les fonctionnalités.

## À quels usages Kimi Websites convient-il ? À quels usages ne convient-il pas ?

**Convient pour :**

- Pages personnelles/portfolios, landing pages d’événements, pages de présentation de produit, pages d’outils simples, petits prototypes de jeux
- Validation rapide d’idées de design et génération de démos interactives
- Sites web nécessitant une base de données back-end simple et un système utilisateur

**Ne convient pas pour :**

- Sites web complexes intégrant des systèmes de paiement
- Environnements de production officiels à forte concurrency et haute disponibilité
- Sites professionnels nécessitant un hébergement stable à long terme avec un domaine personnalisé

---

Si les méthodes ci-dessus ne résolvent pas votre problème, envoyez un retour via le bouton **Retours utilisateur** dans l’angle inférieur droit du web/app Kimi, ou [contactez le support client](/others/contact-support). Nous vous recommandons de joindre :

- Le lien du site web où le problème s’est produit
- Le navigateur et le système d’exploitation que vous utilisez
- Des captures d’écran ou le texte du message d’erreur
- L’heure approximative de la conversation d’origine

Nous continuerons d’optimiser les capacités de génération de sites web à partir de vos retours.
