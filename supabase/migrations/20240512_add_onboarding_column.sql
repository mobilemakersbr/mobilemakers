-- Adicionar coluna de onboarding na tabela de perfis
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT FALSE;
