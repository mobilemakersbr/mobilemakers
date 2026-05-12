# Milestone 3 UAT Plan: Engajamento & Retenção

Este documento consolida os testes manuais necessários para validar as novas funcionalidades de UX e Gamificação.

## 🧪 Roteiro de Testes (UAT)

### 1. Sistema de Coleções (Fase 8)
- [ ] **Ação:** No card de uma foto, clique no ícone de "Bookmark".
- [ ] **Ação:** Crie uma nova coleção chamada "Favoritas".
- [ ] **Resultado Esperado:** Mensagem de sucesso e a foto deve aparecer na aba "Coleções" do seu perfil.

### 2. Micro-interações e Grid (Fase 10)
- [ ] **Ação:** Passe o mouse (ou toque longo no mobile) sobre uma foto no grid.
- [ ] **Resultado Esperado:** O botão de Like e o ícone de Coleção devem aparecer com efeito de vidro (glassmorphism).

### 3. Selos de Licença (Fase 11)
- [ ] **Ação:** Clique em qualquer foto para abrir os detalhes.
- [ ] **Ação:** Clique no ícone de "Info" no selo de licença verde.
- [ ] **Resultado Esperado:** Um popover deve abrir explicando o que é permitido e o que não é.

### 4. Mural dos Vencedores (Fase 12)
- [ ] **Ação:** Dê um like em uma foto de um autor específico.
- [ ] **Ação:** Recarregue a Home.
- [ ] **Resultado Esperado:** O autor deve aparecer no ranking "Mural dos Vencedores" com o badge correspondente.

## 🏁 Critérios de Aceite Finais
- [ ] Todas as animações rodam a 60fps no mobile.
- [ ] O banco de dados Supabase reflete corretamente as relações de coleções.
- [ ] O build de produção na Vercel está funcional.
