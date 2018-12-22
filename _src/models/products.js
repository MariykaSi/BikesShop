import { loadProducts, loadProduct } from "../libs/api";

function createModel(loadProducts, loadProduct) {
  return {
    state: {
      list: []
    },
    reducers: {
      setList(state, list) {
        state.list = list;
      }
    },
    effects: dispatch => ({
      async loadProducts(queryParams, rootState) {
        const products = await loadProducts(queryParams);

        this.setList(products);
      },
      async loadOne(id, rootState) {
        const product = await loadProduct(id);

        this.setList(product);
      }
    })
  };
}
export { createModel };
export default createModel(loadProducts, loadProduct);
