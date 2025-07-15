// hooks -> anzuelo -> una funcionalidad que nos regala react
import { useState } from "react"
import { Banner } from "../components/Banner"

const Dashboard = () => {
  // los hooks se usan todos dentro del componente
  // useState contiene dos herramientas
  // 1 - un estado con un valor inicial
  // 2 - una funcion para actualizar este valor
  // const [nombre, setNombre] = useState("German")
  const [name, setName] = useState("")

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ name })
    setName("")
  }

  return (
    <main>
      <Banner
        titulo="Dashboard de usario"
        subtitulo="Centro de administración de tu información, donde solo tienes acceso tu mismo."
      />
      <section className="dashboard-content">
        <h2>Valor del input: {name}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su nombre:"
            onChange={(event) => handleName(event)}
            value={name}
          />
          <button>Enviar</button>
        </form>
      </section>
    </main>
  )
}

export { Dashboard }
