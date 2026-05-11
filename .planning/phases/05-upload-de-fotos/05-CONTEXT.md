# Phase 5: Upload de Fotos - Context

**Gathered:** 2026-05-11
**Status:** Ready for planning

<domain>
## Phase Boundary
Implementação de uma página dedicada de upload com integração ao Supabase Storage e Database.

</domain>

<decisions>
## Implementation Decisions

### UI/UX
- **D-01 (Fluxo):** Página dedicada em `/upload`.
- **D-02 (Campos):** 
  - Seleção de arquivo (Galeria).
  - Título (Input).
  - Tags (Input).
  - Localização (Cidade ou CEP).
  - Categoria (Dropdown/Chips).

### Infrastructure
- **Storage:** Supabase Storage (Bucket: `photos`).
- **Database:** Tabela `photos` no Supabase para persistência dos metadados.

</decisions>

<canonical_refs>
## Canonical References
- `src/app/upload/page.tsx` — Nova página.
- `src/utils/supabase/` — Utilitários já configurados.
</canonical_refs>
