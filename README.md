# 🕵️‍♂️ AIFindr — AI-Powered People Discovery Engine

AIFindr is a cutting-edge AI-powered platform that helps users discover like-minded people based on **vibe**, **interests**, and **goals**. Just type a natural sentence like:

> "Find me creators who love coding, philosophy and VR"

… and AIFindr matches you with the most relevant profiles — backed by AI embeddings and vector similarity.

---

## 🚀 Tech Stack

| Layer | Tech |
|------|------|
| Frontend | [Next.js (App Router)](https://nextjs.org/docs/app) + Tailwind CSS |
| Backend | [Supabase](https://supabase.com) (PostgreSQL + Auth + Storage + Edge Functions) |
| AI Engine | [OpenAI Embeddings API](https://platform.openai.com/docs/guides/embeddings) |
| Vector Search | pgvector extension inside Supabase |
| Deployment Ready | Vercel or any Next.js compatible host |

---

## ✨ Features

- 💡 **Semantic search** powered by OpenAI embeddings
- 🔎 **Real-time vibe matching** with pgvector
- 🧠 AI-graded **persona similarity score**
- 🖼️ **Profile pictures** via [randomuser.me](https://randomuser.me)
- 🌈 Elegant UI with responsive design

---

## ✨ Project setup

Create .env.local file
```# .env.local
OPENAI_API_KEY=your-openai-api-key
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

```npm install```

```npm run dev```
