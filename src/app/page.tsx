"use client"

export const dynamic = 'force-dynamic'

import * as React from "react"
import { createClient } from "@/utils/supabase/client"
import { User } from "@supabase/supabase-js"
import { Photo } from "@/lib/data"
import { ImageGrid } from "@/components/image-grid"
import { SearchBar } from "@/components/search-bar"
import { CategoryFilters } from "@/components/category-filters"
import { Loader2, Bell } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { getUniqueCategories, getTopCreators } from "./actions/photos"
import { FeaturedCreators } from "@/components/featured-creators"
import { LandingPage } from "@/components/landing-page"
import { OnboardingDialog } from "@/components/onboarding-dialog"
import { getProfileStatus } from "./actions/profile"
import { AdvancedFilters } from "@/components/advanced-filters"

export default function Home() {
  const [photos, setPhotos] = React.useState<Photo[]>([])
  const [userLikes, setUserLikes] = React.useState<string[]>([]) // Array de IDs das fotos curtidas
  const [user, setUser] = React.useState<User | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [activeCategory, setActiveCategory] = React.useState("Tudo")
  const [activeDevice, setActiveDevice] = React.useState<string | null>(null)
  const [categories, setCategories] = React.useState<string[]>(["Tudo"])
  const [topCreators, setTopCreators] = React.useState<{ name: string, totalLikes: number, userId: string, avatarUrl?: string }[]>([])
  const [showOnboarding, setShowOnboarding] = React.useState(false)
  const supabase = createClient()

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
        // Buscar Categorias Únicas
        const cats = await getUniqueCategories()
        setCategories(cats)

        // Buscar Top Creators
        const creators = await getTopCreators()
        setTopCreators(creators)

        // Verificar Onboarding
        if (user) {
          const profile = await getProfileStatus()
          if (profile && !profile.onboarding_completed) {
            setShowOnboarding(true)
          }
        }
      } catch (err) {
        console.error("Erro ao carregar dados:", err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [supabase])



  // Lógica de Filtragem (Computed Property)
  const filteredPhotos = React.useMemo(() => {
    return photos.filter((photo) => {
      const matchesSearch = 
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (photo.author && photo.author.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = activeCategory === "Tudo" || photo.category === activeCategory
      const matchesDevice = !activeDevice || photo.device_model === activeDevice
      
      return matchesSearch && matchesCategory && matchesDevice
    })
  }, [photos, searchQuery, activeCategory, activeDevice])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!user) {
    return <LandingPage />
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Header com Busca */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex flex-col gap-4 py-4 px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight text-primary">MobileMakers</h1>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link href="/notifications" className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors relative">
                <Bell className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        
        {/* Filtros de Categoria (Chips de Tendências) */}
        <CategoryFilters 
          categories={categories}
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        {/* Filtros Avançados (Dispositivos) */}
        <AdvancedFilters 
          activeDevice={activeDevice}
          onDeviceChange={setActiveDevice}
        />

        {/* Mural dos Vencedores (Gamificação) */}
        {activeCategory === "Tudo" && !searchQuery && (
          <FeaturedCreators creators={topCreators} />
        )}
      </header>

      {/* Galeria Principal Filtrada */}
      <main className="flex-1">
        <ImageGrid 
          photos={filteredPhotos} 
          userLikes={userLikes}
          userId={user?.id}
        />
      </main>

      <div className="h-4" />

      <OnboardingDialog 
        isOpen={showOnboarding} 
        onClose={() => setShowOnboarding(false)} 
      />
    </div>
  );
}
