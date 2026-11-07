
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getDigimonByName } from '../api/digimon_api'
import { useFavorites } from '../context/FavoritesContext'

import Loading from '../components/Cargando'
import ErrorScreen from '../components/ErrorScreen'
import ConfirmDialog from '../components/ConfirmDialog'

import type { Digimon } from '../types/digimon'

function DigimonDetails() {
  const { name } = useParams<{ name: string }>()

  const [digimon, setDigimon] = useState<Digimon | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [confirmOpen, setConfirmOpen] = useState(false)

  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  useEffect(() => {
    let active = true

    async function loadDigimon() {
      try {
        setLoading(true)
        setError(null)
        setDigimon(null)

        if (!name) {
          throw new Error('No se proporcionó un nombre de Digimon')
        }

        const data = await getDigimonByName(name)

        if (active) {
          if (!data) {
            setError('No se encontró el Digimon solicitado')
          } else {
            setDigimon(data)
          }
        }
      } catch (err: unknown) {
        if (active) {
          setError(
            err instanceof Error
              ? err.message
              : 'Ocurrió un error al consultar el Digimon'
          )
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    loadDigimon()

    return () => {
      active = false
    }
  }, [name])

  if (loading) return <Loading />

  if (error || !digimon) {
    return (
      <ErrorScreen
        message={error || 'No se encontró el Digimon solicitado'}
        onRetry={() => window.location.reload()}
      />
    )
  }

  const favorite = isFavorite(digimon.name)

  return (
    <main className="min-h-screen bg-[#F5F0E5] px-6 py-12">
      <section className="mx-auto max-w-6xl">

        <Link
          to="/explore"
          className="inline-flex items-center gap-2 font-semibold text-[#718FA6] transition hover:text-[#405D78]"
        >
          ← Volver a la enciclopedia
        </Link>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#E5E1D8] bg-white shadow-sm">
          <div className="grid md:grid-cols-2">

            <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[#DCEAF1] p-8 md:min-h-[520px]">
              <div className="absolute h-64 w-64 rounded-full bg-white/70" />

              <img
                src={digimon.img}
                alt={`Imagen de ${digimon.name}`}
                className="relative z-10 max-h-[400px] w-full object-contain"
              />

              <span className="absolute bottom-6 left-6 rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#718FA6]">
                Digital Monster
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A58B53]">
                Digimon database
              </span>

              <h1 className="mt-4 text-4xl font-black text-[#405D78] sm:text-5xl">
                {digimon.name}
              </h1>

              <p className="mt-4 leading-relaxed text-[#87949C]">
                Información registrada en la enciclopedia del Mundo Digital.
              </p>

              <div className="mt-9 rounded-2xl bg-[#F2F5F4] p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AA5AC]">
                  Nivel evolutivo
                </span>

                <p className="mt-2 text-2xl font-bold text-[#668A7B]">
                  {digimon.level}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (favorite) {
                    setConfirmOpen(true)
                  } else {
                    addFavorite(digimon)
                  }
                }}
                aria-pressed={favorite}
                className={`mt-7 rounded-xl px-6 py-4 font-bold transition ${
                  favorite
                    ? 'bg-[#F5E4E0] text-[#A66D64] hover:bg-[#E9C9C2]'
                    : 'bg-[#F0E7CC] text-[#927746] hover:bg-[#E8D9AF]'
                }`}
              >
                {favorite ? '★ Guardado en mi colección' : '☆ Agregar a mi colección'}
              </button>

              <p className="mt-4 text-center text-xs text-[#A0AAA9]">
                Tu colección se conserva al cambiar de página.
              </p>
            </div>
          </div>
        </div>

        <ConfirmDialog
          isOpen={confirmOpen}
          title="Eliminar de mi colección"
          message={`¿Deseas quitar a ${digimon.name} de tus favoritos?`}
          onConfirm={() => {
            removeFavorite(digimon.name)
            setConfirmOpen(false)
          }}
          onCancel={() => setConfirmOpen(false)}
        />
      </section>
    </main>
  )
}

export default DigimonDetails
