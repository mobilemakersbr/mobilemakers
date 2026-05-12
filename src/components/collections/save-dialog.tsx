"use client"

import { useState, useEffect } from "react"
import { Bookmark, Plus } from "lucide-react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createCollection, addPhotoToCollection, getCollections } from "@/app/actions/collections"
import { cn } from "@/lib/utils"

interface SaveToCollectionDialogProps {
  photoId: string
  userId?: string
}

export function SaveToCollectionDialog({ photoId, userId }: SaveToCollectionDialogProps) {
  const [open, setOpen] = useState(false)
  const [collections, setCollections] = useState<any[]>([])
  const [newCollectionName, setNewCollectionName] = useState("")
  const [isCreating, setIsCreating] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (open && userId) {
      loadCollections()
    }
  }, [open, userId])

  async function loadCollections() {
    try {
      const data = await getCollections()
      setCollections(data)
    } catch (error) {
      console.error("Erro ao carregar coleções:", error)
    }
  }

  async function handleSave(collectionId: string) {
    if (isLoading) return
    setIsLoading(true)
    try {
      await addPhotoToCollection(collectionId, photoId)
      alert("Foto salva com sucesso!")
      setOpen(false)
    } catch (error) {
      alert("Erro ao salvar foto na coleção.")
    } finally {
      setIsLoading(false)
    }
  }

  async function handleCreateCollection() {
    if (!newCollectionName.trim() || isLoading) return
    setIsLoading(true)
    try {
      const newCol = await createCollection(newCollectionName)
      await handleSave(newCol.id)
    } catch (error) {
      alert("Erro ao criar coleção.")
    } finally {
      setIsLoading(false)
      setIsCreating(false)
      setNewCollectionName("")
    }
  }
  if (!userId) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => alert("Faça login para salvar em coleções!")}
        className="rounded-full bg-background/40 text-white backdrop-blur-md hover:bg-background/60"
      >
        <Bookmark className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-background/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-background/60 hover:scale-110 active:scale-90"
          />
        }
      >
        <Bookmark className="h-5 w-5" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Salvar em uma coleção</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          {collections.length === 0 && !isCreating && (
            <p className="text-center text-sm text-muted-foreground">
              Você ainda não tem coleções.
            </p>
          )}
          
          <div className="max-h-[300px] overflow-y-auto space-y-2">
            {collections.map((col) => (
              <button
                key={col.id}
                onClick={() => handleSave(col.id)}
                disabled={isLoading}
                className="w-full flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors text-left"
              >
                <span className="font-medium">{col.name}</span>
                <span className="text-xs text-muted-foreground">
                  {col.collection_photos?.length || 0} fotos
                </span>
              </button>
            ))}
          </div>

          {isCreating ? (
            <div className="space-y-3 pt-4 border-t">
              <Input
                placeholder="Nome da coleção"
                value={newCollectionName}
                onChange={(e) => setNewCollectionName(e.target.value)}
                autoFocus
              />
              <div className="flex gap-2">
                <Button 
                  className="flex-1" 
                  onClick={handleCreateCollection}
                  disabled={isLoading || !newCollectionName.trim()}
                >
                  Criar e Salvar
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsCreating(false)}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          ) : (
            <Button 
              variant="outline" 
              className="w-full gap-2" 
              onClick={() => setIsCreating(true)}
            >
              <Plus className="h-4 w-4" />
              Nova Coleção
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
