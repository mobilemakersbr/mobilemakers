'use client'

export const dynamic = 'force-dynamic'

import * as React from "react"
import { createClient } from "@/utils/supabase/client"
import { Photo } from "@/lib/data"
import { ImageGrid } from "@/components/image-grid"
import { SearchBar } from "@/components/search-bar"
import { Loader2, Compass, TrendingUp } from "lucide-react"

const categories = [
  { name: "Lifestyle", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=400&h=200&auto=format&fit=crop" },
  { name: "Urbano", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=400&h=200&auto=format&fit=crop" },
  { name: "Natureza", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=400&h=200&auto=format&fit=crop" },
  { name: "Moda", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400&h=200&auto=format&fit=crop" }
]

export default function ExplorePage() {
  const [photos, setPhotos] = React.useState<Photo[]>([])
  const [userLikes, setUserLikes] = React.useState<string[]>([])
  const [user, setUser] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [searchQuery, setSearchQuery] = React.useState("")
  const supabase = createClient()

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)

        const { data: photosData } = await supabase
          .from('photos')
          .select('*')
          .order('created_at', { ascending: false })
        
        setPhotos(photosData || [])

        if (user) {
          const { data: likesData } = await supabase
            .from('likes')
            .select('photo_id')
            .eq('user_id', user.id)
          setUserLikes(likesData?.map(l => l.photo_id) || [])
        }
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [supabase])

  const filteredPhotos = React.useMemo(() => {
    if (!searchQuery) return photos
    return photos.filter((p) => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [photos, searchQuery])

  return (
    <div className="flex min-h-screen flex-col bg-background pb-20">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md px-4 py-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </header>

      <main className="flex-1 overflow-y-auto">
        {!searchQuery && (
          <div className="px-4 py-6 space-y-6">
            <div className="flex items-center gap-2 text-lg font-bold">
              <Compass className="h-5 w-5 text-primary" />
              <h2>Descobrir Categorias</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSearchQuery(cat.name)}
                  className="relative h-24 rounded-2xl overflow-hidden group active:scale-95 transition-transform"
                >
                  <img src={cat.image} className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all" alt={cat.name} />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                    {cat.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-lg font-bold pt-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2>Em Alta</h2>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <ImageGrid 
            photos={filteredPhotos} 
            userLikes={userLikes}
            userId={user?.id}
          />
        )}
      </main>
    </div>
  )
}
