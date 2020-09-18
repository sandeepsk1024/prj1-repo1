import React from "react";
import Textbox from "../../components/common/textbox";

const detail = ({ product, editable = false, onChange, children }) => {
  return editable ? (
    <>
      <div>id: {product.id}</div>
      <div>
        name:{" "}
        <Textbox
          val={product.name}
          onChange={changedName => {
            onChange({ name: changedName });
          }}
        />
      </div>
      <div>
        rate:{" "}
        <Textbox
          val={product.rate}
          onChange={changedRate => {
            onChange({ rate: changedRate });
          }}
        />
      </div>
      <div>
        quality:{" "}
        <Textbox
          val={product.quality}
          onChange={changedQuality => {
            onChange({ quality: changedQuality });
          }}
        />
      </div>
      <div>{children}</div>
    </>
  ) : (
    <>
      <div>id: {product.id}</div>
      <div>name: {product.name}</div>
      <div>rate: {product.rate}</div>
      <div>quality: {product.quality}</div>
      <div>{children}</div>
    </>
  );
};

export default detail;
