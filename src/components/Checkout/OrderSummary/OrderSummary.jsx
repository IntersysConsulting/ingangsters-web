import React, { useState } from "react";
import "./OrderSummary.css";
import axios from "axios";
import { API } from "../../../config";
import Loading from "../../UI/Loading/Loading";
import { prettifyCents } from "../../../utils/utils";
import { connect } from "react-redux";
import { deleteProductFromCart } from "../../Cart/ProductsManager";
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
        var cartData = arrayIds.map((_id, i) => {
          var quantity = currentCart[i].quantity;
          return {
            name: response.data.data[_id].name,
            price: response.data.data[_id].price,
            image: response.data.data[_id].image,
            quantity: quantity,
            _id: _id
          };
        });
        console.log(cartData);
        setCartData(cartData);
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

const OrderSummary = ({ total }) => {
  const [isLoading, setLoading] = useState(true);
  const [cartData, setCartData] = useState([]);
  const currentCart = JSON.parse(localStorage.getItem("cart"));

  if (isLoading) {
    loadCartData(currentCart, setLoading, setCartData);
    return <Loading />;
  } else {
    const cartItems = cartData.map((item, index) => (
      <div className="orderSummaryItem" key={index}>
        <div className="productQuantity">{item.quantity}</div>
        <div className="productImage">
          <img src={item.image} alt={item.name} />
        </div>
        <div>
          <p className="productName">{item.name}</p>
          <div className="extra">
            <p
              className="remove"
              onClick={() => {
                deleteProductFromCart(item._id, uploadAndUpdateCart);
                window.location.reload();
              }}
            >
              Remove
            </p>
            <p className="priceTag">{prettifyCents(item.price)}</p>
          </div>
        </div>
      </div>
    ));
    return (
      <React.Fragment>
        <div className="orderSummaryContainer">{cartItems}</div>
        <br />
        <p className="orderSummaryTotal">
          Total: <span>{prettifyCents(total)}</span>
        </p>
      </React.Fragment>
    );
  }
};

function mapStateToProps(state) {
  return { total: state.cart.total };
}

export default connect(
  mapStateToProps,
  {}
)(OrderSummary);
