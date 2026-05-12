# Phase 17 Plan: Admin Leads

## Objective

Prover uma interface segura para o administrador gerenciar a lista de mailing.

## Tasks

### ⚡ Actions & Logic

- [ ] Criar Server Action `getNewsletterLeads` em `src/app/actions/marketing.ts`.

### 🎨 UI Components

- [ ] Criar a página `src/app/admin/leads/page.tsx`.
- [ ] Desenvolver a tabela de leads e botão de exportação CSV.

### ⚡ Security

- [ ] Implementar verificação de e-mail administrativo na página.

## Verification

- [ ] Tentar acessar `/admin/leads` com um usuário comum e ser redirecionado.
- [ ] Acessar com o e-mail admin e visualizar a lista corretamente.
- [ ] Testar a exportação do arquivo CSV.
