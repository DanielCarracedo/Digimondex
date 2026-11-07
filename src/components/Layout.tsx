
import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F0E5]">
      <Navbar />

      <div className="flex-1">
        <Outlet />
      </div>

      <footer className="mt-auto border-t border-[#E2DDD2] bg-[#EEE9DF] px-6 py-9">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Link to="/" className="text-xl font-black text-[#405D78]">
            DigiDex
          </Link>

          <p className="text-center text-sm text-[#81909D]">
            Tu pequeña enciclopedia del Mundo Digital.
          </p>

          <p className="text-xs text-[#9A9D9B]">
            Proyecto académico · 2026
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
