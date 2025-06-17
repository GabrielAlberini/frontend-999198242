const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const numeroEncontrado = numeros.find(function (numero) {
  if (numero > 6) {
    return numero
  }
})

// console.log(numeroEncontrado)

const usernames = [
  "ElGatoVolador",
  "SuperTacoSupremo",
  "NinjaDormilón",
  "CazadorDeGalletas",
  "ProcrastinaTOR2000",
  "SeñorSombra",
  "LadyPanqueque",
  "DoctorSiesta",
  "MisterMiau",
  "LaPizzaErrante",
  "FantasmaBailarín",
  "TigreConCorbata",
  "BolitaDeNieve",
  "RobotDeCafé",
  "SabelotodoAnónimo",
  "UltrasonidoHumano",
  "BrujaSinEscoba",
  "PingüinoSurfista",
  "BarónDelQueso",
  "DragónDormido"
];

const input = "ElGatoVolador"

const usernameValidado = usernames.find(function (username) {
  if (username.includes("B".toLowerCase())) {
    return username
  }
})


console.log(usernameValidado)