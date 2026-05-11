# 🎓 Aula 15: Construindo o Fluxo de Upload

**Objetivo:** Implementar o envio de fotos com metadados e preview.

---

## 📸 Status do Print Sugerido
> **O que capturar:** A tela de Upload no navegador (`localhost:3001/upload`) com uma imagem já selecionada no **Preview**.
> **Dica de Vídeo:** Mostre o momento em que você clica no quadrado tracejado e seleciona uma foto. O fato da foto aparecer instantaneamente na tela antes do upload é um diferencial de UX que os alunos adoram aprender.

## 💡 Explicação Técnica
Transformamos o app em uma plataforma de contribuição. O desafio aqui foi lidar com a **FileReader API** do navegador para gerar o preview local e com os **Multipart Forms** para enviar o arquivo binário para o Supabase Storage.

## 🔍 Deep Dive Code
Destaque no vídeo:
- **`FileReader`**: Explicamos como convertemos o arquivo do usuário em uma string base64 apenas para o preview visual.
- **`supabase.storage.upload`**: Mostramos a função que empurra o arquivo para a nuvem.
- **`next.config.ts`**: (Alerta Crítico) Explicamos que é obrigatório liberar o domínio do Supabase (`*.supabase.co`) no arquivo de configuração, ou o Next.js vai bloquear a exibição das imagens por segurança.
- **`aspect-[4/3]`**: Usamos essa classe do Tailwind para manter a área de upload sempre com uma proporção bonita, não importa o tamanho da tela.

## 🛠️ Stack Tecnológica
- **Supabase Storage** & **Database**.
- **FileReader API**.
- **shadcn/ui** (Select, Textarea, Card).

---
*Relatório gerado automaticamente para o canal KurióSchool*
