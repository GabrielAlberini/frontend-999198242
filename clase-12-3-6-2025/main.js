// declarar recursos
// document: referencia al html
// console.log(document)

let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let messageInput = document.getElementById("message")
let form = document.getElementById("form")
let resultSubmit = document.getElementById("resultSubmit")

// estar atentos a cuando se envia el formulario
// enseñarle a la pc que hacer cuando se envia el formualario
// evento: una acción que hace el cliente en el navegador

// submit: es el evento que se ejecuta cuando se envia un formulario
form.addEventListener("submit", function (event) {
  event.preventDefault()
  // concatenar -> unir textos
  // template string -> ``
  resultSubmit.textContent = `Soy ${nameInput.value} mi correo es: ${emailInput.value} y mi mensaje es: ${messageInput.value}.`

  nameInput.value = ""
  emailInput.value = ""
  messageInput.value = ""
})