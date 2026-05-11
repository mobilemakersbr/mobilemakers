export const dynamic = 'force-dynamic'

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function NotificationsPage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  // Buscar notificações com dados do ator e da foto
  const { data: notifications } = await supabase
    .from('notifications')
    .select(`
      *,
      actor:profiles!notifications_actor_id_fkey (full_name, avatar_url),
      photo:photos (title, url)
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="flex min-h-screen flex-col bg-background pb-20">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center gap-4 py-4 px-4">
          <Link href="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-bold tracking-tight">Atividade</h1>
        </div>
      </header>

      <main className="container mx-auto mt-4 px-4 space-y-2">
        {notifications?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center text-muted-foreground">
            <div className="bg-muted rounded-full p-6 mb-4">
              <Heart className="h-10 w-10 opacity-20" />
            </div>
            <p className="text-lg font-medium">Nenhuma atividade ainda</p>
            <p className="text-sm">Quando alguém curtir suas fotos, você verá aqui.</p>
          </div>
        ) : (
          notifications?.map((notif) => (
            <Link 
              key={notif.id} 
              href={`/photo/${notif.photo_id}`}
              className="flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors"
            >
              <Avatar className="h-12 w-12 border">
                <AvatarImage src={notif.actor?.avatar_url} />
                <AvatarFallback>{notif.actor?.full_name?.substring(0, 2).toUpperCase() || "AN"}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-bold">{notif.actor?.full_name || "Alguém"}</span>
                  {notif.type === 'like' ? ' curtiu sua foto' : ' comentou na sua foto'}
                  <span className="font-medium text-primary ml-1 line-clamp-1 italic">
                    "{notif.photo?.title}"
                  </span>
                </p>
                <p className="text-[10px] text-muted-foreground mt-1">
                  {new Date(notif.created_at).toLocaleDateString()}
                </p>
              </div>

              {notif.photo?.url && (
                <div className="h-12 w-12 rounded-lg overflow-hidden shrink-0 border">
                  <img src={notif.photo.url} alt="Foto" className="h-full w-full object-cover" />
                </div>
              )}
            </Link>
          ))
        )}
      </main>
    </div>
  )
}
