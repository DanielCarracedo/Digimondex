import { useParams } from 'react-router-dom'

function DigimonDetails() {
  const { name } = useParams<{ name: string }>()

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="text-3xl font-bold text-cyan-400">
        Detalle de {name}
      </h1>

      <p className="mt-4 text-slate-300">
        Aquí mostraremos la información individual del Digimon.
      </p>
    </main>
  )
}

export default DigimonDetails
