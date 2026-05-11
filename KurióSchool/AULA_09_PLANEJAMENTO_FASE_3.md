# 🎓 Aula 09: Planejamento da Fase 3 (Busca Inteligente)

**Objetivo:** Projetar a experiência de busca e filtragem por categorias.

---

## 📸 Status do Print Sugerido
> **O que capturar:** O arquivo `03-PLAN.md` com o foco na tarefa T-04 (Lógica de Filtragem).
> **Dica de Vídeo:** Comente como a "Busca em Tempo Real" exige que o componente pai gerencie o estado para que os filhos (Grid) se atualizem.

## 💡 Explicação Técnica
Nesta aula, planejamos a "inteligência" do app. Definimos que o usuário não deve esperar. Se ele digita "C", o app já deve mostrar "Café". Isso reduz o atrito e aumenta o tempo que o usuário passa navegando no marketplace.

## 🔍 Deep Dive Code
A lógica central será o uso de **Computed Properties** no React. Em vez de criar uma nova lista toda vez, vamos simplesmente renderizar um "pedaço" da nossa lista original baseado no que está escrito no estado `searchQuery`.

## 🛠️ Stack Tecnológica
- React `useState`.
- Array `.filter()` & `.includes()`.
- Tailwind Horizontal Scroll (`overflow-x-auto`).

---
*Relatório gerado automaticamente para o canal KurióSchool*
