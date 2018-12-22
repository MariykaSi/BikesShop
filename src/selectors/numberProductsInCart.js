export default function numberProductsInCart(cart) {
  return cart.items.reduce((prev, item) => prev + item.quantity, 0);
}
