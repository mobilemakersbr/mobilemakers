"use client"

import { ArrowRight, Smartphone, ShieldCheck, Zap, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NewsletterForm } from "./newsletter-form"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-1000">
              <Zap className="h-4 w-4 text-primary" />
              <span>A revolução do conteúdo vertical 9:16</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Transforme seus Anúncios com <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Fotografia UGC</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              O primeiro banco de imagens mobile-first do Brasil focado em autenticidade e conversão para gestores de tráfego e criadores.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold shadow-lg shadow-primary/20">
                <Link href="/login">
                  Começar a Explorar Grátis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg font-bold">
                Saiba como funciona
              </Button>
            </div>
          </div>
        </div>

        {/* Efeito de Gradiente de Fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -ml-48 -mb-48"></div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Mobile-First Nativo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Esqueça fotos horizontais adaptadas. Nossas imagens são capturadas originalmente em 9:16 para Reels, TikTok e Stories.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Segurança Jurídica</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Todas as fotos possuem licença comercial garantida. Use em anúncios do Meta, Google e TikTok sem medo de strikes.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <ImageIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Curadoria UGC</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Conteúdo com cara de "pessoa real". A estética que gera mais cliques e menos resistência do público em redes sociais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 container mx-auto px-4">
        <NewsletterForm />
      </section>

      {/* Footer / CTA Final */}
      <footer className="py-20 text-center container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Pronto para elevar o nível do seu conteúdo?</h2>
        <Button asChild size="lg" className="rounded-full h-12 px-10">
          <Link href="/login">Criar Minha Conta Grátis</Link>
        </Button>
        <p className="mt-8 text-sm text-muted-foreground">
          © 2026 MobileMakers. Feito para quem cria o futuro do marketing.
        </p>
      </footer>
    </div>
  )
}
