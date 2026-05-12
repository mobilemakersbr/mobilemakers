# Phase 8: Sistema de Coleções - Context

**Gathered:** 2026-05-12
**Status:** In Progress
**Mode:** Smart Discuss

## Phase Boundary

Implementar a funcionalidade de "Moodboards" onde usuários podem criar coleções e salvar fotos nelas, aumentando a retenção e utilidade da plataforma como ferramenta de curadoria.

## Implementation Decisions

### Banco de Dados
- **Tabela `collections`**: id, user_id (FK), name, description, created_at.
- **Tabela `collection_photos`**: id, collection_id (FK), photo_id (FK), created_at.
- Índices de busca para `user_id` e `collection_id`.

### UX/UI
- Componente `SaveToCollectionDialog`: Permite selecionar coleção existente ou criar uma nova "on-the-fly".
- Gatilho: Ícone de "Bookmark" no card da foto.

## Specifics

- Um usuário não pode ver coleções privadas de outros (inicialmente todas serão privadas).
- Uma foto pode pertencer a múltiplas coleções do mesmo usuário.
