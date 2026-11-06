
import { Link } from 'react-router-dom'

import { useDigimon } from '../hooks/useDigimon'
import { useFavorites } from '../context/FavoritesContext'

import DigimonCard from '../components/DigimonCard'

function Home() {
  const { digimon, cargar, error } = useDigimon()
  const { favorites } = useFavorites()

  // Tomamos los primeros cuatro Digimon como destacados.
  const featuredDigimon = digimon.slice(0, 4)

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">

      <section>
        <h1 className="text-5xl font-bold text-cyan-400">
          DigiDex
        </h1>

        <p className="mt-4 text-slate-300">
          Tu enciclopedia digital de Digimon.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to="/explore"
            className="rounded-lg bg-cyan-500 px-5 py-3 font-bold text-slate-950"
          >
            Explorar Digimon
          </Link>

          <Link
            to="/favorites"
            className="rounded-lg border border-cyan-400 px-5 py-3 text-cyan-400"
          >
            Mis favoritos
          </Link>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-slate-900 p-6">
          <h2 className="text-slate-400">
            Digimon disponibles
          </h2>

          <p className="mt-2 text-3xl font-bold text-cyan-400">
            {cargar ? '...' : error ? '—' : digimon.length}
          </p>
        </div>

        <div className="rounded-xl bg-slate-900 p-6">
          <h2 className="text-slate-400">
            Mis favoritos
          </h2>

          <p className="mt-2 text-3xl font-bold text-cyan-400">
            {favorites.length}
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          Digimon destacados
        </h2>

        {cargar && (
          <p className="mt-5 text-cyan-400">
            Cargando Digimon...
          </p>
        )}

        {error && (
          <p role="alert" className="mt-5 text-red-400">
            No se pudieron cargar los Digimon.
          </p>
        )}

        {!cargar && !error && (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {featuredDigimon.map((item) => (
              <DigimonCard
                key={item.name}
                digimon={item}
              />
            ))}
          </div>
        )}

        <Link
          to="/explore"
          className="mt-8 inline-block text-cyan-400"
        >
          Ver todos los Digimon →
        </Link>
      </section>

    </main>
  )
}

export default Home
