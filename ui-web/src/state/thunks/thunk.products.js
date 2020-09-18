import actions from "../actions";

const mockProducts = [
  { id: 1, name: "Monitor", rate: 10000, quality: 1 },
  { id: 2, name: "Case", rate: 3000, quality: 1 },
  { id: 3, name: "Keyboard Mouse Combo", rate: 1500, quality: 1 },
  { id: 4, name: "Speakers 2.1", rate: 1200, quality: 1 },
  { id: 5, name: "RAM", rate: 6000, quality: 1 },
  { id: 6, name: "Motherboard", rate: 5000, quality: 1 },
  { id: 7, name: "SSD", rate: 6000, quality: 1 },
  { id: 8, name: "GFX Card", rate: 10000, quality: 1 },
  { id: 9, name: "Pen Drive", rate: 2000, quality: 1 },
  { id: 10, name: "SMPS", rate: 3000, quality: 1 }
];

export default {
  createThunk_getList: () => {
    return (dispatch, getState) => {
      //utils.ajax.getAllProducts().then(res => {})
      dispatch(
        actions.ActionCreators.PRODUCTS.createAction_setList(mockProducts)
      );
    };
  },
  createThunk_add: () => {
    return (dispatch, getState) => {
      const state = getState();
      //utils.ajax.addProduct(state.products.add).then(res => {})
      dispatch(
        actions.ActionCreators.PRODUCTS.createAction_setList([
          ...mockProducts,
          {
            id: mockProducts[mockProducts.length - 1].id + 1,
            ...state.products.add
          }
        ])
      );
    };
  },
  createThunk_edit: () => {
    return (dispatch, getState) => {
      const state = getState();
      //utils.ajax.editProduct(state.products.edit).then(res => {})
      dispatch(
        actions.ActionCreators.PRODUCTS.createAction_setList([
          ...mockProducts.filter(p => p.id !== state.products.edit.id),
          {
            ...state.products.edit
          }
        ])
      );
    };
  },
  createThunk_delete: () => {
    return (dispatch, getState) => {
      const state = getState();
      //utils.ajax.deleteProduct(productId).then(res => {})
      dispatch(
        actions.ActionCreators.PRODUCTS.createAction_setList(
          mockProducts.filter(p => p.id !== state.products.delete)
        )
      );
    };
  }
};
