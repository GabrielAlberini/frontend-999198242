const nombres = ["Santiago", "María", "Rodrigo"]
// const json = '["Santiago","María","Rodrigo"]'

console.log(nombres, "<- nombres en variable de js")

const jsonNombres = JSON.stringify(nombres)

console.log(jsonNombres, "<- array de nombres convertido a JSON (transformado a un string)")
