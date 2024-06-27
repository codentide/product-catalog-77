// import { products } from './products.js'
import { toCapitalize } from './helpers/toCapitalize.js'

// Crear nodo html del botón
const createButton = (category) => {
  const button = document.createElement('button')
  button.setAttribute('data-category', category)
  button.className = category === 'all' ? 'categories__button active' : 'categories__button'
  button.textContent = toCapitalize(category)
  return button
}

// Crear botones a partir de categorias y añadir al dom
const displayButtons = (products) => {
  const categories = products.reduce(
    // values es el array que se va a retornar
    // item es cada elemento del array
    (values, item) => {
      // Si values no contiene la categoria del item, la agregamos
      if (!values.includes(item.category)) {
        values.push(item.category)
      }
      // Devolvemos el array con las categorias añadidas
      return values
    },
    ['all']
  )

  categories.forEach((category) => {
    const button = createButton(category)
    document.querySelector('.categories').appendChild(button)
  })
}

export { displayButtons }
