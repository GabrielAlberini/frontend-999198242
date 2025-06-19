// función -> un fragmento de código reutilizable que siempre representa un acción

// 1° declaración: enseñarle a la pc lo que tiene que hacer
// 2° invocación: ejecutar la función que ya aprendio

// scope -> alcance -> zona privada -> {}

//-------------------------------
const boton = document.getElementById("boton")

// 1° declaración
// parametro -> un dato que puede usar una función dentro de su scope
function saludar(nombre) {
  if (!nombre) {
    console.log("No te puedo saludar :(")
  } else {
    console.log(`Hola ${nombre}`)
  }
}


// 2° invocación:
// argumento -> el valor que toma el parametro
// const nombreCompleto = prompt("Ingrese su nombre completo:")
// saludar(nombreCompleto)

function callback() {
  saludar("Pepe")
}

boton.addEventListener("click", callback)

// -------------------------------------------------

// arrow function -> función flecha

function saludar2(nombre) {
  if (!nombre) {
    console.log("No te puedo saludar :(")
  } else {
    console.log(`Hola ${nombre}`)
  }
}

const saludar3 = (nombre) => {
  if (!nombre) {
    console.log("No te puedo saludar :(")
  } else {
    console.log(`Hola ${nombre}`)
  }
}

saludar3("Miguel")

// sintáxis función flecha
// const saludar, const sumar, const restar
// () => {}

const sumar = (n1, n2) => `El resutado es: ${n1 + n2}`

// invcaciones
const resultado1 = sumar(1, 2)
const resultado2 = sumar(30, 32)
const resultado3 = sumar(100, 1)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)

// aplica busqueda parcial en un array de frutas
const frutas = ["uva", "melón", "arandanos", "sandia", "pera", "pelón", "pomelo"]

// const nombreParcial = prompt("Nombre de fruta:")
// const frutasFiltradas = frutas.filter((fruta) => fruta.includes(nombreParcial))
// console.log(frutasFiltradas)

const frutasConA = frutas.filter((fruta) => fruta.startsWith("a"))
console.log(frutasConA)

const edades = [19, 15, 17, 27, 43, 11, 5]
const mayoresDeEdad = edades.filter((edad) => edad >= 18)
console.log(mayoresDeEdad)

const validadMenosEdad = (edad) => edad < 18
// paso de parametros implicitos
const menoresDeEdad = edades.filter(validadMenosEdad)
console.log(menoresDeEdad)

// cual es la primer edad par
const validarPar = edades.find((edad) => edad % 2 === 0)
console.log(validarPar)

// Encontrar la primera palabra que contiene dos letras "a":
// const palabras = ["lago", "pera", "banana", "pan", "camara"];

// const primerPalabraConDosA = palabras.find((palabra) => {
//   const arrayDeLetras = palabra.split("")

//   let contador = 0
//   arrayDeLetras.forEach((letra) => {
//     if (letra === "a") {
//       contador = contador + 1
//     }
//   })

//   return contador >= 2
// })

// console.log(primerPalabraConDosA)

// Filtrar palabras en mayúsculas:
const palabras = ["CASA", "sol", "PERRO", "luz"];

const palabrasEnMayusculas = palabras.filter((palabra) => palabra === palabra.toUpperCase())

// sol === SOL
// PERRO === PERRO

// console.log(palabrasEnMayusculas)

// CASA === CASA
// sol === SOL
// luz === LUZ

// Mostrar la longitud de la primer palabra que incluya una “o”:
const palabrasNuevas = ["risa", "viento", "cielo", "luna"];

const palabraConO = palabrasNuevas.find((palabra) => palabra.includes("o"))
const longitud = palabraConO.length
console.log(longitud)

const longitud2 = palabrasNuevas.find((palabra) => palabra.includes("o")).length
console.log(longitud2)


