const Banner = (props) => {

  // si no viene data mostra estos valores por defecto
  const { titulo = "Sin titulo", subtitulo = "Sin subtitulo" } = props

  return (
    <section className="banner">
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
    </section>
  )
}

export { Banner }