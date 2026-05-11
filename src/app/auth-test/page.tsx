export const dynamic = 'force-dynamic'

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // Tenta pegar os usuários (apenas para testar a conexão)
  const { data, error } = await supabase.auth.getSession()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      {error ? (
        <p className="text-red-500">Erro na conexão: {error.message}</p>
      ) : (
        <div className="p-4 bg-green-500/20 text-green-500 rounded-lg">
          <p>✅ Conexão com o Supabase estabelecida com sucesso!</p>
          <p className="text-xs mt-2 opacity-70">URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
        </div>
      )}
      <Link href="/" className="mt-8 text-primary underline">Voltar para Home</Link>
    </div>
  )
}
