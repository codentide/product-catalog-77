/* eslint-disable no-tabs */
const createCard = (product) => {
  // Crear contenedor principal
  const card = document.createElement('article')
  card.classList.add('products__product-card')
  // Añadir template al contenedor principal
  card.innerHTML = `
		<div class="product-card__img-box">
			<img class="product-card__img" src="${product.image}" alt="${product.title}" draggable="false"/>
		</div>
		<div class="product-card__title-box">
			<h3 class="title-box__title">${product.title}</h3>
			<p class="title-box__price">$${product.price}</p>
		</div>
		<div class="product-card__info-box">
			<p class="info-box__overview">${product.description}</p>
		</div>`

  return card
}

// Funcion para mostrar los productos
const displayProducts = (products, container, category = 'all') => {
  // Limpiar contenedor
  container.innerHTML = ''

  let i = 0
  // Recorrer productos
  products.forEach((product) => {
    // Validar categoria
    if (!(product.category === category || category === 'all')) {
      return
    }

    // Crear tarjeta del producto
    const productCard = createCard(product)
    // Añadir animación a la tarjeta
    productCard.style.animation = `show ${0.2 * Math.pow(1.2, i++)}s ease-out forwards`
    // Agregar tarjeta al contenedor
    container.appendChild(productCard)
  })
}

export { displayProducts }
