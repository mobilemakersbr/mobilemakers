"use server"

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

export async function completeOnboarding() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("Não autorizado")

  const { error } = await supabase
    .from("profiles")
    .update({ onboarding_completed: true })
    .eq("id", user.id)

  if (error) throw error
  
  revalidatePath("/")
  return { success: true }
}

export async function getProfileStatus() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data, error } = await supabase
    .from("profiles")
    .select("onboarding_completed")
    .eq("id", user.id)
    .single()

  if (error) return null
  return data
}

export async function getCreatorAnalytics() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  // Buscar todas as fotos do usuário com contagem de likes e views
  const { data, error } = await supabase
    .from("photos")
    .select(`
      id,
      views_count,
      likes:likes(count)
    `)
    .eq("user_id", user.id)

  if (error) return null

  const totalViews = data.reduce((acc, curr) => acc + (Number(curr.views_count) || 0), 0)
  const totalLikes = data.reduce((acc, curr) => {
    const likesCount = (curr.likes as unknown as { count: number }[])?.[0]?.count || 0
    return acc + likesCount
  }, 0)

  return {
    totalPhotos: data.length,
    totalViews,
    totalLikes,
    engagementRate: totalViews > 0 ? ((totalLikes / totalViews) * 100).toFixed(2) : 0
  }
}
