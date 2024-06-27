import { displayProducts } from './javascript/displayProducts.js'
import { displayButtons } from './javascript/displayButtons.js'
import { fetchProducts } from './javascript/fetchProducts.js'
// import { products } from './products.js'

const select = (selector) => document.querySelector(selector)
const selectAll = (selector) => document.querySelectorAll(selector)
const productContainer = select('.products')

window.addEventListener('DOMContentLoaded', async () => {
  const apiProducts = await fetchProducts()

  displayProducts(apiProducts, productContainer)
  // Create and display category buttons
  displayButtons(apiProducts)

  // Select category buttons and add event listeners
  // It's crucial to do this after the buttons are added to the DOM
  const categoryBtns = selectAll('.categories__button')
  categoryBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      displayProducts(
        apiProducts,
        productContainer,
        e.target.dataset.category
      )

      categoryBtns.forEach((btn) => btn.classList.remove('active'))
      e.target.classList.add('active')
    })
  })
})
