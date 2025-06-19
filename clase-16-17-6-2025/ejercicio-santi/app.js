//suma de elementos
const numeros = [];
const form = document.getElementById("form");
const inputNum = document.getElementById("input");
const parrafoNum = document.getElementById("result");
let suma = 0;

console.log(numeros, "array")

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let numInput = parseInt(inputNum.value);
  if (numInput) {
    numeros.push(numInput);
    numeros.forEach(function (numero) {
      suma += numero;
    });
    console.log(numeros, "array")

    console.log(suma);
    suma = 0
    form.reset();
  }
})
