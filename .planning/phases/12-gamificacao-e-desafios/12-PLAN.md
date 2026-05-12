# Phase 12 Plan: Gamificação e Desafios

## Objective

Implementar seção de destaques e ranking para gamificar a experiência dos autores.

## Tasks

### ⚡ Data Logic

- [ ] Criar Server Action `getTopCreators` que busca os perfis com mais likes acumulados.
- [ ] Implementar lógica de contagem de likes por autor.

### 🎨 UI Components

- [ ] Criar `src/components/featured-creators.tsx`.
- [ ] Desenvolver card de autor com badge de ranking (Dourado/Prata/Bronze).
- [ ] Adicionar seção de "Desafio da Semana" (Banner visual).

### ⚡ Integration

- [ ] Inserir `FeaturedCreators` na Home (`src/app/page.tsx`) entre os filtros e a galeria.

## Verification

- [ ] Verificar se os autores com mais likes aparecem na ordem correta no ranking.
- [ ] Clicar no avatar de um criador e ser direcionado para o perfil dele.
- [ ] Garantir que o Mural dos Vencedores é rolável horizontalmente em mobile.
