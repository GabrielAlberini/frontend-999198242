import { useState } from "react"
import { Product } from "./components/Product"

const products = [
  {
    nombre: "Mesa",
    precio: 1300,
    descripcion: "Nueva descripción para la mesa"
  },
  {
    nombre: "Silla",
    precio: 3200,
    descripcion: "Silla super resistente"
  }
]

const Home = () => {
  const [characters, setCharacters] = useState([])

  const fetchingData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character")
      const data = await response.json()
      setCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  fetchingData()

  return (
    <>
      <main>
        <section>
          <h1>Bienvenido a nuestra tienda virtual</h1>
          <h2>Aquí encontraras los mejores precios</h2>
        </section>
        <section className="product-section">
          <h2>Mis productos</h2>

          {
            characters.map((character) => <h3>{character.name}</h3>)
          }

          {/* {
            products.map((product) => <Product product={product} />)
          } */}

          {/* <Product nombre="Mesa" precio={1300} descripcion="Nueva descripción para la mesa" />
          <Product nombre="Silla" precio={3200} descripcion="Silla super resistente" />
          <Product nombre="Celular" precio={3000} descripcion="Celular Xiaomi" /> */}
        </section>
      </main>
    </>
  )
}

export { Home }