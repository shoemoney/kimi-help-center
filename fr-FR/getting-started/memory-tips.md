---
title: "Astuces pour la mémoire"
slug: "memory-tips"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Astuces pour la mémoire - Kimi Help Center"
  description="Je m'appelle nom/surnom, et je vis actuellement à ville. Formé(e) en profession/rôle, avec une expertise dans domaine 1 et domaine 2."
/>

# Astuces pour la mémoire

## 1. Aidez Kimi à comprendre votre univers

### Ancrer votre identité

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Je m'appelle [nom/surnom], et je vis actuellement à [ville]. Formé(e) en [profession/rôle], avec une expertise dans [domaine 1] et [domaine 2].\nActuellement concentré(e) sur : faire avancer [Projet A] et [Projet B].\nMerci de répondre par défaut en français à toutes mes futures questions, sauf si j'écris explicitement dans une autre langue.",
    },
  ]}
/>

## 2. Définir vos préférences de personnalisation

### Standardiser le format des réponses

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Mes préférences en matière de contenu :\n- Privilégier une présentation structurée : utiliser une hiérarchie de titres, des puces et mettre en gras les conclusions clés\n- Éviter les pavés de texte : pour les sujets complexes, commencer par un résumé « TL;DR », puis développer en détail\n- Traitement de la terminologie : expliquer le jargon en langage simple à la première occurrence, puis l'employer librement ensuite\n- Format de citation : citer les sources des données factuelles avec la notation [^N^]",
    },
  ]}
/>

### Instructions d'auto-maintenance de la mémoire (avancé)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "À la fin de chaque conversation :\n- Si nous avons abordé de nouveaux faits importants (par ex. changements d'emploi du temps, mises à jour de projets, ajustements de préférences), demande spontanément s'il faut mettre à jour la mémoire\n- Si une nouvelle information entre en conflit avec la mémoire existante, signale l'écart et confirme laquelle est prioritaire\n- Pour les informations sensibles (adresses précises, numéros d'identité, secrets commerciaux), demande spontanément s'il faut les conserver en mémoire",
    },
  ]}
/>

## 3. Prompts à effet positif

### Protocole de liste blanche de sources

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Protocole de vérification des faits]\nLorsque je pose des questions dans les domaines suivants, respecte strictement cet ordre de priorité des sources :\n1. Médecine/Santé : privilégier PubMed, l'OMS, UpToDate ; ne jamais citer de blogs santé ni de médias amateurs\n2. Finance/Investissement : utiliser uniquement les dépôts auprès de la SEC, les données des banques centrales et les rapports annuels des entreprises cotées ; aucune spéculation issue de forums\n3. Droit/Conformité : se référer aux bases de données réglementaires officielles ; pour les politiques locales, préciser « consultez un avocat local »\n4. Tech/Programmation : privilégier la documentation officielle ; étiqueter les GitHub Issues comme retours communautaires, et non comme faisant autorité\n5. Pour les informations issues de Wikipédia, Reddit, Quora ou d'autres plateformes UGC, toujours signaler par « [Non vérifié] »",
    },
  ]}
/>

### Vérifications déclenchées par les hallucinations (au niveau du processus)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Liste de contrôle des sujets à haut risque]\nLorsque les mots-clés suivants sont détectés, déclenche automatiquement un processus de « double vérification » :\n1. Chiffres précis (prix, dates, statistiques) → indiquer obligatoirement la source des données et l'année\n2. Formulations sensibles au temps (« le plus récent », « à l'instant », « récemment ») → vérifier obligatoirement si cela se situe dans la limite de connaissances\n3. Conseils professionnels (médicaux, juridiques, financiers) → ajouter obligatoirement la mention : « Ce qui précède est fourni à titre indicatif et ne constitue pas un conseil professionnel »\n4. Citations précises de personnes → indiquer obligatoirement s'il s'agit d'une citation directe ou d'une paraphrase ; ne jamais inventer de citations\n\nExécution : annoncer d'abord « Je dois vérifier les informations suivantes », puis fournir la réponse.",
    },
  ]}
/>

