import React, { useState } from "react";
import SimpleNavBar from "../SimpleNavBar/SimpleNavBar";
import { Redirect, Link } from "react-router-dom";
import "./Login.css";
import "../../css/colors.css";
import { FaEye } from "react-icons/fa";
import { connect } from "react-redux";
import { login } from "../../actions/creators/auth";

const Login = ({ login, isAuthenticated }) => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const { email, password } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = async event => {
    event.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

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
                onClick={onSubmit}
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
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
