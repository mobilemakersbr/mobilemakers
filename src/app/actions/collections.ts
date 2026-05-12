"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function createCollection(name: string, description?: string) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("Não autorizado")

  const { data, error } = await supabase
    .from("collections")
    .insert([{ name, description, user_id: user.id }])
    .select()
    .single()

  if (error) throw error
  
  revalidatePath("/profile")
  return data
}

export async function addPhotoToCollection(collectionId: string, photoId: string) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("Não autorizado")

  const { error } = await supabase
    .from("collection_photos")
    .insert([{ collection_id: collectionId, photo_id: photoId }])

  if (error) throw error
  
  revalidatePath("/profile")
  return { success: true }
}

export async function getCollections() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return []

  const { data, error } = await supabase
    .from("collections")
    .select("*, collection_photos(photo_id)")
    .eq("user_id", user.id)

  if (error) throw error
  return data
}
