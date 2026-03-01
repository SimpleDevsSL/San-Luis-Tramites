import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getGuideById } from "@/lib/guides"
import { GuideTemplate } from "@/components/guide-template"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  // Aquí está el cambio: await params
  const { id } = await params
  const numId = parseInt(id)
  
  if (isNaN(numId)) {
    return {
      title: "Trámite no encontrado",
    }
  }

  const guide = await getGuideById(numId)

  if (!guide) {
    return {
      title: "Trámite no encontrado",
    }
  }

  return {
    title: guide.titulo,
    description: guide.description,
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // También aquí: await params
  const { id } = await params
  const numId = parseInt(id)
  
  if (isNaN(numId)) {
    notFound()
  }

  const guide = await getGuideById(numId)

  if (!guide) {
    notFound()
  }

  return <GuideTemplate guide={guide} />
}
