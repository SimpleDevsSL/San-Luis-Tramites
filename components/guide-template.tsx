"use client"

import Link from "next/link"
import {
  AlertTriangle,
  MapPin,
  ExternalLink,
  Lightbulb,
  ArrowLeft,
  CircleCheck,
  DollarSign,
  Clock,
  BookOpen,
  Share2,
} from "lucide-react"
import type { Guide } from "@/lib/guides"
import { CopyButton } from "./copy-button"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
}

export function GuideTemplate({ guide }: { guide: Guide }) {
  const checklistText = guide.requisitos
    ?.map((r, i) => `${i + 1}. ${typeof r === "string" ? r : r.detalle}`)
    .join("\n") || ""

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: guide.titulo,
          text: `Mirá esta guía sobre cómo hacer el trámite de ${guide.titulo_abreviado} en Mi Próximo Trámite.`,
          url: window.location.href,
        })
      } catch (err) {
        console.error("Error al compartir:", err)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Enlace copiado al portapapeles")
    }
  }

  return (
    <motion.article
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-3xl px-4 py-10 lg:px-6 lg:py-14"
    >
      {/* Back link */}
      <motion.div variants={item}>
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/tramites"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a trámites
          </Link>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            <Share2 className="h-3.5 w-3.5" />
            Compartir
          </button>
        </div>
      </motion.div>

      {/* Title & last updated */}
      <motion.header variants={item} className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Guía para {guide.titulo} – San Luis
        </h1>
        <div className="mt-4 flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">
            Última actualización: {guide.fecha_ultima_actualizacion}
          </span>
        </div>
      </motion.header>

      {/* Alert box */}
      <motion.div variants={item} className="mb-10 flex items-start gap-3 rounded-xl border border-warning/30 bg-warning/10 p-5 shadow-sm">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning-foreground" />
        <p className="text-sm leading-relaxed text-warning-foreground">
          Esta es una guía informativa no oficial. La información puede cambiar.
          Verificá siempre en las fuentes oficiales antes de realizar tu trámite.
        </p>
      </motion.div>

      {/* Prose content */}
      <div className="space-y-12">
        {/* Definición */}
        <motion.section variants={item}>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            ¿Qué es?
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {guide.definicion}
          </p>
        </motion.section>

        {/* Destinatarios */}
        <motion.section variants={item}>
          <h2 className="mb-3 text-xl font-bold text-foreground">
            ¿Para quién es?
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {guide.destinatarios}
          </p>
        </motion.section>

        {/* Checklist */}
        <motion.section variants={item}>
          <h2 className="mb-1 text-xl font-bold text-foreground">
            La Lista de Supermercado
          </h2>
          <p className="mb-5 text-sm font-medium text-muted-foreground">
            Lo que tenés que llevar, sin sorpresas.
          </p>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            {Array.isArray(guide.requisitos) && guide.requisitos.length > 0 ? (
              <ul className="space-y-4">
                {guide.requisitos.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex shrink-0 items-center justify-center rounded-full bg-primary/10 p-1">
                      <CircleCheck className="h-5 w-5 text-primary" />
                    </div>
                    <span className="pt-0.5 text-base leading-relaxed text-card-foreground">
                      {typeof req === "string" ? req : req.detalle}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-6 border-t border-border pt-5">
              <CopyButton text={checklistText} />
            </div>
          </div>
        </motion.section>

        {/* Cuanto cuesta */}
        <motion.section variants={item}>
          <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-foreground">
            <DollarSign className="h-6 w-6 text-accent" />
            ¿Cuánto cuesta?
          </h2>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <p className="text-base font-medium leading-relaxed text-card-foreground">
              {typeof guide.costo?.monto === "string" ? guide.costo.monto : "Consultar"}
            </p>

            {guide.costo?.formas_pago && (
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Formas de pago aceptadas
                </p>
                <div className="flex flex-wrap gap-2">
                  {guide.costo.formas_pago.split(",").map((fp, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                    >
                      {fp.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <p className="mt-4 text-xs font-medium text-muted-foreground/80">
              Datos actualizados el: {typeof guide.costo?.fecha_actualizacion === "string" ? guide.costo.fecha_actualizacion : ""}
            </p>
          </div>
        </motion.section>

        {/* Donde y cuando */}
        {guide.sedes && guide.sedes.length > 0 && (
          <motion.section variants={item}>
            <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-foreground">
              <MapPin className="h-6 w-6 text-accent" />
              ¿Dónde y cuándo?
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              {guide.sedes.map((sede, idx) => (
                <div key={idx} className="flex-1 rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="space-y-4 text-sm leading-relaxed text-card-foreground">
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Dirección</span>
                      <span className="font-medium text-base">{sede.direccion || "No disponible"}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Horarios de atención</span>
                      <span className="font-medium text-base">{sede.horarios || "No disponible"}</span>
                    </div>
                  </div>

                  {sede.mapsUrl && (
                    <a
                      href={sede.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-[1.02]"
                    >
                      <MapPin className="h-4 w-4" />
                      Abrir en Google Maps
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Consejo Puntano */}
        {guide.consejo_puntano && (
          <motion.section variants={item}>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
              El Truco Puntano
            </h2>
            <div className="rounded-xl border-l-4 border-yellow-500 bg-yellow-500/10 p-6 shadow-sm dark:bg-yellow-500/5">
              <p className="text-base italic leading-relaxed text-foreground/90">
                &ldquo;{guide.consejo_puntano}&rdquo;
              </p>
            </div>
          </motion.section>
        )}

        {/* Enlaces oficiales */}
        {guide.enlacesOficiales && guide.enlacesOficiales.length > 0 && (
          <motion.section variants={item}>
            <h2 className="mb-4 text-xl font-bold text-foreground">
              Enlaces oficiales
            </h2>
            <div className="flex flex-wrap gap-3">
              {guide.enlacesOficiales.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-secondary hover:scale-[1.02]"
                >
                  {link.label}
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </motion.section>
        )}

        {/* Fuentes */}
        {guide.fuentes_informacion && (
          <motion.section variants={item}>
            <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              Fuentes informativas
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {guide.fuentes_informacion}
            </p>
          </motion.section>
        )}
      </div>
    </motion.article>
  )
}
