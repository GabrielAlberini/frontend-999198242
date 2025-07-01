const persona1 = {
  nombre: "Lucía",
  apellido: "Gómez",
  edad: 32,
  profesion: "Diseñadora Gráfica",
  nacionalidad: "Argentina",
  hobbies: ["pintar", "viajar", "leer"]
};

const compra = {
  fecha: "2025-07-01",
  comprador: {
    nombre: "María",
    apellido: "Pérez",
    email: "maria.perez@example.com"
  },
  productos: [
    {
      id: "A1",
      nombre: "Auriculares Bluetooth",
      cantidad: 1,
      precioUnitario: 15000
    },
    {
      id: "B2",
      nombre: "Cargador USB-C",
      cantidad: 2,
      precioUnitario: 8000
    },
    {
      id: "B3",
      nombre: "Mouse Pad",
      cantidad: 3,
      precioUnitario: 3000
    }
  ],
  estado: "procesando"
};

// Ingresar a la data de un array

const colores = ["rojo", "verde", "azul", "amarillo", "violeta", "naranja", "negro", "blanco"];
console.log(colores[3])

// Ingresar a la data de un objeto -> notación de puntos
console.log(persona1.hobbies[2]) // leer
console.log(compra.comprador.apellido) // Pérez

// Mostrar en consola los nombres de los producto comprados (formato: "Producto 1 - "nombre del producto")

const productosComprados = compra.productos

productosComprados.forEach((producto, indice) => {
  console.log(`Producto ${indice + 1}° - ${producto.nombre}  - Precio total: $${producto.precioUnitario * producto.cantidad}`)
})
