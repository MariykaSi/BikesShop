import { init } from "@rematch/core";
import immerPlugin from "@rematch/immer";
import models from "./models";

const immer = immerPlugin();
const store = init({
  models,
  plugins: [immer]
});

window.store = store;
export default store;
