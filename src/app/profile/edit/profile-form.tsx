'use client'

import * as React from "react"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Save, Camera } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileForm({ profile, userId }: { profile: any, userId: string }) {
  const [name, setName] = React.useState(profile?.full_name || "")
  const [avatarUrl, setAvatarUrl] = React.useState(profile?.avatar_url || "")
  const [uploading, setUploading] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const supabase = createClient()
  const router = useRouter()

  async function handleAvatarUpload(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      setUploading(true)
      if (!e.target.files || e.target.files.length === 0) return

      const file = e.target.files[0]
      const fileExt = file.name.split('.').pop()
      const filePath = `${userId}-${Math.random()}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath)

      setAvatarUrl(publicUrl)
    } catch (error: any) {
      alert("Erro ao carregar avatar: " + (error.message || "Erro desconhecido"))
      console.error(error)
    } finally {
      setUploading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({ 
          id: userId,
          full_name: name, 
          avatar_url: avatarUrl,
          updated_at: new Date() 
        })

      if (error) throw error
      
      router.push('/profile')
      router.refresh()
    } catch (error) {
      alert("Erro ao salvar perfil.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-muted/20 p-6 rounded-2xl border border-muted-foreground/10 shadow-sm">
      <div className="flex flex-col items-center gap-4 border-b border-muted-foreground/10 pb-6">
        <div className="relative group cursor-pointer">
          <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback className="text-2xl">{name?.substring(0, 2).toUpperCase() || "AN"}</AvatarFallback>
          </Avatar>
          <label htmlFor="avatar-upload" className="absolute inset-0 flex items-center justify-center bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            {uploading ? <Loader2 className="h-6 w-6 animate-spin" /> : <Camera className="h-6 w-6" />}
          </label>
          <input 
            type="file" 
            id="avatar-upload" 
            className="hidden" 
            accept="image/*" 
            onChange={handleAvatarUpload}
            disabled={uploading}
          />
        </div>
        <p className="text-sm font-medium text-muted-foreground">Toque na foto para mudar</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome Completo</Label>
          <Input 
            id="name" 
            placeholder="Como quer ser chamado?" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-background h-12"
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full h-12 gap-2 text-base" disabled={isLoading || uploading}>
        {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
        Salvar Alterações
      </Button>
    </form>
  )
}
