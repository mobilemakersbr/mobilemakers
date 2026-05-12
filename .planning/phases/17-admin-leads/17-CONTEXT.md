# Phase 17: Painel Administrativo de Leads - Context

**Gathered:** 2026-05-12
**Status:** In Progress
**Mode:** Smart Discuss

## Phase Boundary

Criar uma interface para gestão dos leads capturados na newsletter. Apenas o administrador da plataforma deve ter acesso a esta página.

## Implementation Decisions

### Segurança
- **Proteção de Rota:** Implementar verificação no Server Component da página `/admin/leads`.
- **Admin Email:** O e-mail `mathcuskurio@gmail.com` será tratado como o administrador principal.

### UI/UX
- **Admin Layout:** Uma página simples com uma tabela de e-mails e data de inscrição.
- **Exportação:** Adicionar um botão para gerar um arquivo CSV com todos os leads.
- **Empty State:** Exibir mensagem caso não haja leads capturados ainda.

### Lógica
- **Server Action:** `getNewsletterLeads` para buscar os dados da tabela `newsletter_leads`.

## Specifics

- Localização: `/admin/leads`.
- Acesso: Apenas para o e-mail definido. Outros usuários serão redirecionados para a Home.
