import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-semibold text-foreground">
              Mi Proximo Tramite
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Traducimos la burocracia a lenguaje humano.
            </p>
          </div>

          <nav className="flex gap-6" aria-label="Links del pie de pagina">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Inicio
            </Link>
            <Link
              href="/tramites"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Tramites
            </Link>
            <Link
              href="/sobre"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Sobre el proyecto
            </Link>
          </nav>
        </div>

        <div className="mt-8 rounded-lg border border-border bg-muted/50 p-4">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Este sitio es un proyecto independiente y comunitario. No estamos
            afiliados ni representamos al Gobierno de la Provincia de San Luis
            ni a la Municipalidad. La informacion es recopilada de fuentes
            publicas para facilitar su comprension.
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {'Hecho con '}
          <span className="text-red-500">{'\u2764\uFE0F'}</span>
          {' por SimpleDevs'}
        </p>
      </div>
    </footer>
  )
}
