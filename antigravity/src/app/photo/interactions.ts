'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export function useInteractions() {
  const supabase = createClient()
  const router = useRouter()

  async function toggleLike(photoId: string, userId: string, isLiked: boolean) {
    if (isLiked) {
      // Remove o Like
      const { error } = await supabase
        .from('likes')
        .delete()
        .eq('photo_id', photoId)
        .eq('user_id', userId)
      
      if (error) throw error
    } else {
      // Adiciona o Like
      const { error } = await supabase
        .from('likes')
        .insert({ photo_id: photoId, user_id: userId })
      
      if (error) throw error
    }
    
    router.refresh()
  }

  async function addComment(photoId: string, userId: string, content: string) {
    console.log("interactions.ts: Iniciando insert de comentário...")
    const { error } = await supabase
      .from('comments')
      .insert({ photo_id: photoId, user_id: userId, content })
    
    if (error) {
      console.error("interactions.ts: Erro no insert:", error)
      throw error
    }

    console.log("interactions.ts: Insert concluído, dando refresh...")
    router.refresh()
  }

  async function deletePhoto(photoId: string, photoUrl: string) {
    // 1. Extrair o caminho do arquivo da URL
    // Ex: .../photos/nome-da-foto.jpg -> nome-da-foto.jpg
    const filePath = photoUrl.split('/').pop()
    
    if (!filePath) return

    // 2. Deletar do Storage
    await supabase.storage
      .from('photos')
      .remove([filePath])

    // 3. Deletar do Banco (o RLS vai garantir que só o dono apague)
    const { error } = await supabase
      .from('photos')
      .delete()
      .eq('id', photoId)

    if (error) throw error
    
    router.refresh()
    window.location.reload() // Força o refresh da galeria
  }

  return { toggleLike, addComment, deletePhoto }
}
