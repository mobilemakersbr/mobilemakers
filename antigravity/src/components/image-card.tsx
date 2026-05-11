'use client'

import Image from "next/image"
import Link from "next/link"
import { Photo } from "@/lib/data"
import { Heart, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInteractions } from "@/app/photo/interactions"
import { useState } from "react"

interface ImageCardProps {
  photo: Photo
  isLiked?: boolean
  userId?: string
}

export function ImageCard({ photo, isLiked: initialLiked = false, userId }: ImageCardProps) {
  const [isLiked, setIsLiked] = useState(initialLiked)
  const { toggleLike, deletePhoto } = useInteractions()

  async function handleLike() {
    if (!userId) {
      alert("Faça login para curtir!")
      return
    }
    
    // UI Otimista: muda na hora
    const newLikedState = !isLiked
    setIsLiked(newLikedState)
    
    try {
      await toggleLike(photo.id, userId, isLiked)
    } catch (error) {
      // Reverte se der erro
      setIsLiked(!newLikedState)
      alert("Erro ao processar curtida.")
    }
  }

  async function handleDelete() {
    if (confirm("Tem certeza que deseja apagar esta foto permanentemente?")) {
      try {
        await deletePhoto(photo.id, photo.url)
      } catch (error) {
        alert("Erro ao apagar foto.")
      }
    }
  }
  return (
    <div className="group relative block overflow-hidden rounded-xl bg-muted transition-all hover:ring-2 hover:ring-primary/50">
      <div className="relative w-full overflow-hidden">
        <Link href={`/photo/${photo.id}`}>
          <Image
            src={photo.url}
            alt={photo.title}
            width={600}
            height={800}
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8AKpT8S9WAAAAABJRU5ErkJggg=="
          />
        </Link>
      </div>
      
      {/* Overlay com info no Hover */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Link href={`/photo/${photo.id}`} className="pointer-events-auto">
          <h3 className="text-sm font-semibold text-white">{photo.title}</h3>
        </Link>
        <div className="pointer-events-auto mt-1">
          <Link 
            href={`/author/${encodeURIComponent(photo.author)}`}
            className="text-xs text-white/80 hover:text-white hover:underline transition-colors"
          >
            por {photo.author}
          </Link>
        </div>
      </div>

      {/* Botão de Delete (Só para o dono) */}
      {userId === (photo as any).user_id && (
        <button 
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleDelete()
          }}
          aria-label="Apagar foto"
          className="absolute left-3 top-3 z-50 rounded-full bg-red-500/20 p-2 text-red-500 backdrop-blur-md transition-all hover:bg-red-500/40 active:scale-90"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      )}

      {/* Botão de Like */}
      <button 
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleLike()
        }}
        aria-label="Curtir foto"
        className="absolute right-3 top-3 z-50 rounded-full bg-background/20 p-2 text-white backdrop-blur-md transition-all hover:bg-background/40 active:scale-90"
      >
        <Heart className={cn("h-5 w-5 transition-colors", isLiked ? "fill-red-500 text-red-500" : "text-white")} />
      </button>
    </div>
  )
}
