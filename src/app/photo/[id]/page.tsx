import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Download, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { CommentsSection } from "@/components/comments-section"

export default async function PhotoPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // 1. Buscar a Foto
  const { data: photo, error } = await supabase
    .from('photos')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !photo) {
    notFound()
  }

  // 2. Buscar Usuário Logado
  const { data: { user } } = await supabase.auth.getUser()

  // 3. Buscar Comentários com Perfil
  const { data: comments } = await supabase
    .from('comments')
    .select(`
      *,
      profiles:user_id (
        full_name,
        avatar_url
      )
    `)
    .eq('photo_id', id)
    .order('created_at', { ascending: false })

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header de Ação */}
      <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
          <ArrowLeft className="h-5 w-5" />
          <span>Voltar</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Compartilhar">
            <Share2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Curtir">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-20">
        {/* Container da Imagem */}
        <div className="relative aspect-[3/4] w-full bg-muted sm:aspect-video sm:max-h-[70vh]">
          <Image
            src={photo.url}
            alt={photo.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Info da Foto */}
        <div className="container mx-auto p-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">{photo.title}</h2>
              <p className="text-muted-foreground">
                Fotografia por 
                <Link href={`/author/${encodeURIComponent(photo.author)}`} className="ml-1 font-medium text-foreground hover:text-primary hover:underline transition-colors">
                  {photo.author}
                </Link>
              </p>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 gap-2">
                <Download className="h-4 w-4" />
                Baixar Imagem
              </Button>
            </div>

            <div className="mt-4 border-t pt-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Informações Técnicas</h4>
              <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Formato</p>
                  <p className="font-medium">Vertical (UGC)</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Licença</p>
                  <p className="font-medium">Uso Comercial</p>
                </div>
              </div>
            </div>

            {/* Seção de Comentários */}
            <CommentsSection 
              photoId={photo.id}
              userId={user?.id}
              initialComments={comments || []}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
