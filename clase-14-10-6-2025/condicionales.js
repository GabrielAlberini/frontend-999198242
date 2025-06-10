// estructura de control
// un fragmento de código que ejecuta instrucciones automatizadas

// if -> "si pasa tal cosa, hago lo siguiente"
// si llueve salgo con paraguas

// palabra reservada
// condición -> tiene que ser verdadera
// el código a ejecutar
// if () { }

// dejar entrar a las personas mayores o igual a 18
// si tiene 17 comunicarles que deben traer un permiso de los padres

const formulario = document.getElementById("formulario")
const input = document.getElementById("edad")
const mensaje = document.getElementById("mensaje")

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault()

  const edad = parseInt(input.value)

  // isNaN = Esto no es un numero?
  // texto = Verdadero
  // numero = Falso
  const edadFalsa = isNaN(edad)

  let text = ""

  if (edadFalsa === true) {
    text = "Debes ingresar una edad valida."
  } else if (edad >= 18) {
    text = "Puedes pasar :)"
  } else if (edad === 17) {
    text = "Necesitas un permiso de tus padres."
  } else if (edad === 0) {
    text = "Debes ingresar una edad."
  } else if (edad < 10) {
    text = "Tienes menos de 10 años, no hay forma de que ingreses"
  } else {
    text = "No puedes pasar."
  }

  mensaje.textContent = text

  // reasignación de datos
  input.value = 0
})