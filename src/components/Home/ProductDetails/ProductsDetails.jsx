import React, { useState, useEffect, Fragment } from "react";
import NavBar from "../../NavBar/NavBar";
import Shadow from "../../Shadow/Shadow";
import axios from "axios";
import { connect } from "react-redux";
import { API } from "../../../config";
import { addProductToCart } from "../../../actions/creators/cart";
import "./ProductDetails.css";

const ProductDetails = props => {
  const productId = props.match.params.id;
  const [productData, setProductData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const body = JSON.stringify({ _id: productId });
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };
        console.log(`${API}/products/single`);
        await axios
          .post(`${API}/products/single`, body, config)
          .then(response => {
            setProductData(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [productId]);

  return (
    <div>
      <NavBar />
      <Shadow />
      <div className="container mt-5">
        <div className="col-12 product-container">
          <div className="row py-4">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 my-auto text-center">
              <img
                className="img-fluid"
                alt="product_image"
                src={productData.image}
              ></img>
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-7 px-4">
              <div className="row">
                <div className="col-12 col-sm-12 col-lg-9">
                  <h4>{productData.name}</h4>
                </div>
                <div className="pt-3 col-12 col-sm-12 col-lg-3">
                  <h5 className="price text-center">
                    ${productData.price / 100}
                  </h5>
                </div>
              </div>
              <div className="row py-3">
                <p>{productData.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <div className="row">
            <div className="col-6 offset-3 col-sm-6 offset-sm3 col-md-5 offset-md-7">
              <button className="btn-lg btn-intersys btn-block">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  addProductToCart() {
    dispatch(addProductToCart());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
