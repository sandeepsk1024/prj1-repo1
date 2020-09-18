import React, { useState } from "react";

import Modal from "react-modal";

const BurgerMenu = props => {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setMenuStatus(true);
        }}
      >
        ...
      </button>
      <Modal isOpen={menuStatus}>
        <>
          <button
            onClick={() => {
              setMenuStatus(false);
            }}
          >
            X
          </button>
        </>
      </Modal>
    </>
  );
};

export default BurgerMenu;
