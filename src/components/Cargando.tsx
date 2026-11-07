
function Loading() {
  return (
    <main
      className="flex min-h-[65vh] flex-col items-center justify-center bg-[#F5F0E5] px-6 text-center"
      role="status"
      aria-live="polite"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#DCEAF1]">
        <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#B9D0DE] border-t-[#6689A5]" />
      </div>

      <h2 className="mt-6 text-xl font-bold text-[#405D78]">
        Conectando con el Mundo Digital...
      </h2>

      <p className="mt-2 text-sm text-[#87949C]">
        Estamos buscando información de tus Digimon.
      </p>
    </main>
  )
}

export default Loading
