# 🎓 Aula 04: Execução e Construção da Base

**Objetivo:** Instalar o framework e construir a estrutura de navegação do app.

---

## 📸 Status do Print Sugerido

> **O que capturar:** O VS Code mostrando os arquivos `src/app/layout.tsx` e `src/components/bottom-nav.tsx`.
> **Dica de Vídeo:** Mostre como a estrutura de pastas mudou após os comandos de instalação e como o código ficou limpo usando componentes.

## 💡 Explicação Técnica

Configuramos o **Auth SSR** no Next.js 16. O segredo aqui é o `middleware.ts`. Ele atua como um "segurança" na porta do clube: antes de qualquer página carregar, ele verifica se você tem o cookie de sessão. Se não tiver, ele pode te redirecionar ou apenas garantir que o Supabase saiba quem você é.

## ⚠️ Alerta de Infra

Atenção aos nomes das chaves! O Supabase usa `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Se você chamar de `PUBLISHABLE_KEY` (comum em outros serviços), o build da Vercel vai falhar e você terá um erro 404.
ande diferencial foi a implementação da **Bottom Nav**, uma barra fixa na parte inferior da tela. Isso transforma um "site" em uma experiência de "aplicativo", facilitando a vida do usuário que navega com apenas uma mão.

## 🔍 Deep Dive Code

No arquivo `layout.tsx`, aplicamos duas técnicas avançadas:

- **`suppressHydrationWarning`**: Evita que o navegador mostre erros de "conflito" entre o tema claro e escuro no carregamento.
- **`pb-16` (Padding Bottom)**: Adicionamos um espaço no final da página para que a barra de navegação nunca cubra o conteúdo (fotos ou textos).

## 🛠️ Stack Tecnológica

- **Framework:** `Next.js 16 (App Router)`.
- **React:** `Version 19`.
- **Estilização:** `Tailwind CSS 4` + `shadcn/ui`.
- **Ícones:** `Lucide React`.
- **Tema:** `next-themes` (Modo Dinâmico).

## 🚨 Dica Forense

O build da Vercel é o seu melhor amigo e seu pior inimigo. Se houver um erro de tipagem (`any`) ou um link quebrado, ele vai barrar seu site. Mantenha o `npm run lint` sempre verde!

---

### *Relatório gerado automaticamente para o canal KurióSchool*
