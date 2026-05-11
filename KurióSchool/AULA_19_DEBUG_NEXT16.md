# 🎓 Aula 19: O Segredo do Next.js 16 (Resolvendo o Erro de Params)

**Objetivo:** Aprender a lidar com as APIs assíncronas do Next.js 15/16.

---

## 📸 Status do Print Sugerido
> **O que capturar:** O código da `page.tsx` com o `await params` destacado e o console sem erros de "Route used params.id".
> **Dica de Vídeo:** Seja sincero com seus alunos: "O Next.js mudou. Antigamente o ID da URL era um objeto, agora ele é uma Promessa. Se você não usar o `await`, o seu app vai dar erro 404 e você vai ficar louco. Aqui está a forma definitiva de resolver".

## 💡 Explicação Técnica
Explicamos a mudança nas **Dynamic APIs** do Next.js. Mostramos que `params` e `searchParams` agora são assíncronos por padrão para permitir otimizações de renderização no servidor.

## 🔍 Deep Dive Code
- **`const { id } = await params`**: A linha que salva vidas.
- **`async function PhotoPage(props: ...)`**: A assinatura correta para evitar warnings do compilador.

---
*Relatório gerado automaticamente para o canal KurióSchool*
