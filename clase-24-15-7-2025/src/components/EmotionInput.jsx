import { useState } from "react"

const EmotionInput = () => {
  const [emotion, setEmotion] = useState("")
  const [color, setColor] = useState("")

  const emotionStatus = {
    feliz: "yellow",
    triste: "blue",
    enojado: "red",
    relajado: "green",
    sorprendido: "violet",
  }

  const handleChange = (e) => {
    setEmotion(e.target.value)
    setColor(emotionStatus[e.target.value])
  }

  return (
    <section>
      <h3>El color seleccinado es: {color}</h3>
      <form>
        <select value={emotion} onChange={handleChange}>
          <option value="">Elige una emoción</option>
          <option value="feliz">Feliz</option>
          <option value="triste">Triste</option>
          <option value="enojado">Enojado</option>
          <option value="relajado">Relajado</option>
          <option value="sorprendido">Sorprendido</option>
        </select>
        <button>Enviar</button>
      </form>

      <div className="cont-emotion">
        <p>Hoy me siento {emotion} y eso es como <p className='emotion-color' style={{ backgroundColor: color }}></p></p>
      </div>

    </section>
  )
}

export { EmotionInput }