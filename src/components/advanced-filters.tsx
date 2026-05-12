"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover"
import { Smartphone, X } from "lucide-react"
import { getUniqueDevices } from "@/app/actions/photos"

interface AdvancedFiltersProps {
  onDeviceChange: (device: string | null) => void
  activeDevice: string | null
}

export function AdvancedFilters({ onDeviceChange, activeDevice }: AdvancedFiltersProps) {
  const [devices, setDevices] = useState<string[]>([])

  useEffect(() => {
    async function load() {
      const data = await getUniqueDevices()
      setDevices(data)
    }
    load()
  }, [])

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide px-4">
      <Popover>
        <PopoverTrigger render={
          <Button 
            variant={activeDevice ? "default" : "outline"} 
            size="sm" 
            className="rounded-full gap-2 shrink-0"
          >
            <Smartphone className="h-4 w-4" />
            {activeDevice || "Dispositivo"}
            {activeDevice && (
              <span 
                onClick={(e) => {
                  e.stopPropagation()
                  onDeviceChange(null)
                }}
                className="ml-1 p-0.5 hover:bg-primary-foreground/20 rounded-full"
              >
                <X className="h-3 w-3" />
              </span>
            )}
          </Button>
        } />
        <PopoverContent className="w-[200px] p-2" align="start">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-muted-foreground px-2 py-1 mb-1">Filtrar por Modelo</p>
            {devices.map((device) => (
              <Button
                key={device}
                variant="ghost"
                size="sm"
                className={`justify-start font-normal ${activeDevice === device ? "bg-muted" : ""}`}
                onClick={() => onDeviceChange(device)}
              >
                {device}
              </Button>
            ))}
            {devices.length === 0 && (
              <p className="text-xs text-muted-foreground px-2 py-4 text-center">Nenhum dispositivo encontrado.</p>
            )}
          </div>
        </PopoverContent>
      </Popover>

      {/* Outros filtros futuros aqui (Resolução, ISO, etc) */}
    </div>
  )
}
