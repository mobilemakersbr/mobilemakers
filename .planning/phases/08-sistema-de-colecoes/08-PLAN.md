# Phase 8 Plan: Sistema de Coleções

## Objective
Implementar infraestrutura de banco de dados e componentes de UI para curadoria de fotos via coleções.

## Tasks

### 🗄️ Database & Types
- [ ] Criar script SQL para tabelas `collections` e `collection_photos`.
- [ ] Executar script no console do Supabase (simulado via instrução ao usuário ou CLI se disponível).
- [ ] Atualizar tipos TypeScript em `src/types/database.ts` (se existir) ou locais.

### ⚡ Server Actions
- [ ] Criar `createCollection` em `src/app/actions/collections.ts`.
- [ ] Criar `addPhotoToCollection` para vincular fotos.
- [ ] Criar `getCollectionsByUser` para alimentar a UI.

### 🎨 UI Components
- [ ] Criar `src/components/collections/save-dialog.tsx`.
- [ ] Integrar botão de salvar no `src/components/photo-card.tsx` (ou equivalente no grid).
- [ ] Criar aba de coleções em `src/app/profile/page.tsx`.

## Verification
- [ ] Criar coleção "Test".
- [ ] Salvar foto 1 em "Test".
- [ ] Verificar se a foto aparece na aba de coleções do perfil.
