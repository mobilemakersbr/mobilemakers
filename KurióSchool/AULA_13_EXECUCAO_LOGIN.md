# 🎓 Aula 13: Construindo o Portal de Login e Cadastro

**Objetivo:** Criar um sistema completo de autenticação com E-mail e Senha.

---

## 📸 Status do Print Sugerido
> **O que capturar:** A tela de Login no navegador (`localhost:3001/login`) mostrando as abas de "Entrar" e "Criar Conta".
> **Dica de Vídeo:** Alterne entre as abas e mostre como a interface reage. Diga: "Nós unificamos a experiência. O usuário não precisa pular de página em página para se cadastrar; tudo acontece em um só lugar".

## 💡 Explicação Técnica
Implementamos a autenticação via **E-mail e Senha**. Diferente do Magic Link, aqui o usuário tem total controle sobre sua conta. Aprendemos a:
1. **Validar Senhas**: Garantir que o usuário digite pelo menos 6 caracteres.
2. **Persistência de Sessão**: Como o Supabase mantém o usuário logado mesmo após ele fechar o navegador.
3. **Tabs Dinâmicas**: Usamos o componente `Tabs` do shadcn para alternar entre Login e Cadastro sem recarregar a página.

## 🔍 Deep Dive Code
Destaque no vídeo:
- **`signUp` vs `signIn`**: Mostramos as duas funções do Supabase Auth que fazem a mágica acontecer.
- **`z.string().min(6)`**: (Dica de Ouro) Usamos validação simples para evitar que o usuário crie senhas inseguras.
- **Design Moderno**: O uso de gradientes e sombras suaves para que o formulário "flutue" na tela, seguindo a estética premium do Antigravity.

## 🛠️ Stack Tecnológica
- **Supabase Auth** (Email/Password).
- **shadcn/ui** (Tabs, Card, Button, Input, Label).
- **Lucide React** (Mail, Lock, Eye/EyeOff).

---
*Relatório gerado automaticamente para o canal KurióSchool*
