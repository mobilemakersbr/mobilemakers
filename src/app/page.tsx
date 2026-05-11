"use client"

export const dynamic = 'force-dynamic'

import * as React from "react"
import { createClient } from "@/utils/supabase/client"
import { Photo } from "@/lib/data"
import { ImageGrid } from "@/components/image-grid"
import { SearchBar } from "@/components/search-bar"
import { CategoryFilters } from "@/components/category-filters"
import { Loader2, Bell } from "lucide-react"
import { useInteractions } from "./photo/interactions"
import Link from "next/link"

export default function Home() {
  const [photos, setPhotos] = React.useState<Photo[]>([])
  const [userLikes, setUserLikes] = React.useState<string[]>([]) // Array de IDs das fotos curtidas
  const [user, setUser] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [activeCategory, setActiveCategory] = React.useState("Tudo")
  const supabase = createClient()
  const { toggleLike } = useInteractions()

  // Busca fotos e dados do usuário
  React.useEffect(() => {
    async function fetchData() {
      try {
        // Pegar usuário logado
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)

        // Buscar Fotos
        const { data: photosData } = await supabase
          .from('photos')
          .select('*')
          .order('created_at', { ascending: false })
        
        setPhotos(photosData || [])

        // Se estiver logado, buscar likes
        if (user) {
          const { data: likesData } = await supabase
            .from('likes')
            .select('photo_id')
            .eq('user_id', user.id)
          
          setUserLikes(likesData?.map(l => l.photo_id) || [])
        }
      } catch (err) {
        console.error("Erro ao carregar dados:", err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [supabase])

  const handleLike = async (photoId: string) => {
    if (!user) {
      alert("Faça login para curtir fotos!")
      return
    }

    const isLiked = userLikes.includes(photoId)
    
    // Atualização otimista da UI
    if (isLiked) {
      setUserLikes(prev => prev.filter(id => id !== photoId))
    } else {
      setUserLikes(prev => [...prev, photoId])
    }

    try {
      await toggleLike(photoId, user.id, isLiked)
    } catch (err) {
      // Reverter se der erro
      alert("Erro ao salvar curtida.")
    }
  }

  // Lógica de Filtragem (Computed Property)
  const filteredPhotos = React.useMemo(() => {
    return photos.filter((photo) => {
      const matchesSearch = 
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (photo.author && photo.author.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = activeCategory === "Tudo" || photo.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [photos, searchQuery, activeCategory])

  return (
    <div className="flex flex-col gap-2">
      {/* Header com Busca */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex flex-col gap-4 py-4 px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight text-primary">MobileMakers</h1>
            <Link href="/notifications" className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors relative">
              <Bell className="h-5 w-5" />
            </Link>
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        
        {/* Filtros de Categoria */}
        <CategoryFilters 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
      </header>

      {/* Galeria Principal Filtrada */}
      <main className="flex-1">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin mb-2" />
            <p>Carregando galeria...</p>
          </div>
        ) : (
          <ImageGrid 
            photos={filteredPhotos} 
            userLikes={userLikes}
            userId={user?.id}
          />
        )}
      </main>

      <div className="h-4" />
    </div>
  );
}
