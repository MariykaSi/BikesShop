import { loadProducts, loadProduct } from "../libs/api";
function createModel(loadProducts) {
  return {
    state: {
      list: []
    },
    reducers: {
      setList(state, list) {
        state.list = list;
      },
      filterPriceFrom(state, payload) {
        return (state.list = state.list.filter(
          item => item.price >= Number(payload)
        ));
      },
      filterPriceTo(state, payload) {
        const newState = (state.list = state.list.filter(
          item => item.price <= Number(payload)
        ));
        console.log(newState);
      }
    },
    effects: dispatch => ({
      async loadAll(queryParams, rootState) {
        const products = await loadProducts(queryParams);
        this.setList(products);
      },

      async loadOne(id, rootState) {
        const product = await loadProduct(id);
        this.setList([product]);
      }
    })
  };
}

export { createModel };
export default createModel(loadProducts);
