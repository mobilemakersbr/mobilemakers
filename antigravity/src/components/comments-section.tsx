'use client'

import * as React from "react"
import { useInteractions } from "@/app/photo/interactions"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Send, Loader2 } from "lucide-react"

interface Comment {
  id: string
  content: string
  created_at: string
  user_id: string
  profiles?: {
    full_name: string | null
    avatar_url: string | null
  }
}

interface CommentsSectionProps {
  photoId: string
  userId?: string
  initialComments: Comment[]
}

export function CommentsSection({ photoId, userId, initialComments }: CommentsSectionProps) {
  const [content, setContent] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const { addComment } = useInteractions()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log("Submetendo comentário para:", photoId, "Usuário:", userId)
    
    if (!userId) {
      alert("Faça login para comentar!")
      return
    }
    if (!content.trim()) return

    setIsLoading(true)
    try {
      console.log("Chamando addComment...")
      await addComment(photoId, userId, content)
      console.log("Comentário enviado com sucesso!")
      setContent("")
    } catch (error) {
      console.error("Erro ao enviar comentário:", error)
      alert("Erro ao enviar comentário.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6 mt-8 border-t pt-8">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-primary" />
        <h3 className="font-bold text-lg">Comentários ({initialComments.length})</h3>
      </div>

      {/* Formulário de Comentário */}
      {userId ? (
        <form onSubmit={handleSubmit} className="flex gap-3">
          <Avatar className="h-9 w-9 shrink-0">
            <AvatarFallback>{userId.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <Textarea 
              placeholder="Escreva um comentário..." 
              className="min-h-[80px] bg-muted/50 focus-visible:ring-primary"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex justify-end">
              <Button type="submit" size="sm" className="gap-2" disabled={isLoading || !content.trim()}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Comentar
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div className="bg-muted/30 rounded-xl p-4 text-center border border-dashed">
          <p className="text-sm text-muted-foreground">Faça login para participar da conversa.</p>
        </div>
      )}

      {/* Lista de Comentários */}
      <div className="space-y-4">
        {initialComments.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4 italic">Seja o primeiro a comentar!</p>
        ) : (
          initialComments.map((comment) => (
            <div key={comment.id} className="flex gap-3 animate-in fade-in slide-in-from-top-2">
              <Avatar className="h-9 w-9 shrink-0">
                <AvatarImage src={comment.profiles?.avatar_url || undefined} />
                <AvatarFallback>
                  {comment.profiles?.full_name?.substring(0, 2).toUpperCase() || "AN"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 rounded-2xl bg-muted/50 p-3 text-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[12px] opacity-70">
                    {comment.profiles?.full_name || "Usuário Anonymous"}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {new Date(comment.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="leading-relaxed">{comment.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
