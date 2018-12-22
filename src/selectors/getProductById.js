export default function getProductById(products, id) {
  return products.find(p => p.id === id);
}
