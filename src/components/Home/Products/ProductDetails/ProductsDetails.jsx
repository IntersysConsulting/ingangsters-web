import React, { useState } from "react";
import NavBar from "../../../NavBars/GeneralNavBar/NavBar";
import axios from "axios";
import { connect } from "react-redux";
import { API } from "../../../../config";
import { addProductToCart } from "../../../Cart/ProductsManager";
import { uploadAndUpdateCart } from "../../../../actions/creators/cart";
import Loading from "../../../UI/Loading/Loading";

import "./ProductDetails.css";

const loadProductData = async (productId, setProductData, setLoading) => {
  try {
    const body = JSON.stringify({ _id: productId });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    await axios
      .post(`${API}/products/single`, body, config)
      .then(response => {
        setProductData(response.data);
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

const ProductDetails = ({ match, uploadAndUpdateCart }) => {
  const productId = match.params.id;
  const [productData, setProductData] = useState({});
  const [isLoading, setLoading] = useState(true);

  if (isLoading) {
    loadProductData(productId, setProductData, setLoading);
    return (
      <React.Fragment>
        <NavBar />
        <div className="offset-5 col-2">
          <Loading />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <NavBar />
        <div className="container mt-5">
          <div className="col-12 product-container">
            <div className="row py-4">
              <div className="col-12 col-sm-12 col-md-5 col-lg-5 my-auto text-center">
                <img
                  className="img-fluid size-image"
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
              <div className="col-6 offset-3 col-sm-6 offset-sm3 col-md-5 offset-md-7 pb-4">
                <button
                  className="btn-lg btn-intersys btn-block"
                  onClick={() => {
                    addProductToCart(
                      productData,
                      productId,
                      uploadAndUpdateCart
                    );
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { uploadAndUpdateCart }
)(ProductDetails);
