import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from 'react'

import type { Digimon } from '../types/digimon'

interface FavoritesContextType {
  favorites: Digimon[]
  addFavorite: (digimon: Digimon) => void
  removeFavorite: (name: string) => void
  toggleFavorite: (digimon: Digimon) => void
  isFavorite: (name: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
)

interface FavoritesProviderProps {
  children: ReactNode
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Digimon[]>(() => {
    try {
      const savedFavorites = localStorage.getItem('digidex-favorites')
      return savedFavorites ? JSON.parse(savedFavorites) as Digimon[] : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('digidex-favorites', JSON.stringify(favorites))
  }, [favorites])

  function addFavorite(digimon: Digimon) {
    setFavorites((previous) => {
      if (previous.some((item) => item.name === digimon.name)) {
        return previous
      }

      return [...previous, digimon]
    })
  }

  function removeFavorite(name: string) {
    setFavorites((previous) =>
      previous.filter((item) => item.name !== name)
    )
  }

  function isFavorite(name: string) {
    return favorites.some((item) => item.name === name)
  }

  function toggleFavorite(digimon: Digimon) {
    if (isFavorite(digimon.name)) {
      removeFavorite(digimon.name)
    } else {
      addFavorite(digimon)
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error(
      'useFavorites debe utilizarse dentro de FavoritesProvider'
    )
  }

  return context
}
