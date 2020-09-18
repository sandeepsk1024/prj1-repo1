import React from "react";

const ProductsList = ({ list, startEdit, startDelete }) => {
  return (
    <table>
      <thead />
      <tbody>
        {list.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.rate}</td>
            <td>{product.quality}</td>
            <td>
              <button
                onClick={() => {
                  startEdit(product.id);
                }}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  startDelete(product.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsList;
