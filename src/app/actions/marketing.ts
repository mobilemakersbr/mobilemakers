"use server"

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export async function subscribeToNewsletter(email: string) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  if (!email || !email.includes("@")) {
    throw new Error("E-mail inválido")
  }

  const { error } = await supabase
    .from("newsletter_leads")
    .insert({ email })

  if (error) {
    if (error.code === "23505") {
      throw new Error("Este e-mail já está inscrito em nossa newsletter!")
    }
    throw error
  }

  return { success: true }
}

export async function getNewsletterLeads() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.email !== "mathcuskurio@gmail.com") {
    throw new Error("Não autorizado")
  }

  const { data, error } = await supabase
    .from("newsletter_leads")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) throw error
  return data
}
