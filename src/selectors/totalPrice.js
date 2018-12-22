export default function totalPrice(productsInCart) {
  const price = productsInCart.items.reduce((prev, { product, quantity }) => {
    return prev + product.price * quantity;
  }, 0);
  return Number(price).toFixed(2);
}
