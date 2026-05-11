# 🎓 Aula 18: Implementando Likes e UI Otimista

**Objetivo:** Criar o sistema de curtidas com feedback visual instantâneo.

---

## 📸 Status do Print Sugerido
> **O que capturar:** A Home com corações vermelhos piscando e o console do Supabase mostrando as linhas na tabela `likes`.
> **Dica de Vídeo:** Ensine o conceito de **Optimistic UI**. Diga: "Nós não esperamos o servidor para pintar o coração. O usuário clica e já vê o resultado. Se der erro, a gente reverte. Isso faz o seu app parecer 10x mais rápido".

## 💡 Explicação Técnica
O desafio técnico aqui foi o **Event Bubbling**. Como o coração está dentro de um card que também é um link, tivemos que usar o `e.stopPropagation()` para que, ao curtir, o usuário não fosse jogado para a página de detalhes sem querer.

## 🔍 Deep Dive Code
- **`supabase.from('likes').upsert()`**: Como gerenciar a inserção e remoção.
- **`e.stopPropagation()`**: O salvador da pátria para componentes aninhados.

---
*Relatório gerado automaticamente para o canal KurióSchool*
