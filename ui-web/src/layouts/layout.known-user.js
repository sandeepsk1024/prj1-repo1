import React from "react";
import Header from "../components/common/header";
import { navigate } from "gatsby";

const KnownUserLayout = ({ user, onLogout, children }) => {
  if (!user) {
    navigate("/")
  } else {
    return (
      <>
        <Header>
          <button onClick={onLogout}>Logout</button>
        </Header>
        {<h2>Hello {user.name}</h2>}
        {children}
      </>
    );

  }


};

export default KnownUserLayout;
