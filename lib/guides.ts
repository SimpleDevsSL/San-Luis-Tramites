"use server"

import axios from "axios"

// export interface RequisitosCategoria {
//   categoria: string
//   items: string[]
// }

// export interface PasoAPaso {
//   titulo: string
//   descripcion: string
//   detalles?: string[]
// }

// export interface Ubicacion {
//   nombre: string
//   descripcion: string
// }

export interface Guide {
  id: number
  slug: string
  titulo: string
  titulo_abreviado: string
  description: string
  fecha_ultima_actualizacion: string
  definicion: string
  destinatarios: string
  requisitos: Array<{ detalle: string, id: number }>
  costo: {
    monto: string
    formas_pago: string
    fecha_actualizacion: string
  }
  sedes: Array<{
    direccion: string
    horarios: string
    mapsUrl: string
  }>
  consejo_puntano: string
  enlacesOficiales: Array<{ label: string; url: string }>
  fuentes_informacion: string
  // requisitosCategorias?: Array<{ categoria: string; items: string[] }>
  // requisitosAviso?: string
  // costoDetalles?: Array<{ concepto: string; monto: string }>
  // ubicaciones?: Array<{ nombre: string; descripcion: string }>
  // pasos?: Array<{ titulo: string; descripcion: string; detalles?: string[] }>
  // sedes?: {
  //   direccion: string
  //   horarios: string
  //   mapsUrl: string
  // }
}

export async function getGuides(): Promise<Guide[]> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tramites/`
    )
    const guidesData = response.data.map((tramite: Guide) => {
      return {
        ...tramite,
        slug: tramite.titulo_abreviado.toLowerCase().replace(/\s+/g, "-")
      }
    })
    return guidesData

  } catch (error) {
    console.error("Error fetching guides:", error)
    // Fallback: retorna array vacío o datos locales
    return []
  }
}

// Si quieres obtener una guía específica
export async function getGuideById(id: number): Promise<Guide | null> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tramites/${id}/`
    )
    return { ...response.data, slug: response.data.titulo_abreviado.toLowerCase().replace(/\s+/g, "-") }
  } catch (error) {
    console.error("Error fetching guide:", error)
    return null
  }
}
