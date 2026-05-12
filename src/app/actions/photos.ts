"use server"

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export async function getUniqueCategories() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data, error } = await supabase
    .from('photos')
    .select('category')
  
  if (error) {
    console.error("Erro ao buscar categorias:", error)
    return []
  }

  const categories = Array.from(new Set(data.map(p => p.category)))
    .filter(Boolean)
    .sort()

  return ["Tudo", ...categories]
}

export async function getTopCreators() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase
    .from('photos')
    .select(`
      author,
      user_id,
      likes:likes(count),
      profiles:user_id (
        avatar_url
      )
    `)

  if (error) {
    console.error("Erro ao buscar top creators:", error)
    return []
  }

  const creatorStats = data.reduce((acc: Record<string, { name: string, totalLikes: number, userId: string, avatarUrl?: string }>, curr) => {
    const author = curr.author || "Anônimo"
    const likes = (curr.likes as unknown as { count: number }[])?.[0]?.count || 0
    const avatarUrl = (curr.profiles as unknown as { avatar_url: string })?.avatar_url
    
    if (!acc[author]) {
      acc[author] = { name: author, totalLikes: 0, userId: curr.user_id, avatarUrl }
    }
    acc[author].totalLikes += likes
    return acc
  }, {})

  return Object.values(creatorStats)
    .sort((a, b) => b.totalLikes - a.totalLikes)
    .slice(0, 5)
}

export async function incrementView(photoId: string) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { error } = await supabase.rpc('increment_photo_views', { photo_id: photoId })
  
  if (error) {
    console.error("Erro ao incrementar views:", error)
    return { success: false }
  }
  
  return { success: true }
}

export async function getUniqueDevices() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data, error } = await supabase
    .from('photos')
    .select('device_model')
  
  if (error) {
    console.error("Erro ao buscar dispositivos:", error)
    return []
  }

  const devices = Array.from(new Set(data.map(p => p.device_model)))
    .filter(Boolean)
    .sort()

  return devices as string[]
}
