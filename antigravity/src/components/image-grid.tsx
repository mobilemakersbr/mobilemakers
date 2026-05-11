import { Photo } from "@/lib/data"
import { ImageCard } from "./image-card"

interface ImageGridProps {
  photos: Photo[]
  userLikes?: string[]
  userId?: string
}

export function ImageGrid({ photos = [], userLikes = [], userId }: ImageGridProps) {
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-medium text-muted-foreground">Nenhuma foto encontrada.</p>
        <p className="text-sm text-muted-foreground/60">Tente buscar por outro termo ou categoria.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="columns-2 gap-4 space-y-4 sm:columns-3 md:columns-4">
        {photos.map((photo) => (
          <div key={photo.id} className="break-inside-avoid">
            <ImageCard 
              photo={photo} 
              isLiked={userLikes.includes(photo.id)}
              userId={userId}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
