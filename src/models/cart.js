// {
//   items: [
//     {
//       product: {
//         description: 'The Apple iPhone SE has the footprint and design traits ot the iPhone 5s - from the 4-inch display to the stylish, metal-made body. On the inside, however, is packed the powerful A9 processor of the iPhone 6s, along with Apple\'s latest and best 12MP camera. In other words, this could very well be the best small smartphone in existence. In charge of it all is the latest iOS 9.3 operating system, with support for Apple Pay, AppleID, Night Shift and Apple Health. You may have one in silver, grey, gold, or rose gold for just $399.',
//         price: 399,
//         image: 'http://shop.ivk-service.com/535613-thickbox/apple-iphone-se-32gb-space-grey-mp822rka.jpg',
//         name: 'iPhone SE',
//         categoryId: '5c0b84708b3a460063cdbb1e',
//         userName: 'diana',
//         id: '5c0b862d8b3a460063cdbb2c'
//       },
//       quantity: 3
//     },
//   ]
// }

const cart = {
  state: {
    items: []
  },
  reducers: {
    addProduct(state, product) {
      const item = state.items.find(item => item.product.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          product: product,
          quantity: 1
        });
      }
    },
    removeProduct(state, productId) {
      state.items = state.items.filter(item => item.product.id !== productId);
    },
    setQuantity(state, productId, quantity) {
      if (quantity === 0) {
        state.items = state.items.filter(item => item.product.id !== productId);
      } else {
        const item = state.items.find(item => item.product.id === productId);
        item.quantity = quantity;
      }
    }
  }
};
export default cart;

const STORAGE_KEY = "productsInCart";
export function loadStateFromLocalStorage() {
  let storageData = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(storageData || cart.state);
}

export function saveStateToLocalStorage(store) {
  let cartState = store.getState().productsInCart;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartState));
}
