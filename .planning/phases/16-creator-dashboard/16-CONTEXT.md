# Phase 16: Creator Dashboard (Analytics) - Context

**Gathered:** 2026-05-12
**Status:** In Progress
**Mode:** Smart Discuss

## Phase Boundary

Implementar uma visão de analytics para criadores de conteúdo. O objetivo é fornecer dados de performance (views, likes) para incentivar o upload de fotos de alta qualidade.

## Implementation Decisions

### UI/UX
- **Dashboard Section:** Uma nova aba ou seção no Perfil do usuário chamada "Estatísticas".
- **Visual:** Gráficos simples ou cards de resumo (Total Views, Total Likes, Foto mais popular).
- **Interatividade:** Contador de views incrementado automaticamente ao abrir a página de detalhes da foto.

### Lógica
- **Incremento de Views:** Chamar a função `increment_photo_views` (via RPC ou Server Action) sempre que uma foto for carregada em `src/app/photo/[id]/page.tsx`.
- **Query de Analytics:** Buscar o total acumulado de views e likes de todas as fotos de um autor específico.

## Specifics

- Usar componentes de card do shadcn para os números de destaque.
- Garantir que o incremento de views não atrase o carregamento da página (fazer em background ou via Client Effect).
