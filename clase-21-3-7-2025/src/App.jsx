import "./App.css"

const sumar = () => {
  return 1 + 1
}

const App = () => {

  const estilosDeParrafo = {
    color: "red",
    fontSize: "50px"
  }

  return (
    // fragment <></>
    <>
      <div>
        <form>
          <input type="text" placeholder="Ingrese su nombre" />
          <button>Enviar</button>
        </form>
        <h2 className="titutlo">Su nombre es:</h2>
      </div>
      <p className="p-estilos" style={estilosDeParrafo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, molestiae?</p>
    </>
  )
}

export default App
