
import { useState } from 'react'

import { useDigimon } from '../hooks/useDigimon'
import DigimonCard from '../components/DigimonCard'
import Loading from '../components/Cargando'
import ErrorScreen from '../components/ErrorScreen'

function Explore() {
  const { digimon, cargar, error } = useDigimon()
  const [search, setSearch] = useState('')

  const searchText = search.toLowerCase().trim()

  const filteredDigimon = digimon.filter((item) =>
    item.name.toLowerCase().includes(searchText) ||
    item.level.toLowerCase().includes(searchText)
  )

  if (cargar) return <Loading />

  if (error) {
    return (
      <ErrorScreen
        message={error}
        onRetry={() => window.location.reload()}
      />
    )
  }

  return (
    <main className="min-h-screen bg-[#F5F0E5] px-6 py-12">
      <section className="mx-auto max-w-7xl">

        <div className="overflow-hidden rounded-[2rem] bg-[#DCEAF1] p-8 sm:p-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#718FA6]">
            Digital Monster Encyclopedia
          </span>

          <h1 className="mt-4 text-4xl font-black text-[#405D78] sm:text-5xl">
            Enciclopedia Digimon
          </h1>

          <p className="mt-4 max-w-2xl leading-relaxed text-[#62788B]">
            Busca a tus criaturas favoritas, descubre sus niveles
            y conoce a todos los habitantes del Mundo Digital.
          </p>

          <div className="mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-white bg-white/90 px-5 py-4 shadow-sm">
            <span className="text-xl" aria-hidden="true">⌕</span>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar por nombre o nivel..."
              aria-label="Buscar Digimon por nombre o nivel"
              className="w-full bg-transparent text-[#405D78] outline-none placeholder:text-[#A0ACB5]"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="text-sm font-semibold text-[#718FA6] hover:text-[#405D78]"
                aria-label="Limpiar búsqueda"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-[#405D78]">
              Todos los Digimon
            </h2>

            <p className="mt-1 text-sm text-[#87949C]">
              Explora las criaturas registradas en la enciclopedia.
            </p>
          </div>

          <span className="rounded-full bg-[#E5EDEB] px-4 py-2 text-sm font-semibold text-[#668A7B]">
            {filteredDigimon.length} resultados
          </span>
        </div>

        {filteredDigimon.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-[#E5E1D8] bg-white p-12 text-center">
            <h3 className="text-xl font-bold text-[#405D78]">
              No encontramos ese Digimon
            </h3>

            <p className="mt-3 text-[#87949C]">
              Prueba con otro nombre o nivel.
            </p>
          </div>
        ) : (
          <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDigimon.map((item) => (
              <DigimonCard key={item.name} digimon={item} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Explore
