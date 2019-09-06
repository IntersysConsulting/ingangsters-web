import React, { useState } from "react";
import SimpleNavBar from "../SimpleNavBar/SimpleNavBar";
import { Redirect, Link } from "react-router-dom";
import {
  signin,
  authenticate,
  isAuthenticated
} from "../../actions/creators/auth";
import "./Login.css";
import "../../css/colors.css";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    redirectToReferrer: false
  });

  const { email, password, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values });
    signin({ email, password }).then(data => {
      authenticate(data, () => {
        setValues({
          ...values
        });
      });
    });
  };

  const redirectUser = () => {
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const toggleShow = () => {
    alert("clicked");
  };

  const signUpForm = () => (
    <div className="container mt-5">
      <div className="row login-form">
        <div className="col-12">
          <h2>Login</h2>
          <hr />
          <form>
            <div className="form-group">
              <label className="text-muted">Email</label>
              <input
                onChange={handleChange("email")}
                type="email"
                placeholder="email"
                className="form-control"
                value={email}
              />
            </div>

            <div className="form-group">
              <label className="text-muted">Password</label>
              <div className="row">
                <div className="col-11">
                  <input
                    onChange={handleChange("password")}
                    type="password"
                    placeholder="password"
                    className="form-control"
                    value={password}
                  />
                </div>
                <div
                  className="col"
                  onClick={() => {
                    toggleShow();
                  }}
                >
                  <FaEye />
                </div>
              </div>
            </div>
            <p className="link">Forgot password</p>
            <div className="mb-4 text-center">
              <button
                onClick={clickSubmit}
                className="btn btn-intersys btn-block my-3"
              >
                Login
              </button>
              <Link className="link" to="/signup">
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <SimpleNavBar />
      {signUpForm()}
      {redirectUser()}
    </div>
  );
};

export default Login;
