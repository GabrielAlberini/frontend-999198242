const alumnos = ["Alberini", "Enriquez", "Manrresa", "Cafferata", "Astradas"]

alumnos.forEach((alumno, indice) => {
  console.log(`${indice + 1}° ${alumno}`)
})

const datosPersonaUno = ["Gabriel", "Alberini", 31, "Arandela", "Peperina", "Andar en bicicleta", "kj2j3nfn444"]

datosPersonaUno.forEach((dato) => {
  console.log(dato)
})

console.log(datosPersonaUno)

const datosNumericosPerosna1 = [123455678, 31, 28, 1994]

// objetos -> colección de datos -> {}
// array -> es una lista de elementos -> []

// "hola" -> 31 -> true | false -> NaN -> undefined

// pantalla, marca, modelo, cantDeCamaras, tipoDeCargador, procesador, color, ram, generacion

const celularDatos = ["6,67″ AMOLED curvo", "Xiaomi", "Redmi Note14Pro", 3, "USBC", "	MediaTek Helio G100Ultra", "azul oceano", 8]

// propiedades y valores
const celular = {
  pantalla: "6,67″ AMOLED curvo",
  marca: "Xiaomi",
  modelo: "Redmi Note14Pro",
  cantDeCamaras: 3,
  cargador: "USBC",
  procesador: "MediaTek Helio G100Ultra"
}

const estufa = {
  marca: "Everest",
  tipo: "electrica",
  colores: ["gris", "plateado"],
  botones: {
    boton1: "encendido",
    boton2: "vela 1",
    boton3: "vela 2",
    boton4: "girar"
  }
}

const objetosAMudar = [celular, estufa]

// console.log(objetosAMudar)
// objetosAMudar.push(celular)
// console.log(objetosAMudar)
// objetosAMudar.push(estufa)
// console.log(objetosAMudar)

console.log(objetosAMudar)