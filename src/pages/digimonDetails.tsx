
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
        if (active) {
          setLoading(false)
        }
      }
    }

    loadDigimon()

    return () => {
      active = false
    }
  }, [name])

  if (loading) {
    return <Loading />
  }

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
    <main className="min-h-screen bg-slate-950 p-8 text-white">

      <Link to="/explore" className="text-cyan-400">
        ← Volver a explorar
      </Link>

      <section className="mx-auto mt-8 max-w-3xl rounded-xl bg-slate-900 p-8">

        <img
          src={digimon.img}
          alt={`Imagen de ${digimon.name}`}
          className="mx-auto h-64 object-contain"
        />

        <h1 className="mt-6 text-center text-4xl font-bold">
          {digimon.name}
        </h1>

        <p className="mt-4 text-center text-cyan-400">
          Nivel: {digimon.level}
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              if (favorite) {
                setConfirmOpen(true)
              } else {
                addFavorite(digimon)
              }
            }}
            aria-pressed={favorite}
            className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-slate-950"
          >
            {favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          </button>
        </div>

        <ConfirmDialog
          isOpen={confirmOpen}
          title="Eliminar de favoritos"
          message={`¿Estás seguro de que deseas eliminar a ${digimon.name} de tus favoritos?`}
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
