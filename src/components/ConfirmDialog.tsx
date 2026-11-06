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

    if (isOpen && !dialog.open) {
      dialog.showModal()
    }

    if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => {
        event.preventDefault()
        onCancel()
      }}
      className="m-auto w-[90%] max-w-md rounded-xl bg-slate-900 p-6 text-white backdrop:bg-black/70"
    >
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-slate-300">
        {message}
      </p>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-slate-600 px-4 py-2"
        >
          Cancelar
        </button>

        <button
          type="button"
          onClick={onConfirm}
          className="rounded-lg bg-red-500 px-4 py-2 font-bold text-white"
        >
          Sí, eliminar
        </button>
      </div>
    </dialog>
  )
}

export default ConfirmDialog
