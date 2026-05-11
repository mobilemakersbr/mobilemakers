# 🎓 Aula 12: Infraestrutura de Autenticação (Supabase)

**Objetivo:** Configurar o SDK do Supabase e preparar o app para gerenciar usuários.

---

## 📸 Status do Print Sugerido

> **O que capturar:** A pasta `src/utils/supabase` com os três arquivos (`server.ts`, `client.ts`, `middleware.ts`).
> **Dica de Vídeo:** Explique que o Supabase no Next.js precisa de três "versões" diferentes de cliente porque o Next.js roda em lugares diferentes (Servidor, Navegador e no meio do caminho com o Middleware).

## 💡 Explicação Técnica

Configuramos o **Auth SSR** (Server-Side Rendering). O segredo aqui é o `middleware.ts`, que garante que a sessão seja atualizada em cada requisição. Sem ele, o login funciona, mas o usuário "desloga" toda vez que atualiza a página.

## ⚠️ Perigo: Nomenclatura das Chaves

Atenção redobrada! O SDK do Supabase espera `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Muitos tutoriais antigos usam `PUBLISHABLE_KEY`. Se você errar esse nome, seu build na Vercel vai passar, mas seu site vai dar **404 NOT FOUND** porque o servidor não vai conseguir falar com o banco.

## 🛠️ Stack Tecnológica

- `@supabase/supabase-js`
- `@supabase/ssr`
- Next.js Middleware

---

### *Relatório gerado automaticamente para o canal KurióSchool*
