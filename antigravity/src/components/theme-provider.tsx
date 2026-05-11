"use client"

import * as React from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Simples e direto: garante que a classe 'dark' esteja no HTML
  React.useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return <>{children}</>
}
