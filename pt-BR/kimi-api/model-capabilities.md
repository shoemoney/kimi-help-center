---
title: "Capacidades do modelo"
slug: "api-model-capabilities"
order: 11
extract_headings: true
preview: false
---

<SeoMeta
  title="Capacidades do modelo - Central de Ajuda da Kimi"
  description="Veja abaixo as perguntas frequentes sobre as capacidades dos modelos da Kimi API."
/>

# Capacidades do modelo

Veja abaixo as perguntas frequentes sobre as capacidades dos modelos da Kimi API.

## A Kimi API oferece suporte ao modo JSON?

Sim. A Kimi API oferece o modo JSON, que restringe a saída do modelo a um JSON válido. Como usar:

- Defina o parâmetro `response_format` como `{"type": "json_object"}` na sua requisição.
- Instrua o modelo explicitamente no seu prompt a retornar JSON e descreva a estrutura esperada.
- No modo JSON, o modelo garante a saída de uma string JSON que pode ser analisada.

## A Kimi API oferece suporte ao ajuste fino de modelos?

A Kimi API **atualmente não oferece suporte** ao ajuste fino de modelos iniciado pelo usuário. Para necessidades de modelos personalizados, entre em contato com a equipe de vendas em [platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales) e conheça as opções de personalização para empresas.

## A Kimi API oferece suporte a OCR?

Os modelos Vision da Kimi API têm capacidade de compreensão de imagens e podem reconhecer texto dentro delas, alcançando resultados semelhantes ao OCR:

- Suportam o reconhecimento de texto em inglês, chinês e muitos outros idiomas.
- Conseguem reconhecer texto impresso e parte do texto manuscrito.
- Cada imagem é cobrada a uma taxa fixa de 1.024 tokens.
- Além do reconhecimento de texto simples, os modelos também interpretam tabelas, gráficos e outros conteúdos estruturados dentro das imagens.

## A Kimi API oferece suporte a TTS (texto para fala) e ASR (reconhecimento de fala)?

A Kimi API **atualmente não oferece suporte** a TTS ou ASR. Para capacidades relacionadas a fala, considere combinar um serviço de voz de terceiros com a Kimi API. Acompanhe os comunicados da plataforma para conhecer as próximas atualizações de recursos.
