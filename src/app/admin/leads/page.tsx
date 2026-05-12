import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { getNewsletterLeads } from "@/app/actions/marketing"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowLeft } from "lucide-react"
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
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-2 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Início
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">Gestão de Leads</h1>
            <p className="text-muted-foreground">
              Total de {leads.length} inscritos na newsletter.
            </p>
          </div>
          
          <Button variant="outline" className="gap-2 self-start">
            <Download className="h-4 w-4" />
            Exportar CSV
          </Button>
        </div>

        {/* Tabela */}
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Data de Inscrição</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead: any, i: number) => (
                <TableRow key={lead.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="font-medium text-muted-foreground">
                    {leads.length - i}
                  </TableCell>
                  <TableCell className="font-semibold">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary/50" />
                      {lead.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(lead.created_at).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Ver Detalhes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {leads.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="h-32 text-center text-muted-foreground">
                    Nenhum lead capturado ainda.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
