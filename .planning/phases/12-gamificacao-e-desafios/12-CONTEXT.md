# Phase 12: Gamificação e Desafios Semanais - Context

**Gathered:** 2026-05-12
**Status:** In Progress
**Mode:** Smart Discuss

## Phase Boundary

Implementar a fundação de gamificação da plataforma. O objetivo é criar um loop de retenção para os criadores (autores) através de reconhecimento público e status (padrão observado no ranking do Pexels).

## Implementation Decisions

### UI/UX

- **Mural dos Vencedores:** Uma seção horizontal no topo da galeria (`FeaturedSection`).
- **Creator Cards:** Pequenos cards com avatar, nome e contagem de "Troféus" (likes semanais).
- **Badge de Destaque:** Selo de "Top 1", "Top 2" etc.

### Lógica

- **Filtro de Destaque:** Inicialmente baseado nos autores que mais receberam likes totais no sistema.
- **Botão de Desafios:** Um card especial que convida o usuário a participar do desafio da semana (Ex: "Foco no Verão").

## Specifics

- Integrar a seção logo abaixo dos Chips de Tendência na Home.
- Usar cores douradas/vibrantes para os badges de vencedor.
