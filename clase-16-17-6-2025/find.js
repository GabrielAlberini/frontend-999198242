const form = document.getElementById("form")
const input = document.getElementById("letter")
const result = document.getElementById("result")

const apellidos = ["Rojas", "Garre", "Escobar", "Castillo"]


form.addEventListener("submit", function (e) {
  e.preventDefault()

  // find -> encontrar algo en particular
  // filter -> filtrar un array mediante una condición
  const text = input.value

  // FIND ES UN BUCLE
  // una CONDICIÓN para encontrar un elemento -> me devuelve lo primero que encuentra
  const apellidoEncotnrado = apellidos.find(function (apellido) {
    if (apellido === text) {
      return apellido
    }
  })

  console.log(apellidoEncotnrado)
})
