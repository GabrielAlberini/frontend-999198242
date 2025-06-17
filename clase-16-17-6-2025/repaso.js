const form = document.getElementById("form")
// const letter = document.getElementById("letter").value
const input = document.getElementById("letter")
const result = document.getElementById("result")

const apellidos = ["Rojas", "Garre", "Escobar", "castillo"]

// 1 . tomar del usuario una letra
// 2 . preguntar si mi lista de apellidos contiene apellidos con esa letra y mostrarlos en consola

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const valueLetter = input.value.toLowerCase()
  console.log(valueLetter, "<- letra utilizada para buscar en mi array")

  apellidos.forEach(function (apellido, indice) {
    // boolean -> true
    // const apellidoAMinuscula = apellido.toLowerCase()
    if (apellido.toLowerCase().startsWith(valueLetter)) {
      result.textContent = `El apellido ${apellido} se encuentra en la posición ${indice}.`
    }
  })
})
