# 🎓 Aula 07: Construindo o Feed Masonry

**Objetivo:** Implementar a galeria dinâmica e a visualização individual de fotos.

---

## 📸 Status do Print Sugerido
> **O que capturar:** O arquivo `src/app/page.tsx` (mostrando a integração do `ImageGrid`) e a nova pasta `src/app/photo/[id]`.
> **Dica de Vídeo:** Navegue pelos arquivos para mostrar como a estrutura de rotas dinâmicas do Next.js é simples e poderosa.

## 💡 Explicação Técnica
Nesta aula, demos vida visual ao projeto. Criamos um **Feed Masonry**, que é aquele estilo de "colunas que não alinham" famoso no Pinterest. Isso é perfeito para fotos mobile porque respeita as diferentes alturas das imagens sem cortá-las. Também criamos a nossa primeira **Rota Dinâmica**, permitindo que cada imagem tenha sua própria página de detalhes.

## 🔍 Deep Dive Code
Destaque dois pontos no vídeo:
- **`columns-2 gap-4`**: Usamos CSS nativo do Tailwind para criar o grid. É leve, rápido e não precisa de bibliotecas de terceiros.
- **`params: Promise<{ id: string }>`**: (Alerta Next.js 16) Explicamos que o ID agora é uma **Promise**. Mostramos como usar o `await params` para desestruturar o ID com segurança. Isso evita erros de hidratação e garante que o app esteja pronto para o futuro.

## 🛠️ Stack Tecnológica
- **Layout:** `Tailwind Columns`.
- **Roteamento:** `Next.js Dynamic Routes`.
- **Icons:** `Lucide React`.
- **Assets:** `Pexels Mock Data`.

---
*Relatório gerado automaticamente para o canal KurióSchool*
