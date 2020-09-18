import React, { useState } from "react";
import Textbox from "../common/textbox";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("sandeepsk1024@gmail.com");
  const [password, setPassword] = useState("dhakal");

  const formRef = React.createRef();

  return (
    <form onSubmit={e => e.preventDefault()} ref={formRef}>
      <Textbox required="required" val={email} onChange={setEmail} />
      <Textbox
        required="required"
        type="password"
        val={password}
        onChange={setPassword}
      />

      <div>
        <button
          type="button"
          onClick={() => {
            formRef.current.reportValidity();
            onLogin(email, password);
          }}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
