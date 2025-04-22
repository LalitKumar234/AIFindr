import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { getUserEmbedding } from "@/utils/embeddings"

export async function GET() {
  try {
    const { data: users, error } = await supabase
      .from("user_profiles")
      .select("*")
      .is("vector", null) // only embed users without vectors

    if (error) {
      console.error("❌ Supabase fetch error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    const updated: string[] = []

    for (const user of users) {
      const description = `${user.full_name} is a ${user.vibe}. Their interests include ${user.interests?.join(", ")}. Goals: ${user.goals?.join(", ")}.`
      try {
        const embedding = await getUserEmbedding(description)

        const { error: updateError } = await supabase
          .from("user_profiles")
          .update({ vector: embedding })
          .eq("id", user.id)

        if (updateError) {
          console.error(`❌ Failed to update ${user.full_name}`, updateError)
        } else {
          updated.push(user.full_name)
          console.log(`✅ Embedded ${user.full_name}`)
        }
      } catch (err) {
        console.error(`❌ Embedding error for ${user.full_name}`, err)
      }
    }

    return NextResponse.json({ message: "Embeddings updated", updated })
  } catch (err: unknown) {
    console.error("❌ Internal error:", err)
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}