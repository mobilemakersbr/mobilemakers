-- Criar tabela para captura de leads de newsletter
CREATE TABLE IF NOT EXISTS newsletter_leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Habilitar RLS
ALTER TABLE newsletter_leads ENABLE ROW LEVEL SECURITY;

-- Permitir que qualquer pessoa (anon) insira um e-mail
CREATE POLICY "Allow public insert for newsletter" ON newsletter_leads
    FOR INSERT WITH CHECK (true);
