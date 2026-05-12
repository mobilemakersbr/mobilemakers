# Phase 11: Selos de Licença e Segurança Jurídica - Context

**Gathered:** 2026-05-12
**Status:** In Progress
**Mode:** Smart Discuss

## Phase Boundary

Implementar elementos visuais que reforcem a segurança jurídica da plataforma. O objetivo é aumentar a taxa de download/compra ao garantir que o usuário saiba exatamente o que pode fazer com a imagem (padrão observado na pesquisa de UX do Pexels).

## Implementation Decisions

### UI/UX
- **Selo de Confiança:** Um badge flutuante ou fixo com ícone de "Check" ou "Shield".
- **Modal de Detalhes:** Ao clicar no selo, abre um pequeno popup explicando os termos da licença MobileMakers.

### Conteúdo
- "Licença MobileMakers": Grátis para uso pessoal e comercial. Atribuição opcional mas recomendada.

## Specifics

- Adicionar o componente na página individual da foto (`/photo/[id]`).
- Usar cores suaves (verde/azul) para transmitir calma e segurança.
