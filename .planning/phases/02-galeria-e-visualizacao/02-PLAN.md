# Phase 2 Plan: Galeria e Visualização

Este plano foca na criação da experiência de descoberta de conteúdo.

## Tasks

### T-01: Mock Data e Tipagem
- **Ação:** Criar `src/lib/data.ts` com uma lista de objetos `Photo`.
- **Objetivo:** Ter dados prontos para alimentar a interface sem precisar de API.

### T-02: Componente ImageCard
- **Ação:** Criar `src/components/image-card.tsx` usando `next/image` e estilos do Tailwind.
- **Objetivo:** Definir o visual individual de cada foto com efeito de hover.

### T-03: Feed Masonry (Grid)
- **Ação:** Criar `src/components/image-grid.tsx` e integrá-lo na `src/app/page.tsx`.
- **Objetivo:** Exibir a galeria vertical infinita (estilo Pinterest).

### T-04: Tela de Detalhes Dinâmica
- **Ação:** Criar a rota `src/app/photo/[id]/page.tsx`.
- **Objetivo:** Permitir que o usuário veja a foto em tela cheia com informações extras.

## Verification
- [ ] Verificar se as imagens carregam corretamente.
- [ ] Testar a responsividade do grid (1 col no mobile, 3+ no desktop).
- [ ] Confirmar se o link para a tela de detalhes está funcionando.
