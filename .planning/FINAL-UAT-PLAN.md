# Final UAT Plan: Milestones 3, 4 & 5

## 🏆 Objetivo
Validar a estabilidade, segurança e experiência do usuário em todas as novas funcionalidades de Engajamento, Aquisição e Administração.

## 🧪 Casos de Teste

### 1. Landing Page & Aquisição (Milestone 4)
- [ ] **Acesso Anônimo:** Abrir `/` em aba anônima e verificar se a Landing Page aparece sem a barra de navegação inferior.
- [ ] **Newsletter:** Inserir um e-mail válido e ver o feedback de sucesso.
- [ ] **Duplicidade:** Tentar inserir o mesmo e-mail e ver o aviso de "já inscrito".
- [ ] **Onboarding:** Fazer login com um novo usuário e verificar se o modal de boas-vindas abre automaticamente.

### 2. Engajamento & Gamificação (Milestone 3 & 5)
- [ ] **Mural dos Vencedores:** Verificar se o ranking de criadores aparece na Home para usuários logados.
- [ ] **Analytics (Views):** Abrir uma foto, aguardar 3 segundos, voltar ao perfil e verificar se o contador de "Total de Visualizações" aumentou.
- [ ] **Estatísticas:** Validar se a aba de Estatísticas no perfil mostra números coerentes (Fotos, Likes, Engajamento).

### 3. Filtros & Descoberta (Milestone 5)
- [ ] **Filtro de Dispositivo:** Aplicar filtro "iPhone 15 Pro" e garantir que apenas fotos desse modelo (ou placeholder) apareçam.
- [ ] **Limpar Filtros:** Clicar no "X" do badge do dispositivo e verificar se a galeria volta ao estado anterior.
- [ ] **Metadados Técnicos:** Abrir os detalhes de uma foto e validar se ISO, Exposição e Resolução estão visíveis.

### 4. Administração (Milestone 5)
- [ ] **Acesso Restrito:** Tentar acessar `/admin/leads` com um e-mail não-admin e ser redirecionado para a Home.
- [ ] **Gestão de Leads:** Acessar com `mathcuskurio@gmail.com` e ver a lista de e-mails capturados na newsletter.

## 🛠️ Verificação Técnica
- [ ] **Linter Check:** Executar `npm run lint` e garantir zero erros em `src/`.
- [ ] **Build Check:** Executar `npm run build` para garantir que as novas Server Actions não quebraram a compilação.
- [ ] **Supabase Sync:** Verificar se todas as migrações foram aplicadas corretamente no banco remoto.
