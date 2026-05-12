"use client"

import { cn } from "@/lib/utils"

interface CategoryFiltersProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilters({ categories, activeCategory, onCategoryChange }: CategoryFiltersProps) {
  return (
    <div className="flex w-full items-center gap-2 overflow-x-auto px-4 py-3 no-scrollbar scroll-smooth">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 active:scale-95",
            activeCategory === category
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 ring-2 ring-primary ring-offset-2 ring-offset-background"
              : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-transparent hover:border-muted-foreground/20"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
