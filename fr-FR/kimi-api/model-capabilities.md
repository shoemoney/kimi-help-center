---
title: "Capacités des modèles"
slug: "api-model-capabilities"
order: 11
extract_headings: true
preview: false
---

<SeoMeta
  title="Capacités des modèles - Centre d'aide Kimi"
  description="Voici les questions fréquentes sur les capacités des modèles de l'API Kimi."
/>

# Capacités des modèles

Voici les questions fréquentes sur les capacités des modèles de l'API Kimi.

## Le mode JSON est-il pris en charge ?

Oui. L'API Kimi propose un mode JSON, qui contraint la sortie du modèle à produire du JSON valide. Utilisation :

- Définissez le paramètre `response_format` sur `{"type": "json_object"}` dans votre requête.
- Indiquez également explicitement au modèle, dans votre prompt, de renvoyer du JSON et décrivez la structure attendue.
- En mode JSON, le modèle garantit la production d'une chaîne JSON analysable.

## Le fine-tuning des modèles est-il pris en charge ?

L'API Kimi **ne prend pas encore en charge** le fine-tuning des modèles à l'initiative de l'utilisateur. Pour des besoins de modèles personnalisés, contactez l'équipe commerciale via [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) afin de découvrir les options de personnalisation pour les entreprises.

## L'OCR est-il pris en charge ?

Les modèles Vision de l'API Kimi disposent de capacités de compréhension des images et peuvent reconnaître le texte présent dans les images, obtenant des résultats comparables à l'OCR :

- Prise en charge de la reconnaissance de texte en anglais, en chinois et dans de nombreuses autres langues.
- Reconnaissance du texte imprimé ainsi que d'une partie du texte manuscrit.
- Chaque image est facturée à un tarif forfaitaire de 1 024 tokens.
- Au-delà de la simple reconnaissance de texte, les modèles peuvent également interpréter les tableaux, les graphiques et d'autres contenus structurés présents dans les images.

## La synthèse vocale (TTS) et la reconnaissance vocale (ASR) sont-elles prises en charge ?

L'API Kimi **ne prend pas encore en charge** la TTS ni l'ASR. Pour des capacités liées à la voix, envisagez de combiner un service vocal tiers avec l'API Kimi. Suivez les annonces de la plateforme pour les futures mises à jour de fonctionnalités.
