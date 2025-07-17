import { Header } from "./Header"
import { Layout } from "./Layout"

const NotFound = () => {
  return (
    <>
      <Layout>
        <div>
          <h2>Parece que esta página no existe.</h2>
          <p>Parece que el enlace que apuntaba aquí no sirve. ¿Quieres probar con una búsqueda?</p>
          <form>
            <input type="text" placeholder="Buscar..." />
          </form>
        </div>
      </Layout>
    </>
  )
}

export { NotFound }