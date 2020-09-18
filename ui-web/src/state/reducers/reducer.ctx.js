import actions from "../actions";
const { ActionTypes } = actions;
const ctxInitialState = {
  user: null
};

const ctxReducer = (state = ctxInitialState, action) => {
  switch (action.type) {
    case ActionTypes.CTX.SET_USER:
      return {
        ...state,
        user: action.payload
      };

    case ActionTypes.CTX.UNSET_USER:
      return {
        ...state,
        user: null
      };

    default:
      return {
        ...state
      };
  }
};

export default ctxReducer;
