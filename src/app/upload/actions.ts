'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export function useUpload() {
  const supabase = createClient()
  const router = useRouter()

  async function uploadPhoto(formData: {
    file: File
    title: string
    tags: string
    location: string
    category: string
  }) {
    const { file, title, tags, location, category } = formData
    
    // 1. Upload da imagem para o Bucket 'photos'
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    const { data: storageData, error: storageError } = await supabase.storage
      .from('photos')
      .upload(filePath, file)

    if (storageError) throw storageError

    // 2. Pegar a URL pública da imagem
    const { data: { publicUrl } } = supabase.storage
      .from('photos')
      .getPublicUrl(filePath)

    // 3. Pegar Usuário e Perfil para autoria real
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error("Faça login para postar fotos")

    const { data: profile } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', user.id)
      .single()

    // 4. Salvar metadados na tabela 'photos' com vínculo de ID
    const { error: dbError } = await supabase
      .from('photos')
      .insert({
        url: publicUrl,
        title,
        tags,
        location,
        category,
        author: profile?.full_name || 'Autor sem nome',
        user_id: user.id
      })

    if (dbError) throw dbError

    router.push('/')
    router.refresh()
  }

  return { uploadPhoto }
}
