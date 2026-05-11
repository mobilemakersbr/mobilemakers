# 📘 Guia GSD (Traduzido para KurióSchool)

Aqui estão os comandos que mais usaremos, explicados de forma simples para você usar em suas aulas:

- **/gsd-new-project** (Novo Projeto): O ponto de partida. Aqui definimos a visão geral, requisitos e o cronograma (roadmap) do que vamos construir.
- **/gsd-discuss-phase [N]** (Discussão de Fase): Antes de escrever código, nós conversamos com a IA sobre os detalhes daquela etapa (design, banco de dados, regras de negócio).
- **/gsd-plan-phase [N]** (Planejamento): A IA faz uma pesquisa técnica e cria "planos de execução" (tasks) para cada arquivo que precisa ser criado ou alterado.
- **/gsd-execute-phase [N]** (Execução): É aqui que a mágica acontece. A IA abre "agentes executores" que escrevem o código real, seguindo o plano aprovado.
- **/gsd-verify-work [N]** (Verificação): Momento de testar! A IA guia você em testes manuais ou automatizados para garantir que o que foi feito está correto.
- **/gsd-ship [N]** (Enviar/Subir): Finaliza a etapa e prepara tudo para o "Pull Request" (envio oficial do código).
- **/gsd-progress**: O comando de "estágio". Pergunta para a IA: "Onde estamos e qual o próximo passo?".
- **/gsd-map-codebase**: Mapeia um projeto que já existe para que a IA entenda a estrutura antes de começar a trabalhar.

---
*Dica do Mentor: Use sempre o número da fase (ex: /gsd-plan-phase 1) para focar em uma coisa de cada vez.*
