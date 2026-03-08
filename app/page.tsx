"use client"

import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import TramitesGrid from "@/components/TramitesGrid"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-5xl px-4 pb-16 pt-20 lg:px-6 lg:pb-24 lg:pt-32"
        >
          <div className="flex flex-col items-center text-center">
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground shadow-sm"
            >
              Guía independiente y comunitaria
            </motion.span>
            <h1 className="max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              ¿Tenés que hacer un trámite en San Luis?
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Te explicamos paso a paso lo que necesitás, sin vueltas ni
              tecnicismos. Rápido y fácil.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10 w-full max-w-2xl"
            >
              <SearchBar />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Guides Section */}
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Trámites más consultados
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Las guías que más busca la gente de San Luis.
            </p>
          </div>
          <Link
            href="/tramites"
            className="hidden items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80 sm:inline-flex"
          >
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <TramitesGrid />

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/tramites"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            Ver todos los trámites
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA section */}
      <section className="mx-auto max-w-5xl px-4 pb-16 lg:px-6 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-lg lg:p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
              ¿No encontrás lo que buscás?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Estamos trabajando todos los días para sumar más guías. Si querés sugerir un
              trámite o colaborar, escribinos.
            </p>
            <Link
              href="/sobre"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105"
            >
              Conocé el proyecto
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
