# Phase 11 Plan: Selos de Licença

## Objective
Implementar selos de confiança e informações de licenciamento para profissionalizar a plataforma.

## Tasks

### 🎨 UI Components
- [ ] Criar `src/components/license-badge.tsx`.
- [ ] Implementar Popover ou Tooltip com os detalhes da licença.
- [ ] Adicionar ícone de escudo ou verificado.

### ⚡ Integration
- [ ] Localizar e atualizar a página de detalhes da foto (`src/app/photo/[id]/page.tsx`).
- [ ] Inserir o `LicenseBadge` próximo ao cabeçalho ou botões de ação da foto.

## Verification
- [ ] Abrir uma foto e verificar se o selo de licença está visível.
- [ ] Clicar/Hover no selo e ler a explicação da licença.
- [ ] Garantir que o visual não brigue com a imagem principal.
