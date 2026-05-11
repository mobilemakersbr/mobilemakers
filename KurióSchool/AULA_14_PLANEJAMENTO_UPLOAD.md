# 🎓 Aula 14: Planejamento do Upload de Fotos

**Objetivo:** Projetar o fluxo de envio de fotos para o marketplace.

---

## 📸 Status do Print Sugerido
> **O que capturar:** O arquivo `05-PLAN.md` com o foco na tarefa T-03 (Supabase Storage).
> **Dica de Vídeo:** Explique que o "Upload" é o que torna o marketplace vivo. Permitir que o usuário envie fotos do próprio celular é a essência do "Mobile-First".

## 💡 Explicação Técnica
Nesta fase, lidamos com arquivos binários (imagens). Diferente de textos, imagens precisam de um lugar especial para morar: o **Bucket**. Planejamos como o app vai transformar um arquivo do celular em uma URL pública no Supabase.

## 🔍 Deep Dive Code
A lógica central será o uso do método `supabase.storage.from('photos').upload()`. Vamos precisar capturar o evento de mudança do input de arquivo para gerar um **Preview** instantâneo, melhorando muito a experiência do usuário (UX).

## 🛠️ Stack Tecnológica
- **Supabase Storage**.
- **React `FileReader API`** (para o preview).
- **Tailwind** (para o layout da página de upload).

---
*Relatório gerado automaticamente para o canal KurióSchool*
