import React from "react";
//import { logoutModal } from "../../utils/auth";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/creators/auth";

const LogoutComponent = () => {
  login("", "");
  //logoutModal();
  return <Redirect to="/" />;
};

export default LogoutComponent;
