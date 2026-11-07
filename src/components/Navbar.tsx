
import { Link, NavLink } from 'react-router-dom'

const navigation = [
  { to: '/', label: 'Inicio' },
  { to: '/explore', label: 'Enciclopedia' },
  { to: '/favorites', label: 'Mi colección' },
  { to: '/contact', label: 'Contacto' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#DCE3E5] bg-[#F9F6EF]/95 shadow-sm backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4"
        aria-label="Navegación principal"
      >
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#A9C9DF] text-xl font-black text-[#405D78] shadow-sm">
            D
          </span>
          <span className="text-2xl font-black tracking-tight text-[#405D78]">
            DigiDex
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-[#DCEAF1] text-[#405D78]'
                    : 'text-[#718294] hover:bg-[#EEE9DF] hover:text-[#405D78]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
