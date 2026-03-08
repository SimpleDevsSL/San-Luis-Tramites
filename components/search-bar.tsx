"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { getGuides, type Guide } from "@/lib/guides"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function SearchBar() {
  const [open, setOpen] = useState(false)
  const [guides, setGuides] = useState<Guide[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function loadGuides() {
      try {
        const data = await getGuides()
        setGuides(data)
      } catch (error) {
        console.error("Error loading guides:", error)
      } finally {
        setLoading(false)
      }
    }
    loadGuides()
  }, [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative inline-flex h-12 w-full items-center justify-start rounded-xl border border-border bg-card px-4 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent/50 hover:text-accent-foreground sm:pr-12 md:w-[500px]"
      >
        <Search className="mr-2 h-4 w-4 shrink-0" />
        <span>Buscar trámite (CIPE, Licencia, Rentas...)</span>
        <kbd className="pointer-events-none absolute right-4 top-3.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscar trámite..." disabled={loading} />
        <CommandList>
          {loading && <CommandEmpty>Cargando trámites...</CommandEmpty>}
          {!loading && <CommandEmpty>No encontramos resultados.</CommandEmpty>}
          <CommandGroup heading="Trámites">
            {guides.map((guide) => (
              <CommandItem
                key={guide.id}
                onSelect={() => {
                  setOpen(false)
                  router.push(`/tramites/${guide.id}`)
                }}
                className="flex flex-col items-start gap-1 py-3"
              >
                <span className="font-medium text-foreground">{guide.titulo_abreviado}</span>
                <span className="text-xs text-muted-foreground line-clamp-1">{guide.description}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
