export default store => next => action => {
    console.log("before", store.getState());
    console.log("action", action);
    var result = next(action);
    console.log("after", store.getState());
    return result;
  };
  