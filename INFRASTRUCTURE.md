# 🌐 Infraestrutura: MobileMakers

O MobileMakers utiliza uma arquitetura baseada em nuvem para garantir escalabilidade e baixa latência.

## 1. Hospedagem (Vercel)

- **Region:** Washington, D.C. (iad1) para proximidade com a infraestrutura do Supabase.
- **Framework:** Next.js (App Router).
- **Optimization:** Imagens são otimizadas automaticamente pela Vercel Edge Network.

## 2. Backend (Supabase)

O Supabase fornece o ecossistema completo:
- **Auth:** Autenticação via Email/Senha (Magic Link habilitado).
- **Database:** PostgreSQL com extensões de busca full-text.
- **Storage:** Bucket `photos` configurado como público para servir os assets.

### Estrutura de Tabelas
- `profiles`: UUID (PK), full_name, avatar_url, updated_at.
- `photos`: ID (PK), user_id (FK), title, url, author, category, location, device_model, created_at.
- `likes`: ID (PK), user_id (FK), photo_id (FK), created_at.
- `comments`: ID (PK), user_id (FK), photo_id (FK), content, created_at.

## 3. Configurações Críticas de Deploy

Para evitar erros de conexão durante o build (Prerendering), as páginas que utilizam o Supabase devem conter:
```ts
export const dynamic = 'force-dynamic'
```
Isso garante que a Vercel não tente conectar ao banco de dados sem as variáveis de ambiente completas durante a compilação estática.

## 4. Variáveis de Produção

As chaves `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` devem ser inseridas manualmente no painel da Vercel para cada novo deployment de produção.

---
*Atualizado em: 2026-05-11*
