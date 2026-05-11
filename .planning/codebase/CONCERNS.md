# ⚠️ Preocupações e Pontos de Atenção

## Build & Deploy
- **Prerender Errors:** Identificada sensibilidade extrema a variáveis de ambiente ausentes no build-time.
- **Configuração Supabase:** O nome das variáveis (`ANON_KEY`) deve ser estritamente seguido.

## Performance
- **Tamanho de Imagem:** O upload direto para o Supabase Storage pode gerar arquivos pesados. Futura necessidade de compressão no client-side.
- **Lighthouse:** Monitorar o impacto das fontes Geist no CLS (Cumulative Layout Shift).

## Segurança
- **RLS:** Verificar se as policies de delete estão ativas para evitar vandalismo no feed público.
- **Tokens:** Garantir que o `SERVICE_ROLE_KEY` nunca seja exposto no frontend.

## UX
- **Feedback de Erro:** Substituir o uso de `alert()` nativo por Toasts do shadcn para uma experiência mais fluida.
- **Empty States:** Melhorar a visualização quando um autor não tem fotos publicadas.
