import { useState, useEffect } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const [toast, setToast] = useState<string | null>(null)

  // Validamos los campos del formulario.
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)

  const isValid =
    form.name.trim().length >= 2 &&
    validEmail &&
    form.message.trim().length >= 10

  // Actualizamos un campo sin modificar los demás.
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isValid) return

    setToast(
      'Formulario validado correctamente. Esta versión todavía no envía correos.'
    )

    setForm({
      name: '',
      email: '',
      message: ''
    })
  }

  // Desaparece la notificación después de unos segundos.
  useEffect(() => {
    if (!toast) return

    const timer = setTimeout(() => {
      setToast(null)
    }, 4000)

    return () => clearTimeout(timer)
  }, [toast])

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <section className="mx-auto max-w-xl">

        <h1 className="text-3xl font-bold text-cyan-400">
          Contacto
        </h1>

        <p className="mt-3 text-slate-400">
          ¿Tienes alguna pregunta o sugerencia?
          Déjanos un mensaje.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block mb-2">
              Nombre
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              minLength={2}
              className="w-full rounded-lg bg-slate-900 p-3 text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">
              Correo electrónico
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              required
              className="w-full rounded-lg bg-slate-900 p-3 text-white"
            />

            {form.email.length > 0 && !validEmail && (
              <p className="mt-2 text-sm text-red-400">
                Introduce un correo electrónico válido.
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">
              Mensaje
            </label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje..."
              required
              minLength={10}
              rows={5}
              className="w-full rounded-lg bg-slate-900 p-3 text-white"
            />

            {form.message.length > 0 && form.message.trim().length < 10 && (
              <p className="mt-2 text-sm text-red-400">
                El mensaje debe tener al menos 10 caracteres.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="w-full rounded-lg bg-cyan-500 p-3 font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Enviar mensaje
          </button>
        </form>

        {toast && (
          <div
            role="status"
            aria-live="polite"
            className="mt-6 rounded-lg bg-slate-800 p-4 text-cyan-400"
          >
            {toast}
          </div>
        )}

      </section>
    </main>
  )
}

export default Contact

