# Phase 18 Plan: Filtros Avançados

## Objective

Permitir a descoberta de conteúdo através de especificações técnicas do dispositivo móvel.

## Tasks

### ⚡ Actions & Logic

- [ ] Criar Server Action `getUniqueDevices` em `src/app/actions/photos.ts`.

### 🎨 UI Components

- [ ] Criar componente `src/components/advanced-filters.tsx`.
- [ ] Atualizar `src/app/photo/[id]/page.tsx` para exibir os novos metadados.

### ⚡ Integration

- [ ] Integrar `AdvancedFilters` na Home (`src/app/page.tsx`).
- [ ] Atualizar lógica de filtragem para incluir `device_model`.

## Verification

- [ ] Filtrar por "iPhone 15 Pro" e verificar se apenas fotos compatíveis aparecem.
- [ ] Verificar se os metadados aparecem corretamente na página de detalhes da foto.
