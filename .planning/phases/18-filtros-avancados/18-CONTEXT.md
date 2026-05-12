# Phase 18: Filtros de Metadados - Context

**Gathered:** 2026-05-12
**Status:** In Progress
**Mode:** Smart Discuss

## Phase Boundary

Expandir as capacidades de busca e filtragem da plataforma através de metadados técnicos (modelo do dispositivo, resolução).

## Implementation Decisions

### UI/UX
- **Advanced Filters:** Adicionar um botão de "Filtros Avançados" ao lado da barra de busca.
- **Visual:** Usar um Popover ou Drawer (para mobile) contendo uma lista de modelos de dispositivos detectados no banco.
- **Display:** Exibir o modelo do dispositivo nos detalhes da foto (`photo/[id]/page.tsx`).

### Lógica
- **Dynamic Options:** Buscar a lista única de `device_model` presentes no banco para popular o filtro.
- **Filtragem:** Atualizar a lógica do `useMemo` na Home para considerar o dispositivo selecionado.

## Specifics

- Priorizar modelos populares (iPhone, Samsung) nos filtros rápidos.
- Garantir que a busca textual também considere o modelo do dispositivo.
