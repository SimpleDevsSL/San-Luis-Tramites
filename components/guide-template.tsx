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
  Info,
} from "lucide-react"
import type { Guide } from "@/lib/guides"
import { CopyButton } from "./copy-button"

export function GuideTemplate({ guide }: { guide: Guide }) {
  const checklistText = guide.requisitos
    ?.map((r, i) => `${i + 1}. ${typeof r === "string" ? r : r.detalle}`)
    .join("\n") || ""

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 lg:px-6 lg:py-14">
      {/* Back link */}
      <Link
        href="/tramites"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Volver a tramites
      </Link>

      {/* Title & last updated */}
      <header className="mb-8">
        <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Guia para {guide.titulo} – San Luis
        </h1>
        <div className="mt-3 flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            Ultima actualizacion: {guide.fecha_ultima_actualizacion}
          </span>
        </div>
      </header>

      {/* Alert box */}
      <div className="mb-8 flex items-start gap-3 rounded-lg border border-warning/30 bg-warning/10 p-4">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning-foreground" />
        <p className="text-sm leading-relaxed text-warning-foreground">
          Esta es una guia informativa no oficial. La informacion puede cambiar.
          Verifica siempre en las fuentes oficiales antes de realizar tu tramite.
        </p>
      </div>

      {/* Prose content */}
      <div className="space-y-10">
        {/* Definicion */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Que es?
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {guide.definicion}
          </p>
        </section>

        {/* Destinatarios */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Para quien es?
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {guide.destinatarios}
          </p>
        </section>

        {/* Checklist */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            La Lista de Supermercado
          </h2>
          <p className="mb-4 text-xs text-muted-foreground">
            Lo que tenes que llevar, sin sorpresas.
          </p>
          <div className="rounded-lg border border-border bg-card p-5">
            {Array.isArray(guide.requisitos) && guide.requisitos.length > 0 ? (
              <ul className="space-y-3">
                {guide.requisitos.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">
                      {typeof req === "string" ? req : req.detalle}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-5 border-t border-border pt-4">
              <CopyButton text={checklistText} />
            </div>
          </div>
        </section>

        {/* Cuanto cuesta */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <DollarSign className="h-5 w-5 text-accent" />
            Cuanto cuesta?
          </h2>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm leading-relaxed text-foreground">
              {typeof guide.costo?.monto === "string" ? guide.costo.monto : "Consultar"}
            </p>

            {guide.costo?.formas_pago && (
              <div className="mt-4">
                <p className="mb-1.5 text-xs font-medium text-muted-foreground">
                  Formas de pago:
                </p>
                <div className="flex flex-wrap gap-2">
                  {guide.costo.formas_pago.split(",").map((fp, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {fp.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <p className="mt-3 text-xs text-muted-foreground">
              Actualizado: {typeof guide.costo?.fecha_actualizacion === "string" ? guide.costo.fecha_actualizacion : ""}
            </p>
          </div>
        </section>

        {/* Donde y cuando */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <MapPin className="h-5 w-5 text-accent" />
            Donde y cuando?
          </h2>
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="space-y-2 text-sm leading-relaxed text-foreground">
              <p>
                <span className="font-medium">Direccion: </span>
                {guide.sedes[0].direccion || "No disponible"}
              </p>
              <p>
                <span className="font-medium">Horarios: </span>
                {guide.sedes[0].horarios || "No disponible"}
              </p>
            </div>

            {guide.sedes[0].mapsUrl && (
              <a
                href={guide.sedes[0].mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MapPin className="h-4 w-4" />
                Ver ubicacion en Google Maps
              </a>
            )}
          </div>
        </section>

        {/* Consejo Puntano */}
        {guide.consejo_puntano && (
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Lightbulb className="h-5 w-5 text-accent" />
              El Truco Puntano
            </h2>
            <div className="rounded-lg border-l-4 border-accent bg-accent/10 p-5">
              <p className="text-sm italic leading-relaxed text-foreground">
                {guide.consejo_puntano}
              </p>
            </div>
          </section>
        )}

        {/* Enlaces oficiales */}
        {guide.enlacesOficiales && guide.enlacesOficiales.length > 0 && (
          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Enlaces oficiales
            </h2>
            <div className="flex flex-wrap gap-3">
              {guide.enlacesOficiales.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Fuentes */}
        {guide.fuentes_informacion && (
          <section>
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              Fuentes
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {guide.fuentes_informacion}
            </p>
          </section>
        )}
      </div>
    </article>
  )
}
