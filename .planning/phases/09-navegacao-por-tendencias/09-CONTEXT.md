# Phase 9: Navegação por Tendências - Context

**Gathered:** 2026-05-12
**Status:** In Progress
**Mode:** Smart Discuss

## Phase Boundary

Implementar um sistema de filtragem rápida na Home através de "Chips" de categorias. O objetivo é reduzir o esforço de busca do usuário e aumentar a exploração de conteúdos específicos (padrão observado no Pexels).

## Implementation Decisions

### UI/UX
- **Lista Horizontal:** Chips roláveis horizontalmente com indicadores de scroll sutil em mobile.
- **Estado Ativo:** Destaque visual claro para o filtro selecionado (ex: fundo primário).

### Lógica
- **URL Sync:** O filtro selecionado deve refletir na URL (ex: `?category=Natureza`).
- **Integração:** O componente `ImageGrid` deve ouvir essa mudança de categoria para filtrar as fotos.

## Specifics

- Incluir uma opção "Tudo" ou "Geral" para resetar o filtro.
- As categorias devem ser extraídas dinamicamente do banco de dados (tabela `photos`).
