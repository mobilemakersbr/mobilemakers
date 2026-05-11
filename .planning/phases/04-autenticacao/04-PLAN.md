# Phase 4 Plan: Autenticação com Supabase

## Tasks

### T-01: Setup da Infra (Concluído ✅)
- Instalação de `@supabase/supabase-js` e `@supabase/ssr`.
- Criação de utilitários em `src/utils/supabase/`.
- Configuração do `middleware.ts`.

### T-02: Página de Teste de Conexão
- **Ação:** Criar `src/app/auth-test/page.tsx`.
- **Objetivo:** Verificar se o cliente Supabase consegue se comunicar com o projeto.

### T-03: Componentes de UI de Auth
- **Ação:** Criar formulário de Login/Cadastro usando shadcn.
- **Objetivo:** Interface para o usuário entrar no app.

### T-04: Lógica de Sign In / Sign Out
- **Ação:** Implementar as funções de autenticação.
- **Objetivo:** Tornar o sistema funcional.

## Verification
- [ ] Build sem erros.
- [ ] Página de teste carregando sem crash.
