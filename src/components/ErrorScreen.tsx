
interface ErrorScreenProps {
  message?: string
  onRetry?: () => void
}

function ErrorScreen({
  message = 'Ocurrió un error al cargar la información.',
  onRetry
}: ErrorScreenProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-8 text-white">
      <h1 className="text-4xl font-bold text-red-400">
        ¡Ups! Algo salió mal.
      </h1>

      <p role="alert" className="mt-4 text-center text-slate-300">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 rounded-lg bg-cyan-500 px-6 py-3 font-bold text-slate-950"
        >
          Intentar nuevamente
        </button>
      )}
    </main>
  )
}

export default ErrorScreen
