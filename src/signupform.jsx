import React from "react";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email format";
      }

      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
  });

  return (
    <div className="container mt-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
