import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../../../../css/colors.css";
import "./FastLoginModal.css";
import { connect } from "react-redux";
import { login } from "../../../../actions/creators/auth";

const FastLoginModal = ({ login, isAuthenticated }) => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const { email, password } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  if (isAuthenticated) {
    //HIDE
  }
  const onSubmit = async event => {
    event.preventDefault();
    login(email, password);
  };
  return (
    <div className="fastLoginModal">
      <div className="LoginModalContent">
        <form>
          <div className="form-group-modal">
            <input
              onChange={handleChange("email")}
              type="email"
              placeholder="  Email"
              className="form-control-modal"
              value={email}
            />
          </div>
          <div className="form-group-modal">
            <input
              onChange={handleChange("password")}
              type={"password"}
              placeholder="  Password"
              className="form-control-modal"
              value={password}
            />
          </div>
        </form>
        <Button onClick={onSubmit} className="fastLoginButtonModal">
          Login
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(FastLoginModal);
