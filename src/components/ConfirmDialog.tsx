
import { useEffect, useRef } from 'react'

interface ConfirmDialogProps {
  isOpen: boolean
  title: string
  message: string
  onConfirm: () => void
  onCancel: () => void
}

function ConfirmDialog({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel
}: ConfirmDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => {
        event.preventDefault()
        onCancel()
      }}
      className="m-auto w-[90%] max-w-md rounded-3xl border border-[#E5E1D8] bg-[#FFFEFA] p-0 text-[#405D78] shadow-2xl backdrop:bg-[#35485C]/40"
    >
      <div className="p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5E4E0] text-xl text-[#A66D64]">
          !
        </div>

        <h2 className="mt-5 text-2xl font-black">
          {title}
        </h2>

        <p className="mt-3 leading-relaxed text-[#87949C]">
          {message}
        </p>

        <div className="mt-7 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl bg-[#EEF0EF] px-5 py-3 font-semibold text-[#718294] hover:bg-[#E3E8E6]"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="rounded-xl bg-[#E9C9C2] px-5 py-3 font-bold text-[#895A53] hover:bg-[#E0B5AA]"
          >
            Sí, eliminar
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default ConfirmDialog

