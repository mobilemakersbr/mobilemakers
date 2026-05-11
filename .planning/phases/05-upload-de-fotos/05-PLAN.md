# Phase 5 Plan: Upload de Fotos

## Tasks

### T-01: Componente de Seleção de Imagem
- **Ação:** Criar um seletor de arquivos com preview da imagem selecionada.
- **Objetivo:** O usuário precisa ver o que está subindo.

### T-02: Formulário de Metadados
- **Ação:** Implementar campos de Título, Tags, Localização e Categoria usando shadcn.
- **Objetivo:** Coletar as informações decididas (D-02).

### T-03: Integração com Supabase Storage
- **Ação:** Criar função em `src/app/upload/actions.ts` para enviar o arquivo para o bucket `photos`.
- **Objetivo:** Persistência física da imagem.

### T-04: Persistência no Banco de Dados
- **Ação:** Salvar a URL da imagem e os metadados na tabela `photos`.
- **Objetivo:** Fazer a foto aparecer no feed principal.

## Verification
- [ ] Selecionar uma foto e ver o preview.
- [ ] Preencher os campos e clicar em "Fazer Upload".
- [ ] Ver a mensagem de sucesso e redirecionamento.
