import React, { useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { API } from "../../config";
import Loading from "../UI/Loading/Loading";
import ErrorPage from "../UI/ErrorPage/ErrorPage";

const checkIfAdmin = async (setLoading, setIsAdmin) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const res = await axios.post(`${API}/admin/check`, {}, config);
    setIsAdmin(res.data.isAdmin);
    setLoading(false);
  } catch (err) {
    setIsAdmin(false);
    setLoading(false);
  }
};

const AdminRoute = ({
  component: Component,
  auth: { isAuthenticated },
  ...rest
}) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  if (loading) {
    checkIfAdmin(setLoading, setIsAdmin);
    return (
      <div className="d-flex justify-content-center">
        <Loading />
      </div>
    );
  } else {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated && isAdmin ? <Component {...props} /> : <ErrorPage />
        }
      />
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminRoute);
