# Phase Verification: 06-engajamento-social

## UAT Criteria
### UC-01: Sistema de Likes
- [ ] O usuário consegue curtir uma foto clicando no ícone de coração.
- [ ] O ícone de coração muda de cor (preenchido) imediatamente.
- [ ] O estado do like persiste após o refresh da página.

### UC-02: Sistema de Comentários
- [ ] O usuário consegue escrever e enviar um comentário.
- [ ] O comentário aparece na lista instantaneamente.
- [ ] O nome e avatar do autor são exibidos corretamente no comentário.

### UC-03: Sistema de Notificações
- [ ] Ao curtir uma foto de outro usuário, uma notificação é gerada no banco.
- [ ] O usuário dono da foto visualiza a notificação na página `/notifications`.
- [ ] O link da notificação leva diretamente para a foto interagida.

## Manual Test Logs
- Testado toggle de like na Home e Página de Detalhes (OK)
- Testado envio de comentário com texto longo (OK)
- Verificado trigger de notificações no painel do Supabase (OK)
