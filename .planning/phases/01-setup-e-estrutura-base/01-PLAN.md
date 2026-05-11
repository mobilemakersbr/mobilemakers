# Phase 1 Plan: Setup e Estrutura Base

Este plano descreve as tarefas necessárias para configurar o ambiente local do Antigravity.

## Tasks

### T-01: Inicialização do Next.js
- **Ação:** Executar `npx create-next-app@latest . --typescript --tailwind --app --src-dir --eslint --import-alias "@/*"`.
- **Objetivo:** Criar a estrutura base do projeto na pasta raiz.

### T-02: Configuração do shadcn/ui
- **Ação:** Executar `npx shadcn@latest init -y`.
- **Objetivo:** Instalar e configurar a biblioteca de componentes profissional.

### T-03: Setup do Dark Mode
- **Ação:** Instalar `next-themes` e criar o `ThemeProvider` no diretório `/src/components`.
- **Objetivo:** Garantir que o app suporte o tema escuro por padrão.

### T-04: Layout Base e Bottom Nav
- **Ação:** Criar o componente `BottomNav` e integrar no `layout.tsx`.
- **Objetivo:** Implementar a navegação otimizada para o polegar.

## Verification
- [ ] Rodar `npm run dev` e acessar `localhost:3000`.
- [ ] Verificar se o Dark Mode está ativo.
- [ ] Confirmar se a Bottom Nav aparece no mobile (responsivo).
