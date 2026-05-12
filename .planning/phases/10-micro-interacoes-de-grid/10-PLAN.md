# Phase 10 Plan: Micro-interações de Grid

## Objective
Refinar os cards da galeria com animações e estados visuais premium para aumentar o engajamento.

## Tasks

### 🎨 CSS & UI Refinement
- [ ] Atualizar `src/components/image-card.tsx` para esconder botões por padrão no desktop (`opacity-0 group-hover:opacity-100`).
- [ ] Implementar transições suaves de 200ms-300ms para todos os elementos de overlay.
- [ ] Adicionar efeito de escala (`hover:scale-105`) nos botões de ação.

### ⚡ Interaction Feedback
- [ ] Garantir que o `SaveToCollectionDialog` não feche o estado de hover do card prematuramente.
- [ ] Adicionar um leve "pulse" ou "bounce" visual ao dar like com sucesso.

## Verification
- [ ] Passar o mouse sobre uma foto e ver os botões surgirem suavemente.
- [ ] Clicar no botão de Like e observar a micro-animação de escala.
- [ ] Testar em modo mobile (simulado) para garantir que os botões não sumam (usando media queries ou classes de visibilidade).
