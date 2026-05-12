export const dynamic = 'force-dynamic'

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect, notFound } from "next/navigation"
import { ImageGrid } from "@/components/image-grid"
import { Photo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Bookmark } from "lucide-react"
import Link from "next/link"

interface CollectionPageProps {
  params: { id: string }
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { id } = await params
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // 1. Verificar usuário
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  // 2. Buscar Coleção
  const { data: collection } = await supabase
    .from('collections')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single()

  if (!collection) notFound()

  // 3. Buscar fotos da coleção
  const { data: photosData } = await supabase
    .from('collection_photos')
    .select('photos(*)')
    .eq('collection_id', id)

  const photos = (photosData?.map(item => item.photos) as unknown as Photo[]).filter(Boolean) || []

  // 4. Buscar curtidas do usuário para o grid
  const { data: likedData } = await supabase
    .from('likes')
    .select('photo_id')
    .eq('user_id', user.id)
  
  const userLikes = likedData?.map(l => l.photo_id) || []

  return (
    <div className="flex min-h-screen flex-col bg-background pb-20">
      <div className="border-b bg-muted/30 py-6">
        <div className="container mx-auto px-4">
          <Link href="/profile">
            <Button variant="ghost" size="sm" className="gap-2 mb-4">
              <ChevronLeft className="h-4 w-4" />
              Voltar ao Perfil
            </Button>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Bookmark className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{collection.name}</h1>
              <p className="text-muted-foreground">{photos.length} fotos salvas</p>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto mt-8">
        {photos.length > 0 ? (
          <ImageGrid 
            photos={photos} 
            userLikes={userLikes}
            userId={user.id}
          />
        ) : (
          <div className="py-20 text-center border-2 border-dashed rounded-2xl mx-4">
            <p className="text-muted-foreground">Esta coleção ainda está vazia.</p>
            <Link href="/">
              <Button variant="link" className="mt-2">Explorar fotos para salvar</Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
