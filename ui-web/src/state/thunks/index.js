import ctxThunks from "./thunk.ctx";
import productsThunks from "./thunk.products";

export default {
  CTX: {
    ...ctxThunks
  },
  PRODUCTS: {
    ...productsThunks
  }
};
