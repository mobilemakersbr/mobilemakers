# Phase 11 Summary: Selos de Licença e Segurança Jurídica

## Accomplishments
- [x] Criado o componente `LicenseBadge` com estética profissional e informativa.
- [x] Implementado Popover de detalhes para explicar os termos de uso ("O que é permitido" vs "O que não é permitido").
- [x] Integrado o selo na página de detalhes da foto (`/photo/[id]`), reforçando a autoridade da plataforma no momento da decisão de download.

## Technical Decisions
- **Uso de Popover:** Escolhemos o `Popover` em vez de um `Modal` para manter o usuário no contexto da página da foto, oferecendo uma leitura rápida dos termos.
- **Psicologia das Cores:** Utilizamos tons de verde (`bg-green-500/10`) para transmitir segurança, validade e permissão.

## Future Considerations
- Gerar um PDF de "Certificado de Licença" personalizado no momento do download.
- Permitir que autores escolham entre diferentes tipos de licença (ex: Creative Commons).
