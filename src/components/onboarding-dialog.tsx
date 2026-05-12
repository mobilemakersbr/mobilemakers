"use client"

import { useState } from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Bookmark, ShieldCheck, Sparkles, Trophy } from "lucide-react"
import { completeOnboarding } from "@/app/actions/profile"

interface OnboardingDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function OnboardingDialog({ isOpen, onClose }: OnboardingDialogProps) {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const steps = [
    {
      title: "Bem-vindo ao MobileMakers!",
      description: "A primeira plataforma de fotografia vertical focada em autenticidade e performance.",
      icon: <Sparkles className="h-12 w-12 text-primary" />,
    },
    {
      title: "Crie seus Moodboards",
      description: "Use o ícone de bookmark para salvar fotos em coleções personalizadas para seus projetos.",
      icon: <Bookmark className="h-12 w-12 text-blue-500" />,
    },
    {
      title: "Segurança Total",
      description: "Todas as nossas fotos têm licença comercial garantida. Pode usar em seus anúncios sem medo!",
      icon: <ShieldCheck className="h-12 w-12 text-green-500" />,
    },
    {
      title: "Ranking e Desafios",
      description: "Participe da nossa comunidade, ganhe likes e apareça no Mural dos Vencedores.",
      icon: <Trophy className="h-12 w-12 text-yellow-500" />,
    }
  ]

  async function handleFinish() {
    setIsLoading(true)
    try {
      await completeOnboarding()
      onClose()
    } catch (error) {
      console.error("Erro ao concluir onboarding:", error)
      onClose() // Fecha mesmo se der erro para não travar o usuário
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[425px] text-center">
        <DialogHeader className="items-center">
          <div className="mb-4 p-4 rounded-full bg-muted/50">
            {steps[step - 1].icon}
          </div>
          <DialogTitle className="text-2xl">{steps[step - 1].title}</DialogTitle>
          <DialogDescription className="text-base pt-2">
            {steps[step - 1].description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center gap-1 mt-4">
          {steps.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i + 1 === step ? "w-8 bg-primary" : "w-2 bg-muted"}`} 
            />
          ))}
        </div>

        <DialogFooter className="sm:justify-center mt-6">
          {step < steps.length ? (
            <Button className="w-full h-12 rounded-full font-bold" onClick={() => setStep(step + 1)}>
              Próximo
            </Button>
          ) : (
            <Button 
              className="w-full h-12 rounded-full font-bold bg-green-600 hover:bg-green-700" 
              onClick={handleFinish}
              disabled={isLoading}
            >
              Começar Agora
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
