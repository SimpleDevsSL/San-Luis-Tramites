import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Users, Heart, Shield, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre el proyecto",
  description:
    "Mi Proximo Tramite es un proyecto independiente y comunitario que simplifica la informacion de tramites en San Luis.",
}

const values = [
  {
    icon: Users,
    title: "Comunitario",
    description:
      "Creado por vecinos para vecinos. No somos una entidad gubernamental, somos parte de la comunidad que quiere ayudar.",
  },
  {
    icon: Shield,
    title: "Independiente",
    description:
      "No estamos afiliados a ningun organismo oficial. Recopilamos informacion de fuentes publicas y la traducimos a un lenguaje claro.",
  },
  {
    icon: Clock,
    title: "Practico",
    description:
      "Sabemos lo que es perder un dia por no tener la informacion correcta. Nuestro objetivo es ahorrarte tiempo y frustracion.",
  },
  {
    icon: Heart,
    title: "De codigo abierto",
    description:
      "Creemos en la colaboracion. Si queres sumar una guia o corregir algo, sos bienvenido.",
  },
]

export default function SobrePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 lg:px-6 lg:py-16">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Volver al inicio
      </Link>

      <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        {"Por que existe este proyecto?"}
      </h1>

      <div className="prose prose-slate mt-8 max-w-none">
        <p className="text-base leading-relaxed text-muted-foreground">
          Cualquiera que haya intentado hacer un tramite en San Luis sabe lo
          frustrante que puede ser: paginas oficiales confusas, requisitos que
          nadie te aclara, horarios que no coinciden, y filas interminables si
          no sabes cuando ir.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Mi Proximo Tramite</strong> nace
          para resolver eso. Es una guia simple, gratuita e independiente que
          recopila la informacion de los tramites mas comunes en San Luis y la
          presenta en un lenguaje claro, directo y sin burocracia.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          No reemplazamos a los sitios oficiales. Los complementamos. Te
          decimos que necesitas llevar, cuanto puede costarte, adonde ir y, lo
          mas importante, esos tips practicos que solo un puntano te puede dar.
        </p>
      </div>

      {/* Values grid */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {values.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <item.icon className="h-4.5 w-4.5" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* SimpleDevs attribution */}
      <div className="mt-12 rounded-xl border border-border bg-card p-6 text-center lg:p-8">
        <p className="text-sm font-medium text-foreground">
          {'Hecho con '}
          <span className="text-red-500">{'\u2764\uFE0F'}</span>
          {' por SimpleDevs'}
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Construimos proyectos open source y colaboramos en desarrollos
          estrategicos. Si queres sumarte o proponer una mejora, nos encanta
          escucharte.
        </p>
      </div>
    </section>
  )
}
