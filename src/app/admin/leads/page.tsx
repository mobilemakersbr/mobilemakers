import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { getNewsletterLeads } from "@/app/actions/marketing"
import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowLeft, Users } from "lucide-react"
import Link from "next/link"

export default async function AdminLeadsPage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data: { user } } = await supabase.auth.getUser()
  
  // Proteção de Rota
  if (!user || user.email !== "mathcuskurio@gmail.com") {
    redirect("/")
  }

  const leads = await getNewsletterLeads()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-10 px-4 max-w-4xl">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-2 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Voltar ao Início
              </Link>
              <h1 className="text-3xl font-bold tracking-tight">Gestão de Leads</h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <Users className="h-4 w-4" />
                {leads.length} inscrito{leads.length !== 1 ? "s" : ""} na newsletter
              </p>
            </div>
            
            <Button variant="outline" className="gap-2 self-start">
              <Download className="h-4 w-4" />
              Exportar CSV
            </Button>
          </div>

          {/* Tabela */}
          <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
            {/* Header da Tabela */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-muted/50 border-b text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <div className="col-span-1">#</div>
              <div className="col-span-7">E-mail</div>
              <div className="col-span-4">Data de Inscrição</div>
            </div>

            {/* Rows */}
            {leads.length === 0 ? (
              <div className="py-20 text-center text-muted-foreground">
                <Mail className="h-10 w-10 mx-auto mb-3 opacity-30" />
                <p>Nenhum lead capturado ainda.</p>
              </div>
            ) : (
              <div className="divide-y">
                {leads.map((lead: { id: string; email: string; created_at: string }, i: number) => (
                  <div key={lead.id} className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-muted/20 transition-colors items-center">
                    <div className="col-span-1 text-sm text-muted-foreground font-mono">
                      {leads.length - i}
                    </div>
                    <div className="col-span-7 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary/40 shrink-0" />
                      <span className="font-medium text-sm truncate">{lead.email}</span>
                    </div>
                    <div className="col-span-4 text-sm text-muted-foreground">
                      {new Date(lead.created_at).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
