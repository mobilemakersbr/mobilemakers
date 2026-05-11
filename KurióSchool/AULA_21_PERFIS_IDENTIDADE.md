# Aula 21: Identidade do Usuário e Perfis

## Objetivo
Transformar usuários anônimos em membros reais da comunidade Antigravity através da criação de perfis dinâmicos.

## Conteúdo Teórico
- **O Conceito de Perfil:** Por que separar `auth.users` (privado) de `public.profiles` (público).
- **Triggers no Supabase:** Automatizando a criação do perfil assim que o usuário se cadastra.

## Atividade Prática
1. Criar a tabela `profiles` no SQL Editor.
2. Implementar a página de dashboard do usuário (`/profile`) usando as abas do Shadcn UI.
3. Consertar o erro de "Comentários Anônimos" fazendo o `JOIN` entre as tabelas.

## Desafio Kurió
"Um app sem rostos é apenas um banco de dados. Um app com perfis é uma rede social. Vamos dar um rosto para o Antigravity!"
