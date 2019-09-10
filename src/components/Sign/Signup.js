import React, { useState } from "react";
import SimpleNavBar from "../SimpleNavBar/SimpleNavBar";
import { Redirect, Link } from "react-router-dom";
import "./Sigup.css";
import "../../css/colors.css";
import { FaEye } from "react-icons/fa";
import { connect } from "react-redux";
import { login } from "../../actions/creators/auth";
import { Form, Row, Col } from "react-bootstrap";

const Login = ({ login, isAuthenticated }) => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const { firstName, lastName,phone, email, password,passwordConfirm } = values;

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
      setShowPassword(!showPassword);
  };
  const toggleShowConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
};

  const signUpForm = () => (
    <div className="container mt-5">
      <div className="row login-form">
        <div className="col-12">
          <h2>Sign up</h2>
          <h5>Please fill this form to create an account! </h5>
          <hr />
          <form>
            <div className="form-group">
              <Row>
                <Col>
                  <label className="text-muted">First name</label>
                  <input
                    onChange={handleChange("firstName")}
                    type="text"
                    placeholder="First name"
                    className="form-control"
                    value={firstName}
                  />
                </Col>
                <Col>
                  <label className="text-muted">Last name</label>
                  <input
                    onChange={handleChange("lastName")}
                    type="text"
                    placeholder="Last name"
                    className="form-control"
                    value={lastName}
                  />
                </Col>
              </Row>
            </div>

            <div className="form-group">
              <label className="text-muted">Phone</label>
              <input
                onChange={handleChange("phone")}
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Phone (Optional)"
                className="form-control"
                value={phone}
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
                <div className="col-1 text-center" onClick={toggleShow}>
                  <FaEye size={32} />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="text-muted">Confirm Password</label>
              <div className="row">
                <div className="col-10 col-sm-10 col-md-11 col-lg-11 pr-0">
                  <input
                    onChange={handleChange("passwordConfirm")}
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder="Confirm password"
                    className="form-control"
                    value={passwordConfirm}
                  />
                </div>
                <div className="col-1 text-center" onClick={toggleShowConfirm}>
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
