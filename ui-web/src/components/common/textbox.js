import React from "react";

const Textbox = ({ val, onChange, type, required }) => {
  return (
    <input
      required={required}
      type={type || "text"}
      value={val}
      onChange={e => {
        onChange(e.target.value);
      }}
    />
  );
};

export default Textbox;
