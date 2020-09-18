import actions from "../actions";
const { ActionTypes } = actions;
const productsInitialState = {
  list: [],
  add: null,
  edit: null,
  delete: null
};

const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case ActionTypes.PRODUCTS.SET_LIST:
      return {
        ...state,
        list: action.payload,
        add: null,
        edit: null,
        delete: null
      };

    case ActionTypes.PRODUCTS.START_ADD:
      return {
        ...state,
        add: {
          name: "",
          rate: 0,
          quality: 1
        },
        edit: null,
        delete: null
      };

    case ActionTypes.PRODUCTS.CANCEL_ADD:
    case ActionTypes.PRODUCTS.CANCEL_EDIT:
    case ActionTypes.PRODUCTS.CANCEL_DELETE:
      return {
        ...state,
        add: null,
        edit: null,
        delete: null
      };

    case ActionTypes.PRODUCTS.START_EDIT:
      return {
        ...state,
        edit: state.list.find(p => p.id === action.payload),
        add: null,
        delete: null
      };

    case ActionTypes.PRODUCTS.START_DELETE:
      return {
        ...state,
        delete: action.payload,
        edit: null,
        add: null
      };

    case ActionTypes.PRODUCTS.ON_CHANGE:
      return {
        ...state,
        add: state.add
          ? {
              ...state.add,
              ...action.payload
            }
          : state.add,
        edit: state.edit
          ? {
              ...state.edit,
              ...action.payload
            }
          : state.edit
      };

    default:
      return {
        ...state
      };
  }
};

export default productsReducer;
