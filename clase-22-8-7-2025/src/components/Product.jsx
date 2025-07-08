const Product = (props) => {
  console.log(props)
  const { nombre, precio, descripcion = "No tiene descripción" } = props.product

  return (
    <div className="product">
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>Descripcion: {descripcion}</p>
      <button>Agregar al carrito</button>
    </div>
  )
}

export { Product }