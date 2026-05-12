# Phase 9 Plan: Navegação por Tendências

## Objective
Implementar sistema de chips de categorias na Home para navegação rápida e intuitiva.

## Tasks

### 🎨 UI Components
- [ ] Criar `src/components/trend-chips.tsx`.
- [ ] Adicionar estilização para pílulas (chips) com suporte a modo escuro/claro.
- [ ] Implementar scroll horizontal suave.

### ⚡ Data & Logic
- [ ] Criar função no Supabase (ou query local) para buscar categorias únicas que possuam fotos.
- [ ] Sincronizar o estado do chip selecionado com `useSearchParams` do Next.js.
- [ ] Atualizar o componente principal da Home (`src/app/page.tsx`) para passar o filtro para o `ImageGrid`.

## Verification
- [ ] Clicar no chip "Urbano" e verificar se apenas fotos urbanas aparecem.
- [ ] Clicar no chip "Tudo" e verificar se o filtro é limpo.
- [ ] Recarregar a página com o filtro na URL e verificar se o chip correto inicia selecionado.
