# Phase 16 Plan: Creator Dashboard

## Objective

Prover insights de engajamento para os autores da plataforma.

## Tasks

### ⚡ Actions & Logic

- [ ] Criar Server Action `incrementView` em `src/app/actions/photos.ts`.
- [ ] Criar Server Action `getCreatorAnalytics` em `src/app/actions/profile.ts`.

### 🎨 UI Components

- [ ] Criar componente `src/components/creator-stats.tsx`.
- [ ] Integrar a aba de Estatísticas na página de Perfil (`src/app/profile/page.tsx`).

### ⚡ Integration

- [ ] Chamar `incrementView` na página de detalhes da foto.

## Verification

- [ ] Abrir uma foto e verificar se o `views_count` aumenta no banco de dados.
- [ ] Ver os totais acumulados no perfil do autor.
