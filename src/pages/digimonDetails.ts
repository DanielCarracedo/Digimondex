import { useParams } from 'react-router-dom'

function DigimonDetail() {
  const { name } = useParams<{ name: string }>()

  return (
    <main>
      <h1>Detalle de {name}</h1>
    </main>
  )
}

export default DigimonDetail