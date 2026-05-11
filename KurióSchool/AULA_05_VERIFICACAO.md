# 🎓 Aula 05: Garantia de Qualidade (UAT)

**Objetivo:** Validar se o código está livre de erros e pronto para o uso.

---

## 📸 Status do Print Sugerido
> **O que capturar:** O terminal do VS Code mostrando a mensagem verde: `✓ Compiled successfully`.
> **Dica de Vídeo:** Comemore este momento! O `build` com sucesso é o certificado de que seu código é profissional e robusto.

## 💡 Explicação Técnica
A verificação (UAT) é o "Controle de Qualidade". No desenvolvimento profissional, nunca confiamos apenas no "parece que está funcionando". Rodamos o comando `npm run build`, que é o teste mais difícil do Next.js. Ele verificou cada vírgula do nosso código e confirmou que tudo está perfeito.

## 🔍 Deep Dive Code
O `build` faz três verificações críticas:
- **Linting:** Checa se seguimos as boas práticas de escrita.
- **Type Checking:** Garante que não passamos dados errados para as funções (ex: passar texto onde deveria ser um número).
- **Static Generation:** Testa se todas as páginas conseguem ser "desenhadas" pelo servidor sem falhas.

## 🛠️ Stack Tecnológica
- **Engine:** `Next.js Build System`.
- **Compilador:** `TypeScript`.
- **Relatório:** `GSD UAT Protocol`.

---
*Relatório gerado automaticamente para o canal KurióSchool*
