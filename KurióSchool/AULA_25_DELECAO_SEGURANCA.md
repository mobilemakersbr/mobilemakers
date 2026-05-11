# Aula 25: Deleção Atômica e Segurança (RLS)

## Objetivo
Permitir que os usuários gerenciem suas próprias fotos e garantir que ninguém mais consiga apagá-las.

## Conteúdo Teórico
- **Deleção Atômica:** Remover o registro do banco E o arquivo físico do Storage ao mesmo tempo.
- **Segurança RLS:** Como travar o acesso de deleção apenas para o `auth.uid()`.

## Atividade Prática
1. Implementar o botão de lixeira (Trash) no `ImageCard`.
2. Criar a lógica de deleção dupla (DB + Storage).
3. Testar a segurança tentando apagar uma foto com um usuário intruso.

## Dica
"Nunca confie apenas no frontend para esconder botões. A verdadeira segurança acontece no banco de dados com as Row Level Security policies."
