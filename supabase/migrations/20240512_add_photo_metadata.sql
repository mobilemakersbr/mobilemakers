-- Adicionar colunas de metadados técnicos
ALTER TABLE photos ADD COLUMN IF NOT EXISTS device_model TEXT;
ALTER TABLE photos ADD COLUMN IF NOT EXISTS resolution TEXT;
ALTER TABLE photos ADD COLUMN IF NOT EXISTS exposure_time TEXT;
ALTER TABLE photos ADD COLUMN IF NOT EXISTS iso_speed TEXT;

-- Atualizar algumas fotos de exemplo com metadados (se existirem)
UPDATE photos SET device_model = 'iPhone 15 Pro', resolution = '3024 x 4032' WHERE device_model IS NULL;
