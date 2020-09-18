import actions from "../actions";
export default {
  createThunk_authenticate: (email, password) => {
    return (dispatch, store) => {
      if (email === "sandeepsk1024@gmail.com" && password === "dhakal") {
        dispatch(
          actions.ActionCreators.CTX.createAction_setUser({
            id: 1,
            type: 1,
            name: "Sandeep Khandewale",
            email: "sandeepsk1024@gmail.com"
          })
        );
      }
    };
  }
};
