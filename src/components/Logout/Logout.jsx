import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LOGIN_FAIL } from "../../actions/types/auth";
import Loading from "../UI/Loading/Loading";

const LogoutComponent = ({ logout }) => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    setTimeout(setLoading, 2000, false);
    return <Loading />;
  } else {
    logout();

    return <Redirect to="/" />;
  }
};

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch({ type: LOGIN_FAIL });
  }
});

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutComponent);
