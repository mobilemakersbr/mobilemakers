# 🎓 Aula 06: Planejamento da Fase 2 (Feed Masonry)

**Objetivo:** Organizar a construção da galeria e navegação por ID.

---

## 📸 Status do Print Sugerido
> **O que capturar:** O arquivo `02-PLAN.md` com as tarefas T-01 a T-04.
> **Dica de Vídeo:** Explique como estamos estruturando os dados antes de criar o visual. Isso é o "Backend First" mental.

## 💡 Explicação Técnica
Nesta aula, planejamos a funcionalidade mais importante do Antigravity: a visualização das fotos. Definimos um fluxo que começa na tipagem dos dados (TypeScript) e termina na criação de rotas dinâmicas. O uso de rotas dinâmicas (`/photo/[id]`) é o que torna o site profissional e amigável para SEO.

## 🔍 Deep Dive Code
O grande segredo técnico planejado aqui é o **Masonry Layout** via CSS. Em vez de usar bibliotecas pesadas de terceiros, vamos usar `columns-2` do Tailwind. Isso garante uma performance altíssima e um carregamento instantâneo no mobile.

## 🛠️ Stack Tecnológica
- TypeScript Interfaces.
- Next.js Dynamic Routes.
- Tailwind Multi-column Layout.

---
*Relatório gerado automaticamente para o canal KurióSchool*
