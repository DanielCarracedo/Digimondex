
import { Link } from 'react-router-dom'
import type { Digimon } from '../types/digimon'

interface DigimonCardProps {
  digimon: Digimon
}

function DigimonCard({ digimon }: DigimonCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[#E5E1D8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#718294]/10">

      <Link
        to={`/digimon/${encodeURIComponent(digimon.name)}`}
        aria-label={`Ver detalles de ${digimon.name}`}
        className="relative flex h-56 items-center justify-center overflow-hidden bg-[#EAF1F4] p-5"
      >
        <div className="absolute h-36 w-36 rounded-full bg-white/70 transition duration-300 group-hover:scale-125" />

        <img
          src={digimon.img}
          alt={`Imagen de ${digimon.name}`}
          loading="lazy"
          className="relative z-10 h-full w-full object-contain transition duration-300 group-hover:scale-110"
        />

        <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#718294]">
          Ver ficha →
        </span>
      </Link>

      <div className="p-5">
        <h2 className="text-xl font-bold text-[#405D78]">
          {digimon.name}
        </h2>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9AA5AC]">
            Nivel
          </span>

          <span className="rounded-full bg-[#F4EBD5] px-3 py-1 text-sm font-semibold text-[#927746]">
            {digimon.level}
          </span>
        </div>
      </div>
    </article>
  )
}

export default DigimonCard
