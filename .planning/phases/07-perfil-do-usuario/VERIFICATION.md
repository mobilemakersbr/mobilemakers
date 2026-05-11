# Phase Verification: 07-perfil-do-usuario

## UAT Criteria
### UC-01: Gestão de Perfil
- [ ] O usuário consegue editar seu nome completo e a mudança persiste.
- [ ] O usuário consegue carregar uma foto de perfil (avatar).
- [ ] O avatar é exibido corretamente no cabeçalho do perfil e nos comentários.

### UC-02: Gestão de Conteúdo
- [ ] O botão de "Delete" (Lixeira) só aparece em fotos que pertencem ao usuário logado.
- [ ] Ao confirmar a deleção, a foto é removida da galeria e do storage.
- [ ] O contador de "Minhas Fotos" no perfil é atualizado corretamente.

### UC-03: Descoberta (Explorar)
- [ ] A página de Explorar exibe cards de categorias funcionais.
- [ ] Clicar em uma categoria filtra a galeria automaticamente.

## Manual Test Logs
- Testado upload de avatar JPG e PNG (OK)
- Verificado RLS de deleção (Usuário B não conseguiu apagar foto do Usuário A) (OK)
- Testado navegação entre Home e Explorar (OK)
