# 🎓 Aula 28: Erros Comuns e Soluções (Guia de Sobrevivência)

**Objetivo:** Transformar bugs em aprendizado técnico profundo.

---

## 📸 Status do Print Sugerido

> **O que capturar:** O log de erro da Vercel (vermelho) comparado com o site online (verde).
> **Dica de Vídeo:** "Nesta aula final, vamos abrir a caixa preta. Vou te mostrar todos os erros que quase travaram o nosso projeto e como resolvemos cada um. Isso aqui vale ouro".

## 🔍 Os 4 Dragões do Deploy

### 1. O Fantasma do 404 (Variáveis de Ambiente)
- **O Erro:** O site dava 404 na Vercel mesmo após o deploy.
- **A Causa:** Usamos `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` no código, mas o Supabase espera `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- **A Solução:** Sincronizar todos os nomes no código com o que foi cadastrado na Vercel.
- **Lição:** Nomes de variáveis são o DNA da sua infra. Um caractere errado mata o projeto.

### 2. O Bloqueio do Linter (Qualidade que Trava)
- **O Erro:** O build da Vercel falhava com mensagens sobre `any` ou aspas não escapadas.
- **A Causa:** O Next.js 15+ é extremamente rigoroso. Ele trata avisos de "variável não utilizada" como erros fatais para garantir que seu site seja perfeito.
- **A Solução:** Rodar `npm run lint` localmente e limpar TODOS os erros antes de subir o código.
- **Lição:** No Next.js moderno, não existe "deixa passar esse aviso". O build vai travar.

### 3. O Middleware Assíncrono (Async/Await)
- **O Erro:** `await isn't allowed in non-async function` no middleware.
- **A Causa:** Tentamos usar o `getUser()` (que é assíncrono) dentro de uma função que não era `async`.
- **A Solução:** Transformar o `createClient` e o `proxy` em funções `async` e usar `await` em todas as chamadas.
- **Lição:** Funções de rede (DB, Auth) são sempre assíncronas. O Middleware não é exceção.

### 4. O Conflito de Hidratação (Dark Mode)
- **O Erro:** Texto piscando ou erros de "Hydration mismatch" ao trocar o tema.
- **A Causa:** O servidor tenta renderizar um tema (ex: Light) e o navegador já tem outro salvo (ex: Dark).
- **A Solução:** Usar o padrão `setMounted(true)` num `useEffect` para garantir que o toggle de tema só apareça quando o navegador estiver pronto.
- **Lição:** O que o servidor vê nem sempre é o que o cliente vê. O `useEffect` é a ponte entre esses dois mundos.

---

## 🏆 Conclusão do Milestone 2
Parabéns! Você não apenas construiu um sistema, você aprendeu a debugar como um profissional.

---
*Relatório gerado automaticamente para o canal KurióSchool*
