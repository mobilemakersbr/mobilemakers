# Phase 10: Micro-interações de Grid - Context

**Gathered:** 2026-05-12
**Status:** In Progress
**Mode:** Smart Discuss

## Phase Boundary

Refinar a experiência de interação com as fotos diretamente no grid (galeria). O foco é criar um sentimento de "Premium" através de micro-animações, estados de hover inteligentes e feedback visual imediato.

## Implementation Decisions

### UX/UI
- **Visibilidade Condicional:** No desktop, as ações (Like/Save) aparecem apenas quando o mouse está sobre o card.
- **Glassmorphism:** Botões usarão `backdrop-blur` e opacidades variáveis para não obstruir a foto, mas permanecerem legíveis.
- **Feedback Híptico (Visual):** Efeito de escala ao clicar e transições suaves de opacidade.

### Mobile-First
- Garantir que em dispositivos touch as interações não dependam de hover (permanecerão visíveis ou aparecerão ao primeiro toque).

## Specifics

- Unificar o estilo dos botões flutuantes (Bookmark e Heart).
- Adicionar uma leve sombra projetada nos ícones para melhorar o contraste sobre fotos claras.
