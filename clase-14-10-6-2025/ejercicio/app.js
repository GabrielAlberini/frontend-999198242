// form elements
const form = document.getElementById("form")
const input = document.getElementById("input")
const select = document.getElementById("select")
const result = document.getElementById("result")

// text
const pMetros = document.getElementById("pMetros")
const pKilometros = document.getElementById("pKilometros")
const pCentimetros = document.getElementById("pCentimetros")
const pMilimetros = document.getElementById("pMilimetros")

// el evento -> que es lo que el usuario va a hacer
// callback -> que es lo que voy a hacer cuando envio el formulario
form.addEventListener("submit", function (evento) {
  evento.preventDefault()

  const inputValue = parseInt(input.value)
  const selectValue = select.value

  if (selectValue === "metros") {
    pMetros.textContent = `Metros: ${inputValue}m.`
    pKilometros.textContent = `Kilometros: ${inputValue / 1000}km.`
    pCentimetros.textContent = `Centimetros: ${inputValue * 100}cm.`
    pMilimetros.textContent = `Milimetros: ${inputValue * 1000}mm.`
  } else if (selectValue === "kilometros") {
    pMetros.textContent = `Metros: ${inputValue * 1000}m.`;
    pKilometros.textContent = `Kilómetros: ${inputValue}km.`;
    pCentimetros.textContent = `Centímetros: ${inputValue * 100000}cm.`;
    pMilimetros.textContent = `Milímetros: ${inputValue * 1000000}mm.`;
  }
})