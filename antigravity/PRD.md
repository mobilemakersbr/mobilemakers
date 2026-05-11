# Documentação do Projeto: Antigravity

**Conceito:** Banco de imagens e vídeos focado em conteúdo Mobile-First, Estética UGC (User Generated Content) e Licenciamento Ágil.

## 1. Visão Geral do Produto
O Antigravity é um PWA (Progressive Web App) desenvolvido para criadores de conteúdo e gestores de tráfego que buscam imagens autênticas capturadas via dispositivos móveis. O foco não é a perfeição técnica de uma DSLR, mas a conexão real e o formato vertical nativo das redes sociais.

**Pilares de Desenvolvimento:**
- **Performance Extrema:** Carregamento instantâneo via Vercel Edge Network.
- **Mobile-Centric:** Interface pensada para uso com o polegar.
- **SEO de Imagem:** Estrutura focada em rankear no Google Imagens com selo "Licenciável".

## 2. Stack Tecnológica (Arquitetura)
| Componente | Tecnologia | Motivo |
|---|---|---|
| Framework | Next.js 14+ (App Router) | Melhor suporte para SEO e SSR (Server Side Rendering). |
| Hospedagem | Vercel | Integração contínua e otimização automática de imagens. |
| Banco de Dados | Supabase (PostgreSQL) | Fácil gestão de metadados e autenticação de usuários. |
| Storage (Mídia) | Cloudinary ou Vercel Blob | Manipulação de imagens via URL (redimensionamento dinâmico). |
| Pagamentos | Stripe | Facilidade para vendas globais e assinaturas. |
| Estilização | Tailwind CSS | Agilidade no desenvolvimento da interface responsiva. |

## 3. Estrutura do Banco de Dados (Schema Inicial)
- **profiles:** Dados do fotógrafo/contribuidor.
- **assets:** Informações da mídia (imagem ou vídeo).
  - Campos: id, created_at, url_original, url_thumbnail, device_model (ex: iPhone 15 Pro), tags[], category, price, is_vertical (boolean).
- **licenses:** Registro de quem comprou o quê.

## 4. Mapa de Funcionalidades (MVP)

### Fase 1: Interface e Busca (O "Catálogo")
- **Feed Infinito:** Galeria estilo Pinterest otimizada para fotos verticais.
- **Busca por Dispositivo:** Filtro para buscar apenas fotos de modelos específicos de celular.
- **Preview com Marca d'Água:** Gerado dinamicamente para proteger seu trabalho.

### Fase 2: Upload e Processamento
- **Extrator de Metadados:** Ao subir a foto, o app deve ler automaticamente o EXIF/IPTC para preencher o modelo do celular e a localização.
- **Conversão WebP:** Transformação automática das imagens para formatos leves.

### Fase 3: Checkout e Download
- **Licenciamento Simplificado:** Botão de compra única via PIX (Stripe/Mercado Pago).
- **Liberação de Download:** Gerar link temporário e seguro para o arquivo original em alta resolução.

## 5. Estratégia de SEO Técnico
- **JSON-LD Image License:** Implementação do script que diz ao Google: "Esta imagem tem dono e este é o link para comprar a licença".
- **Slugs Semânticos:** URLs estruturadas como antigravity.app/foto/vertical-confeitaria-artesanal-iphone-15.
- **Alt Text Dinâmico:** Gerado com base nas tags da imagem para máxima acessibilidade.
