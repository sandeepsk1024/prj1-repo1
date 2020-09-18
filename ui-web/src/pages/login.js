import React from "react";
import LoginForm from "../components/login/loginForm.formik";
import connector from "../state/connector";
import UnknownUserLayout from "../layouts/layout.unknown-user";
import { navigate } from "gatsby"

const loginPage = ({ state, handlers }) => {
  if (state.ctx.user) {
    navigate('/products')
  } else {
    return (
      <UnknownUserLayout>
        <LoginForm
          onLogin={(email, password) => {
            handlers.ctx.authenticate(email, password);
          }}
        />
      </UnknownUserLayout>
    );
  }  
};

export default connector(loginPage);
