// console
console.log("Gabriel")
console.error("Esto es un error")
console.warn("Esto es una advertencia")

// métodos para arrays
// .find() -> retorna lo primero que se evalue como true

const edades = [1, 19, 20, 21, 6]

const edadEncontrada = edades.find(function (edad) {
  if (edad >= 20) {
    return edad
  }
})

const frutas = ["uva", "melón", "sandia", "pera", "pelón", "pomelo"]

const frutasQueEmpiezanConP = frutas.filter(function (fruta) {
  if (fruta.startsWith("p")) {
    return fruta
  }
})

// console.log(frutasQueEmpiezanConP)

