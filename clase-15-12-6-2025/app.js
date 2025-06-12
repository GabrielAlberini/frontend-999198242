console.log("Hola desde el archivo de js")

// crear variables
let nombre = "Jimena"
console.log(nombre)

nombre = 32
console.log(nombre)

// variable de tipo constante
const edad = 30
console.log(edad)

// edad = "fideos"

// datos primitivos
// representan unidades de información
// string, number, NaN, undefined, boolean, null

let apellido
console.log(apellido)
apellido = "Alberini"
console.log(apellido)

let hobbie = null

// truthy falsy

const numero = Number("123")
console.log(numero)

const primerNombre = Boolean(null)
console.log(primerNombre)


console.log("---------------------")

// Permitirle el acceso a un usuario logueado

const usuario = prompt("Ingrese su nombre para loguearse")

console.log(usuario, "<- valor del prompt")

if (usuario) {
  console.log("Usuario logueado")
} else {
  console.log("No hay usuario logueado")
}

let prueba
console.log(prueba)

prueba = 1
console.log(prueba)