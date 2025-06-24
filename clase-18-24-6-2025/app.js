const agregar = document.querySelector("#agregar")
const borrar = document.querySelector("#borrar")
const nombre = document.querySelector("input")
const listaDeVecinos = document.querySelector("ul")

const colores = ["azul", "amarillo", "rojo"]

colores.push("violeta")

// console.log(colores)

// •El value del localStorage es SIEMPRE un string.
// •Para convertir un string a JSON (por ejemplo, el array de vecinos), usamos JSON.parse(string)
// •Para convertir un JSON a string (y así poder guardarlo en el localStorage) utilizamos JSON.stringify(json)

// // recuperar data de localStorage -> getItem
// console.log(localStorage.getItem("vecino3"))

// // almacenar dato en localStorage -> setItem
// localStorage.setItem("vecino4", "Caramello")

// borrar data del localStorage -> removeItem
// localStorage.removeItem("vecino3")

const vecinos = JSON.parse(localStorage.getItem("vecinos"))

vecinos.forEach((vecino) => {
  listaDeVecinos.innerHTML += `<li>${vecino}</li>`
})

borrar.addEventListener("click", () => {
  const valorNombre = nombre.value
  const vecino = localStorage.getItem(valorNombre)

  if (vecino) {
    console.log("Existe el vecino:", vecino)

    const confirmacionBorrado = confirm("Está seguro de que quieres borrar el vecino?")

    if (confirmacionBorrado) {
      localStorage.removeItem(valorNombre)
      console.log("Borrando vecino...")
    } else {
      console.log("No se quiere borrar el vecino...")
    }
  } else {
    console.log("El vecino no existe")
  }

  nombre.value = ""
})

agregar.addEventListener("click", () => {
  const valorNombre = nombre.value

  if (!valorNombre) {
    console.log("Debes agregar un nombre valido")
    return
  }

  if (valorNombre.length < 3) {
    console.log("El nombre debe tener al menos 3 caracteres")
    return
  }

  // 1 - recuperar el json del localStorage
  const jsonVecinos = localStorage.getItem("vecinos")

  // 2 - parsear el json a un dato manipulable en js
  const arrayDeVecinos = JSON.parse(jsonVecinos)

  // 3 - una vez que es un array pusheo el nuevo dato
  arrayDeVecinos.push(valorNombre)

  // 4 - convierto el array de vecinos actualizados a json (es lo que admite el localstorage)
  const jsonArrayDeVecinos = JSON.stringify(arrayDeVecinos)

  // 5 - guardo para la clave vecinos mi array actualiazado y que solo existe en la ram de mi navegador
  localStorage.setItem("vecinos", jsonArrayDeVecinos)
})