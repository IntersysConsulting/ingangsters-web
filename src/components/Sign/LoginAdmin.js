import React, { useState } from "react";
import SimpleNavBar from "../NavBars/SimpleNavBar/SimpleNavBar";
import { Redirect, Link } from "react-router-dom";
import "./Sign.css";
import "../../css/colors.css";
import { FaEye } from "react-icons/fa";
import { connect } from "react-redux";
import { adminLogin } from "../../actions/creators/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginAdmin = ({ adminLogin, isAuthenticated }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async values => {
    adminLogin(values.email, values.password);
  };

  if (isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }

  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  const loginFormSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email")
      .trim(),
    password: Yup.string()
      .required("Password is required")
      .trim()
  });

  const adminLoginForm = () => (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={loginFormSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, isValid, touched, values, handleChange, handleSubmit }) => (
        <Form className="mt-4" name="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-muted">Email</label>
            <Field
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="email"
              value={values.email}
              className={`form-control ${
                touched.email && errors.email ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              component="div"
              name="email"
              className="invalid-feedback"
            />
          </div>

          <div className="form-group">
            <label className="text-muted">Password</label>
            <div className="row">
              <div className="col-10 col-sm-10 col-md-11 col-lg-11 pr-0">
                <Field
                  name="password"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  value={values.password}
                  className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="invalid-feedback"
                />
              </div>
              <div className="col-1 text-center icon" onClick={toggleShow}>
                <FaEye size={32} id="adminlogin-eye-icon" />
              </div>
            </div>
            <p className="link my-4">Forgot password</p>
            <div className="mb-4 text-center">
              <button
                type="submit"
                disabled={!isValid}
                className="btn btn-intersys btn-block my-3"
              >
                Login
              </button>
              <Link className="link" to="/signup">
                Create an account
              </Link>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );

  return (
    <div>
      <SimpleNavBar />
      <div className="container mt-5">
        <div className="row sign-form">
          <div className="col-12">
            <h2 className="form-title pb-3 mb-4">Admin's Login</h2>
            {adminLoginForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { adminLogin }
)(LoginAdmin);
