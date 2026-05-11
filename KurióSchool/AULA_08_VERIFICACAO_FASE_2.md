# 🎓 Aula 08: Verificação da Fase 2 (Galeria)

**Objetivo:** Validar se a galeria e as rotas dinâmicas estão funcionando sem erros.

---

## 📸 Status do Print Sugerido
> **O que capturar:** O terminal mostrando:
> ```
> ✓ Compiled successfully in 4.3s
> Route (app)
> ┌ ○ /
> ├ ○ /_not-found
> └ ƒ /photo/[id]
> Exit code: 0
> ```
> **Dica de Vídeo:** Mostre que o `ƒ` (Dynamic) ao lado de `/photo/[id]` indica que o Next.js reconheceu a nossa rota dinâmica. Isso é ouro para SEO!

## 💡 Explicação Técnica
Nesta verificação, o `build` confirmou que o Next.js gerou corretamente:
- A página principal (`/`) como **Estática** — carregamento instantâneo.
- A página de foto (`/photo/[id]`) como **Dinâmica** — o servidor gera a página certa para cada ID solicitado.

## 🔍 Deep Dive Code
**Rotas no Next.js App Router:**
- `○ Static` = A página é pré-gerada no build. Ultra-rápida.
- `ƒ Dynamic` = A página é gerada sob demanda. Flexível para dados variáveis.

A nossa página `/photo/[id]` é dinâmica porque o conteúdo (qual foto mostrar) depende da URL.

## 🛠️ Stack Tecnológica
- **Next.js Build Output** — Mostra as rotas geradas.
- **TypeScript Compiler** — Zero erros de tipo.
- **GSD UAT Protocol** — 5/5 testes passaram.

---
*Relatório gerado automaticamente para o canal KurióSchool*
