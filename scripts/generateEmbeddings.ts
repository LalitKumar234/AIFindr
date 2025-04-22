import { supabase } from "@/lib/supabase";
import { getUserEmbedding } from "@/utils/embeddings";

const generateEmbeddings = async () => {
  const { data: users, error } = await supabase.from("user_profiles").select("*");

  if (error) throw error;

  for (const user of users) {
    const description = `${user.full_name} is a ${user.vibe}. Their interests include ${user.interests?.join(", ")}. Goals: ${user.goals?.join(", ")}.`;
    const embedding = await getUserEmbedding(description);

    await supabase
      .from("user_profiles")
      .update({ vector: embedding })
      .eq("id", user.id);

    console.log(`✅ Updated embedding for ${user.full_name}`);
  }
};

generateEmbeddings();