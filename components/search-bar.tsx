"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { guides } from "@/lib/guides"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const filtered = query.trim()
    ? guides.filter(
        (g) =>
          g.title.toLowerCase().includes(query.toLowerCase()) ||
          g.shortTitle.toLowerCase().includes(query.toLowerCase()) ||
          g.description.toLowerCase().includes(query.toLowerCase())
      )
    : []

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative w-full max-w-xl">
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Buscar tramite (CIPE, Licencia, Rentas...)"
          className="h-12 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-sm text-foreground shadow-sm transition-shadow placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          aria-label="Buscar tramite"
        />
      </div>

      {open && filtered.length > 0 && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-lg border border-border bg-card p-1 shadow-lg">
          {filtered.map((guide) => (
            <Link
              key={guide.slug}
              href={`/tramites/${guide.slug}`}
              onClick={() => {
                setOpen(false)
                setQuery("")
              }}
              className="block rounded-md px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
            >
              <span className="font-medium">{guide.shortTitle}</span>
              <span className="ml-2 text-muted-foreground">{guide.description.slice(0, 60)}...</span>
            </Link>
          ))}
        </div>
      )}

      {open && query.trim() && filtered.length === 0 && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-lg border border-border bg-card p-4 shadow-lg">
          <p className="text-center text-sm text-muted-foreground">
            No encontramos resultados para &ldquo;{query}&rdquo;
          </p>
        </div>
      )}
    </div>
  )
}
