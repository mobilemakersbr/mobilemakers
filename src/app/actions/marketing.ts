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
    if (error.code === "23505") { // Unique violation
      throw new Error("Este e-mail já está inscrito em nossa newsletter!")
    }
    throw error
  }

  return { success: true }
}
