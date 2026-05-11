import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import { ImageGrid } from "@/components/image-grid"
import { ArrowLeft, User } from "lucide-react"
import Link from "next/link"

export default async function AuthorPage(props: { params: Promise<{ name: string }> }) {
  const params = await props.params
  const name = decodeURIComponent(params.name)
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // 1. Buscar fotos desse autor
  const { data: photos, error } = await supabase
    .from('photos')
    .select('*')
    .eq('author', name)
    .order('created_at', { ascending: false })

  if (error || !photos || photos.length === 0) {
    notFound()
  }

  // 2. Buscar usuário logado para os likes
  const { data: { user } } = await supabase.auth.getUser()
  
  let userLikes: string[] = []
  if (user) {
    const { data: likesData } = await supabase
      .from('likes')
      .select('photo_id')
      .eq('user_id', user.id)
    
    userLikes = likesData?.map(l => l.photo_id) || []
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header do Autor */}
      <div className="bg-muted/30 border-b pb-12 pt-10">
        <div className="container mx-auto px-4">
          <Link href="/" className="mb-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Feed
          </Link>
          
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-end gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary border-4 border-background shadow-xl">
              <User className="h-12 w-12" />
            </div>
            <div className="flex-1 space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
              <p className="text-muted-foreground">
                Membro do Antigravity • {photos.length} {photos.length === 1 ? 'Foto' : 'Fotos'} publicadas
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <ImageGrid 
          photos={photos} 
          userLikes={userLikes}
          userId={user?.id}
        />
      </main>
    </div>
  )
}
