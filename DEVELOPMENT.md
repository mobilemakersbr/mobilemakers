# 🛠️ Guia de Desenvolvimento: MobileMakers

Este guia é destinado a desenvolvedores que desejam contribuir ou manter o MobileMakers.

## 1. Requisitos

- Node.js 18+
- NPM / PNPM
- Conta no Supabase (para ambiente de dev)

## 2. Variáveis de Ambiente

Crie um arquivo `.env.local` com as seguintes chaves:

```env
NEXT_PUBLIC_SUPABASE_URL=https://jozbkjxjdrkqlygmrdrx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
```

## 3. Comandos Úteis

- `npm run dev`: Inicia o servidor local com Turbopack.
- `npm run build`: Valida o projeto e gera o bundle de produção.
- `npm run lint`: Verifica erros de sintaxe e estilo.
- `npm run test`: Executa os testes unitários e de integração.

## 4. Padrões de Código

- **TypeScript:** Use tipos explícitos. Evite `any`.
- **Componentes:** Use `shadcn/ui`. Se precisar de um novo componente, instale via `npx shadcn-ui@latest add [nome]`.
- **Estilo:** Siga a paleta de cores Violet/Indigo definida no `globals.css`.

## 5. Fluxo de Trabalho (GSD)

O projeto utiliza o sistema de planejamento GSD (Get Shit Done):
1. **Discussão:** O que vamos fazer?
2. **Plano:** Criação do `PLAN.md` na pasta `.planning`.
3. **Execução:** Codificação e testes.
4. **Verificação:** UAT e Code Review.

## 6. Git Hooks

Os commits devem ser semânticos (ex: `feat:`, `fix:`, `chore:`, `refactor:`).

---
*Atualizado em: 2026-05-11*
