import React, { useState } from "react";
import SimpleNavBar from "../SimpleNavBar/SimpleNavBar";
import { Redirect } from "react-router-dom";
import {
  signin,
  authenticate,
  isAuthenticated
} from "../../actions/creators/auth";

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

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Login
      </button>
    </form>
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
