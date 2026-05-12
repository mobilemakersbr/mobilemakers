"use client"

import { ShieldCheck, Info } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function LicenseBadge() {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-green-500/10 p-3 text-green-600 dark:bg-green-500/20 dark:text-green-400">
      <ShieldCheck className="h-5 w-5" />
      <div className="flex-1">
        <p className="text-sm font-bold leading-none">Licença MobileMakers</p>
        <p className="text-xs opacity-80">Livre para uso pessoal e comercial</p>
      </div>
      
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-green-500/20" />
          }
        >
          <Info className="h-4 w-4" />
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">O que é permitido?</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                <li>Todas as fotos podem ser baixadas e usadas gratuitamente.</li>
                <li>Uso comercial e não comercial.</li>
                <li>Não é necessário dar crédito (embora seja apreciado!).</li>
              </ul>
            </div>
            <div className="space-y-2 border-t pt-2">
              <h4 className="font-medium leading-none text-red-500">O que não é permitido?</h4>
              <p className="text-sm text-muted-foreground">
                Não venda cópias inalteradas das fotos ou as redistribua em outras plataformas de estoque.
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
