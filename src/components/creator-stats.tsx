"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Heart, Image as ImageIcon, TrendingUp, Loader2 } from "lucide-react"
import { getCreatorAnalytics } from "@/app/actions/profile"

export function CreatorStats() {
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStats() {
      const data = await getCreatorAnalytics()
      setStats(data)
      setLoading(false)
    }
    loadStats()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!stats) return null

  const items = [
    {
      title: "Total de Visualizações",
      value: stats.totalViews.toLocaleString(),
      icon: <Eye className="h-4 w-4 text-muted-foreground" />,
      description: "Visualizações em todas as fotos"
    },
    {
      title: "Total de Curtidas",
      value: stats.totalLikes.toLocaleString(),
      icon: <Heart className="h-4 w-4 text-muted-foreground" />,
      description: "Engajamento acumulado"
    },
    {
      title: "Fotos Publicadas",
      value: stats.totalPhotos,
      icon: <ImageIcon className="h-4 w-4 text-muted-foreground" />,
      description: "Conteúdo ativo na plataforma"
    },
    {
      title: "Taxa de Engajamento",
      value: `${stats.engagementRate}%`,
      icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />,
      description: "Likes vs Visualizações"
    }
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {items.map((item, i) => (
        <Card key={i} className="bg-muted/30 border-none shadow-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {item.title}
            </CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground pt-1">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
