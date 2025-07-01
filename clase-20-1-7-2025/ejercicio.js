// Da la posibilidad de agregar data para mostrar un nuevo producto en la ui.
// Simula un carrito

// capturar elementos html
const $form = document.querySelector("form")
const $name = document.querySelector("#name")
const $price = document.querySelector("#price")
const $quantity = document.querySelector("#quantity")
const $listOfProducts = document.querySelector("ul")

const catalog = []

const handleSubmit = (e) => {
  e.preventDefault()

  const nameProduct = $name.value
  const priceProduct = $price.value
  const quantityProduct = $quantity.value

  const newProduct = {
    name: nameProduct,
    price: parseInt(priceProduct),
    quantity: parseInt(quantityProduct)
  }

  catalog.push(newProduct)

  $name.value = ""
  $price.value = ""
  $quantity.value = ""

  $listOfProducts.innerHTML = ""

  // catálogo actualizado
  catalog.forEach((product) => {
    $listOfProducts.innerHTML += `<li>Producto: ${product.name} - Precio: ${product.price} - Cantidad: ${product.quantity}</li>`
  })
}

$form.addEventListener("submit", handleSubmit)

console.log(catalog)