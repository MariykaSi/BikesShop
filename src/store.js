import { init } from "@rematch/core";
import immerPlugin from "@rematch/immer";

import models from "./models";

import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage
} from "./models/cart";
const immer = immerPlugin();

const logger = store => next => action => {
  console.log("dispatching", action);
  action.x = 1;
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = init({
  models,
  plugins: [immer],
  redux: {
    initialState: {
      productsInCart: loadStateFromLocalStorage()
    },
    middlewares: [logger]
  }
});
store.subscribe(() => {
  saveStateToLocalStorage(store);
});
window.store = store;
export default store;
