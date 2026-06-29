---
title: "Présentation de Kimi Claw Android"
slug: "kimi-claw-android-guide"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Présentation de Kimi Claw Android - Centre d’aide Kimi"
  description="Découvrez comment déployer OpenClaw sur votre téléphone Android et le transformer en assistant distant IA disponible 24 h/24, 7 j/7."
  ogType="article"
/>

# Présentation de Kimi Claw Android

Cet article explique comment déployer OpenClaw sur des téléphones Android afin de transformer un téléphone inutilisé en assistant distant IA disponible 24 h/24, 7 j/7. Vous pouvez contrôler votre téléphone à distance, utiliser des apps, connecter des appareils de maison intelligente et créer votre propre assistant personnalisé via des applications de messagerie comme Kimi, Feishu et WeChat.

Il est recommandé de déployer Kimi Claw Android sur des téléphones inutilisés afin d’éviter les conflits d’autorisations avec l’usage quotidien. Veuillez ne pas mettre à niveau manuellement la version d’OpenClaw ; les mises à jour officiellement adaptées seront fournies via les mises à jour de version intégrées à l’app.

## Introduction à Kimi Claw Android

<Frames
  src="./images/kimi-claw-android-guide/img-06.png"
/>

Configuration requise :

| Élément | Exigence |
| --- | --- |
| Système d’exploitation | Android 8.0 ou version ultérieure |
| Espace de stockage disponible | Au moins 5GB |
| Réseau | Une connexion réseau stable est requise |
| Compte | Abonnement Kimi Allegretto ou supérieur |

<Callout type="info">
Il est recommandé d’utiliser un téléphone inutilisé afin d’éviter les conflits avec l’usage quotidien.
</Callout>

## Télécharger et installer
### Télécharger Kimi Claw Android

Vous pouvez le télécharger de l’une des façons suivantes :

