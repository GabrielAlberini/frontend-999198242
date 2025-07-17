import { useState } from "react"
import { Layout } from "./Layout"

const ColorInput = () => {
  const [color, setColor] = useState("")
  const [complementary, setComplementary] = useState("")

  const handleChange = (e) => {
    setColor(e.target.value)
    setComplementary(getComplementaryColor(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Quiero pintar mi pared de: " + color)
  }

  const getComplementaryColor = (color) => {
    let com = color.replace('#', '');

    const r = 255 - parseInt(com.slice(0, 2), 16);
    const g = 255 - parseInt(com.slice(2, 4), 16);
    const b = 255 - parseInt(com.slice(4, 6), 16);

    const toHex = (n) => n.toString(16).padStart(2, '0');

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>Ingrese un alumno a la lista:</h1>
        <p>Color seleccionado: {color}</p>
        <p>Color complemetario: {complementary}</p>
        <input
          type="color"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
      <h2>El color seleccionado es:</h2>
      <div className="cont-colors">
        <div style={{ backgroundColor: color }} className="check-color">
        </div>
        <div style={{ backgroundColor: complementary }} className="check-color">
        </div>
      </div>
    </Layout>
  )
}

export { ColorInput }