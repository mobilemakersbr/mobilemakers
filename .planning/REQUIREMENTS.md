# Requirements: MobileMakers

## REQ-001: Galeria Mobile-First

- A interface deve ser otimizada para navegação com o polegar.
- As imagens devem ser exibidas em formato vertical nativo (9:16).
- Feed infinito com carregamento lazy-load.

## REQ-002: Extração de Metadados

- O sistema deve ler o EXIF das imagens no upload.
- Identificar automaticamente o modelo do dispositivo (ex: iPhone 15 Pro).
- Armazenar metadados no Supabase.

## REQ-003: Sistema de Licenciamento

- Botão de compra única.
- Geração de link de download seguro após pagamento.
- Marca d'água dinâmica no preview.

## REQ-004: SEO Técnico

- Implementação de JSON-LD para imagens licenciáveis.
- URLs amigáveis com slugs baseados em tags.
