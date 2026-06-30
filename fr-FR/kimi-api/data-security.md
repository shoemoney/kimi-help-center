---
title: "Traitement des données et sécurité"
slug: "api-data-security"
order: 13
extract_headings: true
preview: false
---

<SeoMeta
  title="Traitement des données et sécurité - Centre d'aide Kimi"
  description="FAQ sur la sécurité des données utilisateur et la protection de la vie privée pour l'API Kimi."
/>

# Traitement des données et sécurité

<Callout type="info">
FAQ sur la sécurité des données utilisateur et la protection de la vie privée pour l'API Kimi.
</Callout>

L'API Kimi accorde une grande importance à la sécurité des données utilisateur et à la protection de la vie privée.
## Les données utilisateur servent-elles à l'entraînement du modèle ?

<Callout type="warning">
**Non.** Les données utilisateur soumises via l'API (y compris le contenu en entrée et les sorties du modèle) ne sont **pas utilisées pour entraîner ou améliorer les modèles de Kimi**. Vos données servent uniquement à traiter la requête API en cours et ne sont pas conservées à des fins d'entraînement.
</Callout>

## Comment la sécurité des données privées est-elle assurée ?
L'API Kimi met en œuvre plusieurs mesures pour protéger vos données privées :
| Mesure | Description |
| --- | --- |
| **Chiffrement en transit** | Toutes les communications de l'API utilisent HTTPS/TLS |
| **Isolation des données** | Les données des différents utilisateurs sont strictement isolées |
| **Non utilisées pour l'entraînement** | Les données de l'API ne servent pas à entraîner les modèles |
| **Contrôle d'accès** | Authentification par clé API pour un accès strictement autorisé |
| **Certifications de conformité** | La plateforme a obtenu les certifications de sécurité requises |

<Callout type="tip">
Pour des exigences de sécurité plus élevées, contactez l'équipe commerciale afin de découvrir les solutions de sécurité de niveau entreprise.
</Callout>

## Contrôle de la sécurité du contenu
L'API Kimi intègre un mécanisme de contrôle de la sécurité du contenu :
- Le système détecte et filtre automatiquement les contenus interdits (activités illégales, violence, contenu explicite, etc.)
- En cas de déclenchement, l'API renvoie une réponse d'erreur appropriée
- Le contrôle du contenu ne stocke ni n'expose vos données d'origine
- Si vous estimez qu'un contrôle a été déclenché à tort, contactez le support en indiquant le `request_id`
## Comment supprimer les fichiers téléversés ?
Les fichiers téléversés via l'API de fichiers peuvent être supprimés à tout moment :

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "DELETE https://api.moonshot.ai/v1/files/{file_id}",
    },
  ]}
/>

Incluez votre clé API dans l'en-tête de la requête et indiquez l'ID du fichier pour le supprimer. Une fois supprimé, le fichier ne peut plus être référencé et ses données sont effacées du serveur.

<Callout type="info">
Vous pouvez également consulter et supprimer les fichiers téléversés depuis la page de gestion des fichiers dans la console.
</Callout>
