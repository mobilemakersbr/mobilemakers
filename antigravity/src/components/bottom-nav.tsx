import Link from "next/link"
import { Home, Search, PlusSquare, User } from "lucide-react"

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background px-4 pb-safe">
      <Link href="/" className="flex flex-col items-center justify-center gap-1 text-muted-foreground transition-colors hover:text-primary">
        <Home className="h-6 w-6" />
        <span className="text-[10px] font-medium">Início</span>
      </Link>
      <Link href="/search" className="flex flex-col items-center justify-center gap-1 text-muted-foreground transition-colors hover:text-primary">
        <Search className="h-6 w-6" />
        <span className="text-[10px] font-medium">Explorar</span>
      </Link>
      <Link href="/upload" className="flex flex-col items-center justify-center gap-1 text-muted-foreground transition-colors hover:text-primary">
        <PlusSquare className="h-6 w-6" />
        <span className="text-[10px] font-medium">Upload</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center justify-center gap-1 text-muted-foreground transition-colors hover:text-primary">
        <User className="h-6 w-6" />
        <span className="text-[10px] font-medium">Perfil</span>
      </Link>
    </nav>
  )
}