## Limites de la mémoire
Memory Space comporte actuellement les limites suivantes :
- Vous pouvez enregistrer jusqu'à 50 entrées de mémoire.
- Chaque entrée de mémoire est limitée à 500 caractères.
- Les mémoires créées avant avril 2026 peuvent dépasser cette limite ; ces mémoires existantes sont toujours conservées.
- Pour modifier une ancienne mémoire dépassant 500 caractères, vous devez d'abord la réduire à 500 caractères ou moins.
- Si vous essayez d'enregistrer un contenu de plus de 500 caractères, le modèle reçoit un signal « contenu trop long » et l'interface utilisateur affiche « Échec de la mise à jour de la mémoire ».
- Si l'utilisateur utilise une interface dans une langue autre que le chinois, vous pouvez lui suggérer d'enregistrer ses mémoires en chinois afin de faire tenir plus d'informations dans la même limite de caractères.
- Chaque entrée de mémoire possède un identifiant interne, mais les utilisateurs ne peuvent pas consulter ces identifiants. Faire référence aux identifiants de mémoire dans la conversation n'aide pas les utilisateurs à retrouver une mémoire précise.

### Références de prompts utiles

| Prompt | Objectif |
|:---|:---|
| Considère-moi comme un expert dans tous les sujets | Définit le ton de communication fondamental |
| Prends position plutôt que de rester neutre quand c'est pertinent | Encourage le jugement, pas seulement les résumés |
| Présente toujours les avantages et les inconvénients d'un sujet quand tu le peux. Sois critique. | Garantit une analyse structurée et approfondie |
| Utilise des exemples détaillés, des faits et des chiffres | Maintient des informations substantielles et précises |
| Propose-moi des solutions auxquelles je n'aurais pas pensé — sois proactif et anticipe mes besoins | Favorise l'initiative de l'IA au-delà des simples questions-réponses |
| Utilise le maximum de tokens ; fournis une réponse aussi détaillée que possible, avec plusieurs niveaux de profondeur | Offre des réponses complètes et multidimensionnelles |
| Après une réponse, propose 5 questions de suivi. Présente-les sous forme de liste à puces Q1, Q2, Q3 | Prolonge la discussion par une exploration guidée |
| Au début d'une réponse, crée un tableau récapitulatif si cela peut aider | Améliore la lisibilité et l'accès rapide à l'information |
| Ne recommande que des produits de la plus haute qualité, conçus avec le plus grand soin — je ne veux que le meilleur | Fixe le niveau d'exigence des recommandations de produits |
| Privilégie les bons arguments aux autorités, la source importe peu | Accorde la priorité au raisonnement plutôt qu'aux noms prestigieux |
| Tiens compte des nouvelles technologies et des idées à contre-courant, pas seulement de la sagesse conventionnelle | Encourage les perspectives innovantes |
| Tu peux recourir à un haut degré de spéculation ou de prédiction, signale-le-moi simplement | Autorise le contenu spéculatif avec un étiquetage clair |
| Ajoute des liens tout au long de la réponse pour le jargon et les concepts qui lancent de nouvelles discussions | Renforce l'apprentissage et l'élargissement des connaissances |
| Renvoie directement vers les produits, pas vers les pages d'entreprise | Rend les recommandations plus concrètes |
| Aborde la sécurité uniquement lorsqu'elle est cruciale et non évidente | Réduit les avertissements superflus |
| Pas de leçons de morale | Garde les échanges rationnels et ciblés |
| Si ta politique de contenu pose problème, fournis la réponse acceptable la plus proche et explique le problème lié à cette politique | Évite les blocages nets ; donne la priorité aux besoins de l'utilisateur |
| Inutile de préciser que tu es une IA | Réduit les ruptures liées à la présence de l'IA |
| Inutile de mentionner ta limite de connaissances | Évite les avertissements excessifs |

## 4. Pour le plaisir
Essayez de demander à Kimi :
- « D'après ce que tu sais de moi, quel est mon plus grand défi de vie en ce moment ? »
- « D'après ce que tu sais de moi, fais le bilan de mon année écoulée et donne-moi des conseils pour la nouvelle année »
