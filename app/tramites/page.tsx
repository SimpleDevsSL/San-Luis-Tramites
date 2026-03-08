import type { Metadata } from "next"
import { SearchBar } from "@/components/search-bar"
import { StaggeredGrid } from "@/components/staggered-grid"
import { getGuides } from "@/lib/guides"

export const metadata: Metadata = {
  title: "Todos los Tramites",
  description:
    "Lista completa de guias de tramites en San Luis. CIPE, Licencia de Conducir, Rentas, DOSEP, Boleto Estudiantil y mas.",
}

export default async function TramitesPage() {
  const guides = await getGuides()

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 lg:px-6 lg:py-16">
      <div className="mb-10">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Todos los trámites
        </h1>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
          Buscá el trámite que necesitás. Cada guía te explica paso a paso lo que
          tenés que hacer para resolverlo fácilmente.
        </p>
        <div className="mt-8 max-w-xl">
          <SearchBar />
        </div>
      </div>

      <StaggeredGrid guides={guides} />
    </section>
  )
}
