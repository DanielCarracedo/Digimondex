
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useFavorites } from '../context/FavoritesContext'
import ConfirmDialog from '../components/ConfirmDialog'

function Favorites() {
  const { favorites, removeFavorite } = useFavorites()
  const [selectedName, setSelectedName] = useState<string | null>(null)

  function confirmRemoval() {
    if (!selectedName) return

    removeFavorite(selectedName)
    setSelectedName(null)
  }

  return (
    <main className="min-h-screen bg-[#F5F0E5] px-6 py-12">
      <section className="mx-auto max-w-7xl">

        <div className="rounded-[2rem] bg-[#F0E7CC] p-8 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A58B53]">
            Tu aventura personal
          </span>

          <h1 className="mt-3 text-4xl font-black text-[#665B43]">
            Mi colección
          </h1>

          <p className="mt-3 text-[#857957]">
            Aquí encontrarás todos los Digimon que has decidido guardar.
          </p>

          <div className="mt-6 inline-flex rounded-full bg-white/70 px-5 py-3">
            <span className="font-bold text-[#927746]">
              {favorites.length} Digimon guardados
            </span>
          </div>
        </div>

        {favorites.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-[#E5E1D8] bg-white p-12 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF1F4] text-3xl">
              ☆
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#405D78]">
              Tu colección está vacía
            </h2>

            <p className="mt-3 text-[#87949C]">
              Todavía no has guardado ningún compañero digital.
            </p>

            <Link
              to="/explore"
              className="mt-7 inline-block rounded-full bg-[#A9C9DF] px-7 py-3 font-bold text-[#405D78] transition hover:bg-[#92B9D3]"
            >
              Descubrir Digimon
            </Link>
          </div>
        ) : (
          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favorites.map((digimon) => (
              <article
                key={digimon.name}
                className="overflow-hidden rounded-3xl border border-[#E5E1D8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Link
                  to={`/digimon/${encodeURIComponent(digimon.name)}`}
                  aria-label={`Ver detalles de ${digimon.name}`}
                  className="flex h-52 items-center justify-center bg-[#EAF1F4] p-5"
                >
                  <img
                    src={digimon.img}
                    alt={`Imagen de ${digimon.name}`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </Link>

                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#405D78]">
                    {digimon.name}
                  </h2>

                  <p className="mt-2 text-sm text-[#9A875C]">
                    Nivel: {digimon.level}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedName(digimon.name)}
                    className="mt-5 w-full rounded-xl bg-[#F5E4E0] px-4 py-3 text-sm font-semibold text-[#A66D64] transition hover:bg-[#E9C9C2]"
                  >
                    Quitar de mi colección
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        <ConfirmDialog
          isOpen={selectedName !== null}
          title="Eliminar de mi colección"
          message={`¿Deseas quitar a ${selectedName ?? ''} de tus favoritos?`}
          onConfirm={confirmRemoval}
          onCancel={() => setSelectedName(null)}
        />

      </section>
    </main>
  )
}

export default Favorites
