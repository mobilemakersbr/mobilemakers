# Phase 13 Plan: Landing Page

## Objective
Implementar uma homepage de alta conversão para usuários não autenticados.

## Tasks

### 🎨 UI Components
- [ ] Criar `src/components/landing-page.tsx`.
- [ ] Desenvolver `HeroSection` com CTA.
- [ ] Desenvolver `ValueProposition` section.
- [ ] Adicionar `MiniGallery` preview.

### ⚡ Integration
- [ ] Atualizar `src/app/page.tsx` para alternar entre `LandingPage` e `Dashboard` baseado no estado de autenticação.
- [ ] Ajustar o `Layout` para esconder elementos desnecessários na Landing Page.

## Verification
- [ ] Abrir a Home em modo anônimo e ver a Landing Page.
- [ ] Fazer login e garantir que a galeria principal volta a ser exibida.
- [ ] Testar CTAs da Landing Page (devem levar para /login).
