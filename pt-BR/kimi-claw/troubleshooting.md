---
title: "Solução de problemas gerais"
slug: "troubleshooting"
order: 12
extract_headings: false
preview: false
---

<SeoMeta
  title="Solução de problemas gerais - Central de Ajuda da Kimi"
  description="Esta página aborda códigos de erro comuns e opções de reparo automático do Kimi Claw."
/>

# Solução de problemas gerais

Esta página aborda códigos de erro comuns e opções de reparo automático do Kimi Claw.

## Códigos de erro comuns

| Código | Significado | O que fazer |
|------|---------|------------|
| **400** | Bad Request — Entrada malformada ou parâmetros inválidos | Verifique se a sua mensagem contém conteúdo não suportado e tente novamente. |
| **401** | Unauthorized — Falha na autenticação | Saia do Kimi e faça login novamente. Se o problema persistir, verifique suas credenciais de API nas configurações do Kimi Claw. |
| **403** | Forbidden — Permissões insuficientes | Confirme se o seu nível de assinatura oferece suporte ao recurso que você está usando. Certifique-se de que sua conta não esteja restrita. |
| **429** | Too Many Requests — Limite de taxa excedido | Aguarde alguns minutos e tente novamente. Consulte [Limites de conversa](/kimi-claw/conversation-limits) para saber como verificar sua quota. |
| **500** | Internal Server Error — Algo deu errado no servidor | Tente novamente após uma breve espera. Se o problema persistir, use as opções de reparo automático abaixo ou entre em contato com o suporte. |

## Opções de reparo automático

O Kimi Claw oferece ferramentas de reparo integradas, acessíveis em **Configurações** na versão web:

| Opção | O que faz |
|--------|--------------|
| **Reiniciar o Kimi Claw** | Reinicia a conexão com o gateway. Resolve a maioria dos problemas transitórios (desconexões da bridge, travamentos temporários). |
| **Reparar o Kimi Claw** | Executa um diagnóstico automatizado que detecta e corrige problemas de configuração. Experimente esta opção quando uma simples reinicialização não funcionar. |
| **Restaurar configurações iniciais** | Redefine o Kimi Claw para seu estado padrão. Os arquivos do workspace e a Memory são preservados, mas as conexões com plataformas de chat (Telegram, etc.) precisam ser reconfiguradas. Use como último recurso. |

## Caminho de escalonamento

Se as opções de reparo automático não resolverem o problema:

1. Execute `/logs` no Terminal para capturar a saída de erro recente.
2. Execute `/debug` para ativar diagnósticos detalhados.
3. Entre em contato pelo **support@moonshot.ai** com os detalhes do erro e quaisquer logs relevantes.
