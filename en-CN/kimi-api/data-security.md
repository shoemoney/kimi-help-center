---
title: "Data Processing and Security"
slug: "api-data-security"
order: 13
extract_headings: true
preview: true
preview_content: "Kimi API data processing statement, security mechanisms, and file deletion endpoint."
---

<SeoMeta
  title="Kimi API Data Security and Privacy Protection - Kimi Help Center"
  description="Learn about Kimi API’s data security measures, privacy protection policies, and compliance certifications. Your data is not used for model training, and is protected with end-to-end encrypted transmission to help keep enterprise data secure."
/>

# Data Processing and Security

Kimi API takes user data security and privacy protection very seriously. Below are answers to common questions.

## Will user data be used for model training?

**No.** User data submitted via the API, including input content and model outputs, will not be used to train or improve Kimi models. Your data is used only to fulfill the current API request. Once processing is complete, it will not be persistently stored for training purposes.

## How is private-domain data protected?

Kimi API uses multiple safeguards to protect your private-domain data:

- **Encrypted transmission**: All API communications are encrypted with HTTPS/TLS.
- **Data isolation**: Data from different users is strictly isolated and cannot be viewed by others.
- **Not used for training**: API data is not used for model training.
- **Access control**: The API Key authentication mechanism ensures that only authorized requests can access your data.
- **Compliance certifications**: The platform has obtained relevant security and compliance certifications.

If you have higher security requirements, contact the sales team to learn about enterprise-grade security solutions.

## Content safety review mechanism

Kimi API has a built-in content safety review mechanism:

- The system automatically detects and filters non-compliant content, such as content involving illegal activity, violence, or pornography.
- When content safety review is triggered, the API returns the corresponding error message.
- Content review does not store or disclose your original data.
- If you believe it was triggered by mistake, contact customer support with the request_id.

## How do I delete uploaded files?

Files uploaded through the file endpoint can be deleted at any time:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "DELETE https://api.moonshot.cn/v1/files/{file_id}",
    },
  ]}
/>

Include the API Key in the request header and provide the file ID to delete the file. After deletion, the file can no longer be referenced, and the related data will be removed from the server.

You can also view and delete uploaded files manually on the file management page in the console.
