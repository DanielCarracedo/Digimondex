function Loading() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white"
      role="status"
      aria-live="polite"
    >
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />

      <h2 className="mt-5 text-xl font-bold">
        Cargando información...
      </h2>

      <p className="mt-2 text-slate-400">
        Estamos consultando los datos de DigiDex.
      </p>
    </main>
  )
}

export default Loading
