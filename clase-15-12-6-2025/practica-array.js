const carrito = []
console.log(carrito)

carrito.push("PC")
console.log(carrito)

carrito.push("Mesa")
console.log(carrito)

carrito.push("Lapiz")
console.log(carrito)

// iteración -> se puede recorrer
// aplicar un bucle

// callback -> función que se ejecuta cuando pasa algo

console.log("Comienzo del bucle")

carrito.forEach(function (producto) {
  console.log(`Elemento ${producto}`)
})

console.log("Termine el bucle")

const colores = ["rojo", "azul"]

colores.forEach(function (color, indice) {
  console.log(`En la posición ${indice} tengo el color ${color}`)
})

const apellidos = [
  "González",
  "Rodríguez",
  "Pérez",
  "Fernández",
  "López",
  "Martínez",
  "Gómez",
  "Díaz",
  "Sánchez",
  "Romero",
  "Alvarez",
  "Torres",
  "Ramírez",
  "Flores",
  "Acosta",
  "Castro",
  "Ortiz",
  "Silva",
  "Molina",
  "Rivas"
];

// mostrar en la consola, solo aquellos apellidos que comiencen con A
apellidos.forEach(function (apellido, indice) {
  if (apellido.startsWith("A")) {
    console.log(`${apellido} empieza con a y se encuentra en la posición ${indice}.`)
  }
})

const correos = [
  "juan.perez@gmail.com",
  "maria.lopezyahoo.com",
  "carlos.romero@hotmail.com",
];

// console.log("Correos validados:")
// correos.forEach(function (correo) {
//   if (correo.endsWith("@gmail.com")) {
//     console.log(correo)
//   }
// })

correos.forEach(function (correo) {
  if (correo.includes("@")) {

  } else {
    console.error(`${correo} no es un correo valido.`)
  }
})


// -------------------------------------------
const form = document.getElementById("form")
const inputEmail = document.getElementById("inputEmail")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const valueEmail = inputEmail.value

  if (valueEmail.includes("@")) {
    console.log("Es un correo valido")
  } else {
    console.log("No es un correo valido")
  }
})


