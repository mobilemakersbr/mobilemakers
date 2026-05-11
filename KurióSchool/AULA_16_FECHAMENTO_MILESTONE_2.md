# 🎓 Aula 16: Fechamento do Milestone 2 (Real-Time Data)

**Objetivo:** Conectar o frontend aos dados vivos do backend.

---

## 📸 Status do Print Sugerido
> **O que capturar:** A Home com o carregamento (`Loader2`) e depois mostrando as fotos que você subiu.
> **Dica de Vídeo:** Faça um upload de teste no vídeo e volte para a Home. Quando a foto aparecer lá, diga: "Isso é o poder da arquitetura Serverless com Supabase e Next.js".

## 💡 Explicação Técnica
Demos o passo final: a **Integração de Dados**. Saímos do "Mock" (dados falsos) para o "Production Ready". Aprendemos a lidar com estados de carregamento (`isLoading`) e como o Next.js lida com dados dinâmicos de forma ultra-rápida.

## 🔍 Deep Dive Code
Mostre o `useEffect` na Home. Explique que o `order('created_at', { ascending: false })` é o segredo para o feed estar sempre atualizado com as novidades no topo.

## 🛠️ Stack Tecnológica
- **Supabase Querying**.
- **React Effect Hooks**.
- **Next.js Dynamic Routing**.

---
*Relatório gerado automaticamente para o canal KurióSchool*
