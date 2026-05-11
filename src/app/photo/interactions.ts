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
    const { error } = await supabase
      .from('comments')
      .insert({ photo_id: photoId, user_id: userId, content })
    
    if (error) throw error

    router.refresh()
  }

  async function deletePhoto(photoId: string, photoUrl: string) {
    // 1. Extrair o caminho do arquivo da URL
    const filePath = photoUrl.split('/').pop()
    
    if (!filePath) return

    // 2. Deletar do Storage (com verificação de erro)
    const { error: storageError } = await supabase.storage
      .from('photos')
      .remove([filePath])
    
    if (storageError) console.warn('Arquivo não removido do storage:', storageError)

    // 3. Deletar do Banco (o RLS vai garantir que só o dono apague)
    const { error } = await supabase
      .from('photos')
      .delete()
      .eq('id', photoId)

    if (error) throw error
    
    router.refresh()
  }

  return { toggleLike, addComment, deletePhoto }
}
