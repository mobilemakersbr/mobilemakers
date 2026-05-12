"use client"

import Link from "next/link"
import { Home, Search, PlusSquare, User } from "lucide-react"
import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { usePathname } from "next/navigation"

export function BottomNav() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()
  const pathname = usePathname()

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  // Não mostrar se estiver carregando ou se não houver usuário
  // Exceto se quisermos mostrar uma versão simplificada, mas aqui vamos esconder.
  if (loading || !user) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background/80 backdrop-blur-md px-4 pb-safe animate-in slide-in-from-bottom-full duration-500">
      <Link href="/" className={`flex flex-col items-center justify-center gap-1 transition-colors ${pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
        <Home className="h-6 w-6" />
        <span className="text-[10px] font-medium">Início</span>
      </Link>
      <Link href="/search" className={`flex flex-col items-center justify-center gap-1 transition-colors ${pathname === "/search" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
        <Search className="h-6 w-6" />
        <span className="text-[10px] font-medium">Explorar</span>
      </Link>
      <Link href="/upload" className={`flex flex-col items-center justify-center gap-1 transition-colors ${pathname === "/upload" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
        <PlusSquare className="h-6 w-6" />
        <span className="text-[10px] font-medium">Upload</span>
      </Link>
      <Link href="/profile" className={`flex flex-col items-center justify-center gap-1 transition-colors ${pathname.startsWith("/profile") ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
        <User className="h-6 w-6" />
        <span className="text-[10px] font-medium">Perfil</span>
      </Link>
    </nav>
  )
}
