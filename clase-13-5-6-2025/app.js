let nombre = "Miguel"

// console.log("Esto es un mensaje")
// console.warn("Esto es un mensaje")
// console.error("Esto es un mensaje")

// DOM -> documento object model -> html

let titulo = document.getElementById("titulo")
console.log(titulo, "<- etiqueta del titulo")

let text = titulo.textContent
console.log(text)

let boton = document.getElementById("boton")
console.log(boton)

// el addEventListener necesita dos herramientas
// 1 - el evento
// 2 - que hace despues del evento
boton.addEventListener("click", function () {
  console.log("En contacto 8)")
  let body = document.body

  body.style.backgroundColor = "black"
})


// string -> cadena de caracteres
let frase1 = "Hola"
let frase2 = "mundo."

console.log(frase1 + frase2)

let n1 = "gabolino733"
let n2 = "2"

// concatenación
console.log(n1 + n2)

let input = document.getElementById("inputTest")
console.log(typeof input.value)