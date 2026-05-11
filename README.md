# 📸 MobileMakers

**MobileMakers** é um marketplace premium de fotografia e vídeo focado em estética UGC (User Generated Content) e formato vertical nativo. Construído para conectar criadores mobile a gestores de tráfego e marcas que buscam autenticidade.

## 🚀 Proposta de Valor

- **Mobile-First:** Interface otimizada para navegação com o polegar.
- **Estética UGC:** Conteúdo real, sem a "perfeição" artificial das DSLRs.
- **Extração de Metadados:** Identificação automática do dispositivo (ex: iPhone 15 Pro) via EXIF.
- **Licenciamento Ágil:** Compra simplificada com entrega imediata.

## 🛠️ Stack Tecnológica

- **Frontend:** Next.js 14+ (App Router) com Turbopack.
- **Estilização:** Tailwind CSS + shadcn/ui (Estética Violet/Indigo).
- **Backend:** Supabase (Auth, Database, Storage).
- **Deploy:** Vercel (Edge Network).
- **Animações:** Framer Motion & Lucide React.

## 📦 Estrutura do Projeto

```bash
/src
  /app          # Rotas e Páginas (Next.js App Router)
  /components   # Componentes UI reutilizáveis (shadcn)
  /lib          # Lógica de dados e tipos
  /utils        # Utilitários e clientes (Supabase)
/.planning      # Documentação de planejamento e roadmap
/KurióSchool    # Materiais educativos e protocolos de aula
```

## 🛠️ Desenvolvimento Local

1. Clone o repositório:
   ```bash
   git clone https://github.com/mobilemakersbr/mobilemakers.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente em `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=seu_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon
   ```
4. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 📄 Documentação Adicional

- [Plano de Negócio (PRD)](PRD.md)
- [Arquitetura do Sistema](ARCHITECTURE.md)
- [Guia de Desenvolvimento](DEVELOPMENT.md)
- [Infraestrutura](INFRASTRUCTURE.md)

---
*Powered by KurióSchool*
