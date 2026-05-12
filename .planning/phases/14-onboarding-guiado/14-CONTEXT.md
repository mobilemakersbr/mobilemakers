# Phase 14: Fluxo de Onboarding Guiado - Context

**Gathered:** 2026-05-12
**Status:** In Progress
**Mode:** Smart Discuss

## Phase Boundary

Implementar uma sequência de boas-vindas para novos usuários. O objetivo é reduzir o churn inicial ao explicar as funcionalidades exclusivas da plataforma (Moodboards, Licença UGC).

## Implementation Decisions

### UI/UX
- **Onboarding Modal:** Um diálogo centralizado com 3 etapas:
  1. Boas-vindas e Visão Geral.
  2. Como usar as Coleções (Moodboards).
  3. Explicação sobre Licença e Segurança.
- **Progressão:** Botões "Próximo" e "Concluir".
- **Visual:** Uso de ilustrações ou ícones grandes para manter o engajamento.

### Lógica
- **Verificação de Perfil:** O componente `OnboardingDialog` buscará o campo `onboarding_completed` do perfil do usuário logado.
- **Update via Action:** Uma Server Action `completeOnboarding` atualizará o banco de dados.

## Specifics

- Localização: Aparecer na Home logo após o carregamento inicial se o usuário for novo.
