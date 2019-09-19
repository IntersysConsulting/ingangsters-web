import React, { useState } from "react";
import SimpleNavBar from "../SimpleNavBar/SimpleNavBar";
import { Redirect, Link } from "react-router-dom";
import "./Login.css";
import "../../css/colors.css";
import { FaEye } from "react-icons/fa";
import { connect } from "react-redux";
import { adminLogin } from "../../actions/creators/auth";

const LoginAdmin = ({ adminLogin, isAuthenticated }) => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = async event => {
    event.preventDefault();
    adminLogin(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }

  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  const loginForm = () => (
    <div className="container mt-5">
      <div className="row login-form">
        <div className="col-12">
          <h2 className="form-title pb-3 mb-4">Admin's Login</h2>
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
                <div className="col-10 col-sm-10 col-md-11 col-lg-11 pr-0">
                  <input
                    onChange={handleChange("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="form-control"
                    value={password}
                  />
                </div>
                <div className="col-1 text-center icon" onClick={toggleShow}>
                  <FaEye size={32} />
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
      {loginForm()}
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
