import { cn } from "@/lib/utils"
import { photos } from "@/lib/data"

// Extrai categorias únicas das fotos e adiciona "Tudo"
const categories = ["Tudo", ...Array.from(new Set(photos.map((p) => p.category)))]

interface CategoryFiltersProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilters({ activeCategory, onCategoryChange }: CategoryFiltersProps) {
  return (
    <div className="flex w-full items-center gap-2 overflow-x-auto px-4 py-2 no-scrollbar scroll-smooth">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition-all",
            activeCategory === category
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
