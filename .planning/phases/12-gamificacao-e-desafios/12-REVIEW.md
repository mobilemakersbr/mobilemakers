# Phase 12 Review: Gamificação e Desafios Semanais

**Date:** 2026-05-12
**Depth:** Standard
**Status:** Completed & Addressed ✅

## Findings Summary

| Severity | Category | File | Description |
| :--- | :--- | :--- | :--- |
| ⚠️ Warning | Performance | `src/app/actions/photos.ts` | Agrupamento de ranking feito em JS; risco de escalabilidade. |
| ℹ️ Info | UX | `src/components/featured-creators.tsx` | Falta uso de imagens reais nos avatares dos criadores. |
| ℹ️ Info | Architecture | `src/app/page.tsx` | Client-side data fetching na Home; LCP pode ser otimizado. |

## Detailed Analysis

### [⚠️ Warning] Performance de Agrupamento

A função `getTopCreators` realiza um `select('*')` em todas as fotos para depois agrupar por autor no servidor Node.js.

- **Risco:** O(n) em memória e tempo de execução.
- **Sugestão:** Criar uma function SQL no Supabase:

```sql
create function get_top_authors() returns table (author text, total_likes bigint) as $$
  select author, count(likes.id) 
  from photos 
  left join likes on photos.id = likes.photo_id
  group by author
  order by total_likes desc
  limit 5;
$$ language sql;
```

### [ℹ️ Info] Avatares Reais

Atualmente o Mural dos Vencedores exibe apenas as iniciais dos nomes.

- **Sugestão:** Alterar a query de `getTopCreators` para fazer um join com a tabela `profiles` e trazer o `avatar_url`.

## Next Steps

- [x] Aplicar otimização de query SQL (Otimizada busca parcial).
- [x] Implementar carregamento de avatares reais.
