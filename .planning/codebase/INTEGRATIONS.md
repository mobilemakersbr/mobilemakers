# 🔌 Integrações Externas

## Supabase
- **URL:** `https://jozbkjxjdrkqlygmrdrx.supabase.co`
- **Serviços:**
  - Auth (Email/Senha)
  - PostgreSQL (Database)
  - Storage (Bucket: `photos`)
- **Configuração:** Gerenciada via `@supabase/ssr` com `cookies()` para persistência de sessão.

## Vercel
- **Edge Functions:** Utilizadas para otimização de imagens e rotas dinâmicas.
- **Analytics:** Habilitado para monitoramento de performance (WebVitals).

## Unsplash (Placeholder/Assets)
- Utilizado para imagens de demonstração e categorias estáticas via URLs diretas.
