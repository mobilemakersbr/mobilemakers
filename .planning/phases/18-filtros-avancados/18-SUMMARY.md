# Phase 18 Summary: Filtros Avançados (Metadados)

## Accomplishments
- [x] Expandida a tabela `photos` com colunas para `device_model`, `resolution`, `iso_speed` e `exposure_time`.
- [x] Criada a Server Action `getUniqueDevices` para alimentar filtros dinâmicos.
- [x] Desenvolvido o componente `AdvancedFilters` com popover de seleção de dispositivo.
- [x] Atualizada a Home para suportar filtragem cruzada (Categoria + Busca + Dispositivo).
- [x] Enriquecida a página de detalhes da foto com informações técnicas detalhadas.

## Technical Decisions
- **Filtros Dinâmicos:** Em vez de uma lista estática de marcas, o sistema busca os modelos reais presentes no banco de dados, garantindo que o filtro sempre tenha resultados.
- **UX de Filtro Rápido:** Implementamos badges com botão de fechar (X) para permitir que o usuário limpe seleções avançadas com um único toque.

## Next Steps
- Finalizar o Milestone 5 e conduzir auditoria final do sistema.
