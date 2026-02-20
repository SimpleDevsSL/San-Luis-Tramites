import { SearchBar } from "@/components/search-bar"
import { GuideCard } from "@/components/guide-card"
import { guides } from "@/lib/guides"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.06),transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-20 lg:px-6 lg:pb-20 lg:pt-28">
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              Guia independiente y comunitaria
            </span>
            <h1 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {"Tenes que hacer un tramite en San Luis?"}
            </h1>
            <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
              Te explicamos paso a paso lo que necesitas, sin vueltas ni
              tecnicismos.
            </p>

            <div className="mt-8 w-full max-w-xl">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-6 lg:py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Tramites mas consultados
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Las guias que mas busca la gente de San Luis.
            </p>
          </div>
          <Link
            href="/tramites"
            className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:inline-flex"
          >
            Ver todos
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/tramites"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            Ver todos los tramites
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* CTA section */}
      <section className="mx-auto max-w-5xl px-4 pb-16 lg:px-6 lg:pb-20">
        <div className="rounded-xl border border-border bg-card p-8 text-center lg:p-12">
          <h2 className="text-xl font-bold text-foreground lg:text-2xl">
            {"No encontras lo que buscas?"}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Estamos trabajando para sumar mas guias. Si queres sugerir un
            tramite, escribinos.
          </p>
          <Link
            href="/sobre"
            className="mt-6 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Conoce el proyecto
          </Link>
        </div>
      </section>
    </>
  )
}
