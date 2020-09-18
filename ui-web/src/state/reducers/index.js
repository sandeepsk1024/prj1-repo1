import { combineReducers } from "redux";

import uiReducer from "./reducer.ui";
import ctxReducer from "./reducer.ctx";
import productsReducer from "./reducer.products";

export default combineReducers({
  ui: uiReducer,
  ctx: ctxReducer,
  products: productsReducer
});
