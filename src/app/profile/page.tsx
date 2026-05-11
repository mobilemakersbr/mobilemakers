export const dynamic = 'force-dynamic'

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ImageGrid } from "@/components/image-grid"
import { Photo } from "@/lib/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, ImageIcon, Heart } from "lucide-react"
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
              <h1 className="text-3xl font-bold tracking-tight">
                {profile?.full_name || "Usuário sem nome"}
              </h1>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto mt-6">
        <Tabs defaultValue="photos" className="w-full">
          <div className="px-4">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 p-1">
              <TabsTrigger value="photos" className="gap-2">
                <ImageIcon className="h-4 w-4" />
                Minhas Fotos ({myPhotos?.length || 0})
              </TabsTrigger>
              <TabsTrigger value="likes" className="gap-2">
                <Heart className="h-4 w-4" />
                Curtidas ({likedPhotos.length})
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
        </Tabs>
      </main>
    </div>
  )
}
