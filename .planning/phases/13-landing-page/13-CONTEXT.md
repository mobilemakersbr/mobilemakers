# Phase 13: Landing Page para Usuários Não-Logados - Context

**Gathered:** 2026-05-12
**Status:** In Progress
**Mode:** Smart Discuss

## Phase Boundary

Criar uma experiência de entrada (Landing Page) que explique o valor do MobileMakers antes de exigir o login. Atualmente, a galeria é exibida de forma genérica para todos.

## Implementation Decisions

### UI/UX
- **Hero Section:** Título impactante ("A revolução do 9:16"), subtítulo focado em dor (gestores de tráfego/ads) e CTA primário.
- **Showcase:** Uma mini-galeria estática ou selecionada para mostrar a qualidade do conteúdo.
- **Value Props:** Ícones e textos curtos (UGC Autêntico, Licença Comercial, Pronto para Ads).
- **Sticky Header:** Com botões de "Entrar" e "Começar Agora".

### Lógica
- **Toggle de Visibilidade:** O `src/app/page.tsx` passará a renderizar o componente `LandingPage` se o estado `user` for nulo e o carregamento estiver concluído.

## Specifics

- Usar o sistema de design (Tailwind + Shadcn) já estabelecido.
- Estética Dark Mode premium com gradientes de destaque.
