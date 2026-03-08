import { SearchBar } from "@/components/search-bar"

export default function LoadingTramites() {
    return (
        <section className="mx-auto max-w-5xl px-4 py-12 lg:px-6 lg:py-16">
            <div className="mb-10">
                <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Todos los tramites
                </h1>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    Busca el tramite que necesitas. Cada guia te explica paso a paso lo que
                    tenes que hacer.
                </p>
                <div className="mt-6 max-w-xl">
                    <SearchBar />
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="flex h-[200px] animate-pulse flex-col rounded-xl border border-border bg-card/50 p-6 shadow-sm"
                    />
                ))}
            </div>
        </section>
    )
}
