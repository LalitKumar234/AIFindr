import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { getUserEmbedding } from '@/lib/embeddings'


type UserProfile = {
  id: string
  full_name: string
  email: string
  vibe: string
  similarity: number
  interests: string[]
  goals: string[]
  location: string
  created_at: string
  vector: number[]
}

export async function POST(req: Request) {
  try {
    const { query } = await req.json()

    if (!query) {
      return NextResponse.json({ error: 'Missing query' }, { status: 400 })
    }

    const vector = await getUserEmbedding(query)

    const { data, error } = await supabase.rpc('match_user_profiles', {
      query_embedding: vector,
      match_count: 10,
    })

    const filteredData = data.filter((user: UserProfile) => user.similarity > 0.8)

    if (error) {
      console.error('Supabase RPC error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ results: filteredData })
  } catch (err: unknown) {
    console.error('API error:', err)
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}