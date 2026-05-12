"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle2 } from "lucide-react"
import { subscribeToNewsletter } from "@/app/actions/marketing"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      await subscribeToNewsletter(email)
      setIsSubscribed(true)
      setEmail("")
    } catch (err) {
      const message = err instanceof Error ? err.message : "Ocorreu um erro ao se inscrever."
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-green-500/10 border border-green-500/20 rounded-2xl animate-in zoom-in-95 duration-500">
        <CheckCircle2 className="h-12 w-12 text-green-500" />
        <h3 className="text-xl font-bold">Inscrição Confirmada!</h3>
        <p className="text-muted-foreground text-center">
          Obrigado por se juntar à nossa comunidade. Você receberá as novidades em breve.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="text-center space-y-2 mb-6">
        <h3 className="text-2xl font-bold">Fique por dentro das novidades</h3>
        <p className="text-muted-foreground text-sm">
          Receba avisos sobre novas coleções, tendências e atualizações da plataforma.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            className="pl-10 h-12 bg-muted/50" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <Button type="submit" disabled={isLoading} className="h-12 px-8 font-bold">
          {isLoading ? "Inscrito..." : "Inscrever"}
        </Button>
      </form>
      
      {error && (
        <p className="text-sm text-red-500 text-center animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  )
}
