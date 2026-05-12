# Phase 14 Plan: Onboarding Guiado

## Objective
Guiar o usuário pelas funcionalidades chave da plataforma em seu primeiro acesso.

## Tasks

### ⚡ Database & Actions
- [ ] Criar Server Action `completeOnboarding` em `src/app/actions/profile.ts`.

### 🎨 UI Components
- [ ] Criar `src/components/onboarding-dialog.tsx`.
- [ ] Desenvolver as 3 etapas de conteúdo (Bem-vindo, Coleções, Licença).
- [ ] Implementar lógica de navegação entre etapas.

### ⚡ Integration
- [ ] Integrar `OnboardingDialog` no `src/app/page.tsx`.
- [ ] Garantir que o modal só abra se `onboarding_completed` for falso.

## Verification
- [ ] Simular um novo usuário e ver o modal abrir automaticamente.
- [ ] Concluir o tour e verificar se o modal não abre mais após o reload.
- [ ] Verificar se o estado no banco de dados mudou para `true`.
