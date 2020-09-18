import React from "react";
import List from "./list";

const Products = ({ list, startAdd, startEdit, startDelete }) => {
  return (
    <>
      <div>
        <div>
          <List startEdit={startEdit} startDelete={startDelete} list={list} />
        </div>
        <div>
          <button onClick={startAdd}>Add</button>
        </div>
      </div>
    </>
  );
};

export default Products;
