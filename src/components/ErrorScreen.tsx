
interface ErrorScreenProps {
  message?: string
  onRetry?: () => void
}

function ErrorScreen({
  message = 'Ocurrió un error al cargar la información.',
  onRetry
}: ErrorScreenProps) {
  return (
    <main className="flex min-h-[65vh] flex-col items-center justify-center bg-[#F5F0E5] px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#F5E4E0] text-3xl text-[#A66D64]">
        !
      </div>

      <h1 className="mt-6 text-3xl font-black text-[#405D78]">
        ¡Ups! Se perdió la conexión.
      </h1>

      <p role="alert" className="mt-3 max-w-lg text-[#87949C]">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-7 rounded-xl bg-[#A9C9DF] px-6 py-3 font-bold text-[#405D78] transition hover:bg-[#92B9D3]"
        >
          Intentar nuevamente
        </button>
      )}
    </main>
  )
}

export default ErrorScreen
