import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { API } from "../../config";
import Loading from "../UI/Loading/Loading";
import { getUser } from "../../actions/creators/auth";
import { updateCartStore } from "../../actions/creators/cart";

export const getCart = async setLoading => {
  const token = localStorage.getItem("token");
  if (token) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };

    try {
      await axios.get(`${API}/cart`, config).then(function(response) {
        if (response.status === 200) {
          setLoading(false);
          localStorage.setItem("cart", JSON.stringify(response.data.data));
        }
      });
    } catch (err) {
      setLoading(false);
    }
  }
  setLoading(false);
};

const UserRoute = ({ component: Component, getUser, updateCartStore }) => {
  useEffect(() => {
    getUser();
  }, [getUser]);

  const [loading, setLoading] = useState(true);
  if (loading) {
    getCart(setLoading);
    return (
      <div className="d-flex justify-content-center">
        <Loading />
      </div>
    );
  } else {
    updateCartStore();
    return <Route render={props => <Component {...props} />} />;
  }
};

export default connect(
  null,
  { getUser, updateCartStore }
)(UserRoute);
