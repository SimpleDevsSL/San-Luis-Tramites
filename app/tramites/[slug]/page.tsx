import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { guides, getGuideBySlug } from "@/lib/guides"
import { GuideTemplate } from "@/components/guide-template"

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) return { title: "Tramite no encontrado" }

  return {
    title: `Guia: ${guide.title}`,
    description: guide.description,
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  return <GuideTemplate guide={guide} />
}
