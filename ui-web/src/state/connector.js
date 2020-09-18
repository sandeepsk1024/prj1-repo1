//I am just creating this, but I will be using Redux Hooks
import { connect } from "react-redux";
import actions from "./actions";
import Thunks from "./thunks";
const { ActionCreators } = actions;

const mapStateToProps = state => {
  return {
    state: {
      ui: {
        ...state.ui
      },
      ctx: {
        ...state.ctx
      },
      products: {
        ...state.products
      }
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlers: {
      ui: {
        setWip: () => {
          dispatch(ActionCreators.UI.createAction_setWip());
        },
        unsetWip: () => {
          dispatch(ActionCreators.UI.createAction_unsetWip());
        }
      },
      ctx: {
        authenticate: (username, password) => {
          dispatch(Thunks.CTX.createThunk_authenticate(username, password));
        },
        logout: () => {
          dispatch(ActionCreators.CTX.createAction_unsetUser());
        }
      },
      products: {
        getList: () => {
          dispatch(Thunks.PRODUCTS.createThunk_getList());
        },

        startAdd: () => {
          dispatch(ActionCreators.PRODUCTS.createAction_startAdd());
        },
        cancelAdd: () => {
          dispatch(ActionCreators.PRODUCTS.createAction_cancelAdd());
        },
        completeAdd: () => {
          dispatch(Thunks.PRODUCTS.createThunk_add());
        },

        startEdit: productId => {
          dispatch(ActionCreators.PRODUCTS.createAction_startEdit(productId));
        },
        cancelEdit: () => {
          dispatch(ActionCreators.PRODUCTS.createAction_cancelEdit());
        },
        completeEdit: () => {
          dispatch(Thunks.PRODUCTS.createThunk_edit());
        },

        startDelete: productId => {
          dispatch(ActionCreators.PRODUCTS.createAction_startDelete(productId));
        },
        cancelDelete: () => {
          dispatch(ActionCreators.PRODUCTS.createAction_cancelDelete());
        },
        completeDelete: () => {
          dispatch(Thunks.PRODUCTS.createThunk_delete());
        },

        onChange: change => {
          dispatch(ActionCreators.PRODUCTS.createAction_changeProduct(change));
        }
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
