'use client'

import * as React from "react"
import { useAuth } from "./actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Loader2, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [isLogin, setIsLogin] = React.useState(true)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  
  const { signIn, signUp } = useAuth()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    try {
      if (isLogin) {
        await signIn(email, password)
      } else {
        await signUp(email, password)
        setIsSuccess(true)
      }
    } catch (error) {
      alert("Erro: " + (error as any).message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-background">
      <Card className="w-full max-w-md border-none shadow-2xl bg-muted/30 backdrop-blur-sm">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-2xl bg-primary/10">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">MobileMakers</CardTitle>
          <CardDescription>
            {isLogin ? "Entre na sua conta para continuar." : "Crie sua conta e comece a publicar."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Cadastro Realizado!</h3>
                <p className="text-sm text-muted-foreground">
                  Verifique seu e-mail para confirmar a conta e poder fazer login.
                </p>
              </div>
              <Button variant="outline" onClick={() => { setIsSuccess(false); setIsLogin(true); }} className="w-full">
                Ir para Login
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  {isLogin && (
                    <button type="button" className="text-xs text-primary hover:underline">Esqueceu a senha?</button>
                  )}
                </div>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-background/50 pr-10"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full h-11 text-base font-semibold" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isLogin ? "Entrando..." : "Criando Conta..."}
                  </>
                ) : (
                  isLogin ? "Entrar" : "Criar Conta Grátis"
                )}
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center">
          <button 
            type="button" 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {isLogin ? "Não tem uma conta? Cadastre-se" : "Já tem uma conta? Entre aqui"}
          </button>
          <p className="text-[10px] text-muted-foreground/60 px-8">
            Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
