
import type { Digimon } from '../types/digimon'

const API_URL = 'https://digimon-api.vercel.app/api/digimon'

export async function getDigimon(): Promise<Digimon[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('No se pudieron cargar los Digimon')
  }

  return response.json()
}

export async function getDigimonByName(
  name: string
): Promise<Digimon | null> {
  const response = await fetch(
    `${API_URL}/name/${encodeURIComponent(name)}`
  )

  if (!response.ok) {
    throw new Error('No se pudo consultar el Digimon')
  }

  const data: Digimon[] = await response.json()

  return data.length > 0 ? data[0] : null
}

export async function getDigimonByLevel(
  level: string
): Promise<Digimon[]> {
  const response = await fetch(
    `${API_URL}/level/${encodeURIComponent(level)}`
  )

  if (!response.ok) {
    throw new Error('No se pudieron filtrar los Digimon')
  }

  return response.json()
}
