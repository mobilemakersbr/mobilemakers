# 🎓 Aula 10: Implementando Busca e Filtros

**Objetivo:** Dar inteligência ao marketplace com busca em tempo real e categorias.

---

## 📸 Status do Print Sugerido
> **O que capturar:** O arquivo `src/app/page.tsx` mostrando a lógica do `useMemo` e os novos componentes `SearchBar` e `CategoryFilters`.
> **Dica de Vídeo:** Digite uma letra no campo de busca e mostre como a galeria abaixo "reage" instantaneamente. Isso é o estado reativo do React em ação!

## 💡 Explicação Técnica
Nesta aula, saímos da exibição passiva para a busca ativa. Implementamos um sistema de **Filtros Combinados**. O usuário pode estar na categoria "Natureza" e digitar "Caminhada" — o app vai cruzar essas duas informações e mostrar o resultado exato. Isso cria uma experiência de "app de elite".

## 🔍 Deep Dive Code
Destaque no vídeo:
- **`useMemo`**: Explicamos que usamos este hook para que a filtragem seja ultra-rápida e só aconteça quando for realmente necessário.
- **`overflow-x-auto`**: Mostramos como criamos a barra de categorias deslizante (estilo Instagram) apenas com CSS nativo do Tailwind.
- **`break-inside-avoid`**: Um detalhe técnico que impede que as fotos "quebrem" ao meio nas colunas do Masonry.

## 🛠️ Stack Tecnológica
- **Hooks:** `useState` e `useMemo`.
- **UI:** `shadcn/ui Input`.
- **UX:** `Real-time Filtering`.

---
*Relatório gerado automaticamente para o canal KurióSchool*
