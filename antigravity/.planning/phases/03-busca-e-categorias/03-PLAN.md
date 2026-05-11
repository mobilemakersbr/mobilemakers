# Phase 3 Plan: Busca e Categorias

## Tasks

### T-01: Enriquecimento de Dados
- **Ação:** Atualizar `src/lib/data.ts` para incluir o campo `category` em cada foto.
- **Objetivo:** Ter metadados para realizar a filtragem.

### T-02: Componente de Busca (Input)
- **Ação:** Criar `src/components/search-bar.tsx` usando o componente Input do shadcn.
- **Objetivo:** Capturar o texto digitado pelo usuário.

### T-03: Barra de Categorias (Chips)
- **Ação:** Criar `src/components/category-filters.tsx`.
- **Objetivo:** Permitir a filtragem por temas (Natureza, Urbano, etc) via scroll horizontal.

### T-04: Lógica de Filtragem na Home
- **Ação:** Atualizar `src/app/page.tsx` para gerenciar os estados de busca e categoria e filtrar a lista de fotos enviada ao `ImageGrid`.
- **Objetivo:** Fazer a interface reagir em tempo real às entradas do usuário.

## Verification
- [ ] Digitar no campo de busca e ver as fotos filtrando.
- [ ] Clicar em uma categoria e ver apenas fotos daquele tema.
- [ ] Limpar a busca e voltar ao feed completo.
