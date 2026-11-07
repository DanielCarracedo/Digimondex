
import { Link } from 'react-router-dom'

import { useDigimon } from '../hooks/useDigimon'
import { useFavorites } from '../context/FavoritesContext'
import DigimonCard from '../components/DigimonCard'

function Home() {
  const { digimon, cargar, error } = useDigimon()
  const { favorites } = useFavorites()

  const featuredDigimon = digimon.slice(0, 4)

  return (
    <main className="min-h-screen bg-[#F5F0E5]">

      {/* Portada principal */}
      <section className="px-6 py-10 sm:py-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#DCEAF1]">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/40" />
          <div className="absolute -bottom-32 right-40 h-80 w-80 rounded-full bg-[#A9C9DF]/40" />

          <div className="relative grid items-center gap-10 p-8 sm:p-12 md:grid-cols-2 md:p-16">

            <div>
              <span className="inline-block rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#718FA6]">
                Digital Monster Encyclopedia
              </span>

              <h1 className="mt-7 text-5xl font-black leading-tight text-[#405D78] sm:text-6xl">
                ¡Una nueva
                <span className="block text-[#789DB8]">
                  aventura!
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#62788B]">
                Explora el Mundo Digital, descubre sus habitantes
                y reúne a tus compañeros favoritos en tu propia colección.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/explore"
                  className="rounded-full bg-[#789DB8] px-7 py-4 font-bold text-white shadow-sm transition hover:-translate-y-1 hover:bg-[#6689A5]"
                >
                  Descubrir Digimon →
                </Link>

                <Link
                  to="/favorites"
                  className="rounded-full border border-[#A6BECE] bg-white/60 px-7 py-4 font-bold text-[#526F87] transition hover:bg-white"
                >
                  Mi colección
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
              <div className="absolute h-64 w-64 rounded-full bg-white/60" />

              <div className="relative w-full rounded-[2rem] border border-white/80 bg-white/50 p-5 shadow-lg shadow-[#718FA6]/10 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-[#D5E1E6] pb-4">
                  <span className="text-xs font-bold tracking-widest text-[#718FA6]">
                    DIGIVICE SYSTEM
                  </span>

                  <span className="flex items-center gap-2 text-xs font-semibold text-[#668A7B]">
                    <span className="h-2 w-2 rounded-full bg-[#A9C8B5]" />
                    ONLINE
                  </span>
                </div>

                <div className="flex flex-col items-center py-10">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-[#A9C9DF] bg-[#EDF4F6] shadow-inner">
                    <span className="text-7xl font-black text-[#789DB8]">
                      D
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl font-black tracking-wider text-[#405D78]">
                    DIGIDEX
                  </h2>

                  <p className="mt-2 text-sm text-[#87949C]">
                    Digital world database
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-[#D5E1E6] pt-4 text-center">
                  <div>
                    <p className="text-xs text-[#9AA5AC]">DATA</p>
                    <p className="mt-1 text-sm font-bold text-[#789DB8]">READY</p>
                  </div>

                  <div>
                    <p className="text-xs text-[#9AA5AC]">DIGIMON</p>
                    <p className="mt-1 text-sm font-bold text-[#B58D43]">ACTIVE</p>
                  </div>

                  <div>
                    <p className="text-xs text-[#9AA5AC]">SYSTEM</p>
                    <p className="mt-1 text-sm font-bold text-[#668A7B]">ONLINE</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 pb-14 sm:grid-cols-2 lg:grid-cols-3">

        <article className="rounded-3xl border border-[#D9E5EA] bg-[#EAF1F4] p-7">
          <p className="text-sm font-bold uppercase tracking-wider text-[#718FA6]">
            Digimon registrados
          </p>

          <p className="mt-3 text-4xl font-black text-[#526F87]">
            {cargar ? '...' : error ? '—' : digimon.length}
          </p>

          <p className="mt-2 text-sm text-[#87949C]">
            Criaturas disponibles para explorar.
          </p>
        </article>

        <article className="rounded-3xl border border-[#E8DFC7] bg-[#F0E7CC] p-7">
          <p className="text-sm font-bold uppercase tracking-wider text-[#A58B53]">
            Mi colección
          </p>

          <p className="mt-3 text-4xl font-black text-[#927746]">
            {favorites.length}
          </p>

          <p className="mt-2 text-sm text-[#A58B70]">
            Compañeros digitales guardados.
          </p>
        </article>

        <article className="rounded-3xl border border-[#D5E3D9] bg-[#E6EFE8] p-7 sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-bold uppercase tracking-wider text-[#668A7B]">
            Mundo Digital
          </p>

          <p className="mt-3 text-4xl font-black text-[#668A7B]">
            ONLINE
          </p>

          <p className="mt-2 text-sm text-[#879D8E]">
            Siempre hay una nueva aventura por descubrir.
          </p>
        </article>

      </section>

      {/* Destacados */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A58B53]">
              Descubre el mundo digital
            </span>

            <h2 className="mt-2 text-3xl font-black text-[#405D78]">
              Digimon destacados
            </h2>

            <p className="mt-3 text-[#87949C]">
              Conoce algunas de las criaturas de nuestra enciclopedia.
            </p>
          </div>

          <Link
            to="/explore"
            className="font-bold text-[#789DB8] transition hover:text-[#405D78]"
          >
            Ver toda la colección →
          </Link>
        </div>

        {cargar && (
          <p className="mt-8 text-[#789DB8]" role="status">
            Cargando Digimon...
          </p>
        )}

        {error && (
          <p className="mt-8 text-[#B97870]" role="alert">
            No se pudieron cargar los Digimon.
          </p>
        )}

        {!cargar && !error && (
          featuredDigimon.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredDigimon.map((item) => (
                <DigimonCard key={item.name} digimon={item} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-[#87949C]">
              No hay Digimon disponibles actualmente.
            </p>
          )
        )}

      </section>
    </main>
  )
}

export default Home
