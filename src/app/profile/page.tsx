export const dynamic = 'force-dynamic'

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ImageGrid } from "@/components/image-grid"
import { Photo } from "@/lib/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, ImageIcon, Heart, Bookmark } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default async function ProfilePage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // 1. Verificar se está logado
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect('/login')
  }

  // 2. Buscar Perfil
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // 3. Buscar Minhas Fotos
  const { data: myPhotos } = await supabase
    .from('photos')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  // 4. Buscar Fotos Curtidas (Favoritos)
  const { data: likedPhotosData } = await supabase
    .from('likes')
    .select('photos(*)')
    .eq('user_id', user.id)
  
  const likedPhotos = (likedPhotosData?.map(item => item.photos) as unknown as Photo[]).filter(Boolean) || []
  const userLikes = likedPhotos.map((p) => p.id)

  // 5. Buscar Coleções
  const { data: collections } = await supabase
    .from('collections')
    .select('*, collection_photos(count)')
    .eq('user_id', user.id)

  return (
    <div className="flex min-h-screen flex-col bg-background pb-20">
      {/* Header do Perfil */}
      <div className="bg-muted/30 border-b pb-12 pt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-end gap-6">
            <div className="relative group">
              <Avatar className="h-24 w-24 border-4 border-background shadow-xl">
                <AvatarImage src={profile?.avatar_url} />
                <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                  {profile?.full_name?.substring(0, 2).toUpperCase() || user.email?.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <Link href="/profile/edit" className="absolute bottom-0 right-0 p-1.5 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                <Settings className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">
                  {profile?.full_name || "Usuário sem nome"}
                </h1>
                <ThemeToggle />
              </div>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto mt-6">
        <Tabs defaultValue="photos" className="w-full">
          <div className="px-4">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 p-1">
                <TabsTrigger value="photos" className="gap-2">
                  <ImageIcon className="h-4 w-4" />
                  Fotos ({myPhotos?.length || 0})
                </TabsTrigger>
                <TabsTrigger value="likes" className="gap-2">
                  <Heart className="h-4 w-4" />
                  Curtidas ({likedPhotos.length})
                </TabsTrigger>
                <TabsTrigger value="collections" className="gap-2">
                  <Bookmark className="h-4 w-4" />
                  Coleções ({collections?.length || 0})
                </TabsTrigger>
              </TabsList>
          </div>

          <TabsContent value="photos">
            <ImageGrid 
              photos={myPhotos || []} 
              userLikes={userLikes}
              userId={user.id}
            />
          </TabsContent>
          
          <TabsContent value="likes">
            <ImageGrid 
              photos={likedPhotos} 
              userLikes={userLikes}
              userId={user.id}
            />
          </TabsContent>

          <TabsContent value="collections">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {collections?.map((col) => (
                <Link 
                  key={col.id} 
                  href={`/profile/collection/${col.id}`}
                  className="group relative flex flex-col gap-2 p-4 rounded-xl border bg-card hover:bg-accent transition-all hover:ring-2 hover:ring-primary"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Bookmark className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-lg">{col.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {col.collection_photos?.[0]?.count || 0} fotos salvas
                  </p>
                  <div className="mt-2 flex -space-x-2 overflow-hidden">
                    {/* Placeholder para miniaturas se tivéssemos */}
                  </div>
                </Link>
              ))}
              {collections?.length === 0 && (
                <div className="col-span-full py-20 text-center border-2 border-dashed rounded-2xl">
                  <p className="text-muted-foreground">Você ainda não criou nenhuma coleção.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
