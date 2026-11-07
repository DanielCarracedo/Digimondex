
import { useState, useEffect } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

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

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)

  const isValid =
    form.name.trim().length >= 2 &&
    validEmail &&
    form.message.trim().length >= 10

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isValid) return

    setToast(
      'Formulario validado correctamente. Esta versión todavía no envía correos.'
    )

    setForm({ name: '', email: '', message: '' })
  }

  useEffect(() => {
    if (!toast) return

    const timer = setTimeout(() => setToast(null), 4000)

    return () => clearTimeout(timer)
  }, [toast])

  return (
    <main className="min-h-screen bg-[#F5F0E5] px-6 py-12">
      <section className="mx-auto grid max-w-6xl gap-8 md:grid-cols-5">

        <div className="rounded-[2rem] bg-[#DCEAF1] p-8 md:col-span-2 md:p-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#718FA6]">
            Communication terminal
          </span>

          <h1 className="mt-5 text-4xl font-black text-[#405D78]">
            Contacto
          </h1>

          <p className="mt-5 leading-relaxed text-[#62788B]">
            ¿Tienes alguna sugerencia, pregunta o idea para mejorar
            nuestra enciclopedia digital?
          </p>

          <div className="mt-10 rounded-2xl border border-white/80 bg-white/50 p-5">
            <p className="text-sm font-bold text-[#405D78]">
              TRANSMISIÓN DE DATOS
            </p>

            <p className="mt-2 text-sm text-[#718FA6]">
              Completa el formulario para preparar tu mensaje.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#A9C8B5]" />
              <span className="text-xs font-semibold text-[#668A7B]">
                Sistema disponible
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#E5E1D8] bg-white p-8 shadow-sm md:col-span-3 md:p-10">
          <h2 className="text-2xl font-bold text-[#405D78]">
            Envíanos un mensaje
          </h2>

          <p className="mt-2 text-sm text-[#87949C]">
            Todos los campos son obligatorios.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#52677B]">
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
                className="w-full rounded-xl border border-[#E1E5E5] bg-[#F8FAF9] p-4 text-[#405D78] outline-none transition placeholder:text-[#A5B0B5] focus:border-[#A9C9DF] focus:ring-2 focus:ring-[#DCEAF1]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#52677B]">
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
                className="w-full rounded-xl border border-[#E1E5E5] bg-[#F8FAF9] p-4 text-[#405D78] outline-none transition placeholder:text-[#A5B0B5] focus:border-[#A9C9DF] focus:ring-2 focus:ring-[#DCEAF1]"
              />

              {form.email.length > 0 && !validEmail && (
                <p className="mt-2 text-sm text-[#C47D72]">
                  Introduce un correo electrónico válido.
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#52677B]">
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
                className="w-full resize-y rounded-xl border border-[#E1E5E5] bg-[#F8FAF9] p-4 text-[#405D78] outline-none transition placeholder:text-[#A5B0B5] focus:border-[#A9C9DF] focus:ring-2 focus:ring-[#DCEAF1]"
              />

              {form.message.length > 0 && form.message.trim().length < 10 && (
                <p className="mt-2 text-sm text-[#C47D72]">
                  El mensaje debe tener al menos 10 caracteres.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className="w-full rounded-xl bg-[#A9C9DF] p-4 font-bold text-[#405D78] transition hover:bg-[#92B9D3] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Preparar mensaje →
            </button>
          </form>

          {toast && (
            <div
              role="status"
              aria-live="polite"
              className="mt-6 rounded-xl border border-[#C6DCCF] bg-[#EDF5EF] p-4 text-sm text-[#668A7B]"
            >
              {toast}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Contact
