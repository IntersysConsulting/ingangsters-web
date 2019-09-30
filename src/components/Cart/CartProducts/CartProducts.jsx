import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { API } from "../../../config";
import Loading from "../../UI/Loading/Loading";
import { deleteProductFromCart } from "../ProductsManager";
import { uploadAndUpdateCart } from "../../../actions/creators/cart";

const loadCartData = async (currentCart, setLoading, setCartData) => {
  var arrayIds = [];
  for (var i = 0; i < currentCart.length; i++) {
    arrayIds.push(currentCart[i]._id);
  }

  try {
    const body = JSON.stringify({ _ids: arrayIds });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    await axios
      .post(`${API}/cart/summary`, body, config)
      .then(response => {
        setCartData(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};

const CartProducts = ({ cartItems, total, uploadAndUpdateCart }) => {
  const [isLoading, setLoading] = useState(true);
  const [cartData, setCartData] = useState([]);

  const currentCart = JSON.parse(localStorage.getItem("cart"));

  if (isLoading) {
    if (currentCart) {
      loadCartData(currentCart, setLoading, setCartData);
    } else {
      setLoading(false);
    }

    return (
      <React.Fragment>
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      </React.Fragment>
    );
  } else {
    if (currentCart) {
      for (var i = 0; i < currentCart.length; i++) {
        var actualItemData = cartData[currentCart[i]["_id"]];
        if (actualItemData) {
          currentCart[i]["image"] = actualItemData.image;
          currentCart[i]["name"] = actualItemData.name;
          currentCart[i]["stock"] = actualItemData.stock;
        } else {
          deleteProductFromCart(currentCart[i]["_id"], uploadAndUpdateCart);
        }
      }
    }

    return currentCart && currentCart.length > 0 ? (
      <div className="row">
        {currentCart.map((singleItem, i) => (
          <div key={i} className="col-12 pb-1 pt-3">
            <SingleProduct data={singleItem} />
          </div>
        ))}
        <div className="col-12">
          <div className="d-flex justify-content-end pt-3 pr-3">
            <h5>Total: ${total / 100}</h5>
          </div>
        </div>
        {/* <div className="col-6 offset-6 pt-3"># Items: {cartItems}</div> */}
        <div className="col-12">
          <div className="row d-flex justify-content-center py-4">
            <Link to="/checkout">
              <button className="btn-lg btn-intersys btn-block">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    ) : (
      <div className="row">
        <div className="col-12 text-center pt-5">
          <h4>No products in cart</h4>
        </div>
        <div className="col-12">
          <div className="row d-flex justify-content-center py-3">
            <Link to="/">
              <button className="btn-lg btn-intersys btn-block">
                Shop Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  total: state.cart.total
});

export default connect(
  mapStateToProps,
  { uploadAndUpdateCart }
)(CartProducts);
