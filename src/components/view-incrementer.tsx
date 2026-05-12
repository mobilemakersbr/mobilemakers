"use client"

import { useEffect } from "react"
import { incrementView } from "@/app/actions/photos"

interface ViewIncrementerProps {
  photoId: string
}

export function ViewIncrementer({ photoId }: ViewIncrementerProps) {
  useEffect(() => {
    // Pequeno delay para garantir que o usuário realmente "viu" a página
    const timer = setTimeout(() => {
      incrementView(photoId)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [photoId])

  return null
}
