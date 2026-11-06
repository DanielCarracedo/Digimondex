import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import Home from './pages/Home'
import Explore from './pages/Explore'
import DigimonDetails from './pages/digimonDetails'
import Favorites from './pages/Favorites'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/digimon/:name" element={<DigimonDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
