# 🎓 Aula 12: Infraestrutura de Autenticação (Supabase)

**Objetivo:** Configurar o SDK do Supabase e preparar o app para gerenciar usuários.

---

## 📸 Status do Print Sugerido
> **O que capturar:** A pasta `src/utils/supabase` com os três arquivos (`server.ts`, `client.ts`, `middleware.ts`).
> **Dica de Vídeo:** Explique que o Supabase no Next.js precisa de três "versões" diferentes de cliente porque o Next.js roda em lugares diferentes (Servidor, Navegador e no meio do caminho com o Middleware).

## 💡 Explicação Técnica
Configuramos o que chamamos de **Auth SSR** (Server-Side Rendering). Isso significa que o app consegue saber se o usuário está logado antes mesmo da página carregar no navegador, o que é muito mais rápido e seguro.

## 🔍 Deep Dive Code
Mostre no vídeo o arquivo `.env.local`. Explique que as chaves `NEXT_PUBLIC` são seguras para ficarem no navegador, mas que elas nunca devem ser alteradas manualmente sem saber o que está fazendo, pois são o DNA da conexão com o banco de dados.

## 🛠️ Stack Tecnológica
- `@supabase/supabase-js`
- `@supabase/ssr`
- Next.js Middleware

---
*Relatório gerado automaticamente para o canal KurióSchool*
