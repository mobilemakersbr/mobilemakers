# Phase 2: Galeria e Visualização - Context

**Gathered:** 2026-05-11
**Status:** Ready for planning

<domain>
## Phase Boundary
Implementação do feed principal de imagens e a tela de detalhes individual.

</domain>

<decisions>
## Implementation Decisions

### UI/UX
- **D-01 (Estilo do Feed):** Grid Vertical estilo Masonry (assimétrico).
- **D-03 (Navegação):** Abertura em nova página (Next.js Link/Route) em vez de modal.
- **Visual:** Estética Dark Mode mantida, foco total na imagem.

### Data
- **D-02 (Mock Data):** Utilizar lista de objetos local com URLs reais (referência: Pexels @moraesrenata).
- **Fallback:** Usar Picsum/Unsplash se Pexels falhar no carregamento.

### a agent's Discretion
- Implementar "skeleton loading" (efeito de carregamento) para uma experiência premium.
- Usar `next/image` para otimização automática de tamanho e formato.

</decisions>

<canonical_refs>
## Canonical References
- `src/components/bottom-nav.tsx` — Manter visível em todas as telas principais.
- `src/app/layout.tsx` — Base do ThemeProvider.
</canonical_refs>
