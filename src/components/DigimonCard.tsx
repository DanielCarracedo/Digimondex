
import { Link } from 'react-router-dom'
import type { Digimon } from '../types/digimon'

interface DigimonCardProps {
  digimon: Digimon
}

function DigimonCard({ digimon }: DigimonCardProps) {
  return (
    <Link
      to={`/digimon/${encodeURIComponent(digimon.name)}`}
      className="group overflow-hidden rounded-xl border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
    >
      <div className="flex h-52 items-center justify-center bg-slate-800 p-4">
        <img
          src={digimon.img}
          alt={`Imagen de ${digimon.name}`}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold text-white">
          {digimon.name}
        </h2>

        <p className="mt-2 text-sm text-cyan-400">
          Nivel: {digimon.level}
        </p>
      </div>
    </Link>
  )
}

export default DigimonCard
