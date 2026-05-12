# Phase 15 Plan: Newsletter

## Objective

Capturar leads de marketing através de um sistema de newsletter na Landing Page.

## Tasks

### ⚡ Actions & Logic

- [ ] Criar Server Action `subscribeToNewsletter` em `src/app/actions/marketing.ts`.

### 🎨 UI Components

- [ ] Criar componente `src/components/newsletter-form.tsx`.
- [ ] Integrar `NewsletterForm` no rodapé da `LandingPage`.

### ⚡ Verification

- [ ] Testar inscrição com e-mail válido.
- [ ] Testar erro com e-mail já cadastrado.
- [ ] Verificar se os dados aparecem na tabela `newsletter_leads` no Supabase.
