import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config({ path: resolve(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Erro: Variáveis de ambiente não encontradas no .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function auditDatabase() {
  const tables = ['profiles', 'photos', 'likes', 'comments', 'notifications']
  console.log('🔍 Iniciando auditoria do banco de dados...\n')

  for (const table of tables) {
    const { data, error } = await supabase.from(table).select('*').limit(1)
    
    if (error) {
      if (error.code === '42P01') {
        console.log(`❌ [${table}]: Tabela NÃO EXISTE no banco de dados.`)
      } else {
        console.log(`⚠️ [${table}]: Erro ao acessar (${error.code}) - ${error.message}`)
      }
    } else {
      console.log(`✅ [${table}]: Tabela acessível. (Registros encontrados: ${data.length})`)
      
      // Mostrar colunas encontradas se houver dados
      if (data.length > 0) {
        console.log(`   Colunas: ${Object.keys(data[0]).join(', ')}`)
      }
    }
  }
}

auditDatabase()
