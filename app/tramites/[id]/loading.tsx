import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LoadingGuide() {
    return (
        <article className="mx-auto max-w-3xl px-4 py-10 lg:px-6 lg:py-14 animate-pulse">
            <Link
                href="/tramites"
                className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground"
            >
                <ArrowLeft className="h-3.5 w-3.5" />
                Volver a tramites
            </Link>

            <header className="mb-8">
                <div className="h-10 w-3/4 rounded-lg bg-border/50"></div>
                <div className="mt-4 h-4 w-1/3 rounded bg-border/50"></div>
            </header>

            <div className="mb-8 h-20 w-full rounded-lg bg-warning/10 border border-warning/20"></div>

            <div className="space-y-10">
                <section>
                    <div className="mb-4 h-6 w-32 rounded bg-border/50"></div>
                    <div className="space-y-2">
                        <div className="h-4 w-full rounded bg-card"></div>
                        <div className="h-4 w-full rounded bg-card"></div>
                        <div className="h-4 w-2/3 rounded bg-card"></div>
                    </div>
                </section>

                <section>
                    <div className="mb-4 h-6 w-48 rounded bg-border/50"></div>
                    <div className="space-y-2">
                        <div className="h-4 w-full rounded bg-card"></div>
                        <div className="h-4 w-5/6 rounded bg-card"></div>
                    </div>
                </section>

                <section>
                    <div className="mb-4 h-6 w-40 rounded bg-border/50"></div>
                    <div className="rounded-lg border border-border bg-card p-5">
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="h-4 w-4 shrink-0 rounded-full bg-border/50"></div>
                                <div className="h-4 w-full rounded bg-border/30"></div>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-4 w-4 shrink-0 rounded-full bg-border/50"></div>
                                <div className="h-4 w-4/5 rounded bg-border/30"></div>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-4 w-4 shrink-0 rounded-full bg-border/50"></div>
                                <div className="h-4 w-3/5 rounded bg-border/30"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </article>
    )
}
