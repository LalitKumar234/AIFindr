"use client"

import React, { useState } from "react"
import SearchBox from "./SearchBox"
import ProfileCard from "./ProfileCard"

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

export default function HomePage() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<UserProfile[]>([]);

  console.log(results, "results")

  const handleSearch = async () => {
    if (!query) return

    setLoading(true)

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      const data = await res.json()
      setResults(data.results || [])
    } catch (err) {
      console.error("Search error:", err)
    }

    setLoading(false)
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center">Find People by Vibe 🧠</h1>

      <SearchBox
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
        loading={loading}
      />

      {results.length > 0 && (
        <div className="space-y-4 mt-6">
          <h2 className="text-lg font-medium text-gray-700">Results</h2>
          {results.map((user) => (
            <div key={user.id} className="relative">
              {/* Match score badge */}
              <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-medium px-2 py-0.5 rounded-full z-10">
                {(user.similarity * 100).toFixed(0)}% Match
              </div>
              <ProfileCard
                full_name={user.full_name}
                email={user.email}
                interests={user.interests}
                goals={user.goals}
                vibe={user.vibe}
                imageUrl={`https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'women' : 'men'}/${Math.floor(Math.random() * 70)}.jpg`}
              />
            </div>
          ))}
        </div>
      )}
      
      {results.length === 0 && !loading && (
        <div className="mt-6 opacity-60">
          <p className="text-center text-sm text-gray-500 mb-4">No results yet. Try searching for people!</p>
          <ProfileCard />
        </div>
      )}
    </main>
  )
}