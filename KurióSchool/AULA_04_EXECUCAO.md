# 🎓 Aula 04: Execução e Construção da Base

**Objetivo:** Instalar o framework e construir a estrutura de navegação do app.

---

## 📸 Status do Print Sugerido
> **O que capturar:** O VS Code mostrando os arquivos `src/app/layout.tsx` e `src/components/bottom-nav.tsx`. 
> **Dica de Vídeo:** Mostre como a estrutura de pastas mudou após os comandos de instalação e como o código ficou limpo usando componentes.

## 💡 Explicação Técnica
Nesta aula, tiramos o projeto do papel. Usamos comandos automatizados para instalar o Next.js e o shadcn/ui. O grande diferencial foi a implementação da **Bottom Nav**, uma barra fixa na parte inferior da tela. Isso transforma um "site" em uma experiência de "aplicativo", facilitando a vida do usuário que navega com apenas uma mão.

## 🔍 Deep Dive Code
No arquivo `layout.tsx`, aplicamos duas técnicas avançadas:
- **`suppressHydrationWarning`**: Evita que o navegador mostre erros de "conflito" entre o tema claro e escuro no carregamento.
- **`pb-16` (Padding Bottom)**: Adicionamos um espaço no final da página para que a barra de navegação nunca cubra o conteúdo (fotos ou textos).

## 🛠️ Stack Tecnológica
- **Framework:** `Next.js 14 (App Router)`.
- **Estilização:** `Tailwind CSS` + `shadcn/ui`.
- **Ícones:** `Lucide React`.
- **Tema:** `next-themes`.

---
*Relatório gerado automaticamente para o canal KurióSchool*