#### Méthode 1 : scanner le QR code pour le télécharger depuis la page web.
Connectez-vous à [kimi.com](https://kimi.com), trouvez l’entrée « Télécharger Kimi Claw Android », puis utilisez votre téléphone Android pour scanner le QR code affiché sur la page et lancer le téléchargement.

<Frames
  src="./images/kimi-claw-android-guide/img-03.png"
/>

#### Méthode 2 : télécharger directement depuis Google Play
Recherchez « Kimi Claw » dans la boutique d’applications mobile et terminez le téléchargement.

#### Méthode 3 : télécharger la Kimi App sur mobile
Ouvrez la Kimi App, appuyez sur Kimi Claw Android ; vous pouvez également associer une instance OpenClaw existante.

### Configuration initiale 

Lorsque vous ouvrez Kimi Claw Android pour la première fois, une page d’accueil s’affiche. Après avoir pris connaissance des informations importantes ci-dessous, cliquez sur « Démarrer la configuration » pour accéder au processus de configuration.

- Déploiement rapide d’OpenClaw - Déployez OpenClaw sur un téléphone local pour communiquer via Kimi, Feishu, etc.
- Il est recommandé d’utiliser un téléphone inutilisé - Kimi Claw Android nécessite un réseau stable pour fonctionner, et l’utilisation d’un téléphone inutilisé est recommandée
- Utilisez-le en toute sécurité - OpenClaw peut présenter des risques pour la confidentialité et la sécurité ; utilisez-le donc avec prudence.

Après avoir sélectionné l’acceptation de la Privacy Policy et de l’accord utilisateur, continuez.

#### Étape 1 : accorder les autorisations
Kimi Claw Android nécessite les autorisations suivantes pour fonctionner de manière stable en arrière-plan. Cliquez sur « Autoriser » pour chacune d’elles afin de terminer l’autorisation.

| Autorisations | Explication |
| --- | --- |
| Notification système | Afficher l’état de la passerelle et les rappels |
| Autorisations d’espace de stockage | Au moins 5GB d’espace disponible sont requis |
| Autorisation d’exécution en arrière-plan | Maintenir la passerelle en fonctionnement lors du passage en arrière-plan |

Comme les chemins de réglages varient selon les marques de téléphones, voici les étapes générales :

1. Cliquez sur « Ouvrir les paramètres » pour accéder à la page des paramètres du téléphone
2. Accédez à la liste de gestion des applications et sélectionnez Kimi Claw Android
3. Activez l’interrupteur de démarrage automatique
4. Dans la gestion de la consommation d’énergie, sélectionnez « Autoriser entièrement le comportement en arrière-plan »
5. Revenez à Kimi Claw Android, puis cliquez sur « J’ai terminé » pour poursuivre l’installation

#### Étape 2 : configurer le compte Kimi

1. Cliquez sur « Aller configurer » pour accéder à la Kimi App et autoriser l’accès
2. Après autorisation, Kimi créera automatiquement une clé API Kimi Coding Plan pour Kimi Claw Android
3. Si vous utilisez un compte gratuit, vous devez d’abord activer les privilèges d’abonnement. Cliquez sur « Passer à l’offre supérieure » pour activer votre abonnement.

#### Étape 3 : installer OpenClaw

<Frames
  src="./images/kimi-claw-android-guide/img-08.png"
/>

Si l’installation échoue, vous pouvez cliquer sur « Réinstaller » pour réessayer. En cas d’échecs répétés, cliquez sur « Un problème ? Accéder aux retours » pour signaler le problème.

## Guide d’utilisation du tableau de bord

### Interface principale

<Frames
  src="./images/kimi-claw-android-guide/img-14.png"
/>

Une fois la configuration terminée, accédez à l’interface principale du tableau de bord. Vous y trouverez les informations suivantes :

- État de la passerelle OpenClaw — Démarrage / Connectée / Arrêtée, et durée d’exécution
- Canaux de discussion — Liste des canaux de communication actuellement connectés
- Journal OpenClaw — Journal d’origine du fonctionnement d’OpenClaw
- Utiliser la conversation Kimi — Ouvrez la Kimi App, ouvrez l’interface de conversation correspondant à Kimi Claw Android, et basculez automatiquement vers le Claw correspondant.

Si un rappel d’autorisation apparaît en haut du tableau de bord, cela signifie que certaines autorisations n’ont pas été accordées ou ont expiré. Suivez les invites pour terminer les autorisations une par une et garantir le bon fonctionnement de Kimi Claw Android.

### Gestion des canaux de discussion

<Frames
  src="./images/kimi-claw-android-guide/img-33.png"
/>
Dans le tableau de bord, vous pouvez gérer tous les canaux de communication :

- Afficher les canaux connectés et leur état (par exemple, Kimi - Connecté, Feishu - Connecté)
- Cliquer sur « + Connecter » pour ajouter un nouveau canal de discussion
- Cliquer sur un canal existant pour consulter ses détails ou le supprimer

<Callout type="info">
Conservez au moins un canal de discussion afin de garantir une communication normale avec Kimi Claw Android.
</Callout>

### Journaux OpenClaw

- Rechercher — Rechercher dans le contenu des journaux par mot-clé
- Filtrer le niveau — Filtrer par niveau de journal (Info / Avertissement / Erreur, etc.)
- Défilement automatique vers le bas — Faire défiler automatiquement jusqu’au journal le plus récent
- Actualiser — Actualiser manuellement le contenu des journaux

<Frames
  src="./images/kimi-claw-android-guide/img-16.png"
/>

### Paramètres

<Frames
  src="./images/kimi-claw-android-guide/img-21.png"
/>
Cliquez sur Paramètres pour accéder à la page des paramètres :

**Couche fonctionnelle :**

- ClawHub Skills : associer automatiquement le site officiel ClawHub et gérer les skills disponibles pour Kimi Claw Android
- Espace de travail OpenClaw : accéder au répertoire local des fichiers de configuration OpenClaw et modifier les préférences personnelles

**Couche système :**

<Frames
  src="./images/kimi-claw-android-guide/backup.png"
/>
- Sauvegarde et restauration : sauvegarder la configuration et l’historique OpenClaw actuels, avec prise en charge de la restauration d’anciennes configurations et d’anciens enregistrements
- Service d’accessibilité : surveiller les autorisations du service d’accessibilité du téléphone mobile
- Autorisation d’exécution en arrière-plan : surveiller l’autorisation d’exécution en arrière-plan du téléphone mobile
- Mise à niveau de version : surveiller la version et cliquer pour lancer la mise à niveau automatique

**À propos :**

- Aide : instructions sur les recommandations d’utilisation de base
- Retours : envoyer un retour
- Accord utilisateur : lire l’accord utilisateur
- Privacy Policy : lire la Privacy Policy

#### ClawHub Skills

Associez automatiquement le site officiel ClawHub et gérez les skills disponibles pour Kimi Claw Android. Vous pouvez télécharger et installer des Skills afin d’étendre les capacités de Claw.

#### Espace de travail OpenClaw

<Frames
  src="./images/kimi-claw-android-guide/img-19.png"
/>

#### Sauvegarde et restauration

Kimi Claw Android propose des fonctions de sauvegarde automatique et manuelle afin d’éviter toute perte de l’historique et de la configuration OpenClaw.

Sauvegarde automatique

Kimi Claw Android sauvegarde automatiquement, à intervalles réguliers, l’historique et la configuration de l’OpenClaw actuel, puis les regroupe dans un fichier compressé pour les stocker. Aucune action manuelle n’est nécessaire : le système s’en charge automatiquement en arrière-plan.

Sauvegarde manuelle :

Si vous souhaitez enregistrer l’état à un moment précis, vous pouvez également cliquer vous-même sur Sauvegarder pour enregistrer manuellement un instantané de l’historique et de la configuration actuels. Cliquez sur  Sauvegarder  pour exporter toutes les sauvegardes de configuration actuelles.

**Restaurer la configuration :**

Kimi Claw Android permet de revenir à des états de configuration antérieurs. Il prend en charge à la fois l’état de sauvegarde automatique et l’état de sauvegarde active de Kimi Claw Android.

Dans les scénarios suivants, vous pouvez utiliser la fonction de restauration pour revenir à un état précédent :

- Lorsque la désinstallation ou la réinstallation de l’app fait disparaître les historiques, les enregistrements passés peuvent être restaurés
- Lorsqu’il est nécessaire de changer la configuration de Claw, vous pouvez restaurer l’état de configuration précédemment enregistré
- Lorsque vous remplacez le téléphone et redéployez, il suffit d’importer le fichier de sauvegarde pour restaurer

Cliquez sur le fichier de sauvegarde correspondant dans la liste des sauvegardes ; les historiques et configurations seront automatiquement restaurés à ce moment précis, ce qui garantit que les enregistrements passés ne sont pas effacés.

## Configurer les canaux de discussion

### Kimi
Kimi est le canal de communication par défaut. Il se connecte automatiquement après la configuration du compte Kimi dans le processus d’intégration, sans action supplémentaire.

Une fois l’installation et la configuration terminées, votre Kimi Claw Android apparaîtra automatiquement sur la page de changement de bot du client Web (kimi.com). Après avoir cliqué pour basculer, l’avatar et le fil de discussion seront synchronisés.

Dans la gestion des bots, Kimi Claw Android permet uniquement de modifier le nom du bot et de le supprimer.

### Feishu
<Frames
  src="./images/kimi-claw-android-guide/img-25.png"
/>

Trois méthodes de connexion sont prises en charge :

Méthode 1 : ouvrir Feishu pour créer

Cliquez sur « Ouvrir Feishu pour créer », créez l’app dans Feishu en suivant les invites, et l’état passera automatiquement à « Connecté ».

Méthode 2 : scanner le QR code pour créer

1. Cliquez sur « Scanner le QR code pour créer »
2. Utilisez Feishu pour scanner le QR code
3. Terminez la création de l’application Feishu dans le navigateur

**Méthode 3 : saisir manuellement les informations du bot**

1. Cliquez sur « Saisir manuellement les informations du bot »
2. Saisissez l’App ID et l’App Secret
3. Cliquez sur « Ajouter » pour terminer la connexion

### WeChat
Le canal WeChat nécessite d’abord d’installer WeChat Claw côté WeChat ; Kimi Claw Android communiquera via le terminal WeChat Claw.

Vous devez d’abord terminer l’installation de WeChat Claw en suivant les instructions officielles de WeChat. L’installation est terminée lorsque WeChat ClawBot apparaît sur la page de discussion.

Accédez à Kimi Claw Android, connectez-vous au canal WeChat, puis terminez le processus en scannant le QR code avec WeChat.

### Telegram

<Frames
  src="./images/kimi-claw-android-guide/img-34.png"
/>

Kimi Claw Android prend en charge l’intégration Telegram, ce qui nécessite que les utilisateurs obtiennent d’abord leur bot token et leur ID utilisateur.

## Automatisation

L’une des capacités principales de Kimi Claw Android consiste à contrôler les apps du téléphone pour accomplir différentes tâches. Après l’envoi d’instructions à Claw via des canaux de discussion comme Kimi, Feishu et WeChat, Claw ouvrira automatiquement l’app correspondante sur le téléphone, effectuera une série d’opérations comme le ferait une vraie personne, puis terminera les tâches que vous avez indiquées.

### Principe de fonctionnement

Lorsque vous envoyez des instructions de tâche à Claw via le canal de discussion, Claw :

1. Comprend vos besoins
2. Ouvre automatiquement l’app correspondante sur le téléphone
3. Réalise les tâches étape par étape en simulant les actions de l’utilisateur (clic, balayage, saisie, etc.)
4. Prend des captures d’écran pendant l’exécution afin de vous permettre de vérifier le déroulement
5. Vous communique les résultats une fois la tâche terminée

### Scénarios d’utilisation courants

#### Achats et consommation

Rechercher des produits, ajouter au panier, consulter des commandes, récupérer des réductions, etc., sur des plateformes comme Taobao, Tmall et Meituan.

#### Déplacements et navigation

Consulter des tarifs de taxi, vérifier des horaires de métro, rechercher des hôtels à proximité, réserver des trajets, etc., sur Amap.

#### Social et contenu

Consulter des messages, parcourir du contenu, rechercher des produits, effectuer des interactions, etc., sur des plateformes comme WeChat, Rednote et Douyin.

## Conseils d’utilisation

### Contrôler le téléphone via un logiciel de discussion

Une fois la configuration terminée, vous pouvez envoyer des commandes à Claw dans Kimi, Feishu et WeChat afin de contrôler à distance les applications sur des téléphones Android. Par exemple :

- Aide-moi à ouvrir WeChat et à consulter les derniers messages
- Ouvre la carte et recherche des restaurants à proximité
- « Aide-moi à consulter le calendrier pour voir ce qui est prévu aujourd’hui »

### Utiliser ClawHub Skills

<Frames
  src="./images/kimi-claw-android-guide/img-18.png"
/>
Kimi Claw Android inclut ClawHub, une bibliothèque de skills intégrée. Vous pouvez gérer et installer des skills dans les paramètres afin d’étendre les capacités de Claw.

Scénarios adaptés à l’utilisation des Skills :
- Organisation de l’information : agrégation d’actualités, comparaison de produits concurrents
- Analyse de données : revue de marché, interprétation de données
- Automatisation des workflows : un processus complet, de la décomposition des besoins à la production du résultat

### Connexion simultanée à plusieurs canaux
Vous pouvez connecter simultanément plusieurs canaux comme Kimi, Feishu et WeChat, et discuter avec Claw depuis différentes apps de messagerie. Il suffit de cliquer sur « + Connecter » dans la section Gestion des canaux du tableau de bord pour les ajouter.

## Sécurité et applications restreintes

### Consignes de sécurité

Avant d’utiliser Kimi Claw Android, veuillez prendre connaissance des précautions de sécurité suivantes :

1. Utilisez un téléphone inutilisé — Kimi Claw Android occupera des autorisations système du téléphone, ce qui peut affecter l’usage quotidien. Il est recommandé d’utiliser un téléphone inutilisé

2.  Isolation des données sensibles — Kimi Claw Android lira les données des fichiers locaux ; veuillez donc nettoyer ou isoler au préalable les informations sensibles

3. Protection des applications financières — Le système bloque automatiquement l’accès aux applications bancaires, de paiement, de valeurs mobilières et d’assurance afin de protéger vos fonds

### Liste des applications restreintes

Pour des raisons de sécurité financière et de confidentialité, les catégories d’apps suivantes sont automatiquement bloquées par Kimi Claw Android et ne peuvent pas être utilisées à distance :

1. Réseaux sociaux

| Package | Description du risque |
| --- | --- |
| wechat | Des fonctions importantes de messagerie privée et de paiement sont concernées |

2. Banque

| Package | Nom de l’app | Description du risque |
| --- | --- | --- |
| com.android.bankabc | abc, Agricultural Bank of China | Agricultural Bank of China, qui permet des opérations comme les virements et la gestion de patrimoine |
| com.bankcomm.main | bocom, Bank of Communications | Bank of Communications, qui prend en charge des opérations comme les virements et la gestion de patrimoine |
| com.bjbk.im | Bank of Beijing | Bank of Beijing, qui permet des opérations comme les virements et la gestion de patrimoine |
| com.cebbank.im | Everbright Bank | China Everbright Bank, qui permet des opérations comme les virements et la gestion de patrimoine |
| com.cgb.im | Guangfa Bank | Guangfa Bank, qui permet des opérations comme les virements et la gestion de patrimoine |
| com.chinamworld.bocmbci | boc, Bank of China | Bank of China, l’une des quatre grandes banques chinoises |
| com.chinamworld.main | CCB, China Construction Bank | China Construction Bank, l’une des quatre grandes banques chinoises |
| com.cib.im | Industrial Bank | Industrial Bank, qui permet des opérations comme les virements et la gestion de patrimoine |
| com.citic.im | China CITIC Bank | China CITIC Bank, qui prend en charge des opérations comme les virements et la gestion de patrimoine |
| com.cmbc.im | Minsheng Bank | China Minsheng Bank, qui permet des opérations comme les virements et la gestion de patrimoine |
| com.cmbchina.ccd.pluto.customerView | cmb, China Merchants Bank | China Merchants Bank, qui prend en charge des opérations comme les virements et la gestion de patrimoine |
| com.hxb.im | Huaxia Bank | Huaxia Bank, qui permet des opérations comme les virements et la gestion de patrimoine |
| com.hzbk.im | Hangzhou Bank | Hangzhou Bank, qui prend en charge des opérations comme les virements et la gestion de patrimoine |
| com.icbc | ICBC, Industrial and Commercial Bank of China | Industrial and Commercial Bank of China, l’une des quatre grandes banques chinoises |
| com.jsbk.im | Jiangsu Bank | Jiangsu Bank, qui prend en charge des opérations comme les virements et la gestion de patrimoine |
| com.nbbk.im | Ningbo Bank | Ningbo Bank, qui prend en charge des opérations comme les virements et la gestion de patrimoine |
| com.pingan.paces.cloud | Ping An Pocket Bank | Client mobile Ping An Bank |
| com.psbc.im | Postal Savings Bank | Postal Savings Bank of China |
| com.shbk.im | Shanghai Bank | Shanghai Bank, qui prend en charge des opérations comme les virements et la gestion de patrimoine |
| com.spdb.im | Shanghai Pufa Bank | Shanghai Pufa Development Bank |

3. Paiement

| Package | Nom de l’app | Description du risque |
| --- | --- | --- |
| com.eg.android.AlipayGphone | Alipay | Alipay, la plus grande plateforme chinoise de paiement tiers |
| com.paypal.android.p2pmobile | paypal | PayPal, la plus grande plateforme mondiale de paiement en ligne |
| com.unionpay | ysf, Cloud Flash Payment | China UnionPay Cloud Flash Payment, un instrument de paiement par carte bancaire |
| com.squareup.cash | cashapp | Cash App, une plateforme américaine de paiement mobile |
| com.venmo | venmo | Venmo, une plateforme américaine de paiement P2P |
| com.google.android.apps.walletnfcrel | googlewallet, wallet | Google Wallet, le portefeuille de paiement de Google |

4. Valeurs mobilières

| Package | Nom de l’app | Description du risque |
| --- | --- | --- |
| com.citics.pbm | CITIC, Xin E Tou | Client de trading CITIC Securities |
| com.cmschina.stock | China Merchants Securities | Client de trading China Merchants Securities |
| com.csc108.newpda | CITIC Construction Investment | Client de trading CITIC Construction Investment Securities |
| com.dfzq.stock | Orient Securities | Client de trading Orient Securities |
| com.eastmoney.android.berlin | eastmoney, Orient Fortune | East Money, plateforme de trading d’actions/fonds |
| com.ebscn.stock | ebscn, Golden Sunshine | Client de trading Everbright Securities |
| com.foundersc.stock | founder, Xiaofang | Client de trading Founder Securities |
| com.gf.gfstocks | GF Easy Gold Rush | Client de trading GF Securities |
| com.guosen.stock | guosen, Golden Sun | Client de trading Guoxin Securities |
| com.guotai.junan.guiyang | Guotai Junan | Client de trading Guotai Junan Securities |
| com.hexin.plat.android | ths, Flush | Flush, plateforme de trading et de marché d’actions/fonds |
| com.htsc.mdc | Huatai, Zhangle Fortune Link | Client de trading Huatai Securities |
| com.htsec.android | Haitong Securities | Client de trading Haitong Securities |
| com.pingan.stock | Ping An Securities | Client de trading Ping An Securities |
| com.tfzq.stock | Tianfeng Securities | Client de trading Tianfeng Securities |
| com.xueqiu.android | xueqiu, Snowball | Xueqiu, communauté boursière et plateforme de trading |
| com.xyzq.stock | Industrial Securities | Client de trading Industrial Securities |

5. Assurance / Finance

| Package | Nom de l’app | Description du risque |
| --- | --- | --- |
| com.pingan.lifeinsurance | Ping An Financial Services Client | Ping An Insurance of China, qui permet des opérations comme l’achat d’assurance et le règlement des sinistres |
| com.jd.jrapp | JD Finance | JD Finance fournit des services financiers comme la gestion de patrimoine, le prêt et le paiement |

## Fonctionnalités prises en charge et non prises en charge

### Fonctionnalités prises en charge

| Fonction | Description |
| --- | --- |
| Contrôle à distance d’applications mobiles | Utiliser à distance des apps sur un téléphone mobile via des commandes envoyées depuis un logiciel de discussion |
| Communication multicanal | Prend en charge la communication avec Claw via Kimi, Feishu et WeChat |
| Consultation des journaux en temps réel | Consulter les journaux de fonctionnement de la passerelle OpenClaw, avec recherche et filtrage par niveau |
| Sauvegarde et restauration de la configuration | Sauvegarder la configuration actuelle, qui peut être restaurée après une réinstallation ou un remplacement d’appareil |
| Surveillance de l’état de la passerelle | Consulter en temps réel l’état de connexion et la durée d’exécution de la passerelle OpenClaw |
| Gestion des canaux | Ajouter, consulter et supprimer des canaux de communication |
| Tableau de bord OpenClaw | Gérer OpenClaw via le tableau de bord intégré |

### Fonctionnalités non prises en charge et limites

| Domaine | Limite |
| --- | --- |
| Prise en charge des plateformes | Actuellement, seuls les appareils Android sont pris en charge ; iOS n’est pas pris en charge |
| Abonnement | Disponible uniquement pour les membres Kimi Allegretto ou supérieur |
| Apps financières | L’accès aux applications liées à la banque, au paiement, aux valeurs mobilières et à l’assurance est interdit (voir le chapitre 6 pour plus de détails) |
| Gestion des bots | Le bot de Kimi Claw Android permet uniquement de modifier le nom et de le supprimer ; les autres configurations de bot ne sont pas prises en charge |
| Terminal | Kimi Claw Android ne propose pas actuellement d’opérations directes en ligne de commande |

## Questions fréquentes (FAQ)

<Callout type="info">
Ce qui suit sert de référence pour Kimi Claw Android.
</Callout>

### Installation et configuration

#### Que faire si l’installation d’OpenClaw échoue ?

- Assurez-vous de disposer d’un espace de stockage suffisant (au moins 5GB) et ne quittez pas l’application ni ne verrouillez l’écran pendant l’installation
- Cliquez sur « Réinstaller » pour réessayer
- En cas d’échecs répétés, cliquez sur « Un problème ? Accéder aux retours » pour signaler le problème

#### Après l’autorisation des permissions, l’état ne se met pas à jour ?

- Pour certaines marques de téléphones, l’octroi des autorisations nécessite de redémarrer l’app pour prendre effet
- Revenez à Kimi Claw Android. Si l’état n’a pas été mis à jour, essayez de fermer puis de rouvrir l’app

#### Les utilisateurs gratuits peuvent-ils l’utiliser ?

- Actuellement, vous devez activer les privilèges d’abonnement Kimi Allegretto ou supérieur pour utiliser Kimi Claw Android
- Cliquez sur « Passer à l’offre supérieure » lors de la configuration du compte Kimi pour l’activer

#### Lors de la restauration de la configuration, le message « Le fichier de configuration n’est pas valide » s’affiche ?

- Le fichier de sauvegarde est peut-être corrompu ou provient d’une version incompatible
- Veuillez utiliser « Configuration en un clic de la Kimi App » pour reconfigurer

### Connectivité et stabilité

#### Pourquoi l’état de la passerelle affiche-t-il toujours « Démarrage » ?

- Vérifiez que la connexion réseau fonctionne normalement
- Confirmez que toutes les autorisations requises (notifications, optimisation de la batterie, stockage, démarrage automatique) ont été accordées
- Essayez de cliquer sur « Sauvegarder et redémarrer » dans les paramètres pour redémarrer le service de passerelle

#### La passerelle s’est-elle soudainement déconnectée ?

- Vérifiez si le téléphone est passé en mode économie d’énergie, ce qui peut entraîner la suppression des apps en arrière-plan
- Confirmez que les options « Ignorer l’optimisation de la batterie » et « Autorisation de démarrage automatique » ont été correctement accordées
- Vérifiez l’état de la passerelle dans le tableau de bord. S’il affiche « Arrêtée », cliquez sur Redémarrer

#### Kimi Claw Android perd-il la connexion après le verrouillage du téléphone ?

- Cela se produit généralement parce que la stratégie d’optimisation de la batterie du téléphone met fin aux applications en arrière-plan
- Assurez-vous que les réglages suivants ont été effectués :
  - Ignorer l’optimisation de la batterie - Autorisé
  - Autorisation d’auto-démarrage — Activée
  - Gestion de la consommation d’énergie — Sélectionner « Autoriser entièrement le comportement en arrière-plan »

### Canaux et communication

#### Plusieurs canaux de discussion peuvent-ils être connectés simultanément ?

- Oui. Vous pouvez connecter simultanément plusieurs canaux comme Kimi, Feishu, WeChat, etc.
- Il suffit de cliquer sur « + Connecter » dans la gestion des canaux du tableau de bord pour l’ajouter
- Conservez au moins un canal afin de garantir une communication normale

#### Après avoir scanné le QR code Feishu, l’état reste en attente de mise à jour ?

- Assurez-vous d’avoir terminé le processus de création de l’application Feishu dans votre navigateur
- Si aucune mise à jour n’apparaît pendant longtemps, vous pouvez essayer de vous connecter en saisissant manuellement les informations du bot

#### Échec de la connexion WeChat ?

- Vérifiez que les identifiants WeChat Claw sont correctement renseignés et correspondent aux valeurs de la configuration côté WeChat
- Si nécessaire, suivez le guide de configuration officiel de WeChat Claw pour régénérer et réassocier les identifiants
- Vérifiez que le réseau mobile peut accéder normalement aux services WeChat

#### Pourquoi ne vois-je pas Kimi Claw Android dans la Kimi App ?

- Confirmez que le processus d’intégration a été entièrement terminé (octroi des autorisations → installation d’OpenClaw → configuration du compte Kimi)
- Vérifiez que l’état de la passerelle dans le tableau de bord est « Connectée »
- Essayez d’actualiser la liste des bots dans la Kimi App

### Utilisation des fonctionnalités

#### Pourquoi certaines applications ne peuvent-elles pas être utilisées à distance ?

- Pour des raisons de sécurité, les applications financières comme les apps bancaires, de paiement, de valeurs mobilières et d’assurance sont automatiquement bloquées par le système
- Pour la liste complète, reportez-vous au chapitre 6 « Liste des applications restreintes ».

#### Pourquoi faut-il utiliser des téléphones inutilisés ?

- Kimi Claw Android peut occuper les autorisations d’exploitation du téléphone pendant son fonctionnement, ce qui peut affecter votre usage normal
- L’utilisation d’un téléphone de secours permet d’éviter les conflits d’autorisations et de protéger vos données privées

#### Comment redéployer après avoir changé de téléphone ?

1. Exportez le fichier de configuration dans Tableau de bord → Paramètres → Sauvegarde et restauration sur l’ancien téléphone
2. Installez Kimi Claw Android sur le nouveau téléphone
3. Sélectionnez « Restaurer la configuration » à l’étape 3 et importez le précédent fichier de sauvegarde.

#### Comment consulter l’état de fonctionnement de Kimi Claw Android ?

- Dans l’interface principale du tableau de bord, vous pouvez consulter l’état de la passerelle et le temps d’exécution
- Cliquez sur « Journal en temps réel » pour consulter les journaux détaillés des opérations
- Les fonctions de recherche et de filtrage par niveau des journaux permettent de localiser rapidement les problèmes

### Mise à niveau et version

#### Comment mettre à niveau Kimi Claw Android ?

- Vérifiez et installez la dernière version dans Tableau de bord → Paramètres → « Mise à niveau de version »
- Il est recommandé d’effectuer la mise à niveau dans un environnement Wi-Fi

#### Puis-je mettre à niveau manuellement la version d’OpenClaw ?

- La mise à niveau manuelle n’est pas recommandée. Elle peut entraîner des problèmes de compatibilité
- Une fois l’adaptation terminée, la mise à niveau officielle sera proposée via une notification intégrée à l’app

## Retours et aide

Si vous rencontrez un problème ou avez des suggestions pendant l’utilisation :

### Retours dans l’app

- Tableau de bord → Paramètres → Retours utilisateur
- Page d’installation d’OpenClaw → « Si vous rencontrez des problèmes, envoyez un retour »

Veuillez fournir les informations suivantes lorsque vous envoyez un retour :

- Votre ID Kimi Claw Android (visible en cliquant sur le canal Kimi)
- Modèle de l’appareil et version Android
- Description du problème et capture d’écran

<Callout type="info">
Fournir l’ID Kimi Claw Android aide les techniciens à localiser rapidement les problèmes ; veuillez donc l’inclure dans votre retour.
</Callout>
