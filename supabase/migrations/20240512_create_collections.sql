-- Criar tabela de coleções
CREATE TABLE IF NOT EXISTS collections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de junção entre coleções e fotos
CREATE TABLE IF NOT EXISTS collection_photos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    collection_id UUID NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
    photo_id UUID NOT NULL REFERENCES photos(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(collection_id, photo_id) -- Evita duplicatas na mesma coleção
);

-- Ativar RLS
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE collection_photos ENABLE ROW LEVEL SECURITY;

-- Políticas para Collections
CREATE POLICY "Usuários podem ver suas próprias coleções" ON collections
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem criar suas próprias coleções" ON collections
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Políticas para Collection Photos
CREATE POLICY "Usuários podem ver fotos de suas coleções" ON collection_photos
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM collections 
            WHERE collections.id = collection_photos.collection_id 
            AND collections.user_id = auth.uid()
        )
    );

CREATE POLICY "Usuários podem adicionar fotos às suas coleções" ON collection_photos
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM collections 
            WHERE collections.id = collection_photos.collection_id 
            AND collections.user_id = auth.uid()
        )
    );
