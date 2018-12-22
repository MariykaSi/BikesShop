import { loadCategories } from "../libs/api";

function createModel(loadCategories) {
  return {
    state: {
      list: [],
      loadingStatus: "noLoaded"
    },
    reducers: {
      setList(state, list) {
        state.list = list;
      }
    },
    effects: dispatch => ({
      async loadCategories(payload, rootState) {
        const categories = await loadCategories();
        this.setList(categories);
      }
    })
  };
}

export { createModel };
export default createModel(loadCategories);
