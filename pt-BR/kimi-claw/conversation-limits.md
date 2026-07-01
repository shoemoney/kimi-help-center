---
title: "Limites de conversa"
slug: "conversation-limits"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Limites de conversa - Central de Ajuda Kimi"
  description="Quando o contexto da conversa fica muito longo e ultrapassa o limite de tokens do modelo, o Kimi Claw pode parar de responder ou retornar um erro."
/>

# Limites de conversa

Quando o contexto da conversa fica muito longo e ultrapassa o limite de tokens do modelo, o Kimi Claw pode parar de responder ou retornar um erro.

**Como resolver:**

- Envie `/new` para iniciar uma nova conversa e limpar o contexto atual.
- Se o erro persistir após o `/new`, pode haver Skills demais carregadas na memória. Tente:
  - `/skills` — revise as skills instaladas e desinstale as que não precisar.
  - `/compact` — compacte o contexto atual para liberar espaço.
  - `/reset` — redefina completamente o Kimi Claw como último recurso.

## Atingiu o limite de requisições da API?

Isso significa que você chegou ao limite de frequência de requisições. Aguarde um momento e tente novamente.

**Para verificar sua quota e seus rate limits:**

1. Acesse [kimi.com/code](https://kimi.com/code).
2. Abra o **Console**.
3. Clique em **View Quota & Rate Limits** para ver seu uso atual e os limites.

Se você atingir os rate limits com frequência, considere espaçar suas tarefas ou fazer upgrade para um nível de assinatura superior, com maior capacidade de processamento.
