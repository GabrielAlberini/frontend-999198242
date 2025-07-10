import { useState } from "react"
import { Product } from "../components/Product"
import { Banner } from "../components/Banner"

const Home = () => {
  const [characters, setCharacters] = useState([])

  const fetchingData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character", {
        method: "GET"
      })
      const data = await response.json()
      setCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  fetchingData()

  let titulo = "Bienvenido a nuestra tienda virtual"
  let subtitulo = "Aquí encontraras los mejores precios"

  return (
    <main>
      <Banner titulo={titulo} subtitulo={subtitulo} />
      <section className="product-section">
        <h2>Mis productos</h2>
        {
          characters.map((character) => <h3>{character.name}</h3>)
        }
      </section>
    </main>
  )
}

export { Home }