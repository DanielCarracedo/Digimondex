import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-6xl font-bold text-cyan-400">
        404
      </h1>

      <p className="mt-4 text-slate-300">
        La página que buscas no fue encontrada.
      </p>

      <Link
        to="/"
        className="mt-6 text-cyan-400 hover:underline"
      >
        Volver al inicio
      </Link>
    </main>
  )
}

export default NotFound
