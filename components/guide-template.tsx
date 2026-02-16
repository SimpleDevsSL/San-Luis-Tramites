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
  ListOrdered,
  Info,
} from "lucide-react"
import type { Guide } from "@/lib/guides"
import { CopyButton } from "./copy-button"

export function GuideTemplate({ guide }: { guide: Guide }) {
  const checklistText = guide.requisitosCategorias
    ? guide.requisitosCategorias
        .map(
          (cat) =>
            `${cat.categoria}:\n${cat.items.map((item, i) => `  ${i + 1}. ${item}`).join("\n")}`
        )
        .join("\n\n")
    : guide.requisitos.map((r, i) => `${i + 1}. ${r}`).join("\n")

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
          {"Guia para "}
          {guide.title}
          {" \u2013 San Luis"}
        </h1>
        <div className="mt-3 flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            {"Ultima actualizacion: "}
            {guide.lastUpdated}
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
        {/* Que es */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {"Que es?"}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {guide.queEs}
          </p>
        </section>

        {/* Para quien es */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {"Para quien es?"}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {guide.paraQuienEs}
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
            {guide.requisitosCategorias ? (
              <div className="space-y-6">
                {guide.requisitosCategorias.map((cat, catIdx) => (
                  <div key={catIdx}>
                    <h3 className="mb-3 text-sm font-semibold text-foreground">
                      {cat.categoria}
                    </h3>
                    <ul className="space-y-2.5">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm leading-relaxed text-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-3">
                {guide.requisitos.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {guide.requisitosAviso && (
              <div className="mt-5 flex items-start gap-2.5 rounded-md border border-primary/20 bg-primary/5 p-3">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-xs font-medium leading-relaxed text-foreground">
                  {guide.requisitosAviso}
                </p>
              </div>
            )}

            <div className="mt-5 border-t border-border pt-4">
              <CopyButton text={checklistText} />
            </div>
          </div>
        </section>

        {/* Cuanto cuesta */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <DollarSign className="h-5 w-5 text-accent" />
            {"Cuanto cuesta?"}
          </h2>
          <div className="rounded-lg border border-border bg-card p-5">
            {guide.costoDetalles ? (
              <div className="space-y-2">
                {guide.costoDetalles.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-md bg-secondary/50 px-3 py-2"
                  >
                    <span className="text-sm text-foreground">{item.concepto}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {item.monto}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm leading-relaxed text-foreground">
                {guide.costo.monto}
              </p>
            )}
            {guide.costo.formasDePago.length > 0 && (
              <div className="mt-4">
                <p className="mb-1.5 text-xs font-medium text-muted-foreground">
                  Formas de pago:
                </p>
                <div className="flex flex-wrap gap-2">
                  {guide.costo.formasDePago.map((fp, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {fp}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <p className="mt-3 text-xs text-muted-foreground">
              {"Actualizado: "}
              {guide.costo.actualizacion}
            </p>
          </div>
        </section>

        {/* Donde y cuando */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <MapPin className="h-5 w-5 text-accent" />
            {"Donde y cuando?"}
          </h2>
          <div className="rounded-lg border border-border bg-card p-5">
            {guide.ubicaciones ? (
              <div className="space-y-4">
                {guide.ubicaciones.map((ub, idx) => (
                  <div key={idx}>
                    <p className="text-sm font-medium text-foreground">{ub.nombre}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {ub.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2 text-sm leading-relaxed text-foreground">
                <p>
                  <span className="font-medium">{"Direccion: "}</span>
                  {guide.dondeYCuando.direccion}
                </p>
                <p>
                  <span className="font-medium">{"Horarios: "}</span>
                  {guide.dondeYCuando.horarios}
                </p>
              </div>
            )}
            <a
              href={guide.dondeYCuando.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MapPin className="h-4 w-4" />
              Ver ubicacion en Google Maps
            </a>
          </div>
        </section>

        {/* Paso a Paso */}
        {guide.pasos && guide.pasos.length > 0 && (
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <ListOrdered className="h-5 w-5 text-accent" />
              Paso a Paso Simplificado
            </h2>
            <div className="space-y-4">
              {guide.pasos.map((paso, idx) => (
                <div
                  key={idx}
                  className="relative rounded-lg border border-border bg-card p-5 pl-14"
                >
                  <span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {idx + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">
                    {paso.titulo}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {paso.descripcion}
                  </p>
                  {paso.detalles && (
                    <ul className="mt-3 space-y-1.5">
                      {paso.detalles.map((d, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Truco Puntano */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Lightbulb className="h-5 w-5 text-accent" />
            El Truco Puntano
          </h2>
          <div className="rounded-lg border-l-4 border-accent bg-accent/10 p-5">
            <p className="text-sm italic leading-relaxed text-foreground">
              {guide.trucoPuntano}
            </p>
          </div>
        </section>

        {/* Enlaces oficiales */}
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

        {/* Fuentes */}
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
            <BookOpen className="h-5 w-5 text-muted-foreground" />
            Fuentes
          </h2>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {guide.fuentes}
          </p>
        </section>
      </div>
    </article>
  )
}
