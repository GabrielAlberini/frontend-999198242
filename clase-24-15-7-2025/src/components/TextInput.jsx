import { useState } from "react"

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
    <form onSubmit={handleSubmit}>
      <h1>Ingrese un alumno a la lista:</h1>
      <p>Valor actualizado del estado: {name}</p>
      <input
        type="text"
        placeholder="Ingrese su nombre aquí:"
        onChange={handleChange}
        value={name}
      />
      <button>Enviar</button>
    </form>
  )
}

export { TextInput }