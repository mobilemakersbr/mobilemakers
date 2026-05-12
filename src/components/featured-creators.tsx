"use client"

import { Trophy, Flame } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Creator {
  name: string
  totalLikes: number
  userId: string
  avatarUrl?: string
}

interface FeaturedCreatorsProps {
  creators: Creator[]
}

export function FeaturedCreators({ creators }: FeaturedCreatorsProps) {
  if (creators.length === 0) return null

  return (
    <div className="w-full px-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <h2 className="font-bold text-lg">Mural dos Vencedores</h2>
        </div>
        <Link href="/ranking" className="text-xs font-medium text-primary hover:underline">
          Ver Ranking Completo
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {/* Card de Desafio Especial */}
        <div className="flex-none w-40 h-32 rounded-2xl bg-gradient-to-br from-primary to-purple-600 p-4 flex flex-col justify-between text-white shadow-lg shadow-primary/20">
          <Flame className="h-6 w-6" />
          <div>
            <p className="text-[10px] font-bold uppercase opacity-80">Desafio da Semana</p>
            <p className="text-sm font-bold leading-tight">Vibe Urbana</p>
          </div>
        </div>

        {/* Lista de Criadores */}
        {creators.map((creator, index) => (
          <Link 
            key={creator.name}
            href={`/author/${encodeURIComponent(creator.name)}`}
            className="flex-none w-28 flex flex-col items-center gap-2"
          >
            <div className="relative">
              <Avatar className={cn(
                "h-16 w-16 ring-2 ring-offset-2 ring-offset-background shadow-md",
                index === 0 ? "ring-yellow-400" : index === 1 ? "ring-slate-300" : "ring-orange-400"
              )}>
                <AvatarImage src={creator.avatarUrl} />
                <AvatarFallback className="bg-muted text-lg font-bold">
                  {creator.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              {/* Badge de Ranking */}
              <div className={cn(
                "absolute -bottom-1 -right-1 h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-background shadow-sm",
                index === 0 ? "bg-yellow-500" : index === 1 ? "bg-slate-400" : "bg-orange-500"
              )}>
                {index + 1}
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold truncate w-24">{creator.name}</p>
              <p className="text-[10px] text-muted-foreground">{creator.totalLikes} likes</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
