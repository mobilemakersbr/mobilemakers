-- Adicionar contador de visualizações na tabela de fotos
ALTER TABLE photos ADD COLUMN IF NOT EXISTS views_count BIGINT DEFAULT 0;

-- Criar função para incrementar views (para evitar problemas de concorrência)
CREATE OR REPLACE FUNCTION increment_photo_views(photo_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE photos
  SET views_count = views_count + 1
  WHERE id = photo_id;
END;
$$ LANGUAGE plpgsql;
