export interface Photo {
  id: string
  url: string
  title: string
  author: string
  category: string
  aspectRatio: "portrait" | "landscape" | "square"
  user_id?: string
}

export const photos: Photo[] = [
  {
    id: "1",
    url: "https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Café da Manhã Autêntico",
    author: "Renata Moraes",
    category: "Lifestyle",
    aspectRatio: "portrait",
  },
  {
    id: "2",
    url: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Vibe Urbana",
    author: "Renata Moraes",
    category: "Urbano",
    aspectRatio: "landscape",
  },
  {
    id: "3",
    url: "https://images.pexels.com/photos/1630344/pexels-photo-1630344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Detalhes de Decoração",
    author: "Renata Moraes",
    category: "Interior",
    aspectRatio: "portrait",
  },
  {
    id: "4",
    url: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Home Office Minimalista",
    author: "Renata Moraes",
    category: "Trabalho",
    aspectRatio: "square",
  },
  {
    id: "5",
    url: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Caminhada na Natureza",
    author: "Renata Moraes",
    category: "Natureza",
    aspectRatio: "portrait",
  },
  {
    id: "6",
    url: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Look do Dia",
    author: "Renata Moraes",
    category: "Moda",
    aspectRatio: "portrait",
  },
]
