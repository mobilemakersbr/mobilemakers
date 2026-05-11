# Phase 3: Busca e Categorias - Context

**Gathered:** 2026-05-11
**Status:** Ready for planning

<domain>
## Phase Boundary
Implementação de barra de busca no header e filtros por categorias através de chips horizontais.

</domain>

<decisions>
## Implementation Decisions

### UI/UX
- **D-01 (Local da Busca):** Integrada no Header da Home.
- **D-02 (Categorias):** Barra horizontal rolável com botões (chips/pills).
- **D-03 (Interação):** Filtro em tempo real (Real-time filtering).

### Logic
- **Search:** Filtrar por `title`, `author` e `category`.
- **Categories:** Filtrar por match exato da categoria selecionada.
- **State Management:** Usar estados locais do React (useState) para o termo de busca e categoria ativa.

</decisions>

<canonical_refs>
## Canonical References
- `src/app/page.tsx` — Onde a busca será integrada.
- `src/lib/data.ts` — Precisará ser atualizado com categorias.
</canonical_refs>
