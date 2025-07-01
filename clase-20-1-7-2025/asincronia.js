const $listOfCharacters = document.querySelector("ul")

const traerDatosDeServicioExterno = async () => {
  const respuesta = await fetch("https://rickandmortyapi.com/api/character")
  const data = await respuesta.json()

  const characters = data.results

  characters.forEach((character) => {
    $listOfCharacters.innerHTML +=
      `<div>
        <img src="${character.image}" alt="imagen de ${character.name}">
        <h2>${character.name}</h2>
      </div>`
  })
}

traerDatosDeServicioExterno()