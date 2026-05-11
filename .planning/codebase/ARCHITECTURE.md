# 🏗️ Arquitetura de Software

## Padrões de Projeto
- **App Router:** Utilização extensiva de layouts aninhados e Server Components.
- **Server Actions:** Toda a mutação de dados (Upload, Like, Comentário) é feita via Actions para reduzir JS no cliente.
- **UGC (User Generated Content):** Arquitetura focada na ingestão e exibição rápida de mídia mobile.

## Camadas
1. **Páginas (`src/app`):** Orquestração e busca de dados (Server-side).
2. **Componentes (`src/components`):** Apresentação e interatividade.
3. **Actions (`actions.ts`):** Lógica de escrita e revalidação de cache.
4. **Utils (`src/utils`):** Clientes de infraestrutura.

## Estratégia de Dados
- **Revalidação:** Uso de `revalidatePath('/')` após mutações para manter o feed atualizado.
- **Dynamic:** Todas as rotas autenticadas são marcadas como `force-dynamic` para evitar erros de conexão em build-time.
