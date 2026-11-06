
import { useState } from 'react'
import { useDigimon } from '../hooks/useDigimon'
import DigimonCard from '../components/DigimonCard'

function Explore() {
  const { digimon, cargar, error } = useDigimon()

  const [search, setSearch] = useState('')

  // Filtramos los Digimon según el texto introducido.
  const filteredDigimon = digimon.filter((item) => {
    const searchText = search.toLowerCase().trim()

    return (
      item.name.toLowerCase().includes(searchText) ||
      item.level.toLowerCase().includes(searchText)
    )
  })

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      {/* Encabezado */}
      <section className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-bold text-cyan-400">
          Explorar Digimon
        </h1>

        <p className="mt-3 text-slate-400">
          Descubre los diferentes Digimon y sus niveles.
        </p>

        {/* Buscador */}
        <div className="mt-8">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar por nombre o nivel..."
            aria-label="Buscar Digimon por nombre o nivel"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        {/* Resultados */}
        <div className="mt-6">

          {cargar && (
            <p className="text-center text-cyan-400">
              Cargando Digimon...
            </p>
          )}

          {error && (
            <p role="alert" className="text-center text-red-400">
              Error al cargar los Digimon: {error}
            </p>
          )}

          {!cargar && !error && filteredDigimon.length === 0 && (
            <p className="py-10 text-center text-slate-400">
              No encontramos ningún Digimon con esa búsqueda.
            </p>
          )}

          {!cargar && !error && filteredDigimon.length > 0 && (
            <>
              <p className="mb-5 text-sm text-slate-400">
                Mostrando {filteredDigimon.length} de {digimon.length} Digimon
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredDigimon.map((item) => (
                  <DigimonCard
                    key={`${item.name}-${item.level}`}
                    digimon={item}
                  />
                ))}
              </div>
            </>
          )}

        </div>
      </section>
    </main>
  )
}

export default Explore

