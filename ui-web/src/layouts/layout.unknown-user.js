import React from "react";
import Header from "../components/common/header";
const UnknownUserLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default UnknownUserLayout;
