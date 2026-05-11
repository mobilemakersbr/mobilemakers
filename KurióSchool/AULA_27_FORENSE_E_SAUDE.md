# 🎓 Aula 27: Auditoria Forense e Saúde do Projeto

**Objetivo:** Aprender a diagnosticar e resolver falhas críticas de build e deploy.

---

## 📸 Status do Print Sugerido

> **O que capturar:** O arquivo `.planning/forensics/report-...md` aberto no VS Code.
> **Dica de Vídeo:** "Gente, nem tudo são flores. Às vezes o build quebra, o site dá 404 e você não sabe o porquê. Hoje vou te ensinar a ser um detetive de código usando o relatório forense".

## 💡 Explicação Técnica

Quando um projeto cresce, pequenas inconsistências podem travar o deploy. O **GSD Forensics** é o processo de olhar para o passado (logs, histórico do git, mensagens de erro) para entender a causa raiz de um problema presente.

Vimos que:

1. **Erro 404 na Vercel** geralmente significa que o build faliu ou as variáveis de ambiente não foram propagadas para Produção.
2. **ESLint Rígido:** No Next.js 15+, avisos de linter como variáveis não utilizadas barram o build. Isso é bom para a qualidade, mas exige rigor do desenvolvedor.

## 🔍 Deep Dive Code

No nosso caso real, resolvemos um erro de sintaxe no middleware:

```typescript
// ERRADO: await em função comum
export const createClient = (request) => { ... await ... }

// CERTO: Função marcada como async
export const createClient = async (request) => { ... await ... }
```

E não esqueça de quem chama a função:

```typescript
// Se a função é async, quem chama deve usar await!
export async function middleware(req) {
  return await createClient(req)
}
```

## 🛠️ Ferramentas de Saúde

- `/gsd-forensics`: O detetive.
- `/gsd-health`: O médico (verifica se o ROADMAP e o STATE estão sincronizados).

---

### *Relatório gerado automaticamente para o canal KurióSchool*
