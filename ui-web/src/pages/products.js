import React, { useEffect } from "react";
import connector from "../state/connector";
import KnownUserLayout from "../layouts/layout.known-user";
import Products from "../components/products";
import ProductDetail from "../components/products/detail";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ProductsPage = ({ state, handlers }) => {
  useEffect(() => {
    handlers.products.getList();
  }, []);

  return (
    <KnownUserLayout user={state.ctx.user} onLogout={handlers.ctx.logout}>
      <Products
        startAdd={handlers.products.startAdd}
        cancelAdd={handlers.products.cancelAdd}
        completeAdd={handlers.products.completeAdd}
        startEdit={handlers.products.startEdit}
        cancelEdit={handlers.products.cancelEdit}
        completeEdit={handlers.products.completeEdit}
        startDelete={handlers.products.startDelete}
        cancelDelete={handlers.products.cancelDelete}
        completeDelete={handlers.products.completeDelete}
        onChange={handlers.products.onChange}
        list={state.products.list}
        add={state.products.add}
        edit={state.products.edit}
        deleteId={state.products.delete}
      />

      <Modal
        isOpen={
          state.products.add || state.products.edit || state.products.delete
            ? true
            : false
        }
      >
        {state.products.add && (
          <ProductDetail
            product={state.products.add}
            editable
            onChange={handlers.products.onChange}
          >
            <div>
              <button onClick={handlers.products.cancelAdd}>Cancel</button>
              <button onClick={handlers.products.completeAdd}>Add</button>
            </div>
          </ProductDetail>
        )}
        {state.products.edit && (
          <ProductDetail
            product={state.products.edit}
            editable
            onChange={handlers.products.onChange}
          >
            <div>
              <button onClick={handlers.products.cancelEdit}>Cancel</button>
              <button onClick={handlers.products.completeEdit}>Edit</button>
            </div>
          </ProductDetail>
        )}
        {state.products.delete && (
          <>
            <div>Are you sure?</div>
            <div>
              <button onClick={handlers.products.completeDelete}>Yes</button>
              <button onClick={handlers.products.cancelDelete}>No</button>
            </div>
          </>
        )}
      </Modal>
    </KnownUserLayout>
  );
};

export default connector(ProductsPage);
