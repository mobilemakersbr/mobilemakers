'use client'

import * as React from "react"
import { useUpload } from "./actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Image as ImageIcon, Loader2, MapPin, Tag } from "lucide-react"

const categories = ["Lifestyle", "Urbano", "Natureza", "Interior", "Trabalho", "Moda"]

export default function UploadPage() {
  const [file, setFile] = React.useState<File | null>(null)
  const [preview, setPreview] = React.useState<string | null>(null)
  const [title, setTitle] = React.useState("")
  const [tags, setTags] = React.useState("")
  const [location, setLocation] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  
  const { uploadPhoto } = useUpload()

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!file) return
    
    setIsLoading(true)
    try {
      await uploadPhoto({ file, title, tags, location, category })
      alert("Foto enviada com sucesso!")
    } catch (error) {
      alert("Erro no upload: " + (error as any).message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 pb-24 max-w-2xl">
      <Card className="border-none bg-muted/30 backdrop-blur-md">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Camera className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Novo Upload</CardTitle>
          </div>
          <CardDescription>
            Compartilhe sua visão do mundo com o marketplace Antigravity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Seletor de Imagem */}
            <div className="space-y-2">
              <Label>Foto do Produto</Label>
              <div 
                className="relative group cursor-pointer border-2 border-dashed border-muted-foreground/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all aspect-[4/3] flex items-center justify-center bg-background/50"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                {preview ? (
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <ImageIcon className="h-10 w-10 opacity-20" />
                    <span className="text-sm">Clique para selecionar ou tirar foto</span>
                  </div>
                )}
                <input 
                  id="file-upload" 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* Metadados */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título da Obra</Label>
                <Input 
                  id="title" 
                  placeholder="Ex: Pôr do sol na Av. Paulista" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select value={category} onValueChange={(val) => setCategory(val || "")} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(c => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Localização (Cidade/CEP)</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="location" 
                      placeholder="São Paulo, SP" 
                      className="pl-9"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                <div className="relative">
                  <Tag className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Textarea 
                    id="tags" 
                    placeholder="urbano, arquitetura, luz natural..." 
                    className="pl-9 min-h-[80px]"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-lg font-bold" disabled={isLoading || !file}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Fazendo Upload...
                </>
              ) : (
                "Publicar no Marketplace"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
