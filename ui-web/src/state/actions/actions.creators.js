import ActionTypes from "./actions.types";

export default {
  UI: {
    createAction_setWip: () => ({
      type: ActionTypes.UI.SET_WIP
    }),
    createAction_unsetWip: () => ({
      type: ActionTypes.UI.UNSET_WIP
    })
  },
  CTX: {
    createAction_setUser: user => ({
      type: ActionTypes.CTX.SET_USER,
      payload: user
    }),
    createAction_unsetUser: () => ({
      type: ActionTypes.CTX.UNSET_USER
    })
  },
  PRODUCTS: {
    createAction_setList: list => ({
      type: ActionTypes.PRODUCTS.SET_LIST,
      payload: list
    }),

    createAction_startAdd: () => ({
      type: ActionTypes.PRODUCTS.START_ADD
    }),
    createAction_cancelAdd: () => ({
      type: ActionTypes.PRODUCTS.CANCEL_ADD
    }),

    createAction_startEdit: productId => ({
      type: ActionTypes.PRODUCTS.START_EDIT,
      payload: productId
    }),
    createAction_cancelEdit: () => ({
      type: ActionTypes.PRODUCTS.CANCEL_EDIT
    }),

    createAction_startDelete: productId => ({
      type: ActionTypes.PRODUCTS.START_DELETE,
      payload: productId
    }),
    createAction_cancelDelete: () => ({
      type: ActionTypes.PRODUCTS.CANCEL_DELETE
    }),

    createAction_changeProduct: change => ({
      type: ActionTypes.PRODUCTS.ON_CHANGE,
      payload: change
    })
  }
};
