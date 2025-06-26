// declarar elementos del dom
// agregamos un $ cuando la variable almacena un elemento html
const $agregar = document.querySelector("#agregar")
const $borrar = document.querySelector("#borrar")
const $nombre = document.querySelector("input")
const $listaDeVecinos = document.querySelector("ul")
const $parrafo = document.querySelector("p")

// hoisting
// function listarVecinos() {} -> funcion nombrada
// variable global -> una variable a la cual tiene acceso todo el código
const vecinos = JSON.parse(localStorage.getItem("vecinos")) || []

// declaraciones de funciones
const listarVecinos = () => {
  $listaDeVecinos.innerHTML = ""

  console.log(vecinos.length)

  if (vecinos.length === 0) {
    mostrarTexto("text", "success", "No hay vecinos para mostrar")
  } else {
    vecinos.forEach((vecino) => {
      $listaDeVecinos.innerHTML += `<li>${vecino}</li>`
    })
  }
}

const agregarVecino = () => {
  const valorNombre = $nombre.value
  $parrafo.textContent = ""

  // validaciones
  if (!valorNombre) {
    console.error("Debes agregar un nombre valido")
    mostrarTexto("error", "success", "Debes agregar un nombre valido")
    return
  }

  if (valorNombre.length < 3) {
    mostrarTexto("error", "success", "El nombre debe contener al menos 3 caracteres")
    return
  }

  vecinos.push(valorNombre)
  const jsonArrayDeVecinos = JSON.stringify(vecinos)
  localStorage.setItem("vecinos", jsonArrayDeVecinos)
  $nombre.value = ""
  listarVecinos()
  mostrarTexto("success", "error", "Vecino agregado con éxito!")
}

const borrarVecino = () => {
  const valorNombre = $nombre.value

  if (!valorNombre) {
    mostrarTexto("error", "success", "Debes agregar un nombre valido.")
    return
  }

  // remove me borra la data de la clave pasada
  // localStorage.removeItem("vecinos")
  const vecinoEncotrado = vecinos.find(((vecino) => vecino === valorNombre))

  if (!vecinoEncotrado) {
    mostrarTexto("error", "success", "No se encuentra el vecino a borrar.")
    return
  }

  const indice = vecinos.indexOf(vecinoEncotrado)
  vecinos.splice(indice, 1)

  localStorage.setItem("vecinos", JSON.stringify(vecinos))
  $nombre.value = ""
  mostrarTexto("success", "error", "Vecino borrado con éxito 😎")
  listarVecinos()
}

const mostrarTexto = (claseAgregada, claseQuitada, texto) => {
  // validar todos los usos de mostrar el texto
  // cuando se muestre el texto 'No hay vecinos para mostrar' sea negro
  $parrafo.classList.add(claseAgregada)
  $parrafo.classList.remove(claseQuitada)
  $parrafo.textContent = texto
}

// escucha eventos 
$agregar.addEventListener("click", agregarVecino)
$borrar.addEventListener("click", borrarVecino)

// invocación de funciones
listarVecinos()

// CRUD -> create - read - update - delete