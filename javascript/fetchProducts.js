export const fetchProducts = async () => {
  const res = await fetch(
    'https://fakestoreapi.com/products'
  )
  const products = await res.json()
  return products
}
