# Phase 15: Integração de Newsletter e Captura de Leads - Context

**Gathered:** 2026-05-12
**Status:** In Progress
**Mode:** Smart Discuss

## Phase Boundary

Implementar um sistema de captura de e-mails para marketing. O objetivo é converter visitantes que ainda não estão prontos para o cadastro completo em leads qualificados.

## Implementation Decisions

### UI/UX
- **Newsletter Section:** Adicionar uma seção no final da `LandingPage` com um campo de e-mail e botão "Me inscrever".
- **Design:** Simples, limpo e integrado à identidade visual dark mode.
- **Micro-interações:** Loading state no botão e mensagem de "Obrigado!" animada.

### Lógica
- **Server Action:** `subscribeToNewsletter` para validar e salvar o e-mail no Supabase.
- **Validação:** Garantir formato de e-mail válido no client e no server.

## Specifics

- A tabela `newsletter_leads` permitirá inserções públicas via RLS.
- Redirecionamento ou mensagem de sucesso inline.
