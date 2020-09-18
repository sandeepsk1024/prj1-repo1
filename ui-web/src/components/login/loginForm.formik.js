import React from "react";
import { Formik } from "formik";

const LoginForm = ({ onLogin }) => {
  return (
    // <button
    //   onClick={() => {
    //     onLogin("sandeepsk1024@gmail.com", "dhakal");
    //   }}
    // >
    //   Login Mock
    // </button>
    <Formik
      initialValues={{ email: "sandeepsk1024@gmail.com", password: "dhakal" }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email is required";
        } else if (
          !/^[A-Z0-9.-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email format is invalid";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (!/[A-Z]+/g.test(values.password)) {
          errors.password =
            "Password should contain at least one Uppercase letter";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        onLogin(values.email, values.password);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          <div>
            <div>{errors.email && touched.email && errors.email}</div>
            <div>{errors.password && touched.password && errors.password}</div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
