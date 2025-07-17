import { useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Layout } from "../components/Layout"
import { Button } from "../components/Button"

const TextInput = () => {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      id: crypto.randomUUID(),
      name: name
    }

    // enviar a un backend...
    console.log(newUser)
    setName("")
  }

  return (
    <>
      <Layout>
        <form onSubmit={handleSubmit}>
          <h1>Ingrese un alumno a la lista:</h1>
          <p>Valor actualizado del estado: {name}</p>
          <input
            type="text"
            placeholder="Ingrese su nombre aquí:"
            onChange={handleChange}
            value={name}
          />
          <Button text="Enviar..." color="lightblue">
            <i class='bx  bx-send'></i>
          </Button>
          <Button text="Cancelar" color="red">
            <i class='bx  bx-siren-alt'  ></i>
          </Button>
        </form>
      </Layout>
    </>
  )
}

export { TextInput }