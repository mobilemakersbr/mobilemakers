import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useInteractions } from './interactions'
import { createClient } from '@/utils/supabase/client'

// Pegamos o mock que definimos no setup
const supabase = createClient()

describe('useInteractions Hook', () => {
  it('deve chamar o supabase para alternar o like', async () => {
    const { result } = renderHook(() => useInteractions())
    
    await result.current.toggleLike('photo-123', 'user-456', false)

    expect(supabase.from).toHaveBeenCalledWith('likes')
    expect(supabase.insert).toHaveBeenCalledWith({
      photo_id: 'photo-123',
      user_id: 'user-456'
    })
  })

  it('deve chamar o supabase para adicionar um comentário', async () => {
    const { result } = renderHook(() => useInteractions())
    
    await result.current.addComment('photo-123', 'user-456', 'Lindo registro!')

    expect(supabase.from).toHaveBeenCalledWith('comments')
    expect(supabase.insert).toHaveBeenCalledWith({
      photo_id: 'photo-123',
      user_id: 'user-456',
      content: 'Lindo registro!'
    })
  })
})
