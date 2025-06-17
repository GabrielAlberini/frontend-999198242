// Nombre largo
//  Array: ["Ana", "Fernando", "Mariela", "Lucía", "Alejandro", "Pablo"]
//  Usa find para obtener el primer nombre cuya longitud sea mayor a 6 caracteres.

const nombres = ["Ana", "Roberto"]

const nombreEncontrado = nombres.find(function (nombre) {
  if (nombre.trim().length > 6) {
    return nombre
  }
})

// console.log(nombreEncontrado)

// Contiene letra
//  Array: ["sol", "luna", "cielo", "estrella", "mar", "arena"]
//  Encuentra la primera palabra que incluya la letra “a”.


const words = ["sol", "luna", "cielo", "estrella", "mar", "arena"]

const foundWord = words.find(function (word) {
  if (word.includes("a")) {
    return word
  }
})

// console.log(foundWord)

// Número par
//  Array: [3, 7, 8, 13, 22, 31]
//  Devuelve el primer número impar.

const numbers = [3, 7, 13, 22, 31, 2, 4, 6, 8, 9]

const impar = numbers.find(function (number) {
  const validation = number % 2 === 0
  // !validation -> Es correcto que no cumple la validación?
  // validation -> Es correcto que cumple la validación?
  if (!validation) {
    return number
  }
})

// console.log(impar)

// String numérico
//  Array: ["3", "15", "8", "12", "9"]
//  Convierte cada elemento a número y busca el primero que sea menor a 10.

const characters = ["3", "15", "8", "12", "9"]

const foundCharacter = characters.find(function (character) {
  const convertedCharacter = parseInt(character)
  if (convertedCharacter < 10) {
    return character
  }
})

// console.log(parseInt(foundCharacter))


// Email válido
//  Array: ["usuario@hotmail.com", "prueba@gmail.com", "test@yahoo.com", "ejemplo@gmail.com"]
//  Obtén todos los emails que terminen en “@gmail.com”.

const emails = ["usuario@hotmail.com", "prueba@gmail.com", "test@yahoo.com", "ejemplo@gmail.com", "gabialberini733@gmail.com"]

const filteredEmails = emails.filter(function (email) {
  if (email.endsWith("@gmail.com")) {
    return email
  }
})

filteredEmails.forEach(function (email, index) {
  console.log(`El ${index + 1}° email encontrado fue ${email}.`)
})


