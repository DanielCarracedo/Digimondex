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
    <main className="min-h-screen bg-slate-950 p-8 text-white">

      <h1 className="text-3xl font-bold text-cyan-400">
        Mis favoritos
      </h1>

      <p className="mt-3 text-slate-400">
        Tienes {favorites.length} Digimon guardados.
      </p>

      {favorites.length === 0 ? (
        <section className="mt-10">

          <p className="text-slate-400">
            Todavía no tienes Digimon favoritos.
          </p>

          <Link
            to="/explore"
            className="mt-4 inline-block text-cyan-400"
          >
            Explorar Digimon
          </Link>

        </section>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {favorites.map((digimon) => (
            <article
              key={digimon.name}
              className="rounded-xl bg-slate-900 p-4"
            >

              <Link to={`/digimon/${encodeURIComponent(digimon.name)}`}>

                <img
                  src={digimon.img}
                  alt={`Imagen de ${digimon.name}`}
                  className="mx-auto h-48 object-contain"
                />

                <h2 className="mt-4 text-xl font-bold">
                  {digimon.name}
                </h2>

                <p className="mt-2 text-cyan-400">
                  Nivel: {digimon.level}
                </p>

              </Link>

              <button
                onClick={() => setSelectedName(digimon.name)}
                className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white"
              >
                Quitar de favoritos
              </button>

            </article>
          ))}

        </div>
      )}

      <ConfirmDialog
        isOpen={selectedName !== null}
        title="Eliminar favorito"
        message={`¿Deseas quitar a ${selectedName ?? ''} de tu lista de favoritos?`}
        onConfirm={confirmRemoval}
        onCancel={() => setSelectedName(null)}
      />

    </main>
  )
}

export default Favorites
