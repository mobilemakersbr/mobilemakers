import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ProfileForm } from "./profile-form"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function EditProfilePage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="flex min-h-screen flex-col bg-background pb-20">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link href="/profile" className="mb-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Voltar para o Perfil
        </Link>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Editar Perfil</h1>
            <p className="text-muted-foreground">Como as pessoas verão você no Antigravity.</p>
          </div>

          <ProfileForm profile={profile} userId={user.id} />
        </div>
      </div>
    </div>
  )
}
