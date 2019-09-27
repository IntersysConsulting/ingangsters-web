import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { API } from "../../config";
import Loading from "../UI/Loading/Loading";
import { getUser } from "../../actions/creators/auth";
import { uploadAndUpdateCart } from "../../actions/creators/cart";

const getCart = async setLoading => {
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
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("cart", JSON.stringify(response.data.data));
          setLoading(false);
        }
      });
    } catch (err) {
      console.log(err.response);
      localStorage.removeItem("cart");
      setLoading(false);
    }
  }
  setLoading(false);
};

const UserRoute = ({ component: Component, getUser, uploadAndUpdateCart }) => {
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
    uploadAndUpdateCart();
    return <Route render={props => <Component {...props} />} />;
  }
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getUser, uploadAndUpdateCart }
)(UserRoute);
