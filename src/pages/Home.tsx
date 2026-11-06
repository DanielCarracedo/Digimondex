import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-5xl font-bold text-cyan-400">
        DigiDex
      </h1>

      <p className="mt-4 text-slate-300">
        Explora el mundo de los Digimon.
      </p>

      <Link
        to="/explore"
        className="mt-8 rounded-lg bg-cyan-500 px-6 py-3 font-bold text-slate-950"
      >
        Explorar Digimon
      </Link>
    </main>
  )
}

export default Home
